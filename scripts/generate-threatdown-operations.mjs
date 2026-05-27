import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const specPathCandidates = [
	path.join(rootDir, 'openapi', 'MalwareBytes.json'),
	path.join(rootDir, 'MalwareBytes.json'),
	path.join(rootDir, '..', 'MalwareBytes.json'),
];
const specPath = specPathCandidates.find((candidate) => fs.existsSync(candidate));
const outputPath = path.join(rootDir, 'nodes', 'Threatdown', 'operations.ts');

if (specPath === undefined) {
	throw new Error(`Could not find MalwareBytes.json in: ${specPathCandidates.join(', ')}`);
}

const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));
const httpMethods = new Set(['get', 'post', 'put', 'patch', 'delete']);
const acronymMap = new Map([
	['api', 'API'],
	['cve', 'CVE'],
	['dns', 'DNS'],
	['edr', 'EDR'],
	['id', 'ID'],
	['ids', 'IDs'],
	['os', 'OS'],
	['rid', 'RID'],
	['sa', 'SA'],
	['sso', 'SSO'],
	['url', 'URL'],
]);
const labelOverrides = new Map([['devicecontrol', 'Device Control']]);

function words(value) {
	return String(value)
		.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
		.split(/[^A-Za-z0-9]+/)
		.filter(Boolean);
}

function humanize(value) {
	if (labelOverrides.has(value)) return labelOverrides.get(value);

	return words(value)
		.map((word) => acronymMap.get(word.toLowerCase()) ?? `${word[0].toUpperCase()}${word.slice(1)}`)
		.join(' ');
}

function sentenceCase(value) {
	return words(value)
		.map((word, index) => {
			const acronym = acronymMap.get(word.toLowerCase());
			if (acronym !== undefined) return acronym;

			const lower = word.toLowerCase();
			return index === 0 ? `${lower[0].toUpperCase()}${lower.slice(1)}` : lower;
		})
		.join(' ');
}

function camelCase(value) {
	const parts = words(value);
	return parts
		.map((word, index) => {
			const lower = word.toLowerCase();
			if (index === 0) return lower;
			return `${lower[0].toUpperCase()}${lower.slice(1)}`;
		})
		.join('');
}

function pascalCase(value) {
	const camel = camelCase(value);
	return `${camel[0].toUpperCase()}${camel.slice(1)}`;
}

function resourceFromPath(pathname) {
	const relativePath = pathname.replace(/^\/nebula\/v1\/?/, '');
	const firstSegment = relativePath.split('/').filter(Boolean)[0] ?? 'account';
	return camelCase(firstSegment);
}

function operationValue(method, pathname) {
	const relativePath = pathname.replace(/^\/nebula\/v1\/?/, '').replace(/\{([^}]+)\}/g, 'by-$1');
	return camelCase(`${method}-${relativePath || 'account'}`);
}

function getAllParameters(pathItem, operation) {
	return [...(pathItem.parameters ?? []), ...(operation.parameters ?? [])];
}

function getBodyExample(parameters, operation) {
	const bodyParameter = parameters.find((parameter) => parameter.in === 'body');
	const example = bodyParameter?.example ?? operation.requestBody?.content?.example?.example;
	if (typeof example !== 'string' || example.trim() === '') return undefined;

	try {
		return JSON.stringify(JSON.parse(example), null, 2);
	} catch {
		return example;
	}
}

function parseBodyExample(bodyExample) {
	if (typeof bodyExample !== 'string' || bodyExample.trim() === '') return undefined;

	try {
		const parsed = JSON.parse(bodyExample);
		return parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : undefined;
	} catch {
		return undefined;
	}
}

function buildParameter(fieldPrefix, location, parameter) {
	return {
		name: parameter.name,
		fieldName: `${fieldPrefix}_${location}_${camelCase(parameter.name)}`,
		required: Boolean(parameter.required),
	};
}

function isSensitiveParameter(name) {
	return /(?:password|secret|token)/i.test(name);
}

function isBodyPrimitive(value) {
	return value === null || ['string', 'number', 'boolean'].includes(typeof value);
}

function bodyParameterType(value) {
	if (typeof value === 'number') return 'number';
	if (typeof value === 'boolean') return 'boolean';
	return 'string';
}

function buildBodyParameterName(pathParts) {
	return camelCase(pathParts.join('-'));
}

function collectBodyParameters(example, fieldPrefix, pathParts = [], parameters = []) {
	for (const [name, value] of Object.entries(example)) {
		const nextPathParts = [...pathParts, name];

		if (isBodyPrimitive(value)) {
			parameters.push({
				name,
				fieldName: `${fieldPrefix}_body_${buildBodyParameterName(nextPathParts)}`,
				path: nextPathParts,
				type: bodyParameterType(value),
				defaultValue: value ?? '',
			});
			continue;
		}

		if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
			collectBodyParameters(value, fieldPrefix, nextPathParts, parameters);
		}
	}

	return parameters;
}

const operations = [];
const resourceOrder = [];
const operationKeys = new Map();

for (const [pathname, pathItem] of Object.entries(spec.paths ?? {})) {
	if (pathname.startsWith('/oauth2/')) continue;

	for (const [method, operation] of Object.entries(pathItem)) {
		if (!httpMethods.has(method)) continue;

		const resource = resourceFromPath(pathname);
		if (!resourceOrder.includes(resource)) resourceOrder.push(resource);

		const baseKey = operationValue(method, pathname);
		const seenCount = operationKeys.get(baseKey) ?? 0;
		operationKeys.set(baseKey, seenCount + 1);
		const value = seenCount === 0 ? baseKey : `${baseKey}${seenCount + 1}`;
		const fieldPrefix = `op${operations.length + 1}`;

		const parameters = getAllParameters(pathItem, operation);
		const hasBodyParameter = parameters.some((parameter) => parameter.in === 'body');
		const bodyExample = getBodyExample(parameters, operation);
		const bodyParameters =
			hasBodyParameter && bodyExample !== undefined
				? collectBodyParameters(parseBodyExample(bodyExample) ?? {}, fieldPrefix)
				: [];
		const pathParameters = parameters
			.filter((parameter) => parameter.in === 'path')
			.map((parameter) => buildParameter(fieldPrefix, 'path', parameter));
		const queryParameters = parameters
			.filter((parameter) => parameter.in === 'query')
			.map((parameter) => buildParameter(fieldPrefix, 'query', parameter));
		const hasAccountIdHeader = parameters.some(
			(parameter) => parameter.in === 'header' && parameter.name.toLowerCase() === 'accountid',
		);

		operations.push({
			value,
			resource,
			name: humanize(operation.summary || operation.operationId || value),
			action: sentenceCase(operation.summary || operation.operationId || value),
			method: method.toUpperCase(),
			path: pathname,
			hasAccountIdHeader,
			pathParameters,
			queryParameters,
			bodyCollectionFieldName: bodyParameters.length > 0 ? `${fieldPrefix}_bodyFields` : undefined,
			bodyParameters,
			bodyFieldName: hasBodyParameter ? `${fieldPrefix}_body` : undefined,
			bodyExample: bodyExample ?? '',
		});
	}
}

const resourceOptions = resourceOrder.map((resource) => ({
	name: humanize(resource),
	value: resource,
}));

const operationOptionProperties = resourceOrder.map((resource) => {
	const resourceOperations = operations
		.filter((operation) => operation.resource === resource)
		.sort((a, b) => a.name.localeCompare(b.name));
	const operationNameCounts = new Map();
	for (const operation of resourceOperations) {
		operationNameCounts.set(operation.name, (operationNameCounts.get(operation.name) ?? 0) + 1);
	}
	return {
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [resource],
			},
		},
		options: resourceOperations.map((operation) => ({
			name:
				operationNameCounts.get(operation.name) > 1
					? `${operation.name} ${humanize(operation.value)}`
					: operation.name,
			value: operation.value,
			action: operation.action,
		})),
		default: resourceOperations[0]?.value ?? '',
	};
});

const operationFields = [];

for (const operation of operations) {
	const displayOptions = {
		show: {
			resource: [operation.resource],
			operation: [operation.value],
		},
	};

	for (const parameter of operation.pathParameters) {
		const field = {
			displayName: humanize(parameter.name),
			name: parameter.fieldName,
			type: 'string',
			default: parameter.name === 'account_id' ? '={{$credentials.accountId}}' : '',
			displayOptions,
			description: `Path parameter: ${humanize(parameter.name)}`,
		};
		if (parameter.required) field.required = true;
		if (isSensitiveParameter(parameter.name)) field.typeOptions = { password: true };
		operationFields.push(field);
	}

	for (const parameter of operation.queryParameters) {
		const field = {
			displayName: humanize(parameter.name),
			name: parameter.fieldName,
			type: 'string',
			default: '',
			displayOptions,
			description: `Query parameter: ${humanize(parameter.name)}`,
		};
		if (parameter.required) field.required = true;
		if (isSensitiveParameter(parameter.name)) field.typeOptions = { password: true };
		operationFields.push(field);
	}

	if (operation.bodyFieldName !== undefined) {
		if (operation.bodyParameters.length > 0) {
			operationFields.push({
				displayName: 'Body Fields',
				name: operation.bodyCollectionFieldName,
				type: 'collection',
				default: {},
				placeholder: 'Add Body Field',
				displayOptions,
				options: operation.bodyParameters.map((parameter) => {
					const field = {
						displayName: humanize(parameter.path.join(' ')),
						name: parameter.fieldName,
						type: parameter.type,
						default: parameter.defaultValue,
						description: `Request body field: ${parameter.path.join('.')}`,
					};
					if (isSensitiveParameter(parameter.path.join('.'))) field.typeOptions = { password: true };
					return field;
				}),
			});
		}

		operationFields.push({
			displayName: operation.bodyParameters.length > 0 ? 'Additional JSON Body' : 'JSON Body',
			name: operation.bodyFieldName,
			type: 'json',
			default: operation.bodyParameters.length > 0 ? '' : (operation.bodyExample ?? ''),
			typeOptions: {
				rows: operation.bodyParameters.length > 0 ? 5 : 10,
			},
			displayOptions,
			description:
				operation.bodyParameters.length > 0
					? 'Additional request body values as JSON, merged with Body Fields'
					: 'Request body as JSON',
		});
	}
}

const serializableOperations = operations.map(({ action, bodyExample, bodyParameters, ...operation }) => {
	const result = {
		...operation,
		bodyParameters: bodyParameters.map(({ defaultValue, ...parameter }) => parameter),
	};
	return result;
});

const source = `import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export type ThreatdownHttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ThreatdownParameter {
\tname: string;
\tfieldName: string;
\trequired: boolean;
}

export type ThreatdownBodyParameterType = 'string' | 'number' | 'boolean';

export interface ThreatdownBodyParameter {
\tname: string;
\tfieldName: string;
\tpath: string[];
\ttype: ThreatdownBodyParameterType;
}

export interface ThreatdownOperation {
\tvalue: string;
\tresource: string;
\tname: string;
\tmethod: ThreatdownHttpMethod;
\tpath: string;
\thasAccountIdHeader: boolean;
\tpathParameters: ThreatdownParameter[];
\tqueryParameters: ThreatdownParameter[];
\tbodyCollectionFieldName?: string;
\tbodyParameters: ThreatdownBodyParameter[];
\tbodyFieldName?: string;
}

export const resourceOptions: INodePropertyOptions[] = ${JSON.stringify(resourceOptions, null, '\t')};

export const operationOptionProperties: INodeProperties[] = ${JSON.stringify(operationOptionProperties, null, '\t')};

export const operationFields: INodeProperties[] = ${JSON.stringify(operationFields, null, '\t')};

export const operations: ThreatdownOperation[] = ${JSON.stringify(serializableOperations, null, '\t')};
`;

fs.writeFileSync(outputPath, source);
console.log(`Generated ${operations.length} operations at ${path.relative(rootDir, outputPath)}`);
