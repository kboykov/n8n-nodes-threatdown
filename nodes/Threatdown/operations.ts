import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export type ThreatdownHttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ThreatdownParameter {
	name: string;
	fieldName: string;
	required: boolean;
}

export interface ThreatdownOperation {
	value: string;
	resource: string;
	name: string;
	method: ThreatdownHttpMethod;
	path: string;
	hasAccountIdHeader: boolean;
	pathParameters: ThreatdownParameter[];
	queryParameters: ThreatdownParameter[];
	bodyFieldName?: string;
}

export const resourceOptions: INodePropertyOptions[] = [
	{
		name: 'Account',
		value: 'account',
	},
	{
		name: 'Accounts',
		value: 'accounts',
	},
	{
		name: 'App Block',
		value: 'appBlock',
	},
	{
		name: 'Assets',
		value: 'assets',
	},
	{
		name: 'Content Filtering',
		value: 'contentFiltering',
	},
	{
		name: 'CVE',
		value: 'cve',
	},
	{
		name: 'Detections',
		value: 'detections',
	},
	{
		name: 'Device Control',
		value: 'devicecontrol',
	},
	{
		name: 'DNS',
		value: 'dns',
	},
	{
		name: 'Endpoints',
		value: 'endpoints',
	},
	{
		name: 'Events',
		value: 'events',
	},
	{
		name: 'Exclusions',
		value: 'exclusions',
	},
	{
		name: 'Flight Recorder',
		value: 'flightRecorder',
	},
	{
		name: 'Grid',
		value: 'grid',
	},
	{
		name: 'Groups',
		value: 'groups',
	},
	{
		name: 'Installation Token',
		value: 'installationToken',
	},
	{
		name: 'Installers',
		value: 'installers',
	},
	{
		name: 'Jobs',
		value: 'jobs',
	},
	{
		name: 'Notifications',
		value: 'notifications',
	},
	{
		name: 'OS Patches',
		value: 'osPatches',
	},
	{
		name: 'Policies',
		value: 'policies',
	},
	{
		name: 'Products',
		value: 'products',
	},
	{
		name: 'Quarantine',
		value: 'quarantine',
	},
	{
		name: 'Reports',
		value: 'reports',
	},
	{
		name: 'RID',
		value: 'rid',
	},
	{
		name: 'SA',
		value: 'sa',
	},
	{
		name: 'Schedules',
		value: 'schedules',
	},
	{
		name: 'Usage',
		value: 'usage',
	},
	{
		name: 'Users',
		value: 'users',
	},
	{
		name: 'Webhooks',
		value: 'webhooks',
	},
];

export const operationOptionProperties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['account'],
			},
		},
		options: [
			{
				name: 'Get Account Details',
				value: 'getAccount',
				action: 'Get account details',
			},
		],
		default: 'getAccount',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['accounts'],
			},
		},
		options: [
			{
				name: 'Get Notifications Preferences',
				value: 'getAccountsByAccountIdPreferencesNotifications',
				action: 'Get notifications preferences',
			},
			{
				name: 'Put Notifications Preferences',
				value: 'putAccountsByAccountIdPreferencesNotifications',
				action: 'Put notifications preferences',
			},
		],
		default: 'getAccountsByAccountIdPreferencesNotifications',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['appBlock'],
			},
		},
		options: [
			{
				name: 'Create App Block Rule',
				value: 'postAppBlockRules',
				action: 'Create app block rule',
			},
			{
				name: 'Create App Block Settings',
				value: 'putAppBlockSettings',
				action: 'Create app block settings',
			},
			{
				name: 'Delete App Block Rule',
				value: 'deleteAppBlockRulesById',
				action: 'Delete app block rule',
			},
			{
				name: 'Export App Block Activity',
				value: 'postAppBlockActivityExport',
				action: 'Export app block activity',
			},
			{
				name: 'Get App Block Rule',
				value: 'getAppBlockRulesById',
				action: 'Get app block rule',
			},
			{
				name: 'Get App Block Settings',
				value: 'getAppBlockSettings',
				action: 'Get app block settings',
			},
			{
				name: 'Search App Block Activity',
				value: 'postAppBlockActivity',
				action: 'Search app block activity',
			},
			{
				name: 'Search App Block Activity Groupby',
				value: 'postAppBlockActivitySearchGroupby',
				action: 'Search app block activity groupby',
			},
			{
				name: 'Search App Block Rules',
				value: 'postAppBlockRulesSearch',
				action: 'Search app block rules',
			},
			{
				name: 'Update App Block Rule',
				value: 'putAppBlockRulesById',
				action: 'Update app block rule',
			},
		],
		default: 'postAppBlockRules',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['assets'],
			},
		},
		options: [
			{
				name: 'Export Assets Software',
				value: 'postAssetsSoftwareExport',
				action: 'Export assets software',
			},
			{
				name: 'Search Assets Software',
				value: 'postAssetsSoftware',
				action: 'Search assets software',
			},
			{
				name: 'Search Assets Software Group By',
				value: 'postAssetsSoftwareSearchGroupby',
				action: 'Search assets software group by',
			},
		],
		default: 'postAssetsSoftwareExport',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contentFiltering'],
			},
		},
		options: [
			{
				name: 'Create Content Filtering Rule',
				value: 'postContentFiltering',
				action: 'Create content filtering rule',
			},
			{
				name: 'Create Update DNS Settings',
				value: 'putContentFilteringSettings',
				action: 'Create update DNS settings',
			},
			{
				name: 'Delete Content Filtering Rule',
				value: 'deleteContentFilteringById',
				action: 'Delete content filtering rule',
			},
			{
				name: 'Enable Disable Content Filtering Rule',
				value: 'putContentFilteringByIdEnable',
				action: 'Enable disable content filtering rule',
			},
			{
				name: 'Enable Disable Content Filtering Rule For Policy',
				value: 'putContentFilteringByIdEnableForPolicy',
				action: 'Enable disable content filtering rule for policy',
			},
			{
				name: 'Get A Content Filtering Rule Details',
				value: 'getContentFilteringById',
				action: 'Get a content filtering rule details',
			},
			{
				name: 'Get A List Of Content Filtering Rules',
				value: 'postContentFilteringSearch',
				action: 'Get a list of content filtering rules',
			},
			{
				name: 'Get DNS Settings',
				value: 'getContentFilteringSettings',
				action: 'Get DNS settings',
			},
			{
				name: 'Get Domain Details',
				value: 'getContentFilteringDomain',
				action: 'Get domain details',
			},
			{
				name: 'Get Frequently Used Domain Names',
				value: 'getContentFilteringFrequentDomains',
				action: 'Get frequently used domain names',
			},
			{
				name: 'Get List Of Policies',
				value: 'getContentFilteringPolicies',
				action: 'Get list of policies',
			},
			{
				name: 'Update Content Filtering Rule',
				value: 'putContentFilteringById',
				action: 'Update content filtering rule',
			},
		],
		default: 'postContentFiltering',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cve'],
			},
		},
		options: [
			{
				name: 'Export CVE Data',
				value: 'postCveExport',
				action: 'Export CVE data',
			},
			{
				name: 'Get CVE Details By ID',
				value: 'getCveById',
				action: 'Get CVE details by ID',
			},
			{
				name: 'Search CVE',
				value: 'postCve',
				action: 'Search CVE',
			},
			{
				name: 'Search CVE Group By',
				value: 'postCveSearchGroupby',
				action: 'Search CVE group by',
			},
		],
		default: 'postCveExport',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['detections'],
			},
		},
		options: [
			{
				name: 'Export Detections',
				value: 'postDetectionsExport',
				action: 'Export detections',
			},
			{
				name: 'Get Detection By ID',
				value: 'getDetectionsById',
				action: 'Get detection by ID',
			},
			{
				name: 'Search Detections',
				value: 'postDetections',
				action: 'Search detections',
			},
			{
				name: 'Search Detections Group By',
				value: 'postDetectionsSearchGroupby',
				action: 'Search detections group by',
			},
		],
		default: 'postDetectionsExport',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['devicecontrol'],
			},
		},
		options: [
			{
				name: 'Export Device Control Events',
				value: 'postDevicecontrolExport',
				action: 'Export device control events',
			},
			{
				name: 'Get Device Control Event By ID',
				value: 'getDevicecontrolById',
				action: 'Get device control event by ID',
			},
			{
				name: 'Search Device Control Events',
				value: 'postDevicecontrol',
				action: 'Search device control events',
			},
			{
				name: 'Search Device Control Events Group By',
				value: 'postDevicecontrolSearchGroupby',
				action: 'Search device control events group by',
			},
		],
		default: 'postDevicecontrolExport',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['dns'],
			},
		},
		options: [
			{
				name: 'Export DNS Log Data',
				value: 'postDnsExport',
				action: 'Export DNS log data',
			},
			{
				name: 'Search DNS Logs',
				value: 'postDns',
				action: 'Search DNS logs',
			},
			{
				name: 'Search DNS Logs Group By',
				value: 'postDnsSearchGroupby',
				action: 'Search DNS logs group by',
			},
		],
		default: 'postDnsExport',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['endpoints'],
			},
		},
		options: [
			{
				name: 'All Suspicious Activity Of An Endpoint',
				value: 'getEndpointsByIdSa',
				action: 'All suspicious activity of an endpoint',
			},
			{
				name: 'Close Suspicious Activity Of An Endpoint',
				value: 'putEndpointsByIdSaBySaIdClose',
				action: 'Close suspicious activity of an endpoint',
			},
			{
				name: 'Delete A Machine',
				value: 'deleteEndpointsById',
				action: 'Delete a machine',
			},
			{
				name: 'Delete Multiple Machines',
				value: 'deleteEndpoints',
				action: 'Delete multiple machines',
			},
			{
				name: 'Endpoint Status',
				value: 'getEndpointsByIdStatus',
				action: 'Endpoint status',
			},
			{
				name: 'Export Endpoints',
				value: 'postEndpointsExport',
				action: 'Export endpoints',
			},
			{
				name: 'Get A Scan Of An Endpoint',
				value: 'getEndpointsByIdScansByScanId',
				action: 'Get a scan of an endpoint',
			},
			{
				name: 'Get Endpoint',
				value: 'getEndpointsById',
				action: 'Get endpoint',
			},
			{
				name: 'Get Endpoint Agent Info',
				value: 'getEndpointsByIdAgentInfo',
				action: 'Get endpoint agent info',
			},
			{
				name: 'Get Endpoint Assets',
				value: 'getEndpointsByIdAssets',
				action: 'Get endpoint assets',
			},
			{
				name: 'Get Quarantined Items',
				value: 'getEndpointsByIdQuarantine',
				action: 'Get quarantined items',
			},
			{
				name: 'Get Scans Of An Endpoint',
				value: 'getEndpointsByIdScans',
				action: 'Get scans of an endpoint',
			},
			{
				name: 'Get The Detections Of A Scan',
				value: 'getEndpointsByIdScansByScanIdDetections',
				action: 'Get the detections of a scan',
			},
			{
				name: 'Network Information',
				value: 'getEndpointsByIdNetwork',
				action: 'Network information',
			},
			{
				name: 'Open Suspicious Activity Of An Endpoint',
				value: 'putEndpointsByIdSaBySaIdOpen',
				action: 'Open suspicious activity of an endpoint',
			},
			{
				name: 'Remediate Suspicious Activity Of An Endpoint',
				value: 'postEndpointsByIdSaBySaIdRemediate',
				action: 'Remediate suspicious activity of an endpoint',
			},
			{
				name: 'Search Endpoints',
				value: 'postEndpoints',
				action: 'Search endpoints',
			},
			{
				name: 'Search Grouped Endpoints',
				value: 'postEndpointsSearchGroupby',
				action: 'Search grouped endpoints',
			},
			{
				name: 'Set Endpoint Tags',
				value: 'putEndpointsByIdTags',
				action: 'Set endpoint tags',
			},
			{
				name: 'Specific Suspicious Activity Of An Endpoint',
				value: 'getEndpointsByIdSaBySaIdExclusions',
				action: 'Specific suspicious activity of an endpoint',
			},
		],
		default: 'getEndpointsByIdSa',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['events'],
			},
		},
		options: [
			{
				name: 'Retrieve Events',
				value: 'getEvents',
				action: 'Retrieve events',
			},
		],
		default: 'getEvents',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['exclusions'],
			},
		},
		options: [
			{
				name: 'Create Exclusion',
				value: 'postExclusions',
				action: 'Create exclusion',
			},
			{
				name: 'Delete Exclusion By ID',
				value: 'deleteExclusionsById',
				action: 'Delete exclusion by ID',
			},
			{
				name: 'Get Exclusion By ID',
				value: 'getExclusionsById',
				action: 'Get exclusion by ID',
			},
			{
				name: 'Get Exclusions',
				value: 'getExclusions',
				action: 'Get exclusions',
			},
			{
				name: 'Update Exclusion',
				value: 'putExclusionsById',
				action: 'Update exclusion',
			},
		],
		default: 'postExclusions',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['flightRecorder'],
			},
		},
		options: [
			{
				name: 'Search A List Of Processes',
				value: 'postFlightRecorderProcesses',
				action: 'Search a list of processes',
			},
			{
				name: 'Search A List Of Raw Events',
				value: 'postFlightRecorderRawEvents',
				action: 'Search a list of raw events',
			},
			{
				name: 'Search Occurrence Of Suspicious Activity',
				value: 'postFlightRecorderChart',
				action: 'Search occurrence of suspicious activity',
			},
			{
				name: 'Search Suspicious Activity',
				value: 'postFlightRecorderRecap',
				action: 'Search suspicious activity',
			},
			{
				name: 'Search Suspicious Activity Receiving Impact Information On An Endpoint',
				value: 'postFlightRecorderEndpoints',
				action: 'Search suspicious activity receiving impact information on an endpoint',
			},
			{
				name: 'Search The Flight Recorder With Advanced Queries',
				value: 'postFlightRecorderSearch',
				action: 'Search the flight recorder with advanced queries',
			},
			{
				name: 'Search The Process Graph',
				value: 'postFlightRecorderProcessGraph',
				action: 'Search the process graph',
			},
		],
		default: 'postFlightRecorderProcesses',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['grid'],
			},
		},
		options: [
			{
				name: 'Export CVEs',
				value: 'postGridCveExport',
				action: 'Export cves',
			},
			{
				name: 'Export Detections',
				value: 'postGridDetectionsExport',
				action: 'Export detections',
			},
			{
				name: 'Export Device Control Events',
				value: 'postGridDeviceControlExport',
				action: 'Export device control events',
			},
			{
				name: 'Export DNS Activity',
				value: 'postGridDnsExport',
				action: 'Export DNS activity',
			},
			{
				name: 'Export Endpoints',
				value: 'postGridEndpointsExport',
				action: 'Export endpoints',
			},
			{
				name: 'Export Events',
				value: 'postGridEventsExport',
				action: 'Export events',
			},
			{
				name: 'Export OS Patches',
				value: 'postGridOsPatchesExport',
				action: 'Export OS patches',
			},
			{
				name: 'Export RID Rules',
				value: 'postGridRidExport',
				action: 'Export RID rules',
			},
			{
				name: 'Export Software Assets',
				value: 'postGridAssetsSoftwareExport',
				action: 'Export software assets',
			},
			{
				name: 'Search CVEs',
				value: 'postGridCveSearch',
				action: 'Search cves',
			},
			{
				name: 'Search Detections',
				value: 'postGridDetectionsSearch',
				action: 'Search detections',
			},
			{
				name: 'Search Device Control Events',
				value: 'postGridDeviceControlSearch',
				action: 'Search device control events',
			},
			{
				name: 'Search DNS Activity',
				value: 'postGridDnsSearch',
				action: 'Search DNS activity',
			},
			{
				name: 'Search Endpoints',
				value: 'postGridEndpointsSearch',
				action: 'Search endpoints',
			},
			{
				name: 'Search Events',
				value: 'postGridEventsSearch',
				action: 'Search events',
			},
			{
				name: 'Search Events Groupby',
				value: 'postGridEventsSearchGroupby',
				action: 'Search events groupby',
			},
			{
				name: 'Search Grouped CVEs',
				value: 'postGridCveSearchGroupby',
				action: 'Search grouped cves',
			},
			{
				name: 'Search Grouped Detections',
				value: 'postGridDetectionsSearchGroupby',
				action: 'Search grouped detections',
			},
			{
				name: 'Search Grouped Device Control Events',
				value: 'postGridDeviceControlSearchGroupby',
				action: 'Search grouped device control events',
			},
			{
				name: 'Search Grouped DNS Activity',
				value: 'postGridDnsSearchGroupby',
				action: 'Search grouped DNS activity',
			},
			{
				name: 'Search Grouped Endpoints',
				value: 'postGridEndpointsSearchGroupby',
				action: 'Search grouped endpoints',
			},
			{
				name: 'Search Grouped OS Patches',
				value: 'postGridOsPatchesSearchGroupby',
				action: 'Search grouped OS patches',
			},
			{
				name: 'Search Grouped RID Rules',
				value: 'postGridRidSearchGroupby',
				action: 'Search grouped RID rules',
			},
			{
				name: 'Search Grouped Software Assets',
				value: 'postGridAssetsSoftwareSearchGroupby',
				action: 'Search grouped software assets',
			},
			{
				name: 'Search OS Patches',
				value: 'postGridOsPatchesSearch',
				action: 'Search OS patches',
			},
			{
				name: 'Search RID Rules',
				value: 'postGridRidSearch',
				action: 'Search RID rules',
			},
			{
				name: 'Search Software Assets',
				value: 'postGridAssetsSoftwareSearch',
				action: 'Search software assets',
			},
		],
		default: 'postGridCveExport',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['groups'],
			},
		},
		options: [
			{
				name: 'Assign Endpoints To A Group',
				value: 'postGroupsByIdMachines',
				action: 'Assign endpoints to a group',
			},
			{
				name: 'Create Group',
				value: 'postGroups',
				action: 'Create group',
			},
			{
				name: 'Delete Group By Its ID',
				value: 'deleteGroupsById',
				action: 'Delete group by its ID',
			},
			{
				name: 'Get All Groups',
				value: 'getGroups',
				action: 'Get all groups',
			},
			{
				name: 'Get Group By ID',
				value: 'getGroupsById',
				action: 'Get group by ID',
			},
			{
				name: 'Update Group',
				value: 'putGroupsById',
				action: 'Update group',
			},
		],
		default: 'postGroupsByIdMachines',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['installationToken'],
			},
		},
		options: [
			{
				name: 'Generate An Installation Tokens',
				value: 'postInstallationToken',
				action: 'Generate an installation tokens',
			},
			{
				name: 'Get Installation Tokens',
				value: 'getInstallationToken',
				action: 'Get installation tokens',
			},
			{
				name: 'Revoke Installation Token',
				value: 'deleteInstallationTokenByToken',
				action: 'Revoke installation token',
			},
			{
				name: 'Send Installation Tokens',
				value: 'postInstallationTokenSend',
				action: 'Send installation tokens',
			},
		],
		default: 'postInstallationToken',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['installers'],
			},
		},
		options: [
			{
				name: 'Retrieve Installerss Links',
				value: 'getInstallers',
				action: 'Retrieve installerss links',
			},
		],
		default: 'getInstallers',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['jobs'],
			},
		},
		options: [
			{
				name: 'Cancel Pending Jobs',
				value: 'deleteJobsBulk',
				action: 'Cancel pending jobs',
			},
			{
				name: 'Export Jobs',
				value: 'postJobsExport',
				action: 'Export jobs',
			},
			{
				name: 'Get Details About A Job',
				value: 'getJobsById',
				action: 'Get details about a job',
			},
			{
				name: 'Issue A Job',
				value: 'postJobs',
				action: 'Issue a job',
			},
			{
				name: 'Issue Jobs',
				value: 'postJobsBulk',
				action: 'Issue jobs',
			},
			{
				name: 'Search Jobs',
				value: 'postJobsSearch',
				action: 'Search jobs',
			},
			{
				name: 'Search Jobs Group By',
				value: 'postJobsSearchGroupby',
				action: 'Search jobs group by',
			},
		],
		default: 'deleteJobsBulk',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['notifications'],
			},
		},
		options: [
			{
				name: 'Create Notification',
				value: 'postNotificationsSubscriptions',
				action: 'Create notification',
			},
			{
				name: 'Delete Notification',
				value: 'deleteNotificationsSubscriptionsById',
				action: 'Delete notification',
			},
			{
				name: 'Delete Notification Bulk',
				value: 'deleteNotificationsSubscriptionsBulk',
				action: 'Delete notification bulk',
			},
			{
				name: 'Get All Notifications',
				value: 'getNotificationsSubscriptions',
				action: 'Get all notifications',
			},
			{
				name: 'Get Notification',
				value: 'getNotificationsSubscriptionsById',
				action: 'Get notification',
			},
			{
				name: 'Update Notification',
				value: 'putNotificationsSubscriptionsById',
				action: 'Update notification',
			},
			{
				name: 'Update Notification Bulk',
				value: 'putNotificationsSubscriptionsBulk',
				action: 'Update notification bulk',
			},
		],
		default: 'postNotificationsSubscriptions',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['osPatches'],
			},
		},
		options: [
			{
				name: 'Export OS Patches',
				value: 'postOsPatchesExport',
				action: 'Export OS patches',
			},
			{
				name: 'Search OS Patches',
				value: 'postOsPatches',
				action: 'Search OS patches',
			},
			{
				name: 'Search OS Patches Group By',
				value: 'postOsPatchesSearchGroupby',
				action: 'Search OS patches group by',
			},
		],
		default: 'postOsPatchesExport',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['policies'],
			},
		},
		options: [
			{
				name: 'Add Isolation Image',
				value: 'postPoliciesByIdIsolationImage',
				action: 'Add isolation image',
			},
			{
				name: 'Clone Policy',
				value: 'postPoliciesBySourceIdClone',
				action: 'Clone policy',
			},
			{
				name: 'Create Policy',
				value: 'postPolicies',
				action: 'Create policy',
			},
			{
				name: 'Delete Policy',
				value: 'deletePoliciesById',
				action: 'Delete policy',
			},
			{
				name: 'Delete Policy Isolation Image',
				value: 'deletePoliciesByIdIsolationImage',
				action: 'Delete policy isolation image',
			},
			{
				name: 'Get Policy By ID Get Policies',
				value: 'getPolicies',
				action: 'Get policy by ID',
			},
			{
				name: 'Get Policy By ID Get Policies By ID',
				value: 'getPoliciesById',
				action: 'Get policy by ID',
			},
			{
				name: 'Get Policy Isolation Image By ID',
				value: 'getPoliciesByIdIsolationImage',
				action: 'Get policy isolation image by ID',
			},
			{
				name: 'Get Policy Secret By ID',
				value: 'getPoliciesByIdSecret',
				action: 'Get policy secret by ID',
			},
			{
				name: 'Get System Default Policy',
				value: 'getPoliciesSystemDefault',
				action: 'Get system default policy',
			},
			{
				name: 'Promote Policy',
				value: 'putPoliciesByIdPromote',
				action: 'Promote policy',
			},
			{
				name: 'Set Policy Secret By ID',
				value: 'postPoliciesByIdSecret',
				action: 'Set policy secret by ID',
			},
			{
				name: 'Update Policy',
				value: 'putPoliciesById',
				action: 'Update policy',
			},
		],
		default: 'postPoliciesByIdIsolationImage',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['products'],
			},
		},
		options: [
			{
				name: 'Search Products',
				value: 'postProducts',
				action: 'Search products',
			},
			{
				name: 'Search Vendors',
				value: 'postProductsVendors',
				action: 'Search vendors',
			},
		],
		default: 'postProducts',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['quarantine'],
			},
		},
		options: [
			{
				name: 'Bulk Quarantine Action',
				value: 'postQuarantineAction',
				action: 'Bulk quarantine action',
			},
			{
				name: 'Export Quarantines',
				value: 'postQuarantineExport',
				action: 'Export quarantines',
			},
			{
				name: 'Get All Quarantined Items',
				value: 'getQuarantine',
				action: 'Get all quarantined items',
			},
		],
		default: 'postQuarantineAction',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['reports'],
			},
		},
		options: [
			{
				name: 'Create Report',
				value: 'postReports',
				action: 'Create report',
			},
			{
				name: 'Delete Report By ID',
				value: 'deleteReportsById',
				action: 'Delete report by ID',
			},
			{
				name: 'Delete Reports Bulk',
				value: 'deleteReports',
				action: 'Delete reports bulk',
			},
			{
				name: 'Generate Report',
				value: 'postReportsByIdGenerate',
				action: 'Generate report',
			},
			{
				name: 'Get All Reports',
				value: 'getReports',
				action: 'Get all reports',
			},
			{
				name: 'Get Report By ID',
				value: 'getReportsById',
				action: 'Get report by ID',
			},
			{
				name: 'Update Report',
				value: 'putReportsById',
				action: 'Update report',
			},
		],
		default: 'postReports',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['rid'],
			},
		},
		options: [
			{
				name: 'Export RID Rules',
				value: 'postRidRulesExport',
				action: 'Export RID rules',
			},
			{
				name: 'Search Grouped RID',
				value: 'postRidRulesSearchGroupby',
				action: 'Search grouped RID',
			},
			{
				name: 'Search RID Rules',
				value: 'postRidRules',
				action: 'Search RID rules',
			},
		],
		default: 'postRidRulesExport',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['sa'],
			},
		},
		options: [
			{
				name: 'Suspicious Activity Details',
				value: 'postSaDetails',
				action: 'Suspicious activity details',
			},
			{
				name: 'Suspicious Activity Of The Account',
				value: 'getSa',
				action: 'Suspicious activity of the account',
			},
			{
				name: 'Suspicious Activity Process Graph',
				value: 'getSaByIdProcessGraph',
				action: 'Suspicious activity process graph',
			},
		],
		default: 'postSaDetails',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['schedules'],
			},
		},
		options: [
			{
				name: 'Add Groups For Schedule',
				value: 'putSchedulesByIdGroups',
				action: 'Add groups for schedule',
			},
			{
				name: 'Create Schedule',
				value: 'postSchedules',
				action: 'Create schedule',
			},
			{
				name: 'Delete A Schedule',
				value: 'deleteSchedulesById',
				action: 'Delete a schedule',
			},
			{
				name: 'Get Schedule By ID',
				value: 'getSchedulesById',
				action: 'Get schedule by ID',
			},
			{
				name: 'Get Schedules',
				value: 'getSchedules',
				action: 'Get schedules',
			},
			{
				name: 'Update Schedule',
				value: 'putSchedulesById',
				action: 'Update schedule',
			},
		],
		default: 'putSchedulesByIdGroups',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['usage'],
			},
		},
		options: [
			{
				name: 'Search Logs Of Usage',
				value: 'postUsageLogs',
				action: 'Search logs of usage',
			},
			{
				name: 'Search Summary Of Usage',
				value: 'postUsageLogsSummary',
				action: 'Search summary of usage',
			},
			{
				name: 'Search Usage Histogram',
				value: 'postUsageHistogram',
				action: 'Search usage histogram',
			},
		],
		default: 'postUsageLogs',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['users'],
			},
		},
		options: [
			{
				name: 'Create User',
				value: 'postUsers',
				action: 'Create user',
			},
			{
				name: 'Delete A Nebula User',
				value: 'deleteUsersById',
				action: 'Delete a nebula user',
			},
			{
				name: 'Get Nebula Users',
				value: 'getUsers',
				action: 'Get nebula users',
			},
			{
				name: 'Get One User',
				value: 'getUsersById',
				action: 'Get one user',
			},
			{
				name: 'Update User',
				value: 'putUsersById',
				action: 'Update user',
			},
		],
		default: 'postUsers',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['webhooks'],
			},
		},
		options: [
			{
				name: 'Create Subscription',
				value: 'postWebhooksSubscriptions',
				action: 'Create subscription',
			},
			{
				name: 'Delete Subscription',
				value: 'deleteWebhooksSubscriptionsById',
				action: 'Delete subscription',
			},
			{
				name: 'Get A Subscription',
				value: 'getWebhooksSubscriptionsById',
				action: 'Get a subscription',
			},
			{
				name: 'Get All Subscriptions',
				value: 'getWebhooksSubscriptions',
				action: 'Get all subscriptions',
			},
			{
				name: 'Update A Subscription',
				value: 'putWebhooksSubscriptionsById',
				action: 'Update a subscription',
			},
		],
		default: 'postWebhooksSubscriptions',
	},
];

export const operationFields: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'op2_path_accountId',
		type: 'string',
		default: '={{$credentials.accountId}}',
		displayOptions: {
			show: {
				resource: ['accounts'],
				operation: ['getAccountsByAccountIdPreferencesNotifications'],
			},
		},
		description: 'Path parameter: Account ID',
		required: true,
	},
	{
		displayName: 'Account ID',
		name: 'op3_path_accountId',
		type: 'string',
		default: '={{$credentials.accountId}}',
		displayOptions: {
			show: {
				resource: ['accounts'],
				operation: ['putAccountsByAccountIdPreferencesNotifications'],
			},
		},
		description: 'Path parameter: Account ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op3_body',
		type: 'json',
		default:
			'{\n  "email": "true",\n  "slack": "true",\n  "teams": "true",\n  "webhook": "true"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['accounts'],
				operation: ['putAccountsByAccountIdPreferencesNotifications'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op4_body',
		type: 'json',
		default:
			'{\n  "account_name": "",\n  "account_name.keyword": "",\n  "end_date": "",\n  "engine_version": "",\n  "file_path": "",\n  "file_path.keyword": "",\n  "group_id": "",\n  "group_name": "",\n  "histogram_time_zone": "",\n  "last_user": "",\n  "name_multi_search": "",\n  "next_cursor": "",\n  "nics.ips": "",\n  "os_info.os_platform": "",\n  "os_info.os_release_name": "",\n  "os_info.os_release_name.keyword": "",\n  "os_info.os_type": "",\n  "os_info.os_version": "",\n  "page_size": 2000,\n  "policy_name": "",\n  "policy_name.keyword": "",\n  "rule_id": "",\n  "rule_name": "",\n  "rule_name.keyword": "",\n  "scanned_at_after": "",\n  "scanned_at_before": "",\n  "sort_field": "scanned_at",\n  "sort_order": "asc",\n  "start_date": "",\n  "status": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['appBlock'],
				operation: ['postAppBlockActivity'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op5_body',
		type: 'json',
		default:
			'{\n  "download": false,\n  "format": "csv",\n  "select": [\n    {\n      "field": "type",\n      "newField": ""\n    }\n  ],\n  "type": "string"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['appBlock'],
				operation: ['postAppBlockActivityExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op6_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['appBlock'],
				operation: ['postAppBlockActivitySearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op7_body',
		type: 'json',
		default: '{\n  "enabled": true,\n  "policies_exclude": false\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['appBlock'],
				operation: ['postAppBlockRules'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op8_body',
		type: 'json',
		default: '{\n  "next_cursor": "",\n  "page_size": 2000\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['appBlock'],
				operation: ['postAppBlockRulesSearch'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op9_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['appBlock'],
				operation: ['deleteAppBlockRulesById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op9_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['appBlock'],
				operation: ['deleteAppBlockRulesById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op10_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['appBlock'],
				operation: ['getAppBlockRulesById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op11_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['appBlock'],
				operation: ['putAppBlockRulesById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op11_body',
		type: 'json',
		default: '{\n  "enabled": true,\n  "policies_exclude": false\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['appBlock'],
				operation: ['putAppBlockRulesById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op13_body',
		type: 'json',
		default: '{\n  "message_body": "",\n  "message_title": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['appBlock'],
				operation: ['putAppBlockSettings'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op14_body',
		type: 'json',
		default:
			'{\n  "account_name": "",\n  "account_name.keyword": "",\n  "alias": "",\n  "alias.keyword": "",\n  "architecture": "",\n  "architecture.keyword": "",\n  "created_at_after": "",\n  "created_at_before": "",\n  "cves_by_status.critical": "",\n  "cves_by_status.critical.keyword": "",\n  "cves_by_status.high": "",\n  "cves_by_status.high.keyword": "",\n  "cves_by_status.low": "",\n  "cves_by_status.low.keyword": "",\n  "cves_by_status.medium": "",\n  "cves_by_status.medium.keyword": "",\n  "cves_by_status.unknown": "",\n  "cves_by_status.unknown.keyword": "",\n  "cves_count": "",\n  "cves_count_by_status.critical": "",\n  "cves_count_by_status.high": "",\n  "cves_count_by_status.low": "",\n  "cves_count_by_status.medium": "",\n  "cves_count_by_status.unknown": "",\n  "cves_score": "",\n  "display_installed_version": "",\n  "display_installed_version.keyword": "",\n  "display_product": "",\n  "display_product.keyword": "",\n  "display_vendor": "",\n  "display_vendor.keyword": "",\n  "fully_qualified_host_name": "",\n  "fully_qualified_host_name.keyword": "",\n  "group_id": "",\n  "group_name": "",\n  "group_name.keyword": "",\n  "host_name": "",\n  "host_name.keyword": "",\n  "installation_date_after": "",\n  "installation_date_before": "",\n  "installed_version": "",\n  "installed_version.keyword": "",\n  "language": "",\n  "language.keyword": "",\n  "latest_version_available": "",\n  "latest_version_available.keyword": "",\n  "machine_id": "",\n  "name_multi_search": "",\n  "next_cursor": "",\n  "normaliazed_installed_version": "",\n  "normaliazed_installed_version.keyword": "",\n  "normalized_product": "",\n  "normalized_product.keyword": "",\n  "normalized_vendor": "",\n  "normalized_vendor.keyword": "",\n  "not.account_name": "",\n  "not.account_name.keyword": "",\n  "not.alias": "",\n  "not.alias.keyword": "",\n  "not.architecture": "",\n  "not.architecture.keyword": "",\n  "not.cves_by_status.critical": "",\n  "not.cves_by_status.critical.keyword": "",\n  "not.cves_by_status.high": "",\n  "not.cves_by_status.high.keyword": "",\n  "not.cves_by_status.low": "",\n  "not.cves_by_status.low.keyword": "",\n  "not.cves_by_status.medium": "",\n  "not.cves_by_status.medium.keyword": "",\n  "not.cves_by_status.unknown": "",\n  "not.cves_by_status.unknown.keyword": "",\n  "not.display_installed_version": "",\n  "not.display_installed_version.keyword": "",\n  "not.display_product": "",\n  "not.display_product.keyword": "",\n  "not.display_vendor": "",\n  "not.display_vendor.keyword": "",\n  "not.fully_qualified_host_name": "",\n  "not.fully_qualified_host_name.keyword": "",\n  "not.group_id": "",\n  "not.group_name": "",\n  "not.group_name.keyword": "",\n  "not.host_name": "",\n  "not.host_name.keyword": "",\n  "not.installed_version": "",\n  "not.installed_version.keyword": "",\n  "not.language": "",\n  "not.language.keyword": "",\n  "not.latest_version_available": "",\n  "not.latest_version_available.keyword": "",\n  "not.machine_id": "",\n  "not.normaliazed_installed_version": "",\n  "not.normaliazed_installed_version.keyword": "",\n  "not.normalized_product": "",\n  "not.normalized_product.keyword": "",\n  "not.normalized_vendor": "",\n  "not.normalized_vendor.keyword": "",\n  "not.object_guid": "",\n  "not.object_guid.keyword": "",\n  "not.os_info.os_architecture": "",\n  "not.os_info.os_architecture.keyword": "",\n  "not.os_info.os_platform": "",\n  "not.os_info.os_platform.keyword": "",\n  "not.os_info.os_release_name": "",\n  "not.os_info.os_release_name.keyword": "",\n  "not.os_info.os_type": "",\n  "not.os_info.os_type.keyword": "",\n  "not.os_info.os_version": "",\n  "not.os_info.os_version.keyword": "",\n  "not.parent_account_id": "",\n  "not.product": "",\n  "not.product.keyword": "",\n  "not.root_group_id": "",\n  "not.supports_update": false,\n  "not.vendor": "",\n  "not.vendor.keyword": "",\n  "object_guid": "",\n  "object_guid.keyword": "",\n  "os_info.os_architecture": "",\n  "os_info.os_architecture.keyword": "",\n  "os_info.os_platform": "",\n  "os_info.os_platform.keyword": "",\n  "os_info.os_release_name": "",\n  "os_info.os_release_name.keyword": "",\n  "os_info.os_type": "",\n  "os_info.os_type.keyword": "",\n  "os_info.os_version": "",\n  "os_info.os_version.keyword": "",\n  "page_size": 50,\n  "parent_account_id": "",\n  "product": "",\n  "product.keyword": "",\n  "product_signature": 0,\n  "root_group_id": "",\n  "sort_field": "account_id",\n  "sort_order": "asc",\n  "supports_update": false,\n  "update_available": false,\n  "vendor": "",\n  "vendor.keyword": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['postAssetsSoftware'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op15_body',
		type: 'json',
		default:
			'{\n  "download": false,\n  "format": "csv",\n  "select": [\n    {\n      "field": "account_id",\n      "newField": ""\n    }\n  ],\n  "type": "string"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['postAssetsSoftwareExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op16_body',
		type: 'json',
		default: '{\n  "group_by": "account_id",\n  "next_cursor": "",\n  "page_size": 2000\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['postAssetsSoftwareSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op17_body',
		type: 'json',
		default: '{\n  "doh_url": "",\n  "enabled": false,\n  "name": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['contentFiltering'],
				operation: ['postContentFiltering'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op21_body',
		type: 'json',
		default: '{\n  "populate": {\n    "users": false\n  }\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['contentFiltering'],
				operation: ['postContentFilteringSearch'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op23_body',
		type: 'json',
		default:
			'{\n  "block_page": {\n    "background_color": "",\n    "enabled": false,\n    "footer_text": "",\n    "header_text": "",\n    "logo_path": "",\n    "mailto_address": "",\n    "mailto_subject": "",\n    "name": ""\n  }\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['contentFiltering'],
				operation: ['putContentFilteringSettings'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op24_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['contentFiltering'],
				operation: ['deleteContentFilteringById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op24_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['contentFiltering'],
				operation: ['deleteContentFilteringById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op25_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['contentFiltering'],
				operation: ['getContentFilteringById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op26_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['contentFiltering'],
				operation: ['putContentFilteringById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op26_body',
		type: 'json',
		default: '{\n  "doh_url": "",\n  "enabled": false,\n  "name": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['contentFiltering'],
				operation: ['putContentFilteringById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op27_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['contentFiltering'],
				operation: ['putContentFilteringByIdEnable'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op27_body',
		type: 'json',
		default: '{\n  "enabled": false\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['contentFiltering'],
				operation: ['putContentFilteringByIdEnable'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op28_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['contentFiltering'],
				operation: ['putContentFilteringByIdEnableForPolicy'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op28_body',
		type: 'json',
		default: '{\n  "enabled": false\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['contentFiltering'],
				operation: ['putContentFilteringByIdEnableForPolicy'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op29_body',
		type: 'json',
		default:
			'{\n  "account_name": "",\n  "account_name.keyword": "",\n  "alias": "",\n  "alias.keyword": "",\n  "cisa_exploitable": false,\n  "created_at_after": "",\n  "created_at_before": "",\n  "cve_id": "",\n  "cve_id.keyword": "",\n  "cvss20_score": 0,\n  "cvss20_score_gt": 0,\n  "cvss20_score_gte": 0,\n  "cvss20_score_lt": 0,\n  "cvss20_score_lte": 0,\n  "cvss30_score": 0,\n  "cvss30_score_gt": 0,\n  "cvss30_score_gte": 0,\n  "cvss30_score_lt": 0,\n  "cvss30_score_lte": 0,\n  "display_installed_version": "",\n  "display_installed_version.keyword": "",\n  "display_product": "",\n  "display_product.keyword": "",\n  "display_vendor": "",\n  "display_vendor.keyword": "",\n  "document_id": "",\n  "document_id.keyword": "",\n  "fully_qualified_host_name": "",\n  "fully_qualified_host_name.keyword": "",\n  "group_id": "",\n  "group_id.keyword": "",\n  "host_name": "",\n  "host_name.keyword": "",\n  "installation_date_after": "",\n  "installation_date_before": "",\n  "installed_version": "",\n  "installed_version.keyword": "",\n  "machine_id": "",\n  "machine_id.keyword": "",\n  "name_multi_search": "",\n  "next_cursor": "",\n  "normalized_installed_version": "",\n  "normalized_installed_version.keyword": "",\n  "normalized_product": "",\n  "normalized_product.keyword": "",\n  "normalized_vendor": "",\n  "normalized_vendor.keyword": "",\n  "not.account_name": "",\n  "not.account_name.keyword": "",\n  "not.alias": "",\n  "not.alias.keyword": "",\n  "not.cve_id": "",\n  "not.cve_id.keyword": "",\n  "not.display_installed_version": "",\n  "not.display_installed_version.keyword": "",\n  "not.display_product": "",\n  "not.display_product.keyword": "",\n  "not.display_vendor": "",\n  "not.display_vendor.keyword": "",\n  "not.fully_qualified_host_name": "",\n  "not.fully_qualified_host_name.keyword": "",\n  "not.group_id": "",\n  "not.group_id.keyword": "",\n  "not.host_name": "",\n  "not.host_name.keyword": "",\n  "not.installed_version": "",\n  "not.installed_version.keyword": "",\n  "not.machine_id": "",\n  "not.machine_id.keyword": "",\n  "not.normalized_installed_version": "",\n  "not.normalized_installed_version.keyword": "",\n  "not.normalized_product": "",\n  "not.normalized_product.keyword": "",\n  "not.normalized_vendor": "",\n  "not.normalized_vendor.keyword": "",\n  "not.object_guid": "",\n  "not.object_guid.keyword": "",\n  "not.os_info.os_architecture": "",\n  "not.os_info.os_architecture.keyword": "",\n  "not.os_info.os_platform": "",\n  "not.os_info.os_platform.keyword": "",\n  "not.os_info.os_release_name": "",\n  "not.os_info.os_release_name.keyword": "",\n  "not.os_info.os_type": "",\n  "not.os_info.os_type.keyword": "",\n  "not.os_info.os_version": "",\n  "not.os_info.os_version.keyword": "",\n  "not.parent_account_id": "",\n  "not.parent_account_id.keyword": "",\n  "not.product": "",\n  "not.product.keyword": "",\n  "not.root_group_id": "",\n  "not.root_group_id.keyword": "",\n  "not.severity": "",\n  "not.severity.keyword": "",\n  "not.sort_name": "",\n  "not.sort_name.keyword": "",\n  "not.vendor": "",\n  "not.vendor.keyword": "",\n  "object_guid": "",\n  "object_guid.keyword": "",\n  "os_info.os_architecture": "",\n  "os_info.os_architecture.keyword": "",\n  "os_info.os_platform": "",\n  "os_info.os_platform.keyword": "",\n  "os_info.os_release_name": "",\n  "os_info.os_release_name.keyword": "",\n  "os_info.os_type": "",\n  "os_info.os_type.keyword": "",\n  "os_info.os_version": "",\n  "os_info.os_version.keyword": "",\n  "page_size": 50,\n  "parent_account_id": "",\n  "parent_account_id.keyword": "",\n  "product": "",\n  "product.keyword": "",\n  "published_at_after": "",\n  "published_at_before": "",\n  "root_group_id": "",\n  "root_group_id.keyword": "",\n  "severity": "",\n  "severity.keyword": "",\n  "severity_score": 0,\n  "severity_score_gt": 0,\n  "severity_score_gte": 0,\n  "severity_score_lt": 0,\n  "severity_score_lte": 0,\n  "sort_field": "account_id",\n  "sort_name": "",\n  "sort_name.keyword": "",\n  "sort_order": "asc",\n  "vendor": "",\n  "vendor.keyword": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['cve'],
				operation: ['postCve'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op30_body',
		type: 'json',
		default:
			'{\n  "download": false,\n  "format": "csv",\n  "select": [\n    {\n      "field": "account_id",\n      "newField": ""\n    }\n  ],\n  "type": "string"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['cve'],
				operation: ['postCveExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op31_body',
		type: 'json',
		default: '{\n  "group_by": "account_id",\n  "next_cursor": "",\n  "page_size": 2000\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['cve'],
				operation: ['postCveSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op32_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['cve'],
				operation: ['getCveById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op33_body',
		type: 'json',
		default:
			'{\n  "affected_application": "",\n  "affected_application.keyword": "",\n  "aggregate_by_account": false,\n  "at_after": "",\n  "at_before": "",\n  "category": "",\n  "cleaned_at_after": "",\n  "cleaned_at_before": "",\n  "correlation_hash": "",\n  "detection_id": "",\n  "domain_name": "",\n  "domain_name.keyword": "",\n  "end_date": "",\n  "engine_version": "",\n  "engine_version.keyword": "",\n  "fully_qualified_host_name": "",\n  "fully_qualified_host_name.keyword": "",\n  "group_id": "",\n  "host_name": "",\n  "host_name.keyword": "",\n  "is_root_detection": false,\n  "is_rtp_stream_event": false,\n  "job_id": "",\n  "last_user": "",\n  "last_user.keyword": "",\n  "machine_id": "",\n  "machine_name": "",\n  "machine_name.keyword": "",\n  "md5": "",\n  "next_cursor": "",\n  "nics.description": "",\n  "nics.ips": "",\n  "nics.mac_address": "",\n  "not.category": "",\n  "not.scan_result.device.disk_model": "",\n  "not.scan_result.device.disk_model.keyword": "",\n  "not.type": "",\n  "object_guid": "",\n  "os_info.os_architecture": "",\n  "os_info.os_platform": "",\n  "os_info.os_release_name": "",\n  "os_info.os_type": "",\n  "os_info.os_version": "",\n  "page_size": 2000,\n  "parent_detection_id": "",\n  "path": "",\n  "path.keyword": "",\n  "plugins.asset_manager.plugin_version": "",\n  "plugins.asset_manager.reboot_reason": "",\n  "plugins.endpoint_detection_response.plugin_version": "",\n  "plugins.endpoint_detection_response.reboot_reason": "",\n  "plugins.endpoint_protection.component_package_version": "",\n  "plugins.endpoint_protection.plugin_version": "",\n  "plugins.endpoint_protection.reboot_reason": "",\n  "plugins.endpoint_protection.sdk_version": "",\n  "plugins.endpoint_protection.update_package_version": "",\n  "plugins.incident_response.plugin_version": "",\n  "plugins.incident_response.reboot_reason": "",\n  "plugins.siem.plugin_version": "",\n  "plugins.siem.reboot_reason": "",\n  "populate": {\n    "endpoint": false,\n    "group": false,\n    "scan_result": false\n  },\n  "process_name": "",\n  "process_name.keyword": "",\n  "protection_status": "",\n  "reported_at_after": "",\n  "reported_at_before": "",\n  "scan_id": "",\n  "scan_result.device.disk_model": "",\n  "scan_result.device.disk_model.keyword": "",\n  "scan_type": "",\n  "scanned_at_after": "",\n  "scanned_at_before": "",\n  "schedule_etag": "",\n  "schedule_id": "",\n  "sha256": "",\n  "sort_field": "trace_id",\n  "sort_order": "asc",\n  "start_date": "",\n  "status": "",\n  "threat_name": "",\n  "threat_name.keyword": "",\n  "trace_id": "",\n  "type": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['detections'],
				operation: ['postDetections'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op34_body',
		type: 'json',
		default:
			'{\n  "download": false,\n  "format": "csv",\n  "groups": [\n    {}\n  ],\n  "select": [\n    {\n      "field": "type",\n      "newField": ""\n    }\n  ],\n  "type": "string"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['detections'],
				operation: ['postDetectionsExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op35_body',
		type: 'json',
		default: '{\n  "group_by": "account_id",\n  "next_cursor": "",\n  "page_size": 2000\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['detections'],
				operation: ['postDetectionsSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op36_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['detections'],
				operation: ['getDetectionsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op37_body',
		type: 'json',
		default:
			'{\n  "affected_application": "",\n  "affected_application.keyword": "",\n  "aggregate_by_account": false,\n  "at_after": "",\n  "at_before": "",\n  "category": "",\n  "cleaned_at_after": "",\n  "cleaned_at_before": "",\n  "correlation_hash": "",\n  "detection_id": "",\n  "device_control.block_status": "",\n  "device_control.block_status.keyword": "",\n  "device_control.device_id": "",\n  "device_control.device_id.keyword": "",\n  "device_control.disk_interface": "",\n  "device_control.disk_interface.keyword": "",\n  "device_control.drive_compressed": false,\n  "device_control.file_system": "",\n  "device_control.file_system.keyword": "",\n  "device_control.manufacturer": "",\n  "device_control.manufacturer.keyword": "",\n  "device_control.physical_disk_name": "",\n  "device_control.physical_disk_name.keyword": "",\n  "device_control.pnp_device_id": "",\n  "device_control.pnp_device_id.keyword": "",\n  "device_control.serial_number": "",\n  "device_control.serial_number.keyword": "",\n  "device_control.timestamp_after": "",\n  "device_control.timestamp_before": "",\n  "device_control.volume_device_path": "",\n  "device_control.volume_device_path.keyword": "",\n  "device_control.volume_name": "",\n  "device_control.volume_name.keyword": "",\n  "device_control.volume_serial": "",\n  "device_control.volume_serial.keyword": "",\n  "domain_name": "",\n  "domain_name.keyword": "",\n  "end_date": "",\n  "engine_version": "",\n  "engine_version.keyword": "",\n  "fully_qualified_host_name": "",\n  "fully_qualified_host_name.keyword": "",\n  "group_id": "",\n  "host_name": "",\n  "host_name.keyword": "",\n  "is_root_detection": false,\n  "is_rtp_stream_event": false,\n  "job_id": "",\n  "last_user": "",\n  "last_user.keyword": "",\n  "machine_id": "",\n  "machine_name": "",\n  "machine_name.keyword": "",\n  "md5": "",\n  "next_cursor": "",\n  "nics.description": "",\n  "nics.ips": "",\n  "nics.mac_address": "",\n  "not.device_control.block_status": "",\n  "not.device_control.block_status.keyword": "",\n  "not.device_control.device_id": "",\n  "not.device_control.device_id.keyword": "",\n  "not.device_control.disk_interface": "",\n  "not.device_control.disk_interface.keyword": "",\n  "not.device_control.file_system": "",\n  "not.device_control.file_system.keyword": "",\n  "not.device_control.manufacturer": "",\n  "not.device_control.manufacturer.keyword": "",\n  "not.device_control.physical_disk_name": "",\n  "not.device_control.physical_disk_name.keyword": "",\n  "not.device_control.pnp_device_id": "",\n  "not.device_control.pnp_device_id.keyword": "",\n  "not.device_control.serial_number": "",\n  "not.device_control.serial_number.keyword": "",\n  "not.device_control.volume_device_path": "",\n  "not.device_control.volume_device_path.keyword": "",\n  "not.device_control.volume_name": "",\n  "not.device_control.volume_name.keyword": "",\n  "not.device_control.volume_serial": "",\n  "not.device_control.volume_serial.keyword": "",\n  "object_guid": "",\n  "os_info.os_architecture": "",\n  "os_info.os_platform": "",\n  "os_info.os_release_name": "",\n  "os_info.os_type": "",\n  "os_info.os_version": "",\n  "page_size": 2000,\n  "parent_detection_id": "",\n  "path": "",\n  "path.keyword": "",\n  "plugins.asset_manager.plugin_version": "",\n  "plugins.asset_manager.reboot_reason": "",\n  "plugins.endpoint_detection_response.plugin_version": "",\n  "plugins.endpoint_detection_response.reboot_reason": "",\n  "plugins.endpoint_protection.component_package_version": "",\n  "plugins.endpoint_protection.plugin_version": "",\n  "plugins.endpoint_protection.reboot_reason": "",\n  "plugins.endpoint_protection.sdk_version": "",\n  "plugins.endpoint_protection.update_package_version": "",\n  "plugins.incident_response.plugin_version": "",\n  "plugins.incident_response.reboot_reason": "",\n  "plugins.siem.plugin_version": "",\n  "plugins.siem.reboot_reason": "",\n  "populate": {\n    "endpoint": false,\n    "group": false,\n    "scan_result": false\n  },\n  "process_name": "",\n  "process_name.keyword": "",\n  "protection_status": "",\n  "reported_at_after": "",\n  "reported_at_before": "",\n  "scan_id": "",\n  "scan_type": "",\n  "scanned_at_after": "",\n  "scanned_at_before": "",\n  "schedule_etag": "",\n  "schedule_id": "",\n  "sha256": "",\n  "sort_field": "trace_id",\n  "sort_order": "asc",\n  "start_date": "",\n  "status": "",\n  "threat_name": "",\n  "threat_name.keyword": "",\n  "trace_id": "",\n  "type": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['devicecontrol'],
				operation: ['postDevicecontrol'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op38_body',
		type: 'json',
		default:
			'{\n  "download": false,\n  "format": "csv",\n  "groups": [\n    {}\n  ],\n  "select": [\n    {\n      "field": "type",\n      "newField": ""\n    }\n  ],\n  "type": "string"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['devicecontrol'],
				operation: ['postDevicecontrolExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op39_body',
		type: 'json',
		default: '{\n  "group_by": "account_id",\n  "next_cursor": "",\n  "page_size": 2000\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['devicecontrol'],
				operation: ['postDevicecontrolSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op40_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['devicecontrol'],
				operation: ['getDevicecontrolById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op41_body',
		type: 'json',
		default:
			'{\n  "account_id": "",\n  "account_id.keyword": "",\n  "action": "",\n  "action.keyword": "",\n  "group_id": "",\n  "group_id.keyword": "",\n  "group_name": "",\n  "group_name.keyword": "",\n  "id": "",\n  "log.colo_id": 0,\n  "log.colo_id_gt": 0,\n  "log.colo_id_gte": 0,\n  "log.colo_id_lt": 0,\n  "log.colo_id_lte": 0,\n  "log.datetime_after": "",\n  "log.datetime_before": "",\n  "log.dst_ip": "",\n  "log.dst_port": 0,\n  "log.dst_port_gt": 0,\n  "log.dst_port_gte": 0,\n  "log.dst_port_lt": 0,\n  "log.dst_port_lte": 0,\n  "log.policy": "",\n  "log.policy.keyword": "",\n  "log.policy_id": "",\n  "log.policy_id.keyword": "",\n  "log.protocol": "",\n  "log.protocol.keyword": "",\n  "log.query_name": "",\n  "log.query_name.keyword": "",\n  "log.query_name_reversed": "",\n  "log.query_name_reversed.keyword": "",\n  "log.query_size": 0,\n  "log.query_size_gt": 0,\n  "log.query_size_gte": 0,\n  "log.query_size_lt": 0,\n  "log.query_size_lte": 0,\n  "log.query_type": 0,\n  "log.query_type_gt": 0,\n  "log.query_type_gte": 0,\n  "log.query_type_lt": 0,\n  "log.query_type_lte": 0,\n  "log.resolver_decision": "",\n  "log.resolver_decision.keyword": "",\n  "log.src_ip": "",\n  "log.src_port": 0,\n  "log.src_port_gt": 0,\n  "log.src_port_gte": 0,\n  "log.src_port_lt": 0,\n  "log.src_port_lte": 0,\n  "log.user_id": "",\n  "log.user_id.keyword": "",\n  "machine_id": "",\n  "machine_id.keyword": "",\n  "next_cursor": "",\n  "not.account_id": "",\n  "not.account_id.keyword": "",\n  "not.action": "",\n  "not.action.keyword": "",\n  "not.group_id": "",\n  "not.group_id.keyword": "",\n  "not.group_name": "",\n  "not.group_name.keyword": "",\n  "not.id": "",\n  "not.log.dst_ip": "",\n  "not.log.policy": "",\n  "not.log.policy.keyword": "",\n  "not.log.policy_id": "",\n  "not.log.policy_id.keyword": "",\n  "not.log.protocol": "",\n  "not.log.protocol.keyword": "",\n  "not.log.query_name": "",\n  "not.log.query_name.keyword": "",\n  "not.log.query_name_reversed": "",\n  "not.log.query_name_reversed.keyword": "",\n  "not.log.resolver_decision": "",\n  "not.log.resolver_decision.keyword": "",\n  "not.log.src_ip": "",\n  "not.log.user_id": "",\n  "not.log.user_id.keyword": "",\n  "not.machine_id": "",\n  "not.machine_id.keyword": "",\n  "not.parent_account_id": "",\n  "not.parent_account_id.keyword": "",\n  "not.policy_id": "",\n  "not.policy_id.keyword": "",\n  "not.policy_name": "",\n  "not.policy_name.keyword": "",\n  "not.resolved_ips": "",\n  "not.rule_id": "",\n  "not.rule_id.keyword": "",\n  "not.rule_name": "",\n  "not.rule_name.keyword": "",\n  "page_size": 50,\n  "parent_account_id": "",\n  "parent_account_id.keyword": "",\n  "policy_id": "",\n  "policy_id.keyword": "",\n  "policy_name": "",\n  "policy_name.keyword": "",\n  "populate": {\n    "endpoint": false,\n    "group": false\n  },\n  "resolved_ips": "",\n  "rule_id": "",\n  "rule_id.keyword": "",\n  "rule_name": "",\n  "rule_name.keyword": "",\n  "sort_field": "machine_id",\n  "sort_order": "asc",\n  "timestamp_after": "",\n  "timestamp_before": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['dns'],
				operation: ['postDns'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op42_body',
		type: 'json',
		default:
			'{\n  "download": false,\n  "format": "csv",\n  "select": [\n    {\n      "field": "rule_id",\n      "newField": ""\n    }\n  ],\n  "type": "string"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['dns'],
				operation: ['postDnsExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op43_body',
		type: 'json',
		default: '{\n  "group_by": "rule_id",\n  "next_cursor": "",\n  "page_size": 2000\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['dns'],
				operation: ['postDnsSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op44_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['deleteEndpoints'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op45_body',
		type: 'json',
		default:
			'{\n  "aggregate_by_account": false,\n  "alerts.codes": "",\n  "alias": "",\n  "app_block_count_after": "",\n  "at_after": "",\n  "at_before": "",\n  "created_at_after": "",\n  "created_at_before": "",\n  "deleted_at_after": "",\n  "deleted_at_before": "",\n  "domain_name": "",\n  "domain_name.keyword": "",\n  "engine_version": "",\n  "engine_version.keyword": "",\n  "engine_version_gt": "",\n  "engine_version_gte": "",\n  "engine_version_lt": "",\n  "engine_version_lte": "",\n  "fully_qualified_host_name": "",\n  "fully_qualified_host_name.keyword": "",\n  "group_id": "",\n  "group_name": "",\n  "group_name.keyword": "",\n  "has_alerts": false,\n  "host_name": "",\n  "host_name.keyword": "",\n  "infection_found": false,\n  "is_deleted": false,\n  "is_isolated": false,\n  "is_software_update_available": false,\n  "last_assets_scan_at_after": "",\n  "last_assets_scan_at_before": "",\n  "last_day_seen_after": "",\n  "last_day_seen_before": "",\n  "last_scan_after": "",\n  "last_scan_before": "",\n  "last_user": "",\n  "last_user.keyword": "",\n  "machine_id": "",\n  "machine_ip": "",\n  "marked_for_deletion_after": "",\n  "marked_for_deletion_before": "",\n  "multi_sort": [\n    {\n      "direction": "asc",\n      "field": "at",\n      "missing": "_first"\n    }\n  ],\n  "name_multi_search": "",\n  "next_cursor": "",\n  "nics.description": "",\n  "nics.ips": "",\n  "nics.mac_address": "",\n  "object_guid": "",\n  "os_info.os_architecture": "",\n  "os_info.os_platform": "",\n  "os_info.os_release_name": "",\n  "os_info.os_release_name.keyword": "",\n  "os_info.os_type": "",\n  "os_info.os_version": "",\n  "page_size": 2000,\n  "plugins.asset_manager.alerts.codes": "",\n  "plugins.asset_manager.plugin_version": "",\n  "plugins.asset_manager.reboot_reason": "",\n  "plugins.endpoint_detection_and_response.alerts.codes": "",\n  "plugins.endpoint_detection_and_response.plugin_version": "",\n  "plugins.endpoint_detection_and_response.reboot_reason": "",\n  "plugins.endpoint_protection.alerts.codes": "",\n  "plugins.endpoint_protection.component_package_version": "",\n  "plugins.endpoint_protection.plugin_version": "",\n  "plugins.endpoint_protection.reboot_reason": "",\n  "plugins.endpoint_protection.sdk_version": "",\n  "plugins.endpoint_protection.update_package_version": "",\n  "plugins.endpoint_protection.update_package_version.keyword": "",\n  "plugins.incident_response.alerts.codes": "",\n  "plugins.incident_response.plugin_version": "",\n  "plugins.incident_response.reboot_reason": "",\n  "plugins.siem.alerts.codes": "",\n  "plugins.siem.plugin_version": "",\n  "plugins.siem.reboot_reason": "",\n  "policy_etag": "",\n  "policy_id": "",\n  "policy_name": "",\n  "policy_name.keyword": "",\n  "populate": {\n    "account": false,\n    "app_block": false,\n    "default_group": false,\n    "last_job": false,\n    "platform": false\n  },\n  "protection_status": "",\n  "reboot_required": false,\n  "serial_number": "",\n  "serial_number.keyword": "",\n  "sort_field": "at",\n  "sort_order": "asc",\n  "source_location.city": "",\n  "source_location.continent": "",\n  "source_location.country": "",\n  "source_location.country_iso": "",\n  "source_location.is_anonymous_proxy": false,\n  "source_location.postal_code": "",\n  "source_location.subdivisions": "",\n  "source_location.time_zone": "",\n  "suspicious_activity_found": false,\n  "vulnerabilities_found_total_gt": 0,\n  "vulnerabilities_found_total_gte": 0,\n  "vulnerabilities_found_total_lt": 0,\n  "vulnerabilities_found_total_lte": 0\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['postEndpoints'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op46_body',
		type: 'json',
		default:
			'{\n  "download": false,\n  "endpoints": [\n    {\n      "id": ""\n    }\n  ],\n  "format": "csv",\n  "select": [\n    {\n      "field": "machine.is_deleted",\n      "newField": ""\n    }\n  ],\n  "type": "string"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['postEndpointsExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op47_body',
		type: 'json',
		default: '{\n  "group_by": "os_info.os_platform",\n  "page_size": 2000\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['postEndpointsSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op48_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['deleteEndpointsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op48_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['deleteEndpointsById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op49_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op50_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdAgentInfo'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op51_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdAssets'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op52_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdNetwork'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op53_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdQuarantine'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'Next Cursor',
		name: 'op53_query_nextCursor',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdQuarantine'],
			},
		},
		description: 'Query parameter: Next Cursor',
	},
	{
		displayName: 'Name',
		name: 'op53_query_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdQuarantine'],
			},
		},
		description: 'Query parameter: Name',
	},
	{
		displayName: 'Category',
		name: 'op53_query_category',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdQuarantine'],
			},
		},
		description: 'Query parameter: Category',
	},
	{
		displayName: 'Type',
		name: 'op53_query_type',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdQuarantine'],
			},
		},
		description: 'Query parameter: Type',
	},
	{
		displayName: 'Since',
		name: 'op53_query_since',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdQuarantine'],
			},
		},
		description: 'Query parameter: Since',
	},
	{
		displayName: 'Until',
		name: 'op53_query_until',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdQuarantine'],
			},
		},
		description: 'Query parameter: Until',
	},
	{
		displayName: 'ID',
		name: 'op54_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdSa'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'Sort Field',
		name: 'op54_query_sortField',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdSa'],
			},
		},
		description: 'Query parameter: Sort Field',
	},
	{
		displayName: 'Sort Direction',
		name: 'op54_query_sortDirection',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdSa'],
			},
		},
		description: 'Query parameter: Sort Direction',
	},
	{
		displayName: 'Next Cursor',
		name: 'op54_query_nextCursor',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdSa'],
			},
		},
		description: 'Query parameter: Next Cursor',
	},
	{
		displayName: 'Since',
		name: 'op54_query_since',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdSa'],
			},
		},
		description: 'Query parameter: Since',
	},
	{
		displayName: 'Per Page',
		name: 'op54_query_perPage',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdSa'],
			},
		},
		description: 'Query parameter: Per Page',
	},
	{
		displayName: 'ID',
		name: 'op55_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['putEndpointsByIdSaBySaIdClose'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'SA ID',
		name: 'op55_path_saId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['putEndpointsByIdSaBySaIdClose'],
			},
		},
		description: 'Path parameter: SA ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op55_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['putEndpointsByIdSaBySaIdClose'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op56_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdSaBySaIdExclusions'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'SA ID',
		name: 'op56_path_saId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdSaBySaIdExclusions'],
			},
		},
		description: 'Path parameter: SA ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op57_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['putEndpointsByIdSaBySaIdOpen'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'SA ID',
		name: 'op57_path_saId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['putEndpointsByIdSaBySaIdOpen'],
			},
		},
		description: 'Path parameter: SA ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op57_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['putEndpointsByIdSaBySaIdOpen'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op58_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['postEndpointsByIdSaBySaIdRemediate'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'SA ID',
		name: 'op58_path_saId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['postEndpointsByIdSaBySaIdRemediate'],
			},
		},
		description: 'Path parameter: SA ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op58_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['postEndpointsByIdSaBySaIdRemediate'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op59_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdScans'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'Since',
		name: 'op59_query_since',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdScans'],
			},
		},
		description: 'Query parameter: Since',
	},
	{
		displayName: 'Threats Detected',
		name: 'op59_query_threatsDetected',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdScans'],
			},
		},
		description: 'Query parameter: Threats Detected',
	},
	{
		displayName: 'Start Index',
		name: 'op59_query_startIndex',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdScans'],
			},
		},
		description: 'Query parameter: Start Index',
	},
	{
		displayName: 'Page Size',
		name: 'op59_query_pageSize',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdScans'],
			},
		},
		description: 'Query parameter: Page Size',
	},
	{
		displayName: 'Populate',
		name: 'op59_query_populate',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdScans'],
			},
		},
		description: 'Query parameter: Populate',
	},
	{
		displayName: 'ID',
		name: 'op60_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdScansByScanId'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'Scan ID',
		name: 'op60_path_scanId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdScansByScanId'],
			},
		},
		description: 'Path parameter: Scan ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op61_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdScansByScanIdDetections'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'Scan ID',
		name: 'op61_path_scanId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdScansByScanIdDetections'],
			},
		},
		description: 'Path parameter: Scan ID',
		required: true,
	},
	{
		displayName: 'Next Cursor',
		name: 'op61_query_nextCursor',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdScansByScanIdDetections'],
			},
		},
		description: 'Query parameter: Next Cursor',
	},
	{
		displayName: 'Since',
		name: 'op61_query_since',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdScansByScanIdDetections'],
			},
		},
		description: 'Query parameter: Since',
	},
	{
		displayName: 'ID',
		name: 'op62_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['getEndpointsByIdStatus'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op63_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['putEndpointsByIdTags'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op63_body',
		type: 'json',
		default: '{\n  "alias": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['endpoints'],
				operation: ['putEndpointsByIdTags'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'Next Cursor',
		name: 'op64_query_nextCursor',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['events'],
				operation: ['getEvents'],
			},
		},
		description: 'Query parameter: Next Cursor',
	},
	{
		displayName: 'Search String',
		name: 'op64_query_searchString',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['events'],
				operation: ['getEvents'],
			},
		},
		description: 'Query parameter: Search String',
	},
	{
		displayName: 'Machine ID',
		name: 'op64_query_machineId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['events'],
				operation: ['getEvents'],
			},
		},
		description: 'Query parameter: Machine ID',
	},
	{
		displayName: 'Start',
		name: 'op64_query_start',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['events'],
				operation: ['getEvents'],
			},
		},
		description: 'Query parameter: Start',
	},
	{
		displayName: 'End',
		name: 'op64_query_end',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['events'],
				operation: ['getEvents'],
			},
		},
		description: 'Query parameter: End',
	},
	{
		displayName: 'Severity Flags',
		name: 'op64_query_severityFlags',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['events'],
				operation: ['getEvents'],
			},
		},
		description: 'Query parameter: Severity Flags',
	},
	{
		displayName: 'Source',
		name: 'op64_query_source',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['events'],
				operation: ['getEvents'],
			},
		},
		description: 'Query parameter: Source',
	},
	{
		displayName: 'Next Cursor',
		name: 'op65_query_nextCursor',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['exclusions'],
				operation: ['getExclusions'],
			},
		},
		description: 'Query parameter: Next Cursor',
	},
	{
		displayName: 'Search String',
		name: 'op65_query_searchString',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['exclusions'],
				operation: ['getExclusions'],
			},
		},
		description: 'Query parameter: Search String',
	},
	{
		displayName: 'Policy IDs',
		name: 'op65_query_policyIds',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['exclusions'],
				operation: ['getExclusions'],
			},
		},
		description: 'Query parameter: Policy IDs',
	},
	{
		displayName: 'Type',
		name: 'op65_query_type',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['exclusions'],
				operation: ['getExclusions'],
			},
		},
		description: 'Query parameter: Type',
	},
	{
		displayName: 'Since',
		name: 'op65_query_since',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['exclusions'],
				operation: ['getExclusions'],
			},
		},
		description: 'Query parameter: Since',
	},
	{
		displayName: 'Until',
		name: 'op65_query_until',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['exclusions'],
				operation: ['getExclusions'],
			},
		},
		description: 'Query parameter: Until',
	},
	{
		displayName: 'Sort By',
		name: 'op65_query_sortBy',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['exclusions'],
				operation: ['getExclusions'],
			},
		},
		description: 'Query parameter: Sort By',
	},
	{
		displayName: 'Sort Order',
		name: 'op65_query_sortOrder',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['exclusions'],
				operation: ['getExclusions'],
			},
		},
		description: 'Query parameter: Sort Order',
	},
	{
		displayName: 'JSON Body',
		name: 'op66_body',
		type: 'json',
		default:
			'{\n  "account_level": false,\n  "comment": "",\n  "enabled": false,\n  "exclude_from": {},\n  "friendly_name": "",\n  "type": 0,\n  "value": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['exclusions'],
				operation: ['postExclusions'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op67_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['exclusions'],
				operation: ['deleteExclusionsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op67_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['exclusions'],
				operation: ['deleteExclusionsById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op68_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['exclusions'],
				operation: ['getExclusionsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op69_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['exclusions'],
				operation: ['putExclusionsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op69_body',
		type: 'json',
		default:
			'{\n  "account_level": false,\n  "comment": "",\n  "enabled": false,\n  "etag": "",\n  "exclude_from": {},\n  "friendly_name": "",\n  "type": 0,\n  "value": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['exclusions'],
				operation: ['putExclusionsById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op70_body',
		type: 'json',
		default: '{\n  "time_range": "7d",\n  "time_window": {\n    "gte": "",\n    "lte": ""\n  }\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['flightRecorder'],
				operation: ['postFlightRecorderChart'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op71_body',
		type: 'json',
		default: '{\n  "time_range": "7d",\n  "time_window": {\n    "gte": "",\n    "lte": ""\n  }\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['flightRecorder'],
				operation: ['postFlightRecorderEndpoints'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op72_body',
		type: 'json',
		default:
			'{\n  "account_id": "",\n  "machine_id": "",\n  "os_type": "Windows",\n  "path": "",\n  "pid": "",\n  "pid_version": 0,\n  "time_range": "7d",\n  "time_window": {\n    "gte": "",\n    "lte": ""\n  }\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['flightRecorder'],
				operation: ['postFlightRecorderProcessGraph'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op73_body',
		type: 'json',
		default:
			'{\n  "event_category": "process",\n  "first_activity_gte": "",\n  "first_activity_lte": "",\n  "last_activity_gte": "",\n  "last_activity_lte": "",\n  "machine_id": "",\n  "md5": "",\n  "os_type": "",\n  "pc_hostname": "",\n  "pid": "",\n  "pid_version": "",\n  "process_name": "",\n  "process_path": "",\n  "sha1": "",\n  "sha256": "",\n  "sha512": "",\n  "time_range": "7d",\n  "time_window": {\n    "gte": "",\n    "lte": ""\n  },\n  "user": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['flightRecorder'],
				operation: ['postFlightRecorderProcesses'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op74_body',
		type: 'json',
		default:
			'{\n  "event_type": "ANTIMALWARE_SCAN",\n  "first_activity": "",\n  "last_activity": "",\n  "machine_id": "",\n  "page": 1,\n  "page_size": 1,\n  "path": "",\n  "pid": "",\n  "pid_version": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['flightRecorder'],
				operation: ['postFlightRecorderRawEvents'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op75_body',
		type: 'json',
		default: '{\n  "time_range": "7d",\n  "time_window": {\n    "gte": "",\n    "lte": ""\n  }\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['flightRecorder'],
				operation: ['postFlightRecorderRecap'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op76_body',
		type: 'json',
		default:
			'{\n  "event_category": "network",\n  "pc_hostname": "",\n  "time_range": "7d",\n  "time_window": {\n    "gte": "",\n    "lte": ""\n  }\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['flightRecorder'],
				operation: ['postFlightRecorderSearch'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op77_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridAssetsSoftwareExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op78_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridAssetsSoftwareSearch'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op79_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridAssetsSoftwareSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op80_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridCveExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op81_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridCveSearch'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op82_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridCveSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op83_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridDetectionsExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op84_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridDetectionsSearch'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op85_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridDetectionsSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op86_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridDeviceControlExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op87_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridDeviceControlSearch'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op88_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridDeviceControlSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op89_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridDnsExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op90_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridDnsSearch'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op91_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridDnsSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op92_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridEndpointsExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op93_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridEndpointsSearch'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op94_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridEndpointsSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op95_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridEventsExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op96_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridEventsSearch'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op97_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridEventsSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op98_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridOsPatchesExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op99_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridOsPatchesSearch'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op100_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridOsPatchesSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op101_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridRidExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op102_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridRidSearch'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op103_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['grid'],
				operation: ['postGridRidSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'Name',
		name: 'op104_query_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['getGroups'],
			},
		},
		description: 'Query parameter: Name',
	},
	{
		displayName: 'Parent ID',
		name: 'op104_query_parentId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['getGroups'],
			},
		},
		description: 'Query parameter: Parent ID',
	},
	{
		displayName: 'Filter By Parent ID',
		name: 'op104_query_filterByParentId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['getGroups'],
			},
		},
		description: 'Query parameter: Filter By Parent ID',
	},
	{
		displayName: 'Next Cursor',
		name: 'op104_query_nextCursor',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['getGroups'],
			},
		},
		description: 'Query parameter: Next Cursor',
	},
	{
		displayName: 'JSON Body',
		name: 'op105_body',
		type: 'json',
		default: '{\n  "name": "",\n  "parent_id": "",\n  "policy_id": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['postGroups'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op106_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['deleteGroupsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op106_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['deleteGroupsById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op107_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['getGroupsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op108_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['putGroupsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op108_body',
		type: 'json',
		default: '{\n  "name": "",\n  "parent_id": "",\n  "policy_id": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['putGroupsById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op109_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['postGroupsByIdMachines'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op109_body',
		type: 'json',
		default: '{\n  "endpoints": [\n    {\n      "id": ""\n    }\n  ]\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['postGroupsByIdMachines'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'Sort By',
		name: 'op110_query_sortBy',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['installationToken'],
				operation: ['getInstallationToken'],
			},
		},
		description: 'Query parameter: Sort By',
	},
	{
		displayName: 'Sort Order',
		name: 'op110_query_sortOrder',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['installationToken'],
				operation: ['getInstallationToken'],
			},
		},
		description: 'Query parameter: Sort Order',
	},
	{
		displayName: 'Include Used',
		name: 'op110_query_includeUsed',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['installationToken'],
				operation: ['getInstallationToken'],
			},
		},
		description: 'Query parameter: Include Used',
	},
	{
		displayName: 'Include Expired',
		name: 'op110_query_includeExpired',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['installationToken'],
				operation: ['getInstallationToken'],
			},
		},
		description: 'Query parameter: Include Expired',
	},
	{
		displayName: 'Populate',
		name: 'op110_query_populate',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['installationToken'],
				operation: ['getInstallationToken'],
			},
		},
		description: 'Query parameter: Populate',
	},
	{
		displayName: 'Page Size',
		name: 'op110_query_pageSize',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['installationToken'],
				operation: ['getInstallationToken'],
			},
		},
		description: 'Query parameter: Page Size',
	},
	{
		displayName: 'Start Index',
		name: 'op110_query_startIndex',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['installationToken'],
				operation: ['getInstallationToken'],
			},
		},
		description: 'Query parameter: Start Index',
	},
	{
		displayName: 'JSON Body',
		name: 'op111_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['installationToken'],
				operation: ['postInstallationToken'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op112_body',
		type: 'json',
		default: '{}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['installationToken'],
				operation: ['postInstallationTokenSend'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'Token',
		name: 'op113_path_token',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['installationToken'],
				operation: ['deleteInstallationTokenByToken'],
			},
		},
		description: 'Path parameter: Token',
		required: true,
		typeOptions: {
			password: true,
		},
	},
	{
		displayName: 'JSON Body',
		name: 'op113_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['installationToken'],
				operation: ['deleteInstallationTokenByToken'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op115_body',
		type: 'json',
		default:
			'{\n  "command": "",\n  "data": {\n    "allow_postpone_reboot": false,\n    "application_name": "",\n    "architecture": "",\n    "ark": false,\n    "current_version": "",\n    "delay_in_seconds": 0,\n    "enable_shuriken": false,\n    "exclusions": [\n      {\n        "exclude_from": {},\n        "type": "",\n        "value": ""\n      }\n    ],\n    "language": "",\n    "message": "",\n    "new_version": "",\n    "no_archive": false,\n    "no_reboot": false,\n    "patches": [\n      {\n        "category": "",\n        "product": "",\n        "severity": "",\n        "title": "",\n        "vendor": ""\n      }\n    ],\n    "product": 0,\n    "pum_detection": "",\n    "pup_detection": "",\n    "reasons": 0,\n    "reboot_delay": 0,\n    "reboot_delay_rrule": "",\n    "reboot_message": "",\n    "remove": false,\n    "scan_file_system": false,\n    "scan_fixed_drives": false,\n    "scan_memory": false,\n    "scan_path": "",\n    "scan_path_from_list_file": false,\n    "scan_priority": "",\n    "scan_registry": false,\n    "scan_settings": {\n      "type": ""\n    },\n    "scan_startup": false,\n    "type": "",\n    "vendor": ""\n  },\n  "relay_state": "",\n  "requires_connected": false\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['jobs'],
				operation: ['postJobs'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op116_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['jobs'],
				operation: ['deleteJobsBulk'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op117_body',
		type: 'json',
		default:
			'{\n  "command": "",\n  "data": {\n    "allow_postpone_reboot": false,\n    "application_name": "",\n    "architecture": "",\n    "ark": false,\n    "current_version": "",\n    "delay_in_seconds": 0,\n    "enable_shuriken": false,\n    "exclusions": [\n      {\n        "exclude_from": {},\n        "type": "",\n        "value": ""\n      }\n    ],\n    "language": "",\n    "message": "",\n    "new_version": "",\n    "no_archive": false,\n    "no_reboot": false,\n    "patches": [\n      {\n        "category": "",\n        "product": "",\n        "severity": "",\n        "title": "",\n        "vendor": ""\n      }\n    ],\n    "product": 0,\n    "pum_detection": "",\n    "pup_detection": "",\n    "reasons": 0,\n    "reboot_delay": 0,\n    "reboot_delay_rrule": "",\n    "reboot_message": "",\n    "remove": false,\n    "scan_file_system": false,\n    "scan_fixed_drives": false,\n    "scan_memory": false,\n    "scan_path": "",\n    "scan_path_from_list_file": false,\n    "scan_priority": "",\n    "scan_registry": false,\n    "scan_settings": {\n      "remove": false,\n      "type": ""\n    },\n    "scan_startup": false,\n    "type": "",\n    "vendor": ""\n  },\n  "endpoints": [\n    {\n      "id": ""\n    }\n  ],\n  "relay_state": "",\n  "requires_connected": false\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['jobs'],
				operation: ['postJobsBulk'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op118_body',
		type: 'json',
		default:
			'{\n  "download": false,\n  "format": "csv",\n  "select": [\n    {\n      "field": "id",\n      "newField": ""\n    }\n  ],\n  "type": "string"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['jobs'],
				operation: ['postJobsExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op119_body',
		type: 'json',
		default:
			'{\n  "cancelled_by": "",\n  "endpoint": "",\n  "expires_at_after": "",\n  "expires_at_before": "",\n  "id": "",\n  "issued_at_after": "",\n  "issued_at_before": "",\n  "issued_by": "",\n  "issued_by_email": "",\n  "machine_id": "",\n  "next_cursor": "",\n  "page_size": 100,\n  "sort_field": "command",\n  "sort_order": "asc",\n  "status": 511\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['jobs'],
				operation: ['postJobsSearch'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op120_body',
		type: 'json',
		default: '{\n  "group_by": "id"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['jobs'],
				operation: ['postJobsSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op121_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['jobs'],
				operation: ['getJobsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'Owner',
		name: 'op122_query_owner',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['notifications'],
				operation: ['getNotificationsSubscriptions'],
			},
		},
		description: 'Query parameter: Owner',
	},
	{
		displayName: 'Next Cursor',
		name: 'op122_query_nextCursor',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['notifications'],
				operation: ['getNotificationsSubscriptions'],
			},
		},
		description: 'Query parameter: Next Cursor',
	},
	{
		displayName: 'JSON Body',
		name: 'op123_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['notifications'],
				operation: ['postNotificationsSubscriptions'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op124_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['notifications'],
				operation: ['deleteNotificationsSubscriptionsBulk'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op125_body',
		type: 'json',
		default: '{}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['notifications'],
				operation: ['putNotificationsSubscriptionsBulk'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op126_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['notifications'],
				operation: ['deleteNotificationsSubscriptionsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op126_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['notifications'],
				operation: ['deleteNotificationsSubscriptionsById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op127_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['notifications'],
				operation: ['getNotificationsSubscriptionsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op128_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['notifications'],
				operation: ['putNotificationsSubscriptionsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op128_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['notifications'],
				operation: ['putNotificationsSubscriptionsById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op129_body',
		type: 'json',
		default:
			'{\n  "category": "",\n  "category.keyword": "",\n  "created_at_after": "",\n  "created_at_before": "",\n  "description": "",\n  "description.keyword": "",\n  "display_name": "",\n  "display_name.keyword": "",\n  "fully_qualified_host_name": "",\n  "fully_qualified_host_name.keyword": "",\n  "group_id": "",\n  "group_id.keyword": "",\n  "host_name": "",\n  "host_name.keyword": "",\n  "machine_id": "",\n  "machine_id.keyword": "",\n  "next_cursor": "",\n  "not.category": "",\n  "not.category.keyword": "",\n  "not.description": "",\n  "not.description.keyword": "",\n  "not.display_name": "",\n  "not.display_name.keyword": "",\n  "not.fully_qualified_host_name": "",\n  "not.fully_qualified_host_name.keyword": "",\n  "not.group_id": "",\n  "not.group_id.keyword": "",\n  "not.host_name": "",\n  "not.host_name.keyword": "",\n  "not.machine_id": "",\n  "not.machine_id.keyword": "",\n  "not.object_guid": "",\n  "not.object_guid.keyword": "",\n  "not.os_info.os_architecture": "",\n  "not.os_info.os_architecture.keyword": "",\n  "not.os_info.os_platform": "",\n  "not.os_info.os_platform.keyword": "",\n  "not.os_info.os_release_name": "",\n  "not.os_info.os_release_name.keyword": "",\n  "not.os_info.os_type": "",\n  "not.os_info.os_type.keyword": "",\n  "not.os_info.os_version": "",\n  "not.os_info.os_version.keyword": "",\n  "not.patch_id": "",\n  "not.patch_id.keyword": "",\n  "not.product": "",\n  "not.product.keyword": "",\n  "not.root_group_id": "",\n  "not.root_group_id.keyword": "",\n  "not.security_update_id": "",\n  "not.security_update_id.keyword": "",\n  "not.severity": "",\n  "not.severity.keyword": "",\n  "not.title": "",\n  "not.title.keyword": "",\n  "not.vendor": "",\n  "not.vendor.keyword": "",\n  "object_guid": "",\n  "object_guid.keyword": "",\n  "os_info.os_architecture": "",\n  "os_info.os_architecture.keyword": "",\n  "os_info.os_platform": "",\n  "os_info.os_platform.keyword": "",\n  "os_info.os_release_name": "",\n  "os_info.os_release_name.keyword": "",\n  "os_info.os_type": "",\n  "os_info.os_type.keyword": "",\n  "os_info.os_version": "",\n  "os_info.os_version.keyword": "",\n  "page_size": 50,\n  "patch_id": "",\n  "patch_id.keyword": "",\n  "populate": {\n    "endpoint": false,\n    "group": false\n  },\n  "product": "",\n  "product.keyword": "",\n  "reboot_required": false,\n  "released_at_after": "",\n  "released_at_before": "",\n  "root_group_id": "",\n  "root_group_id.keyword": "",\n  "security_update_id": "",\n  "security_update_id.keyword": "",\n  "severity": "",\n  "severity.keyword": "",\n  "size": 0,\n  "size_gt": 0,\n  "size_gte": 0,\n  "size_lt": 0,\n  "size_lte": 0,\n  "sort_field": "machine_id",\n  "sort_order": "asc",\n  "title": "",\n  "title.keyword": "",\n  "vendor": "",\n  "vendor.keyword": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['osPatches'],
				operation: ['postOsPatches'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op130_body',
		type: 'json',
		default:
			'{\n  "download": false,\n  "format": "csv",\n  "select": [\n    {\n      "field": "machine_id",\n      "newField": ""\n    }\n  ],\n  "type": "string"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['osPatches'],
				operation: ['postOsPatchesExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op131_body',
		type: 'json',
		default: '{\n  "group_by": "account_id",\n  "next_cursor": "",\n  "page_size": 2000\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['osPatches'],
				operation: ['postOsPatchesSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op133_body',
		type: 'json',
		default:
			'{\n  "contents": {\n    "packages": [\n      {\n        "policy": {\n          "protected_protocols": [\n            {\n              "enabled": false,\n              "name": "RDP"\n            }\n          ]\n        },\n        "product_name": "",\n        "schema_version": "",\n        "sirius_os_packages": [\n          {\n            "operating_system": "",\n            "sirius_package_name": ""\n          }\n        ]\n      }\n    ],\n    "policy": {\n      "endpoint_interface_options": {\n        "allow_run_threat_scan": false,\n        "display_rtp_events": false,\n        "limit_endpoint_agent_control": false,\n        "show_threat_scan_shortcuts": false,\n        "show_windows_contextmenu": false\n      },\n      "protect_service": false,\n      "sirius_update_schedule": "",\n      "startup_options": {\n        "toggle_on": false\n      },\n      "updates": {}\n    },\n    "schema_version": "",\n    "status": ""\n  },\n  "name": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['postPolicies'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op135_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['deletePoliciesById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op135_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['deletePoliciesById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op136_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['getPoliciesById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'Populate',
		name: 'op136_query_populate',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['getPoliciesById'],
			},
		},
		description: 'Query parameter: Populate',
	},
	{
		displayName: 'ID',
		name: 'op137_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['putPoliciesById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op137_body',
		type: 'json',
		default:
			'{\n  "contents": {\n    "packages": [\n      {\n        "policy": {\n          "protected_protocols": [\n            {\n              "enabled": false,\n              "name": "RDP"\n            }\n          ]\n        },\n        "product_name": "",\n        "schema_version": "",\n        "sirius_os_packages": [\n          {\n            "operating_system": "",\n            "sirius_package_name": ""\n          }\n        ]\n      }\n    ],\n    "policy": {\n      "endpoint_interface_options": {\n        "allow_run_threat_scan": false,\n        "display_rtp_events": false,\n        "limit_endpoint_agent_control": false,\n        "show_threat_scan_shortcuts": false,\n        "show_windows_contextmenu": false\n      },\n      "protect_service": false,\n      "sirius_update_schedule": "",\n      "startup_options": {\n        "toggle_on": false\n      },\n      "updates": {}\n    },\n    "schema_version": "",\n    "status": ""\n  },\n  "etag": "",\n  "name": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['putPoliciesById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op138_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['deletePoliciesByIdIsolationImage'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op138_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['deletePoliciesByIdIsolationImage'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op139_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['getPoliciesByIdIsolationImage'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op140_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['postPoliciesByIdIsolationImage'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op140_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['postPoliciesByIdIsolationImage'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op141_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['putPoliciesByIdPromote'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op141_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['putPoliciesByIdPromote'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op142_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['getPoliciesByIdSecret'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op143_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['postPoliciesByIdSecret'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op143_body',
		type: 'json',
		default: '{\n  "name": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['postPoliciesByIdSecret'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'Source ID',
		name: 'op144_path_sourceId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['postPoliciesBySourceIdClone'],
			},
		},
		description: 'Path parameter: Source ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op144_body',
		type: 'json',
		default: '{\n  "include_policy_exclusions": false,\n  "name": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['policies'],
				operation: ['postPoliciesBySourceIdClone'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op145_body',
		type: 'json',
		default:
			'{\n  "constraints": [\n    {\n      "field": "vendor_id",\n      "operator": "equals"\n    }\n  ],\n  "next_cursor": "",\n  "page_size": 500,\n  "sort_field": "vendor_name"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['products'],
				operation: ['postProducts'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op146_body',
		type: 'json',
		default:
			'{\n  "constraints": [\n    {\n      "field": "vendor_name",\n      "operator": "equals"\n    }\n  ],\n  "next_cursor": "",\n  "page_size": 500,\n  "sort_field": "vendor_name"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['products'],
				operation: ['postProductsVendors'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'Next Cursor',
		name: 'op147_query_nextCursor',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['quarantine'],
				operation: ['getQuarantine'],
			},
		},
		description: 'Query parameter: Next Cursor',
	},
	{
		displayName: 'Name',
		name: 'op147_query_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['quarantine'],
				operation: ['getQuarantine'],
			},
		},
		description: 'Query parameter: Name',
	},
	{
		displayName: 'Category',
		name: 'op147_query_category',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['quarantine'],
				operation: ['getQuarantine'],
			},
		},
		description: 'Query parameter: Category',
	},
	{
		displayName: 'Type',
		name: 'op147_query_type',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['quarantine'],
				operation: ['getQuarantine'],
			},
		},
		description: 'Query parameter: Type',
	},
	{
		displayName: 'Since',
		name: 'op147_query_since',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['quarantine'],
				operation: ['getQuarantine'],
			},
		},
		description: 'Query parameter: Since',
	},
	{
		displayName: 'Until',
		name: 'op147_query_until',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['quarantine'],
				operation: ['getQuarantine'],
			},
		},
		description: 'Query parameter: Until',
	},
	{
		displayName: 'JSON Body',
		name: 'op148_body',
		type: 'json',
		default:
			'{\n  "command": "command.threat.quarantine.restore",\n  "endpoints": [\n    {\n      "id": ""\n    }\n  ]\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['quarantine'],
				operation: ['postQuarantineAction'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op149_body',
		type: 'json',
		default:
			'{\n  "download": false,\n  "filename": "",\n  "format": "csv",\n  "groups": [\n    {\n      "category": "",\n      "machine_id": "",\n      "since": "",\n      "until": ""\n    }\n  ],\n  "select": [\n    {\n      "field": "id",\n      "newField": ""\n    }\n  ],\n  "type": "string"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['quarantine'],
				operation: ['postQuarantineExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op150_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['reports'],
				operation: ['deleteReports'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op152_body',
		type: 'json',
		default:
			'{\n  "email_subject": "",\n  "format": "csv",\n  "name": "",\n  "notes": "",\n  "period": 0,\n  "recurrence": {\n    "recur": "Daily"\n  },\n  "time_zone": "",\n  "type": "Detections",\n  "units": "Days"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['reports'],
				operation: ['postReports'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op153_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['reports'],
				operation: ['deleteReportsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op153_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['reports'],
				operation: ['deleteReportsById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op154_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['reports'],
				operation: ['getReportsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op155_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['reports'],
				operation: ['putReportsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op155_body',
		type: 'json',
		default:
			'{\n  "email_subject": "",\n  "format": "csv",\n  "name": "",\n  "notes": "",\n  "period": 0,\n  "recurrence": {\n    "recur": "Daily"\n  },\n  "time_zone": "",\n  "type": "Detections",\n  "units": "Days"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['reports'],
				operation: ['putReportsById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op156_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['reports'],
				operation: ['postReportsByIdGenerate'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op156_body',
		type: 'json',
		default: '{\n  "end": "",\n  "start": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['reports'],
				operation: ['postReportsByIdGenerate'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op157_body',
		type: 'json',
		default:
			'{\n  "account_name": "",\n  "account_name.keyword": "",\n  "attack_user": "",\n  "attack_user.keyword": "",\n  "create_time_after": "",\n  "create_time_before": "",\n  "deleted": false,\n  "destination_location.city": "",\n  "destination_location.city.keyword": "",\n  "destination_location.continent": "",\n  "destination_location.continent.keyword": "",\n  "destination_location.country": "",\n  "destination_location.country.keyword": "",\n  "destination_location.country_iso": "",\n  "destination_location.country_iso.keyword": "",\n  "destination_location.postal_code": "",\n  "destination_location.postal_code.keyword": "",\n  "destination_location.subdivisions": "",\n  "destination_location.subdivisions.keyword": "",\n  "destination_location.time_zone": "",\n  "destination_location.time_zone.keyword": "",\n  "domain_name": "",\n  "domain_name.keyword": "",\n  "engine_version": "",\n  "engine_version.keyword": "",\n  "expire_time_after": "",\n  "expire_time_before": "",\n  "fully_qualified_host_name": "",\n  "fully_qualified_host_name.keyword": "",\n  "group_id": "",\n  "group_id.keyword": "",\n  "group_name": "",\n  "group_name.keyword": "",\n  "host_name": "",\n  "host_name.keyword": "",\n  "id": "",\n  "id.keyword": "",\n  "ip": "",\n  "last_user": "",\n  "last_user.keyword": "",\n  "machine_id": "",\n  "machine_id.keyword": "",\n  "machine_ip": "",\n  "machine_name": "",\n  "machine_name.keyword": "",\n  "next_cursor": "",\n  "nics.description": "",\n  "nics.description.keyword": "",\n  "nics.mac_address": "",\n  "nics.mac_address.keyword": "",\n  "not.account_name": "",\n  "not.account_name.keyword": "",\n  "not.attack_user": "",\n  "not.attack_user.keyword": "",\n  "not.destination_location.city": "",\n  "not.destination_location.city.keyword": "",\n  "not.destination_location.continent": "",\n  "not.destination_location.continent.keyword": "",\n  "not.destination_location.country": "",\n  "not.destination_location.country.keyword": "",\n  "not.destination_location.country_iso": "",\n  "not.destination_location.country_iso.keyword": "",\n  "not.destination_location.postal_code": "",\n  "not.destination_location.postal_code.keyword": "",\n  "not.destination_location.subdivisions": "",\n  "not.destination_location.subdivisions.keyword": "",\n  "not.destination_location.time_zone": "",\n  "not.destination_location.time_zone.keyword": "",\n  "not.domain_name": "",\n  "not.domain_name.keyword": "",\n  "not.engine_version": "",\n  "not.engine_version.keyword": "",\n  "not.fully_qualified_host_name": "",\n  "not.fully_qualified_host_name.keyword": "",\n  "not.group_id": "",\n  "not.group_id.keyword": "",\n  "not.group_name": "",\n  "not.group_name.keyword": "",\n  "not.host_name": "",\n  "not.host_name.keyword": "",\n  "not.id": "",\n  "not.id.keyword": "",\n  "not.ip": "",\n  "not.last_user": "",\n  "not.last_user.keyword": "",\n  "not.machine_id": "",\n  "not.machine_id.keyword": "",\n  "not.machine_ip": "",\n  "not.machine_name": "",\n  "not.machine_name.keyword": "",\n  "not.nics.description": "",\n  "not.nics.description.keyword": "",\n  "not.nics.mac_address": "",\n  "not.nics.mac_address.keyword": "",\n  "not.origin_id": "",\n  "not.origin_id.keyword": "",\n  "not.os_info.os_architecture": "",\n  "not.os_info.os_architecture.keyword": "",\n  "not.os_info.os_platform": "",\n  "not.os_info.os_platform.keyword": "",\n  "not.os_info.os_release_name": "",\n  "not.os_info.os_release_name.keyword": "",\n  "not.os_info.os_type": "",\n  "not.os_info.os_type.keyword": "",\n  "not.os_info.os_version": "",\n  "not.os_info.os_version.keyword": "",\n  "not.plugins.asset_manager.plugin_version": "",\n  "not.plugins.asset_manager.plugin_version.keyword": "",\n  "not.plugins.asset_manager.reboot_reasons": "",\n  "not.plugins.asset_manager.reboot_reasons.keyword": "",\n  "not.plugins.endpoint_detection_and_response.plugin_version": "",\n  "not.plugins.endpoint_detection_and_response.plugin_version.keyword": "",\n  "not.plugins.endpoint_detection_and_response.reboot_reasons": "",\n  "not.plugins.endpoint_detection_and_response.reboot_reasons.keyword": "",\n  "not.plugins.endpoint_protection.component_package_version": "",\n  "not.plugins.endpoint_protection.component_package_version.keyword": "",\n  "not.plugins.endpoint_protection.plugin_version": "",\n  "not.plugins.endpoint_protection.plugin_version.keyword": "",\n  "not.plugins.endpoint_protection.reboot_reasons": "",\n  "not.plugins.endpoint_protection.reboot_reasons.keyword": "",\n  "not.plugins.endpoint_protection.sdk_version": "",\n  "not.plugins.endpoint_protection.sdk_version.keyword": "",\n  "not.plugins.endpoint_protection.update_package_version": "",\n  "not.plugins.endpoint_protection.update_package_version.keyword": "",\n  "not.plugins.incident_response.plugin_version": "",\n  "not.plugins.incident_response.plugin_version.keyword": "",\n  "not.plugins.incident_response.reboot_reasons": "",\n  "not.plugins.incident_response.reboot_reasons.keyword": "",\n  "not.plugins.siem.plugin_version": "",\n  "not.plugins.siem.plugin_version.keyword": "",\n  "not.plugins.siem.reboot_reasons": "",\n  "not.plugins.siem.reboot_reasons.keyword": "",\n  "not.policy_etag": "",\n  "not.policy_etag.keyword": "",\n  "not.policy_id": "",\n  "not.policy_id.keyword": "",\n  "not.policy_name": "",\n  "not.policy_name.keyword": "",\n  "not.protocol": "",\n  "not.protocol.keyword": "",\n  "not.root_group_id": "",\n  "not.root_group_id.keyword": "",\n  "not.rule_id": "",\n  "not.rule_id.keyword": "",\n  "not.source_location.city": "",\n  "not.source_location.city.keyword": "",\n  "not.source_location.continent": "",\n  "not.source_location.continent.keyword": "",\n  "not.source_location.country": "",\n  "not.source_location.country.keyword": "",\n  "not.source_location.country_iso": "",\n  "not.source_location.country_iso.keyword": "",\n  "not.source_location.postal_code": "",\n  "not.source_location.postal_code.keyword": "",\n  "not.source_location.subdivisions": "",\n  "not.source_location.subdivisions.keyword": "",\n  "not.source_location.time_zone": "",\n  "not.source_location.time_zone.keyword": "",\n  "origin_id": "",\n  "origin_id.keyword": "",\n  "os_info.os_architecture": "",\n  "os_info.os_architecture.keyword": "",\n  "os_info.os_platform": "",\n  "os_info.os_platform.keyword": "",\n  "os_info.os_release_name": "",\n  "os_info.os_release_name.keyword": "",\n  "os_info.os_type": "",\n  "os_info.os_type.keyword": "",\n  "os_info.os_version": "",\n  "os_info.os_version.keyword": "",\n  "page_size": 50,\n  "plugins.asset_manager.plugin_version": "",\n  "plugins.asset_manager.plugin_version.keyword": "",\n  "plugins.asset_manager.reboot_reasons": "",\n  "plugins.asset_manager.reboot_reasons.keyword": "",\n  "plugins.endpoint_detection_and_response.plugin_version": "",\n  "plugins.endpoint_detection_and_response.plugin_version.keyword": "",\n  "plugins.endpoint_detection_and_response.reboot_reasons": "",\n  "plugins.endpoint_detection_and_response.reboot_reasons.keyword": "",\n  "plugins.endpoint_protection.component_package_version": "",\n  "plugins.endpoint_protection.component_package_version.keyword": "",\n  "plugins.endpoint_protection.plugin_version": "",\n  "plugins.endpoint_protection.plugin_version.keyword": "",\n  "plugins.endpoint_protection.reboot_reasons": "",\n  "plugins.endpoint_protection.reboot_reasons.keyword": "",\n  "plugins.endpoint_protection.sdk_version": "",\n  "plugins.endpoint_protection.sdk_version.keyword": "",\n  "plugins.endpoint_protection.update_package_version": "",\n  "plugins.endpoint_protection.update_package_version.keyword": "",\n  "plugins.incident_response.plugin_version": "",\n  "plugins.incident_response.plugin_version.keyword": "",\n  "plugins.incident_response.reboot_reasons": "",\n  "plugins.incident_response.reboot_reasons.keyword": "",\n  "plugins.siem.plugin_version": "",\n  "plugins.siem.plugin_version.keyword": "",\n  "plugins.siem.reboot_reasons": "",\n  "plugins.siem.reboot_reasons.keyword": "",\n  "policy_etag": "",\n  "policy_etag.keyword": "",\n  "policy_id": "",\n  "policy_id.keyword": "",\n  "policy_name": "",\n  "policy_name.keyword": "",\n  "protocol": "",\n  "protocol.keyword": "",\n  "root_group_id": "",\n  "root_group_id.keyword": "",\n  "rule_id": "",\n  "rule_id.keyword": "",\n  "sort_field": "id",\n  "sort_order": "asc",\n  "source_location.city": "",\n  "source_location.city.keyword": "",\n  "source_location.continent": "",\n  "source_location.continent.keyword": "",\n  "source_location.country": "",\n  "source_location.country.keyword": "",\n  "source_location.country_iso": "",\n  "source_location.country_iso.keyword": "",\n  "source_location.postal_code": "",\n  "source_location.postal_code.keyword": "",\n  "source_location.subdivisions": "",\n  "source_location.subdivisions.keyword": "",\n  "source_location.time_zone": "",\n  "source_location.time_zone.keyword": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['rid'],
				operation: ['postRidRules'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op158_body',
		type: 'json',
		default:
			'{\n  "download": false,\n  "format": "csv",\n  "select": [\n    {\n      "field": "",\n      "newField": ""\n    }\n  ],\n  "type": "string"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['rid'],
				operation: ['postRidRulesExport'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op159_body',
		type: 'json',
		default: '{\n  "group_by": "origin_id"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['rid'],
				operation: ['postRidRulesSearchGroupby'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'Sort Field',
		name: 'op160_query_sortField',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['sa'],
				operation: ['getSa'],
			},
		},
		description: 'Query parameter: Sort Field',
	},
	{
		displayName: 'Sort Direction',
		name: 'op160_query_sortDirection',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['sa'],
				operation: ['getSa'],
			},
		},
		description: 'Query parameter: Sort Direction',
	},
	{
		displayName: 'Next Cursor',
		name: 'op160_query_nextCursor',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['sa'],
				operation: ['getSa'],
			},
		},
		description: 'Query parameter: Next Cursor',
	},
	{
		displayName: 'Since',
		name: 'op160_query_since',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['sa'],
				operation: ['getSa'],
			},
		},
		description: 'Query parameter: Since',
	},
	{
		displayName: 'Group IDs',
		name: 'op160_query_groupIds',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['sa'],
				operation: ['getSa'],
			},
		},
		description: 'Query parameter: Group IDs',
	},
	{
		displayName: 'Per Page',
		name: 'op160_query_perPage',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['sa'],
				operation: ['getSa'],
			},
		},
		description: 'Query parameter: Per Page',
	},
	{
		displayName: 'Next Cursor',
		name: 'op161_query_nextCursor',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['sa'],
				operation: ['postSaDetails'],
			},
		},
		description: 'Query parameter: Next Cursor',
	},
	{
		displayName: 'JSON Body',
		name: 'op161_body',
		type: 'json',
		default: '{\n  "endpoint": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['sa'],
				operation: ['postSaDetails'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op162_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['sa'],
				operation: ['getSaByIdProcessGraph'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'Next Cursor',
		name: 'op163_query_nextCursor',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['schedules'],
				operation: ['getSchedules'],
			},
		},
		description: 'Query parameter: Next Cursor',
	},
	{
		displayName: 'JSON Body',
		name: 'op164_body',
		type: 'json',
		default:
			'{\n  "command": "",\n  "command_data": {\n    "mac_scan_settings": {\n      "pup_detection": "Detect",\n      "remove": false\n    },\n    "scan_settings": {\n      "ark": false,\n      "fixed_drive": false,\n      "no_archive": false,\n      "pum_detection": "Detect",\n      "pup_detection": "Detect",\n      "remove": false,\n      "scan_memory": true,\n      "scan_path": "",\n      "scan_registry": false,\n      "scan_startup": false,\n      "type": ""\n    },\n    "schedule_for_mac": false,\n    "schedule_for_windows": false\n  },\n  "enabled": true,\n  "name": "",\n  "rrule": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['schedules'],
				operation: ['postSchedules'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op165_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['schedules'],
				operation: ['deleteSchedulesById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op165_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['schedules'],
				operation: ['deleteSchedulesById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op166_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['schedules'],
				operation: ['getSchedulesById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op167_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['schedules'],
				operation: ['putSchedulesById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op167_body',
		type: 'json',
		default:
			'{\n  "command": "",\n  "command_data": {\n    "mac_scan_settings": {\n      "pup_detection": "Detect",\n      "remove": false\n    },\n    "scan_settings": {\n      "ark": false,\n      "fixed_drive": false,\n      "no_archive": false,\n      "pum_detection": "Detect",\n      "pup_detection": "Detect",\n      "remove": false,\n      "scan_memory": true,\n      "scan_path": "",\n      "scan_registry": false,\n      "scan_startup": false,\n      "type": ""\n    },\n    "schedule_for_mac": false,\n    "schedule_for_windows": false\n  },\n  "enabled": true,\n  "etag": "",\n  "name": "",\n  "rrule": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['schedules'],
				operation: ['putSchedulesById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op168_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['schedules'],
				operation: ['putSchedulesByIdGroups'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op168_body',
		type: 'json',
		default: '{}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['schedules'],
				operation: ['putSchedulesByIdGroups'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op169_body',
		type: 'json',
		default: '{\n  "end_date": "",\n  "start_date": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['usage'],
				operation: ['postUsageHistogram'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op170_body',
		type: 'json',
		default: '{\n  "end_date": "",\n  "next_cursor": 0,\n  "page_size": 0,\n  "start_date": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['usage'],
				operation: ['postUsageLogs'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'JSON Body',
		name: 'op171_body',
		type: 'json',
		default: '{\n  "end_date": "",\n  "start_date": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['usage'],
				operation: ['postUsageLogsSummary'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'Next Cursor',
		name: 'op172_query_nextCursor',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['getUsers'],
			},
		},
		description: 'Query parameter: Next Cursor',
	},
	{
		displayName: 'JSON Body',
		name: 'op173_body',
		type: 'json',
		default:
			'{\n  "all_groups_access": false,\n  "ars_permission": false,\n  "email": "",\n  "role": "SuperAdmin"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['postUsers'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op174_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['deleteUsersById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op174_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['deleteUsersById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op175_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['getUsersById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op176_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['putUsersById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op176_body',
		type: 'json',
		default:
			'{\n  "all_groups_access": false,\n  "ars_permission": false,\n  "role": "SuperAdmin"\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['putUsersById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'Next Cursor',
		name: 'op177_query_nextCursor',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['webhooks'],
				operation: ['getWebhooksSubscriptions'],
			},
		},
		description: 'Query parameter: Next Cursor',
	},
	{
		displayName: 'JSON Body',
		name: 'op178_body',
		type: 'json',
		default:
			'{\n  "custom_headers": [\n    {\n      "key": "",\n      "value": ""\n    }\n  ],\n  "description": "",\n  "enabled": false,\n  "max_retries": 10,\n  "secret_token": "",\n  "url": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['webhooks'],
				operation: ['postWebhooksSubscriptions'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op179_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['webhooks'],
				operation: ['deleteWebhooksSubscriptionsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op179_body',
		type: 'json',
		default: '',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['webhooks'],
				operation: ['deleteWebhooksSubscriptionsById'],
			},
		},
		description: 'Request body as JSON',
	},
	{
		displayName: 'ID',
		name: 'op180_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['webhooks'],
				operation: ['getWebhooksSubscriptionsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'op181_path_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['webhooks'],
				operation: ['putWebhooksSubscriptionsById'],
			},
		},
		description: 'Path parameter: ID',
		required: true,
	},
	{
		displayName: 'JSON Body',
		name: 'op181_body',
		type: 'json',
		default:
			'{\n  "custom_headers": [\n    {\n      "key": "",\n      "value": ""\n    }\n  ],\n  "description": "",\n  "enabled": false,\n  "max_retries": 10,\n  "secret_token": "",\n  "url": ""\n}',
		typeOptions: {
			rows: 10,
		},
		displayOptions: {
			show: {
				resource: ['webhooks'],
				operation: ['putWebhooksSubscriptionsById'],
			},
		},
		description: 'Request body as JSON',
	},
];

export const operations: ThreatdownOperation[] = [
	{
		value: 'getAccount',
		resource: 'account',
		name: 'Get Account Details',
		method: 'GET',
		path: '/nebula/v1/account',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
	},
	{
		value: 'getAccountsByAccountIdPreferencesNotifications',
		resource: 'accounts',
		name: 'Get Notifications Preferences',
		method: 'GET',
		path: '/nebula/v1/accounts/{account_id}/preferences/notifications',
		hasAccountIdHeader: false,
		pathParameters: [
			{
				name: 'account_id',
				fieldName: 'op2_path_accountId',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'putAccountsByAccountIdPreferencesNotifications',
		resource: 'accounts',
		name: 'Put Notifications Preferences',
		method: 'PUT',
		path: '/nebula/v1/accounts/{account_id}/preferences/notifications',
		hasAccountIdHeader: false,
		pathParameters: [
			{
				name: 'account_id',
				fieldName: 'op3_path_accountId',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op3_body',
	},
	{
		value: 'postAppBlockActivity',
		resource: 'appBlock',
		name: 'Search App Block Activity',
		method: 'POST',
		path: '/nebula/v1/app-block/activity',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op4_body',
	},
	{
		value: 'postAppBlockActivityExport',
		resource: 'appBlock',
		name: 'Export App Block Activity',
		method: 'POST',
		path: '/nebula/v1/app-block/activity/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op5_body',
	},
	{
		value: 'postAppBlockActivitySearchGroupby',
		resource: 'appBlock',
		name: 'Search App Block Activity Groupby',
		method: 'POST',
		path: '/nebula/v1/app-block/activity/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op6_body',
	},
	{
		value: 'postAppBlockRules',
		resource: 'appBlock',
		name: 'Create App Block Rule',
		method: 'POST',
		path: '/nebula/v1/app-block/rules',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op7_body',
	},
	{
		value: 'postAppBlockRulesSearch',
		resource: 'appBlock',
		name: 'Search App Block Rules',
		method: 'POST',
		path: '/nebula/v1/app-block/rules/search',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op8_body',
	},
	{
		value: 'deleteAppBlockRulesById',
		resource: 'appBlock',
		name: 'Delete App Block Rule',
		method: 'DELETE',
		path: '/nebula/v1/app-block/rules/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op9_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op9_body',
	},
	{
		value: 'getAppBlockRulesById',
		resource: 'appBlock',
		name: 'Get App Block Rule',
		method: 'GET',
		path: '/nebula/v1/app-block/rules/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op10_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'putAppBlockRulesById',
		resource: 'appBlock',
		name: 'Update App Block Rule',
		method: 'PUT',
		path: '/nebula/v1/app-block/rules/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op11_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op11_body',
	},
	{
		value: 'getAppBlockSettings',
		resource: 'appBlock',
		name: 'Get App Block Settings',
		method: 'GET',
		path: '/nebula/v1/app-block/settings',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
	},
	{
		value: 'putAppBlockSettings',
		resource: 'appBlock',
		name: 'Create App Block Settings',
		method: 'PUT',
		path: '/nebula/v1/app-block/settings',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op13_body',
	},
	{
		value: 'postAssetsSoftware',
		resource: 'assets',
		name: 'Search Assets Software',
		method: 'POST',
		path: '/nebula/v1/assets/software',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op14_body',
	},
	{
		value: 'postAssetsSoftwareExport',
		resource: 'assets',
		name: 'Export Assets Software',
		method: 'POST',
		path: '/nebula/v1/assets/software/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op15_body',
	},
	{
		value: 'postAssetsSoftwareSearchGroupby',
		resource: 'assets',
		name: 'Search Assets Software Group By',
		method: 'POST',
		path: '/nebula/v1/assets/software/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op16_body',
	},
	{
		value: 'postContentFiltering',
		resource: 'contentFiltering',
		name: 'Create Content Filtering Rule',
		method: 'POST',
		path: '/nebula/v1/content-filtering',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op17_body',
	},
	{
		value: 'getContentFilteringDomain',
		resource: 'contentFiltering',
		name: 'Get Domain Details',
		method: 'GET',
		path: '/nebula/v1/content-filtering/domain',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
	},
	{
		value: 'getContentFilteringFrequentDomains',
		resource: 'contentFiltering',
		name: 'Get Frequently Used Domain Names',
		method: 'GET',
		path: '/nebula/v1/content-filtering/frequent-domains',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
	},
	{
		value: 'getContentFilteringPolicies',
		resource: 'contentFiltering',
		name: 'Get List Of Policies',
		method: 'GET',
		path: '/nebula/v1/content-filtering/policies',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
	},
	{
		value: 'postContentFilteringSearch',
		resource: 'contentFiltering',
		name: 'Get A List Of Content Filtering Rules',
		method: 'POST',
		path: '/nebula/v1/content-filtering/search',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op21_body',
	},
	{
		value: 'getContentFilteringSettings',
		resource: 'contentFiltering',
		name: 'Get DNS Settings',
		method: 'GET',
		path: '/nebula/v1/content-filtering/settings',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
	},
	{
		value: 'putContentFilteringSettings',
		resource: 'contentFiltering',
		name: 'Create Update DNS Settings',
		method: 'PUT',
		path: '/nebula/v1/content-filtering/settings',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op23_body',
	},
	{
		value: 'deleteContentFilteringById',
		resource: 'contentFiltering',
		name: 'Delete Content Filtering Rule',
		method: 'DELETE',
		path: '/nebula/v1/content-filtering/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op24_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op24_body',
	},
	{
		value: 'getContentFilteringById',
		resource: 'contentFiltering',
		name: 'Get A Content Filtering Rule Details',
		method: 'GET',
		path: '/nebula/v1/content-filtering/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op25_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'putContentFilteringById',
		resource: 'contentFiltering',
		name: 'Update Content Filtering Rule',
		method: 'PUT',
		path: '/nebula/v1/content-filtering/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op26_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op26_body',
	},
	{
		value: 'putContentFilteringByIdEnable',
		resource: 'contentFiltering',
		name: 'Enable Disable Content Filtering Rule',
		method: 'PUT',
		path: '/nebula/v1/content-filtering/{id}/enable',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op27_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op27_body',
	},
	{
		value: 'putContentFilteringByIdEnableForPolicy',
		resource: 'contentFiltering',
		name: 'Enable Disable Content Filtering Rule For Policy',
		method: 'PUT',
		path: '/nebula/v1/content-filtering/{id}/enable-for-policy',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op28_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op28_body',
	},
	{
		value: 'postCve',
		resource: 'cve',
		name: 'Search CVE',
		method: 'POST',
		path: '/nebula/v1/cve',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op29_body',
	},
	{
		value: 'postCveExport',
		resource: 'cve',
		name: 'Export CVE Data',
		method: 'POST',
		path: '/nebula/v1/cve/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op30_body',
	},
	{
		value: 'postCveSearchGroupby',
		resource: 'cve',
		name: 'Search CVE Group By',
		method: 'POST',
		path: '/nebula/v1/cve/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op31_body',
	},
	{
		value: 'getCveById',
		resource: 'cve',
		name: 'Get CVE Details By ID',
		method: 'GET',
		path: '/nebula/v1/cve/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op32_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'postDetections',
		resource: 'detections',
		name: 'Search Detections',
		method: 'POST',
		path: '/nebula/v1/detections',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op33_body',
	},
	{
		value: 'postDetectionsExport',
		resource: 'detections',
		name: 'Export Detections',
		method: 'POST',
		path: '/nebula/v1/detections/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op34_body',
	},
	{
		value: 'postDetectionsSearchGroupby',
		resource: 'detections',
		name: 'Search Detections Group By',
		method: 'POST',
		path: '/nebula/v1/detections/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op35_body',
	},
	{
		value: 'getDetectionsById',
		resource: 'detections',
		name: 'Get Detection By ID',
		method: 'GET',
		path: '/nebula/v1/detections/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op36_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'postDevicecontrol',
		resource: 'devicecontrol',
		name: 'Search Device Control Events',
		method: 'POST',
		path: '/nebula/v1/devicecontrol',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op37_body',
	},
	{
		value: 'postDevicecontrolExport',
		resource: 'devicecontrol',
		name: 'Export Device Control Events',
		method: 'POST',
		path: '/nebula/v1/devicecontrol/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op38_body',
	},
	{
		value: 'postDevicecontrolSearchGroupby',
		resource: 'devicecontrol',
		name: 'Search Device Control Events Group By',
		method: 'POST',
		path: '/nebula/v1/devicecontrol/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op39_body',
	},
	{
		value: 'getDevicecontrolById',
		resource: 'devicecontrol',
		name: 'Get Device Control Event By ID',
		method: 'GET',
		path: '/nebula/v1/devicecontrol/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op40_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'postDns',
		resource: 'dns',
		name: 'Search DNS Logs',
		method: 'POST',
		path: '/nebula/v1/dns',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op41_body',
	},
	{
		value: 'postDnsExport',
		resource: 'dns',
		name: 'Export DNS Log Data',
		method: 'POST',
		path: '/nebula/v1/dns/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op42_body',
	},
	{
		value: 'postDnsSearchGroupby',
		resource: 'dns',
		name: 'Search DNS Logs Group By',
		method: 'POST',
		path: '/nebula/v1/dns/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op43_body',
	},
	{
		value: 'deleteEndpoints',
		resource: 'endpoints',
		name: 'Delete Multiple Machines',
		method: 'DELETE',
		path: '/nebula/v1/endpoints',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op44_body',
	},
	{
		value: 'postEndpoints',
		resource: 'endpoints',
		name: 'Search Endpoints',
		method: 'POST',
		path: '/nebula/v1/endpoints',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op45_body',
	},
	{
		value: 'postEndpointsExport',
		resource: 'endpoints',
		name: 'Export Endpoints',
		method: 'POST',
		path: '/nebula/v1/endpoints/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op46_body',
	},
	{
		value: 'postEndpointsSearchGroupby',
		resource: 'endpoints',
		name: 'Search Grouped Endpoints',
		method: 'POST',
		path: '/nebula/v1/endpoints/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op47_body',
	},
	{
		value: 'deleteEndpointsById',
		resource: 'endpoints',
		name: 'Delete A Machine',
		method: 'DELETE',
		path: '/nebula/v1/endpoints/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op48_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op48_body',
	},
	{
		value: 'getEndpointsById',
		resource: 'endpoints',
		name: 'Get Endpoint',
		method: 'GET',
		path: '/nebula/v1/endpoints/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op49_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'getEndpointsByIdAgentInfo',
		resource: 'endpoints',
		name: 'Get Endpoint Agent Info',
		method: 'GET',
		path: '/nebula/v1/endpoints/{id}/agent_info',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op50_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'getEndpointsByIdAssets',
		resource: 'endpoints',
		name: 'Get Endpoint Assets',
		method: 'GET',
		path: '/nebula/v1/endpoints/{id}/assets',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op51_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'getEndpointsByIdNetwork',
		resource: 'endpoints',
		name: 'Network Information',
		method: 'GET',
		path: '/nebula/v1/endpoints/{id}/network',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op52_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'getEndpointsByIdQuarantine',
		resource: 'endpoints',
		name: 'Get Quarantined Items',
		method: 'GET',
		path: '/nebula/v1/endpoints/{id}/quarantine',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op53_path_id',
				required: true,
			},
		],
		queryParameters: [
			{
				name: 'next_cursor',
				fieldName: 'op53_query_nextCursor',
				required: false,
			},
			{
				name: 'name',
				fieldName: 'op53_query_name',
				required: false,
			},
			{
				name: 'category',
				fieldName: 'op53_query_category',
				required: false,
			},
			{
				name: 'type',
				fieldName: 'op53_query_type',
				required: false,
			},
			{
				name: 'since',
				fieldName: 'op53_query_since',
				required: false,
			},
			{
				name: 'until',
				fieldName: 'op53_query_until',
				required: false,
			},
		],
	},
	{
		value: 'getEndpointsByIdSa',
		resource: 'endpoints',
		name: 'All Suspicious Activity Of An Endpoint',
		method: 'GET',
		path: '/nebula/v1/endpoints/{id}/sa',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op54_path_id',
				required: true,
			},
		],
		queryParameters: [
			{
				name: 'sort_field',
				fieldName: 'op54_query_sortField',
				required: false,
			},
			{
				name: 'sort_direction',
				fieldName: 'op54_query_sortDirection',
				required: false,
			},
			{
				name: 'next_cursor',
				fieldName: 'op54_query_nextCursor',
				required: false,
			},
			{
				name: 'since',
				fieldName: 'op54_query_since',
				required: false,
			},
			{
				name: 'per_page',
				fieldName: 'op54_query_perPage',
				required: false,
			},
		],
	},
	{
		value: 'putEndpointsByIdSaBySaIdClose',
		resource: 'endpoints',
		name: 'Close Suspicious Activity Of An Endpoint',
		method: 'PUT',
		path: '/nebula/v1/endpoints/{id}/sa/{sa_id}/close',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op55_path_id',
				required: true,
			},
			{
				name: 'sa_id',
				fieldName: 'op55_path_saId',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op55_body',
	},
	{
		value: 'getEndpointsByIdSaBySaIdExclusions',
		resource: 'endpoints',
		name: 'Specific Suspicious Activity Of An Endpoint',
		method: 'GET',
		path: '/nebula/v1/endpoints/{id}/sa/{sa_id}/exclusions',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op56_path_id',
				required: true,
			},
			{
				name: 'sa_id',
				fieldName: 'op56_path_saId',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'putEndpointsByIdSaBySaIdOpen',
		resource: 'endpoints',
		name: 'Open Suspicious Activity Of An Endpoint',
		method: 'PUT',
		path: '/nebula/v1/endpoints/{id}/sa/{sa_id}/open',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op57_path_id',
				required: true,
			},
			{
				name: 'sa_id',
				fieldName: 'op57_path_saId',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op57_body',
	},
	{
		value: 'postEndpointsByIdSaBySaIdRemediate',
		resource: 'endpoints',
		name: 'Remediate Suspicious Activity Of An Endpoint',
		method: 'POST',
		path: '/nebula/v1/endpoints/{id}/sa/{sa_id}/remediate',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op58_path_id',
				required: true,
			},
			{
				name: 'sa_id',
				fieldName: 'op58_path_saId',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op58_body',
	},
	{
		value: 'getEndpointsByIdScans',
		resource: 'endpoints',
		name: 'Get Scans Of An Endpoint',
		method: 'GET',
		path: '/nebula/v1/endpoints/{id}/scans',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op59_path_id',
				required: true,
			},
		],
		queryParameters: [
			{
				name: 'since',
				fieldName: 'op59_query_since',
				required: false,
			},
			{
				name: 'threats_detected',
				fieldName: 'op59_query_threatsDetected',
				required: false,
			},
			{
				name: 'start_index',
				fieldName: 'op59_query_startIndex',
				required: false,
			},
			{
				name: 'page_size',
				fieldName: 'op59_query_pageSize',
				required: false,
			},
			{
				name: 'populate',
				fieldName: 'op59_query_populate',
				required: false,
			},
		],
	},
	{
		value: 'getEndpointsByIdScansByScanId',
		resource: 'endpoints',
		name: 'Get A Scan Of An Endpoint',
		method: 'GET',
		path: '/nebula/v1/endpoints/{id}/scans/{scan_id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op60_path_id',
				required: true,
			},
			{
				name: 'scan_id',
				fieldName: 'op60_path_scanId',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'getEndpointsByIdScansByScanIdDetections',
		resource: 'endpoints',
		name: 'Get The Detections Of A Scan',
		method: 'GET',
		path: '/nebula/v1/endpoints/{id}/scans/{scan_id}/detections',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op61_path_id',
				required: true,
			},
			{
				name: 'scan_id',
				fieldName: 'op61_path_scanId',
				required: true,
			},
		],
		queryParameters: [
			{
				name: 'next_cursor',
				fieldName: 'op61_query_nextCursor',
				required: false,
			},
			{
				name: 'since',
				fieldName: 'op61_query_since',
				required: false,
			},
		],
	},
	{
		value: 'getEndpointsByIdStatus',
		resource: 'endpoints',
		name: 'Endpoint Status',
		method: 'GET',
		path: '/nebula/v1/endpoints/{id}/status',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op62_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'putEndpointsByIdTags',
		resource: 'endpoints',
		name: 'Set Endpoint Tags',
		method: 'PUT',
		path: '/nebula/v1/endpoints/{id}/tags',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op63_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op63_body',
	},
	{
		value: 'getEvents',
		resource: 'events',
		name: 'Retrieve Events',
		method: 'GET',
		path: '/nebula/v1/events',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [
			{
				name: 'next_cursor',
				fieldName: 'op64_query_nextCursor',
				required: false,
			},
			{
				name: 'search_string',
				fieldName: 'op64_query_searchString',
				required: false,
			},
			{
				name: 'machine_id',
				fieldName: 'op64_query_machineId',
				required: false,
			},
			{
				name: 'start',
				fieldName: 'op64_query_start',
				required: false,
			},
			{
				name: 'end',
				fieldName: 'op64_query_end',
				required: false,
			},
			{
				name: 'severity_flags',
				fieldName: 'op64_query_severityFlags',
				required: false,
			},
			{
				name: 'source',
				fieldName: 'op64_query_source',
				required: false,
			},
		],
	},
	{
		value: 'getExclusions',
		resource: 'exclusions',
		name: 'Get Exclusions',
		method: 'GET',
		path: '/nebula/v1/exclusions',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [
			{
				name: 'next_cursor',
				fieldName: 'op65_query_nextCursor',
				required: false,
			},
			{
				name: 'search_string',
				fieldName: 'op65_query_searchString',
				required: false,
			},
			{
				name: 'policy_ids',
				fieldName: 'op65_query_policyIds',
				required: false,
			},
			{
				name: 'type',
				fieldName: 'op65_query_type',
				required: false,
			},
			{
				name: 'since',
				fieldName: 'op65_query_since',
				required: false,
			},
			{
				name: 'until',
				fieldName: 'op65_query_until',
				required: false,
			},
			{
				name: 'sort_by',
				fieldName: 'op65_query_sortBy',
				required: false,
			},
			{
				name: 'sort_order',
				fieldName: 'op65_query_sortOrder',
				required: false,
			},
		],
	},
	{
		value: 'postExclusions',
		resource: 'exclusions',
		name: 'Create Exclusion',
		method: 'POST',
		path: '/nebula/v1/exclusions',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op66_body',
	},
	{
		value: 'deleteExclusionsById',
		resource: 'exclusions',
		name: 'Delete Exclusion By ID',
		method: 'DELETE',
		path: '/nebula/v1/exclusions/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op67_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op67_body',
	},
	{
		value: 'getExclusionsById',
		resource: 'exclusions',
		name: 'Get Exclusion By ID',
		method: 'GET',
		path: '/nebula/v1/exclusions/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op68_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'putExclusionsById',
		resource: 'exclusions',
		name: 'Update Exclusion',
		method: 'PUT',
		path: '/nebula/v1/exclusions/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op69_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op69_body',
	},
	{
		value: 'postFlightRecorderChart',
		resource: 'flightRecorder',
		name: 'Search Occurrence Of Suspicious Activity',
		method: 'POST',
		path: '/nebula/v1/flight-recorder/chart',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op70_body',
	},
	{
		value: 'postFlightRecorderEndpoints',
		resource: 'flightRecorder',
		name: 'Search Suspicious Activity Receiving Impact Information On An Endpoint',
		method: 'POST',
		path: '/nebula/v1/flight-recorder/endpoints',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op71_body',
	},
	{
		value: 'postFlightRecorderProcessGraph',
		resource: 'flightRecorder',
		name: 'Search The Process Graph',
		method: 'POST',
		path: '/nebula/v1/flight-recorder/process_graph',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op72_body',
	},
	{
		value: 'postFlightRecorderProcesses',
		resource: 'flightRecorder',
		name: 'Search A List Of Processes',
		method: 'POST',
		path: '/nebula/v1/flight-recorder/processes',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op73_body',
	},
	{
		value: 'postFlightRecorderRawEvents',
		resource: 'flightRecorder',
		name: 'Search A List Of Raw Events',
		method: 'POST',
		path: '/nebula/v1/flight-recorder/raw_events',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op74_body',
	},
	{
		value: 'postFlightRecorderRecap',
		resource: 'flightRecorder',
		name: 'Search Suspicious Activity',
		method: 'POST',
		path: '/nebula/v1/flight-recorder/recap',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op75_body',
	},
	{
		value: 'postFlightRecorderSearch',
		resource: 'flightRecorder',
		name: 'Search The Flight Recorder With Advanced Queries',
		method: 'POST',
		path: '/nebula/v1/flight-recorder/search',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op76_body',
	},
	{
		value: 'postGridAssetsSoftwareExport',
		resource: 'grid',
		name: 'Export Software Assets',
		method: 'POST',
		path: '/nebula/v1/grid/assets/software/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op77_body',
	},
	{
		value: 'postGridAssetsSoftwareSearch',
		resource: 'grid',
		name: 'Search Software Assets',
		method: 'POST',
		path: '/nebula/v1/grid/assets/software/search',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op78_body',
	},
	{
		value: 'postGridAssetsSoftwareSearchGroupby',
		resource: 'grid',
		name: 'Search Grouped Software Assets',
		method: 'POST',
		path: '/nebula/v1/grid/assets/software/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op79_body',
	},
	{
		value: 'postGridCveExport',
		resource: 'grid',
		name: 'Export CVEs',
		method: 'POST',
		path: '/nebula/v1/grid/cve/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op80_body',
	},
	{
		value: 'postGridCveSearch',
		resource: 'grid',
		name: 'Search CVEs',
		method: 'POST',
		path: '/nebula/v1/grid/cve/search',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op81_body',
	},
	{
		value: 'postGridCveSearchGroupby',
		resource: 'grid',
		name: 'Search Grouped CVEs',
		method: 'POST',
		path: '/nebula/v1/grid/cve/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op82_body',
	},
	{
		value: 'postGridDetectionsExport',
		resource: 'grid',
		name: 'Export Detections',
		method: 'POST',
		path: '/nebula/v1/grid/detections/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op83_body',
	},
	{
		value: 'postGridDetectionsSearch',
		resource: 'grid',
		name: 'Search Detections',
		method: 'POST',
		path: '/nebula/v1/grid/detections/search',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op84_body',
	},
	{
		value: 'postGridDetectionsSearchGroupby',
		resource: 'grid',
		name: 'Search Grouped Detections',
		method: 'POST',
		path: '/nebula/v1/grid/detections/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op85_body',
	},
	{
		value: 'postGridDeviceControlExport',
		resource: 'grid',
		name: 'Export Device Control Events',
		method: 'POST',
		path: '/nebula/v1/grid/device-control/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op86_body',
	},
	{
		value: 'postGridDeviceControlSearch',
		resource: 'grid',
		name: 'Search Device Control Events',
		method: 'POST',
		path: '/nebula/v1/grid/device-control/search',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op87_body',
	},
	{
		value: 'postGridDeviceControlSearchGroupby',
		resource: 'grid',
		name: 'Search Grouped Device Control Events',
		method: 'POST',
		path: '/nebula/v1/grid/device-control/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op88_body',
	},
	{
		value: 'postGridDnsExport',
		resource: 'grid',
		name: 'Export DNS Activity',
		method: 'POST',
		path: '/nebula/v1/grid/dns/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op89_body',
	},
	{
		value: 'postGridDnsSearch',
		resource: 'grid',
		name: 'Search DNS Activity',
		method: 'POST',
		path: '/nebula/v1/grid/dns/search',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op90_body',
	},
	{
		value: 'postGridDnsSearchGroupby',
		resource: 'grid',
		name: 'Search Grouped DNS Activity',
		method: 'POST',
		path: '/nebula/v1/grid/dns/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op91_body',
	},
	{
		value: 'postGridEndpointsExport',
		resource: 'grid',
		name: 'Export Endpoints',
		method: 'POST',
		path: '/nebula/v1/grid/endpoints/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op92_body',
	},
	{
		value: 'postGridEndpointsSearch',
		resource: 'grid',
		name: 'Search Endpoints',
		method: 'POST',
		path: '/nebula/v1/grid/endpoints/search',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op93_body',
	},
	{
		value: 'postGridEndpointsSearchGroupby',
		resource: 'grid',
		name: 'Search Grouped Endpoints',
		method: 'POST',
		path: '/nebula/v1/grid/endpoints/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op94_body',
	},
	{
		value: 'postGridEventsExport',
		resource: 'grid',
		name: 'Export Events',
		method: 'POST',
		path: '/nebula/v1/grid/events/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op95_body',
	},
	{
		value: 'postGridEventsSearch',
		resource: 'grid',
		name: 'Search Events',
		method: 'POST',
		path: '/nebula/v1/grid/events/search',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op96_body',
	},
	{
		value: 'postGridEventsSearchGroupby',
		resource: 'grid',
		name: 'Search Events Groupby',
		method: 'POST',
		path: '/nebula/v1/grid/events/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op97_body',
	},
	{
		value: 'postGridOsPatchesExport',
		resource: 'grid',
		name: 'Export OS Patches',
		method: 'POST',
		path: '/nebula/v1/grid/os-patches/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op98_body',
	},
	{
		value: 'postGridOsPatchesSearch',
		resource: 'grid',
		name: 'Search OS Patches',
		method: 'POST',
		path: '/nebula/v1/grid/os-patches/search',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op99_body',
	},
	{
		value: 'postGridOsPatchesSearchGroupby',
		resource: 'grid',
		name: 'Search Grouped OS Patches',
		method: 'POST',
		path: '/nebula/v1/grid/os-patches/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op100_body',
	},
	{
		value: 'postGridRidExport',
		resource: 'grid',
		name: 'Export RID Rules',
		method: 'POST',
		path: '/nebula/v1/grid/rid/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op101_body',
	},
	{
		value: 'postGridRidSearch',
		resource: 'grid',
		name: 'Search RID Rules',
		method: 'POST',
		path: '/nebula/v1/grid/rid/search',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op102_body',
	},
	{
		value: 'postGridRidSearchGroupby',
		resource: 'grid',
		name: 'Search Grouped RID Rules',
		method: 'POST',
		path: '/nebula/v1/grid/rid/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op103_body',
	},
	{
		value: 'getGroups',
		resource: 'groups',
		name: 'Get All Groups',
		method: 'GET',
		path: '/nebula/v1/groups',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [
			{
				name: 'name',
				fieldName: 'op104_query_name',
				required: false,
			},
			{
				name: 'parent_id',
				fieldName: 'op104_query_parentId',
				required: false,
			},
			{
				name: 'filter_by_parent_id',
				fieldName: 'op104_query_filterByParentId',
				required: false,
			},
			{
				name: 'next_cursor',
				fieldName: 'op104_query_nextCursor',
				required: false,
			},
		],
	},
	{
		value: 'postGroups',
		resource: 'groups',
		name: 'Create Group',
		method: 'POST',
		path: '/nebula/v1/groups',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op105_body',
	},
	{
		value: 'deleteGroupsById',
		resource: 'groups',
		name: 'Delete Group By Its ID',
		method: 'DELETE',
		path: '/nebula/v1/groups/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op106_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op106_body',
	},
	{
		value: 'getGroupsById',
		resource: 'groups',
		name: 'Get Group By ID',
		method: 'GET',
		path: '/nebula/v1/groups/{id}',
		hasAccountIdHeader: false,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op107_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'putGroupsById',
		resource: 'groups',
		name: 'Update Group',
		method: 'PUT',
		path: '/nebula/v1/groups/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op108_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op108_body',
	},
	{
		value: 'postGroupsByIdMachines',
		resource: 'groups',
		name: 'Assign Endpoints To A Group',
		method: 'POST',
		path: '/nebula/v1/groups/{id}/machines',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op109_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op109_body',
	},
	{
		value: 'getInstallationToken',
		resource: 'installationToken',
		name: 'Get Installation Tokens',
		method: 'GET',
		path: '/nebula/v1/installation-token',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [
			{
				name: 'sort_by',
				fieldName: 'op110_query_sortBy',
				required: false,
			},
			{
				name: 'sort_order',
				fieldName: 'op110_query_sortOrder',
				required: false,
			},
			{
				name: 'include_used',
				fieldName: 'op110_query_includeUsed',
				required: false,
			},
			{
				name: 'include_expired',
				fieldName: 'op110_query_includeExpired',
				required: false,
			},
			{
				name: 'populate',
				fieldName: 'op110_query_populate',
				required: false,
			},
			{
				name: 'page_size',
				fieldName: 'op110_query_pageSize',
				required: false,
			},
			{
				name: 'start_index',
				fieldName: 'op110_query_startIndex',
				required: false,
			},
		],
	},
	{
		value: 'postInstallationToken',
		resource: 'installationToken',
		name: 'Generate An Installation Tokens',
		method: 'POST',
		path: '/nebula/v1/installation-token',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op111_body',
	},
	{
		value: 'postInstallationTokenSend',
		resource: 'installationToken',
		name: 'Send Installation Tokens',
		method: 'POST',
		path: '/nebula/v1/installation-token/send',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op112_body',
	},
	{
		value: 'deleteInstallationTokenByToken',
		resource: 'installationToken',
		name: 'Revoke Installation Token',
		method: 'DELETE',
		path: '/nebula/v1/installation-token/{token}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'token',
				fieldName: 'op113_path_token',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op113_body',
	},
	{
		value: 'getInstallers',
		resource: 'installers',
		name: 'Retrieve Installerss Links',
		method: 'GET',
		path: '/nebula/v1/installers',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
	},
	{
		value: 'postJobs',
		resource: 'jobs',
		name: 'Issue A Job',
		method: 'POST',
		path: '/nebula/v1/jobs',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op115_body',
	},
	{
		value: 'deleteJobsBulk',
		resource: 'jobs',
		name: 'Cancel Pending Jobs',
		method: 'DELETE',
		path: '/nebula/v1/jobs/bulk',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op116_body',
	},
	{
		value: 'postJobsBulk',
		resource: 'jobs',
		name: 'Issue Jobs',
		method: 'POST',
		path: '/nebula/v1/jobs/bulk',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op117_body',
	},
	{
		value: 'postJobsExport',
		resource: 'jobs',
		name: 'Export Jobs',
		method: 'POST',
		path: '/nebula/v1/jobs/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op118_body',
	},
	{
		value: 'postJobsSearch',
		resource: 'jobs',
		name: 'Search Jobs',
		method: 'POST',
		path: '/nebula/v1/jobs/search',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op119_body',
	},
	{
		value: 'postJobsSearchGroupby',
		resource: 'jobs',
		name: 'Search Jobs Group By',
		method: 'POST',
		path: '/nebula/v1/jobs/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op120_body',
	},
	{
		value: 'getJobsById',
		resource: 'jobs',
		name: 'Get Details About A Job',
		method: 'GET',
		path: '/nebula/v1/jobs/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op121_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'getNotificationsSubscriptions',
		resource: 'notifications',
		name: 'Get All Notifications',
		method: 'GET',
		path: '/nebula/v1/notifications/subscriptions',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [
			{
				name: 'owner',
				fieldName: 'op122_query_owner',
				required: false,
			},
			{
				name: 'next_cursor',
				fieldName: 'op122_query_nextCursor',
				required: false,
			},
		],
	},
	{
		value: 'postNotificationsSubscriptions',
		resource: 'notifications',
		name: 'Create Notification',
		method: 'POST',
		path: '/nebula/v1/notifications/subscriptions',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op123_body',
	},
	{
		value: 'deleteNotificationsSubscriptionsBulk',
		resource: 'notifications',
		name: 'Delete Notification Bulk',
		method: 'DELETE',
		path: '/nebula/v1/notifications/subscriptions/bulk',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op124_body',
	},
	{
		value: 'putNotificationsSubscriptionsBulk',
		resource: 'notifications',
		name: 'Update Notification Bulk',
		method: 'PUT',
		path: '/nebula/v1/notifications/subscriptions/bulk',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op125_body',
	},
	{
		value: 'deleteNotificationsSubscriptionsById',
		resource: 'notifications',
		name: 'Delete Notification',
		method: 'DELETE',
		path: '/nebula/v1/notifications/subscriptions/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op126_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op126_body',
	},
	{
		value: 'getNotificationsSubscriptionsById',
		resource: 'notifications',
		name: 'Get Notification',
		method: 'GET',
		path: '/nebula/v1/notifications/subscriptions/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op127_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'putNotificationsSubscriptionsById',
		resource: 'notifications',
		name: 'Update Notification',
		method: 'PUT',
		path: '/nebula/v1/notifications/subscriptions/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op128_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op128_body',
	},
	{
		value: 'postOsPatches',
		resource: 'osPatches',
		name: 'Search OS Patches',
		method: 'POST',
		path: '/nebula/v1/os-patches',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op129_body',
	},
	{
		value: 'postOsPatchesExport',
		resource: 'osPatches',
		name: 'Export OS Patches',
		method: 'POST',
		path: '/nebula/v1/os-patches/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op130_body',
	},
	{
		value: 'postOsPatchesSearchGroupby',
		resource: 'osPatches',
		name: 'Search OS Patches Group By',
		method: 'POST',
		path: '/nebula/v1/os-patches/search-groupby',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op131_body',
	},
	{
		value: 'getPolicies',
		resource: 'policies',
		name: 'Get Policy By ID',
		method: 'GET',
		path: '/nebula/v1/policies',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
	},
	{
		value: 'postPolicies',
		resource: 'policies',
		name: 'Create Policy',
		method: 'POST',
		path: '/nebula/v1/policies',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op133_body',
	},
	{
		value: 'getPoliciesSystemDefault',
		resource: 'policies',
		name: 'Get System Default Policy',
		method: 'GET',
		path: '/nebula/v1/policies/system_default',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
	},
	{
		value: 'deletePoliciesById',
		resource: 'policies',
		name: 'Delete Policy',
		method: 'DELETE',
		path: '/nebula/v1/policies/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op135_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op135_body',
	},
	{
		value: 'getPoliciesById',
		resource: 'policies',
		name: 'Get Policy By ID',
		method: 'GET',
		path: '/nebula/v1/policies/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op136_path_id',
				required: true,
			},
		],
		queryParameters: [
			{
				name: 'populate',
				fieldName: 'op136_query_populate',
				required: false,
			},
		],
	},
	{
		value: 'putPoliciesById',
		resource: 'policies',
		name: 'Update Policy',
		method: 'PUT',
		path: '/nebula/v1/policies/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op137_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op137_body',
	},
	{
		value: 'deletePoliciesByIdIsolationImage',
		resource: 'policies',
		name: 'Delete Policy Isolation Image',
		method: 'DELETE',
		path: '/nebula/v1/policies/{id}/isolation_image',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op138_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op138_body',
	},
	{
		value: 'getPoliciesByIdIsolationImage',
		resource: 'policies',
		name: 'Get Policy Isolation Image By ID',
		method: 'GET',
		path: '/nebula/v1/policies/{id}/isolation_image',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op139_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'postPoliciesByIdIsolationImage',
		resource: 'policies',
		name: 'Add Isolation Image',
		method: 'POST',
		path: '/nebula/v1/policies/{id}/isolation_image',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op140_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op140_body',
	},
	{
		value: 'putPoliciesByIdPromote',
		resource: 'policies',
		name: 'Promote Policy',
		method: 'PUT',
		path: '/nebula/v1/policies/{id}/promote',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op141_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op141_body',
	},
	{
		value: 'getPoliciesByIdSecret',
		resource: 'policies',
		name: 'Get Policy Secret By ID',
		method: 'GET',
		path: '/nebula/v1/policies/{id}/secret',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op142_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'postPoliciesByIdSecret',
		resource: 'policies',
		name: 'Set Policy Secret By ID',
		method: 'POST',
		path: '/nebula/v1/policies/{id}/secret',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op143_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op143_body',
	},
	{
		value: 'postPoliciesBySourceIdClone',
		resource: 'policies',
		name: 'Clone Policy',
		method: 'POST',
		path: '/nebula/v1/policies/{source_id}/clone',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'source_id',
				fieldName: 'op144_path_sourceId',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op144_body',
	},
	{
		value: 'postProducts',
		resource: 'products',
		name: 'Search Products',
		method: 'POST',
		path: '/nebula/v1/products',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op145_body',
	},
	{
		value: 'postProductsVendors',
		resource: 'products',
		name: 'Search Vendors',
		method: 'POST',
		path: '/nebula/v1/products/vendors',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op146_body',
	},
	{
		value: 'getQuarantine',
		resource: 'quarantine',
		name: 'Get All Quarantined Items',
		method: 'GET',
		path: '/nebula/v1/quarantine',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [
			{
				name: 'next_cursor',
				fieldName: 'op147_query_nextCursor',
				required: false,
			},
			{
				name: 'name',
				fieldName: 'op147_query_name',
				required: false,
			},
			{
				name: 'category',
				fieldName: 'op147_query_category',
				required: false,
			},
			{
				name: 'type',
				fieldName: 'op147_query_type',
				required: false,
			},
			{
				name: 'since',
				fieldName: 'op147_query_since',
				required: false,
			},
			{
				name: 'until',
				fieldName: 'op147_query_until',
				required: false,
			},
		],
	},
	{
		value: 'postQuarantineAction',
		resource: 'quarantine',
		name: 'Bulk Quarantine Action',
		method: 'POST',
		path: '/nebula/v1/quarantine/action',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op148_body',
	},
	{
		value: 'postQuarantineExport',
		resource: 'quarantine',
		name: 'Export Quarantines',
		method: 'POST',
		path: '/nebula/v1/quarantine/export',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op149_body',
	},
	{
		value: 'deleteReports',
		resource: 'reports',
		name: 'Delete Reports Bulk',
		method: 'DELETE',
		path: '/nebula/v1/reports',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op150_body',
	},
	{
		value: 'getReports',
		resource: 'reports',
		name: 'Get All Reports',
		method: 'GET',
		path: '/nebula/v1/reports',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
	},
	{
		value: 'postReports',
		resource: 'reports',
		name: 'Create Report',
		method: 'POST',
		path: '/nebula/v1/reports',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op152_body',
	},
	{
		value: 'deleteReportsById',
		resource: 'reports',
		name: 'Delete Report By ID',
		method: 'DELETE',
		path: '/nebula/v1/reports/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op153_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op153_body',
	},
	{
		value: 'getReportsById',
		resource: 'reports',
		name: 'Get Report By ID',
		method: 'GET',
		path: '/nebula/v1/reports/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op154_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'putReportsById',
		resource: 'reports',
		name: 'Update Report',
		method: 'PUT',
		path: '/nebula/v1/reports/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op155_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op155_body',
	},
	{
		value: 'postReportsByIdGenerate',
		resource: 'reports',
		name: 'Generate Report',
		method: 'POST',
		path: '/nebula/v1/reports/{id}/generate',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op156_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op156_body',
	},
	{
		value: 'postRidRules',
		resource: 'rid',
		name: 'Search RID Rules',
		method: 'POST',
		path: '/nebula/v1/rid/rules',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op157_body',
	},
	{
		value: 'postRidRulesExport',
		resource: 'rid',
		name: 'Export RID Rules',
		method: 'POST',
		path: '/nebula/v1/rid/rules/export',
		hasAccountIdHeader: false,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op158_body',
	},
	{
		value: 'postRidRulesSearchGroupby',
		resource: 'rid',
		name: 'Search Grouped RID',
		method: 'POST',
		path: '/nebula/v1/rid/rules/search-groupby',
		hasAccountIdHeader: false,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op159_body',
	},
	{
		value: 'getSa',
		resource: 'sa',
		name: 'Suspicious Activity Of The Account',
		method: 'GET',
		path: '/nebula/v1/sa',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [
			{
				name: 'sort_field',
				fieldName: 'op160_query_sortField',
				required: false,
			},
			{
				name: 'sort_direction',
				fieldName: 'op160_query_sortDirection',
				required: false,
			},
			{
				name: 'next_cursor',
				fieldName: 'op160_query_nextCursor',
				required: false,
			},
			{
				name: 'since',
				fieldName: 'op160_query_since',
				required: false,
			},
			{
				name: 'group_ids',
				fieldName: 'op160_query_groupIds',
				required: false,
			},
			{
				name: 'per_page',
				fieldName: 'op160_query_perPage',
				required: false,
			},
		],
	},
	{
		value: 'postSaDetails',
		resource: 'sa',
		name: 'Suspicious Activity Details',
		method: 'POST',
		path: '/nebula/v1/sa/details',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [
			{
				name: 'next_cursor',
				fieldName: 'op161_query_nextCursor',
				required: false,
			},
		],
		bodyFieldName: 'op161_body',
	},
	{
		value: 'getSaByIdProcessGraph',
		resource: 'sa',
		name: 'Suspicious Activity Process Graph',
		method: 'GET',
		path: '/nebula/v1/sa/{id}/process_graph',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op162_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'getSchedules',
		resource: 'schedules',
		name: 'Get Schedules',
		method: 'GET',
		path: '/nebula/v1/schedules',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [
			{
				name: 'next_cursor',
				fieldName: 'op163_query_nextCursor',
				required: false,
			},
		],
	},
	{
		value: 'postSchedules',
		resource: 'schedules',
		name: 'Create Schedule',
		method: 'POST',
		path: '/nebula/v1/schedules',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op164_body',
	},
	{
		value: 'deleteSchedulesById',
		resource: 'schedules',
		name: 'Delete A Schedule',
		method: 'DELETE',
		path: '/nebula/v1/schedules/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op165_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op165_body',
	},
	{
		value: 'getSchedulesById',
		resource: 'schedules',
		name: 'Get Schedule By ID',
		method: 'GET',
		path: '/nebula/v1/schedules/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op166_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'putSchedulesById',
		resource: 'schedules',
		name: 'Update Schedule',
		method: 'PUT',
		path: '/nebula/v1/schedules/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op167_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op167_body',
	},
	{
		value: 'putSchedulesByIdGroups',
		resource: 'schedules',
		name: 'Add Groups For Schedule',
		method: 'PUT',
		path: '/nebula/v1/schedules/{id}/groups',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op168_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op168_body',
	},
	{
		value: 'postUsageHistogram',
		resource: 'usage',
		name: 'Search Usage Histogram',
		method: 'POST',
		path: '/nebula/v1/usage/histogram',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op169_body',
	},
	{
		value: 'postUsageLogs',
		resource: 'usage',
		name: 'Search Logs Of Usage',
		method: 'POST',
		path: '/nebula/v1/usage/logs',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op170_body',
	},
	{
		value: 'postUsageLogsSummary',
		resource: 'usage',
		name: 'Search Summary Of Usage',
		method: 'POST',
		path: '/nebula/v1/usage/logs/summary',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op171_body',
	},
	{
		value: 'getUsers',
		resource: 'users',
		name: 'Get Nebula Users',
		method: 'GET',
		path: '/nebula/v1/users',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [
			{
				name: 'next_cursor',
				fieldName: 'op172_query_nextCursor',
				required: false,
			},
		],
	},
	{
		value: 'postUsers',
		resource: 'users',
		name: 'Create User',
		method: 'POST',
		path: '/nebula/v1/users',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op173_body',
	},
	{
		value: 'deleteUsersById',
		resource: 'users',
		name: 'Delete A Nebula User',
		method: 'DELETE',
		path: '/nebula/v1/users/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op174_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op174_body',
	},
	{
		value: 'getUsersById',
		resource: 'users',
		name: 'Get One User',
		method: 'GET',
		path: '/nebula/v1/users/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op175_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'putUsersById',
		resource: 'users',
		name: 'Update User',
		method: 'PUT',
		path: '/nebula/v1/users/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op176_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op176_body',
	},
	{
		value: 'getWebhooksSubscriptions',
		resource: 'webhooks',
		name: 'Get All Subscriptions',
		method: 'GET',
		path: '/nebula/v1/webhooks/subscriptions',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [
			{
				name: 'next_cursor',
				fieldName: 'op177_query_nextCursor',
				required: false,
			},
		],
	},
	{
		value: 'postWebhooksSubscriptions',
		resource: 'webhooks',
		name: 'Create Subscription',
		method: 'POST',
		path: '/nebula/v1/webhooks/subscriptions',
		hasAccountIdHeader: true,
		pathParameters: [],
		queryParameters: [],
		bodyFieldName: 'op178_body',
	},
	{
		value: 'deleteWebhooksSubscriptionsById',
		resource: 'webhooks',
		name: 'Delete Subscription',
		method: 'DELETE',
		path: '/nebula/v1/webhooks/subscriptions/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op179_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op179_body',
	},
	{
		value: 'getWebhooksSubscriptionsById',
		resource: 'webhooks',
		name: 'Get A Subscription',
		method: 'GET',
		path: '/nebula/v1/webhooks/subscriptions/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op180_path_id',
				required: true,
			},
		],
		queryParameters: [],
	},
	{
		value: 'putWebhooksSubscriptionsById',
		resource: 'webhooks',
		name: 'Update A Subscription',
		method: 'PUT',
		path: '/nebula/v1/webhooks/subscriptions/{id}',
		hasAccountIdHeader: true,
		pathParameters: [
			{
				name: 'id',
				fieldName: 'op181_path_id',
				required: true,
			},
		],
		queryParameters: [],
		bodyFieldName: 'op181_body',
	},
];
