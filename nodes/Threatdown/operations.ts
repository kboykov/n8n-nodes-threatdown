import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export type ThreatdownHttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ThreatdownParameter {
	name: string;
	fieldName: string;
	required: boolean;
}

export type ThreatdownBodyParameterType = 'string' | 'number' | 'boolean';

export interface ThreatdownBodyParameter {
	name: string;
	fieldName: string;
	path: string[];
	type: ThreatdownBodyParameterType;
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
	bodyCollectionFieldName?: string;
	bodyParameters: ThreatdownBodyParameter[];
	bodyFieldName?: string;
}

export const resourceOptions: INodePropertyOptions[] = [
	{
		"name": "Account",
		"value": "account"
	},
	{
		"name": "Accounts",
		"value": "accounts"
	},
	{
		"name": "App Block",
		"value": "appBlock"
	},
	{
		"name": "Assets",
		"value": "assets"
	},
	{
		"name": "Content Filtering",
		"value": "contentFiltering"
	},
	{
		"name": "CVE",
		"value": "cve"
	},
	{
		"name": "Detections",
		"value": "detections"
	},
	{
		"name": "Device Control",
		"value": "devicecontrol"
	},
	{
		"name": "DNS",
		"value": "dns"
	},
	{
		"name": "Endpoints",
		"value": "endpoints"
	},
	{
		"name": "Events",
		"value": "events"
	},
	{
		"name": "Exclusions",
		"value": "exclusions"
	},
	{
		"name": "Flight Recorder",
		"value": "flightRecorder"
	},
	{
		"name": "Grid",
		"value": "grid"
	},
	{
		"name": "Groups",
		"value": "groups"
	},
	{
		"name": "Installation Token",
		"value": "installationToken"
	},
	{
		"name": "Installers",
		"value": "installers"
	},
	{
		"name": "Jobs",
		"value": "jobs"
	},
	{
		"name": "Notifications",
		"value": "notifications"
	},
	{
		"name": "OS Patches",
		"value": "osPatches"
	},
	{
		"name": "Policies",
		"value": "policies"
	},
	{
		"name": "Products",
		"value": "products"
	},
	{
		"name": "Quarantine",
		"value": "quarantine"
	},
	{
		"name": "Reports",
		"value": "reports"
	},
	{
		"name": "RID",
		"value": "rid"
	},
	{
		"name": "SA",
		"value": "sa"
	},
	{
		"name": "Schedules",
		"value": "schedules"
	},
	{
		"name": "Usage",
		"value": "usage"
	},
	{
		"name": "Users",
		"value": "users"
	},
	{
		"name": "Webhooks",
		"value": "webhooks"
	}
];

export const operationOptionProperties: INodeProperties[] = [
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"account"
				]
			}
		},
		"options": [
			{
				"name": "Get Account Details",
				"value": "getAccount",
				"action": "Get account details"
			}
		],
		"default": "getAccount"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"accounts"
				]
			}
		},
		"options": [
			{
				"name": "Get Notifications Preferences",
				"value": "getAccountsByAccountIdPreferencesNotifications",
				"action": "Get notifications preferences"
			},
			{
				"name": "Put Notifications Preferences",
				"value": "putAccountsByAccountIdPreferencesNotifications",
				"action": "Put notifications preferences"
			}
		],
		"default": "getAccountsByAccountIdPreferencesNotifications"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				]
			}
		},
		"options": [
			{
				"name": "Create App Block Rule",
				"value": "postAppBlockRules",
				"action": "Create app block rule"
			},
			{
				"name": "Create App Block Settings",
				"value": "putAppBlockSettings",
				"action": "Create app block settings"
			},
			{
				"name": "Delete App Block Rule",
				"value": "deleteAppBlockRulesById",
				"action": "Delete app block rule"
			},
			{
				"name": "Export App Block Activity",
				"value": "postAppBlockActivityExport",
				"action": "Export app block activity"
			},
			{
				"name": "Get App Block Rule",
				"value": "getAppBlockRulesById",
				"action": "Get app block rule"
			},
			{
				"name": "Get App Block Settings",
				"value": "getAppBlockSettings",
				"action": "Get app block settings"
			},
			{
				"name": "Search App Block Activity",
				"value": "postAppBlockActivity",
				"action": "Search app block activity"
			},
			{
				"name": "Search App Block Activity Groupby",
				"value": "postAppBlockActivitySearchGroupby",
				"action": "Search app block activity groupby"
			},
			{
				"name": "Search App Block Rules",
				"value": "postAppBlockRulesSearch",
				"action": "Search app block rules"
			},
			{
				"name": "Update App Block Rule",
				"value": "putAppBlockRulesById",
				"action": "Update app block rule"
			}
		],
		"default": "postAppBlockRules"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"assets"
				]
			}
		},
		"options": [
			{
				"name": "Export Assets Software",
				"value": "postAssetsSoftwareExport",
				"action": "Export assets software"
			},
			{
				"name": "Search Assets Software",
				"value": "postAssetsSoftware",
				"action": "Search assets software"
			},
			{
				"name": "Search Assets Software Group By",
				"value": "postAssetsSoftwareSearchGroupby",
				"action": "Search assets software group by"
			}
		],
		"default": "postAssetsSoftwareExport"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				]
			}
		},
		"options": [
			{
				"name": "Create Content Filtering Rule",
				"value": "postContentFiltering",
				"action": "Create content filtering rule"
			},
			{
				"name": "Create Update DNS Settings",
				"value": "putContentFilteringSettings",
				"action": "Create update DNS settings"
			},
			{
				"name": "Delete Content Filtering Rule",
				"value": "deleteContentFilteringById",
				"action": "Delete content filtering rule"
			},
			{
				"name": "Enable Disable Content Filtering Rule",
				"value": "putContentFilteringByIdEnable",
				"action": "Enable disable content filtering rule"
			},
			{
				"name": "Enable Disable Content Filtering Rule For Policy",
				"value": "putContentFilteringByIdEnableForPolicy",
				"action": "Enable disable content filtering rule for policy"
			},
			{
				"name": "Get A Content Filtering Rule Details",
				"value": "getContentFilteringById",
				"action": "Get a content filtering rule details"
			},
			{
				"name": "Get A List Of Content Filtering Rules",
				"value": "postContentFilteringSearch",
				"action": "Get a list of content filtering rules"
			},
			{
				"name": "Get DNS Settings",
				"value": "getContentFilteringSettings",
				"action": "Get DNS settings"
			},
			{
				"name": "Get Domain Details",
				"value": "getContentFilteringDomain",
				"action": "Get domain details"
			},
			{
				"name": "Get Frequently Used Domain Names",
				"value": "getContentFilteringFrequentDomains",
				"action": "Get frequently used domain names"
			},
			{
				"name": "Get List Of Policies",
				"value": "getContentFilteringPolicies",
				"action": "Get list of policies"
			},
			{
				"name": "Update Content Filtering Rule",
				"value": "putContentFilteringById",
				"action": "Update content filtering rule"
			}
		],
		"default": "postContentFiltering"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"cve"
				]
			}
		},
		"options": [
			{
				"name": "Export CVE Data",
				"value": "postCveExport",
				"action": "Export CVE data"
			},
			{
				"name": "Get CVE Details By ID",
				"value": "getCveById",
				"action": "Get CVE details by ID"
			},
			{
				"name": "Search CVE",
				"value": "postCve",
				"action": "Search CVE"
			},
			{
				"name": "Search CVE Group By",
				"value": "postCveSearchGroupby",
				"action": "Search CVE group by"
			}
		],
		"default": "postCveExport"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"detections"
				]
			}
		},
		"options": [
			{
				"name": "Export Detections",
				"value": "postDetectionsExport",
				"action": "Export detections"
			},
			{
				"name": "Get Detection By ID",
				"value": "getDetectionsById",
				"action": "Get detection by ID"
			},
			{
				"name": "Search Detections",
				"value": "postDetections",
				"action": "Search detections"
			},
			{
				"name": "Search Detections Group By",
				"value": "postDetectionsSearchGroupby",
				"action": "Search detections group by"
			}
		],
		"default": "postDetectionsExport"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"devicecontrol"
				]
			}
		},
		"options": [
			{
				"name": "Export Device Control Events",
				"value": "postDevicecontrolExport",
				"action": "Export device control events"
			},
			{
				"name": "Get Device Control Event By ID",
				"value": "getDevicecontrolById",
				"action": "Get device control event by ID"
			},
			{
				"name": "Search Device Control Events",
				"value": "postDevicecontrol",
				"action": "Search device control events"
			},
			{
				"name": "Search Device Control Events Group By",
				"value": "postDevicecontrolSearchGroupby",
				"action": "Search device control events group by"
			}
		],
		"default": "postDevicecontrolExport"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"dns"
				]
			}
		},
		"options": [
			{
				"name": "Export DNS Log Data",
				"value": "postDnsExport",
				"action": "Export DNS log data"
			},
			{
				"name": "Search DNS Logs",
				"value": "postDns",
				"action": "Search DNS logs"
			},
			{
				"name": "Search DNS Logs Group By",
				"value": "postDnsSearchGroupby",
				"action": "Search DNS logs group by"
			}
		],
		"default": "postDnsExport"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				]
			}
		},
		"options": [
			{
				"name": "All Suspicious Activity Of An Endpoint",
				"value": "getEndpointsByIdSa",
				"action": "All suspicious activity of an endpoint"
			},
			{
				"name": "Close Suspicious Activity Of An Endpoint",
				"value": "putEndpointsByIdSaBySaIdClose",
				"action": "Close suspicious activity of an endpoint"
			},
			{
				"name": "Delete A Machine",
				"value": "deleteEndpointsById",
				"action": "Delete a machine"
			},
			{
				"name": "Delete Multiple Machines",
				"value": "deleteEndpoints",
				"action": "Delete multiple machines"
			},
			{
				"name": "Endpoint Status",
				"value": "getEndpointsByIdStatus",
				"action": "Endpoint status"
			},
			{
				"name": "Export Endpoints",
				"value": "postEndpointsExport",
				"action": "Export endpoints"
			},
			{
				"name": "Get A Scan Of An Endpoint",
				"value": "getEndpointsByIdScansByScanId",
				"action": "Get a scan of an endpoint"
			},
			{
				"name": "Get Endpoint",
				"value": "getEndpointsById",
				"action": "Get endpoint"
			},
			{
				"name": "Get Endpoint Agent Info",
				"value": "getEndpointsByIdAgentInfo",
				"action": "Get endpoint agent info"
			},
			{
				"name": "Get Endpoint Assets",
				"value": "getEndpointsByIdAssets",
				"action": "Get endpoint assets"
			},
			{
				"name": "Get Quarantined Items",
				"value": "getEndpointsByIdQuarantine",
				"action": "Get quarantined items"
			},
			{
				"name": "Get Scans Of An Endpoint",
				"value": "getEndpointsByIdScans",
				"action": "Get scans of an endpoint"
			},
			{
				"name": "Get The Detections Of A Scan",
				"value": "getEndpointsByIdScansByScanIdDetections",
				"action": "Get the detections of a scan"
			},
			{
				"name": "Network Information",
				"value": "getEndpointsByIdNetwork",
				"action": "Network information"
			},
			{
				"name": "Open Suspicious Activity Of An Endpoint",
				"value": "putEndpointsByIdSaBySaIdOpen",
				"action": "Open suspicious activity of an endpoint"
			},
			{
				"name": "Remediate Suspicious Activity Of An Endpoint",
				"value": "postEndpointsByIdSaBySaIdRemediate",
				"action": "Remediate suspicious activity of an endpoint"
			},
			{
				"name": "Search Endpoints",
				"value": "postEndpoints",
				"action": "Search endpoints"
			},
			{
				"name": "Search Grouped Endpoints",
				"value": "postEndpointsSearchGroupby",
				"action": "Search grouped endpoints"
			},
			{
				"name": "Set Endpoint Tags",
				"value": "putEndpointsByIdTags",
				"action": "Set endpoint tags"
			},
			{
				"name": "Specific Suspicious Activity Of An Endpoint",
				"value": "getEndpointsByIdSaBySaIdExclusions",
				"action": "Specific suspicious activity of an endpoint"
			}
		],
		"default": "getEndpointsByIdSa"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"events"
				]
			}
		},
		"options": [
			{
				"name": "Retrieve Events",
				"value": "getEvents",
				"action": "Retrieve events"
			}
		],
		"default": "getEvents"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				]
			}
		},
		"options": [
			{
				"name": "Create Exclusion",
				"value": "postExclusions",
				"action": "Create exclusion"
			},
			{
				"name": "Delete Exclusion By ID",
				"value": "deleteExclusionsById",
				"action": "Delete exclusion by ID"
			},
			{
				"name": "Get Exclusion By ID",
				"value": "getExclusionsById",
				"action": "Get exclusion by ID"
			},
			{
				"name": "Get Exclusions",
				"value": "getExclusions",
				"action": "Get exclusions"
			},
			{
				"name": "Update Exclusion",
				"value": "putExclusionsById",
				"action": "Update exclusion"
			}
		],
		"default": "postExclusions"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"flightRecorder"
				]
			}
		},
		"options": [
			{
				"name": "Search A List Of Processes",
				"value": "postFlightRecorderProcesses",
				"action": "Search a list of processes"
			},
			{
				"name": "Search A List Of Raw Events",
				"value": "postFlightRecorderRawEvents",
				"action": "Search a list of raw events"
			},
			{
				"name": "Search Occurrence Of Suspicious Activity",
				"value": "postFlightRecorderChart",
				"action": "Search occurrence of suspicious activity"
			},
			{
				"name": "Search Suspicious Activity",
				"value": "postFlightRecorderRecap",
				"action": "Search suspicious activity"
			},
			{
				"name": "Search Suspicious Activity Receiving Impact Information On An Endpoint",
				"value": "postFlightRecorderEndpoints",
				"action": "Search suspicious activity receiving impact information on an endpoint"
			},
			{
				"name": "Search The Flight Recorder With Advanced Queries",
				"value": "postFlightRecorderSearch",
				"action": "Search the flight recorder with advanced queries"
			},
			{
				"name": "Search The Process Graph",
				"value": "postFlightRecorderProcessGraph",
				"action": "Search the process graph"
			}
		],
		"default": "postFlightRecorderProcesses"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				]
			}
		},
		"options": [
			{
				"name": "Export CVEs",
				"value": "postGridCveExport",
				"action": "Export cves"
			},
			{
				"name": "Export Detections",
				"value": "postGridDetectionsExport",
				"action": "Export detections"
			},
			{
				"name": "Export Device Control Events",
				"value": "postGridDeviceControlExport",
				"action": "Export device control events"
			},
			{
				"name": "Export DNS Activity",
				"value": "postGridDnsExport",
				"action": "Export DNS activity"
			},
			{
				"name": "Export Endpoints",
				"value": "postGridEndpointsExport",
				"action": "Export endpoints"
			},
			{
				"name": "Export Events",
				"value": "postGridEventsExport",
				"action": "Export events"
			},
			{
				"name": "Export OS Patches",
				"value": "postGridOsPatchesExport",
				"action": "Export OS patches"
			},
			{
				"name": "Export RID Rules",
				"value": "postGridRidExport",
				"action": "Export RID rules"
			},
			{
				"name": "Export Software Assets",
				"value": "postGridAssetsSoftwareExport",
				"action": "Export software assets"
			},
			{
				"name": "Search CVEs",
				"value": "postGridCveSearch",
				"action": "Search cves"
			},
			{
				"name": "Search Detections",
				"value": "postGridDetectionsSearch",
				"action": "Search detections"
			},
			{
				"name": "Search Device Control Events",
				"value": "postGridDeviceControlSearch",
				"action": "Search device control events"
			},
			{
				"name": "Search DNS Activity",
				"value": "postGridDnsSearch",
				"action": "Search DNS activity"
			},
			{
				"name": "Search Endpoints",
				"value": "postGridEndpointsSearch",
				"action": "Search endpoints"
			},
			{
				"name": "Search Events",
				"value": "postGridEventsSearch",
				"action": "Search events"
			},
			{
				"name": "Search Events Groupby",
				"value": "postGridEventsSearchGroupby",
				"action": "Search events groupby"
			},
			{
				"name": "Search Grouped CVEs",
				"value": "postGridCveSearchGroupby",
				"action": "Search grouped cves"
			},
			{
				"name": "Search Grouped Detections",
				"value": "postGridDetectionsSearchGroupby",
				"action": "Search grouped detections"
			},
			{
				"name": "Search Grouped Device Control Events",
				"value": "postGridDeviceControlSearchGroupby",
				"action": "Search grouped device control events"
			},
			{
				"name": "Search Grouped DNS Activity",
				"value": "postGridDnsSearchGroupby",
				"action": "Search grouped DNS activity"
			},
			{
				"name": "Search Grouped Endpoints",
				"value": "postGridEndpointsSearchGroupby",
				"action": "Search grouped endpoints"
			},
			{
				"name": "Search Grouped OS Patches",
				"value": "postGridOsPatchesSearchGroupby",
				"action": "Search grouped OS patches"
			},
			{
				"name": "Search Grouped RID Rules",
				"value": "postGridRidSearchGroupby",
				"action": "Search grouped RID rules"
			},
			{
				"name": "Search Grouped Software Assets",
				"value": "postGridAssetsSoftwareSearchGroupby",
				"action": "Search grouped software assets"
			},
			{
				"name": "Search OS Patches",
				"value": "postGridOsPatchesSearch",
				"action": "Search OS patches"
			},
			{
				"name": "Search RID Rules",
				"value": "postGridRidSearch",
				"action": "Search RID rules"
			},
			{
				"name": "Search Software Assets",
				"value": "postGridAssetsSoftwareSearch",
				"action": "Search software assets"
			}
		],
		"default": "postGridCveExport"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"groups"
				]
			}
		},
		"options": [
			{
				"name": "Assign Endpoints To A Group",
				"value": "postGroupsByIdMachines",
				"action": "Assign endpoints to a group"
			},
			{
				"name": "Create Group",
				"value": "postGroups",
				"action": "Create group"
			},
			{
				"name": "Delete Group By Its ID",
				"value": "deleteGroupsById",
				"action": "Delete group by its ID"
			},
			{
				"name": "Get All Groups",
				"value": "getGroups",
				"action": "Get all groups"
			},
			{
				"name": "Get Group By ID",
				"value": "getGroupsById",
				"action": "Get group by ID"
			},
			{
				"name": "Update Group",
				"value": "putGroupsById",
				"action": "Update group"
			}
		],
		"default": "postGroupsByIdMachines"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"installationToken"
				]
			}
		},
		"options": [
			{
				"name": "Generate An Installation Tokens",
				"value": "postInstallationToken",
				"action": "Generate an installation tokens"
			},
			{
				"name": "Get Installation Tokens",
				"value": "getInstallationToken",
				"action": "Get installation tokens"
			},
			{
				"name": "Revoke Installation Token",
				"value": "deleteInstallationTokenByToken",
				"action": "Revoke installation token"
			},
			{
				"name": "Send Installation Tokens",
				"value": "postInstallationTokenSend",
				"action": "Send installation tokens"
			}
		],
		"default": "postInstallationToken"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"installers"
				]
			}
		},
		"options": [
			{
				"name": "Retrieve Installerss Links",
				"value": "getInstallers",
				"action": "Retrieve installerss links"
			}
		],
		"default": "getInstallers"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"jobs"
				]
			}
		},
		"options": [
			{
				"name": "Cancel Pending Jobs",
				"value": "deleteJobsBulk",
				"action": "Cancel pending jobs"
			},
			{
				"name": "Export Jobs",
				"value": "postJobsExport",
				"action": "Export jobs"
			},
			{
				"name": "Get Details About A Job",
				"value": "getJobsById",
				"action": "Get details about a job"
			},
			{
				"name": "Issue A Job",
				"value": "postJobs",
				"action": "Issue a job"
			},
			{
				"name": "Issue Jobs",
				"value": "postJobsBulk",
				"action": "Issue jobs"
			},
			{
				"name": "Search Jobs",
				"value": "postJobsSearch",
				"action": "Search jobs"
			},
			{
				"name": "Search Jobs Group By",
				"value": "postJobsSearchGroupby",
				"action": "Search jobs group by"
			}
		],
		"default": "deleteJobsBulk"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"notifications"
				]
			}
		},
		"options": [
			{
				"name": "Create Notification",
				"value": "postNotificationsSubscriptions",
				"action": "Create notification"
			},
			{
				"name": "Delete Notification",
				"value": "deleteNotificationsSubscriptionsById",
				"action": "Delete notification"
			},
			{
				"name": "Delete Notification Bulk",
				"value": "deleteNotificationsSubscriptionsBulk",
				"action": "Delete notification bulk"
			},
			{
				"name": "Get All Notifications",
				"value": "getNotificationsSubscriptions",
				"action": "Get all notifications"
			},
			{
				"name": "Get Notification",
				"value": "getNotificationsSubscriptionsById",
				"action": "Get notification"
			},
			{
				"name": "Update Notification",
				"value": "putNotificationsSubscriptionsById",
				"action": "Update notification"
			},
			{
				"name": "Update Notification Bulk",
				"value": "putNotificationsSubscriptionsBulk",
				"action": "Update notification bulk"
			}
		],
		"default": "postNotificationsSubscriptions"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"osPatches"
				]
			}
		},
		"options": [
			{
				"name": "Export OS Patches",
				"value": "postOsPatchesExport",
				"action": "Export OS patches"
			},
			{
				"name": "Search OS Patches",
				"value": "postOsPatches",
				"action": "Search OS patches"
			},
			{
				"name": "Search OS Patches Group By",
				"value": "postOsPatchesSearchGroupby",
				"action": "Search OS patches group by"
			}
		],
		"default": "postOsPatchesExport"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				]
			}
		},
		"options": [
			{
				"name": "Add Isolation Image",
				"value": "postPoliciesByIdIsolationImage",
				"action": "Add isolation image"
			},
			{
				"name": "Clone Policy",
				"value": "postPoliciesBySourceIdClone",
				"action": "Clone policy"
			},
			{
				"name": "Create Policy",
				"value": "postPolicies",
				"action": "Create policy"
			},
			{
				"name": "Delete Policy",
				"value": "deletePoliciesById",
				"action": "Delete policy"
			},
			{
				"name": "Delete Policy Isolation Image",
				"value": "deletePoliciesByIdIsolationImage",
				"action": "Delete policy isolation image"
			},
			{
				"name": "Get Policy By ID Get Policies",
				"value": "getPolicies",
				"action": "Get policy by ID"
			},
			{
				"name": "Get Policy By ID Get Policies By ID",
				"value": "getPoliciesById",
				"action": "Get policy by ID"
			},
			{
				"name": "Get Policy Isolation Image By ID",
				"value": "getPoliciesByIdIsolationImage",
				"action": "Get policy isolation image by ID"
			},
			{
				"name": "Get Policy Secret By ID",
				"value": "getPoliciesByIdSecret",
				"action": "Get policy secret by ID"
			},
			{
				"name": "Get System Default Policy",
				"value": "getPoliciesSystemDefault",
				"action": "Get system default policy"
			},
			{
				"name": "Promote Policy",
				"value": "putPoliciesByIdPromote",
				"action": "Promote policy"
			},
			{
				"name": "Set Policy Secret By ID",
				"value": "postPoliciesByIdSecret",
				"action": "Set policy secret by ID"
			},
			{
				"name": "Update Policy",
				"value": "putPoliciesById",
				"action": "Update policy"
			}
		],
		"default": "postPoliciesByIdIsolationImage"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"products"
				]
			}
		},
		"options": [
			{
				"name": "Search Products",
				"value": "postProducts",
				"action": "Search products"
			},
			{
				"name": "Search Vendors",
				"value": "postProductsVendors",
				"action": "Search vendors"
			}
		],
		"default": "postProducts"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"quarantine"
				]
			}
		},
		"options": [
			{
				"name": "Bulk Quarantine Action",
				"value": "postQuarantineAction",
				"action": "Bulk quarantine action"
			},
			{
				"name": "Export Quarantines",
				"value": "postQuarantineExport",
				"action": "Export quarantines"
			},
			{
				"name": "Get All Quarantined Items",
				"value": "getQuarantine",
				"action": "Get all quarantined items"
			}
		],
		"default": "postQuarantineAction"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"reports"
				]
			}
		},
		"options": [
			{
				"name": "Create Report",
				"value": "postReports",
				"action": "Create report"
			},
			{
				"name": "Delete Report By ID",
				"value": "deleteReportsById",
				"action": "Delete report by ID"
			},
			{
				"name": "Delete Reports Bulk",
				"value": "deleteReports",
				"action": "Delete reports bulk"
			},
			{
				"name": "Generate Report",
				"value": "postReportsByIdGenerate",
				"action": "Generate report"
			},
			{
				"name": "Get All Reports",
				"value": "getReports",
				"action": "Get all reports"
			},
			{
				"name": "Get Report By ID",
				"value": "getReportsById",
				"action": "Get report by ID"
			},
			{
				"name": "Update Report",
				"value": "putReportsById",
				"action": "Update report"
			}
		],
		"default": "postReports"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"rid"
				]
			}
		},
		"options": [
			{
				"name": "Export RID Rules",
				"value": "postRidRulesExport",
				"action": "Export RID rules"
			},
			{
				"name": "Search Grouped RID",
				"value": "postRidRulesSearchGroupby",
				"action": "Search grouped RID"
			},
			{
				"name": "Search RID Rules",
				"value": "postRidRules",
				"action": "Search RID rules"
			}
		],
		"default": "postRidRulesExport"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"sa"
				]
			}
		},
		"options": [
			{
				"name": "Suspicious Activity Details",
				"value": "postSaDetails",
				"action": "Suspicious activity details"
			},
			{
				"name": "Suspicious Activity Of The Account",
				"value": "getSa",
				"action": "Suspicious activity of the account"
			},
			{
				"name": "Suspicious Activity Process Graph",
				"value": "getSaByIdProcessGraph",
				"action": "Suspicious activity process graph"
			}
		],
		"default": "postSaDetails"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"schedules"
				]
			}
		},
		"options": [
			{
				"name": "Add Groups For Schedule",
				"value": "putSchedulesByIdGroups",
				"action": "Add groups for schedule"
			},
			{
				"name": "Create Schedule",
				"value": "postSchedules",
				"action": "Create schedule"
			},
			{
				"name": "Delete A Schedule",
				"value": "deleteSchedulesById",
				"action": "Delete a schedule"
			},
			{
				"name": "Get Schedule By ID",
				"value": "getSchedulesById",
				"action": "Get schedule by ID"
			},
			{
				"name": "Get Schedules",
				"value": "getSchedules",
				"action": "Get schedules"
			},
			{
				"name": "Update Schedule",
				"value": "putSchedulesById",
				"action": "Update schedule"
			}
		],
		"default": "putSchedulesByIdGroups"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"usage"
				]
			}
		},
		"options": [
			{
				"name": "Search Logs Of Usage",
				"value": "postUsageLogs",
				"action": "Search logs of usage"
			},
			{
				"name": "Search Summary Of Usage",
				"value": "postUsageLogsSummary",
				"action": "Search summary of usage"
			},
			{
				"name": "Search Usage Histogram",
				"value": "postUsageHistogram",
				"action": "Search usage histogram"
			}
		],
		"default": "postUsageLogs"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"users"
				]
			}
		},
		"options": [
			{
				"name": "Create User",
				"value": "postUsers",
				"action": "Create user"
			},
			{
				"name": "Delete A Nebula User",
				"value": "deleteUsersById",
				"action": "Delete a nebula user"
			},
			{
				"name": "Get Nebula Users",
				"value": "getUsers",
				"action": "Get nebula users"
			},
			{
				"name": "Get One User",
				"value": "getUsersById",
				"action": "Get one user"
			},
			{
				"name": "Update User",
				"value": "putUsersById",
				"action": "Update user"
			}
		],
		"default": "postUsers"
	},
	{
		"displayName": "Operation",
		"name": "operation",
		"type": "options",
		"noDataExpression": true,
		"displayOptions": {
			"show": {
				"resource": [
					"webhooks"
				]
			}
		},
		"options": [
			{
				"name": "Create Subscription",
				"value": "postWebhooksSubscriptions",
				"action": "Create subscription"
			},
			{
				"name": "Delete Subscription",
				"value": "deleteWebhooksSubscriptionsById",
				"action": "Delete subscription"
			},
			{
				"name": "Get A Subscription",
				"value": "getWebhooksSubscriptionsById",
				"action": "Get a subscription"
			},
			{
				"name": "Get All Subscriptions",
				"value": "getWebhooksSubscriptions",
				"action": "Get all subscriptions"
			},
			{
				"name": "Update A Subscription",
				"value": "putWebhooksSubscriptionsById",
				"action": "Update a subscription"
			}
		],
		"default": "postWebhooksSubscriptions"
	}
];

export const operationFields: INodeProperties[] = [
	{
		"displayName": "Account ID",
		"name": "op2_path_accountId",
		"type": "string",
		"default": "={{$credentials.accountId}}",
		"displayOptions": {
			"show": {
				"resource": [
					"accounts"
				],
				"operation": [
					"getAccountsByAccountIdPreferencesNotifications"
				]
			}
		},
		"description": "Path parameter: Account ID",
		"required": true
	},
	{
		"displayName": "Account ID",
		"name": "op3_path_accountId",
		"type": "string",
		"default": "={{$credentials.accountId}}",
		"displayOptions": {
			"show": {
				"resource": [
					"accounts"
				],
				"operation": [
					"putAccountsByAccountIdPreferencesNotifications"
				]
			}
		},
		"description": "Path parameter: Account ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op3_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"accounts"
				],
				"operation": [
					"putAccountsByAccountIdPreferencesNotifications"
				]
			}
		},
		"options": [
			{
				"displayName": "Email",
				"name": "op3_body_email",
				"type": "string",
				"default": "true",
				"description": "Request body field: email"
			},
			{
				"displayName": "Slack",
				"name": "op3_body_slack",
				"type": "string",
				"default": "true",
				"description": "Request body field: slack"
			},
			{
				"displayName": "Teams",
				"name": "op3_body_teams",
				"type": "string",
				"default": "true",
				"description": "Request body field: teams"
			},
			{
				"displayName": "Webhook",
				"name": "op3_body_webhook",
				"type": "string",
				"default": "true",
				"description": "Request body field: webhook"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op3_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"accounts"
				],
				"operation": [
					"putAccountsByAccountIdPreferencesNotifications"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op4_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"postAppBlockActivity"
				]
			}
		},
		"options": [
			{
				"displayName": "Account Name",
				"name": "op4_body_accountName",
				"type": "string",
				"default": "",
				"description": "Request body field: account_name"
			},
			{
				"displayName": "Account Name Keyword",
				"name": "op4_body_accountNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: account_name.keyword"
			},
			{
				"displayName": "End Date",
				"name": "op4_body_endDate",
				"type": "string",
				"default": "",
				"description": "Request body field: end_date"
			},
			{
				"displayName": "Engine Version",
				"name": "op4_body_engineVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: engine_version"
			},
			{
				"displayName": "File Path",
				"name": "op4_body_filePath",
				"type": "string",
				"default": "",
				"description": "Request body field: file_path"
			},
			{
				"displayName": "File Path Keyword",
				"name": "op4_body_filePathKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: file_path.keyword"
			},
			{
				"displayName": "Group ID",
				"name": "op4_body_groupId",
				"type": "string",
				"default": "",
				"description": "Request body field: group_id"
			},
			{
				"displayName": "Group Name",
				"name": "op4_body_groupName",
				"type": "string",
				"default": "",
				"description": "Request body field: group_name"
			},
			{
				"displayName": "Histogram Time Zone",
				"name": "op4_body_histogramTimeZone",
				"type": "string",
				"default": "",
				"description": "Request body field: histogram_time_zone"
			},
			{
				"displayName": "Last User",
				"name": "op4_body_lastUser",
				"type": "string",
				"default": "",
				"description": "Request body field: last_user"
			},
			{
				"displayName": "Name Multi Search",
				"name": "op4_body_nameMultiSearch",
				"type": "string",
				"default": "",
				"description": "Request body field: name_multi_search"
			},
			{
				"displayName": "Next Cursor",
				"name": "op4_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Nics Ips",
				"name": "op4_body_nicsIps",
				"type": "string",
				"default": "",
				"description": "Request body field: nics.ips"
			},
			{
				"displayName": "OS Info OS Platform",
				"name": "op4_body_osInfoOsPlatform",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_platform"
			},
			{
				"displayName": "OS Info OS Release Name",
				"name": "op4_body_osInfoOsReleaseName",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_release_name"
			},
			{
				"displayName": "OS Info OS Release Name Keyword",
				"name": "op4_body_osInfoOsReleaseNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_release_name.keyword"
			},
			{
				"displayName": "OS Info OS Type",
				"name": "op4_body_osInfoOsType",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_type"
			},
			{
				"displayName": "OS Info OS Version",
				"name": "op4_body_osInfoOsVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_version"
			},
			{
				"displayName": "Page Size",
				"name": "op4_body_pageSize",
				"type": "number",
				"default": 2000,
				"description": "Request body field: page_size"
			},
			{
				"displayName": "Policy Name",
				"name": "op4_body_policyName",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_name"
			},
			{
				"displayName": "Policy Name Keyword",
				"name": "op4_body_policyNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_name.keyword"
			},
			{
				"displayName": "Rule ID",
				"name": "op4_body_ruleId",
				"type": "string",
				"default": "",
				"description": "Request body field: rule_id"
			},
			{
				"displayName": "Rule Name",
				"name": "op4_body_ruleName",
				"type": "string",
				"default": "",
				"description": "Request body field: rule_name"
			},
			{
				"displayName": "Rule Name Keyword",
				"name": "op4_body_ruleNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: rule_name.keyword"
			},
			{
				"displayName": "Scanned At After",
				"name": "op4_body_scannedAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: scanned_at_after"
			},
			{
				"displayName": "Scanned At Before",
				"name": "op4_body_scannedAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: scanned_at_before"
			},
			{
				"displayName": "Sort Field",
				"name": "op4_body_sortField",
				"type": "string",
				"default": "scanned_at",
				"description": "Request body field: sort_field"
			},
			{
				"displayName": "Sort Order",
				"name": "op4_body_sortOrder",
				"type": "string",
				"default": "asc",
				"description": "Request body field: sort_order"
			},
			{
				"displayName": "Start Date",
				"name": "op4_body_startDate",
				"type": "string",
				"default": "",
				"description": "Request body field: start_date"
			},
			{
				"displayName": "Status",
				"name": "op4_body_status",
				"type": "string",
				"default": "",
				"description": "Request body field: status"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op4_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"postAppBlockActivity"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op5_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"postAppBlockActivityExport"
				]
			}
		},
		"options": [
			{
				"displayName": "Download",
				"name": "op5_body_download",
				"type": "boolean",
				"default": false,
				"description": "Request body field: download"
			},
			{
				"displayName": "Format",
				"name": "op5_body_format",
				"type": "string",
				"default": "csv",
				"description": "Request body field: format"
			},
			{
				"displayName": "Type",
				"name": "op5_body_type",
				"type": "string",
				"default": "string",
				"description": "Request body field: type"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op5_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"postAppBlockActivityExport"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "JSON Body",
		"name": "op6_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"postAppBlockActivitySearchGroupby"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "Body Fields",
		"name": "op7_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"postAppBlockRules"
				]
			}
		},
		"options": [
			{
				"displayName": "Enabled",
				"name": "op7_body_enabled",
				"type": "boolean",
				"default": true,
				"description": "Request body field: enabled"
			},
			{
				"displayName": "Policies Exclude",
				"name": "op7_body_policiesExclude",
				"type": "boolean",
				"default": false,
				"description": "Request body field: policies_exclude"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op7_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"postAppBlockRules"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op8_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"postAppBlockRulesSearch"
				]
			}
		},
		"options": [
			{
				"displayName": "Next Cursor",
				"name": "op8_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Page Size",
				"name": "op8_body_pageSize",
				"type": "number",
				"default": 2000,
				"description": "Request body field: page_size"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op8_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"postAppBlockRulesSearch"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op9_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"deleteAppBlockRulesById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op9_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"deleteAppBlockRulesById"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op10_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"getAppBlockRulesById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op11_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"putAppBlockRulesById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op11_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"putAppBlockRulesById"
				]
			}
		},
		"options": [
			{
				"displayName": "Enabled",
				"name": "op11_body_enabled",
				"type": "boolean",
				"default": true,
				"description": "Request body field: enabled"
			},
			{
				"displayName": "Policies Exclude",
				"name": "op11_body_policiesExclude",
				"type": "boolean",
				"default": false,
				"description": "Request body field: policies_exclude"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op11_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"putAppBlockRulesById"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op13_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"putAppBlockSettings"
				]
			}
		},
		"options": [
			{
				"displayName": "Message Body",
				"name": "op13_body_messageBody",
				"type": "string",
				"default": "",
				"description": "Request body field: message_body"
			},
			{
				"displayName": "Message Title",
				"name": "op13_body_messageTitle",
				"type": "string",
				"default": "",
				"description": "Request body field: message_title"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op13_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"appBlock"
				],
				"operation": [
					"putAppBlockSettings"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op14_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"assets"
				],
				"operation": [
					"postAssetsSoftware"
				]
			}
		},
		"options": [
			{
				"displayName": "Account Name",
				"name": "op14_body_accountName",
				"type": "string",
				"default": "",
				"description": "Request body field: account_name"
			},
			{
				"displayName": "Account Name Keyword",
				"name": "op14_body_accountNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: account_name.keyword"
			},
			{
				"displayName": "Alias",
				"name": "op14_body_alias",
				"type": "string",
				"default": "",
				"description": "Request body field: alias"
			},
			{
				"displayName": "Alias Keyword",
				"name": "op14_body_aliasKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: alias.keyword"
			},
			{
				"displayName": "Architecture",
				"name": "op14_body_architecture",
				"type": "string",
				"default": "",
				"description": "Request body field: architecture"
			},
			{
				"displayName": "Architecture Keyword",
				"name": "op14_body_architectureKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: architecture.keyword"
			},
			{
				"displayName": "Created At After",
				"name": "op14_body_createdAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: created_at_after"
			},
			{
				"displayName": "Created At Before",
				"name": "op14_body_createdAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: created_at_before"
			},
			{
				"displayName": "Cves By Status Critical",
				"name": "op14_body_cvesByStatusCritical",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_by_status.critical"
			},
			{
				"displayName": "Cves By Status Critical Keyword",
				"name": "op14_body_cvesByStatusCriticalKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_by_status.critical.keyword"
			},
			{
				"displayName": "Cves By Status High",
				"name": "op14_body_cvesByStatusHigh",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_by_status.high"
			},
			{
				"displayName": "Cves By Status High Keyword",
				"name": "op14_body_cvesByStatusHighKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_by_status.high.keyword"
			},
			{
				"displayName": "Cves By Status Low",
				"name": "op14_body_cvesByStatusLow",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_by_status.low"
			},
			{
				"displayName": "Cves By Status Low Keyword",
				"name": "op14_body_cvesByStatusLowKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_by_status.low.keyword"
			},
			{
				"displayName": "Cves By Status Medium",
				"name": "op14_body_cvesByStatusMedium",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_by_status.medium"
			},
			{
				"displayName": "Cves By Status Medium Keyword",
				"name": "op14_body_cvesByStatusMediumKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_by_status.medium.keyword"
			},
			{
				"displayName": "Cves By Status Unknown",
				"name": "op14_body_cvesByStatusUnknown",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_by_status.unknown"
			},
			{
				"displayName": "Cves By Status Unknown Keyword",
				"name": "op14_body_cvesByStatusUnknownKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_by_status.unknown.keyword"
			},
			{
				"displayName": "Cves Count",
				"name": "op14_body_cvesCount",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_count"
			},
			{
				"displayName": "Cves Count By Status Critical",
				"name": "op14_body_cvesCountByStatusCritical",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_count_by_status.critical"
			},
			{
				"displayName": "Cves Count By Status High",
				"name": "op14_body_cvesCountByStatusHigh",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_count_by_status.high"
			},
			{
				"displayName": "Cves Count By Status Low",
				"name": "op14_body_cvesCountByStatusLow",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_count_by_status.low"
			},
			{
				"displayName": "Cves Count By Status Medium",
				"name": "op14_body_cvesCountByStatusMedium",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_count_by_status.medium"
			},
			{
				"displayName": "Cves Count By Status Unknown",
				"name": "op14_body_cvesCountByStatusUnknown",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_count_by_status.unknown"
			},
			{
				"displayName": "Cves Score",
				"name": "op14_body_cvesScore",
				"type": "string",
				"default": "",
				"description": "Request body field: cves_score"
			},
			{
				"displayName": "Display Installed Version",
				"name": "op14_body_displayInstalledVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: display_installed_version"
			},
			{
				"displayName": "Display Installed Version Keyword",
				"name": "op14_body_displayInstalledVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: display_installed_version.keyword"
			},
			{
				"displayName": "Display Product",
				"name": "op14_body_displayProduct",
				"type": "string",
				"default": "",
				"description": "Request body field: display_product"
			},
			{
				"displayName": "Display Product Keyword",
				"name": "op14_body_displayProductKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: display_product.keyword"
			},
			{
				"displayName": "Display Vendor",
				"name": "op14_body_displayVendor",
				"type": "string",
				"default": "",
				"description": "Request body field: display_vendor"
			},
			{
				"displayName": "Display Vendor Keyword",
				"name": "op14_body_displayVendorKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: display_vendor.keyword"
			},
			{
				"displayName": "Fully Qualified Host Name",
				"name": "op14_body_fullyQualifiedHostName",
				"type": "string",
				"default": "",
				"description": "Request body field: fully_qualified_host_name"
			},
			{
				"displayName": "Fully Qualified Host Name Keyword",
				"name": "op14_body_fullyQualifiedHostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: fully_qualified_host_name.keyword"
			},
			{
				"displayName": "Group ID",
				"name": "op14_body_groupId",
				"type": "string",
				"default": "",
				"description": "Request body field: group_id"
			},
			{
				"displayName": "Group Name",
				"name": "op14_body_groupName",
				"type": "string",
				"default": "",
				"description": "Request body field: group_name"
			},
			{
				"displayName": "Group Name Keyword",
				"name": "op14_body_groupNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: group_name.keyword"
			},
			{
				"displayName": "Host Name",
				"name": "op14_body_hostName",
				"type": "string",
				"default": "",
				"description": "Request body field: host_name"
			},
			{
				"displayName": "Host Name Keyword",
				"name": "op14_body_hostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: host_name.keyword"
			},
			{
				"displayName": "Installation Date After",
				"name": "op14_body_installationDateAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: installation_date_after"
			},
			{
				"displayName": "Installation Date Before",
				"name": "op14_body_installationDateBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: installation_date_before"
			},
			{
				"displayName": "Installed Version",
				"name": "op14_body_installedVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: installed_version"
			},
			{
				"displayName": "Installed Version Keyword",
				"name": "op14_body_installedVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: installed_version.keyword"
			},
			{
				"displayName": "Language",
				"name": "op14_body_language",
				"type": "string",
				"default": "",
				"description": "Request body field: language"
			},
			{
				"displayName": "Language Keyword",
				"name": "op14_body_languageKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: language.keyword"
			},
			{
				"displayName": "Latest Version Available",
				"name": "op14_body_latestVersionAvailable",
				"type": "string",
				"default": "",
				"description": "Request body field: latest_version_available"
			},
			{
				"displayName": "Latest Version Available Keyword",
				"name": "op14_body_latestVersionAvailableKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: latest_version_available.keyword"
			},
			{
				"displayName": "Machine ID",
				"name": "op14_body_machineId",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_id"
			},
			{
				"displayName": "Name Multi Search",
				"name": "op14_body_nameMultiSearch",
				"type": "string",
				"default": "",
				"description": "Request body field: name_multi_search"
			},
			{
				"displayName": "Next Cursor",
				"name": "op14_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Normaliazed Installed Version",
				"name": "op14_body_normaliazedInstalledVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: normaliazed_installed_version"
			},
			{
				"displayName": "Normaliazed Installed Version Keyword",
				"name": "op14_body_normaliazedInstalledVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: normaliazed_installed_version.keyword"
			},
			{
				"displayName": "Normalized Product",
				"name": "op14_body_normalizedProduct",
				"type": "string",
				"default": "",
				"description": "Request body field: normalized_product"
			},
			{
				"displayName": "Normalized Product Keyword",
				"name": "op14_body_normalizedProductKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: normalized_product.keyword"
			},
			{
				"displayName": "Normalized Vendor",
				"name": "op14_body_normalizedVendor",
				"type": "string",
				"default": "",
				"description": "Request body field: normalized_vendor"
			},
			{
				"displayName": "Normalized Vendor Keyword",
				"name": "op14_body_normalizedVendorKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: normalized_vendor.keyword"
			},
			{
				"displayName": "Not Account Name",
				"name": "op14_body_notAccountName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.account_name"
			},
			{
				"displayName": "Not Account Name Keyword",
				"name": "op14_body_notAccountNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.account_name.keyword"
			},
			{
				"displayName": "Not Alias",
				"name": "op14_body_notAlias",
				"type": "string",
				"default": "",
				"description": "Request body field: not.alias"
			},
			{
				"displayName": "Not Alias Keyword",
				"name": "op14_body_notAliasKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.alias.keyword"
			},
			{
				"displayName": "Not Architecture",
				"name": "op14_body_notArchitecture",
				"type": "string",
				"default": "",
				"description": "Request body field: not.architecture"
			},
			{
				"displayName": "Not Architecture Keyword",
				"name": "op14_body_notArchitectureKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.architecture.keyword"
			},
			{
				"displayName": "Not Cves By Status Critical",
				"name": "op14_body_notCvesByStatusCritical",
				"type": "string",
				"default": "",
				"description": "Request body field: not.cves_by_status.critical"
			},
			{
				"displayName": "Not Cves By Status Critical Keyword",
				"name": "op14_body_notCvesByStatusCriticalKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.cves_by_status.critical.keyword"
			},
			{
				"displayName": "Not Cves By Status High",
				"name": "op14_body_notCvesByStatusHigh",
				"type": "string",
				"default": "",
				"description": "Request body field: not.cves_by_status.high"
			},
			{
				"displayName": "Not Cves By Status High Keyword",
				"name": "op14_body_notCvesByStatusHighKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.cves_by_status.high.keyword"
			},
			{
				"displayName": "Not Cves By Status Low",
				"name": "op14_body_notCvesByStatusLow",
				"type": "string",
				"default": "",
				"description": "Request body field: not.cves_by_status.low"
			},
			{
				"displayName": "Not Cves By Status Low Keyword",
				"name": "op14_body_notCvesByStatusLowKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.cves_by_status.low.keyword"
			},
			{
				"displayName": "Not Cves By Status Medium",
				"name": "op14_body_notCvesByStatusMedium",
				"type": "string",
				"default": "",
				"description": "Request body field: not.cves_by_status.medium"
			},
			{
				"displayName": "Not Cves By Status Medium Keyword",
				"name": "op14_body_notCvesByStatusMediumKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.cves_by_status.medium.keyword"
			},
			{
				"displayName": "Not Cves By Status Unknown",
				"name": "op14_body_notCvesByStatusUnknown",
				"type": "string",
				"default": "",
				"description": "Request body field: not.cves_by_status.unknown"
			},
			{
				"displayName": "Not Cves By Status Unknown Keyword",
				"name": "op14_body_notCvesByStatusUnknownKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.cves_by_status.unknown.keyword"
			},
			{
				"displayName": "Not Display Installed Version",
				"name": "op14_body_notDisplayInstalledVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.display_installed_version"
			},
			{
				"displayName": "Not Display Installed Version Keyword",
				"name": "op14_body_notDisplayInstalledVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.display_installed_version.keyword"
			},
			{
				"displayName": "Not Display Product",
				"name": "op14_body_notDisplayProduct",
				"type": "string",
				"default": "",
				"description": "Request body field: not.display_product"
			},
			{
				"displayName": "Not Display Product Keyword",
				"name": "op14_body_notDisplayProductKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.display_product.keyword"
			},
			{
				"displayName": "Not Display Vendor",
				"name": "op14_body_notDisplayVendor",
				"type": "string",
				"default": "",
				"description": "Request body field: not.display_vendor"
			},
			{
				"displayName": "Not Display Vendor Keyword",
				"name": "op14_body_notDisplayVendorKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.display_vendor.keyword"
			},
			{
				"displayName": "Not Fully Qualified Host Name",
				"name": "op14_body_notFullyQualifiedHostName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.fully_qualified_host_name"
			},
			{
				"displayName": "Not Fully Qualified Host Name Keyword",
				"name": "op14_body_notFullyQualifiedHostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.fully_qualified_host_name.keyword"
			},
			{
				"displayName": "Not Group ID",
				"name": "op14_body_notGroupId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.group_id"
			},
			{
				"displayName": "Not Group Name",
				"name": "op14_body_notGroupName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.group_name"
			},
			{
				"displayName": "Not Group Name Keyword",
				"name": "op14_body_notGroupNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.group_name.keyword"
			},
			{
				"displayName": "Not Host Name",
				"name": "op14_body_notHostName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.host_name"
			},
			{
				"displayName": "Not Host Name Keyword",
				"name": "op14_body_notHostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.host_name.keyword"
			},
			{
				"displayName": "Not Installed Version",
				"name": "op14_body_notInstalledVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.installed_version"
			},
			{
				"displayName": "Not Installed Version Keyword",
				"name": "op14_body_notInstalledVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.installed_version.keyword"
			},
			{
				"displayName": "Not Language",
				"name": "op14_body_notLanguage",
				"type": "string",
				"default": "",
				"description": "Request body field: not.language"
			},
			{
				"displayName": "Not Language Keyword",
				"name": "op14_body_notLanguageKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.language.keyword"
			},
			{
				"displayName": "Not Latest Version Available",
				"name": "op14_body_notLatestVersionAvailable",
				"type": "string",
				"default": "",
				"description": "Request body field: not.latest_version_available"
			},
			{
				"displayName": "Not Latest Version Available Keyword",
				"name": "op14_body_notLatestVersionAvailableKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.latest_version_available.keyword"
			},
			{
				"displayName": "Not Machine ID",
				"name": "op14_body_notMachineId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.machine_id"
			},
			{
				"displayName": "Not Normaliazed Installed Version",
				"name": "op14_body_notNormaliazedInstalledVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.normaliazed_installed_version"
			},
			{
				"displayName": "Not Normaliazed Installed Version Keyword",
				"name": "op14_body_notNormaliazedInstalledVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.normaliazed_installed_version.keyword"
			},
			{
				"displayName": "Not Normalized Product",
				"name": "op14_body_notNormalizedProduct",
				"type": "string",
				"default": "",
				"description": "Request body field: not.normalized_product"
			},
			{
				"displayName": "Not Normalized Product Keyword",
				"name": "op14_body_notNormalizedProductKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.normalized_product.keyword"
			},
			{
				"displayName": "Not Normalized Vendor",
				"name": "op14_body_notNormalizedVendor",
				"type": "string",
				"default": "",
				"description": "Request body field: not.normalized_vendor"
			},
			{
				"displayName": "Not Normalized Vendor Keyword",
				"name": "op14_body_notNormalizedVendorKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.normalized_vendor.keyword"
			},
			{
				"displayName": "Not Object Guid",
				"name": "op14_body_notObjectGuid",
				"type": "string",
				"default": "",
				"description": "Request body field: not.object_guid"
			},
			{
				"displayName": "Not Object Guid Keyword",
				"name": "op14_body_notObjectGuidKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.object_guid.keyword"
			},
			{
				"displayName": "Not OS Info OS Architecture",
				"name": "op14_body_notOsInfoOsArchitecture",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_architecture"
			},
			{
				"displayName": "Not OS Info OS Architecture Keyword",
				"name": "op14_body_notOsInfoOsArchitectureKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_architecture.keyword"
			},
			{
				"displayName": "Not OS Info OS Platform",
				"name": "op14_body_notOsInfoOsPlatform",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_platform"
			},
			{
				"displayName": "Not OS Info OS Platform Keyword",
				"name": "op14_body_notOsInfoOsPlatformKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_platform.keyword"
			},
			{
				"displayName": "Not OS Info OS Release Name",
				"name": "op14_body_notOsInfoOsReleaseName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_release_name"
			},
			{
				"displayName": "Not OS Info OS Release Name Keyword",
				"name": "op14_body_notOsInfoOsReleaseNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_release_name.keyword"
			},
			{
				"displayName": "Not OS Info OS Type",
				"name": "op14_body_notOsInfoOsType",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_type"
			},
			{
				"displayName": "Not OS Info OS Type Keyword",
				"name": "op14_body_notOsInfoOsTypeKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_type.keyword"
			},
			{
				"displayName": "Not OS Info OS Version",
				"name": "op14_body_notOsInfoOsVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_version"
			},
			{
				"displayName": "Not OS Info OS Version Keyword",
				"name": "op14_body_notOsInfoOsVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_version.keyword"
			},
			{
				"displayName": "Not Parent Account ID",
				"name": "op14_body_notParentAccountId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.parent_account_id"
			},
			{
				"displayName": "Not Product",
				"name": "op14_body_notProduct",
				"type": "string",
				"default": "",
				"description": "Request body field: not.product"
			},
			{
				"displayName": "Not Product Keyword",
				"name": "op14_body_notProductKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.product.keyword"
			},
			{
				"displayName": "Not Root Group ID",
				"name": "op14_body_notRootGroupId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.root_group_id"
			},
			{
				"displayName": "Not Supports Update",
				"name": "op14_body_notSupportsUpdate",
				"type": "boolean",
				"default": false,
				"description": "Request body field: not.supports_update"
			},
			{
				"displayName": "Not Vendor",
				"name": "op14_body_notVendor",
				"type": "string",
				"default": "",
				"description": "Request body field: not.vendor"
			},
			{
				"displayName": "Not Vendor Keyword",
				"name": "op14_body_notVendorKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.vendor.keyword"
			},
			{
				"displayName": "Object Guid",
				"name": "op14_body_objectGuid",
				"type": "string",
				"default": "",
				"description": "Request body field: object_guid"
			},
			{
				"displayName": "Object Guid Keyword",
				"name": "op14_body_objectGuidKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: object_guid.keyword"
			},
			{
				"displayName": "OS Info OS Architecture",
				"name": "op14_body_osInfoOsArchitecture",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_architecture"
			},
			{
				"displayName": "OS Info OS Architecture Keyword",
				"name": "op14_body_osInfoOsArchitectureKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_architecture.keyword"
			},
			{
				"displayName": "OS Info OS Platform",
				"name": "op14_body_osInfoOsPlatform",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_platform"
			},
			{
				"displayName": "OS Info OS Platform Keyword",
				"name": "op14_body_osInfoOsPlatformKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_platform.keyword"
			},
			{
				"displayName": "OS Info OS Release Name",
				"name": "op14_body_osInfoOsReleaseName",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_release_name"
			},
			{
				"displayName": "OS Info OS Release Name Keyword",
				"name": "op14_body_osInfoOsReleaseNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_release_name.keyword"
			},
			{
				"displayName": "OS Info OS Type",
				"name": "op14_body_osInfoOsType",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_type"
			},
			{
				"displayName": "OS Info OS Type Keyword",
				"name": "op14_body_osInfoOsTypeKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_type.keyword"
			},
			{
				"displayName": "OS Info OS Version",
				"name": "op14_body_osInfoOsVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_version"
			},
			{
				"displayName": "OS Info OS Version Keyword",
				"name": "op14_body_osInfoOsVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_version.keyword"
			},
			{
				"displayName": "Page Size",
				"name": "op14_body_pageSize",
				"type": "number",
				"default": 50,
				"description": "Request body field: page_size"
			},
			{
				"displayName": "Parent Account ID",
				"name": "op14_body_parentAccountId",
				"type": "string",
				"default": "",
				"description": "Request body field: parent_account_id"
			},
			{
				"displayName": "Product",
				"name": "op14_body_product",
				"type": "string",
				"default": "",
				"description": "Request body field: product"
			},
			{
				"displayName": "Product Keyword",
				"name": "op14_body_productKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: product.keyword"
			},
			{
				"displayName": "Product Signature",
				"name": "op14_body_productSignature",
				"type": "number",
				"default": 0,
				"description": "Request body field: product_signature"
			},
			{
				"displayName": "Root Group ID",
				"name": "op14_body_rootGroupId",
				"type": "string",
				"default": "",
				"description": "Request body field: root_group_id"
			},
			{
				"displayName": "Sort Field",
				"name": "op14_body_sortField",
				"type": "string",
				"default": "account_id",
				"description": "Request body field: sort_field"
			},
			{
				"displayName": "Sort Order",
				"name": "op14_body_sortOrder",
				"type": "string",
				"default": "asc",
				"description": "Request body field: sort_order"
			},
			{
				"displayName": "Supports Update",
				"name": "op14_body_supportsUpdate",
				"type": "boolean",
				"default": false,
				"description": "Request body field: supports_update"
			},
			{
				"displayName": "Update Available",
				"name": "op14_body_updateAvailable",
				"type": "boolean",
				"default": false,
				"description": "Request body field: update_available"
			},
			{
				"displayName": "Vendor",
				"name": "op14_body_vendor",
				"type": "string",
				"default": "",
				"description": "Request body field: vendor"
			},
			{
				"displayName": "Vendor Keyword",
				"name": "op14_body_vendorKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: vendor.keyword"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op14_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"assets"
				],
				"operation": [
					"postAssetsSoftware"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op15_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"assets"
				],
				"operation": [
					"postAssetsSoftwareExport"
				]
			}
		},
		"options": [
			{
				"displayName": "Download",
				"name": "op15_body_download",
				"type": "boolean",
				"default": false,
				"description": "Request body field: download"
			},
			{
				"displayName": "Format",
				"name": "op15_body_format",
				"type": "string",
				"default": "csv",
				"description": "Request body field: format"
			},
			{
				"displayName": "Type",
				"name": "op15_body_type",
				"type": "string",
				"default": "string",
				"description": "Request body field: type"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op15_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"assets"
				],
				"operation": [
					"postAssetsSoftwareExport"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op16_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"assets"
				],
				"operation": [
					"postAssetsSoftwareSearchGroupby"
				]
			}
		},
		"options": [
			{
				"displayName": "Group By",
				"name": "op16_body_groupBy",
				"type": "string",
				"default": "account_id",
				"description": "Request body field: group_by"
			},
			{
				"displayName": "Next Cursor",
				"name": "op16_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Page Size",
				"name": "op16_body_pageSize",
				"type": "number",
				"default": 2000,
				"description": "Request body field: page_size"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op16_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"assets"
				],
				"operation": [
					"postAssetsSoftwareSearchGroupby"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op17_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"postContentFiltering"
				]
			}
		},
		"options": [
			{
				"displayName": "Doh URL",
				"name": "op17_body_dohUrl",
				"type": "string",
				"default": "",
				"description": "Request body field: doh_url"
			},
			{
				"displayName": "Enabled",
				"name": "op17_body_enabled",
				"type": "boolean",
				"default": false,
				"description": "Request body field: enabled"
			},
			{
				"displayName": "Name",
				"name": "op17_body_name",
				"type": "string",
				"default": "",
				"description": "Request body field: name"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op17_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"postContentFiltering"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op21_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"postContentFilteringSearch"
				]
			}
		},
		"options": [
			{
				"displayName": "Populate Users",
				"name": "op21_body_populateUsers",
				"type": "boolean",
				"default": false,
				"description": "Request body field: populate.users"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op21_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"postContentFilteringSearch"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op23_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"putContentFilteringSettings"
				]
			}
		},
		"options": [
			{
				"displayName": "Block Page Background Color",
				"name": "op23_body_blockPageBackgroundColor",
				"type": "string",
				"default": "",
				"description": "Request body field: block_page.background_color"
			},
			{
				"displayName": "Block Page Enabled",
				"name": "op23_body_blockPageEnabled",
				"type": "boolean",
				"default": false,
				"description": "Request body field: block_page.enabled"
			},
			{
				"displayName": "Block Page Footer Text",
				"name": "op23_body_blockPageFooterText",
				"type": "string",
				"default": "",
				"description": "Request body field: block_page.footer_text"
			},
			{
				"displayName": "Block Page Header Text",
				"name": "op23_body_blockPageHeaderText",
				"type": "string",
				"default": "",
				"description": "Request body field: block_page.header_text"
			},
			{
				"displayName": "Block Page Logo Path",
				"name": "op23_body_blockPageLogoPath",
				"type": "string",
				"default": "",
				"description": "Request body field: block_page.logo_path"
			},
			{
				"displayName": "Block Page Mailto Address",
				"name": "op23_body_blockPageMailtoAddress",
				"type": "string",
				"default": "",
				"description": "Request body field: block_page.mailto_address"
			},
			{
				"displayName": "Block Page Mailto Subject",
				"name": "op23_body_blockPageMailtoSubject",
				"type": "string",
				"default": "",
				"description": "Request body field: block_page.mailto_subject"
			},
			{
				"displayName": "Block Page Name",
				"name": "op23_body_blockPageName",
				"type": "string",
				"default": "",
				"description": "Request body field: block_page.name"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op23_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"putContentFilteringSettings"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op24_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"deleteContentFilteringById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op24_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"deleteContentFilteringById"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op25_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"getContentFilteringById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op26_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"putContentFilteringById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op26_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"putContentFilteringById"
				]
			}
		},
		"options": [
			{
				"displayName": "Doh URL",
				"name": "op26_body_dohUrl",
				"type": "string",
				"default": "",
				"description": "Request body field: doh_url"
			},
			{
				"displayName": "Enabled",
				"name": "op26_body_enabled",
				"type": "boolean",
				"default": false,
				"description": "Request body field: enabled"
			},
			{
				"displayName": "Name",
				"name": "op26_body_name",
				"type": "string",
				"default": "",
				"description": "Request body field: name"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op26_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"putContentFilteringById"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op27_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"putContentFilteringByIdEnable"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op27_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"putContentFilteringByIdEnable"
				]
			}
		},
		"options": [
			{
				"displayName": "Enabled",
				"name": "op27_body_enabled",
				"type": "boolean",
				"default": false,
				"description": "Request body field: enabled"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op27_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"putContentFilteringByIdEnable"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op28_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"putContentFilteringByIdEnableForPolicy"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op28_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"putContentFilteringByIdEnableForPolicy"
				]
			}
		},
		"options": [
			{
				"displayName": "Enabled",
				"name": "op28_body_enabled",
				"type": "boolean",
				"default": false,
				"description": "Request body field: enabled"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op28_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"contentFiltering"
				],
				"operation": [
					"putContentFilteringByIdEnableForPolicy"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op29_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"cve"
				],
				"operation": [
					"postCve"
				]
			}
		},
		"options": [
			{
				"displayName": "Account Name",
				"name": "op29_body_accountName",
				"type": "string",
				"default": "",
				"description": "Request body field: account_name"
			},
			{
				"displayName": "Account Name Keyword",
				"name": "op29_body_accountNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: account_name.keyword"
			},
			{
				"displayName": "Alias",
				"name": "op29_body_alias",
				"type": "string",
				"default": "",
				"description": "Request body field: alias"
			},
			{
				"displayName": "Alias Keyword",
				"name": "op29_body_aliasKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: alias.keyword"
			},
			{
				"displayName": "Cisa Exploitable",
				"name": "op29_body_cisaExploitable",
				"type": "boolean",
				"default": false,
				"description": "Request body field: cisa_exploitable"
			},
			{
				"displayName": "Created At After",
				"name": "op29_body_createdAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: created_at_after"
			},
			{
				"displayName": "Created At Before",
				"name": "op29_body_createdAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: created_at_before"
			},
			{
				"displayName": "CVE ID",
				"name": "op29_body_cveId",
				"type": "string",
				"default": "",
				"description": "Request body field: cve_id"
			},
			{
				"displayName": "CVE ID Keyword",
				"name": "op29_body_cveIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: cve_id.keyword"
			},
			{
				"displayName": "Cvss20 Score",
				"name": "op29_body_cvss20Score",
				"type": "number",
				"default": 0,
				"description": "Request body field: cvss20_score"
			},
			{
				"displayName": "Cvss20 Score Gt",
				"name": "op29_body_cvss20ScoreGt",
				"type": "number",
				"default": 0,
				"description": "Request body field: cvss20_score_gt"
			},
			{
				"displayName": "Cvss20 Score Gte",
				"name": "op29_body_cvss20ScoreGte",
				"type": "number",
				"default": 0,
				"description": "Request body field: cvss20_score_gte"
			},
			{
				"displayName": "Cvss20 Score Lt",
				"name": "op29_body_cvss20ScoreLt",
				"type": "number",
				"default": 0,
				"description": "Request body field: cvss20_score_lt"
			},
			{
				"displayName": "Cvss20 Score Lte",
				"name": "op29_body_cvss20ScoreLte",
				"type": "number",
				"default": 0,
				"description": "Request body field: cvss20_score_lte"
			},
			{
				"displayName": "Cvss30 Score",
				"name": "op29_body_cvss30Score",
				"type": "number",
				"default": 0,
				"description": "Request body field: cvss30_score"
			},
			{
				"displayName": "Cvss30 Score Gt",
				"name": "op29_body_cvss30ScoreGt",
				"type": "number",
				"default": 0,
				"description": "Request body field: cvss30_score_gt"
			},
			{
				"displayName": "Cvss30 Score Gte",
				"name": "op29_body_cvss30ScoreGte",
				"type": "number",
				"default": 0,
				"description": "Request body field: cvss30_score_gte"
			},
			{
				"displayName": "Cvss30 Score Lt",
				"name": "op29_body_cvss30ScoreLt",
				"type": "number",
				"default": 0,
				"description": "Request body field: cvss30_score_lt"
			},
			{
				"displayName": "Cvss30 Score Lte",
				"name": "op29_body_cvss30ScoreLte",
				"type": "number",
				"default": 0,
				"description": "Request body field: cvss30_score_lte"
			},
			{
				"displayName": "Display Installed Version",
				"name": "op29_body_displayInstalledVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: display_installed_version"
			},
			{
				"displayName": "Display Installed Version Keyword",
				"name": "op29_body_displayInstalledVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: display_installed_version.keyword"
			},
			{
				"displayName": "Display Product",
				"name": "op29_body_displayProduct",
				"type": "string",
				"default": "",
				"description": "Request body field: display_product"
			},
			{
				"displayName": "Display Product Keyword",
				"name": "op29_body_displayProductKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: display_product.keyword"
			},
			{
				"displayName": "Display Vendor",
				"name": "op29_body_displayVendor",
				"type": "string",
				"default": "",
				"description": "Request body field: display_vendor"
			},
			{
				"displayName": "Display Vendor Keyword",
				"name": "op29_body_displayVendorKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: display_vendor.keyword"
			},
			{
				"displayName": "Document ID",
				"name": "op29_body_documentId",
				"type": "string",
				"default": "",
				"description": "Request body field: document_id"
			},
			{
				"displayName": "Document ID Keyword",
				"name": "op29_body_documentIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: document_id.keyword"
			},
			{
				"displayName": "Fully Qualified Host Name",
				"name": "op29_body_fullyQualifiedHostName",
				"type": "string",
				"default": "",
				"description": "Request body field: fully_qualified_host_name"
			},
			{
				"displayName": "Fully Qualified Host Name Keyword",
				"name": "op29_body_fullyQualifiedHostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: fully_qualified_host_name.keyword"
			},
			{
				"displayName": "Group ID",
				"name": "op29_body_groupId",
				"type": "string",
				"default": "",
				"description": "Request body field: group_id"
			},
			{
				"displayName": "Group ID Keyword",
				"name": "op29_body_groupIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: group_id.keyword"
			},
			{
				"displayName": "Host Name",
				"name": "op29_body_hostName",
				"type": "string",
				"default": "",
				"description": "Request body field: host_name"
			},
			{
				"displayName": "Host Name Keyword",
				"name": "op29_body_hostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: host_name.keyword"
			},
			{
				"displayName": "Installation Date After",
				"name": "op29_body_installationDateAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: installation_date_after"
			},
			{
				"displayName": "Installation Date Before",
				"name": "op29_body_installationDateBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: installation_date_before"
			},
			{
				"displayName": "Installed Version",
				"name": "op29_body_installedVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: installed_version"
			},
			{
				"displayName": "Installed Version Keyword",
				"name": "op29_body_installedVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: installed_version.keyword"
			},
			{
				"displayName": "Machine ID",
				"name": "op29_body_machineId",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_id"
			},
			{
				"displayName": "Machine ID Keyword",
				"name": "op29_body_machineIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_id.keyword"
			},
			{
				"displayName": "Name Multi Search",
				"name": "op29_body_nameMultiSearch",
				"type": "string",
				"default": "",
				"description": "Request body field: name_multi_search"
			},
			{
				"displayName": "Next Cursor",
				"name": "op29_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Normalized Installed Version",
				"name": "op29_body_normalizedInstalledVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: normalized_installed_version"
			},
			{
				"displayName": "Normalized Installed Version Keyword",
				"name": "op29_body_normalizedInstalledVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: normalized_installed_version.keyword"
			},
			{
				"displayName": "Normalized Product",
				"name": "op29_body_normalizedProduct",
				"type": "string",
				"default": "",
				"description": "Request body field: normalized_product"
			},
			{
				"displayName": "Normalized Product Keyword",
				"name": "op29_body_normalizedProductKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: normalized_product.keyword"
			},
			{
				"displayName": "Normalized Vendor",
				"name": "op29_body_normalizedVendor",
				"type": "string",
				"default": "",
				"description": "Request body field: normalized_vendor"
			},
			{
				"displayName": "Normalized Vendor Keyword",
				"name": "op29_body_normalizedVendorKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: normalized_vendor.keyword"
			},
			{
				"displayName": "Not Account Name",
				"name": "op29_body_notAccountName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.account_name"
			},
			{
				"displayName": "Not Account Name Keyword",
				"name": "op29_body_notAccountNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.account_name.keyword"
			},
			{
				"displayName": "Not Alias",
				"name": "op29_body_notAlias",
				"type": "string",
				"default": "",
				"description": "Request body field: not.alias"
			},
			{
				"displayName": "Not Alias Keyword",
				"name": "op29_body_notAliasKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.alias.keyword"
			},
			{
				"displayName": "Not CVE ID",
				"name": "op29_body_notCveId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.cve_id"
			},
			{
				"displayName": "Not CVE ID Keyword",
				"name": "op29_body_notCveIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.cve_id.keyword"
			},
			{
				"displayName": "Not Display Installed Version",
				"name": "op29_body_notDisplayInstalledVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.display_installed_version"
			},
			{
				"displayName": "Not Display Installed Version Keyword",
				"name": "op29_body_notDisplayInstalledVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.display_installed_version.keyword"
			},
			{
				"displayName": "Not Display Product",
				"name": "op29_body_notDisplayProduct",
				"type": "string",
				"default": "",
				"description": "Request body field: not.display_product"
			},
			{
				"displayName": "Not Display Product Keyword",
				"name": "op29_body_notDisplayProductKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.display_product.keyword"
			},
			{
				"displayName": "Not Display Vendor",
				"name": "op29_body_notDisplayVendor",
				"type": "string",
				"default": "",
				"description": "Request body field: not.display_vendor"
			},
			{
				"displayName": "Not Display Vendor Keyword",
				"name": "op29_body_notDisplayVendorKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.display_vendor.keyword"
			},
			{
				"displayName": "Not Fully Qualified Host Name",
				"name": "op29_body_notFullyQualifiedHostName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.fully_qualified_host_name"
			},
			{
				"displayName": "Not Fully Qualified Host Name Keyword",
				"name": "op29_body_notFullyQualifiedHostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.fully_qualified_host_name.keyword"
			},
			{
				"displayName": "Not Group ID",
				"name": "op29_body_notGroupId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.group_id"
			},
			{
				"displayName": "Not Group ID Keyword",
				"name": "op29_body_notGroupIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.group_id.keyword"
			},
			{
				"displayName": "Not Host Name",
				"name": "op29_body_notHostName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.host_name"
			},
			{
				"displayName": "Not Host Name Keyword",
				"name": "op29_body_notHostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.host_name.keyword"
			},
			{
				"displayName": "Not Installed Version",
				"name": "op29_body_notInstalledVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.installed_version"
			},
			{
				"displayName": "Not Installed Version Keyword",
				"name": "op29_body_notInstalledVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.installed_version.keyword"
			},
			{
				"displayName": "Not Machine ID",
				"name": "op29_body_notMachineId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.machine_id"
			},
			{
				"displayName": "Not Machine ID Keyword",
				"name": "op29_body_notMachineIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.machine_id.keyword"
			},
			{
				"displayName": "Not Normalized Installed Version",
				"name": "op29_body_notNormalizedInstalledVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.normalized_installed_version"
			},
			{
				"displayName": "Not Normalized Installed Version Keyword",
				"name": "op29_body_notNormalizedInstalledVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.normalized_installed_version.keyword"
			},
			{
				"displayName": "Not Normalized Product",
				"name": "op29_body_notNormalizedProduct",
				"type": "string",
				"default": "",
				"description": "Request body field: not.normalized_product"
			},
			{
				"displayName": "Not Normalized Product Keyword",
				"name": "op29_body_notNormalizedProductKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.normalized_product.keyword"
			},
			{
				"displayName": "Not Normalized Vendor",
				"name": "op29_body_notNormalizedVendor",
				"type": "string",
				"default": "",
				"description": "Request body field: not.normalized_vendor"
			},
			{
				"displayName": "Not Normalized Vendor Keyword",
				"name": "op29_body_notNormalizedVendorKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.normalized_vendor.keyword"
			},
			{
				"displayName": "Not Object Guid",
				"name": "op29_body_notObjectGuid",
				"type": "string",
				"default": "",
				"description": "Request body field: not.object_guid"
			},
			{
				"displayName": "Not Object Guid Keyword",
				"name": "op29_body_notObjectGuidKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.object_guid.keyword"
			},
			{
				"displayName": "Not OS Info OS Architecture",
				"name": "op29_body_notOsInfoOsArchitecture",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_architecture"
			},
			{
				"displayName": "Not OS Info OS Architecture Keyword",
				"name": "op29_body_notOsInfoOsArchitectureKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_architecture.keyword"
			},
			{
				"displayName": "Not OS Info OS Platform",
				"name": "op29_body_notOsInfoOsPlatform",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_platform"
			},
			{
				"displayName": "Not OS Info OS Platform Keyword",
				"name": "op29_body_notOsInfoOsPlatformKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_platform.keyword"
			},
			{
				"displayName": "Not OS Info OS Release Name",
				"name": "op29_body_notOsInfoOsReleaseName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_release_name"
			},
			{
				"displayName": "Not OS Info OS Release Name Keyword",
				"name": "op29_body_notOsInfoOsReleaseNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_release_name.keyword"
			},
			{
				"displayName": "Not OS Info OS Type",
				"name": "op29_body_notOsInfoOsType",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_type"
			},
			{
				"displayName": "Not OS Info OS Type Keyword",
				"name": "op29_body_notOsInfoOsTypeKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_type.keyword"
			},
			{
				"displayName": "Not OS Info OS Version",
				"name": "op29_body_notOsInfoOsVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_version"
			},
			{
				"displayName": "Not OS Info OS Version Keyword",
				"name": "op29_body_notOsInfoOsVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_version.keyword"
			},
			{
				"displayName": "Not Parent Account ID",
				"name": "op29_body_notParentAccountId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.parent_account_id"
			},
			{
				"displayName": "Not Parent Account ID Keyword",
				"name": "op29_body_notParentAccountIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.parent_account_id.keyword"
			},
			{
				"displayName": "Not Product",
				"name": "op29_body_notProduct",
				"type": "string",
				"default": "",
				"description": "Request body field: not.product"
			},
			{
				"displayName": "Not Product Keyword",
				"name": "op29_body_notProductKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.product.keyword"
			},
			{
				"displayName": "Not Root Group ID",
				"name": "op29_body_notRootGroupId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.root_group_id"
			},
			{
				"displayName": "Not Root Group ID Keyword",
				"name": "op29_body_notRootGroupIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.root_group_id.keyword"
			},
			{
				"displayName": "Not Severity",
				"name": "op29_body_notSeverity",
				"type": "string",
				"default": "",
				"description": "Request body field: not.severity"
			},
			{
				"displayName": "Not Severity Keyword",
				"name": "op29_body_notSeverityKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.severity.keyword"
			},
			{
				"displayName": "Not Sort Name",
				"name": "op29_body_notSortName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.sort_name"
			},
			{
				"displayName": "Not Sort Name Keyword",
				"name": "op29_body_notSortNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.sort_name.keyword"
			},
			{
				"displayName": "Not Vendor",
				"name": "op29_body_notVendor",
				"type": "string",
				"default": "",
				"description": "Request body field: not.vendor"
			},
			{
				"displayName": "Not Vendor Keyword",
				"name": "op29_body_notVendorKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.vendor.keyword"
			},
			{
				"displayName": "Object Guid",
				"name": "op29_body_objectGuid",
				"type": "string",
				"default": "",
				"description": "Request body field: object_guid"
			},
			{
				"displayName": "Object Guid Keyword",
				"name": "op29_body_objectGuidKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: object_guid.keyword"
			},
			{
				"displayName": "OS Info OS Architecture",
				"name": "op29_body_osInfoOsArchitecture",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_architecture"
			},
			{
				"displayName": "OS Info OS Architecture Keyword",
				"name": "op29_body_osInfoOsArchitectureKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_architecture.keyword"
			},
			{
				"displayName": "OS Info OS Platform",
				"name": "op29_body_osInfoOsPlatform",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_platform"
			},
			{
				"displayName": "OS Info OS Platform Keyword",
				"name": "op29_body_osInfoOsPlatformKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_platform.keyword"
			},
			{
				"displayName": "OS Info OS Release Name",
				"name": "op29_body_osInfoOsReleaseName",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_release_name"
			},
			{
				"displayName": "OS Info OS Release Name Keyword",
				"name": "op29_body_osInfoOsReleaseNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_release_name.keyword"
			},
			{
				"displayName": "OS Info OS Type",
				"name": "op29_body_osInfoOsType",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_type"
			},
			{
				"displayName": "OS Info OS Type Keyword",
				"name": "op29_body_osInfoOsTypeKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_type.keyword"
			},
			{
				"displayName": "OS Info OS Version",
				"name": "op29_body_osInfoOsVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_version"
			},
			{
				"displayName": "OS Info OS Version Keyword",
				"name": "op29_body_osInfoOsVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_version.keyword"
			},
			{
				"displayName": "Page Size",
				"name": "op29_body_pageSize",
				"type": "number",
				"default": 50,
				"description": "Request body field: page_size"
			},
			{
				"displayName": "Parent Account ID",
				"name": "op29_body_parentAccountId",
				"type": "string",
				"default": "",
				"description": "Request body field: parent_account_id"
			},
			{
				"displayName": "Parent Account ID Keyword",
				"name": "op29_body_parentAccountIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: parent_account_id.keyword"
			},
			{
				"displayName": "Product",
				"name": "op29_body_product",
				"type": "string",
				"default": "",
				"description": "Request body field: product"
			},
			{
				"displayName": "Product Keyword",
				"name": "op29_body_productKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: product.keyword"
			},
			{
				"displayName": "Published At After",
				"name": "op29_body_publishedAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: published_at_after"
			},
			{
				"displayName": "Published At Before",
				"name": "op29_body_publishedAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: published_at_before"
			},
			{
				"displayName": "Root Group ID",
				"name": "op29_body_rootGroupId",
				"type": "string",
				"default": "",
				"description": "Request body field: root_group_id"
			},
			{
				"displayName": "Root Group ID Keyword",
				"name": "op29_body_rootGroupIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: root_group_id.keyword"
			},
			{
				"displayName": "Severity",
				"name": "op29_body_severity",
				"type": "string",
				"default": "",
				"description": "Request body field: severity"
			},
			{
				"displayName": "Severity Keyword",
				"name": "op29_body_severityKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: severity.keyword"
			},
			{
				"displayName": "Severity Score",
				"name": "op29_body_severityScore",
				"type": "number",
				"default": 0,
				"description": "Request body field: severity_score"
			},
			{
				"displayName": "Severity Score Gt",
				"name": "op29_body_severityScoreGt",
				"type": "number",
				"default": 0,
				"description": "Request body field: severity_score_gt"
			},
			{
				"displayName": "Severity Score Gte",
				"name": "op29_body_severityScoreGte",
				"type": "number",
				"default": 0,
				"description": "Request body field: severity_score_gte"
			},
			{
				"displayName": "Severity Score Lt",
				"name": "op29_body_severityScoreLt",
				"type": "number",
				"default": 0,
				"description": "Request body field: severity_score_lt"
			},
			{
				"displayName": "Severity Score Lte",
				"name": "op29_body_severityScoreLte",
				"type": "number",
				"default": 0,
				"description": "Request body field: severity_score_lte"
			},
			{
				"displayName": "Sort Field",
				"name": "op29_body_sortField",
				"type": "string",
				"default": "account_id",
				"description": "Request body field: sort_field"
			},
			{
				"displayName": "Sort Name",
				"name": "op29_body_sortName",
				"type": "string",
				"default": "",
				"description": "Request body field: sort_name"
			},
			{
				"displayName": "Sort Name Keyword",
				"name": "op29_body_sortNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: sort_name.keyword"
			},
			{
				"displayName": "Sort Order",
				"name": "op29_body_sortOrder",
				"type": "string",
				"default": "asc",
				"description": "Request body field: sort_order"
			},
			{
				"displayName": "Vendor",
				"name": "op29_body_vendor",
				"type": "string",
				"default": "",
				"description": "Request body field: vendor"
			},
			{
				"displayName": "Vendor Keyword",
				"name": "op29_body_vendorKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: vendor.keyword"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op29_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"cve"
				],
				"operation": [
					"postCve"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op30_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"cve"
				],
				"operation": [
					"postCveExport"
				]
			}
		},
		"options": [
			{
				"displayName": "Download",
				"name": "op30_body_download",
				"type": "boolean",
				"default": false,
				"description": "Request body field: download"
			},
			{
				"displayName": "Format",
				"name": "op30_body_format",
				"type": "string",
				"default": "csv",
				"description": "Request body field: format"
			},
			{
				"displayName": "Type",
				"name": "op30_body_type",
				"type": "string",
				"default": "string",
				"description": "Request body field: type"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op30_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"cve"
				],
				"operation": [
					"postCveExport"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op31_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"cve"
				],
				"operation": [
					"postCveSearchGroupby"
				]
			}
		},
		"options": [
			{
				"displayName": "Group By",
				"name": "op31_body_groupBy",
				"type": "string",
				"default": "account_id",
				"description": "Request body field: group_by"
			},
			{
				"displayName": "Next Cursor",
				"name": "op31_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Page Size",
				"name": "op31_body_pageSize",
				"type": "number",
				"default": 2000,
				"description": "Request body field: page_size"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op31_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"cve"
				],
				"operation": [
					"postCveSearchGroupby"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op32_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"cve"
				],
				"operation": [
					"getCveById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op33_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"detections"
				],
				"operation": [
					"postDetections"
				]
			}
		},
		"options": [
			{
				"displayName": "Affected Application",
				"name": "op33_body_affectedApplication",
				"type": "string",
				"default": "",
				"description": "Request body field: affected_application"
			},
			{
				"displayName": "Affected Application Keyword",
				"name": "op33_body_affectedApplicationKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: affected_application.keyword"
			},
			{
				"displayName": "Aggregate By Account",
				"name": "op33_body_aggregateByAccount",
				"type": "boolean",
				"default": false,
				"description": "Request body field: aggregate_by_account"
			},
			{
				"displayName": "At After",
				"name": "op33_body_atAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: at_after"
			},
			{
				"displayName": "At Before",
				"name": "op33_body_atBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: at_before"
			},
			{
				"displayName": "Category",
				"name": "op33_body_category",
				"type": "string",
				"default": "",
				"description": "Request body field: category"
			},
			{
				"displayName": "Cleaned At After",
				"name": "op33_body_cleanedAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: cleaned_at_after"
			},
			{
				"displayName": "Cleaned At Before",
				"name": "op33_body_cleanedAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: cleaned_at_before"
			},
			{
				"displayName": "Correlation Hash",
				"name": "op33_body_correlationHash",
				"type": "string",
				"default": "",
				"description": "Request body field: correlation_hash"
			},
			{
				"displayName": "Detection ID",
				"name": "op33_body_detectionId",
				"type": "string",
				"default": "",
				"description": "Request body field: detection_id"
			},
			{
				"displayName": "Domain Name",
				"name": "op33_body_domainName",
				"type": "string",
				"default": "",
				"description": "Request body field: domain_name"
			},
			{
				"displayName": "Domain Name Keyword",
				"name": "op33_body_domainNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: domain_name.keyword"
			},
			{
				"displayName": "End Date",
				"name": "op33_body_endDate",
				"type": "string",
				"default": "",
				"description": "Request body field: end_date"
			},
			{
				"displayName": "Engine Version",
				"name": "op33_body_engineVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: engine_version"
			},
			{
				"displayName": "Engine Version Keyword",
				"name": "op33_body_engineVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: engine_version.keyword"
			},
			{
				"displayName": "Fully Qualified Host Name",
				"name": "op33_body_fullyQualifiedHostName",
				"type": "string",
				"default": "",
				"description": "Request body field: fully_qualified_host_name"
			},
			{
				"displayName": "Fully Qualified Host Name Keyword",
				"name": "op33_body_fullyQualifiedHostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: fully_qualified_host_name.keyword"
			},
			{
				"displayName": "Group ID",
				"name": "op33_body_groupId",
				"type": "string",
				"default": "",
				"description": "Request body field: group_id"
			},
			{
				"displayName": "Host Name",
				"name": "op33_body_hostName",
				"type": "string",
				"default": "",
				"description": "Request body field: host_name"
			},
			{
				"displayName": "Host Name Keyword",
				"name": "op33_body_hostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: host_name.keyword"
			},
			{
				"displayName": "Is Root Detection",
				"name": "op33_body_isRootDetection",
				"type": "boolean",
				"default": false,
				"description": "Request body field: is_root_detection"
			},
			{
				"displayName": "Is Rtp Stream Event",
				"name": "op33_body_isRtpStreamEvent",
				"type": "boolean",
				"default": false,
				"description": "Request body field: is_rtp_stream_event"
			},
			{
				"displayName": "Job ID",
				"name": "op33_body_jobId",
				"type": "string",
				"default": "",
				"description": "Request body field: job_id"
			},
			{
				"displayName": "Last User",
				"name": "op33_body_lastUser",
				"type": "string",
				"default": "",
				"description": "Request body field: last_user"
			},
			{
				"displayName": "Last User Keyword",
				"name": "op33_body_lastUserKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: last_user.keyword"
			},
			{
				"displayName": "Machine ID",
				"name": "op33_body_machineId",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_id"
			},
			{
				"displayName": "Machine Name",
				"name": "op33_body_machineName",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_name"
			},
			{
				"displayName": "Machine Name Keyword",
				"name": "op33_body_machineNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_name.keyword"
			},
			{
				"displayName": "Md5",
				"name": "op33_body_md5",
				"type": "string",
				"default": "",
				"description": "Request body field: md5"
			},
			{
				"displayName": "Next Cursor",
				"name": "op33_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Nics Description",
				"name": "op33_body_nicsDescription",
				"type": "string",
				"default": "",
				"description": "Request body field: nics.description"
			},
			{
				"displayName": "Nics Ips",
				"name": "op33_body_nicsIps",
				"type": "string",
				"default": "",
				"description": "Request body field: nics.ips"
			},
			{
				"displayName": "Nics Mac Address",
				"name": "op33_body_nicsMacAddress",
				"type": "string",
				"default": "",
				"description": "Request body field: nics.mac_address"
			},
			{
				"displayName": "Not Category",
				"name": "op33_body_notCategory",
				"type": "string",
				"default": "",
				"description": "Request body field: not.category"
			},
			{
				"displayName": "Not Scan Result Device Disk Model",
				"name": "op33_body_notScanResultDeviceDiskModel",
				"type": "string",
				"default": "",
				"description": "Request body field: not.scan_result.device.disk_model"
			},
			{
				"displayName": "Not Scan Result Device Disk Model Keyword",
				"name": "op33_body_notScanResultDeviceDiskModelKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.scan_result.device.disk_model.keyword"
			},
			{
				"displayName": "Not Type",
				"name": "op33_body_notType",
				"type": "string",
				"default": "",
				"description": "Request body field: not.type"
			},
			{
				"displayName": "Object Guid",
				"name": "op33_body_objectGuid",
				"type": "string",
				"default": "",
				"description": "Request body field: object_guid"
			},
			{
				"displayName": "OS Info OS Architecture",
				"name": "op33_body_osInfoOsArchitecture",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_architecture"
			},
			{
				"displayName": "OS Info OS Platform",
				"name": "op33_body_osInfoOsPlatform",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_platform"
			},
			{
				"displayName": "OS Info OS Release Name",
				"name": "op33_body_osInfoOsReleaseName",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_release_name"
			},
			{
				"displayName": "OS Info OS Type",
				"name": "op33_body_osInfoOsType",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_type"
			},
			{
				"displayName": "OS Info OS Version",
				"name": "op33_body_osInfoOsVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_version"
			},
			{
				"displayName": "Page Size",
				"name": "op33_body_pageSize",
				"type": "number",
				"default": 2000,
				"description": "Request body field: page_size"
			},
			{
				"displayName": "Parent Detection ID",
				"name": "op33_body_parentDetectionId",
				"type": "string",
				"default": "",
				"description": "Request body field: parent_detection_id"
			},
			{
				"displayName": "Path",
				"name": "op33_body_path",
				"type": "string",
				"default": "",
				"description": "Request body field: path"
			},
			{
				"displayName": "Path Keyword",
				"name": "op33_body_pathKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: path.keyword"
			},
			{
				"displayName": "Plugins Asset Manager Plugin Version",
				"name": "op33_body_pluginsAssetManagerPluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.asset_manager.plugin_version"
			},
			{
				"displayName": "Plugins Asset Manager Reboot Reason",
				"name": "op33_body_pluginsAssetManagerRebootReason",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.asset_manager.reboot_reason"
			},
			{
				"displayName": "Plugins Endpoint Detection Response Plugin Version",
				"name": "op33_body_pluginsEndpointDetectionResponsePluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_detection_response.plugin_version"
			},
			{
				"displayName": "Plugins Endpoint Detection Response Reboot Reason",
				"name": "op33_body_pluginsEndpointDetectionResponseRebootReason",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_detection_response.reboot_reason"
			},
			{
				"displayName": "Plugins Endpoint Protection Component Package Version",
				"name": "op33_body_pluginsEndpointProtectionComponentPackageVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.component_package_version"
			},
			{
				"displayName": "Plugins Endpoint Protection Plugin Version",
				"name": "op33_body_pluginsEndpointProtectionPluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.plugin_version"
			},
			{
				"displayName": "Plugins Endpoint Protection Reboot Reason",
				"name": "op33_body_pluginsEndpointProtectionRebootReason",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.reboot_reason"
			},
			{
				"displayName": "Plugins Endpoint Protection Sdk Version",
				"name": "op33_body_pluginsEndpointProtectionSdkVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.sdk_version"
			},
			{
				"displayName": "Plugins Endpoint Protection Update Package Version",
				"name": "op33_body_pluginsEndpointProtectionUpdatePackageVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.update_package_version"
			},
			{
				"displayName": "Plugins Incident Response Plugin Version",
				"name": "op33_body_pluginsIncidentResponsePluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.incident_response.plugin_version"
			},
			{
				"displayName": "Plugins Incident Response Reboot Reason",
				"name": "op33_body_pluginsIncidentResponseRebootReason",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.incident_response.reboot_reason"
			},
			{
				"displayName": "Plugins Siem Plugin Version",
				"name": "op33_body_pluginsSiemPluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.siem.plugin_version"
			},
			{
				"displayName": "Plugins Siem Reboot Reason",
				"name": "op33_body_pluginsSiemRebootReason",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.siem.reboot_reason"
			},
			{
				"displayName": "Populate Endpoint",
				"name": "op33_body_populateEndpoint",
				"type": "boolean",
				"default": false,
				"description": "Request body field: populate.endpoint"
			},
			{
				"displayName": "Populate Group",
				"name": "op33_body_populateGroup",
				"type": "boolean",
				"default": false,
				"description": "Request body field: populate.group"
			},
			{
				"displayName": "Populate Scan Result",
				"name": "op33_body_populateScanResult",
				"type": "boolean",
				"default": false,
				"description": "Request body field: populate.scan_result"
			},
			{
				"displayName": "Process Name",
				"name": "op33_body_processName",
				"type": "string",
				"default": "",
				"description": "Request body field: process_name"
			},
			{
				"displayName": "Process Name Keyword",
				"name": "op33_body_processNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: process_name.keyword"
			},
			{
				"displayName": "Protection Status",
				"name": "op33_body_protectionStatus",
				"type": "string",
				"default": "",
				"description": "Request body field: protection_status"
			},
			{
				"displayName": "Reported At After",
				"name": "op33_body_reportedAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: reported_at_after"
			},
			{
				"displayName": "Reported At Before",
				"name": "op33_body_reportedAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: reported_at_before"
			},
			{
				"displayName": "Scan ID",
				"name": "op33_body_scanId",
				"type": "string",
				"default": "",
				"description": "Request body field: scan_id"
			},
			{
				"displayName": "Scan Result Device Disk Model",
				"name": "op33_body_scanResultDeviceDiskModel",
				"type": "string",
				"default": "",
				"description": "Request body field: scan_result.device.disk_model"
			},
			{
				"displayName": "Scan Result Device Disk Model Keyword",
				"name": "op33_body_scanResultDeviceDiskModelKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: scan_result.device.disk_model.keyword"
			},
			{
				"displayName": "Scan Type",
				"name": "op33_body_scanType",
				"type": "string",
				"default": "",
				"description": "Request body field: scan_type"
			},
			{
				"displayName": "Scanned At After",
				"name": "op33_body_scannedAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: scanned_at_after"
			},
			{
				"displayName": "Scanned At Before",
				"name": "op33_body_scannedAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: scanned_at_before"
			},
			{
				"displayName": "Schedule Etag",
				"name": "op33_body_scheduleEtag",
				"type": "string",
				"default": "",
				"description": "Request body field: schedule_etag"
			},
			{
				"displayName": "Schedule ID",
				"name": "op33_body_scheduleId",
				"type": "string",
				"default": "",
				"description": "Request body field: schedule_id"
			},
			{
				"displayName": "Sha256",
				"name": "op33_body_sha256",
				"type": "string",
				"default": "",
				"description": "Request body field: sha256"
			},
			{
				"displayName": "Sort Field",
				"name": "op33_body_sortField",
				"type": "string",
				"default": "trace_id",
				"description": "Request body field: sort_field"
			},
			{
				"displayName": "Sort Order",
				"name": "op33_body_sortOrder",
				"type": "string",
				"default": "asc",
				"description": "Request body field: sort_order"
			},
			{
				"displayName": "Start Date",
				"name": "op33_body_startDate",
				"type": "string",
				"default": "",
				"description": "Request body field: start_date"
			},
			{
				"displayName": "Status",
				"name": "op33_body_status",
				"type": "string",
				"default": "",
				"description": "Request body field: status"
			},
			{
				"displayName": "Threat Name",
				"name": "op33_body_threatName",
				"type": "string",
				"default": "",
				"description": "Request body field: threat_name"
			},
			{
				"displayName": "Threat Name Keyword",
				"name": "op33_body_threatNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: threat_name.keyword"
			},
			{
				"displayName": "Trace ID",
				"name": "op33_body_traceId",
				"type": "string",
				"default": "",
				"description": "Request body field: trace_id"
			},
			{
				"displayName": "Type",
				"name": "op33_body_type",
				"type": "string",
				"default": "",
				"description": "Request body field: type"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op33_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"detections"
				],
				"operation": [
					"postDetections"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op34_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"detections"
				],
				"operation": [
					"postDetectionsExport"
				]
			}
		},
		"options": [
			{
				"displayName": "Download",
				"name": "op34_body_download",
				"type": "boolean",
				"default": false,
				"description": "Request body field: download"
			},
			{
				"displayName": "Format",
				"name": "op34_body_format",
				"type": "string",
				"default": "csv",
				"description": "Request body field: format"
			},
			{
				"displayName": "Type",
				"name": "op34_body_type",
				"type": "string",
				"default": "string",
				"description": "Request body field: type"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op34_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"detections"
				],
				"operation": [
					"postDetectionsExport"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op35_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"detections"
				],
				"operation": [
					"postDetectionsSearchGroupby"
				]
			}
		},
		"options": [
			{
				"displayName": "Group By",
				"name": "op35_body_groupBy",
				"type": "string",
				"default": "account_id",
				"description": "Request body field: group_by"
			},
			{
				"displayName": "Next Cursor",
				"name": "op35_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Page Size",
				"name": "op35_body_pageSize",
				"type": "number",
				"default": 2000,
				"description": "Request body field: page_size"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op35_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"detections"
				],
				"operation": [
					"postDetectionsSearchGroupby"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op36_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"detections"
				],
				"operation": [
					"getDetectionsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op37_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"devicecontrol"
				],
				"operation": [
					"postDevicecontrol"
				]
			}
		},
		"options": [
			{
				"displayName": "Affected Application",
				"name": "op37_body_affectedApplication",
				"type": "string",
				"default": "",
				"description": "Request body field: affected_application"
			},
			{
				"displayName": "Affected Application Keyword",
				"name": "op37_body_affectedApplicationKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: affected_application.keyword"
			},
			{
				"displayName": "Aggregate By Account",
				"name": "op37_body_aggregateByAccount",
				"type": "boolean",
				"default": false,
				"description": "Request body field: aggregate_by_account"
			},
			{
				"displayName": "At After",
				"name": "op37_body_atAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: at_after"
			},
			{
				"displayName": "At Before",
				"name": "op37_body_atBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: at_before"
			},
			{
				"displayName": "Category",
				"name": "op37_body_category",
				"type": "string",
				"default": "",
				"description": "Request body field: category"
			},
			{
				"displayName": "Cleaned At After",
				"name": "op37_body_cleanedAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: cleaned_at_after"
			},
			{
				"displayName": "Cleaned At Before",
				"name": "op37_body_cleanedAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: cleaned_at_before"
			},
			{
				"displayName": "Correlation Hash",
				"name": "op37_body_correlationHash",
				"type": "string",
				"default": "",
				"description": "Request body field: correlation_hash"
			},
			{
				"displayName": "Detection ID",
				"name": "op37_body_detectionId",
				"type": "string",
				"default": "",
				"description": "Request body field: detection_id"
			},
			{
				"displayName": "Device Control Block Status",
				"name": "op37_body_deviceControlBlockStatus",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.block_status"
			},
			{
				"displayName": "Device Control Block Status Keyword",
				"name": "op37_body_deviceControlBlockStatusKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.block_status.keyword"
			},
			{
				"displayName": "Device Control Device ID",
				"name": "op37_body_deviceControlDeviceId",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.device_id"
			},
			{
				"displayName": "Device Control Device ID Keyword",
				"name": "op37_body_deviceControlDeviceIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.device_id.keyword"
			},
			{
				"displayName": "Device Control Disk Interface",
				"name": "op37_body_deviceControlDiskInterface",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.disk_interface"
			},
			{
				"displayName": "Device Control Disk Interface Keyword",
				"name": "op37_body_deviceControlDiskInterfaceKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.disk_interface.keyword"
			},
			{
				"displayName": "Device Control Drive Compressed",
				"name": "op37_body_deviceControlDriveCompressed",
				"type": "boolean",
				"default": false,
				"description": "Request body field: device_control.drive_compressed"
			},
			{
				"displayName": "Device Control File System",
				"name": "op37_body_deviceControlFileSystem",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.file_system"
			},
			{
				"displayName": "Device Control File System Keyword",
				"name": "op37_body_deviceControlFileSystemKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.file_system.keyword"
			},
			{
				"displayName": "Device Control Manufacturer",
				"name": "op37_body_deviceControlManufacturer",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.manufacturer"
			},
			{
				"displayName": "Device Control Manufacturer Keyword",
				"name": "op37_body_deviceControlManufacturerKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.manufacturer.keyword"
			},
			{
				"displayName": "Device Control Physical Disk Name",
				"name": "op37_body_deviceControlPhysicalDiskName",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.physical_disk_name"
			},
			{
				"displayName": "Device Control Physical Disk Name Keyword",
				"name": "op37_body_deviceControlPhysicalDiskNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.physical_disk_name.keyword"
			},
			{
				"displayName": "Device Control Pnp Device ID",
				"name": "op37_body_deviceControlPnpDeviceId",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.pnp_device_id"
			},
			{
				"displayName": "Device Control Pnp Device ID Keyword",
				"name": "op37_body_deviceControlPnpDeviceIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.pnp_device_id.keyword"
			},
			{
				"displayName": "Device Control Serial Number",
				"name": "op37_body_deviceControlSerialNumber",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.serial_number"
			},
			{
				"displayName": "Device Control Serial Number Keyword",
				"name": "op37_body_deviceControlSerialNumberKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.serial_number.keyword"
			},
			{
				"displayName": "Device Control Timestamp After",
				"name": "op37_body_deviceControlTimestampAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.timestamp_after"
			},
			{
				"displayName": "Device Control Timestamp Before",
				"name": "op37_body_deviceControlTimestampBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.timestamp_before"
			},
			{
				"displayName": "Device Control Volume Device Path",
				"name": "op37_body_deviceControlVolumeDevicePath",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.volume_device_path"
			},
			{
				"displayName": "Device Control Volume Device Path Keyword",
				"name": "op37_body_deviceControlVolumeDevicePathKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.volume_device_path.keyword"
			},
			{
				"displayName": "Device Control Volume Name",
				"name": "op37_body_deviceControlVolumeName",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.volume_name"
			},
			{
				"displayName": "Device Control Volume Name Keyword",
				"name": "op37_body_deviceControlVolumeNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.volume_name.keyword"
			},
			{
				"displayName": "Device Control Volume Serial",
				"name": "op37_body_deviceControlVolumeSerial",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.volume_serial"
			},
			{
				"displayName": "Device Control Volume Serial Keyword",
				"name": "op37_body_deviceControlVolumeSerialKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: device_control.volume_serial.keyword"
			},
			{
				"displayName": "Domain Name",
				"name": "op37_body_domainName",
				"type": "string",
				"default": "",
				"description": "Request body field: domain_name"
			},
			{
				"displayName": "Domain Name Keyword",
				"name": "op37_body_domainNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: domain_name.keyword"
			},
			{
				"displayName": "End Date",
				"name": "op37_body_endDate",
				"type": "string",
				"default": "",
				"description": "Request body field: end_date"
			},
			{
				"displayName": "Engine Version",
				"name": "op37_body_engineVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: engine_version"
			},
			{
				"displayName": "Engine Version Keyword",
				"name": "op37_body_engineVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: engine_version.keyword"
			},
			{
				"displayName": "Fully Qualified Host Name",
				"name": "op37_body_fullyQualifiedHostName",
				"type": "string",
				"default": "",
				"description": "Request body field: fully_qualified_host_name"
			},
			{
				"displayName": "Fully Qualified Host Name Keyword",
				"name": "op37_body_fullyQualifiedHostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: fully_qualified_host_name.keyword"
			},
			{
				"displayName": "Group ID",
				"name": "op37_body_groupId",
				"type": "string",
				"default": "",
				"description": "Request body field: group_id"
			},
			{
				"displayName": "Host Name",
				"name": "op37_body_hostName",
				"type": "string",
				"default": "",
				"description": "Request body field: host_name"
			},
			{
				"displayName": "Host Name Keyword",
				"name": "op37_body_hostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: host_name.keyword"
			},
			{
				"displayName": "Is Root Detection",
				"name": "op37_body_isRootDetection",
				"type": "boolean",
				"default": false,
				"description": "Request body field: is_root_detection"
			},
			{
				"displayName": "Is Rtp Stream Event",
				"name": "op37_body_isRtpStreamEvent",
				"type": "boolean",
				"default": false,
				"description": "Request body field: is_rtp_stream_event"
			},
			{
				"displayName": "Job ID",
				"name": "op37_body_jobId",
				"type": "string",
				"default": "",
				"description": "Request body field: job_id"
			},
			{
				"displayName": "Last User",
				"name": "op37_body_lastUser",
				"type": "string",
				"default": "",
				"description": "Request body field: last_user"
			},
			{
				"displayName": "Last User Keyword",
				"name": "op37_body_lastUserKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: last_user.keyword"
			},
			{
				"displayName": "Machine ID",
				"name": "op37_body_machineId",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_id"
			},
			{
				"displayName": "Machine Name",
				"name": "op37_body_machineName",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_name"
			},
			{
				"displayName": "Machine Name Keyword",
				"name": "op37_body_machineNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_name.keyword"
			},
			{
				"displayName": "Md5",
				"name": "op37_body_md5",
				"type": "string",
				"default": "",
				"description": "Request body field: md5"
			},
			{
				"displayName": "Next Cursor",
				"name": "op37_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Nics Description",
				"name": "op37_body_nicsDescription",
				"type": "string",
				"default": "",
				"description": "Request body field: nics.description"
			},
			{
				"displayName": "Nics Ips",
				"name": "op37_body_nicsIps",
				"type": "string",
				"default": "",
				"description": "Request body field: nics.ips"
			},
			{
				"displayName": "Nics Mac Address",
				"name": "op37_body_nicsMacAddress",
				"type": "string",
				"default": "",
				"description": "Request body field: nics.mac_address"
			},
			{
				"displayName": "Not Device Control Block Status",
				"name": "op37_body_notDeviceControlBlockStatus",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.block_status"
			},
			{
				"displayName": "Not Device Control Block Status Keyword",
				"name": "op37_body_notDeviceControlBlockStatusKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.block_status.keyword"
			},
			{
				"displayName": "Not Device Control Device ID",
				"name": "op37_body_notDeviceControlDeviceId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.device_id"
			},
			{
				"displayName": "Not Device Control Device ID Keyword",
				"name": "op37_body_notDeviceControlDeviceIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.device_id.keyword"
			},
			{
				"displayName": "Not Device Control Disk Interface",
				"name": "op37_body_notDeviceControlDiskInterface",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.disk_interface"
			},
			{
				"displayName": "Not Device Control Disk Interface Keyword",
				"name": "op37_body_notDeviceControlDiskInterfaceKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.disk_interface.keyword"
			},
			{
				"displayName": "Not Device Control File System",
				"name": "op37_body_notDeviceControlFileSystem",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.file_system"
			},
			{
				"displayName": "Not Device Control File System Keyword",
				"name": "op37_body_notDeviceControlFileSystemKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.file_system.keyword"
			},
			{
				"displayName": "Not Device Control Manufacturer",
				"name": "op37_body_notDeviceControlManufacturer",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.manufacturer"
			},
			{
				"displayName": "Not Device Control Manufacturer Keyword",
				"name": "op37_body_notDeviceControlManufacturerKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.manufacturer.keyword"
			},
			{
				"displayName": "Not Device Control Physical Disk Name",
				"name": "op37_body_notDeviceControlPhysicalDiskName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.physical_disk_name"
			},
			{
				"displayName": "Not Device Control Physical Disk Name Keyword",
				"name": "op37_body_notDeviceControlPhysicalDiskNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.physical_disk_name.keyword"
			},
			{
				"displayName": "Not Device Control Pnp Device ID",
				"name": "op37_body_notDeviceControlPnpDeviceId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.pnp_device_id"
			},
			{
				"displayName": "Not Device Control Pnp Device ID Keyword",
				"name": "op37_body_notDeviceControlPnpDeviceIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.pnp_device_id.keyword"
			},
			{
				"displayName": "Not Device Control Serial Number",
				"name": "op37_body_notDeviceControlSerialNumber",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.serial_number"
			},
			{
				"displayName": "Not Device Control Serial Number Keyword",
				"name": "op37_body_notDeviceControlSerialNumberKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.serial_number.keyword"
			},
			{
				"displayName": "Not Device Control Volume Device Path",
				"name": "op37_body_notDeviceControlVolumeDevicePath",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.volume_device_path"
			},
			{
				"displayName": "Not Device Control Volume Device Path Keyword",
				"name": "op37_body_notDeviceControlVolumeDevicePathKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.volume_device_path.keyword"
			},
			{
				"displayName": "Not Device Control Volume Name",
				"name": "op37_body_notDeviceControlVolumeName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.volume_name"
			},
			{
				"displayName": "Not Device Control Volume Name Keyword",
				"name": "op37_body_notDeviceControlVolumeNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.volume_name.keyword"
			},
			{
				"displayName": "Not Device Control Volume Serial",
				"name": "op37_body_notDeviceControlVolumeSerial",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.volume_serial"
			},
			{
				"displayName": "Not Device Control Volume Serial Keyword",
				"name": "op37_body_notDeviceControlVolumeSerialKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.device_control.volume_serial.keyword"
			},
			{
				"displayName": "Object Guid",
				"name": "op37_body_objectGuid",
				"type": "string",
				"default": "",
				"description": "Request body field: object_guid"
			},
			{
				"displayName": "OS Info OS Architecture",
				"name": "op37_body_osInfoOsArchitecture",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_architecture"
			},
			{
				"displayName": "OS Info OS Platform",
				"name": "op37_body_osInfoOsPlatform",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_platform"
			},
			{
				"displayName": "OS Info OS Release Name",
				"name": "op37_body_osInfoOsReleaseName",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_release_name"
			},
			{
				"displayName": "OS Info OS Type",
				"name": "op37_body_osInfoOsType",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_type"
			},
			{
				"displayName": "OS Info OS Version",
				"name": "op37_body_osInfoOsVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_version"
			},
			{
				"displayName": "Page Size",
				"name": "op37_body_pageSize",
				"type": "number",
				"default": 2000,
				"description": "Request body field: page_size"
			},
			{
				"displayName": "Parent Detection ID",
				"name": "op37_body_parentDetectionId",
				"type": "string",
				"default": "",
				"description": "Request body field: parent_detection_id"
			},
			{
				"displayName": "Path",
				"name": "op37_body_path",
				"type": "string",
				"default": "",
				"description": "Request body field: path"
			},
			{
				"displayName": "Path Keyword",
				"name": "op37_body_pathKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: path.keyword"
			},
			{
				"displayName": "Plugins Asset Manager Plugin Version",
				"name": "op37_body_pluginsAssetManagerPluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.asset_manager.plugin_version"
			},
			{
				"displayName": "Plugins Asset Manager Reboot Reason",
				"name": "op37_body_pluginsAssetManagerRebootReason",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.asset_manager.reboot_reason"
			},
			{
				"displayName": "Plugins Endpoint Detection Response Plugin Version",
				"name": "op37_body_pluginsEndpointDetectionResponsePluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_detection_response.plugin_version"
			},
			{
				"displayName": "Plugins Endpoint Detection Response Reboot Reason",
				"name": "op37_body_pluginsEndpointDetectionResponseRebootReason",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_detection_response.reboot_reason"
			},
			{
				"displayName": "Plugins Endpoint Protection Component Package Version",
				"name": "op37_body_pluginsEndpointProtectionComponentPackageVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.component_package_version"
			},
			{
				"displayName": "Plugins Endpoint Protection Plugin Version",
				"name": "op37_body_pluginsEndpointProtectionPluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.plugin_version"
			},
			{
				"displayName": "Plugins Endpoint Protection Reboot Reason",
				"name": "op37_body_pluginsEndpointProtectionRebootReason",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.reboot_reason"
			},
			{
				"displayName": "Plugins Endpoint Protection Sdk Version",
				"name": "op37_body_pluginsEndpointProtectionSdkVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.sdk_version"
			},
			{
				"displayName": "Plugins Endpoint Protection Update Package Version",
				"name": "op37_body_pluginsEndpointProtectionUpdatePackageVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.update_package_version"
			},
			{
				"displayName": "Plugins Incident Response Plugin Version",
				"name": "op37_body_pluginsIncidentResponsePluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.incident_response.plugin_version"
			},
			{
				"displayName": "Plugins Incident Response Reboot Reason",
				"name": "op37_body_pluginsIncidentResponseRebootReason",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.incident_response.reboot_reason"
			},
			{
				"displayName": "Plugins Siem Plugin Version",
				"name": "op37_body_pluginsSiemPluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.siem.plugin_version"
			},
			{
				"displayName": "Plugins Siem Reboot Reason",
				"name": "op37_body_pluginsSiemRebootReason",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.siem.reboot_reason"
			},
			{
				"displayName": "Populate Endpoint",
				"name": "op37_body_populateEndpoint",
				"type": "boolean",
				"default": false,
				"description": "Request body field: populate.endpoint"
			},
			{
				"displayName": "Populate Group",
				"name": "op37_body_populateGroup",
				"type": "boolean",
				"default": false,
				"description": "Request body field: populate.group"
			},
			{
				"displayName": "Populate Scan Result",
				"name": "op37_body_populateScanResult",
				"type": "boolean",
				"default": false,
				"description": "Request body field: populate.scan_result"
			},
			{
				"displayName": "Process Name",
				"name": "op37_body_processName",
				"type": "string",
				"default": "",
				"description": "Request body field: process_name"
			},
			{
				"displayName": "Process Name Keyword",
				"name": "op37_body_processNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: process_name.keyword"
			},
			{
				"displayName": "Protection Status",
				"name": "op37_body_protectionStatus",
				"type": "string",
				"default": "",
				"description": "Request body field: protection_status"
			},
			{
				"displayName": "Reported At After",
				"name": "op37_body_reportedAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: reported_at_after"
			},
			{
				"displayName": "Reported At Before",
				"name": "op37_body_reportedAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: reported_at_before"
			},
			{
				"displayName": "Scan ID",
				"name": "op37_body_scanId",
				"type": "string",
				"default": "",
				"description": "Request body field: scan_id"
			},
			{
				"displayName": "Scan Type",
				"name": "op37_body_scanType",
				"type": "string",
				"default": "",
				"description": "Request body field: scan_type"
			},
			{
				"displayName": "Scanned At After",
				"name": "op37_body_scannedAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: scanned_at_after"
			},
			{
				"displayName": "Scanned At Before",
				"name": "op37_body_scannedAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: scanned_at_before"
			},
			{
				"displayName": "Schedule Etag",
				"name": "op37_body_scheduleEtag",
				"type": "string",
				"default": "",
				"description": "Request body field: schedule_etag"
			},
			{
				"displayName": "Schedule ID",
				"name": "op37_body_scheduleId",
				"type": "string",
				"default": "",
				"description": "Request body field: schedule_id"
			},
			{
				"displayName": "Sha256",
				"name": "op37_body_sha256",
				"type": "string",
				"default": "",
				"description": "Request body field: sha256"
			},
			{
				"displayName": "Sort Field",
				"name": "op37_body_sortField",
				"type": "string",
				"default": "trace_id",
				"description": "Request body field: sort_field"
			},
			{
				"displayName": "Sort Order",
				"name": "op37_body_sortOrder",
				"type": "string",
				"default": "asc",
				"description": "Request body field: sort_order"
			},
			{
				"displayName": "Start Date",
				"name": "op37_body_startDate",
				"type": "string",
				"default": "",
				"description": "Request body field: start_date"
			},
			{
				"displayName": "Status",
				"name": "op37_body_status",
				"type": "string",
				"default": "",
				"description": "Request body field: status"
			},
			{
				"displayName": "Threat Name",
				"name": "op37_body_threatName",
				"type": "string",
				"default": "",
				"description": "Request body field: threat_name"
			},
			{
				"displayName": "Threat Name Keyword",
				"name": "op37_body_threatNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: threat_name.keyword"
			},
			{
				"displayName": "Trace ID",
				"name": "op37_body_traceId",
				"type": "string",
				"default": "",
				"description": "Request body field: trace_id"
			},
			{
				"displayName": "Type",
				"name": "op37_body_type",
				"type": "string",
				"default": "",
				"description": "Request body field: type"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op37_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"devicecontrol"
				],
				"operation": [
					"postDevicecontrol"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op38_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"devicecontrol"
				],
				"operation": [
					"postDevicecontrolExport"
				]
			}
		},
		"options": [
			{
				"displayName": "Download",
				"name": "op38_body_download",
				"type": "boolean",
				"default": false,
				"description": "Request body field: download"
			},
			{
				"displayName": "Format",
				"name": "op38_body_format",
				"type": "string",
				"default": "csv",
				"description": "Request body field: format"
			},
			{
				"displayName": "Type",
				"name": "op38_body_type",
				"type": "string",
				"default": "string",
				"description": "Request body field: type"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op38_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"devicecontrol"
				],
				"operation": [
					"postDevicecontrolExport"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op39_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"devicecontrol"
				],
				"operation": [
					"postDevicecontrolSearchGroupby"
				]
			}
		},
		"options": [
			{
				"displayName": "Group By",
				"name": "op39_body_groupBy",
				"type": "string",
				"default": "account_id",
				"description": "Request body field: group_by"
			},
			{
				"displayName": "Next Cursor",
				"name": "op39_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Page Size",
				"name": "op39_body_pageSize",
				"type": "number",
				"default": 2000,
				"description": "Request body field: page_size"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op39_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"devicecontrol"
				],
				"operation": [
					"postDevicecontrolSearchGroupby"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op40_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"devicecontrol"
				],
				"operation": [
					"getDevicecontrolById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op41_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"dns"
				],
				"operation": [
					"postDns"
				]
			}
		},
		"options": [
			{
				"displayName": "Account ID",
				"name": "op41_body_accountId",
				"type": "string",
				"default": "",
				"description": "Request body field: account_id"
			},
			{
				"displayName": "Account ID Keyword",
				"name": "op41_body_accountIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: account_id.keyword"
			},
			{
				"displayName": "Action",
				"name": "op41_body_action",
				"type": "string",
				"default": "",
				"description": "Request body field: action"
			},
			{
				"displayName": "Action Keyword",
				"name": "op41_body_actionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: action.keyword"
			},
			{
				"displayName": "Group ID",
				"name": "op41_body_groupId",
				"type": "string",
				"default": "",
				"description": "Request body field: group_id"
			},
			{
				"displayName": "Group ID Keyword",
				"name": "op41_body_groupIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: group_id.keyword"
			},
			{
				"displayName": "Group Name",
				"name": "op41_body_groupName",
				"type": "string",
				"default": "",
				"description": "Request body field: group_name"
			},
			{
				"displayName": "Group Name Keyword",
				"name": "op41_body_groupNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: group_name.keyword"
			},
			{
				"displayName": "ID",
				"name": "op41_body_id",
				"type": "string",
				"default": "",
				"description": "Request body field: id"
			},
			{
				"displayName": "Log Colo ID",
				"name": "op41_body_logColoId",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.colo_id"
			},
			{
				"displayName": "Log Colo ID Gt",
				"name": "op41_body_logColoIdGt",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.colo_id_gt"
			},
			{
				"displayName": "Log Colo ID Gte",
				"name": "op41_body_logColoIdGte",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.colo_id_gte"
			},
			{
				"displayName": "Log Colo ID Lt",
				"name": "op41_body_logColoIdLt",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.colo_id_lt"
			},
			{
				"displayName": "Log Colo ID Lte",
				"name": "op41_body_logColoIdLte",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.colo_id_lte"
			},
			{
				"displayName": "Log Datetime After",
				"name": "op41_body_logDatetimeAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: log.datetime_after"
			},
			{
				"displayName": "Log Datetime Before",
				"name": "op41_body_logDatetimeBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: log.datetime_before"
			},
			{
				"displayName": "Log Dst Ip",
				"name": "op41_body_logDstIp",
				"type": "string",
				"default": "",
				"description": "Request body field: log.dst_ip"
			},
			{
				"displayName": "Log Dst Port",
				"name": "op41_body_logDstPort",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.dst_port"
			},
			{
				"displayName": "Log Dst Port Gt",
				"name": "op41_body_logDstPortGt",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.dst_port_gt"
			},
			{
				"displayName": "Log Dst Port Gte",
				"name": "op41_body_logDstPortGte",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.dst_port_gte"
			},
			{
				"displayName": "Log Dst Port Lt",
				"name": "op41_body_logDstPortLt",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.dst_port_lt"
			},
			{
				"displayName": "Log Dst Port Lte",
				"name": "op41_body_logDstPortLte",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.dst_port_lte"
			},
			{
				"displayName": "Log Policy",
				"name": "op41_body_logPolicy",
				"type": "string",
				"default": "",
				"description": "Request body field: log.policy"
			},
			{
				"displayName": "Log Policy Keyword",
				"name": "op41_body_logPolicyKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: log.policy.keyword"
			},
			{
				"displayName": "Log Policy ID",
				"name": "op41_body_logPolicyId",
				"type": "string",
				"default": "",
				"description": "Request body field: log.policy_id"
			},
			{
				"displayName": "Log Policy ID Keyword",
				"name": "op41_body_logPolicyIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: log.policy_id.keyword"
			},
			{
				"displayName": "Log Protocol",
				"name": "op41_body_logProtocol",
				"type": "string",
				"default": "",
				"description": "Request body field: log.protocol"
			},
			{
				"displayName": "Log Protocol Keyword",
				"name": "op41_body_logProtocolKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: log.protocol.keyword"
			},
			{
				"displayName": "Log Query Name",
				"name": "op41_body_logQueryName",
				"type": "string",
				"default": "",
				"description": "Request body field: log.query_name"
			},
			{
				"displayName": "Log Query Name Keyword",
				"name": "op41_body_logQueryNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: log.query_name.keyword"
			},
			{
				"displayName": "Log Query Name Reversed",
				"name": "op41_body_logQueryNameReversed",
				"type": "string",
				"default": "",
				"description": "Request body field: log.query_name_reversed"
			},
			{
				"displayName": "Log Query Name Reversed Keyword",
				"name": "op41_body_logQueryNameReversedKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: log.query_name_reversed.keyword"
			},
			{
				"displayName": "Log Query Size",
				"name": "op41_body_logQuerySize",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.query_size"
			},
			{
				"displayName": "Log Query Size Gt",
				"name": "op41_body_logQuerySizeGt",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.query_size_gt"
			},
			{
				"displayName": "Log Query Size Gte",
				"name": "op41_body_logQuerySizeGte",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.query_size_gte"
			},
			{
				"displayName": "Log Query Size Lt",
				"name": "op41_body_logQuerySizeLt",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.query_size_lt"
			},
			{
				"displayName": "Log Query Size Lte",
				"name": "op41_body_logQuerySizeLte",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.query_size_lte"
			},
			{
				"displayName": "Log Query Type",
				"name": "op41_body_logQueryType",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.query_type"
			},
			{
				"displayName": "Log Query Type Gt",
				"name": "op41_body_logQueryTypeGt",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.query_type_gt"
			},
			{
				"displayName": "Log Query Type Gte",
				"name": "op41_body_logQueryTypeGte",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.query_type_gte"
			},
			{
				"displayName": "Log Query Type Lt",
				"name": "op41_body_logQueryTypeLt",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.query_type_lt"
			},
			{
				"displayName": "Log Query Type Lte",
				"name": "op41_body_logQueryTypeLte",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.query_type_lte"
			},
			{
				"displayName": "Log Resolver Decision",
				"name": "op41_body_logResolverDecision",
				"type": "string",
				"default": "",
				"description": "Request body field: log.resolver_decision"
			},
			{
				"displayName": "Log Resolver Decision Keyword",
				"name": "op41_body_logResolverDecisionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: log.resolver_decision.keyword"
			},
			{
				"displayName": "Log Src Ip",
				"name": "op41_body_logSrcIp",
				"type": "string",
				"default": "",
				"description": "Request body field: log.src_ip"
			},
			{
				"displayName": "Log Src Port",
				"name": "op41_body_logSrcPort",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.src_port"
			},
			{
				"displayName": "Log Src Port Gt",
				"name": "op41_body_logSrcPortGt",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.src_port_gt"
			},
			{
				"displayName": "Log Src Port Gte",
				"name": "op41_body_logSrcPortGte",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.src_port_gte"
			},
			{
				"displayName": "Log Src Port Lt",
				"name": "op41_body_logSrcPortLt",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.src_port_lt"
			},
			{
				"displayName": "Log Src Port Lte",
				"name": "op41_body_logSrcPortLte",
				"type": "number",
				"default": 0,
				"description": "Request body field: log.src_port_lte"
			},
			{
				"displayName": "Log User ID",
				"name": "op41_body_logUserId",
				"type": "string",
				"default": "",
				"description": "Request body field: log.user_id"
			},
			{
				"displayName": "Log User ID Keyword",
				"name": "op41_body_logUserIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: log.user_id.keyword"
			},
			{
				"displayName": "Machine ID",
				"name": "op41_body_machineId",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_id"
			},
			{
				"displayName": "Machine ID Keyword",
				"name": "op41_body_machineIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_id.keyword"
			},
			{
				"displayName": "Next Cursor",
				"name": "op41_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Not Account ID",
				"name": "op41_body_notAccountId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.account_id"
			},
			{
				"displayName": "Not Account ID Keyword",
				"name": "op41_body_notAccountIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.account_id.keyword"
			},
			{
				"displayName": "Not Action",
				"name": "op41_body_notAction",
				"type": "string",
				"default": "",
				"description": "Request body field: not.action"
			},
			{
				"displayName": "Not Action Keyword",
				"name": "op41_body_notActionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.action.keyword"
			},
			{
				"displayName": "Not Group ID",
				"name": "op41_body_notGroupId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.group_id"
			},
			{
				"displayName": "Not Group ID Keyword",
				"name": "op41_body_notGroupIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.group_id.keyword"
			},
			{
				"displayName": "Not Group Name",
				"name": "op41_body_notGroupName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.group_name"
			},
			{
				"displayName": "Not Group Name Keyword",
				"name": "op41_body_notGroupNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.group_name.keyword"
			},
			{
				"displayName": "Not ID",
				"name": "op41_body_notId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.id"
			},
			{
				"displayName": "Not Log Dst Ip",
				"name": "op41_body_notLogDstIp",
				"type": "string",
				"default": "",
				"description": "Request body field: not.log.dst_ip"
			},
			{
				"displayName": "Not Log Policy",
				"name": "op41_body_notLogPolicy",
				"type": "string",
				"default": "",
				"description": "Request body field: not.log.policy"
			},
			{
				"displayName": "Not Log Policy Keyword",
				"name": "op41_body_notLogPolicyKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.log.policy.keyword"
			},
			{
				"displayName": "Not Log Policy ID",
				"name": "op41_body_notLogPolicyId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.log.policy_id"
			},
			{
				"displayName": "Not Log Policy ID Keyword",
				"name": "op41_body_notLogPolicyIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.log.policy_id.keyword"
			},
			{
				"displayName": "Not Log Protocol",
				"name": "op41_body_notLogProtocol",
				"type": "string",
				"default": "",
				"description": "Request body field: not.log.protocol"
			},
			{
				"displayName": "Not Log Protocol Keyword",
				"name": "op41_body_notLogProtocolKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.log.protocol.keyword"
			},
			{
				"displayName": "Not Log Query Name",
				"name": "op41_body_notLogQueryName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.log.query_name"
			},
			{
				"displayName": "Not Log Query Name Keyword",
				"name": "op41_body_notLogQueryNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.log.query_name.keyword"
			},
			{
				"displayName": "Not Log Query Name Reversed",
				"name": "op41_body_notLogQueryNameReversed",
				"type": "string",
				"default": "",
				"description": "Request body field: not.log.query_name_reversed"
			},
			{
				"displayName": "Not Log Query Name Reversed Keyword",
				"name": "op41_body_notLogQueryNameReversedKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.log.query_name_reversed.keyword"
			},
			{
				"displayName": "Not Log Resolver Decision",
				"name": "op41_body_notLogResolverDecision",
				"type": "string",
				"default": "",
				"description": "Request body field: not.log.resolver_decision"
			},
			{
				"displayName": "Not Log Resolver Decision Keyword",
				"name": "op41_body_notLogResolverDecisionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.log.resolver_decision.keyword"
			},
			{
				"displayName": "Not Log Src Ip",
				"name": "op41_body_notLogSrcIp",
				"type": "string",
				"default": "",
				"description": "Request body field: not.log.src_ip"
			},
			{
				"displayName": "Not Log User ID",
				"name": "op41_body_notLogUserId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.log.user_id"
			},
			{
				"displayName": "Not Log User ID Keyword",
				"name": "op41_body_notLogUserIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.log.user_id.keyword"
			},
			{
				"displayName": "Not Machine ID",
				"name": "op41_body_notMachineId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.machine_id"
			},
			{
				"displayName": "Not Machine ID Keyword",
				"name": "op41_body_notMachineIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.machine_id.keyword"
			},
			{
				"displayName": "Not Parent Account ID",
				"name": "op41_body_notParentAccountId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.parent_account_id"
			},
			{
				"displayName": "Not Parent Account ID Keyword",
				"name": "op41_body_notParentAccountIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.parent_account_id.keyword"
			},
			{
				"displayName": "Not Policy ID",
				"name": "op41_body_notPolicyId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.policy_id"
			},
			{
				"displayName": "Not Policy ID Keyword",
				"name": "op41_body_notPolicyIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.policy_id.keyword"
			},
			{
				"displayName": "Not Policy Name",
				"name": "op41_body_notPolicyName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.policy_name"
			},
			{
				"displayName": "Not Policy Name Keyword",
				"name": "op41_body_notPolicyNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.policy_name.keyword"
			},
			{
				"displayName": "Not Resolved Ips",
				"name": "op41_body_notResolvedIps",
				"type": "string",
				"default": "",
				"description": "Request body field: not.resolved_ips"
			},
			{
				"displayName": "Not Rule ID",
				"name": "op41_body_notRuleId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.rule_id"
			},
			{
				"displayName": "Not Rule ID Keyword",
				"name": "op41_body_notRuleIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.rule_id.keyword"
			},
			{
				"displayName": "Not Rule Name",
				"name": "op41_body_notRuleName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.rule_name"
			},
			{
				"displayName": "Not Rule Name Keyword",
				"name": "op41_body_notRuleNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.rule_name.keyword"
			},
			{
				"displayName": "Page Size",
				"name": "op41_body_pageSize",
				"type": "number",
				"default": 50,
				"description": "Request body field: page_size"
			},
			{
				"displayName": "Parent Account ID",
				"name": "op41_body_parentAccountId",
				"type": "string",
				"default": "",
				"description": "Request body field: parent_account_id"
			},
			{
				"displayName": "Parent Account ID Keyword",
				"name": "op41_body_parentAccountIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: parent_account_id.keyword"
			},
			{
				"displayName": "Policy ID",
				"name": "op41_body_policyId",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_id"
			},
			{
				"displayName": "Policy ID Keyword",
				"name": "op41_body_policyIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_id.keyword"
			},
			{
				"displayName": "Policy Name",
				"name": "op41_body_policyName",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_name"
			},
			{
				"displayName": "Policy Name Keyword",
				"name": "op41_body_policyNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_name.keyword"
			},
			{
				"displayName": "Populate Endpoint",
				"name": "op41_body_populateEndpoint",
				"type": "boolean",
				"default": false,
				"description": "Request body field: populate.endpoint"
			},
			{
				"displayName": "Populate Group",
				"name": "op41_body_populateGroup",
				"type": "boolean",
				"default": false,
				"description": "Request body field: populate.group"
			},
			{
				"displayName": "Resolved Ips",
				"name": "op41_body_resolvedIps",
				"type": "string",
				"default": "",
				"description": "Request body field: resolved_ips"
			},
			{
				"displayName": "Rule ID",
				"name": "op41_body_ruleId",
				"type": "string",
				"default": "",
				"description": "Request body field: rule_id"
			},
			{
				"displayName": "Rule ID Keyword",
				"name": "op41_body_ruleIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: rule_id.keyword"
			},
			{
				"displayName": "Rule Name",
				"name": "op41_body_ruleName",
				"type": "string",
				"default": "",
				"description": "Request body field: rule_name"
			},
			{
				"displayName": "Rule Name Keyword",
				"name": "op41_body_ruleNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: rule_name.keyword"
			},
			{
				"displayName": "Sort Field",
				"name": "op41_body_sortField",
				"type": "string",
				"default": "machine_id",
				"description": "Request body field: sort_field"
			},
			{
				"displayName": "Sort Order",
				"name": "op41_body_sortOrder",
				"type": "string",
				"default": "asc",
				"description": "Request body field: sort_order"
			},
			{
				"displayName": "Timestamp After",
				"name": "op41_body_timestampAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: timestamp_after"
			},
			{
				"displayName": "Timestamp Before",
				"name": "op41_body_timestampBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: timestamp_before"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op41_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"dns"
				],
				"operation": [
					"postDns"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op42_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"dns"
				],
				"operation": [
					"postDnsExport"
				]
			}
		},
		"options": [
			{
				"displayName": "Download",
				"name": "op42_body_download",
				"type": "boolean",
				"default": false,
				"description": "Request body field: download"
			},
			{
				"displayName": "Format",
				"name": "op42_body_format",
				"type": "string",
				"default": "csv",
				"description": "Request body field: format"
			},
			{
				"displayName": "Type",
				"name": "op42_body_type",
				"type": "string",
				"default": "string",
				"description": "Request body field: type"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op42_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"dns"
				],
				"operation": [
					"postDnsExport"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op43_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"dns"
				],
				"operation": [
					"postDnsSearchGroupby"
				]
			}
		},
		"options": [
			{
				"displayName": "Group By",
				"name": "op43_body_groupBy",
				"type": "string",
				"default": "rule_id",
				"description": "Request body field: group_by"
			},
			{
				"displayName": "Next Cursor",
				"name": "op43_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Page Size",
				"name": "op43_body_pageSize",
				"type": "number",
				"default": 2000,
				"description": "Request body field: page_size"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op43_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"dns"
				],
				"operation": [
					"postDnsSearchGroupby"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "JSON Body",
		"name": "op44_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"deleteEndpoints"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "Body Fields",
		"name": "op45_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"postEndpoints"
				]
			}
		},
		"options": [
			{
				"displayName": "Aggregate By Account",
				"name": "op45_body_aggregateByAccount",
				"type": "boolean",
				"default": false,
				"description": "Request body field: aggregate_by_account"
			},
			{
				"displayName": "Alerts Codes",
				"name": "op45_body_alertsCodes",
				"type": "string",
				"default": "",
				"description": "Request body field: alerts.codes"
			},
			{
				"displayName": "Alias",
				"name": "op45_body_alias",
				"type": "string",
				"default": "",
				"description": "Request body field: alias"
			},
			{
				"displayName": "App Block Count After",
				"name": "op45_body_appBlockCountAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: app_block_count_after"
			},
			{
				"displayName": "At After",
				"name": "op45_body_atAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: at_after"
			},
			{
				"displayName": "At Before",
				"name": "op45_body_atBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: at_before"
			},
			{
				"displayName": "Created At After",
				"name": "op45_body_createdAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: created_at_after"
			},
			{
				"displayName": "Created At Before",
				"name": "op45_body_createdAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: created_at_before"
			},
			{
				"displayName": "Deleted At After",
				"name": "op45_body_deletedAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: deleted_at_after"
			},
			{
				"displayName": "Deleted At Before",
				"name": "op45_body_deletedAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: deleted_at_before"
			},
			{
				"displayName": "Domain Name",
				"name": "op45_body_domainName",
				"type": "string",
				"default": "",
				"description": "Request body field: domain_name"
			},
			{
				"displayName": "Domain Name Keyword",
				"name": "op45_body_domainNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: domain_name.keyword"
			},
			{
				"displayName": "Engine Version",
				"name": "op45_body_engineVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: engine_version"
			},
			{
				"displayName": "Engine Version Keyword",
				"name": "op45_body_engineVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: engine_version.keyword"
			},
			{
				"displayName": "Engine Version Gt",
				"name": "op45_body_engineVersionGt",
				"type": "string",
				"default": "",
				"description": "Request body field: engine_version_gt"
			},
			{
				"displayName": "Engine Version Gte",
				"name": "op45_body_engineVersionGte",
				"type": "string",
				"default": "",
				"description": "Request body field: engine_version_gte"
			},
			{
				"displayName": "Engine Version Lt",
				"name": "op45_body_engineVersionLt",
				"type": "string",
				"default": "",
				"description": "Request body field: engine_version_lt"
			},
			{
				"displayName": "Engine Version Lte",
				"name": "op45_body_engineVersionLte",
				"type": "string",
				"default": "",
				"description": "Request body field: engine_version_lte"
			},
			{
				"displayName": "Fully Qualified Host Name",
				"name": "op45_body_fullyQualifiedHostName",
				"type": "string",
				"default": "",
				"description": "Request body field: fully_qualified_host_name"
			},
			{
				"displayName": "Fully Qualified Host Name Keyword",
				"name": "op45_body_fullyQualifiedHostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: fully_qualified_host_name.keyword"
			},
			{
				"displayName": "Group ID",
				"name": "op45_body_groupId",
				"type": "string",
				"default": "",
				"description": "Request body field: group_id"
			},
			{
				"displayName": "Group Name",
				"name": "op45_body_groupName",
				"type": "string",
				"default": "",
				"description": "Request body field: group_name"
			},
			{
				"displayName": "Group Name Keyword",
				"name": "op45_body_groupNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: group_name.keyword"
			},
			{
				"displayName": "Has Alerts",
				"name": "op45_body_hasAlerts",
				"type": "boolean",
				"default": false,
				"description": "Request body field: has_alerts"
			},
			{
				"displayName": "Host Name",
				"name": "op45_body_hostName",
				"type": "string",
				"default": "",
				"description": "Request body field: host_name"
			},
			{
				"displayName": "Host Name Keyword",
				"name": "op45_body_hostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: host_name.keyword"
			},
			{
				"displayName": "Infection Found",
				"name": "op45_body_infectionFound",
				"type": "boolean",
				"default": false,
				"description": "Request body field: infection_found"
			},
			{
				"displayName": "Is Deleted",
				"name": "op45_body_isDeleted",
				"type": "boolean",
				"default": false,
				"description": "Request body field: is_deleted"
			},
			{
				"displayName": "Is Isolated",
				"name": "op45_body_isIsolated",
				"type": "boolean",
				"default": false,
				"description": "Request body field: is_isolated"
			},
			{
				"displayName": "Is Software Update Available",
				"name": "op45_body_isSoftwareUpdateAvailable",
				"type": "boolean",
				"default": false,
				"description": "Request body field: is_software_update_available"
			},
			{
				"displayName": "Last Assets Scan At After",
				"name": "op45_body_lastAssetsScanAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: last_assets_scan_at_after"
			},
			{
				"displayName": "Last Assets Scan At Before",
				"name": "op45_body_lastAssetsScanAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: last_assets_scan_at_before"
			},
			{
				"displayName": "Last Day Seen After",
				"name": "op45_body_lastDaySeenAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: last_day_seen_after"
			},
			{
				"displayName": "Last Day Seen Before",
				"name": "op45_body_lastDaySeenBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: last_day_seen_before"
			},
			{
				"displayName": "Last Scan After",
				"name": "op45_body_lastScanAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: last_scan_after"
			},
			{
				"displayName": "Last Scan Before",
				"name": "op45_body_lastScanBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: last_scan_before"
			},
			{
				"displayName": "Last User",
				"name": "op45_body_lastUser",
				"type": "string",
				"default": "",
				"description": "Request body field: last_user"
			},
			{
				"displayName": "Last User Keyword",
				"name": "op45_body_lastUserKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: last_user.keyword"
			},
			{
				"displayName": "Machine ID",
				"name": "op45_body_machineId",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_id"
			},
			{
				"displayName": "Machine Ip",
				"name": "op45_body_machineIp",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_ip"
			},
			{
				"displayName": "Marked For Deletion After",
				"name": "op45_body_markedForDeletionAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: marked_for_deletion_after"
			},
			{
				"displayName": "Marked For Deletion Before",
				"name": "op45_body_markedForDeletionBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: marked_for_deletion_before"
			},
			{
				"displayName": "Name Multi Search",
				"name": "op45_body_nameMultiSearch",
				"type": "string",
				"default": "",
				"description": "Request body field: name_multi_search"
			},
			{
				"displayName": "Next Cursor",
				"name": "op45_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Nics Description",
				"name": "op45_body_nicsDescription",
				"type": "string",
				"default": "",
				"description": "Request body field: nics.description"
			},
			{
				"displayName": "Nics Ips",
				"name": "op45_body_nicsIps",
				"type": "string",
				"default": "",
				"description": "Request body field: nics.ips"
			},
			{
				"displayName": "Nics Mac Address",
				"name": "op45_body_nicsMacAddress",
				"type": "string",
				"default": "",
				"description": "Request body field: nics.mac_address"
			},
			{
				"displayName": "Object Guid",
				"name": "op45_body_objectGuid",
				"type": "string",
				"default": "",
				"description": "Request body field: object_guid"
			},
			{
				"displayName": "OS Info OS Architecture",
				"name": "op45_body_osInfoOsArchitecture",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_architecture"
			},
			{
				"displayName": "OS Info OS Platform",
				"name": "op45_body_osInfoOsPlatform",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_platform"
			},
			{
				"displayName": "OS Info OS Release Name",
				"name": "op45_body_osInfoOsReleaseName",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_release_name"
			},
			{
				"displayName": "OS Info OS Release Name Keyword",
				"name": "op45_body_osInfoOsReleaseNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_release_name.keyword"
			},
			{
				"displayName": "OS Info OS Type",
				"name": "op45_body_osInfoOsType",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_type"
			},
			{
				"displayName": "OS Info OS Version",
				"name": "op45_body_osInfoOsVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_version"
			},
			{
				"displayName": "Page Size",
				"name": "op45_body_pageSize",
				"type": "number",
				"default": 2000,
				"description": "Request body field: page_size"
			},
			{
				"displayName": "Plugins Asset Manager Alerts Codes",
				"name": "op45_body_pluginsAssetManagerAlertsCodes",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.asset_manager.alerts.codes"
			},
			{
				"displayName": "Plugins Asset Manager Plugin Version",
				"name": "op45_body_pluginsAssetManagerPluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.asset_manager.plugin_version"
			},
			{
				"displayName": "Plugins Asset Manager Reboot Reason",
				"name": "op45_body_pluginsAssetManagerRebootReason",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.asset_manager.reboot_reason"
			},
			{
				"displayName": "Plugins Endpoint Detection And Response Alerts Codes",
				"name": "op45_body_pluginsEndpointDetectionAndResponseAlertsCodes",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_detection_and_response.alerts.codes"
			},
			{
				"displayName": "Plugins Endpoint Detection And Response Plugin Version",
				"name": "op45_body_pluginsEndpointDetectionAndResponsePluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_detection_and_response.plugin_version"
			},
			{
				"displayName": "Plugins Endpoint Detection And Response Reboot Reason",
				"name": "op45_body_pluginsEndpointDetectionAndResponseRebootReason",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_detection_and_response.reboot_reason"
			},
			{
				"displayName": "Plugins Endpoint Protection Alerts Codes",
				"name": "op45_body_pluginsEndpointProtectionAlertsCodes",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.alerts.codes"
			},
			{
				"displayName": "Plugins Endpoint Protection Component Package Version",
				"name": "op45_body_pluginsEndpointProtectionComponentPackageVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.component_package_version"
			},
			{
				"displayName": "Plugins Endpoint Protection Plugin Version",
				"name": "op45_body_pluginsEndpointProtectionPluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.plugin_version"
			},
			{
				"displayName": "Plugins Endpoint Protection Reboot Reason",
				"name": "op45_body_pluginsEndpointProtectionRebootReason",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.reboot_reason"
			},
			{
				"displayName": "Plugins Endpoint Protection Sdk Version",
				"name": "op45_body_pluginsEndpointProtectionSdkVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.sdk_version"
			},
			{
				"displayName": "Plugins Endpoint Protection Update Package Version",
				"name": "op45_body_pluginsEndpointProtectionUpdatePackageVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.update_package_version"
			},
			{
				"displayName": "Plugins Endpoint Protection Update Package Version Keyword",
				"name": "op45_body_pluginsEndpointProtectionUpdatePackageVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.update_package_version.keyword"
			},
			{
				"displayName": "Plugins Incident Response Alerts Codes",
				"name": "op45_body_pluginsIncidentResponseAlertsCodes",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.incident_response.alerts.codes"
			},
			{
				"displayName": "Plugins Incident Response Plugin Version",
				"name": "op45_body_pluginsIncidentResponsePluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.incident_response.plugin_version"
			},
			{
				"displayName": "Plugins Incident Response Reboot Reason",
				"name": "op45_body_pluginsIncidentResponseRebootReason",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.incident_response.reboot_reason"
			},
			{
				"displayName": "Plugins Siem Alerts Codes",
				"name": "op45_body_pluginsSiemAlertsCodes",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.siem.alerts.codes"
			},
			{
				"displayName": "Plugins Siem Plugin Version",
				"name": "op45_body_pluginsSiemPluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.siem.plugin_version"
			},
			{
				"displayName": "Plugins Siem Reboot Reason",
				"name": "op45_body_pluginsSiemRebootReason",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.siem.reboot_reason"
			},
			{
				"displayName": "Policy Etag",
				"name": "op45_body_policyEtag",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_etag"
			},
			{
				"displayName": "Policy ID",
				"name": "op45_body_policyId",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_id"
			},
			{
				"displayName": "Policy Name",
				"name": "op45_body_policyName",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_name"
			},
			{
				"displayName": "Policy Name Keyword",
				"name": "op45_body_policyNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_name.keyword"
			},
			{
				"displayName": "Populate Account",
				"name": "op45_body_populateAccount",
				"type": "boolean",
				"default": false,
				"description": "Request body field: populate.account"
			},
			{
				"displayName": "Populate App Block",
				"name": "op45_body_populateAppBlock",
				"type": "boolean",
				"default": false,
				"description": "Request body field: populate.app_block"
			},
			{
				"displayName": "Populate Default Group",
				"name": "op45_body_populateDefaultGroup",
				"type": "boolean",
				"default": false,
				"description": "Request body field: populate.default_group"
			},
			{
				"displayName": "Populate Last Job",
				"name": "op45_body_populateLastJob",
				"type": "boolean",
				"default": false,
				"description": "Request body field: populate.last_job"
			},
			{
				"displayName": "Populate Platform",
				"name": "op45_body_populatePlatform",
				"type": "boolean",
				"default": false,
				"description": "Request body field: populate.platform"
			},
			{
				"displayName": "Protection Status",
				"name": "op45_body_protectionStatus",
				"type": "string",
				"default": "",
				"description": "Request body field: protection_status"
			},
			{
				"displayName": "Reboot Required",
				"name": "op45_body_rebootRequired",
				"type": "boolean",
				"default": false,
				"description": "Request body field: reboot_required"
			},
			{
				"displayName": "Serial Number",
				"name": "op45_body_serialNumber",
				"type": "string",
				"default": "",
				"description": "Request body field: serial_number"
			},
			{
				"displayName": "Serial Number Keyword",
				"name": "op45_body_serialNumberKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: serial_number.keyword"
			},
			{
				"displayName": "Sort Field",
				"name": "op45_body_sortField",
				"type": "string",
				"default": "at",
				"description": "Request body field: sort_field"
			},
			{
				"displayName": "Sort Order",
				"name": "op45_body_sortOrder",
				"type": "string",
				"default": "asc",
				"description": "Request body field: sort_order"
			},
			{
				"displayName": "Source Location City",
				"name": "op45_body_sourceLocationCity",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.city"
			},
			{
				"displayName": "Source Location Continent",
				"name": "op45_body_sourceLocationContinent",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.continent"
			},
			{
				"displayName": "Source Location Country",
				"name": "op45_body_sourceLocationCountry",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.country"
			},
			{
				"displayName": "Source Location Country Iso",
				"name": "op45_body_sourceLocationCountryIso",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.country_iso"
			},
			{
				"displayName": "Source Location Is Anonymous Proxy",
				"name": "op45_body_sourceLocationIsAnonymousProxy",
				"type": "boolean",
				"default": false,
				"description": "Request body field: source_location.is_anonymous_proxy"
			},
			{
				"displayName": "Source Location Postal Code",
				"name": "op45_body_sourceLocationPostalCode",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.postal_code"
			},
			{
				"displayName": "Source Location Subdivisions",
				"name": "op45_body_sourceLocationSubdivisions",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.subdivisions"
			},
			{
				"displayName": "Source Location Time Zone",
				"name": "op45_body_sourceLocationTimeZone",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.time_zone"
			},
			{
				"displayName": "Suspicious Activity Found",
				"name": "op45_body_suspiciousActivityFound",
				"type": "boolean",
				"default": false,
				"description": "Request body field: suspicious_activity_found"
			},
			{
				"displayName": "Vulnerabilities Found Total Gt",
				"name": "op45_body_vulnerabilitiesFoundTotalGt",
				"type": "number",
				"default": 0,
				"description": "Request body field: vulnerabilities_found_total_gt"
			},
			{
				"displayName": "Vulnerabilities Found Total Gte",
				"name": "op45_body_vulnerabilitiesFoundTotalGte",
				"type": "number",
				"default": 0,
				"description": "Request body field: vulnerabilities_found_total_gte"
			},
			{
				"displayName": "Vulnerabilities Found Total Lt",
				"name": "op45_body_vulnerabilitiesFoundTotalLt",
				"type": "number",
				"default": 0,
				"description": "Request body field: vulnerabilities_found_total_lt"
			},
			{
				"displayName": "Vulnerabilities Found Total Lte",
				"name": "op45_body_vulnerabilitiesFoundTotalLte",
				"type": "number",
				"default": 0,
				"description": "Request body field: vulnerabilities_found_total_lte"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op45_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"postEndpoints"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op46_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"postEndpointsExport"
				]
			}
		},
		"options": [
			{
				"displayName": "Download",
				"name": "op46_body_download",
				"type": "boolean",
				"default": false,
				"description": "Request body field: download"
			},
			{
				"displayName": "Format",
				"name": "op46_body_format",
				"type": "string",
				"default": "csv",
				"description": "Request body field: format"
			},
			{
				"displayName": "Type",
				"name": "op46_body_type",
				"type": "string",
				"default": "string",
				"description": "Request body field: type"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op46_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"postEndpointsExport"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op47_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"postEndpointsSearchGroupby"
				]
			}
		},
		"options": [
			{
				"displayName": "Group By",
				"name": "op47_body_groupBy",
				"type": "string",
				"default": "os_info.os_platform",
				"description": "Request body field: group_by"
			},
			{
				"displayName": "Page Size",
				"name": "op47_body_pageSize",
				"type": "number",
				"default": 2000,
				"description": "Request body field: page_size"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op47_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"postEndpointsSearchGroupby"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op48_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"deleteEndpointsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op48_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"deleteEndpointsById"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op49_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op50_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdAgentInfo"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op51_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdAssets"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op52_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdNetwork"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op53_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdQuarantine"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Next Cursor",
		"name": "op53_query_nextCursor",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdQuarantine"
				]
			}
		},
		"description": "Query parameter: Next Cursor"
	},
	{
		"displayName": "Name",
		"name": "op53_query_name",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdQuarantine"
				]
			}
		},
		"description": "Query parameter: Name"
	},
	{
		"displayName": "Category",
		"name": "op53_query_category",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdQuarantine"
				]
			}
		},
		"description": "Query parameter: Category"
	},
	{
		"displayName": "Type",
		"name": "op53_query_type",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdQuarantine"
				]
			}
		},
		"description": "Query parameter: Type"
	},
	{
		"displayName": "Since",
		"name": "op53_query_since",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdQuarantine"
				]
			}
		},
		"description": "Query parameter: Since"
	},
	{
		"displayName": "Until",
		"name": "op53_query_until",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdQuarantine"
				]
			}
		},
		"description": "Query parameter: Until"
	},
	{
		"displayName": "ID",
		"name": "op54_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdSa"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Sort Field",
		"name": "op54_query_sortField",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdSa"
				]
			}
		},
		"description": "Query parameter: Sort Field"
	},
	{
		"displayName": "Sort Direction",
		"name": "op54_query_sortDirection",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdSa"
				]
			}
		},
		"description": "Query parameter: Sort Direction"
	},
	{
		"displayName": "Next Cursor",
		"name": "op54_query_nextCursor",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdSa"
				]
			}
		},
		"description": "Query parameter: Next Cursor"
	},
	{
		"displayName": "Since",
		"name": "op54_query_since",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdSa"
				]
			}
		},
		"description": "Query parameter: Since"
	},
	{
		"displayName": "Per Page",
		"name": "op54_query_perPage",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdSa"
				]
			}
		},
		"description": "Query parameter: Per Page"
	},
	{
		"displayName": "ID",
		"name": "op55_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"putEndpointsByIdSaBySaIdClose"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "SA ID",
		"name": "op55_path_saId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"putEndpointsByIdSaBySaIdClose"
				]
			}
		},
		"description": "Path parameter: SA ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op55_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"putEndpointsByIdSaBySaIdClose"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op56_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdSaBySaIdExclusions"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "SA ID",
		"name": "op56_path_saId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdSaBySaIdExclusions"
				]
			}
		},
		"description": "Path parameter: SA ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op57_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"putEndpointsByIdSaBySaIdOpen"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "SA ID",
		"name": "op57_path_saId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"putEndpointsByIdSaBySaIdOpen"
				]
			}
		},
		"description": "Path parameter: SA ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op57_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"putEndpointsByIdSaBySaIdOpen"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op58_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"postEndpointsByIdSaBySaIdRemediate"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "SA ID",
		"name": "op58_path_saId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"postEndpointsByIdSaBySaIdRemediate"
				]
			}
		},
		"description": "Path parameter: SA ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op58_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"postEndpointsByIdSaBySaIdRemediate"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op59_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdScans"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Since",
		"name": "op59_query_since",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdScans"
				]
			}
		},
		"description": "Query parameter: Since"
	},
	{
		"displayName": "Threats Detected",
		"name": "op59_query_threatsDetected",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdScans"
				]
			}
		},
		"description": "Query parameter: Threats Detected"
	},
	{
		"displayName": "Start Index",
		"name": "op59_query_startIndex",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdScans"
				]
			}
		},
		"description": "Query parameter: Start Index"
	},
	{
		"displayName": "Page Size",
		"name": "op59_query_pageSize",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdScans"
				]
			}
		},
		"description": "Query parameter: Page Size"
	},
	{
		"displayName": "Populate",
		"name": "op59_query_populate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdScans"
				]
			}
		},
		"description": "Query parameter: Populate"
	},
	{
		"displayName": "ID",
		"name": "op60_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdScansByScanId"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Scan ID",
		"name": "op60_path_scanId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdScansByScanId"
				]
			}
		},
		"description": "Path parameter: Scan ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op61_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdScansByScanIdDetections"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Scan ID",
		"name": "op61_path_scanId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdScansByScanIdDetections"
				]
			}
		},
		"description": "Path parameter: Scan ID",
		"required": true
	},
	{
		"displayName": "Next Cursor",
		"name": "op61_query_nextCursor",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdScansByScanIdDetections"
				]
			}
		},
		"description": "Query parameter: Next Cursor"
	},
	{
		"displayName": "Since",
		"name": "op61_query_since",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdScansByScanIdDetections"
				]
			}
		},
		"description": "Query parameter: Since"
	},
	{
		"displayName": "ID",
		"name": "op62_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"getEndpointsByIdStatus"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op63_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"putEndpointsByIdTags"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op63_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"putEndpointsByIdTags"
				]
			}
		},
		"options": [
			{
				"displayName": "Alias",
				"name": "op63_body_alias",
				"type": "string",
				"default": "",
				"description": "Request body field: alias"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op63_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"endpoints"
				],
				"operation": [
					"putEndpointsByIdTags"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Next Cursor",
		"name": "op64_query_nextCursor",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"events"
				],
				"operation": [
					"getEvents"
				]
			}
		},
		"description": "Query parameter: Next Cursor"
	},
	{
		"displayName": "Search String",
		"name": "op64_query_searchString",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"events"
				],
				"operation": [
					"getEvents"
				]
			}
		},
		"description": "Query parameter: Search String"
	},
	{
		"displayName": "Machine ID",
		"name": "op64_query_machineId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"events"
				],
				"operation": [
					"getEvents"
				]
			}
		},
		"description": "Query parameter: Machine ID"
	},
	{
		"displayName": "Start",
		"name": "op64_query_start",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"events"
				],
				"operation": [
					"getEvents"
				]
			}
		},
		"description": "Query parameter: Start"
	},
	{
		"displayName": "End",
		"name": "op64_query_end",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"events"
				],
				"operation": [
					"getEvents"
				]
			}
		},
		"description": "Query parameter: End"
	},
	{
		"displayName": "Severity Flags",
		"name": "op64_query_severityFlags",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"events"
				],
				"operation": [
					"getEvents"
				]
			}
		},
		"description": "Query parameter: Severity Flags"
	},
	{
		"displayName": "Source",
		"name": "op64_query_source",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"events"
				],
				"operation": [
					"getEvents"
				]
			}
		},
		"description": "Query parameter: Source"
	},
	{
		"displayName": "Next Cursor",
		"name": "op65_query_nextCursor",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				],
				"operation": [
					"getExclusions"
				]
			}
		},
		"description": "Query parameter: Next Cursor"
	},
	{
		"displayName": "Search String",
		"name": "op65_query_searchString",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				],
				"operation": [
					"getExclusions"
				]
			}
		},
		"description": "Query parameter: Search String"
	},
	{
		"displayName": "Policy IDs",
		"name": "op65_query_policyIds",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				],
				"operation": [
					"getExclusions"
				]
			}
		},
		"description": "Query parameter: Policy IDs"
	},
	{
		"displayName": "Type",
		"name": "op65_query_type",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				],
				"operation": [
					"getExclusions"
				]
			}
		},
		"description": "Query parameter: Type"
	},
	{
		"displayName": "Since",
		"name": "op65_query_since",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				],
				"operation": [
					"getExclusions"
				]
			}
		},
		"description": "Query parameter: Since"
	},
	{
		"displayName": "Until",
		"name": "op65_query_until",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				],
				"operation": [
					"getExclusions"
				]
			}
		},
		"description": "Query parameter: Until"
	},
	{
		"displayName": "Sort By",
		"name": "op65_query_sortBy",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				],
				"operation": [
					"getExclusions"
				]
			}
		},
		"description": "Query parameter: Sort By"
	},
	{
		"displayName": "Sort Order",
		"name": "op65_query_sortOrder",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				],
				"operation": [
					"getExclusions"
				]
			}
		},
		"description": "Query parameter: Sort Order"
	},
	{
		"displayName": "Body Fields",
		"name": "op66_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				],
				"operation": [
					"postExclusions"
				]
			}
		},
		"options": [
			{
				"displayName": "Account Level",
				"name": "op66_body_accountLevel",
				"type": "boolean",
				"default": false,
				"description": "Request body field: account_level"
			},
			{
				"displayName": "Comment",
				"name": "op66_body_comment",
				"type": "string",
				"default": "",
				"description": "Request body field: comment"
			},
			{
				"displayName": "Enabled",
				"name": "op66_body_enabled",
				"type": "boolean",
				"default": false,
				"description": "Request body field: enabled"
			},
			{
				"displayName": "Friendly Name",
				"name": "op66_body_friendlyName",
				"type": "string",
				"default": "",
				"description": "Request body field: friendly_name"
			},
			{
				"displayName": "Type",
				"name": "op66_body_type",
				"type": "number",
				"default": 0,
				"description": "Request body field: type"
			},
			{
				"displayName": "Value",
				"name": "op66_body_value",
				"type": "string",
				"default": "",
				"description": "Request body field: value"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op66_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				],
				"operation": [
					"postExclusions"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op67_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				],
				"operation": [
					"deleteExclusionsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op67_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				],
				"operation": [
					"deleteExclusionsById"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op68_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				],
				"operation": [
					"getExclusionsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op69_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				],
				"operation": [
					"putExclusionsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op69_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				],
				"operation": [
					"putExclusionsById"
				]
			}
		},
		"options": [
			{
				"displayName": "Account Level",
				"name": "op69_body_accountLevel",
				"type": "boolean",
				"default": false,
				"description": "Request body field: account_level"
			},
			{
				"displayName": "Comment",
				"name": "op69_body_comment",
				"type": "string",
				"default": "",
				"description": "Request body field: comment"
			},
			{
				"displayName": "Enabled",
				"name": "op69_body_enabled",
				"type": "boolean",
				"default": false,
				"description": "Request body field: enabled"
			},
			{
				"displayName": "Etag",
				"name": "op69_body_etag",
				"type": "string",
				"default": "",
				"description": "Request body field: etag"
			},
			{
				"displayName": "Friendly Name",
				"name": "op69_body_friendlyName",
				"type": "string",
				"default": "",
				"description": "Request body field: friendly_name"
			},
			{
				"displayName": "Type",
				"name": "op69_body_type",
				"type": "number",
				"default": 0,
				"description": "Request body field: type"
			},
			{
				"displayName": "Value",
				"name": "op69_body_value",
				"type": "string",
				"default": "",
				"description": "Request body field: value"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op69_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"exclusions"
				],
				"operation": [
					"putExclusionsById"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op70_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"flightRecorder"
				],
				"operation": [
					"postFlightRecorderChart"
				]
			}
		},
		"options": [
			{
				"displayName": "Time Range",
				"name": "op70_body_timeRange",
				"type": "string",
				"default": "7d",
				"description": "Request body field: time_range"
			},
			{
				"displayName": "Time Window Gte",
				"name": "op70_body_timeWindowGte",
				"type": "string",
				"default": "",
				"description": "Request body field: time_window.gte"
			},
			{
				"displayName": "Time Window Lte",
				"name": "op70_body_timeWindowLte",
				"type": "string",
				"default": "",
				"description": "Request body field: time_window.lte"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op70_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"flightRecorder"
				],
				"operation": [
					"postFlightRecorderChart"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op71_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"flightRecorder"
				],
				"operation": [
					"postFlightRecorderEndpoints"
				]
			}
		},
		"options": [
			{
				"displayName": "Time Range",
				"name": "op71_body_timeRange",
				"type": "string",
				"default": "7d",
				"description": "Request body field: time_range"
			},
			{
				"displayName": "Time Window Gte",
				"name": "op71_body_timeWindowGte",
				"type": "string",
				"default": "",
				"description": "Request body field: time_window.gte"
			},
			{
				"displayName": "Time Window Lte",
				"name": "op71_body_timeWindowLte",
				"type": "string",
				"default": "",
				"description": "Request body field: time_window.lte"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op71_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"flightRecorder"
				],
				"operation": [
					"postFlightRecorderEndpoints"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op72_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"flightRecorder"
				],
				"operation": [
					"postFlightRecorderProcessGraph"
				]
			}
		},
		"options": [
			{
				"displayName": "Account ID",
				"name": "op72_body_accountId",
				"type": "string",
				"default": "",
				"description": "Request body field: account_id"
			},
			{
				"displayName": "Machine ID",
				"name": "op72_body_machineId",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_id"
			},
			{
				"displayName": "OS Type",
				"name": "op72_body_osType",
				"type": "string",
				"default": "Windows",
				"description": "Request body field: os_type"
			},
			{
				"displayName": "Path",
				"name": "op72_body_path",
				"type": "string",
				"default": "",
				"description": "Request body field: path"
			},
			{
				"displayName": "Pid",
				"name": "op72_body_pid",
				"type": "string",
				"default": "",
				"description": "Request body field: pid"
			},
			{
				"displayName": "Pid Version",
				"name": "op72_body_pidVersion",
				"type": "number",
				"default": 0,
				"description": "Request body field: pid_version"
			},
			{
				"displayName": "Time Range",
				"name": "op72_body_timeRange",
				"type": "string",
				"default": "7d",
				"description": "Request body field: time_range"
			},
			{
				"displayName": "Time Window Gte",
				"name": "op72_body_timeWindowGte",
				"type": "string",
				"default": "",
				"description": "Request body field: time_window.gte"
			},
			{
				"displayName": "Time Window Lte",
				"name": "op72_body_timeWindowLte",
				"type": "string",
				"default": "",
				"description": "Request body field: time_window.lte"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op72_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"flightRecorder"
				],
				"operation": [
					"postFlightRecorderProcessGraph"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op73_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"flightRecorder"
				],
				"operation": [
					"postFlightRecorderProcesses"
				]
			}
		},
		"options": [
			{
				"displayName": "Event Category",
				"name": "op73_body_eventCategory",
				"type": "string",
				"default": "process",
				"description": "Request body field: event_category"
			},
			{
				"displayName": "First Activity Gte",
				"name": "op73_body_firstActivityGte",
				"type": "string",
				"default": "",
				"description": "Request body field: first_activity_gte"
			},
			{
				"displayName": "First Activity Lte",
				"name": "op73_body_firstActivityLte",
				"type": "string",
				"default": "",
				"description": "Request body field: first_activity_lte"
			},
			{
				"displayName": "Last Activity Gte",
				"name": "op73_body_lastActivityGte",
				"type": "string",
				"default": "",
				"description": "Request body field: last_activity_gte"
			},
			{
				"displayName": "Last Activity Lte",
				"name": "op73_body_lastActivityLte",
				"type": "string",
				"default": "",
				"description": "Request body field: last_activity_lte"
			},
			{
				"displayName": "Machine ID",
				"name": "op73_body_machineId",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_id"
			},
			{
				"displayName": "Md5",
				"name": "op73_body_md5",
				"type": "string",
				"default": "",
				"description": "Request body field: md5"
			},
			{
				"displayName": "OS Type",
				"name": "op73_body_osType",
				"type": "string",
				"default": "",
				"description": "Request body field: os_type"
			},
			{
				"displayName": "Pc Hostname",
				"name": "op73_body_pcHostname",
				"type": "string",
				"default": "",
				"description": "Request body field: pc_hostname"
			},
			{
				"displayName": "Pid",
				"name": "op73_body_pid",
				"type": "string",
				"default": "",
				"description": "Request body field: pid"
			},
			{
				"displayName": "Pid Version",
				"name": "op73_body_pidVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: pid_version"
			},
			{
				"displayName": "Process Name",
				"name": "op73_body_processName",
				"type": "string",
				"default": "",
				"description": "Request body field: process_name"
			},
			{
				"displayName": "Process Path",
				"name": "op73_body_processPath",
				"type": "string",
				"default": "",
				"description": "Request body field: process_path"
			},
			{
				"displayName": "Sha1",
				"name": "op73_body_sha1",
				"type": "string",
				"default": "",
				"description": "Request body field: sha1"
			},
			{
				"displayName": "Sha256",
				"name": "op73_body_sha256",
				"type": "string",
				"default": "",
				"description": "Request body field: sha256"
			},
			{
				"displayName": "Sha512",
				"name": "op73_body_sha512",
				"type": "string",
				"default": "",
				"description": "Request body field: sha512"
			},
			{
				"displayName": "Time Range",
				"name": "op73_body_timeRange",
				"type": "string",
				"default": "7d",
				"description": "Request body field: time_range"
			},
			{
				"displayName": "Time Window Gte",
				"name": "op73_body_timeWindowGte",
				"type": "string",
				"default": "",
				"description": "Request body field: time_window.gte"
			},
			{
				"displayName": "Time Window Lte",
				"name": "op73_body_timeWindowLte",
				"type": "string",
				"default": "",
				"description": "Request body field: time_window.lte"
			},
			{
				"displayName": "User",
				"name": "op73_body_user",
				"type": "string",
				"default": "",
				"description": "Request body field: user"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op73_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"flightRecorder"
				],
				"operation": [
					"postFlightRecorderProcesses"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op74_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"flightRecorder"
				],
				"operation": [
					"postFlightRecorderRawEvents"
				]
			}
		},
		"options": [
			{
				"displayName": "Event Type",
				"name": "op74_body_eventType",
				"type": "string",
				"default": "ANTIMALWARE_SCAN",
				"description": "Request body field: event_type"
			},
			{
				"displayName": "First Activity",
				"name": "op74_body_firstActivity",
				"type": "string",
				"default": "",
				"description": "Request body field: first_activity"
			},
			{
				"displayName": "Last Activity",
				"name": "op74_body_lastActivity",
				"type": "string",
				"default": "",
				"description": "Request body field: last_activity"
			},
			{
				"displayName": "Machine ID",
				"name": "op74_body_machineId",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_id"
			},
			{
				"displayName": "Page",
				"name": "op74_body_page",
				"type": "number",
				"default": 1,
				"description": "Request body field: page"
			},
			{
				"displayName": "Page Size",
				"name": "op74_body_pageSize",
				"type": "number",
				"default": 1,
				"description": "Request body field: page_size"
			},
			{
				"displayName": "Path",
				"name": "op74_body_path",
				"type": "string",
				"default": "",
				"description": "Request body field: path"
			},
			{
				"displayName": "Pid",
				"name": "op74_body_pid",
				"type": "string",
				"default": "",
				"description": "Request body field: pid"
			},
			{
				"displayName": "Pid Version",
				"name": "op74_body_pidVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: pid_version"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op74_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"flightRecorder"
				],
				"operation": [
					"postFlightRecorderRawEvents"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op75_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"flightRecorder"
				],
				"operation": [
					"postFlightRecorderRecap"
				]
			}
		},
		"options": [
			{
				"displayName": "Time Range",
				"name": "op75_body_timeRange",
				"type": "string",
				"default": "7d",
				"description": "Request body field: time_range"
			},
			{
				"displayName": "Time Window Gte",
				"name": "op75_body_timeWindowGte",
				"type": "string",
				"default": "",
				"description": "Request body field: time_window.gte"
			},
			{
				"displayName": "Time Window Lte",
				"name": "op75_body_timeWindowLte",
				"type": "string",
				"default": "",
				"description": "Request body field: time_window.lte"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op75_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"flightRecorder"
				],
				"operation": [
					"postFlightRecorderRecap"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op76_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"flightRecorder"
				],
				"operation": [
					"postFlightRecorderSearch"
				]
			}
		},
		"options": [
			{
				"displayName": "Event Category",
				"name": "op76_body_eventCategory",
				"type": "string",
				"default": "network",
				"description": "Request body field: event_category"
			},
			{
				"displayName": "Pc Hostname",
				"name": "op76_body_pcHostname",
				"type": "string",
				"default": "",
				"description": "Request body field: pc_hostname"
			},
			{
				"displayName": "Time Range",
				"name": "op76_body_timeRange",
				"type": "string",
				"default": "7d",
				"description": "Request body field: time_range"
			},
			{
				"displayName": "Time Window Gte",
				"name": "op76_body_timeWindowGte",
				"type": "string",
				"default": "",
				"description": "Request body field: time_window.gte"
			},
			{
				"displayName": "Time Window Lte",
				"name": "op76_body_timeWindowLte",
				"type": "string",
				"default": "",
				"description": "Request body field: time_window.lte"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op76_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"flightRecorder"
				],
				"operation": [
					"postFlightRecorderSearch"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "JSON Body",
		"name": "op77_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridAssetsSoftwareExport"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op78_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridAssetsSoftwareSearch"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op79_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridAssetsSoftwareSearchGroupby"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op80_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridCveExport"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op81_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridCveSearch"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op82_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridCveSearchGroupby"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op83_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridDetectionsExport"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op84_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridDetectionsSearch"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op85_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridDetectionsSearchGroupby"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op86_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridDeviceControlExport"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op87_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridDeviceControlSearch"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op88_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridDeviceControlSearchGroupby"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op89_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridDnsExport"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op90_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridDnsSearch"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op91_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridDnsSearchGroupby"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op92_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridEndpointsExport"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op93_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridEndpointsSearch"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op94_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridEndpointsSearchGroupby"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op95_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridEventsExport"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op96_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridEventsSearch"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op97_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridEventsSearchGroupby"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op98_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridOsPatchesExport"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op99_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridOsPatchesSearch"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op100_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridOsPatchesSearchGroupby"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op101_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridRidExport"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op102_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridRidSearch"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op103_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"grid"
				],
				"operation": [
					"postGridRidSearchGroupby"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "Name",
		"name": "op104_query_name",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"groups"
				],
				"operation": [
					"getGroups"
				]
			}
		},
		"description": "Query parameter: Name"
	},
	{
		"displayName": "Parent ID",
		"name": "op104_query_parentId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"groups"
				],
				"operation": [
					"getGroups"
				]
			}
		},
		"description": "Query parameter: Parent ID"
	},
	{
		"displayName": "Filter By Parent ID",
		"name": "op104_query_filterByParentId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"groups"
				],
				"operation": [
					"getGroups"
				]
			}
		},
		"description": "Query parameter: Filter By Parent ID"
	},
	{
		"displayName": "Next Cursor",
		"name": "op104_query_nextCursor",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"groups"
				],
				"operation": [
					"getGroups"
				]
			}
		},
		"description": "Query parameter: Next Cursor"
	},
	{
		"displayName": "Body Fields",
		"name": "op105_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"groups"
				],
				"operation": [
					"postGroups"
				]
			}
		},
		"options": [
			{
				"displayName": "Name",
				"name": "op105_body_name",
				"type": "string",
				"default": "",
				"description": "Request body field: name"
			},
			{
				"displayName": "Parent ID",
				"name": "op105_body_parentId",
				"type": "string",
				"default": "",
				"description": "Request body field: parent_id"
			},
			{
				"displayName": "Policy ID",
				"name": "op105_body_policyId",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_id"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op105_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"groups"
				],
				"operation": [
					"postGroups"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op106_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"groups"
				],
				"operation": [
					"deleteGroupsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op106_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"groups"
				],
				"operation": [
					"deleteGroupsById"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op107_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"groups"
				],
				"operation": [
					"getGroupsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op108_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"groups"
				],
				"operation": [
					"putGroupsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op108_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"groups"
				],
				"operation": [
					"putGroupsById"
				]
			}
		},
		"options": [
			{
				"displayName": "Name",
				"name": "op108_body_name",
				"type": "string",
				"default": "",
				"description": "Request body field: name"
			},
			{
				"displayName": "Parent ID",
				"name": "op108_body_parentId",
				"type": "string",
				"default": "",
				"description": "Request body field: parent_id"
			},
			{
				"displayName": "Policy ID",
				"name": "op108_body_policyId",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_id"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op108_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"groups"
				],
				"operation": [
					"putGroupsById"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op109_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"groups"
				],
				"operation": [
					"postGroupsByIdMachines"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op109_body",
		"type": "json",
		"default": "{\n  \"endpoints\": [\n    {\n      \"id\": \"\"\n    }\n  ]\n}",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"groups"
				],
				"operation": [
					"postGroupsByIdMachines"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "Sort By",
		"name": "op110_query_sortBy",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"installationToken"
				],
				"operation": [
					"getInstallationToken"
				]
			}
		},
		"description": "Query parameter: Sort By"
	},
	{
		"displayName": "Sort Order",
		"name": "op110_query_sortOrder",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"installationToken"
				],
				"operation": [
					"getInstallationToken"
				]
			}
		},
		"description": "Query parameter: Sort Order"
	},
	{
		"displayName": "Include Used",
		"name": "op110_query_includeUsed",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"installationToken"
				],
				"operation": [
					"getInstallationToken"
				]
			}
		},
		"description": "Query parameter: Include Used"
	},
	{
		"displayName": "Include Expired",
		"name": "op110_query_includeExpired",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"installationToken"
				],
				"operation": [
					"getInstallationToken"
				]
			}
		},
		"description": "Query parameter: Include Expired"
	},
	{
		"displayName": "Populate",
		"name": "op110_query_populate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"installationToken"
				],
				"operation": [
					"getInstallationToken"
				]
			}
		},
		"description": "Query parameter: Populate"
	},
	{
		"displayName": "Page Size",
		"name": "op110_query_pageSize",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"installationToken"
				],
				"operation": [
					"getInstallationToken"
				]
			}
		},
		"description": "Query parameter: Page Size"
	},
	{
		"displayName": "Start Index",
		"name": "op110_query_startIndex",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"installationToken"
				],
				"operation": [
					"getInstallationToken"
				]
			}
		},
		"description": "Query parameter: Start Index"
	},
	{
		"displayName": "JSON Body",
		"name": "op111_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"installationToken"
				],
				"operation": [
					"postInstallationToken"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op112_body",
		"type": "json",
		"default": "{}",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"installationToken"
				],
				"operation": [
					"postInstallationTokenSend"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "Token",
		"name": "op113_path_token",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"installationToken"
				],
				"operation": [
					"deleteInstallationTokenByToken"
				]
			}
		},
		"description": "Path parameter: Token",
		"required": true,
		"typeOptions": {
			"password": true
		}
	},
	{
		"displayName": "JSON Body",
		"name": "op113_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"installationToken"
				],
				"operation": [
					"deleteInstallationTokenByToken"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "Body Fields",
		"name": "op115_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"jobs"
				],
				"operation": [
					"postJobs"
				]
			}
		},
		"options": [
			{
				"displayName": "Command",
				"name": "op115_body_command",
				"type": "string",
				"default": "",
				"description": "Request body field: command"
			},
			{
				"displayName": "Data Allow Postpone Reboot",
				"name": "op115_body_dataAllowPostponeReboot",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.allow_postpone_reboot"
			},
			{
				"displayName": "Data Application Name",
				"name": "op115_body_dataApplicationName",
				"type": "string",
				"default": "",
				"description": "Request body field: data.application_name"
			},
			{
				"displayName": "Data Architecture",
				"name": "op115_body_dataArchitecture",
				"type": "string",
				"default": "",
				"description": "Request body field: data.architecture"
			},
			{
				"displayName": "Data Ark",
				"name": "op115_body_dataArk",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.ark"
			},
			{
				"displayName": "Data Current Version",
				"name": "op115_body_dataCurrentVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: data.current_version"
			},
			{
				"displayName": "Data Delay In Seconds",
				"name": "op115_body_dataDelayInSeconds",
				"type": "number",
				"default": 0,
				"description": "Request body field: data.delay_in_seconds"
			},
			{
				"displayName": "Data Enable Shuriken",
				"name": "op115_body_dataEnableShuriken",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.enable_shuriken"
			},
			{
				"displayName": "Data Language",
				"name": "op115_body_dataLanguage",
				"type": "string",
				"default": "",
				"description": "Request body field: data.language"
			},
			{
				"displayName": "Data Message",
				"name": "op115_body_dataMessage",
				"type": "string",
				"default": "",
				"description": "Request body field: data.message"
			},
			{
				"displayName": "Data New Version",
				"name": "op115_body_dataNewVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: data.new_version"
			},
			{
				"displayName": "Data No Archive",
				"name": "op115_body_dataNoArchive",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.no_archive"
			},
			{
				"displayName": "Data No Reboot",
				"name": "op115_body_dataNoReboot",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.no_reboot"
			},
			{
				"displayName": "Data Product",
				"name": "op115_body_dataProduct",
				"type": "number",
				"default": 0,
				"description": "Request body field: data.product"
			},
			{
				"displayName": "Data Pum Detection",
				"name": "op115_body_dataPumDetection",
				"type": "string",
				"default": "",
				"description": "Request body field: data.pum_detection"
			},
			{
				"displayName": "Data Pup Detection",
				"name": "op115_body_dataPupDetection",
				"type": "string",
				"default": "",
				"description": "Request body field: data.pup_detection"
			},
			{
				"displayName": "Data Reasons",
				"name": "op115_body_dataReasons",
				"type": "number",
				"default": 0,
				"description": "Request body field: data.reasons"
			},
			{
				"displayName": "Data Reboot Delay",
				"name": "op115_body_dataRebootDelay",
				"type": "number",
				"default": 0,
				"description": "Request body field: data.reboot_delay"
			},
			{
				"displayName": "Data Reboot Delay Rrule",
				"name": "op115_body_dataRebootDelayRrule",
				"type": "string",
				"default": "",
				"description": "Request body field: data.reboot_delay_rrule"
			},
			{
				"displayName": "Data Reboot Message",
				"name": "op115_body_dataRebootMessage",
				"type": "string",
				"default": "",
				"description": "Request body field: data.reboot_message"
			},
			{
				"displayName": "Data Remove",
				"name": "op115_body_dataRemove",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.remove"
			},
			{
				"displayName": "Data Scan File System",
				"name": "op115_body_dataScanFileSystem",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.scan_file_system"
			},
			{
				"displayName": "Data Scan Fixed Drives",
				"name": "op115_body_dataScanFixedDrives",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.scan_fixed_drives"
			},
			{
				"displayName": "Data Scan Memory",
				"name": "op115_body_dataScanMemory",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.scan_memory"
			},
			{
				"displayName": "Data Scan Path",
				"name": "op115_body_dataScanPath",
				"type": "string",
				"default": "",
				"description": "Request body field: data.scan_path"
			},
			{
				"displayName": "Data Scan Path From List File",
				"name": "op115_body_dataScanPathFromListFile",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.scan_path_from_list_file"
			},
			{
				"displayName": "Data Scan Priority",
				"name": "op115_body_dataScanPriority",
				"type": "string",
				"default": "",
				"description": "Request body field: data.scan_priority"
			},
			{
				"displayName": "Data Scan Registry",
				"name": "op115_body_dataScanRegistry",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.scan_registry"
			},
			{
				"displayName": "Data Scan Settings Type",
				"name": "op115_body_dataScanSettingsType",
				"type": "string",
				"default": "",
				"description": "Request body field: data.scan_settings.type"
			},
			{
				"displayName": "Data Scan Startup",
				"name": "op115_body_dataScanStartup",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.scan_startup"
			},
			{
				"displayName": "Data Type",
				"name": "op115_body_dataType",
				"type": "string",
				"default": "",
				"description": "Request body field: data.type"
			},
			{
				"displayName": "Data Vendor",
				"name": "op115_body_dataVendor",
				"type": "string",
				"default": "",
				"description": "Request body field: data.vendor"
			},
			{
				"displayName": "Relay State",
				"name": "op115_body_relayState",
				"type": "string",
				"default": "",
				"description": "Request body field: relay_state"
			},
			{
				"displayName": "Requires Connected",
				"name": "op115_body_requiresConnected",
				"type": "boolean",
				"default": false,
				"description": "Request body field: requires_connected"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op115_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"jobs"
				],
				"operation": [
					"postJobs"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "JSON Body",
		"name": "op116_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"jobs"
				],
				"operation": [
					"deleteJobsBulk"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "Body Fields",
		"name": "op117_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"jobs"
				],
				"operation": [
					"postJobsBulk"
				]
			}
		},
		"options": [
			{
				"displayName": "Command",
				"name": "op117_body_command",
				"type": "string",
				"default": "",
				"description": "Request body field: command"
			},
			{
				"displayName": "Data Allow Postpone Reboot",
				"name": "op117_body_dataAllowPostponeReboot",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.allow_postpone_reboot"
			},
			{
				"displayName": "Data Application Name",
				"name": "op117_body_dataApplicationName",
				"type": "string",
				"default": "",
				"description": "Request body field: data.application_name"
			},
			{
				"displayName": "Data Architecture",
				"name": "op117_body_dataArchitecture",
				"type": "string",
				"default": "",
				"description": "Request body field: data.architecture"
			},
			{
				"displayName": "Data Ark",
				"name": "op117_body_dataArk",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.ark"
			},
			{
				"displayName": "Data Current Version",
				"name": "op117_body_dataCurrentVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: data.current_version"
			},
			{
				"displayName": "Data Delay In Seconds",
				"name": "op117_body_dataDelayInSeconds",
				"type": "number",
				"default": 0,
				"description": "Request body field: data.delay_in_seconds"
			},
			{
				"displayName": "Data Enable Shuriken",
				"name": "op117_body_dataEnableShuriken",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.enable_shuriken"
			},
			{
				"displayName": "Data Language",
				"name": "op117_body_dataLanguage",
				"type": "string",
				"default": "",
				"description": "Request body field: data.language"
			},
			{
				"displayName": "Data Message",
				"name": "op117_body_dataMessage",
				"type": "string",
				"default": "",
				"description": "Request body field: data.message"
			},
			{
				"displayName": "Data New Version",
				"name": "op117_body_dataNewVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: data.new_version"
			},
			{
				"displayName": "Data No Archive",
				"name": "op117_body_dataNoArchive",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.no_archive"
			},
			{
				"displayName": "Data No Reboot",
				"name": "op117_body_dataNoReboot",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.no_reboot"
			},
			{
				"displayName": "Data Product",
				"name": "op117_body_dataProduct",
				"type": "number",
				"default": 0,
				"description": "Request body field: data.product"
			},
			{
				"displayName": "Data Pum Detection",
				"name": "op117_body_dataPumDetection",
				"type": "string",
				"default": "",
				"description": "Request body field: data.pum_detection"
			},
			{
				"displayName": "Data Pup Detection",
				"name": "op117_body_dataPupDetection",
				"type": "string",
				"default": "",
				"description": "Request body field: data.pup_detection"
			},
			{
				"displayName": "Data Reasons",
				"name": "op117_body_dataReasons",
				"type": "number",
				"default": 0,
				"description": "Request body field: data.reasons"
			},
			{
				"displayName": "Data Reboot Delay",
				"name": "op117_body_dataRebootDelay",
				"type": "number",
				"default": 0,
				"description": "Request body field: data.reboot_delay"
			},
			{
				"displayName": "Data Reboot Delay Rrule",
				"name": "op117_body_dataRebootDelayRrule",
				"type": "string",
				"default": "",
				"description": "Request body field: data.reboot_delay_rrule"
			},
			{
				"displayName": "Data Reboot Message",
				"name": "op117_body_dataRebootMessage",
				"type": "string",
				"default": "",
				"description": "Request body field: data.reboot_message"
			},
			{
				"displayName": "Data Remove",
				"name": "op117_body_dataRemove",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.remove"
			},
			{
				"displayName": "Data Scan File System",
				"name": "op117_body_dataScanFileSystem",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.scan_file_system"
			},
			{
				"displayName": "Data Scan Fixed Drives",
				"name": "op117_body_dataScanFixedDrives",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.scan_fixed_drives"
			},
			{
				"displayName": "Data Scan Memory",
				"name": "op117_body_dataScanMemory",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.scan_memory"
			},
			{
				"displayName": "Data Scan Path",
				"name": "op117_body_dataScanPath",
				"type": "string",
				"default": "",
				"description": "Request body field: data.scan_path"
			},
			{
				"displayName": "Data Scan Path From List File",
				"name": "op117_body_dataScanPathFromListFile",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.scan_path_from_list_file"
			},
			{
				"displayName": "Data Scan Priority",
				"name": "op117_body_dataScanPriority",
				"type": "string",
				"default": "",
				"description": "Request body field: data.scan_priority"
			},
			{
				"displayName": "Data Scan Registry",
				"name": "op117_body_dataScanRegistry",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.scan_registry"
			},
			{
				"displayName": "Data Scan Settings Remove",
				"name": "op117_body_dataScanSettingsRemove",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.scan_settings.remove"
			},
			{
				"displayName": "Data Scan Settings Type",
				"name": "op117_body_dataScanSettingsType",
				"type": "string",
				"default": "",
				"description": "Request body field: data.scan_settings.type"
			},
			{
				"displayName": "Data Scan Startup",
				"name": "op117_body_dataScanStartup",
				"type": "boolean",
				"default": false,
				"description": "Request body field: data.scan_startup"
			},
			{
				"displayName": "Data Type",
				"name": "op117_body_dataType",
				"type": "string",
				"default": "",
				"description": "Request body field: data.type"
			},
			{
				"displayName": "Data Vendor",
				"name": "op117_body_dataVendor",
				"type": "string",
				"default": "",
				"description": "Request body field: data.vendor"
			},
			{
				"displayName": "Relay State",
				"name": "op117_body_relayState",
				"type": "string",
				"default": "",
				"description": "Request body field: relay_state"
			},
			{
				"displayName": "Requires Connected",
				"name": "op117_body_requiresConnected",
				"type": "boolean",
				"default": false,
				"description": "Request body field: requires_connected"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op117_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"jobs"
				],
				"operation": [
					"postJobsBulk"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op118_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"jobs"
				],
				"operation": [
					"postJobsExport"
				]
			}
		},
		"options": [
			{
				"displayName": "Download",
				"name": "op118_body_download",
				"type": "boolean",
				"default": false,
				"description": "Request body field: download"
			},
			{
				"displayName": "Format",
				"name": "op118_body_format",
				"type": "string",
				"default": "csv",
				"description": "Request body field: format"
			},
			{
				"displayName": "Type",
				"name": "op118_body_type",
				"type": "string",
				"default": "string",
				"description": "Request body field: type"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op118_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"jobs"
				],
				"operation": [
					"postJobsExport"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op119_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"jobs"
				],
				"operation": [
					"postJobsSearch"
				]
			}
		},
		"options": [
			{
				"displayName": "Cancelled By",
				"name": "op119_body_cancelledBy",
				"type": "string",
				"default": "",
				"description": "Request body field: cancelled_by"
			},
			{
				"displayName": "Endpoint",
				"name": "op119_body_endpoint",
				"type": "string",
				"default": "",
				"description": "Request body field: endpoint"
			},
			{
				"displayName": "Expires At After",
				"name": "op119_body_expiresAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: expires_at_after"
			},
			{
				"displayName": "Expires At Before",
				"name": "op119_body_expiresAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: expires_at_before"
			},
			{
				"displayName": "ID",
				"name": "op119_body_id",
				"type": "string",
				"default": "",
				"description": "Request body field: id"
			},
			{
				"displayName": "Issued At After",
				"name": "op119_body_issuedAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: issued_at_after"
			},
			{
				"displayName": "Issued At Before",
				"name": "op119_body_issuedAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: issued_at_before"
			},
			{
				"displayName": "Issued By",
				"name": "op119_body_issuedBy",
				"type": "string",
				"default": "",
				"description": "Request body field: issued_by"
			},
			{
				"displayName": "Issued By Email",
				"name": "op119_body_issuedByEmail",
				"type": "string",
				"default": "",
				"description": "Request body field: issued_by_email"
			},
			{
				"displayName": "Machine ID",
				"name": "op119_body_machineId",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_id"
			},
			{
				"displayName": "Next Cursor",
				"name": "op119_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Page Size",
				"name": "op119_body_pageSize",
				"type": "number",
				"default": 100,
				"description": "Request body field: page_size"
			},
			{
				"displayName": "Sort Field",
				"name": "op119_body_sortField",
				"type": "string",
				"default": "command",
				"description": "Request body field: sort_field"
			},
			{
				"displayName": "Sort Order",
				"name": "op119_body_sortOrder",
				"type": "string",
				"default": "asc",
				"description": "Request body field: sort_order"
			},
			{
				"displayName": "Status",
				"name": "op119_body_status",
				"type": "number",
				"default": 511,
				"description": "Request body field: status"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op119_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"jobs"
				],
				"operation": [
					"postJobsSearch"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op120_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"jobs"
				],
				"operation": [
					"postJobsSearchGroupby"
				]
			}
		},
		"options": [
			{
				"displayName": "Group By",
				"name": "op120_body_groupBy",
				"type": "string",
				"default": "id",
				"description": "Request body field: group_by"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op120_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"jobs"
				],
				"operation": [
					"postJobsSearchGroupby"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op121_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"jobs"
				],
				"operation": [
					"getJobsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Owner",
		"name": "op122_query_owner",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"notifications"
				],
				"operation": [
					"getNotificationsSubscriptions"
				]
			}
		},
		"description": "Query parameter: Owner"
	},
	{
		"displayName": "Next Cursor",
		"name": "op122_query_nextCursor",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"notifications"
				],
				"operation": [
					"getNotificationsSubscriptions"
				]
			}
		},
		"description": "Query parameter: Next Cursor"
	},
	{
		"displayName": "JSON Body",
		"name": "op123_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"notifications"
				],
				"operation": [
					"postNotificationsSubscriptions"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op124_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"notifications"
				],
				"operation": [
					"deleteNotificationsSubscriptionsBulk"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "JSON Body",
		"name": "op125_body",
		"type": "json",
		"default": "{}",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"notifications"
				],
				"operation": [
					"putNotificationsSubscriptionsBulk"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op126_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"notifications"
				],
				"operation": [
					"deleteNotificationsSubscriptionsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op126_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"notifications"
				],
				"operation": [
					"deleteNotificationsSubscriptionsById"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op127_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"notifications"
				],
				"operation": [
					"getNotificationsSubscriptionsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op128_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"notifications"
				],
				"operation": [
					"putNotificationsSubscriptionsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op128_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"notifications"
				],
				"operation": [
					"putNotificationsSubscriptionsById"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "Body Fields",
		"name": "op129_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"osPatches"
				],
				"operation": [
					"postOsPatches"
				]
			}
		},
		"options": [
			{
				"displayName": "Category",
				"name": "op129_body_category",
				"type": "string",
				"default": "",
				"description": "Request body field: category"
			},
			{
				"displayName": "Category Keyword",
				"name": "op129_body_categoryKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: category.keyword"
			},
			{
				"displayName": "Created At After",
				"name": "op129_body_createdAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: created_at_after"
			},
			{
				"displayName": "Created At Before",
				"name": "op129_body_createdAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: created_at_before"
			},
			{
				"displayName": "Description",
				"name": "op129_body_description",
				"type": "string",
				"default": "",
				"description": "Request body field: description"
			},
			{
				"displayName": "Description Keyword",
				"name": "op129_body_descriptionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: description.keyword"
			},
			{
				"displayName": "Display Name",
				"name": "op129_body_displayName",
				"type": "string",
				"default": "",
				"description": "Request body field: display_name"
			},
			{
				"displayName": "Display Name Keyword",
				"name": "op129_body_displayNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: display_name.keyword"
			},
			{
				"displayName": "Fully Qualified Host Name",
				"name": "op129_body_fullyQualifiedHostName",
				"type": "string",
				"default": "",
				"description": "Request body field: fully_qualified_host_name"
			},
			{
				"displayName": "Fully Qualified Host Name Keyword",
				"name": "op129_body_fullyQualifiedHostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: fully_qualified_host_name.keyword"
			},
			{
				"displayName": "Group ID",
				"name": "op129_body_groupId",
				"type": "string",
				"default": "",
				"description": "Request body field: group_id"
			},
			{
				"displayName": "Group ID Keyword",
				"name": "op129_body_groupIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: group_id.keyword"
			},
			{
				"displayName": "Host Name",
				"name": "op129_body_hostName",
				"type": "string",
				"default": "",
				"description": "Request body field: host_name"
			},
			{
				"displayName": "Host Name Keyword",
				"name": "op129_body_hostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: host_name.keyword"
			},
			{
				"displayName": "Machine ID",
				"name": "op129_body_machineId",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_id"
			},
			{
				"displayName": "Machine ID Keyword",
				"name": "op129_body_machineIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_id.keyword"
			},
			{
				"displayName": "Next Cursor",
				"name": "op129_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Not Category",
				"name": "op129_body_notCategory",
				"type": "string",
				"default": "",
				"description": "Request body field: not.category"
			},
			{
				"displayName": "Not Category Keyword",
				"name": "op129_body_notCategoryKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.category.keyword"
			},
			{
				"displayName": "Not Description",
				"name": "op129_body_notDescription",
				"type": "string",
				"default": "",
				"description": "Request body field: not.description"
			},
			{
				"displayName": "Not Description Keyword",
				"name": "op129_body_notDescriptionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.description.keyword"
			},
			{
				"displayName": "Not Display Name",
				"name": "op129_body_notDisplayName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.display_name"
			},
			{
				"displayName": "Not Display Name Keyword",
				"name": "op129_body_notDisplayNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.display_name.keyword"
			},
			{
				"displayName": "Not Fully Qualified Host Name",
				"name": "op129_body_notFullyQualifiedHostName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.fully_qualified_host_name"
			},
			{
				"displayName": "Not Fully Qualified Host Name Keyword",
				"name": "op129_body_notFullyQualifiedHostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.fully_qualified_host_name.keyword"
			},
			{
				"displayName": "Not Group ID",
				"name": "op129_body_notGroupId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.group_id"
			},
			{
				"displayName": "Not Group ID Keyword",
				"name": "op129_body_notGroupIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.group_id.keyword"
			},
			{
				"displayName": "Not Host Name",
				"name": "op129_body_notHostName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.host_name"
			},
			{
				"displayName": "Not Host Name Keyword",
				"name": "op129_body_notHostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.host_name.keyword"
			},
			{
				"displayName": "Not Machine ID",
				"name": "op129_body_notMachineId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.machine_id"
			},
			{
				"displayName": "Not Machine ID Keyword",
				"name": "op129_body_notMachineIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.machine_id.keyword"
			},
			{
				"displayName": "Not Object Guid",
				"name": "op129_body_notObjectGuid",
				"type": "string",
				"default": "",
				"description": "Request body field: not.object_guid"
			},
			{
				"displayName": "Not Object Guid Keyword",
				"name": "op129_body_notObjectGuidKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.object_guid.keyword"
			},
			{
				"displayName": "Not OS Info OS Architecture",
				"name": "op129_body_notOsInfoOsArchitecture",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_architecture"
			},
			{
				"displayName": "Not OS Info OS Architecture Keyword",
				"name": "op129_body_notOsInfoOsArchitectureKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_architecture.keyword"
			},
			{
				"displayName": "Not OS Info OS Platform",
				"name": "op129_body_notOsInfoOsPlatform",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_platform"
			},
			{
				"displayName": "Not OS Info OS Platform Keyword",
				"name": "op129_body_notOsInfoOsPlatformKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_platform.keyword"
			},
			{
				"displayName": "Not OS Info OS Release Name",
				"name": "op129_body_notOsInfoOsReleaseName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_release_name"
			},
			{
				"displayName": "Not OS Info OS Release Name Keyword",
				"name": "op129_body_notOsInfoOsReleaseNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_release_name.keyword"
			},
			{
				"displayName": "Not OS Info OS Type",
				"name": "op129_body_notOsInfoOsType",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_type"
			},
			{
				"displayName": "Not OS Info OS Type Keyword",
				"name": "op129_body_notOsInfoOsTypeKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_type.keyword"
			},
			{
				"displayName": "Not OS Info OS Version",
				"name": "op129_body_notOsInfoOsVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_version"
			},
			{
				"displayName": "Not OS Info OS Version Keyword",
				"name": "op129_body_notOsInfoOsVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_version.keyword"
			},
			{
				"displayName": "Not Patch ID",
				"name": "op129_body_notPatchId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.patch_id"
			},
			{
				"displayName": "Not Patch ID Keyword",
				"name": "op129_body_notPatchIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.patch_id.keyword"
			},
			{
				"displayName": "Not Product",
				"name": "op129_body_notProduct",
				"type": "string",
				"default": "",
				"description": "Request body field: not.product"
			},
			{
				"displayName": "Not Product Keyword",
				"name": "op129_body_notProductKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.product.keyword"
			},
			{
				"displayName": "Not Root Group ID",
				"name": "op129_body_notRootGroupId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.root_group_id"
			},
			{
				"displayName": "Not Root Group ID Keyword",
				"name": "op129_body_notRootGroupIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.root_group_id.keyword"
			},
			{
				"displayName": "Not Security Update ID",
				"name": "op129_body_notSecurityUpdateId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.security_update_id"
			},
			{
				"displayName": "Not Security Update ID Keyword",
				"name": "op129_body_notSecurityUpdateIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.security_update_id.keyword"
			},
			{
				"displayName": "Not Severity",
				"name": "op129_body_notSeverity",
				"type": "string",
				"default": "",
				"description": "Request body field: not.severity"
			},
			{
				"displayName": "Not Severity Keyword",
				"name": "op129_body_notSeverityKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.severity.keyword"
			},
			{
				"displayName": "Not Title",
				"name": "op129_body_notTitle",
				"type": "string",
				"default": "",
				"description": "Request body field: not.title"
			},
			{
				"displayName": "Not Title Keyword",
				"name": "op129_body_notTitleKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.title.keyword"
			},
			{
				"displayName": "Not Vendor",
				"name": "op129_body_notVendor",
				"type": "string",
				"default": "",
				"description": "Request body field: not.vendor"
			},
			{
				"displayName": "Not Vendor Keyword",
				"name": "op129_body_notVendorKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.vendor.keyword"
			},
			{
				"displayName": "Object Guid",
				"name": "op129_body_objectGuid",
				"type": "string",
				"default": "",
				"description": "Request body field: object_guid"
			},
			{
				"displayName": "Object Guid Keyword",
				"name": "op129_body_objectGuidKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: object_guid.keyword"
			},
			{
				"displayName": "OS Info OS Architecture",
				"name": "op129_body_osInfoOsArchitecture",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_architecture"
			},
			{
				"displayName": "OS Info OS Architecture Keyword",
				"name": "op129_body_osInfoOsArchitectureKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_architecture.keyword"
			},
			{
				"displayName": "OS Info OS Platform",
				"name": "op129_body_osInfoOsPlatform",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_platform"
			},
			{
				"displayName": "OS Info OS Platform Keyword",
				"name": "op129_body_osInfoOsPlatformKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_platform.keyword"
			},
			{
				"displayName": "OS Info OS Release Name",
				"name": "op129_body_osInfoOsReleaseName",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_release_name"
			},
			{
				"displayName": "OS Info OS Release Name Keyword",
				"name": "op129_body_osInfoOsReleaseNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_release_name.keyword"
			},
			{
				"displayName": "OS Info OS Type",
				"name": "op129_body_osInfoOsType",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_type"
			},
			{
				"displayName": "OS Info OS Type Keyword",
				"name": "op129_body_osInfoOsTypeKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_type.keyword"
			},
			{
				"displayName": "OS Info OS Version",
				"name": "op129_body_osInfoOsVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_version"
			},
			{
				"displayName": "OS Info OS Version Keyword",
				"name": "op129_body_osInfoOsVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_version.keyword"
			},
			{
				"displayName": "Page Size",
				"name": "op129_body_pageSize",
				"type": "number",
				"default": 50,
				"description": "Request body field: page_size"
			},
			{
				"displayName": "Patch ID",
				"name": "op129_body_patchId",
				"type": "string",
				"default": "",
				"description": "Request body field: patch_id"
			},
			{
				"displayName": "Patch ID Keyword",
				"name": "op129_body_patchIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: patch_id.keyword"
			},
			{
				"displayName": "Populate Endpoint",
				"name": "op129_body_populateEndpoint",
				"type": "boolean",
				"default": false,
				"description": "Request body field: populate.endpoint"
			},
			{
				"displayName": "Populate Group",
				"name": "op129_body_populateGroup",
				"type": "boolean",
				"default": false,
				"description": "Request body field: populate.group"
			},
			{
				"displayName": "Product",
				"name": "op129_body_product",
				"type": "string",
				"default": "",
				"description": "Request body field: product"
			},
			{
				"displayName": "Product Keyword",
				"name": "op129_body_productKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: product.keyword"
			},
			{
				"displayName": "Reboot Required",
				"name": "op129_body_rebootRequired",
				"type": "boolean",
				"default": false,
				"description": "Request body field: reboot_required"
			},
			{
				"displayName": "Released At After",
				"name": "op129_body_releasedAtAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: released_at_after"
			},
			{
				"displayName": "Released At Before",
				"name": "op129_body_releasedAtBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: released_at_before"
			},
			{
				"displayName": "Root Group ID",
				"name": "op129_body_rootGroupId",
				"type": "string",
				"default": "",
				"description": "Request body field: root_group_id"
			},
			{
				"displayName": "Root Group ID Keyword",
				"name": "op129_body_rootGroupIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: root_group_id.keyword"
			},
			{
				"displayName": "Security Update ID",
				"name": "op129_body_securityUpdateId",
				"type": "string",
				"default": "",
				"description": "Request body field: security_update_id"
			},
			{
				"displayName": "Security Update ID Keyword",
				"name": "op129_body_securityUpdateIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: security_update_id.keyword"
			},
			{
				"displayName": "Severity",
				"name": "op129_body_severity",
				"type": "string",
				"default": "",
				"description": "Request body field: severity"
			},
			{
				"displayName": "Severity Keyword",
				"name": "op129_body_severityKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: severity.keyword"
			},
			{
				"displayName": "Size",
				"name": "op129_body_size",
				"type": "number",
				"default": 0,
				"description": "Request body field: size"
			},
			{
				"displayName": "Size Gt",
				"name": "op129_body_sizeGt",
				"type": "number",
				"default": 0,
				"description": "Request body field: size_gt"
			},
			{
				"displayName": "Size Gte",
				"name": "op129_body_sizeGte",
				"type": "number",
				"default": 0,
				"description": "Request body field: size_gte"
			},
			{
				"displayName": "Size Lt",
				"name": "op129_body_sizeLt",
				"type": "number",
				"default": 0,
				"description": "Request body field: size_lt"
			},
			{
				"displayName": "Size Lte",
				"name": "op129_body_sizeLte",
				"type": "number",
				"default": 0,
				"description": "Request body field: size_lte"
			},
			{
				"displayName": "Sort Field",
				"name": "op129_body_sortField",
				"type": "string",
				"default": "machine_id",
				"description": "Request body field: sort_field"
			},
			{
				"displayName": "Sort Order",
				"name": "op129_body_sortOrder",
				"type": "string",
				"default": "asc",
				"description": "Request body field: sort_order"
			},
			{
				"displayName": "Title",
				"name": "op129_body_title",
				"type": "string",
				"default": "",
				"description": "Request body field: title"
			},
			{
				"displayName": "Title Keyword",
				"name": "op129_body_titleKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: title.keyword"
			},
			{
				"displayName": "Vendor",
				"name": "op129_body_vendor",
				"type": "string",
				"default": "",
				"description": "Request body field: vendor"
			},
			{
				"displayName": "Vendor Keyword",
				"name": "op129_body_vendorKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: vendor.keyword"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op129_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"osPatches"
				],
				"operation": [
					"postOsPatches"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op130_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"osPatches"
				],
				"operation": [
					"postOsPatchesExport"
				]
			}
		},
		"options": [
			{
				"displayName": "Download",
				"name": "op130_body_download",
				"type": "boolean",
				"default": false,
				"description": "Request body field: download"
			},
			{
				"displayName": "Format",
				"name": "op130_body_format",
				"type": "string",
				"default": "csv",
				"description": "Request body field: format"
			},
			{
				"displayName": "Type",
				"name": "op130_body_type",
				"type": "string",
				"default": "string",
				"description": "Request body field: type"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op130_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"osPatches"
				],
				"operation": [
					"postOsPatchesExport"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op131_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"osPatches"
				],
				"operation": [
					"postOsPatchesSearchGroupby"
				]
			}
		},
		"options": [
			{
				"displayName": "Group By",
				"name": "op131_body_groupBy",
				"type": "string",
				"default": "account_id",
				"description": "Request body field: group_by"
			},
			{
				"displayName": "Next Cursor",
				"name": "op131_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Page Size",
				"name": "op131_body_pageSize",
				"type": "number",
				"default": 2000,
				"description": "Request body field: page_size"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op131_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"osPatches"
				],
				"operation": [
					"postOsPatchesSearchGroupby"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op133_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"postPolicies"
				]
			}
		},
		"options": [
			{
				"displayName": "Contents Policy Endpoint Interface Options Allow Run Threat Scan",
				"name": "op133_body_contentsPolicyEndpointInterfaceOptionsAllowRunThreatScan",
				"type": "boolean",
				"default": false,
				"description": "Request body field: contents.policy.endpoint_interface_options.allow_run_threat_scan"
			},
			{
				"displayName": "Contents Policy Endpoint Interface Options Display Rtp Events",
				"name": "op133_body_contentsPolicyEndpointInterfaceOptionsDisplayRtpEvents",
				"type": "boolean",
				"default": false,
				"description": "Request body field: contents.policy.endpoint_interface_options.display_rtp_events"
			},
			{
				"displayName": "Contents Policy Endpoint Interface Options Limit Endpoint Agent Control",
				"name": "op133_body_contentsPolicyEndpointInterfaceOptionsLimitEndpointAgentControl",
				"type": "boolean",
				"default": false,
				"description": "Request body field: contents.policy.endpoint_interface_options.limit_endpoint_agent_control"
			},
			{
				"displayName": "Contents Policy Endpoint Interface Options Show Threat Scan Shortcuts",
				"name": "op133_body_contentsPolicyEndpointInterfaceOptionsShowThreatScanShortcuts",
				"type": "boolean",
				"default": false,
				"description": "Request body field: contents.policy.endpoint_interface_options.show_threat_scan_shortcuts"
			},
			{
				"displayName": "Contents Policy Endpoint Interface Options Show Windows Contextmenu",
				"name": "op133_body_contentsPolicyEndpointInterfaceOptionsShowWindowsContextmenu",
				"type": "boolean",
				"default": false,
				"description": "Request body field: contents.policy.endpoint_interface_options.show_windows_contextmenu"
			},
			{
				"displayName": "Contents Policy Protect Service",
				"name": "op133_body_contentsPolicyProtectService",
				"type": "boolean",
				"default": false,
				"description": "Request body field: contents.policy.protect_service"
			},
			{
				"displayName": "Contents Policy Sirius Update Schedule",
				"name": "op133_body_contentsPolicySiriusUpdateSchedule",
				"type": "string",
				"default": "",
				"description": "Request body field: contents.policy.sirius_update_schedule"
			},
			{
				"displayName": "Contents Policy Startup Options Toggle On",
				"name": "op133_body_contentsPolicyStartupOptionsToggleOn",
				"type": "boolean",
				"default": false,
				"description": "Request body field: contents.policy.startup_options.toggle_on"
			},
			{
				"displayName": "Contents Schema Version",
				"name": "op133_body_contentsSchemaVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: contents.schema_version"
			},
			{
				"displayName": "Contents Status",
				"name": "op133_body_contentsStatus",
				"type": "string",
				"default": "",
				"description": "Request body field: contents.status"
			},
			{
				"displayName": "Name",
				"name": "op133_body_name",
				"type": "string",
				"default": "",
				"description": "Request body field: name"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op133_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"postPolicies"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op135_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"deletePoliciesById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op135_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"deletePoliciesById"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op136_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"getPoliciesById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Populate",
		"name": "op136_query_populate",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"getPoliciesById"
				]
			}
		},
		"description": "Query parameter: Populate"
	},
	{
		"displayName": "ID",
		"name": "op137_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"putPoliciesById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op137_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"putPoliciesById"
				]
			}
		},
		"options": [
			{
				"displayName": "Contents Policy Endpoint Interface Options Allow Run Threat Scan",
				"name": "op137_body_contentsPolicyEndpointInterfaceOptionsAllowRunThreatScan",
				"type": "boolean",
				"default": false,
				"description": "Request body field: contents.policy.endpoint_interface_options.allow_run_threat_scan"
			},
			{
				"displayName": "Contents Policy Endpoint Interface Options Display Rtp Events",
				"name": "op137_body_contentsPolicyEndpointInterfaceOptionsDisplayRtpEvents",
				"type": "boolean",
				"default": false,
				"description": "Request body field: contents.policy.endpoint_interface_options.display_rtp_events"
			},
			{
				"displayName": "Contents Policy Endpoint Interface Options Limit Endpoint Agent Control",
				"name": "op137_body_contentsPolicyEndpointInterfaceOptionsLimitEndpointAgentControl",
				"type": "boolean",
				"default": false,
				"description": "Request body field: contents.policy.endpoint_interface_options.limit_endpoint_agent_control"
			},
			{
				"displayName": "Contents Policy Endpoint Interface Options Show Threat Scan Shortcuts",
				"name": "op137_body_contentsPolicyEndpointInterfaceOptionsShowThreatScanShortcuts",
				"type": "boolean",
				"default": false,
				"description": "Request body field: contents.policy.endpoint_interface_options.show_threat_scan_shortcuts"
			},
			{
				"displayName": "Contents Policy Endpoint Interface Options Show Windows Contextmenu",
				"name": "op137_body_contentsPolicyEndpointInterfaceOptionsShowWindowsContextmenu",
				"type": "boolean",
				"default": false,
				"description": "Request body field: contents.policy.endpoint_interface_options.show_windows_contextmenu"
			},
			{
				"displayName": "Contents Policy Protect Service",
				"name": "op137_body_contentsPolicyProtectService",
				"type": "boolean",
				"default": false,
				"description": "Request body field: contents.policy.protect_service"
			},
			{
				"displayName": "Contents Policy Sirius Update Schedule",
				"name": "op137_body_contentsPolicySiriusUpdateSchedule",
				"type": "string",
				"default": "",
				"description": "Request body field: contents.policy.sirius_update_schedule"
			},
			{
				"displayName": "Contents Policy Startup Options Toggle On",
				"name": "op137_body_contentsPolicyStartupOptionsToggleOn",
				"type": "boolean",
				"default": false,
				"description": "Request body field: contents.policy.startup_options.toggle_on"
			},
			{
				"displayName": "Contents Schema Version",
				"name": "op137_body_contentsSchemaVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: contents.schema_version"
			},
			{
				"displayName": "Contents Status",
				"name": "op137_body_contentsStatus",
				"type": "string",
				"default": "",
				"description": "Request body field: contents.status"
			},
			{
				"displayName": "Etag",
				"name": "op137_body_etag",
				"type": "string",
				"default": "",
				"description": "Request body field: etag"
			},
			{
				"displayName": "Name",
				"name": "op137_body_name",
				"type": "string",
				"default": "",
				"description": "Request body field: name"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op137_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"putPoliciesById"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op138_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"deletePoliciesByIdIsolationImage"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op138_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"deletePoliciesByIdIsolationImage"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op139_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"getPoliciesByIdIsolationImage"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op140_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"postPoliciesByIdIsolationImage"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op140_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"postPoliciesByIdIsolationImage"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op141_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"putPoliciesByIdPromote"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op141_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"putPoliciesByIdPromote"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op142_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"getPoliciesByIdSecret"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op143_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"postPoliciesByIdSecret"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op143_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"postPoliciesByIdSecret"
				]
			}
		},
		"options": [
			{
				"displayName": "Name",
				"name": "op143_body_name",
				"type": "string",
				"default": "",
				"description": "Request body field: name"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op143_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"postPoliciesByIdSecret"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Source ID",
		"name": "op144_path_sourceId",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"postPoliciesBySourceIdClone"
				]
			}
		},
		"description": "Path parameter: Source ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op144_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"postPoliciesBySourceIdClone"
				]
			}
		},
		"options": [
			{
				"displayName": "Include Policy Exclusions",
				"name": "op144_body_includePolicyExclusions",
				"type": "boolean",
				"default": false,
				"description": "Request body field: include_policy_exclusions"
			},
			{
				"displayName": "Name",
				"name": "op144_body_name",
				"type": "string",
				"default": "",
				"description": "Request body field: name"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op144_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"policies"
				],
				"operation": [
					"postPoliciesBySourceIdClone"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op145_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"products"
				],
				"operation": [
					"postProducts"
				]
			}
		},
		"options": [
			{
				"displayName": "Next Cursor",
				"name": "op145_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Page Size",
				"name": "op145_body_pageSize",
				"type": "number",
				"default": 500,
				"description": "Request body field: page_size"
			},
			{
				"displayName": "Sort Field",
				"name": "op145_body_sortField",
				"type": "string",
				"default": "vendor_name",
				"description": "Request body field: sort_field"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op145_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"products"
				],
				"operation": [
					"postProducts"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op146_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"products"
				],
				"operation": [
					"postProductsVendors"
				]
			}
		},
		"options": [
			{
				"displayName": "Next Cursor",
				"name": "op146_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Page Size",
				"name": "op146_body_pageSize",
				"type": "number",
				"default": 500,
				"description": "Request body field: page_size"
			},
			{
				"displayName": "Sort Field",
				"name": "op146_body_sortField",
				"type": "string",
				"default": "vendor_name",
				"description": "Request body field: sort_field"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op146_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"products"
				],
				"operation": [
					"postProductsVendors"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Next Cursor",
		"name": "op147_query_nextCursor",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"quarantine"
				],
				"operation": [
					"getQuarantine"
				]
			}
		},
		"description": "Query parameter: Next Cursor"
	},
	{
		"displayName": "Name",
		"name": "op147_query_name",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"quarantine"
				],
				"operation": [
					"getQuarantine"
				]
			}
		},
		"description": "Query parameter: Name"
	},
	{
		"displayName": "Category",
		"name": "op147_query_category",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"quarantine"
				],
				"operation": [
					"getQuarantine"
				]
			}
		},
		"description": "Query parameter: Category"
	},
	{
		"displayName": "Type",
		"name": "op147_query_type",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"quarantine"
				],
				"operation": [
					"getQuarantine"
				]
			}
		},
		"description": "Query parameter: Type"
	},
	{
		"displayName": "Since",
		"name": "op147_query_since",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"quarantine"
				],
				"operation": [
					"getQuarantine"
				]
			}
		},
		"description": "Query parameter: Since"
	},
	{
		"displayName": "Until",
		"name": "op147_query_until",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"quarantine"
				],
				"operation": [
					"getQuarantine"
				]
			}
		},
		"description": "Query parameter: Until"
	},
	{
		"displayName": "Body Fields",
		"name": "op148_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"quarantine"
				],
				"operation": [
					"postQuarantineAction"
				]
			}
		},
		"options": [
			{
				"displayName": "Command",
				"name": "op148_body_command",
				"type": "string",
				"default": "command.threat.quarantine.restore",
				"description": "Request body field: command"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op148_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"quarantine"
				],
				"operation": [
					"postQuarantineAction"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op149_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"quarantine"
				],
				"operation": [
					"postQuarantineExport"
				]
			}
		},
		"options": [
			{
				"displayName": "Download",
				"name": "op149_body_download",
				"type": "boolean",
				"default": false,
				"description": "Request body field: download"
			},
			{
				"displayName": "Filename",
				"name": "op149_body_filename",
				"type": "string",
				"default": "",
				"description": "Request body field: filename"
			},
			{
				"displayName": "Format",
				"name": "op149_body_format",
				"type": "string",
				"default": "csv",
				"description": "Request body field: format"
			},
			{
				"displayName": "Type",
				"name": "op149_body_type",
				"type": "string",
				"default": "string",
				"description": "Request body field: type"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op149_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"quarantine"
				],
				"operation": [
					"postQuarantineExport"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "JSON Body",
		"name": "op150_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"reports"
				],
				"operation": [
					"deleteReports"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "Body Fields",
		"name": "op152_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"reports"
				],
				"operation": [
					"postReports"
				]
			}
		},
		"options": [
			{
				"displayName": "Email Subject",
				"name": "op152_body_emailSubject",
				"type": "string",
				"default": "",
				"description": "Request body field: email_subject"
			},
			{
				"displayName": "Format",
				"name": "op152_body_format",
				"type": "string",
				"default": "csv",
				"description": "Request body field: format"
			},
			{
				"displayName": "Name",
				"name": "op152_body_name",
				"type": "string",
				"default": "",
				"description": "Request body field: name"
			},
			{
				"displayName": "Notes",
				"name": "op152_body_notes",
				"type": "string",
				"default": "",
				"description": "Request body field: notes"
			},
			{
				"displayName": "Period",
				"name": "op152_body_period",
				"type": "number",
				"default": 0,
				"description": "Request body field: period"
			},
			{
				"displayName": "Recurrence Recur",
				"name": "op152_body_recurrenceRecur",
				"type": "string",
				"default": "Daily",
				"description": "Request body field: recurrence.recur"
			},
			{
				"displayName": "Time Zone",
				"name": "op152_body_timeZone",
				"type": "string",
				"default": "",
				"description": "Request body field: time_zone"
			},
			{
				"displayName": "Type",
				"name": "op152_body_type",
				"type": "string",
				"default": "Detections",
				"description": "Request body field: type"
			},
			{
				"displayName": "Units",
				"name": "op152_body_units",
				"type": "string",
				"default": "Days",
				"description": "Request body field: units"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op152_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"reports"
				],
				"operation": [
					"postReports"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op153_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"reports"
				],
				"operation": [
					"deleteReportsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op153_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"reports"
				],
				"operation": [
					"deleteReportsById"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op154_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"reports"
				],
				"operation": [
					"getReportsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op155_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"reports"
				],
				"operation": [
					"putReportsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op155_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"reports"
				],
				"operation": [
					"putReportsById"
				]
			}
		},
		"options": [
			{
				"displayName": "Email Subject",
				"name": "op155_body_emailSubject",
				"type": "string",
				"default": "",
				"description": "Request body field: email_subject"
			},
			{
				"displayName": "Format",
				"name": "op155_body_format",
				"type": "string",
				"default": "csv",
				"description": "Request body field: format"
			},
			{
				"displayName": "Name",
				"name": "op155_body_name",
				"type": "string",
				"default": "",
				"description": "Request body field: name"
			},
			{
				"displayName": "Notes",
				"name": "op155_body_notes",
				"type": "string",
				"default": "",
				"description": "Request body field: notes"
			},
			{
				"displayName": "Period",
				"name": "op155_body_period",
				"type": "number",
				"default": 0,
				"description": "Request body field: period"
			},
			{
				"displayName": "Recurrence Recur",
				"name": "op155_body_recurrenceRecur",
				"type": "string",
				"default": "Daily",
				"description": "Request body field: recurrence.recur"
			},
			{
				"displayName": "Time Zone",
				"name": "op155_body_timeZone",
				"type": "string",
				"default": "",
				"description": "Request body field: time_zone"
			},
			{
				"displayName": "Type",
				"name": "op155_body_type",
				"type": "string",
				"default": "Detections",
				"description": "Request body field: type"
			},
			{
				"displayName": "Units",
				"name": "op155_body_units",
				"type": "string",
				"default": "Days",
				"description": "Request body field: units"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op155_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"reports"
				],
				"operation": [
					"putReportsById"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op156_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"reports"
				],
				"operation": [
					"postReportsByIdGenerate"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op156_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"reports"
				],
				"operation": [
					"postReportsByIdGenerate"
				]
			}
		},
		"options": [
			{
				"displayName": "End",
				"name": "op156_body_end",
				"type": "string",
				"default": "",
				"description": "Request body field: end"
			},
			{
				"displayName": "Start",
				"name": "op156_body_start",
				"type": "string",
				"default": "",
				"description": "Request body field: start"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op156_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"reports"
				],
				"operation": [
					"postReportsByIdGenerate"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op157_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"rid"
				],
				"operation": [
					"postRidRules"
				]
			}
		},
		"options": [
			{
				"displayName": "Account Name",
				"name": "op157_body_accountName",
				"type": "string",
				"default": "",
				"description": "Request body field: account_name"
			},
			{
				"displayName": "Account Name Keyword",
				"name": "op157_body_accountNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: account_name.keyword"
			},
			{
				"displayName": "Attack User",
				"name": "op157_body_attackUser",
				"type": "string",
				"default": "",
				"description": "Request body field: attack_user"
			},
			{
				"displayName": "Attack User Keyword",
				"name": "op157_body_attackUserKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: attack_user.keyword"
			},
			{
				"displayName": "Create Time After",
				"name": "op157_body_createTimeAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: create_time_after"
			},
			{
				"displayName": "Create Time Before",
				"name": "op157_body_createTimeBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: create_time_before"
			},
			{
				"displayName": "Deleted",
				"name": "op157_body_deleted",
				"type": "boolean",
				"default": false,
				"description": "Request body field: deleted"
			},
			{
				"displayName": "Destination Location City",
				"name": "op157_body_destinationLocationCity",
				"type": "string",
				"default": "",
				"description": "Request body field: destination_location.city"
			},
			{
				"displayName": "Destination Location City Keyword",
				"name": "op157_body_destinationLocationCityKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: destination_location.city.keyword"
			},
			{
				"displayName": "Destination Location Continent",
				"name": "op157_body_destinationLocationContinent",
				"type": "string",
				"default": "",
				"description": "Request body field: destination_location.continent"
			},
			{
				"displayName": "Destination Location Continent Keyword",
				"name": "op157_body_destinationLocationContinentKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: destination_location.continent.keyword"
			},
			{
				"displayName": "Destination Location Country",
				"name": "op157_body_destinationLocationCountry",
				"type": "string",
				"default": "",
				"description": "Request body field: destination_location.country"
			},
			{
				"displayName": "Destination Location Country Keyword",
				"name": "op157_body_destinationLocationCountryKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: destination_location.country.keyword"
			},
			{
				"displayName": "Destination Location Country Iso",
				"name": "op157_body_destinationLocationCountryIso",
				"type": "string",
				"default": "",
				"description": "Request body field: destination_location.country_iso"
			},
			{
				"displayName": "Destination Location Country Iso Keyword",
				"name": "op157_body_destinationLocationCountryIsoKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: destination_location.country_iso.keyword"
			},
			{
				"displayName": "Destination Location Postal Code",
				"name": "op157_body_destinationLocationPostalCode",
				"type": "string",
				"default": "",
				"description": "Request body field: destination_location.postal_code"
			},
			{
				"displayName": "Destination Location Postal Code Keyword",
				"name": "op157_body_destinationLocationPostalCodeKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: destination_location.postal_code.keyword"
			},
			{
				"displayName": "Destination Location Subdivisions",
				"name": "op157_body_destinationLocationSubdivisions",
				"type": "string",
				"default": "",
				"description": "Request body field: destination_location.subdivisions"
			},
			{
				"displayName": "Destination Location Subdivisions Keyword",
				"name": "op157_body_destinationLocationSubdivisionsKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: destination_location.subdivisions.keyword"
			},
			{
				"displayName": "Destination Location Time Zone",
				"name": "op157_body_destinationLocationTimeZone",
				"type": "string",
				"default": "",
				"description": "Request body field: destination_location.time_zone"
			},
			{
				"displayName": "Destination Location Time Zone Keyword",
				"name": "op157_body_destinationLocationTimeZoneKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: destination_location.time_zone.keyword"
			},
			{
				"displayName": "Domain Name",
				"name": "op157_body_domainName",
				"type": "string",
				"default": "",
				"description": "Request body field: domain_name"
			},
			{
				"displayName": "Domain Name Keyword",
				"name": "op157_body_domainNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: domain_name.keyword"
			},
			{
				"displayName": "Engine Version",
				"name": "op157_body_engineVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: engine_version"
			},
			{
				"displayName": "Engine Version Keyword",
				"name": "op157_body_engineVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: engine_version.keyword"
			},
			{
				"displayName": "Expire Time After",
				"name": "op157_body_expireTimeAfter",
				"type": "string",
				"default": "",
				"description": "Request body field: expire_time_after"
			},
			{
				"displayName": "Expire Time Before",
				"name": "op157_body_expireTimeBefore",
				"type": "string",
				"default": "",
				"description": "Request body field: expire_time_before"
			},
			{
				"displayName": "Fully Qualified Host Name",
				"name": "op157_body_fullyQualifiedHostName",
				"type": "string",
				"default": "",
				"description": "Request body field: fully_qualified_host_name"
			},
			{
				"displayName": "Fully Qualified Host Name Keyword",
				"name": "op157_body_fullyQualifiedHostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: fully_qualified_host_name.keyword"
			},
			{
				"displayName": "Group ID",
				"name": "op157_body_groupId",
				"type": "string",
				"default": "",
				"description": "Request body field: group_id"
			},
			{
				"displayName": "Group ID Keyword",
				"name": "op157_body_groupIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: group_id.keyword"
			},
			{
				"displayName": "Group Name",
				"name": "op157_body_groupName",
				"type": "string",
				"default": "",
				"description": "Request body field: group_name"
			},
			{
				"displayName": "Group Name Keyword",
				"name": "op157_body_groupNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: group_name.keyword"
			},
			{
				"displayName": "Host Name",
				"name": "op157_body_hostName",
				"type": "string",
				"default": "",
				"description": "Request body field: host_name"
			},
			{
				"displayName": "Host Name Keyword",
				"name": "op157_body_hostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: host_name.keyword"
			},
			{
				"displayName": "ID",
				"name": "op157_body_id",
				"type": "string",
				"default": "",
				"description": "Request body field: id"
			},
			{
				"displayName": "ID Keyword",
				"name": "op157_body_idKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: id.keyword"
			},
			{
				"displayName": "Ip",
				"name": "op157_body_ip",
				"type": "string",
				"default": "",
				"description": "Request body field: ip"
			},
			{
				"displayName": "Last User",
				"name": "op157_body_lastUser",
				"type": "string",
				"default": "",
				"description": "Request body field: last_user"
			},
			{
				"displayName": "Last User Keyword",
				"name": "op157_body_lastUserKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: last_user.keyword"
			},
			{
				"displayName": "Machine ID",
				"name": "op157_body_machineId",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_id"
			},
			{
				"displayName": "Machine ID Keyword",
				"name": "op157_body_machineIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_id.keyword"
			},
			{
				"displayName": "Machine Ip",
				"name": "op157_body_machineIp",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_ip"
			},
			{
				"displayName": "Machine Name",
				"name": "op157_body_machineName",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_name"
			},
			{
				"displayName": "Machine Name Keyword",
				"name": "op157_body_machineNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: machine_name.keyword"
			},
			{
				"displayName": "Next Cursor",
				"name": "op157_body_nextCursor",
				"type": "string",
				"default": "",
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Nics Description",
				"name": "op157_body_nicsDescription",
				"type": "string",
				"default": "",
				"description": "Request body field: nics.description"
			},
			{
				"displayName": "Nics Description Keyword",
				"name": "op157_body_nicsDescriptionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: nics.description.keyword"
			},
			{
				"displayName": "Nics Mac Address",
				"name": "op157_body_nicsMacAddress",
				"type": "string",
				"default": "",
				"description": "Request body field: nics.mac_address"
			},
			{
				"displayName": "Nics Mac Address Keyword",
				"name": "op157_body_nicsMacAddressKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: nics.mac_address.keyword"
			},
			{
				"displayName": "Not Account Name",
				"name": "op157_body_notAccountName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.account_name"
			},
			{
				"displayName": "Not Account Name Keyword",
				"name": "op157_body_notAccountNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.account_name.keyword"
			},
			{
				"displayName": "Not Attack User",
				"name": "op157_body_notAttackUser",
				"type": "string",
				"default": "",
				"description": "Request body field: not.attack_user"
			},
			{
				"displayName": "Not Attack User Keyword",
				"name": "op157_body_notAttackUserKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.attack_user.keyword"
			},
			{
				"displayName": "Not Destination Location City",
				"name": "op157_body_notDestinationLocationCity",
				"type": "string",
				"default": "",
				"description": "Request body field: not.destination_location.city"
			},
			{
				"displayName": "Not Destination Location City Keyword",
				"name": "op157_body_notDestinationLocationCityKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.destination_location.city.keyword"
			},
			{
				"displayName": "Not Destination Location Continent",
				"name": "op157_body_notDestinationLocationContinent",
				"type": "string",
				"default": "",
				"description": "Request body field: not.destination_location.continent"
			},
			{
				"displayName": "Not Destination Location Continent Keyword",
				"name": "op157_body_notDestinationLocationContinentKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.destination_location.continent.keyword"
			},
			{
				"displayName": "Not Destination Location Country",
				"name": "op157_body_notDestinationLocationCountry",
				"type": "string",
				"default": "",
				"description": "Request body field: not.destination_location.country"
			},
			{
				"displayName": "Not Destination Location Country Keyword",
				"name": "op157_body_notDestinationLocationCountryKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.destination_location.country.keyword"
			},
			{
				"displayName": "Not Destination Location Country Iso",
				"name": "op157_body_notDestinationLocationCountryIso",
				"type": "string",
				"default": "",
				"description": "Request body field: not.destination_location.country_iso"
			},
			{
				"displayName": "Not Destination Location Country Iso Keyword",
				"name": "op157_body_notDestinationLocationCountryIsoKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.destination_location.country_iso.keyword"
			},
			{
				"displayName": "Not Destination Location Postal Code",
				"name": "op157_body_notDestinationLocationPostalCode",
				"type": "string",
				"default": "",
				"description": "Request body field: not.destination_location.postal_code"
			},
			{
				"displayName": "Not Destination Location Postal Code Keyword",
				"name": "op157_body_notDestinationLocationPostalCodeKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.destination_location.postal_code.keyword"
			},
			{
				"displayName": "Not Destination Location Subdivisions",
				"name": "op157_body_notDestinationLocationSubdivisions",
				"type": "string",
				"default": "",
				"description": "Request body field: not.destination_location.subdivisions"
			},
			{
				"displayName": "Not Destination Location Subdivisions Keyword",
				"name": "op157_body_notDestinationLocationSubdivisionsKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.destination_location.subdivisions.keyword"
			},
			{
				"displayName": "Not Destination Location Time Zone",
				"name": "op157_body_notDestinationLocationTimeZone",
				"type": "string",
				"default": "",
				"description": "Request body field: not.destination_location.time_zone"
			},
			{
				"displayName": "Not Destination Location Time Zone Keyword",
				"name": "op157_body_notDestinationLocationTimeZoneKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.destination_location.time_zone.keyword"
			},
			{
				"displayName": "Not Domain Name",
				"name": "op157_body_notDomainName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.domain_name"
			},
			{
				"displayName": "Not Domain Name Keyword",
				"name": "op157_body_notDomainNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.domain_name.keyword"
			},
			{
				"displayName": "Not Engine Version",
				"name": "op157_body_notEngineVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.engine_version"
			},
			{
				"displayName": "Not Engine Version Keyword",
				"name": "op157_body_notEngineVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.engine_version.keyword"
			},
			{
				"displayName": "Not Fully Qualified Host Name",
				"name": "op157_body_notFullyQualifiedHostName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.fully_qualified_host_name"
			},
			{
				"displayName": "Not Fully Qualified Host Name Keyword",
				"name": "op157_body_notFullyQualifiedHostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.fully_qualified_host_name.keyword"
			},
			{
				"displayName": "Not Group ID",
				"name": "op157_body_notGroupId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.group_id"
			},
			{
				"displayName": "Not Group ID Keyword",
				"name": "op157_body_notGroupIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.group_id.keyword"
			},
			{
				"displayName": "Not Group Name",
				"name": "op157_body_notGroupName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.group_name"
			},
			{
				"displayName": "Not Group Name Keyword",
				"name": "op157_body_notGroupNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.group_name.keyword"
			},
			{
				"displayName": "Not Host Name",
				"name": "op157_body_notHostName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.host_name"
			},
			{
				"displayName": "Not Host Name Keyword",
				"name": "op157_body_notHostNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.host_name.keyword"
			},
			{
				"displayName": "Not ID",
				"name": "op157_body_notId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.id"
			},
			{
				"displayName": "Not ID Keyword",
				"name": "op157_body_notIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.id.keyword"
			},
			{
				"displayName": "Not Ip",
				"name": "op157_body_notIp",
				"type": "string",
				"default": "",
				"description": "Request body field: not.ip"
			},
			{
				"displayName": "Not Last User",
				"name": "op157_body_notLastUser",
				"type": "string",
				"default": "",
				"description": "Request body field: not.last_user"
			},
			{
				"displayName": "Not Last User Keyword",
				"name": "op157_body_notLastUserKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.last_user.keyword"
			},
			{
				"displayName": "Not Machine ID",
				"name": "op157_body_notMachineId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.machine_id"
			},
			{
				"displayName": "Not Machine ID Keyword",
				"name": "op157_body_notMachineIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.machine_id.keyword"
			},
			{
				"displayName": "Not Machine Ip",
				"name": "op157_body_notMachineIp",
				"type": "string",
				"default": "",
				"description": "Request body field: not.machine_ip"
			},
			{
				"displayName": "Not Machine Name",
				"name": "op157_body_notMachineName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.machine_name"
			},
			{
				"displayName": "Not Machine Name Keyword",
				"name": "op157_body_notMachineNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.machine_name.keyword"
			},
			{
				"displayName": "Not Nics Description",
				"name": "op157_body_notNicsDescription",
				"type": "string",
				"default": "",
				"description": "Request body field: not.nics.description"
			},
			{
				"displayName": "Not Nics Description Keyword",
				"name": "op157_body_notNicsDescriptionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.nics.description.keyword"
			},
			{
				"displayName": "Not Nics Mac Address",
				"name": "op157_body_notNicsMacAddress",
				"type": "string",
				"default": "",
				"description": "Request body field: not.nics.mac_address"
			},
			{
				"displayName": "Not Nics Mac Address Keyword",
				"name": "op157_body_notNicsMacAddressKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.nics.mac_address.keyword"
			},
			{
				"displayName": "Not Origin ID",
				"name": "op157_body_notOriginId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.origin_id"
			},
			{
				"displayName": "Not Origin ID Keyword",
				"name": "op157_body_notOriginIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.origin_id.keyword"
			},
			{
				"displayName": "Not OS Info OS Architecture",
				"name": "op157_body_notOsInfoOsArchitecture",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_architecture"
			},
			{
				"displayName": "Not OS Info OS Architecture Keyword",
				"name": "op157_body_notOsInfoOsArchitectureKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_architecture.keyword"
			},
			{
				"displayName": "Not OS Info OS Platform",
				"name": "op157_body_notOsInfoOsPlatform",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_platform"
			},
			{
				"displayName": "Not OS Info OS Platform Keyword",
				"name": "op157_body_notOsInfoOsPlatformKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_platform.keyword"
			},
			{
				"displayName": "Not OS Info OS Release Name",
				"name": "op157_body_notOsInfoOsReleaseName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_release_name"
			},
			{
				"displayName": "Not OS Info OS Release Name Keyword",
				"name": "op157_body_notOsInfoOsReleaseNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_release_name.keyword"
			},
			{
				"displayName": "Not OS Info OS Type",
				"name": "op157_body_notOsInfoOsType",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_type"
			},
			{
				"displayName": "Not OS Info OS Type Keyword",
				"name": "op157_body_notOsInfoOsTypeKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_type.keyword"
			},
			{
				"displayName": "Not OS Info OS Version",
				"name": "op157_body_notOsInfoOsVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_version"
			},
			{
				"displayName": "Not OS Info OS Version Keyword",
				"name": "op157_body_notOsInfoOsVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.os_info.os_version.keyword"
			},
			{
				"displayName": "Not Plugins Asset Manager Plugin Version",
				"name": "op157_body_notPluginsAssetManagerPluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.asset_manager.plugin_version"
			},
			{
				"displayName": "Not Plugins Asset Manager Plugin Version Keyword",
				"name": "op157_body_notPluginsAssetManagerPluginVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.asset_manager.plugin_version.keyword"
			},
			{
				"displayName": "Not Plugins Asset Manager Reboot Reasons",
				"name": "op157_body_notPluginsAssetManagerRebootReasons",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.asset_manager.reboot_reasons"
			},
			{
				"displayName": "Not Plugins Asset Manager Reboot Reasons Keyword",
				"name": "op157_body_notPluginsAssetManagerRebootReasonsKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.asset_manager.reboot_reasons.keyword"
			},
			{
				"displayName": "Not Plugins Endpoint Detection And Response Plugin Version",
				"name": "op157_body_notPluginsEndpointDetectionAndResponsePluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.endpoint_detection_and_response.plugin_version"
			},
			{
				"displayName": "Not Plugins Endpoint Detection And Response Plugin Version Keyword",
				"name": "op157_body_notPluginsEndpointDetectionAndResponsePluginVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.endpoint_detection_and_response.plugin_version.keyword"
			},
			{
				"displayName": "Not Plugins Endpoint Detection And Response Reboot Reasons",
				"name": "op157_body_notPluginsEndpointDetectionAndResponseRebootReasons",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.endpoint_detection_and_response.reboot_reasons"
			},
			{
				"displayName": "Not Plugins Endpoint Detection And Response Reboot Reasons Keyword",
				"name": "op157_body_notPluginsEndpointDetectionAndResponseRebootReasonsKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.endpoint_detection_and_response.reboot_reasons.keyword"
			},
			{
				"displayName": "Not Plugins Endpoint Protection Component Package Version",
				"name": "op157_body_notPluginsEndpointProtectionComponentPackageVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.endpoint_protection.component_package_version"
			},
			{
				"displayName": "Not Plugins Endpoint Protection Component Package Version Keyword",
				"name": "op157_body_notPluginsEndpointProtectionComponentPackageVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.endpoint_protection.component_package_version.keyword"
			},
			{
				"displayName": "Not Plugins Endpoint Protection Plugin Version",
				"name": "op157_body_notPluginsEndpointProtectionPluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.endpoint_protection.plugin_version"
			},
			{
				"displayName": "Not Plugins Endpoint Protection Plugin Version Keyword",
				"name": "op157_body_notPluginsEndpointProtectionPluginVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.endpoint_protection.plugin_version.keyword"
			},
			{
				"displayName": "Not Plugins Endpoint Protection Reboot Reasons",
				"name": "op157_body_notPluginsEndpointProtectionRebootReasons",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.endpoint_protection.reboot_reasons"
			},
			{
				"displayName": "Not Plugins Endpoint Protection Reboot Reasons Keyword",
				"name": "op157_body_notPluginsEndpointProtectionRebootReasonsKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.endpoint_protection.reboot_reasons.keyword"
			},
			{
				"displayName": "Not Plugins Endpoint Protection Sdk Version",
				"name": "op157_body_notPluginsEndpointProtectionSdkVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.endpoint_protection.sdk_version"
			},
			{
				"displayName": "Not Plugins Endpoint Protection Sdk Version Keyword",
				"name": "op157_body_notPluginsEndpointProtectionSdkVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.endpoint_protection.sdk_version.keyword"
			},
			{
				"displayName": "Not Plugins Endpoint Protection Update Package Version",
				"name": "op157_body_notPluginsEndpointProtectionUpdatePackageVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.endpoint_protection.update_package_version"
			},
			{
				"displayName": "Not Plugins Endpoint Protection Update Package Version Keyword",
				"name": "op157_body_notPluginsEndpointProtectionUpdatePackageVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.endpoint_protection.update_package_version.keyword"
			},
			{
				"displayName": "Not Plugins Incident Response Plugin Version",
				"name": "op157_body_notPluginsIncidentResponsePluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.incident_response.plugin_version"
			},
			{
				"displayName": "Not Plugins Incident Response Plugin Version Keyword",
				"name": "op157_body_notPluginsIncidentResponsePluginVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.incident_response.plugin_version.keyword"
			},
			{
				"displayName": "Not Plugins Incident Response Reboot Reasons",
				"name": "op157_body_notPluginsIncidentResponseRebootReasons",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.incident_response.reboot_reasons"
			},
			{
				"displayName": "Not Plugins Incident Response Reboot Reasons Keyword",
				"name": "op157_body_notPluginsIncidentResponseRebootReasonsKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.incident_response.reboot_reasons.keyword"
			},
			{
				"displayName": "Not Plugins Siem Plugin Version",
				"name": "op157_body_notPluginsSiemPluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.siem.plugin_version"
			},
			{
				"displayName": "Not Plugins Siem Plugin Version Keyword",
				"name": "op157_body_notPluginsSiemPluginVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.siem.plugin_version.keyword"
			},
			{
				"displayName": "Not Plugins Siem Reboot Reasons",
				"name": "op157_body_notPluginsSiemRebootReasons",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.siem.reboot_reasons"
			},
			{
				"displayName": "Not Plugins Siem Reboot Reasons Keyword",
				"name": "op157_body_notPluginsSiemRebootReasonsKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.plugins.siem.reboot_reasons.keyword"
			},
			{
				"displayName": "Not Policy Etag",
				"name": "op157_body_notPolicyEtag",
				"type": "string",
				"default": "",
				"description": "Request body field: not.policy_etag"
			},
			{
				"displayName": "Not Policy Etag Keyword",
				"name": "op157_body_notPolicyEtagKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.policy_etag.keyword"
			},
			{
				"displayName": "Not Policy ID",
				"name": "op157_body_notPolicyId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.policy_id"
			},
			{
				"displayName": "Not Policy ID Keyword",
				"name": "op157_body_notPolicyIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.policy_id.keyword"
			},
			{
				"displayName": "Not Policy Name",
				"name": "op157_body_notPolicyName",
				"type": "string",
				"default": "",
				"description": "Request body field: not.policy_name"
			},
			{
				"displayName": "Not Policy Name Keyword",
				"name": "op157_body_notPolicyNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.policy_name.keyword"
			},
			{
				"displayName": "Not Protocol",
				"name": "op157_body_notProtocol",
				"type": "string",
				"default": "",
				"description": "Request body field: not.protocol"
			},
			{
				"displayName": "Not Protocol Keyword",
				"name": "op157_body_notProtocolKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.protocol.keyword"
			},
			{
				"displayName": "Not Root Group ID",
				"name": "op157_body_notRootGroupId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.root_group_id"
			},
			{
				"displayName": "Not Root Group ID Keyword",
				"name": "op157_body_notRootGroupIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.root_group_id.keyword"
			},
			{
				"displayName": "Not Rule ID",
				"name": "op157_body_notRuleId",
				"type": "string",
				"default": "",
				"description": "Request body field: not.rule_id"
			},
			{
				"displayName": "Not Rule ID Keyword",
				"name": "op157_body_notRuleIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.rule_id.keyword"
			},
			{
				"displayName": "Not Source Location City",
				"name": "op157_body_notSourceLocationCity",
				"type": "string",
				"default": "",
				"description": "Request body field: not.source_location.city"
			},
			{
				"displayName": "Not Source Location City Keyword",
				"name": "op157_body_notSourceLocationCityKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.source_location.city.keyword"
			},
			{
				"displayName": "Not Source Location Continent",
				"name": "op157_body_notSourceLocationContinent",
				"type": "string",
				"default": "",
				"description": "Request body field: not.source_location.continent"
			},
			{
				"displayName": "Not Source Location Continent Keyword",
				"name": "op157_body_notSourceLocationContinentKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.source_location.continent.keyword"
			},
			{
				"displayName": "Not Source Location Country",
				"name": "op157_body_notSourceLocationCountry",
				"type": "string",
				"default": "",
				"description": "Request body field: not.source_location.country"
			},
			{
				"displayName": "Not Source Location Country Keyword",
				"name": "op157_body_notSourceLocationCountryKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.source_location.country.keyword"
			},
			{
				"displayName": "Not Source Location Country Iso",
				"name": "op157_body_notSourceLocationCountryIso",
				"type": "string",
				"default": "",
				"description": "Request body field: not.source_location.country_iso"
			},
			{
				"displayName": "Not Source Location Country Iso Keyword",
				"name": "op157_body_notSourceLocationCountryIsoKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.source_location.country_iso.keyword"
			},
			{
				"displayName": "Not Source Location Postal Code",
				"name": "op157_body_notSourceLocationPostalCode",
				"type": "string",
				"default": "",
				"description": "Request body field: not.source_location.postal_code"
			},
			{
				"displayName": "Not Source Location Postal Code Keyword",
				"name": "op157_body_notSourceLocationPostalCodeKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.source_location.postal_code.keyword"
			},
			{
				"displayName": "Not Source Location Subdivisions",
				"name": "op157_body_notSourceLocationSubdivisions",
				"type": "string",
				"default": "",
				"description": "Request body field: not.source_location.subdivisions"
			},
			{
				"displayName": "Not Source Location Subdivisions Keyword",
				"name": "op157_body_notSourceLocationSubdivisionsKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.source_location.subdivisions.keyword"
			},
			{
				"displayName": "Not Source Location Time Zone",
				"name": "op157_body_notSourceLocationTimeZone",
				"type": "string",
				"default": "",
				"description": "Request body field: not.source_location.time_zone"
			},
			{
				"displayName": "Not Source Location Time Zone Keyword",
				"name": "op157_body_notSourceLocationTimeZoneKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: not.source_location.time_zone.keyword"
			},
			{
				"displayName": "Origin ID",
				"name": "op157_body_originId",
				"type": "string",
				"default": "",
				"description": "Request body field: origin_id"
			},
			{
				"displayName": "Origin ID Keyword",
				"name": "op157_body_originIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: origin_id.keyword"
			},
			{
				"displayName": "OS Info OS Architecture",
				"name": "op157_body_osInfoOsArchitecture",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_architecture"
			},
			{
				"displayName": "OS Info OS Architecture Keyword",
				"name": "op157_body_osInfoOsArchitectureKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_architecture.keyword"
			},
			{
				"displayName": "OS Info OS Platform",
				"name": "op157_body_osInfoOsPlatform",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_platform"
			},
			{
				"displayName": "OS Info OS Platform Keyword",
				"name": "op157_body_osInfoOsPlatformKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_platform.keyword"
			},
			{
				"displayName": "OS Info OS Release Name",
				"name": "op157_body_osInfoOsReleaseName",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_release_name"
			},
			{
				"displayName": "OS Info OS Release Name Keyword",
				"name": "op157_body_osInfoOsReleaseNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_release_name.keyword"
			},
			{
				"displayName": "OS Info OS Type",
				"name": "op157_body_osInfoOsType",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_type"
			},
			{
				"displayName": "OS Info OS Type Keyword",
				"name": "op157_body_osInfoOsTypeKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_type.keyword"
			},
			{
				"displayName": "OS Info OS Version",
				"name": "op157_body_osInfoOsVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_version"
			},
			{
				"displayName": "OS Info OS Version Keyword",
				"name": "op157_body_osInfoOsVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: os_info.os_version.keyword"
			},
			{
				"displayName": "Page Size",
				"name": "op157_body_pageSize",
				"type": "number",
				"default": 50,
				"description": "Request body field: page_size"
			},
			{
				"displayName": "Plugins Asset Manager Plugin Version",
				"name": "op157_body_pluginsAssetManagerPluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.asset_manager.plugin_version"
			},
			{
				"displayName": "Plugins Asset Manager Plugin Version Keyword",
				"name": "op157_body_pluginsAssetManagerPluginVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.asset_manager.plugin_version.keyword"
			},
			{
				"displayName": "Plugins Asset Manager Reboot Reasons",
				"name": "op157_body_pluginsAssetManagerRebootReasons",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.asset_manager.reboot_reasons"
			},
			{
				"displayName": "Plugins Asset Manager Reboot Reasons Keyword",
				"name": "op157_body_pluginsAssetManagerRebootReasonsKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.asset_manager.reboot_reasons.keyword"
			},
			{
				"displayName": "Plugins Endpoint Detection And Response Plugin Version",
				"name": "op157_body_pluginsEndpointDetectionAndResponsePluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_detection_and_response.plugin_version"
			},
			{
				"displayName": "Plugins Endpoint Detection And Response Plugin Version Keyword",
				"name": "op157_body_pluginsEndpointDetectionAndResponsePluginVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_detection_and_response.plugin_version.keyword"
			},
			{
				"displayName": "Plugins Endpoint Detection And Response Reboot Reasons",
				"name": "op157_body_pluginsEndpointDetectionAndResponseRebootReasons",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_detection_and_response.reboot_reasons"
			},
			{
				"displayName": "Plugins Endpoint Detection And Response Reboot Reasons Keyword",
				"name": "op157_body_pluginsEndpointDetectionAndResponseRebootReasonsKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_detection_and_response.reboot_reasons.keyword"
			},
			{
				"displayName": "Plugins Endpoint Protection Component Package Version",
				"name": "op157_body_pluginsEndpointProtectionComponentPackageVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.component_package_version"
			},
			{
				"displayName": "Plugins Endpoint Protection Component Package Version Keyword",
				"name": "op157_body_pluginsEndpointProtectionComponentPackageVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.component_package_version.keyword"
			},
			{
				"displayName": "Plugins Endpoint Protection Plugin Version",
				"name": "op157_body_pluginsEndpointProtectionPluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.plugin_version"
			},
			{
				"displayName": "Plugins Endpoint Protection Plugin Version Keyword",
				"name": "op157_body_pluginsEndpointProtectionPluginVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.plugin_version.keyword"
			},
			{
				"displayName": "Plugins Endpoint Protection Reboot Reasons",
				"name": "op157_body_pluginsEndpointProtectionRebootReasons",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.reboot_reasons"
			},
			{
				"displayName": "Plugins Endpoint Protection Reboot Reasons Keyword",
				"name": "op157_body_pluginsEndpointProtectionRebootReasonsKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.reboot_reasons.keyword"
			},
			{
				"displayName": "Plugins Endpoint Protection Sdk Version",
				"name": "op157_body_pluginsEndpointProtectionSdkVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.sdk_version"
			},
			{
				"displayName": "Plugins Endpoint Protection Sdk Version Keyword",
				"name": "op157_body_pluginsEndpointProtectionSdkVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.sdk_version.keyword"
			},
			{
				"displayName": "Plugins Endpoint Protection Update Package Version",
				"name": "op157_body_pluginsEndpointProtectionUpdatePackageVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.update_package_version"
			},
			{
				"displayName": "Plugins Endpoint Protection Update Package Version Keyword",
				"name": "op157_body_pluginsEndpointProtectionUpdatePackageVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.endpoint_protection.update_package_version.keyword"
			},
			{
				"displayName": "Plugins Incident Response Plugin Version",
				"name": "op157_body_pluginsIncidentResponsePluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.incident_response.plugin_version"
			},
			{
				"displayName": "Plugins Incident Response Plugin Version Keyword",
				"name": "op157_body_pluginsIncidentResponsePluginVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.incident_response.plugin_version.keyword"
			},
			{
				"displayName": "Plugins Incident Response Reboot Reasons",
				"name": "op157_body_pluginsIncidentResponseRebootReasons",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.incident_response.reboot_reasons"
			},
			{
				"displayName": "Plugins Incident Response Reboot Reasons Keyword",
				"name": "op157_body_pluginsIncidentResponseRebootReasonsKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.incident_response.reboot_reasons.keyword"
			},
			{
				"displayName": "Plugins Siem Plugin Version",
				"name": "op157_body_pluginsSiemPluginVersion",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.siem.plugin_version"
			},
			{
				"displayName": "Plugins Siem Plugin Version Keyword",
				"name": "op157_body_pluginsSiemPluginVersionKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.siem.plugin_version.keyword"
			},
			{
				"displayName": "Plugins Siem Reboot Reasons",
				"name": "op157_body_pluginsSiemRebootReasons",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.siem.reboot_reasons"
			},
			{
				"displayName": "Plugins Siem Reboot Reasons Keyword",
				"name": "op157_body_pluginsSiemRebootReasonsKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: plugins.siem.reboot_reasons.keyword"
			},
			{
				"displayName": "Policy Etag",
				"name": "op157_body_policyEtag",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_etag"
			},
			{
				"displayName": "Policy Etag Keyword",
				"name": "op157_body_policyEtagKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_etag.keyword"
			},
			{
				"displayName": "Policy ID",
				"name": "op157_body_policyId",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_id"
			},
			{
				"displayName": "Policy ID Keyword",
				"name": "op157_body_policyIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_id.keyword"
			},
			{
				"displayName": "Policy Name",
				"name": "op157_body_policyName",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_name"
			},
			{
				"displayName": "Policy Name Keyword",
				"name": "op157_body_policyNameKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: policy_name.keyword"
			},
			{
				"displayName": "Protocol",
				"name": "op157_body_protocol",
				"type": "string",
				"default": "",
				"description": "Request body field: protocol"
			},
			{
				"displayName": "Protocol Keyword",
				"name": "op157_body_protocolKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: protocol.keyword"
			},
			{
				"displayName": "Root Group ID",
				"name": "op157_body_rootGroupId",
				"type": "string",
				"default": "",
				"description": "Request body field: root_group_id"
			},
			{
				"displayName": "Root Group ID Keyword",
				"name": "op157_body_rootGroupIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: root_group_id.keyword"
			},
			{
				"displayName": "Rule ID",
				"name": "op157_body_ruleId",
				"type": "string",
				"default": "",
				"description": "Request body field: rule_id"
			},
			{
				"displayName": "Rule ID Keyword",
				"name": "op157_body_ruleIdKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: rule_id.keyword"
			},
			{
				"displayName": "Sort Field",
				"name": "op157_body_sortField",
				"type": "string",
				"default": "id",
				"description": "Request body field: sort_field"
			},
			{
				"displayName": "Sort Order",
				"name": "op157_body_sortOrder",
				"type": "string",
				"default": "asc",
				"description": "Request body field: sort_order"
			},
			{
				"displayName": "Source Location City",
				"name": "op157_body_sourceLocationCity",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.city"
			},
			{
				"displayName": "Source Location City Keyword",
				"name": "op157_body_sourceLocationCityKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.city.keyword"
			},
			{
				"displayName": "Source Location Continent",
				"name": "op157_body_sourceLocationContinent",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.continent"
			},
			{
				"displayName": "Source Location Continent Keyword",
				"name": "op157_body_sourceLocationContinentKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.continent.keyword"
			},
			{
				"displayName": "Source Location Country",
				"name": "op157_body_sourceLocationCountry",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.country"
			},
			{
				"displayName": "Source Location Country Keyword",
				"name": "op157_body_sourceLocationCountryKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.country.keyword"
			},
			{
				"displayName": "Source Location Country Iso",
				"name": "op157_body_sourceLocationCountryIso",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.country_iso"
			},
			{
				"displayName": "Source Location Country Iso Keyword",
				"name": "op157_body_sourceLocationCountryIsoKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.country_iso.keyword"
			},
			{
				"displayName": "Source Location Postal Code",
				"name": "op157_body_sourceLocationPostalCode",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.postal_code"
			},
			{
				"displayName": "Source Location Postal Code Keyword",
				"name": "op157_body_sourceLocationPostalCodeKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.postal_code.keyword"
			},
			{
				"displayName": "Source Location Subdivisions",
				"name": "op157_body_sourceLocationSubdivisions",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.subdivisions"
			},
			{
				"displayName": "Source Location Subdivisions Keyword",
				"name": "op157_body_sourceLocationSubdivisionsKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.subdivisions.keyword"
			},
			{
				"displayName": "Source Location Time Zone",
				"name": "op157_body_sourceLocationTimeZone",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.time_zone"
			},
			{
				"displayName": "Source Location Time Zone Keyword",
				"name": "op157_body_sourceLocationTimeZoneKeyword",
				"type": "string",
				"default": "",
				"description": "Request body field: source_location.time_zone.keyword"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op157_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"rid"
				],
				"operation": [
					"postRidRules"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op158_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"rid"
				],
				"operation": [
					"postRidRulesExport"
				]
			}
		},
		"options": [
			{
				"displayName": "Download",
				"name": "op158_body_download",
				"type": "boolean",
				"default": false,
				"description": "Request body field: download"
			},
			{
				"displayName": "Format",
				"name": "op158_body_format",
				"type": "string",
				"default": "csv",
				"description": "Request body field: format"
			},
			{
				"displayName": "Type",
				"name": "op158_body_type",
				"type": "string",
				"default": "string",
				"description": "Request body field: type"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op158_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"rid"
				],
				"operation": [
					"postRidRulesExport"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op159_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"rid"
				],
				"operation": [
					"postRidRulesSearchGroupby"
				]
			}
		},
		"options": [
			{
				"displayName": "Group By",
				"name": "op159_body_groupBy",
				"type": "string",
				"default": "origin_id",
				"description": "Request body field: group_by"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op159_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"rid"
				],
				"operation": [
					"postRidRulesSearchGroupby"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Sort Field",
		"name": "op160_query_sortField",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"sa"
				],
				"operation": [
					"getSa"
				]
			}
		},
		"description": "Query parameter: Sort Field"
	},
	{
		"displayName": "Sort Direction",
		"name": "op160_query_sortDirection",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"sa"
				],
				"operation": [
					"getSa"
				]
			}
		},
		"description": "Query parameter: Sort Direction"
	},
	{
		"displayName": "Next Cursor",
		"name": "op160_query_nextCursor",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"sa"
				],
				"operation": [
					"getSa"
				]
			}
		},
		"description": "Query parameter: Next Cursor"
	},
	{
		"displayName": "Since",
		"name": "op160_query_since",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"sa"
				],
				"operation": [
					"getSa"
				]
			}
		},
		"description": "Query parameter: Since"
	},
	{
		"displayName": "Group IDs",
		"name": "op160_query_groupIds",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"sa"
				],
				"operation": [
					"getSa"
				]
			}
		},
		"description": "Query parameter: Group IDs"
	},
	{
		"displayName": "Per Page",
		"name": "op160_query_perPage",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"sa"
				],
				"operation": [
					"getSa"
				]
			}
		},
		"description": "Query parameter: Per Page"
	},
	{
		"displayName": "Next Cursor",
		"name": "op161_query_nextCursor",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"sa"
				],
				"operation": [
					"postSaDetails"
				]
			}
		},
		"description": "Query parameter: Next Cursor"
	},
	{
		"displayName": "Body Fields",
		"name": "op161_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"sa"
				],
				"operation": [
					"postSaDetails"
				]
			}
		},
		"options": [
			{
				"displayName": "Endpoint",
				"name": "op161_body_endpoint",
				"type": "string",
				"default": "",
				"description": "Request body field: endpoint"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op161_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"sa"
				],
				"operation": [
					"postSaDetails"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op162_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"sa"
				],
				"operation": [
					"getSaByIdProcessGraph"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Next Cursor",
		"name": "op163_query_nextCursor",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"schedules"
				],
				"operation": [
					"getSchedules"
				]
			}
		},
		"description": "Query parameter: Next Cursor"
	},
	{
		"displayName": "Body Fields",
		"name": "op164_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"schedules"
				],
				"operation": [
					"postSchedules"
				]
			}
		},
		"options": [
			{
				"displayName": "Command",
				"name": "op164_body_command",
				"type": "string",
				"default": "",
				"description": "Request body field: command"
			},
			{
				"displayName": "Command Data Mac Scan Settings Pup Detection",
				"name": "op164_body_commandDataMacScanSettingsPupDetection",
				"type": "string",
				"default": "Detect",
				"description": "Request body field: command_data.mac_scan_settings.pup_detection"
			},
			{
				"displayName": "Command Data Mac Scan Settings Remove",
				"name": "op164_body_commandDataMacScanSettingsRemove",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.mac_scan_settings.remove"
			},
			{
				"displayName": "Command Data Scan Settings Ark",
				"name": "op164_body_commandDataScanSettingsArk",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.scan_settings.ark"
			},
			{
				"displayName": "Command Data Scan Settings Fixed Drive",
				"name": "op164_body_commandDataScanSettingsFixedDrive",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.scan_settings.fixed_drive"
			},
			{
				"displayName": "Command Data Scan Settings No Archive",
				"name": "op164_body_commandDataScanSettingsNoArchive",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.scan_settings.no_archive"
			},
			{
				"displayName": "Command Data Scan Settings Pum Detection",
				"name": "op164_body_commandDataScanSettingsPumDetection",
				"type": "string",
				"default": "Detect",
				"description": "Request body field: command_data.scan_settings.pum_detection"
			},
			{
				"displayName": "Command Data Scan Settings Pup Detection",
				"name": "op164_body_commandDataScanSettingsPupDetection",
				"type": "string",
				"default": "Detect",
				"description": "Request body field: command_data.scan_settings.pup_detection"
			},
			{
				"displayName": "Command Data Scan Settings Remove",
				"name": "op164_body_commandDataScanSettingsRemove",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.scan_settings.remove"
			},
			{
				"displayName": "Command Data Scan Settings Scan Memory",
				"name": "op164_body_commandDataScanSettingsScanMemory",
				"type": "boolean",
				"default": true,
				"description": "Request body field: command_data.scan_settings.scan_memory"
			},
			{
				"displayName": "Command Data Scan Settings Scan Path",
				"name": "op164_body_commandDataScanSettingsScanPath",
				"type": "string",
				"default": "",
				"description": "Request body field: command_data.scan_settings.scan_path"
			},
			{
				"displayName": "Command Data Scan Settings Scan Registry",
				"name": "op164_body_commandDataScanSettingsScanRegistry",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.scan_settings.scan_registry"
			},
			{
				"displayName": "Command Data Scan Settings Scan Startup",
				"name": "op164_body_commandDataScanSettingsScanStartup",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.scan_settings.scan_startup"
			},
			{
				"displayName": "Command Data Scan Settings Type",
				"name": "op164_body_commandDataScanSettingsType",
				"type": "string",
				"default": "",
				"description": "Request body field: command_data.scan_settings.type"
			},
			{
				"displayName": "Command Data Schedule For Mac",
				"name": "op164_body_commandDataScheduleForMac",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.schedule_for_mac"
			},
			{
				"displayName": "Command Data Schedule For Windows",
				"name": "op164_body_commandDataScheduleForWindows",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.schedule_for_windows"
			},
			{
				"displayName": "Enabled",
				"name": "op164_body_enabled",
				"type": "boolean",
				"default": true,
				"description": "Request body field: enabled"
			},
			{
				"displayName": "Name",
				"name": "op164_body_name",
				"type": "string",
				"default": "",
				"description": "Request body field: name"
			},
			{
				"displayName": "Rrule",
				"name": "op164_body_rrule",
				"type": "string",
				"default": "",
				"description": "Request body field: rrule"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op164_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"schedules"
				],
				"operation": [
					"postSchedules"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op165_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"schedules"
				],
				"operation": [
					"deleteSchedulesById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op165_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"schedules"
				],
				"operation": [
					"deleteSchedulesById"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op166_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"schedules"
				],
				"operation": [
					"getSchedulesById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op167_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"schedules"
				],
				"operation": [
					"putSchedulesById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op167_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"schedules"
				],
				"operation": [
					"putSchedulesById"
				]
			}
		},
		"options": [
			{
				"displayName": "Command",
				"name": "op167_body_command",
				"type": "string",
				"default": "",
				"description": "Request body field: command"
			},
			{
				"displayName": "Command Data Mac Scan Settings Pup Detection",
				"name": "op167_body_commandDataMacScanSettingsPupDetection",
				"type": "string",
				"default": "Detect",
				"description": "Request body field: command_data.mac_scan_settings.pup_detection"
			},
			{
				"displayName": "Command Data Mac Scan Settings Remove",
				"name": "op167_body_commandDataMacScanSettingsRemove",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.mac_scan_settings.remove"
			},
			{
				"displayName": "Command Data Scan Settings Ark",
				"name": "op167_body_commandDataScanSettingsArk",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.scan_settings.ark"
			},
			{
				"displayName": "Command Data Scan Settings Fixed Drive",
				"name": "op167_body_commandDataScanSettingsFixedDrive",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.scan_settings.fixed_drive"
			},
			{
				"displayName": "Command Data Scan Settings No Archive",
				"name": "op167_body_commandDataScanSettingsNoArchive",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.scan_settings.no_archive"
			},
			{
				"displayName": "Command Data Scan Settings Pum Detection",
				"name": "op167_body_commandDataScanSettingsPumDetection",
				"type": "string",
				"default": "Detect",
				"description": "Request body field: command_data.scan_settings.pum_detection"
			},
			{
				"displayName": "Command Data Scan Settings Pup Detection",
				"name": "op167_body_commandDataScanSettingsPupDetection",
				"type": "string",
				"default": "Detect",
				"description": "Request body field: command_data.scan_settings.pup_detection"
			},
			{
				"displayName": "Command Data Scan Settings Remove",
				"name": "op167_body_commandDataScanSettingsRemove",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.scan_settings.remove"
			},
			{
				"displayName": "Command Data Scan Settings Scan Memory",
				"name": "op167_body_commandDataScanSettingsScanMemory",
				"type": "boolean",
				"default": true,
				"description": "Request body field: command_data.scan_settings.scan_memory"
			},
			{
				"displayName": "Command Data Scan Settings Scan Path",
				"name": "op167_body_commandDataScanSettingsScanPath",
				"type": "string",
				"default": "",
				"description": "Request body field: command_data.scan_settings.scan_path"
			},
			{
				"displayName": "Command Data Scan Settings Scan Registry",
				"name": "op167_body_commandDataScanSettingsScanRegistry",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.scan_settings.scan_registry"
			},
			{
				"displayName": "Command Data Scan Settings Scan Startup",
				"name": "op167_body_commandDataScanSettingsScanStartup",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.scan_settings.scan_startup"
			},
			{
				"displayName": "Command Data Scan Settings Type",
				"name": "op167_body_commandDataScanSettingsType",
				"type": "string",
				"default": "",
				"description": "Request body field: command_data.scan_settings.type"
			},
			{
				"displayName": "Command Data Schedule For Mac",
				"name": "op167_body_commandDataScheduleForMac",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.schedule_for_mac"
			},
			{
				"displayName": "Command Data Schedule For Windows",
				"name": "op167_body_commandDataScheduleForWindows",
				"type": "boolean",
				"default": false,
				"description": "Request body field: command_data.schedule_for_windows"
			},
			{
				"displayName": "Enabled",
				"name": "op167_body_enabled",
				"type": "boolean",
				"default": true,
				"description": "Request body field: enabled"
			},
			{
				"displayName": "Etag",
				"name": "op167_body_etag",
				"type": "string",
				"default": "",
				"description": "Request body field: etag"
			},
			{
				"displayName": "Name",
				"name": "op167_body_name",
				"type": "string",
				"default": "",
				"description": "Request body field: name"
			},
			{
				"displayName": "Rrule",
				"name": "op167_body_rrule",
				"type": "string",
				"default": "",
				"description": "Request body field: rrule"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op167_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"schedules"
				],
				"operation": [
					"putSchedulesById"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op168_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"schedules"
				],
				"operation": [
					"putSchedulesByIdGroups"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op168_body",
		"type": "json",
		"default": "{}",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"schedules"
				],
				"operation": [
					"putSchedulesByIdGroups"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "Body Fields",
		"name": "op169_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"usage"
				],
				"operation": [
					"postUsageHistogram"
				]
			}
		},
		"options": [
			{
				"displayName": "End Date",
				"name": "op169_body_endDate",
				"type": "string",
				"default": "",
				"description": "Request body field: end_date"
			},
			{
				"displayName": "Start Date",
				"name": "op169_body_startDate",
				"type": "string",
				"default": "",
				"description": "Request body field: start_date"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op169_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"usage"
				],
				"operation": [
					"postUsageHistogram"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op170_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"usage"
				],
				"operation": [
					"postUsageLogs"
				]
			}
		},
		"options": [
			{
				"displayName": "End Date",
				"name": "op170_body_endDate",
				"type": "string",
				"default": "",
				"description": "Request body field: end_date"
			},
			{
				"displayName": "Next Cursor",
				"name": "op170_body_nextCursor",
				"type": "number",
				"default": 0,
				"description": "Request body field: next_cursor"
			},
			{
				"displayName": "Page Size",
				"name": "op170_body_pageSize",
				"type": "number",
				"default": 0,
				"description": "Request body field: page_size"
			},
			{
				"displayName": "Start Date",
				"name": "op170_body_startDate",
				"type": "string",
				"default": "",
				"description": "Request body field: start_date"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op170_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"usage"
				],
				"operation": [
					"postUsageLogs"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Body Fields",
		"name": "op171_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"usage"
				],
				"operation": [
					"postUsageLogsSummary"
				]
			}
		},
		"options": [
			{
				"displayName": "End Date",
				"name": "op171_body_endDate",
				"type": "string",
				"default": "",
				"description": "Request body field: end_date"
			},
			{
				"displayName": "Start Date",
				"name": "op171_body_startDate",
				"type": "string",
				"default": "",
				"description": "Request body field: start_date"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op171_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"usage"
				],
				"operation": [
					"postUsageLogsSummary"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Next Cursor",
		"name": "op172_query_nextCursor",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"users"
				],
				"operation": [
					"getUsers"
				]
			}
		},
		"description": "Query parameter: Next Cursor"
	},
	{
		"displayName": "Body Fields",
		"name": "op173_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"users"
				],
				"operation": [
					"postUsers"
				]
			}
		},
		"options": [
			{
				"displayName": "All Groups Access",
				"name": "op173_body_allGroupsAccess",
				"type": "boolean",
				"default": false,
				"description": "Request body field: all_groups_access"
			},
			{
				"displayName": "Ars Permission",
				"name": "op173_body_arsPermission",
				"type": "boolean",
				"default": false,
				"description": "Request body field: ars_permission"
			},
			{
				"displayName": "Email",
				"name": "op173_body_email",
				"type": "string",
				"default": "",
				"description": "Request body field: email"
			},
			{
				"displayName": "Role",
				"name": "op173_body_role",
				"type": "string",
				"default": "SuperAdmin",
				"description": "Request body field: role"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op173_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"users"
				],
				"operation": [
					"postUsers"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op174_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"users"
				],
				"operation": [
					"deleteUsersById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op174_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"users"
				],
				"operation": [
					"deleteUsersById"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op175_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"users"
				],
				"operation": [
					"getUsersById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op176_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"users"
				],
				"operation": [
					"putUsersById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op176_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"users"
				],
				"operation": [
					"putUsersById"
				]
			}
		},
		"options": [
			{
				"displayName": "All Groups Access",
				"name": "op176_body_allGroupsAccess",
				"type": "boolean",
				"default": false,
				"description": "Request body field: all_groups_access"
			},
			{
				"displayName": "Ars Permission",
				"name": "op176_body_arsPermission",
				"type": "boolean",
				"default": false,
				"description": "Request body field: ars_permission"
			},
			{
				"displayName": "Role",
				"name": "op176_body_role",
				"type": "string",
				"default": "SuperAdmin",
				"description": "Request body field: role"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op176_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"users"
				],
				"operation": [
					"putUsersById"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "Next Cursor",
		"name": "op177_query_nextCursor",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"webhooks"
				],
				"operation": [
					"getWebhooksSubscriptions"
				]
			}
		},
		"description": "Query parameter: Next Cursor"
	},
	{
		"displayName": "Body Fields",
		"name": "op178_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"webhooks"
				],
				"operation": [
					"postWebhooksSubscriptions"
				]
			}
		},
		"options": [
			{
				"displayName": "Description",
				"name": "op178_body_description",
				"type": "string",
				"default": "",
				"description": "Request body field: description"
			},
			{
				"displayName": "Enabled",
				"name": "op178_body_enabled",
				"type": "boolean",
				"default": false,
				"description": "Request body field: enabled"
			},
			{
				"displayName": "Max Retries",
				"name": "op178_body_maxRetries",
				"type": "number",
				"default": 10,
				"description": "Request body field: max_retries"
			},
			{
				"displayName": "Secret Token",
				"name": "op178_body_secretToken",
				"type": "string",
				"default": "",
				"description": "Request body field: secret_token",
				"typeOptions": {
					"password": true
				}
			},
			{
				"displayName": "URL",
				"name": "op178_body_url",
				"type": "string",
				"default": "",
				"description": "Request body field: url"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op178_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"webhooks"
				],
				"operation": [
					"postWebhooksSubscriptions"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	},
	{
		"displayName": "ID",
		"name": "op179_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"webhooks"
				],
				"operation": [
					"deleteWebhooksSubscriptionsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "JSON Body",
		"name": "op179_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 10
		},
		"displayOptions": {
			"show": {
				"resource": [
					"webhooks"
				],
				"operation": [
					"deleteWebhooksSubscriptionsById"
				]
			}
		},
		"description": "Request body as JSON"
	},
	{
		"displayName": "ID",
		"name": "op180_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"webhooks"
				],
				"operation": [
					"getWebhooksSubscriptionsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "ID",
		"name": "op181_path_id",
		"type": "string",
		"default": "",
		"displayOptions": {
			"show": {
				"resource": [
					"webhooks"
				],
				"operation": [
					"putWebhooksSubscriptionsById"
				]
			}
		},
		"description": "Path parameter: ID",
		"required": true
	},
	{
		"displayName": "Body Fields",
		"name": "op181_bodyFields",
		"type": "collection",
		"default": {},
		"placeholder": "Add Body Field",
		"displayOptions": {
			"show": {
				"resource": [
					"webhooks"
				],
				"operation": [
					"putWebhooksSubscriptionsById"
				]
			}
		},
		"options": [
			{
				"displayName": "Description",
				"name": "op181_body_description",
				"type": "string",
				"default": "",
				"description": "Request body field: description"
			},
			{
				"displayName": "Enabled",
				"name": "op181_body_enabled",
				"type": "boolean",
				"default": false,
				"description": "Request body field: enabled"
			},
			{
				"displayName": "Max Retries",
				"name": "op181_body_maxRetries",
				"type": "number",
				"default": 10,
				"description": "Request body field: max_retries"
			},
			{
				"displayName": "Secret Token",
				"name": "op181_body_secretToken",
				"type": "string",
				"default": "",
				"description": "Request body field: secret_token",
				"typeOptions": {
					"password": true
				}
			},
			{
				"displayName": "URL",
				"name": "op181_body_url",
				"type": "string",
				"default": "",
				"description": "Request body field: url"
			}
		]
	},
	{
		"displayName": "Additional JSON Body",
		"name": "op181_body",
		"type": "json",
		"default": "",
		"typeOptions": {
			"rows": 5
		},
		"displayOptions": {
			"show": {
				"resource": [
					"webhooks"
				],
				"operation": [
					"putWebhooksSubscriptionsById"
				]
			}
		},
		"description": "Additional request body values as JSON, merged with Body Fields"
	}
];

export const operations: ThreatdownOperation[] = [
	{
		"value": "getAccount",
		"resource": "account",
		"name": "Get Account Details",
		"method": "GET",
		"path": "/nebula/v1/account",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "getAccountsByAccountIdPreferencesNotifications",
		"resource": "accounts",
		"name": "Get Notifications Preferences",
		"method": "GET",
		"path": "/nebula/v1/accounts/{account_id}/preferences/notifications",
		"hasAccountIdHeader": false,
		"pathParameters": [
			{
				"name": "account_id",
				"fieldName": "op2_path_accountId",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "putAccountsByAccountIdPreferencesNotifications",
		"resource": "accounts",
		"name": "Put Notifications Preferences",
		"method": "PUT",
		"path": "/nebula/v1/accounts/{account_id}/preferences/notifications",
		"hasAccountIdHeader": false,
		"pathParameters": [
			{
				"name": "account_id",
				"fieldName": "op3_path_accountId",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyCollectionFieldName": "op3_bodyFields",
		"bodyFieldName": "op3_body",
		"bodyParameters": [
			{
				"name": "email",
				"fieldName": "op3_body_email",
				"path": [
					"email"
				],
				"type": "string"
			},
			{
				"name": "slack",
				"fieldName": "op3_body_slack",
				"path": [
					"slack"
				],
				"type": "string"
			},
			{
				"name": "teams",
				"fieldName": "op3_body_teams",
				"path": [
					"teams"
				],
				"type": "string"
			},
			{
				"name": "webhook",
				"fieldName": "op3_body_webhook",
				"path": [
					"webhook"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postAppBlockActivity",
		"resource": "appBlock",
		"name": "Search App Block Activity",
		"method": "POST",
		"path": "/nebula/v1/app-block/activity",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op4_bodyFields",
		"bodyFieldName": "op4_body",
		"bodyParameters": [
			{
				"name": "account_name",
				"fieldName": "op4_body_accountName",
				"path": [
					"account_name"
				],
				"type": "string"
			},
			{
				"name": "account_name.keyword",
				"fieldName": "op4_body_accountNameKeyword",
				"path": [
					"account_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "end_date",
				"fieldName": "op4_body_endDate",
				"path": [
					"end_date"
				],
				"type": "string"
			},
			{
				"name": "engine_version",
				"fieldName": "op4_body_engineVersion",
				"path": [
					"engine_version"
				],
				"type": "string"
			},
			{
				"name": "file_path",
				"fieldName": "op4_body_filePath",
				"path": [
					"file_path"
				],
				"type": "string"
			},
			{
				"name": "file_path.keyword",
				"fieldName": "op4_body_filePathKeyword",
				"path": [
					"file_path.keyword"
				],
				"type": "string"
			},
			{
				"name": "group_id",
				"fieldName": "op4_body_groupId",
				"path": [
					"group_id"
				],
				"type": "string"
			},
			{
				"name": "group_name",
				"fieldName": "op4_body_groupName",
				"path": [
					"group_name"
				],
				"type": "string"
			},
			{
				"name": "histogram_time_zone",
				"fieldName": "op4_body_histogramTimeZone",
				"path": [
					"histogram_time_zone"
				],
				"type": "string"
			},
			{
				"name": "last_user",
				"fieldName": "op4_body_lastUser",
				"path": [
					"last_user"
				],
				"type": "string"
			},
			{
				"name": "name_multi_search",
				"fieldName": "op4_body_nameMultiSearch",
				"path": [
					"name_multi_search"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op4_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "nics.ips",
				"fieldName": "op4_body_nicsIps",
				"path": [
					"nics.ips"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_platform",
				"fieldName": "op4_body_osInfoOsPlatform",
				"path": [
					"os_info.os_platform"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_release_name",
				"fieldName": "op4_body_osInfoOsReleaseName",
				"path": [
					"os_info.os_release_name"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_release_name.keyword",
				"fieldName": "op4_body_osInfoOsReleaseNameKeyword",
				"path": [
					"os_info.os_release_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_type",
				"fieldName": "op4_body_osInfoOsType",
				"path": [
					"os_info.os_type"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_version",
				"fieldName": "op4_body_osInfoOsVersion",
				"path": [
					"os_info.os_version"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op4_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			},
			{
				"name": "policy_name",
				"fieldName": "op4_body_policyName",
				"path": [
					"policy_name"
				],
				"type": "string"
			},
			{
				"name": "policy_name.keyword",
				"fieldName": "op4_body_policyNameKeyword",
				"path": [
					"policy_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "rule_id",
				"fieldName": "op4_body_ruleId",
				"path": [
					"rule_id"
				],
				"type": "string"
			},
			{
				"name": "rule_name",
				"fieldName": "op4_body_ruleName",
				"path": [
					"rule_name"
				],
				"type": "string"
			},
			{
				"name": "rule_name.keyword",
				"fieldName": "op4_body_ruleNameKeyword",
				"path": [
					"rule_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "scanned_at_after",
				"fieldName": "op4_body_scannedAtAfter",
				"path": [
					"scanned_at_after"
				],
				"type": "string"
			},
			{
				"name": "scanned_at_before",
				"fieldName": "op4_body_scannedAtBefore",
				"path": [
					"scanned_at_before"
				],
				"type": "string"
			},
			{
				"name": "sort_field",
				"fieldName": "op4_body_sortField",
				"path": [
					"sort_field"
				],
				"type": "string"
			},
			{
				"name": "sort_order",
				"fieldName": "op4_body_sortOrder",
				"path": [
					"sort_order"
				],
				"type": "string"
			},
			{
				"name": "start_date",
				"fieldName": "op4_body_startDate",
				"path": [
					"start_date"
				],
				"type": "string"
			},
			{
				"name": "status",
				"fieldName": "op4_body_status",
				"path": [
					"status"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postAppBlockActivityExport",
		"resource": "appBlock",
		"name": "Export App Block Activity",
		"method": "POST",
		"path": "/nebula/v1/app-block/activity/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op5_bodyFields",
		"bodyFieldName": "op5_body",
		"bodyParameters": [
			{
				"name": "download",
				"fieldName": "op5_body_download",
				"path": [
					"download"
				],
				"type": "boolean"
			},
			{
				"name": "format",
				"fieldName": "op5_body_format",
				"path": [
					"format"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op5_body_type",
				"path": [
					"type"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postAppBlockActivitySearchGroupby",
		"resource": "appBlock",
		"name": "Search App Block Activity Groupby",
		"method": "POST",
		"path": "/nebula/v1/app-block/activity/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op6_body",
		"bodyParameters": []
	},
	{
		"value": "postAppBlockRules",
		"resource": "appBlock",
		"name": "Create App Block Rule",
		"method": "POST",
		"path": "/nebula/v1/app-block/rules",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op7_bodyFields",
		"bodyFieldName": "op7_body",
		"bodyParameters": [
			{
				"name": "enabled",
				"fieldName": "op7_body_enabled",
				"path": [
					"enabled"
				],
				"type": "boolean"
			},
			{
				"name": "policies_exclude",
				"fieldName": "op7_body_policiesExclude",
				"path": [
					"policies_exclude"
				],
				"type": "boolean"
			}
		]
	},
	{
		"value": "postAppBlockRulesSearch",
		"resource": "appBlock",
		"name": "Search App Block Rules",
		"method": "POST",
		"path": "/nebula/v1/app-block/rules/search",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op8_bodyFields",
		"bodyFieldName": "op8_body",
		"bodyParameters": [
			{
				"name": "next_cursor",
				"fieldName": "op8_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op8_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			}
		]
	},
	{
		"value": "deleteAppBlockRulesById",
		"resource": "appBlock",
		"name": "Delete App Block Rule",
		"method": "DELETE",
		"path": "/nebula/v1/app-block/rules/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op9_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op9_body",
		"bodyParameters": []
	},
	{
		"value": "getAppBlockRulesById",
		"resource": "appBlock",
		"name": "Get App Block Rule",
		"method": "GET",
		"path": "/nebula/v1/app-block/rules/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op10_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "putAppBlockRulesById",
		"resource": "appBlock",
		"name": "Update App Block Rule",
		"method": "PUT",
		"path": "/nebula/v1/app-block/rules/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op11_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyCollectionFieldName": "op11_bodyFields",
		"bodyFieldName": "op11_body",
		"bodyParameters": [
			{
				"name": "enabled",
				"fieldName": "op11_body_enabled",
				"path": [
					"enabled"
				],
				"type": "boolean"
			},
			{
				"name": "policies_exclude",
				"fieldName": "op11_body_policiesExclude",
				"path": [
					"policies_exclude"
				],
				"type": "boolean"
			}
		]
	},
	{
		"value": "getAppBlockSettings",
		"resource": "appBlock",
		"name": "Get App Block Settings",
		"method": "GET",
		"path": "/nebula/v1/app-block/settings",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "putAppBlockSettings",
		"resource": "appBlock",
		"name": "Create App Block Settings",
		"method": "PUT",
		"path": "/nebula/v1/app-block/settings",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op13_bodyFields",
		"bodyFieldName": "op13_body",
		"bodyParameters": [
			{
				"name": "message_body",
				"fieldName": "op13_body_messageBody",
				"path": [
					"message_body"
				],
				"type": "string"
			},
			{
				"name": "message_title",
				"fieldName": "op13_body_messageTitle",
				"path": [
					"message_title"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postAssetsSoftware",
		"resource": "assets",
		"name": "Search Assets Software",
		"method": "POST",
		"path": "/nebula/v1/assets/software",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op14_bodyFields",
		"bodyFieldName": "op14_body",
		"bodyParameters": [
			{
				"name": "account_name",
				"fieldName": "op14_body_accountName",
				"path": [
					"account_name"
				],
				"type": "string"
			},
			{
				"name": "account_name.keyword",
				"fieldName": "op14_body_accountNameKeyword",
				"path": [
					"account_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "alias",
				"fieldName": "op14_body_alias",
				"path": [
					"alias"
				],
				"type": "string"
			},
			{
				"name": "alias.keyword",
				"fieldName": "op14_body_aliasKeyword",
				"path": [
					"alias.keyword"
				],
				"type": "string"
			},
			{
				"name": "architecture",
				"fieldName": "op14_body_architecture",
				"path": [
					"architecture"
				],
				"type": "string"
			},
			{
				"name": "architecture.keyword",
				"fieldName": "op14_body_architectureKeyword",
				"path": [
					"architecture.keyword"
				],
				"type": "string"
			},
			{
				"name": "created_at_after",
				"fieldName": "op14_body_createdAtAfter",
				"path": [
					"created_at_after"
				],
				"type": "string"
			},
			{
				"name": "created_at_before",
				"fieldName": "op14_body_createdAtBefore",
				"path": [
					"created_at_before"
				],
				"type": "string"
			},
			{
				"name": "cves_by_status.critical",
				"fieldName": "op14_body_cvesByStatusCritical",
				"path": [
					"cves_by_status.critical"
				],
				"type": "string"
			},
			{
				"name": "cves_by_status.critical.keyword",
				"fieldName": "op14_body_cvesByStatusCriticalKeyword",
				"path": [
					"cves_by_status.critical.keyword"
				],
				"type": "string"
			},
			{
				"name": "cves_by_status.high",
				"fieldName": "op14_body_cvesByStatusHigh",
				"path": [
					"cves_by_status.high"
				],
				"type": "string"
			},
			{
				"name": "cves_by_status.high.keyword",
				"fieldName": "op14_body_cvesByStatusHighKeyword",
				"path": [
					"cves_by_status.high.keyword"
				],
				"type": "string"
			},
			{
				"name": "cves_by_status.low",
				"fieldName": "op14_body_cvesByStatusLow",
				"path": [
					"cves_by_status.low"
				],
				"type": "string"
			},
			{
				"name": "cves_by_status.low.keyword",
				"fieldName": "op14_body_cvesByStatusLowKeyword",
				"path": [
					"cves_by_status.low.keyword"
				],
				"type": "string"
			},
			{
				"name": "cves_by_status.medium",
				"fieldName": "op14_body_cvesByStatusMedium",
				"path": [
					"cves_by_status.medium"
				],
				"type": "string"
			},
			{
				"name": "cves_by_status.medium.keyword",
				"fieldName": "op14_body_cvesByStatusMediumKeyword",
				"path": [
					"cves_by_status.medium.keyword"
				],
				"type": "string"
			},
			{
				"name": "cves_by_status.unknown",
				"fieldName": "op14_body_cvesByStatusUnknown",
				"path": [
					"cves_by_status.unknown"
				],
				"type": "string"
			},
			{
				"name": "cves_by_status.unknown.keyword",
				"fieldName": "op14_body_cvesByStatusUnknownKeyword",
				"path": [
					"cves_by_status.unknown.keyword"
				],
				"type": "string"
			},
			{
				"name": "cves_count",
				"fieldName": "op14_body_cvesCount",
				"path": [
					"cves_count"
				],
				"type": "string"
			},
			{
				"name": "cves_count_by_status.critical",
				"fieldName": "op14_body_cvesCountByStatusCritical",
				"path": [
					"cves_count_by_status.critical"
				],
				"type": "string"
			},
			{
				"name": "cves_count_by_status.high",
				"fieldName": "op14_body_cvesCountByStatusHigh",
				"path": [
					"cves_count_by_status.high"
				],
				"type": "string"
			},
			{
				"name": "cves_count_by_status.low",
				"fieldName": "op14_body_cvesCountByStatusLow",
				"path": [
					"cves_count_by_status.low"
				],
				"type": "string"
			},
			{
				"name": "cves_count_by_status.medium",
				"fieldName": "op14_body_cvesCountByStatusMedium",
				"path": [
					"cves_count_by_status.medium"
				],
				"type": "string"
			},
			{
				"name": "cves_count_by_status.unknown",
				"fieldName": "op14_body_cvesCountByStatusUnknown",
				"path": [
					"cves_count_by_status.unknown"
				],
				"type": "string"
			},
			{
				"name": "cves_score",
				"fieldName": "op14_body_cvesScore",
				"path": [
					"cves_score"
				],
				"type": "string"
			},
			{
				"name": "display_installed_version",
				"fieldName": "op14_body_displayInstalledVersion",
				"path": [
					"display_installed_version"
				],
				"type": "string"
			},
			{
				"name": "display_installed_version.keyword",
				"fieldName": "op14_body_displayInstalledVersionKeyword",
				"path": [
					"display_installed_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "display_product",
				"fieldName": "op14_body_displayProduct",
				"path": [
					"display_product"
				],
				"type": "string"
			},
			{
				"name": "display_product.keyword",
				"fieldName": "op14_body_displayProductKeyword",
				"path": [
					"display_product.keyword"
				],
				"type": "string"
			},
			{
				"name": "display_vendor",
				"fieldName": "op14_body_displayVendor",
				"path": [
					"display_vendor"
				],
				"type": "string"
			},
			{
				"name": "display_vendor.keyword",
				"fieldName": "op14_body_displayVendorKeyword",
				"path": [
					"display_vendor.keyword"
				],
				"type": "string"
			},
			{
				"name": "fully_qualified_host_name",
				"fieldName": "op14_body_fullyQualifiedHostName",
				"path": [
					"fully_qualified_host_name"
				],
				"type": "string"
			},
			{
				"name": "fully_qualified_host_name.keyword",
				"fieldName": "op14_body_fullyQualifiedHostNameKeyword",
				"path": [
					"fully_qualified_host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "group_id",
				"fieldName": "op14_body_groupId",
				"path": [
					"group_id"
				],
				"type": "string"
			},
			{
				"name": "group_name",
				"fieldName": "op14_body_groupName",
				"path": [
					"group_name"
				],
				"type": "string"
			},
			{
				"name": "group_name.keyword",
				"fieldName": "op14_body_groupNameKeyword",
				"path": [
					"group_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "host_name",
				"fieldName": "op14_body_hostName",
				"path": [
					"host_name"
				],
				"type": "string"
			},
			{
				"name": "host_name.keyword",
				"fieldName": "op14_body_hostNameKeyword",
				"path": [
					"host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "installation_date_after",
				"fieldName": "op14_body_installationDateAfter",
				"path": [
					"installation_date_after"
				],
				"type": "string"
			},
			{
				"name": "installation_date_before",
				"fieldName": "op14_body_installationDateBefore",
				"path": [
					"installation_date_before"
				],
				"type": "string"
			},
			{
				"name": "installed_version",
				"fieldName": "op14_body_installedVersion",
				"path": [
					"installed_version"
				],
				"type": "string"
			},
			{
				"name": "installed_version.keyword",
				"fieldName": "op14_body_installedVersionKeyword",
				"path": [
					"installed_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "language",
				"fieldName": "op14_body_language",
				"path": [
					"language"
				],
				"type": "string"
			},
			{
				"name": "language.keyword",
				"fieldName": "op14_body_languageKeyword",
				"path": [
					"language.keyword"
				],
				"type": "string"
			},
			{
				"name": "latest_version_available",
				"fieldName": "op14_body_latestVersionAvailable",
				"path": [
					"latest_version_available"
				],
				"type": "string"
			},
			{
				"name": "latest_version_available.keyword",
				"fieldName": "op14_body_latestVersionAvailableKeyword",
				"path": [
					"latest_version_available.keyword"
				],
				"type": "string"
			},
			{
				"name": "machine_id",
				"fieldName": "op14_body_machineId",
				"path": [
					"machine_id"
				],
				"type": "string"
			},
			{
				"name": "name_multi_search",
				"fieldName": "op14_body_nameMultiSearch",
				"path": [
					"name_multi_search"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op14_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "normaliazed_installed_version",
				"fieldName": "op14_body_normaliazedInstalledVersion",
				"path": [
					"normaliazed_installed_version"
				],
				"type": "string"
			},
			{
				"name": "normaliazed_installed_version.keyword",
				"fieldName": "op14_body_normaliazedInstalledVersionKeyword",
				"path": [
					"normaliazed_installed_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "normalized_product",
				"fieldName": "op14_body_normalizedProduct",
				"path": [
					"normalized_product"
				],
				"type": "string"
			},
			{
				"name": "normalized_product.keyword",
				"fieldName": "op14_body_normalizedProductKeyword",
				"path": [
					"normalized_product.keyword"
				],
				"type": "string"
			},
			{
				"name": "normalized_vendor",
				"fieldName": "op14_body_normalizedVendor",
				"path": [
					"normalized_vendor"
				],
				"type": "string"
			},
			{
				"name": "normalized_vendor.keyword",
				"fieldName": "op14_body_normalizedVendorKeyword",
				"path": [
					"normalized_vendor.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.account_name",
				"fieldName": "op14_body_notAccountName",
				"path": [
					"not.account_name"
				],
				"type": "string"
			},
			{
				"name": "not.account_name.keyword",
				"fieldName": "op14_body_notAccountNameKeyword",
				"path": [
					"not.account_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.alias",
				"fieldName": "op14_body_notAlias",
				"path": [
					"not.alias"
				],
				"type": "string"
			},
			{
				"name": "not.alias.keyword",
				"fieldName": "op14_body_notAliasKeyword",
				"path": [
					"not.alias.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.architecture",
				"fieldName": "op14_body_notArchitecture",
				"path": [
					"not.architecture"
				],
				"type": "string"
			},
			{
				"name": "not.architecture.keyword",
				"fieldName": "op14_body_notArchitectureKeyword",
				"path": [
					"not.architecture.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.cves_by_status.critical",
				"fieldName": "op14_body_notCvesByStatusCritical",
				"path": [
					"not.cves_by_status.critical"
				],
				"type": "string"
			},
			{
				"name": "not.cves_by_status.critical.keyword",
				"fieldName": "op14_body_notCvesByStatusCriticalKeyword",
				"path": [
					"not.cves_by_status.critical.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.cves_by_status.high",
				"fieldName": "op14_body_notCvesByStatusHigh",
				"path": [
					"not.cves_by_status.high"
				],
				"type": "string"
			},
			{
				"name": "not.cves_by_status.high.keyword",
				"fieldName": "op14_body_notCvesByStatusHighKeyword",
				"path": [
					"not.cves_by_status.high.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.cves_by_status.low",
				"fieldName": "op14_body_notCvesByStatusLow",
				"path": [
					"not.cves_by_status.low"
				],
				"type": "string"
			},
			{
				"name": "not.cves_by_status.low.keyword",
				"fieldName": "op14_body_notCvesByStatusLowKeyword",
				"path": [
					"not.cves_by_status.low.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.cves_by_status.medium",
				"fieldName": "op14_body_notCvesByStatusMedium",
				"path": [
					"not.cves_by_status.medium"
				],
				"type": "string"
			},
			{
				"name": "not.cves_by_status.medium.keyword",
				"fieldName": "op14_body_notCvesByStatusMediumKeyword",
				"path": [
					"not.cves_by_status.medium.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.cves_by_status.unknown",
				"fieldName": "op14_body_notCvesByStatusUnknown",
				"path": [
					"not.cves_by_status.unknown"
				],
				"type": "string"
			},
			{
				"name": "not.cves_by_status.unknown.keyword",
				"fieldName": "op14_body_notCvesByStatusUnknownKeyword",
				"path": [
					"not.cves_by_status.unknown.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.display_installed_version",
				"fieldName": "op14_body_notDisplayInstalledVersion",
				"path": [
					"not.display_installed_version"
				],
				"type": "string"
			},
			{
				"name": "not.display_installed_version.keyword",
				"fieldName": "op14_body_notDisplayInstalledVersionKeyword",
				"path": [
					"not.display_installed_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.display_product",
				"fieldName": "op14_body_notDisplayProduct",
				"path": [
					"not.display_product"
				],
				"type": "string"
			},
			{
				"name": "not.display_product.keyword",
				"fieldName": "op14_body_notDisplayProductKeyword",
				"path": [
					"not.display_product.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.display_vendor",
				"fieldName": "op14_body_notDisplayVendor",
				"path": [
					"not.display_vendor"
				],
				"type": "string"
			},
			{
				"name": "not.display_vendor.keyword",
				"fieldName": "op14_body_notDisplayVendorKeyword",
				"path": [
					"not.display_vendor.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.fully_qualified_host_name",
				"fieldName": "op14_body_notFullyQualifiedHostName",
				"path": [
					"not.fully_qualified_host_name"
				],
				"type": "string"
			},
			{
				"name": "not.fully_qualified_host_name.keyword",
				"fieldName": "op14_body_notFullyQualifiedHostNameKeyword",
				"path": [
					"not.fully_qualified_host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.group_id",
				"fieldName": "op14_body_notGroupId",
				"path": [
					"not.group_id"
				],
				"type": "string"
			},
			{
				"name": "not.group_name",
				"fieldName": "op14_body_notGroupName",
				"path": [
					"not.group_name"
				],
				"type": "string"
			},
			{
				"name": "not.group_name.keyword",
				"fieldName": "op14_body_notGroupNameKeyword",
				"path": [
					"not.group_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.host_name",
				"fieldName": "op14_body_notHostName",
				"path": [
					"not.host_name"
				],
				"type": "string"
			},
			{
				"name": "not.host_name.keyword",
				"fieldName": "op14_body_notHostNameKeyword",
				"path": [
					"not.host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.installed_version",
				"fieldName": "op14_body_notInstalledVersion",
				"path": [
					"not.installed_version"
				],
				"type": "string"
			},
			{
				"name": "not.installed_version.keyword",
				"fieldName": "op14_body_notInstalledVersionKeyword",
				"path": [
					"not.installed_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.language",
				"fieldName": "op14_body_notLanguage",
				"path": [
					"not.language"
				],
				"type": "string"
			},
			{
				"name": "not.language.keyword",
				"fieldName": "op14_body_notLanguageKeyword",
				"path": [
					"not.language.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.latest_version_available",
				"fieldName": "op14_body_notLatestVersionAvailable",
				"path": [
					"not.latest_version_available"
				],
				"type": "string"
			},
			{
				"name": "not.latest_version_available.keyword",
				"fieldName": "op14_body_notLatestVersionAvailableKeyword",
				"path": [
					"not.latest_version_available.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.machine_id",
				"fieldName": "op14_body_notMachineId",
				"path": [
					"not.machine_id"
				],
				"type": "string"
			},
			{
				"name": "not.normaliazed_installed_version",
				"fieldName": "op14_body_notNormaliazedInstalledVersion",
				"path": [
					"not.normaliazed_installed_version"
				],
				"type": "string"
			},
			{
				"name": "not.normaliazed_installed_version.keyword",
				"fieldName": "op14_body_notNormaliazedInstalledVersionKeyword",
				"path": [
					"not.normaliazed_installed_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.normalized_product",
				"fieldName": "op14_body_notNormalizedProduct",
				"path": [
					"not.normalized_product"
				],
				"type": "string"
			},
			{
				"name": "not.normalized_product.keyword",
				"fieldName": "op14_body_notNormalizedProductKeyword",
				"path": [
					"not.normalized_product.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.normalized_vendor",
				"fieldName": "op14_body_notNormalizedVendor",
				"path": [
					"not.normalized_vendor"
				],
				"type": "string"
			},
			{
				"name": "not.normalized_vendor.keyword",
				"fieldName": "op14_body_notNormalizedVendorKeyword",
				"path": [
					"not.normalized_vendor.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.object_guid",
				"fieldName": "op14_body_notObjectGuid",
				"path": [
					"not.object_guid"
				],
				"type": "string"
			},
			{
				"name": "not.object_guid.keyword",
				"fieldName": "op14_body_notObjectGuidKeyword",
				"path": [
					"not.object_guid.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_architecture",
				"fieldName": "op14_body_notOsInfoOsArchitecture",
				"path": [
					"not.os_info.os_architecture"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_architecture.keyword",
				"fieldName": "op14_body_notOsInfoOsArchitectureKeyword",
				"path": [
					"not.os_info.os_architecture.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_platform",
				"fieldName": "op14_body_notOsInfoOsPlatform",
				"path": [
					"not.os_info.os_platform"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_platform.keyword",
				"fieldName": "op14_body_notOsInfoOsPlatformKeyword",
				"path": [
					"not.os_info.os_platform.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_release_name",
				"fieldName": "op14_body_notOsInfoOsReleaseName",
				"path": [
					"not.os_info.os_release_name"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_release_name.keyword",
				"fieldName": "op14_body_notOsInfoOsReleaseNameKeyword",
				"path": [
					"not.os_info.os_release_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_type",
				"fieldName": "op14_body_notOsInfoOsType",
				"path": [
					"not.os_info.os_type"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_type.keyword",
				"fieldName": "op14_body_notOsInfoOsTypeKeyword",
				"path": [
					"not.os_info.os_type.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_version",
				"fieldName": "op14_body_notOsInfoOsVersion",
				"path": [
					"not.os_info.os_version"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_version.keyword",
				"fieldName": "op14_body_notOsInfoOsVersionKeyword",
				"path": [
					"not.os_info.os_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.parent_account_id",
				"fieldName": "op14_body_notParentAccountId",
				"path": [
					"not.parent_account_id"
				],
				"type": "string"
			},
			{
				"name": "not.product",
				"fieldName": "op14_body_notProduct",
				"path": [
					"not.product"
				],
				"type": "string"
			},
			{
				"name": "not.product.keyword",
				"fieldName": "op14_body_notProductKeyword",
				"path": [
					"not.product.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.root_group_id",
				"fieldName": "op14_body_notRootGroupId",
				"path": [
					"not.root_group_id"
				],
				"type": "string"
			},
			{
				"name": "not.supports_update",
				"fieldName": "op14_body_notSupportsUpdate",
				"path": [
					"not.supports_update"
				],
				"type": "boolean"
			},
			{
				"name": "not.vendor",
				"fieldName": "op14_body_notVendor",
				"path": [
					"not.vendor"
				],
				"type": "string"
			},
			{
				"name": "not.vendor.keyword",
				"fieldName": "op14_body_notVendorKeyword",
				"path": [
					"not.vendor.keyword"
				],
				"type": "string"
			},
			{
				"name": "object_guid",
				"fieldName": "op14_body_objectGuid",
				"path": [
					"object_guid"
				],
				"type": "string"
			},
			{
				"name": "object_guid.keyword",
				"fieldName": "op14_body_objectGuidKeyword",
				"path": [
					"object_guid.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_architecture",
				"fieldName": "op14_body_osInfoOsArchitecture",
				"path": [
					"os_info.os_architecture"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_architecture.keyword",
				"fieldName": "op14_body_osInfoOsArchitectureKeyword",
				"path": [
					"os_info.os_architecture.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_platform",
				"fieldName": "op14_body_osInfoOsPlatform",
				"path": [
					"os_info.os_platform"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_platform.keyword",
				"fieldName": "op14_body_osInfoOsPlatformKeyword",
				"path": [
					"os_info.os_platform.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_release_name",
				"fieldName": "op14_body_osInfoOsReleaseName",
				"path": [
					"os_info.os_release_name"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_release_name.keyword",
				"fieldName": "op14_body_osInfoOsReleaseNameKeyword",
				"path": [
					"os_info.os_release_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_type",
				"fieldName": "op14_body_osInfoOsType",
				"path": [
					"os_info.os_type"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_type.keyword",
				"fieldName": "op14_body_osInfoOsTypeKeyword",
				"path": [
					"os_info.os_type.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_version",
				"fieldName": "op14_body_osInfoOsVersion",
				"path": [
					"os_info.os_version"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_version.keyword",
				"fieldName": "op14_body_osInfoOsVersionKeyword",
				"path": [
					"os_info.os_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op14_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			},
			{
				"name": "parent_account_id",
				"fieldName": "op14_body_parentAccountId",
				"path": [
					"parent_account_id"
				],
				"type": "string"
			},
			{
				"name": "product",
				"fieldName": "op14_body_product",
				"path": [
					"product"
				],
				"type": "string"
			},
			{
				"name": "product.keyword",
				"fieldName": "op14_body_productKeyword",
				"path": [
					"product.keyword"
				],
				"type": "string"
			},
			{
				"name": "product_signature",
				"fieldName": "op14_body_productSignature",
				"path": [
					"product_signature"
				],
				"type": "number"
			},
			{
				"name": "root_group_id",
				"fieldName": "op14_body_rootGroupId",
				"path": [
					"root_group_id"
				],
				"type": "string"
			},
			{
				"name": "sort_field",
				"fieldName": "op14_body_sortField",
				"path": [
					"sort_field"
				],
				"type": "string"
			},
			{
				"name": "sort_order",
				"fieldName": "op14_body_sortOrder",
				"path": [
					"sort_order"
				],
				"type": "string"
			},
			{
				"name": "supports_update",
				"fieldName": "op14_body_supportsUpdate",
				"path": [
					"supports_update"
				],
				"type": "boolean"
			},
			{
				"name": "update_available",
				"fieldName": "op14_body_updateAvailable",
				"path": [
					"update_available"
				],
				"type": "boolean"
			},
			{
				"name": "vendor",
				"fieldName": "op14_body_vendor",
				"path": [
					"vendor"
				],
				"type": "string"
			},
			{
				"name": "vendor.keyword",
				"fieldName": "op14_body_vendorKeyword",
				"path": [
					"vendor.keyword"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postAssetsSoftwareExport",
		"resource": "assets",
		"name": "Export Assets Software",
		"method": "POST",
		"path": "/nebula/v1/assets/software/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op15_bodyFields",
		"bodyFieldName": "op15_body",
		"bodyParameters": [
			{
				"name": "download",
				"fieldName": "op15_body_download",
				"path": [
					"download"
				],
				"type": "boolean"
			},
			{
				"name": "format",
				"fieldName": "op15_body_format",
				"path": [
					"format"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op15_body_type",
				"path": [
					"type"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postAssetsSoftwareSearchGroupby",
		"resource": "assets",
		"name": "Search Assets Software Group By",
		"method": "POST",
		"path": "/nebula/v1/assets/software/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op16_bodyFields",
		"bodyFieldName": "op16_body",
		"bodyParameters": [
			{
				"name": "group_by",
				"fieldName": "op16_body_groupBy",
				"path": [
					"group_by"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op16_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op16_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			}
		]
	},
	{
		"value": "postContentFiltering",
		"resource": "contentFiltering",
		"name": "Create Content Filtering Rule",
		"method": "POST",
		"path": "/nebula/v1/content-filtering",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op17_bodyFields",
		"bodyFieldName": "op17_body",
		"bodyParameters": [
			{
				"name": "doh_url",
				"fieldName": "op17_body_dohUrl",
				"path": [
					"doh_url"
				],
				"type": "string"
			},
			{
				"name": "enabled",
				"fieldName": "op17_body_enabled",
				"path": [
					"enabled"
				],
				"type": "boolean"
			},
			{
				"name": "name",
				"fieldName": "op17_body_name",
				"path": [
					"name"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "getContentFilteringDomain",
		"resource": "contentFiltering",
		"name": "Get Domain Details",
		"method": "GET",
		"path": "/nebula/v1/content-filtering/domain",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "getContentFilteringFrequentDomains",
		"resource": "contentFiltering",
		"name": "Get Frequently Used Domain Names",
		"method": "GET",
		"path": "/nebula/v1/content-filtering/frequent-domains",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "getContentFilteringPolicies",
		"resource": "contentFiltering",
		"name": "Get List Of Policies",
		"method": "GET",
		"path": "/nebula/v1/content-filtering/policies",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "postContentFilteringSearch",
		"resource": "contentFiltering",
		"name": "Get A List Of Content Filtering Rules",
		"method": "POST",
		"path": "/nebula/v1/content-filtering/search",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op21_bodyFields",
		"bodyFieldName": "op21_body",
		"bodyParameters": [
			{
				"name": "users",
				"fieldName": "op21_body_populateUsers",
				"path": [
					"populate",
					"users"
				],
				"type": "boolean"
			}
		]
	},
	{
		"value": "getContentFilteringSettings",
		"resource": "contentFiltering",
		"name": "Get DNS Settings",
		"method": "GET",
		"path": "/nebula/v1/content-filtering/settings",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "putContentFilteringSettings",
		"resource": "contentFiltering",
		"name": "Create Update DNS Settings",
		"method": "PUT",
		"path": "/nebula/v1/content-filtering/settings",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op23_bodyFields",
		"bodyFieldName": "op23_body",
		"bodyParameters": [
			{
				"name": "background_color",
				"fieldName": "op23_body_blockPageBackgroundColor",
				"path": [
					"block_page",
					"background_color"
				],
				"type": "string"
			},
			{
				"name": "enabled",
				"fieldName": "op23_body_blockPageEnabled",
				"path": [
					"block_page",
					"enabled"
				],
				"type": "boolean"
			},
			{
				"name": "footer_text",
				"fieldName": "op23_body_blockPageFooterText",
				"path": [
					"block_page",
					"footer_text"
				],
				"type": "string"
			},
			{
				"name": "header_text",
				"fieldName": "op23_body_blockPageHeaderText",
				"path": [
					"block_page",
					"header_text"
				],
				"type": "string"
			},
			{
				"name": "logo_path",
				"fieldName": "op23_body_blockPageLogoPath",
				"path": [
					"block_page",
					"logo_path"
				],
				"type": "string"
			},
			{
				"name": "mailto_address",
				"fieldName": "op23_body_blockPageMailtoAddress",
				"path": [
					"block_page",
					"mailto_address"
				],
				"type": "string"
			},
			{
				"name": "mailto_subject",
				"fieldName": "op23_body_blockPageMailtoSubject",
				"path": [
					"block_page",
					"mailto_subject"
				],
				"type": "string"
			},
			{
				"name": "name",
				"fieldName": "op23_body_blockPageName",
				"path": [
					"block_page",
					"name"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "deleteContentFilteringById",
		"resource": "contentFiltering",
		"name": "Delete Content Filtering Rule",
		"method": "DELETE",
		"path": "/nebula/v1/content-filtering/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op24_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op24_body",
		"bodyParameters": []
	},
	{
		"value": "getContentFilteringById",
		"resource": "contentFiltering",
		"name": "Get A Content Filtering Rule Details",
		"method": "GET",
		"path": "/nebula/v1/content-filtering/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op25_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "putContentFilteringById",
		"resource": "contentFiltering",
		"name": "Update Content Filtering Rule",
		"method": "PUT",
		"path": "/nebula/v1/content-filtering/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op26_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyCollectionFieldName": "op26_bodyFields",
		"bodyFieldName": "op26_body",
		"bodyParameters": [
			{
				"name": "doh_url",
				"fieldName": "op26_body_dohUrl",
				"path": [
					"doh_url"
				],
				"type": "string"
			},
			{
				"name": "enabled",
				"fieldName": "op26_body_enabled",
				"path": [
					"enabled"
				],
				"type": "boolean"
			},
			{
				"name": "name",
				"fieldName": "op26_body_name",
				"path": [
					"name"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "putContentFilteringByIdEnable",
		"resource": "contentFiltering",
		"name": "Enable Disable Content Filtering Rule",
		"method": "PUT",
		"path": "/nebula/v1/content-filtering/{id}/enable",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op27_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyCollectionFieldName": "op27_bodyFields",
		"bodyFieldName": "op27_body",
		"bodyParameters": [
			{
				"name": "enabled",
				"fieldName": "op27_body_enabled",
				"path": [
					"enabled"
				],
				"type": "boolean"
			}
		]
	},
	{
		"value": "putContentFilteringByIdEnableForPolicy",
		"resource": "contentFiltering",
		"name": "Enable Disable Content Filtering Rule For Policy",
		"method": "PUT",
		"path": "/nebula/v1/content-filtering/{id}/enable-for-policy",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op28_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyCollectionFieldName": "op28_bodyFields",
		"bodyFieldName": "op28_body",
		"bodyParameters": [
			{
				"name": "enabled",
				"fieldName": "op28_body_enabled",
				"path": [
					"enabled"
				],
				"type": "boolean"
			}
		]
	},
	{
		"value": "postCve",
		"resource": "cve",
		"name": "Search CVE",
		"method": "POST",
		"path": "/nebula/v1/cve",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op29_bodyFields",
		"bodyFieldName": "op29_body",
		"bodyParameters": [
			{
				"name": "account_name",
				"fieldName": "op29_body_accountName",
				"path": [
					"account_name"
				],
				"type": "string"
			},
			{
				"name": "account_name.keyword",
				"fieldName": "op29_body_accountNameKeyword",
				"path": [
					"account_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "alias",
				"fieldName": "op29_body_alias",
				"path": [
					"alias"
				],
				"type": "string"
			},
			{
				"name": "alias.keyword",
				"fieldName": "op29_body_aliasKeyword",
				"path": [
					"alias.keyword"
				],
				"type": "string"
			},
			{
				"name": "cisa_exploitable",
				"fieldName": "op29_body_cisaExploitable",
				"path": [
					"cisa_exploitable"
				],
				"type": "boolean"
			},
			{
				"name": "created_at_after",
				"fieldName": "op29_body_createdAtAfter",
				"path": [
					"created_at_after"
				],
				"type": "string"
			},
			{
				"name": "created_at_before",
				"fieldName": "op29_body_createdAtBefore",
				"path": [
					"created_at_before"
				],
				"type": "string"
			},
			{
				"name": "cve_id",
				"fieldName": "op29_body_cveId",
				"path": [
					"cve_id"
				],
				"type": "string"
			},
			{
				"name": "cve_id.keyword",
				"fieldName": "op29_body_cveIdKeyword",
				"path": [
					"cve_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "cvss20_score",
				"fieldName": "op29_body_cvss20Score",
				"path": [
					"cvss20_score"
				],
				"type": "number"
			},
			{
				"name": "cvss20_score_gt",
				"fieldName": "op29_body_cvss20ScoreGt",
				"path": [
					"cvss20_score_gt"
				],
				"type": "number"
			},
			{
				"name": "cvss20_score_gte",
				"fieldName": "op29_body_cvss20ScoreGte",
				"path": [
					"cvss20_score_gte"
				],
				"type": "number"
			},
			{
				"name": "cvss20_score_lt",
				"fieldName": "op29_body_cvss20ScoreLt",
				"path": [
					"cvss20_score_lt"
				],
				"type": "number"
			},
			{
				"name": "cvss20_score_lte",
				"fieldName": "op29_body_cvss20ScoreLte",
				"path": [
					"cvss20_score_lte"
				],
				"type": "number"
			},
			{
				"name": "cvss30_score",
				"fieldName": "op29_body_cvss30Score",
				"path": [
					"cvss30_score"
				],
				"type": "number"
			},
			{
				"name": "cvss30_score_gt",
				"fieldName": "op29_body_cvss30ScoreGt",
				"path": [
					"cvss30_score_gt"
				],
				"type": "number"
			},
			{
				"name": "cvss30_score_gte",
				"fieldName": "op29_body_cvss30ScoreGte",
				"path": [
					"cvss30_score_gte"
				],
				"type": "number"
			},
			{
				"name": "cvss30_score_lt",
				"fieldName": "op29_body_cvss30ScoreLt",
				"path": [
					"cvss30_score_lt"
				],
				"type": "number"
			},
			{
				"name": "cvss30_score_lte",
				"fieldName": "op29_body_cvss30ScoreLte",
				"path": [
					"cvss30_score_lte"
				],
				"type": "number"
			},
			{
				"name": "display_installed_version",
				"fieldName": "op29_body_displayInstalledVersion",
				"path": [
					"display_installed_version"
				],
				"type": "string"
			},
			{
				"name": "display_installed_version.keyword",
				"fieldName": "op29_body_displayInstalledVersionKeyword",
				"path": [
					"display_installed_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "display_product",
				"fieldName": "op29_body_displayProduct",
				"path": [
					"display_product"
				],
				"type": "string"
			},
			{
				"name": "display_product.keyword",
				"fieldName": "op29_body_displayProductKeyword",
				"path": [
					"display_product.keyword"
				],
				"type": "string"
			},
			{
				"name": "display_vendor",
				"fieldName": "op29_body_displayVendor",
				"path": [
					"display_vendor"
				],
				"type": "string"
			},
			{
				"name": "display_vendor.keyword",
				"fieldName": "op29_body_displayVendorKeyword",
				"path": [
					"display_vendor.keyword"
				],
				"type": "string"
			},
			{
				"name": "document_id",
				"fieldName": "op29_body_documentId",
				"path": [
					"document_id"
				],
				"type": "string"
			},
			{
				"name": "document_id.keyword",
				"fieldName": "op29_body_documentIdKeyword",
				"path": [
					"document_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "fully_qualified_host_name",
				"fieldName": "op29_body_fullyQualifiedHostName",
				"path": [
					"fully_qualified_host_name"
				],
				"type": "string"
			},
			{
				"name": "fully_qualified_host_name.keyword",
				"fieldName": "op29_body_fullyQualifiedHostNameKeyword",
				"path": [
					"fully_qualified_host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "group_id",
				"fieldName": "op29_body_groupId",
				"path": [
					"group_id"
				],
				"type": "string"
			},
			{
				"name": "group_id.keyword",
				"fieldName": "op29_body_groupIdKeyword",
				"path": [
					"group_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "host_name",
				"fieldName": "op29_body_hostName",
				"path": [
					"host_name"
				],
				"type": "string"
			},
			{
				"name": "host_name.keyword",
				"fieldName": "op29_body_hostNameKeyword",
				"path": [
					"host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "installation_date_after",
				"fieldName": "op29_body_installationDateAfter",
				"path": [
					"installation_date_after"
				],
				"type": "string"
			},
			{
				"name": "installation_date_before",
				"fieldName": "op29_body_installationDateBefore",
				"path": [
					"installation_date_before"
				],
				"type": "string"
			},
			{
				"name": "installed_version",
				"fieldName": "op29_body_installedVersion",
				"path": [
					"installed_version"
				],
				"type": "string"
			},
			{
				"name": "installed_version.keyword",
				"fieldName": "op29_body_installedVersionKeyword",
				"path": [
					"installed_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "machine_id",
				"fieldName": "op29_body_machineId",
				"path": [
					"machine_id"
				],
				"type": "string"
			},
			{
				"name": "machine_id.keyword",
				"fieldName": "op29_body_machineIdKeyword",
				"path": [
					"machine_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "name_multi_search",
				"fieldName": "op29_body_nameMultiSearch",
				"path": [
					"name_multi_search"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op29_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "normalized_installed_version",
				"fieldName": "op29_body_normalizedInstalledVersion",
				"path": [
					"normalized_installed_version"
				],
				"type": "string"
			},
			{
				"name": "normalized_installed_version.keyword",
				"fieldName": "op29_body_normalizedInstalledVersionKeyword",
				"path": [
					"normalized_installed_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "normalized_product",
				"fieldName": "op29_body_normalizedProduct",
				"path": [
					"normalized_product"
				],
				"type": "string"
			},
			{
				"name": "normalized_product.keyword",
				"fieldName": "op29_body_normalizedProductKeyword",
				"path": [
					"normalized_product.keyword"
				],
				"type": "string"
			},
			{
				"name": "normalized_vendor",
				"fieldName": "op29_body_normalizedVendor",
				"path": [
					"normalized_vendor"
				],
				"type": "string"
			},
			{
				"name": "normalized_vendor.keyword",
				"fieldName": "op29_body_normalizedVendorKeyword",
				"path": [
					"normalized_vendor.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.account_name",
				"fieldName": "op29_body_notAccountName",
				"path": [
					"not.account_name"
				],
				"type": "string"
			},
			{
				"name": "not.account_name.keyword",
				"fieldName": "op29_body_notAccountNameKeyword",
				"path": [
					"not.account_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.alias",
				"fieldName": "op29_body_notAlias",
				"path": [
					"not.alias"
				],
				"type": "string"
			},
			{
				"name": "not.alias.keyword",
				"fieldName": "op29_body_notAliasKeyword",
				"path": [
					"not.alias.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.cve_id",
				"fieldName": "op29_body_notCveId",
				"path": [
					"not.cve_id"
				],
				"type": "string"
			},
			{
				"name": "not.cve_id.keyword",
				"fieldName": "op29_body_notCveIdKeyword",
				"path": [
					"not.cve_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.display_installed_version",
				"fieldName": "op29_body_notDisplayInstalledVersion",
				"path": [
					"not.display_installed_version"
				],
				"type": "string"
			},
			{
				"name": "not.display_installed_version.keyword",
				"fieldName": "op29_body_notDisplayInstalledVersionKeyword",
				"path": [
					"not.display_installed_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.display_product",
				"fieldName": "op29_body_notDisplayProduct",
				"path": [
					"not.display_product"
				],
				"type": "string"
			},
			{
				"name": "not.display_product.keyword",
				"fieldName": "op29_body_notDisplayProductKeyword",
				"path": [
					"not.display_product.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.display_vendor",
				"fieldName": "op29_body_notDisplayVendor",
				"path": [
					"not.display_vendor"
				],
				"type": "string"
			},
			{
				"name": "not.display_vendor.keyword",
				"fieldName": "op29_body_notDisplayVendorKeyword",
				"path": [
					"not.display_vendor.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.fully_qualified_host_name",
				"fieldName": "op29_body_notFullyQualifiedHostName",
				"path": [
					"not.fully_qualified_host_name"
				],
				"type": "string"
			},
			{
				"name": "not.fully_qualified_host_name.keyword",
				"fieldName": "op29_body_notFullyQualifiedHostNameKeyword",
				"path": [
					"not.fully_qualified_host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.group_id",
				"fieldName": "op29_body_notGroupId",
				"path": [
					"not.group_id"
				],
				"type": "string"
			},
			{
				"name": "not.group_id.keyword",
				"fieldName": "op29_body_notGroupIdKeyword",
				"path": [
					"not.group_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.host_name",
				"fieldName": "op29_body_notHostName",
				"path": [
					"not.host_name"
				],
				"type": "string"
			},
			{
				"name": "not.host_name.keyword",
				"fieldName": "op29_body_notHostNameKeyword",
				"path": [
					"not.host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.installed_version",
				"fieldName": "op29_body_notInstalledVersion",
				"path": [
					"not.installed_version"
				],
				"type": "string"
			},
			{
				"name": "not.installed_version.keyword",
				"fieldName": "op29_body_notInstalledVersionKeyword",
				"path": [
					"not.installed_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.machine_id",
				"fieldName": "op29_body_notMachineId",
				"path": [
					"not.machine_id"
				],
				"type": "string"
			},
			{
				"name": "not.machine_id.keyword",
				"fieldName": "op29_body_notMachineIdKeyword",
				"path": [
					"not.machine_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.normalized_installed_version",
				"fieldName": "op29_body_notNormalizedInstalledVersion",
				"path": [
					"not.normalized_installed_version"
				],
				"type": "string"
			},
			{
				"name": "not.normalized_installed_version.keyword",
				"fieldName": "op29_body_notNormalizedInstalledVersionKeyword",
				"path": [
					"not.normalized_installed_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.normalized_product",
				"fieldName": "op29_body_notNormalizedProduct",
				"path": [
					"not.normalized_product"
				],
				"type": "string"
			},
			{
				"name": "not.normalized_product.keyword",
				"fieldName": "op29_body_notNormalizedProductKeyword",
				"path": [
					"not.normalized_product.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.normalized_vendor",
				"fieldName": "op29_body_notNormalizedVendor",
				"path": [
					"not.normalized_vendor"
				],
				"type": "string"
			},
			{
				"name": "not.normalized_vendor.keyword",
				"fieldName": "op29_body_notNormalizedVendorKeyword",
				"path": [
					"not.normalized_vendor.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.object_guid",
				"fieldName": "op29_body_notObjectGuid",
				"path": [
					"not.object_guid"
				],
				"type": "string"
			},
			{
				"name": "not.object_guid.keyword",
				"fieldName": "op29_body_notObjectGuidKeyword",
				"path": [
					"not.object_guid.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_architecture",
				"fieldName": "op29_body_notOsInfoOsArchitecture",
				"path": [
					"not.os_info.os_architecture"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_architecture.keyword",
				"fieldName": "op29_body_notOsInfoOsArchitectureKeyword",
				"path": [
					"not.os_info.os_architecture.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_platform",
				"fieldName": "op29_body_notOsInfoOsPlatform",
				"path": [
					"not.os_info.os_platform"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_platform.keyword",
				"fieldName": "op29_body_notOsInfoOsPlatformKeyword",
				"path": [
					"not.os_info.os_platform.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_release_name",
				"fieldName": "op29_body_notOsInfoOsReleaseName",
				"path": [
					"not.os_info.os_release_name"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_release_name.keyword",
				"fieldName": "op29_body_notOsInfoOsReleaseNameKeyword",
				"path": [
					"not.os_info.os_release_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_type",
				"fieldName": "op29_body_notOsInfoOsType",
				"path": [
					"not.os_info.os_type"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_type.keyword",
				"fieldName": "op29_body_notOsInfoOsTypeKeyword",
				"path": [
					"not.os_info.os_type.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_version",
				"fieldName": "op29_body_notOsInfoOsVersion",
				"path": [
					"not.os_info.os_version"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_version.keyword",
				"fieldName": "op29_body_notOsInfoOsVersionKeyword",
				"path": [
					"not.os_info.os_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.parent_account_id",
				"fieldName": "op29_body_notParentAccountId",
				"path": [
					"not.parent_account_id"
				],
				"type": "string"
			},
			{
				"name": "not.parent_account_id.keyword",
				"fieldName": "op29_body_notParentAccountIdKeyword",
				"path": [
					"not.parent_account_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.product",
				"fieldName": "op29_body_notProduct",
				"path": [
					"not.product"
				],
				"type": "string"
			},
			{
				"name": "not.product.keyword",
				"fieldName": "op29_body_notProductKeyword",
				"path": [
					"not.product.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.root_group_id",
				"fieldName": "op29_body_notRootGroupId",
				"path": [
					"not.root_group_id"
				],
				"type": "string"
			},
			{
				"name": "not.root_group_id.keyword",
				"fieldName": "op29_body_notRootGroupIdKeyword",
				"path": [
					"not.root_group_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.severity",
				"fieldName": "op29_body_notSeverity",
				"path": [
					"not.severity"
				],
				"type": "string"
			},
			{
				"name": "not.severity.keyword",
				"fieldName": "op29_body_notSeverityKeyword",
				"path": [
					"not.severity.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.sort_name",
				"fieldName": "op29_body_notSortName",
				"path": [
					"not.sort_name"
				],
				"type": "string"
			},
			{
				"name": "not.sort_name.keyword",
				"fieldName": "op29_body_notSortNameKeyword",
				"path": [
					"not.sort_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.vendor",
				"fieldName": "op29_body_notVendor",
				"path": [
					"not.vendor"
				],
				"type": "string"
			},
			{
				"name": "not.vendor.keyword",
				"fieldName": "op29_body_notVendorKeyword",
				"path": [
					"not.vendor.keyword"
				],
				"type": "string"
			},
			{
				"name": "object_guid",
				"fieldName": "op29_body_objectGuid",
				"path": [
					"object_guid"
				],
				"type": "string"
			},
			{
				"name": "object_guid.keyword",
				"fieldName": "op29_body_objectGuidKeyword",
				"path": [
					"object_guid.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_architecture",
				"fieldName": "op29_body_osInfoOsArchitecture",
				"path": [
					"os_info.os_architecture"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_architecture.keyword",
				"fieldName": "op29_body_osInfoOsArchitectureKeyword",
				"path": [
					"os_info.os_architecture.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_platform",
				"fieldName": "op29_body_osInfoOsPlatform",
				"path": [
					"os_info.os_platform"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_platform.keyword",
				"fieldName": "op29_body_osInfoOsPlatformKeyword",
				"path": [
					"os_info.os_platform.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_release_name",
				"fieldName": "op29_body_osInfoOsReleaseName",
				"path": [
					"os_info.os_release_name"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_release_name.keyword",
				"fieldName": "op29_body_osInfoOsReleaseNameKeyword",
				"path": [
					"os_info.os_release_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_type",
				"fieldName": "op29_body_osInfoOsType",
				"path": [
					"os_info.os_type"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_type.keyword",
				"fieldName": "op29_body_osInfoOsTypeKeyword",
				"path": [
					"os_info.os_type.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_version",
				"fieldName": "op29_body_osInfoOsVersion",
				"path": [
					"os_info.os_version"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_version.keyword",
				"fieldName": "op29_body_osInfoOsVersionKeyword",
				"path": [
					"os_info.os_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op29_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			},
			{
				"name": "parent_account_id",
				"fieldName": "op29_body_parentAccountId",
				"path": [
					"parent_account_id"
				],
				"type": "string"
			},
			{
				"name": "parent_account_id.keyword",
				"fieldName": "op29_body_parentAccountIdKeyword",
				"path": [
					"parent_account_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "product",
				"fieldName": "op29_body_product",
				"path": [
					"product"
				],
				"type": "string"
			},
			{
				"name": "product.keyword",
				"fieldName": "op29_body_productKeyword",
				"path": [
					"product.keyword"
				],
				"type": "string"
			},
			{
				"name": "published_at_after",
				"fieldName": "op29_body_publishedAtAfter",
				"path": [
					"published_at_after"
				],
				"type": "string"
			},
			{
				"name": "published_at_before",
				"fieldName": "op29_body_publishedAtBefore",
				"path": [
					"published_at_before"
				],
				"type": "string"
			},
			{
				"name": "root_group_id",
				"fieldName": "op29_body_rootGroupId",
				"path": [
					"root_group_id"
				],
				"type": "string"
			},
			{
				"name": "root_group_id.keyword",
				"fieldName": "op29_body_rootGroupIdKeyword",
				"path": [
					"root_group_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "severity",
				"fieldName": "op29_body_severity",
				"path": [
					"severity"
				],
				"type": "string"
			},
			{
				"name": "severity.keyword",
				"fieldName": "op29_body_severityKeyword",
				"path": [
					"severity.keyword"
				],
				"type": "string"
			},
			{
				"name": "severity_score",
				"fieldName": "op29_body_severityScore",
				"path": [
					"severity_score"
				],
				"type": "number"
			},
			{
				"name": "severity_score_gt",
				"fieldName": "op29_body_severityScoreGt",
				"path": [
					"severity_score_gt"
				],
				"type": "number"
			},
			{
				"name": "severity_score_gte",
				"fieldName": "op29_body_severityScoreGte",
				"path": [
					"severity_score_gte"
				],
				"type": "number"
			},
			{
				"name": "severity_score_lt",
				"fieldName": "op29_body_severityScoreLt",
				"path": [
					"severity_score_lt"
				],
				"type": "number"
			},
			{
				"name": "severity_score_lte",
				"fieldName": "op29_body_severityScoreLte",
				"path": [
					"severity_score_lte"
				],
				"type": "number"
			},
			{
				"name": "sort_field",
				"fieldName": "op29_body_sortField",
				"path": [
					"sort_field"
				],
				"type": "string"
			},
			{
				"name": "sort_name",
				"fieldName": "op29_body_sortName",
				"path": [
					"sort_name"
				],
				"type": "string"
			},
			{
				"name": "sort_name.keyword",
				"fieldName": "op29_body_sortNameKeyword",
				"path": [
					"sort_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "sort_order",
				"fieldName": "op29_body_sortOrder",
				"path": [
					"sort_order"
				],
				"type": "string"
			},
			{
				"name": "vendor",
				"fieldName": "op29_body_vendor",
				"path": [
					"vendor"
				],
				"type": "string"
			},
			{
				"name": "vendor.keyword",
				"fieldName": "op29_body_vendorKeyword",
				"path": [
					"vendor.keyword"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postCveExport",
		"resource": "cve",
		"name": "Export CVE Data",
		"method": "POST",
		"path": "/nebula/v1/cve/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op30_bodyFields",
		"bodyFieldName": "op30_body",
		"bodyParameters": [
			{
				"name": "download",
				"fieldName": "op30_body_download",
				"path": [
					"download"
				],
				"type": "boolean"
			},
			{
				"name": "format",
				"fieldName": "op30_body_format",
				"path": [
					"format"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op30_body_type",
				"path": [
					"type"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postCveSearchGroupby",
		"resource": "cve",
		"name": "Search CVE Group By",
		"method": "POST",
		"path": "/nebula/v1/cve/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op31_bodyFields",
		"bodyFieldName": "op31_body",
		"bodyParameters": [
			{
				"name": "group_by",
				"fieldName": "op31_body_groupBy",
				"path": [
					"group_by"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op31_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op31_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			}
		]
	},
	{
		"value": "getCveById",
		"resource": "cve",
		"name": "Get CVE Details By ID",
		"method": "GET",
		"path": "/nebula/v1/cve/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op32_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "postDetections",
		"resource": "detections",
		"name": "Search Detections",
		"method": "POST",
		"path": "/nebula/v1/detections",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op33_bodyFields",
		"bodyFieldName": "op33_body",
		"bodyParameters": [
			{
				"name": "affected_application",
				"fieldName": "op33_body_affectedApplication",
				"path": [
					"affected_application"
				],
				"type": "string"
			},
			{
				"name": "affected_application.keyword",
				"fieldName": "op33_body_affectedApplicationKeyword",
				"path": [
					"affected_application.keyword"
				],
				"type": "string"
			},
			{
				"name": "aggregate_by_account",
				"fieldName": "op33_body_aggregateByAccount",
				"path": [
					"aggregate_by_account"
				],
				"type": "boolean"
			},
			{
				"name": "at_after",
				"fieldName": "op33_body_atAfter",
				"path": [
					"at_after"
				],
				"type": "string"
			},
			{
				"name": "at_before",
				"fieldName": "op33_body_atBefore",
				"path": [
					"at_before"
				],
				"type": "string"
			},
			{
				"name": "category",
				"fieldName": "op33_body_category",
				"path": [
					"category"
				],
				"type": "string"
			},
			{
				"name": "cleaned_at_after",
				"fieldName": "op33_body_cleanedAtAfter",
				"path": [
					"cleaned_at_after"
				],
				"type": "string"
			},
			{
				"name": "cleaned_at_before",
				"fieldName": "op33_body_cleanedAtBefore",
				"path": [
					"cleaned_at_before"
				],
				"type": "string"
			},
			{
				"name": "correlation_hash",
				"fieldName": "op33_body_correlationHash",
				"path": [
					"correlation_hash"
				],
				"type": "string"
			},
			{
				"name": "detection_id",
				"fieldName": "op33_body_detectionId",
				"path": [
					"detection_id"
				],
				"type": "string"
			},
			{
				"name": "domain_name",
				"fieldName": "op33_body_domainName",
				"path": [
					"domain_name"
				],
				"type": "string"
			},
			{
				"name": "domain_name.keyword",
				"fieldName": "op33_body_domainNameKeyword",
				"path": [
					"domain_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "end_date",
				"fieldName": "op33_body_endDate",
				"path": [
					"end_date"
				],
				"type": "string"
			},
			{
				"name": "engine_version",
				"fieldName": "op33_body_engineVersion",
				"path": [
					"engine_version"
				],
				"type": "string"
			},
			{
				"name": "engine_version.keyword",
				"fieldName": "op33_body_engineVersionKeyword",
				"path": [
					"engine_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "fully_qualified_host_name",
				"fieldName": "op33_body_fullyQualifiedHostName",
				"path": [
					"fully_qualified_host_name"
				],
				"type": "string"
			},
			{
				"name": "fully_qualified_host_name.keyword",
				"fieldName": "op33_body_fullyQualifiedHostNameKeyword",
				"path": [
					"fully_qualified_host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "group_id",
				"fieldName": "op33_body_groupId",
				"path": [
					"group_id"
				],
				"type": "string"
			},
			{
				"name": "host_name",
				"fieldName": "op33_body_hostName",
				"path": [
					"host_name"
				],
				"type": "string"
			},
			{
				"name": "host_name.keyword",
				"fieldName": "op33_body_hostNameKeyword",
				"path": [
					"host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "is_root_detection",
				"fieldName": "op33_body_isRootDetection",
				"path": [
					"is_root_detection"
				],
				"type": "boolean"
			},
			{
				"name": "is_rtp_stream_event",
				"fieldName": "op33_body_isRtpStreamEvent",
				"path": [
					"is_rtp_stream_event"
				],
				"type": "boolean"
			},
			{
				"name": "job_id",
				"fieldName": "op33_body_jobId",
				"path": [
					"job_id"
				],
				"type": "string"
			},
			{
				"name": "last_user",
				"fieldName": "op33_body_lastUser",
				"path": [
					"last_user"
				],
				"type": "string"
			},
			{
				"name": "last_user.keyword",
				"fieldName": "op33_body_lastUserKeyword",
				"path": [
					"last_user.keyword"
				],
				"type": "string"
			},
			{
				"name": "machine_id",
				"fieldName": "op33_body_machineId",
				"path": [
					"machine_id"
				],
				"type": "string"
			},
			{
				"name": "machine_name",
				"fieldName": "op33_body_machineName",
				"path": [
					"machine_name"
				],
				"type": "string"
			},
			{
				"name": "machine_name.keyword",
				"fieldName": "op33_body_machineNameKeyword",
				"path": [
					"machine_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "md5",
				"fieldName": "op33_body_md5",
				"path": [
					"md5"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op33_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "nics.description",
				"fieldName": "op33_body_nicsDescription",
				"path": [
					"nics.description"
				],
				"type": "string"
			},
			{
				"name": "nics.ips",
				"fieldName": "op33_body_nicsIps",
				"path": [
					"nics.ips"
				],
				"type": "string"
			},
			{
				"name": "nics.mac_address",
				"fieldName": "op33_body_nicsMacAddress",
				"path": [
					"nics.mac_address"
				],
				"type": "string"
			},
			{
				"name": "not.category",
				"fieldName": "op33_body_notCategory",
				"path": [
					"not.category"
				],
				"type": "string"
			},
			{
				"name": "not.scan_result.device.disk_model",
				"fieldName": "op33_body_notScanResultDeviceDiskModel",
				"path": [
					"not.scan_result.device.disk_model"
				],
				"type": "string"
			},
			{
				"name": "not.scan_result.device.disk_model.keyword",
				"fieldName": "op33_body_notScanResultDeviceDiskModelKeyword",
				"path": [
					"not.scan_result.device.disk_model.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.type",
				"fieldName": "op33_body_notType",
				"path": [
					"not.type"
				],
				"type": "string"
			},
			{
				"name": "object_guid",
				"fieldName": "op33_body_objectGuid",
				"path": [
					"object_guid"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_architecture",
				"fieldName": "op33_body_osInfoOsArchitecture",
				"path": [
					"os_info.os_architecture"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_platform",
				"fieldName": "op33_body_osInfoOsPlatform",
				"path": [
					"os_info.os_platform"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_release_name",
				"fieldName": "op33_body_osInfoOsReleaseName",
				"path": [
					"os_info.os_release_name"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_type",
				"fieldName": "op33_body_osInfoOsType",
				"path": [
					"os_info.os_type"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_version",
				"fieldName": "op33_body_osInfoOsVersion",
				"path": [
					"os_info.os_version"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op33_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			},
			{
				"name": "parent_detection_id",
				"fieldName": "op33_body_parentDetectionId",
				"path": [
					"parent_detection_id"
				],
				"type": "string"
			},
			{
				"name": "path",
				"fieldName": "op33_body_path",
				"path": [
					"path"
				],
				"type": "string"
			},
			{
				"name": "path.keyword",
				"fieldName": "op33_body_pathKeyword",
				"path": [
					"path.keyword"
				],
				"type": "string"
			},
			{
				"name": "plugins.asset_manager.plugin_version",
				"fieldName": "op33_body_pluginsAssetManagerPluginVersion",
				"path": [
					"plugins.asset_manager.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.asset_manager.reboot_reason",
				"fieldName": "op33_body_pluginsAssetManagerRebootReason",
				"path": [
					"plugins.asset_manager.reboot_reason"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_detection_response.plugin_version",
				"fieldName": "op33_body_pluginsEndpointDetectionResponsePluginVersion",
				"path": [
					"plugins.endpoint_detection_response.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_detection_response.reboot_reason",
				"fieldName": "op33_body_pluginsEndpointDetectionResponseRebootReason",
				"path": [
					"plugins.endpoint_detection_response.reboot_reason"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.component_package_version",
				"fieldName": "op33_body_pluginsEndpointProtectionComponentPackageVersion",
				"path": [
					"plugins.endpoint_protection.component_package_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.plugin_version",
				"fieldName": "op33_body_pluginsEndpointProtectionPluginVersion",
				"path": [
					"plugins.endpoint_protection.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.reboot_reason",
				"fieldName": "op33_body_pluginsEndpointProtectionRebootReason",
				"path": [
					"plugins.endpoint_protection.reboot_reason"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.sdk_version",
				"fieldName": "op33_body_pluginsEndpointProtectionSdkVersion",
				"path": [
					"plugins.endpoint_protection.sdk_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.update_package_version",
				"fieldName": "op33_body_pluginsEndpointProtectionUpdatePackageVersion",
				"path": [
					"plugins.endpoint_protection.update_package_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.incident_response.plugin_version",
				"fieldName": "op33_body_pluginsIncidentResponsePluginVersion",
				"path": [
					"plugins.incident_response.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.incident_response.reboot_reason",
				"fieldName": "op33_body_pluginsIncidentResponseRebootReason",
				"path": [
					"plugins.incident_response.reboot_reason"
				],
				"type": "string"
			},
			{
				"name": "plugins.siem.plugin_version",
				"fieldName": "op33_body_pluginsSiemPluginVersion",
				"path": [
					"plugins.siem.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.siem.reboot_reason",
				"fieldName": "op33_body_pluginsSiemRebootReason",
				"path": [
					"plugins.siem.reboot_reason"
				],
				"type": "string"
			},
			{
				"name": "endpoint",
				"fieldName": "op33_body_populateEndpoint",
				"path": [
					"populate",
					"endpoint"
				],
				"type": "boolean"
			},
			{
				"name": "group",
				"fieldName": "op33_body_populateGroup",
				"path": [
					"populate",
					"group"
				],
				"type": "boolean"
			},
			{
				"name": "scan_result",
				"fieldName": "op33_body_populateScanResult",
				"path": [
					"populate",
					"scan_result"
				],
				"type": "boolean"
			},
			{
				"name": "process_name",
				"fieldName": "op33_body_processName",
				"path": [
					"process_name"
				],
				"type": "string"
			},
			{
				"name": "process_name.keyword",
				"fieldName": "op33_body_processNameKeyword",
				"path": [
					"process_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "protection_status",
				"fieldName": "op33_body_protectionStatus",
				"path": [
					"protection_status"
				],
				"type": "string"
			},
			{
				"name": "reported_at_after",
				"fieldName": "op33_body_reportedAtAfter",
				"path": [
					"reported_at_after"
				],
				"type": "string"
			},
			{
				"name": "reported_at_before",
				"fieldName": "op33_body_reportedAtBefore",
				"path": [
					"reported_at_before"
				],
				"type": "string"
			},
			{
				"name": "scan_id",
				"fieldName": "op33_body_scanId",
				"path": [
					"scan_id"
				],
				"type": "string"
			},
			{
				"name": "scan_result.device.disk_model",
				"fieldName": "op33_body_scanResultDeviceDiskModel",
				"path": [
					"scan_result.device.disk_model"
				],
				"type": "string"
			},
			{
				"name": "scan_result.device.disk_model.keyword",
				"fieldName": "op33_body_scanResultDeviceDiskModelKeyword",
				"path": [
					"scan_result.device.disk_model.keyword"
				],
				"type": "string"
			},
			{
				"name": "scan_type",
				"fieldName": "op33_body_scanType",
				"path": [
					"scan_type"
				],
				"type": "string"
			},
			{
				"name": "scanned_at_after",
				"fieldName": "op33_body_scannedAtAfter",
				"path": [
					"scanned_at_after"
				],
				"type": "string"
			},
			{
				"name": "scanned_at_before",
				"fieldName": "op33_body_scannedAtBefore",
				"path": [
					"scanned_at_before"
				],
				"type": "string"
			},
			{
				"name": "schedule_etag",
				"fieldName": "op33_body_scheduleEtag",
				"path": [
					"schedule_etag"
				],
				"type": "string"
			},
			{
				"name": "schedule_id",
				"fieldName": "op33_body_scheduleId",
				"path": [
					"schedule_id"
				],
				"type": "string"
			},
			{
				"name": "sha256",
				"fieldName": "op33_body_sha256",
				"path": [
					"sha256"
				],
				"type": "string"
			},
			{
				"name": "sort_field",
				"fieldName": "op33_body_sortField",
				"path": [
					"sort_field"
				],
				"type": "string"
			},
			{
				"name": "sort_order",
				"fieldName": "op33_body_sortOrder",
				"path": [
					"sort_order"
				],
				"type": "string"
			},
			{
				"name": "start_date",
				"fieldName": "op33_body_startDate",
				"path": [
					"start_date"
				],
				"type": "string"
			},
			{
				"name": "status",
				"fieldName": "op33_body_status",
				"path": [
					"status"
				],
				"type": "string"
			},
			{
				"name": "threat_name",
				"fieldName": "op33_body_threatName",
				"path": [
					"threat_name"
				],
				"type": "string"
			},
			{
				"name": "threat_name.keyword",
				"fieldName": "op33_body_threatNameKeyword",
				"path": [
					"threat_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "trace_id",
				"fieldName": "op33_body_traceId",
				"path": [
					"trace_id"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op33_body_type",
				"path": [
					"type"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postDetectionsExport",
		"resource": "detections",
		"name": "Export Detections",
		"method": "POST",
		"path": "/nebula/v1/detections/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op34_bodyFields",
		"bodyFieldName": "op34_body",
		"bodyParameters": [
			{
				"name": "download",
				"fieldName": "op34_body_download",
				"path": [
					"download"
				],
				"type": "boolean"
			},
			{
				"name": "format",
				"fieldName": "op34_body_format",
				"path": [
					"format"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op34_body_type",
				"path": [
					"type"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postDetectionsSearchGroupby",
		"resource": "detections",
		"name": "Search Detections Group By",
		"method": "POST",
		"path": "/nebula/v1/detections/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op35_bodyFields",
		"bodyFieldName": "op35_body",
		"bodyParameters": [
			{
				"name": "group_by",
				"fieldName": "op35_body_groupBy",
				"path": [
					"group_by"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op35_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op35_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			}
		]
	},
	{
		"value": "getDetectionsById",
		"resource": "detections",
		"name": "Get Detection By ID",
		"method": "GET",
		"path": "/nebula/v1/detections/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op36_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "postDevicecontrol",
		"resource": "devicecontrol",
		"name": "Search Device Control Events",
		"method": "POST",
		"path": "/nebula/v1/devicecontrol",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op37_bodyFields",
		"bodyFieldName": "op37_body",
		"bodyParameters": [
			{
				"name": "affected_application",
				"fieldName": "op37_body_affectedApplication",
				"path": [
					"affected_application"
				],
				"type": "string"
			},
			{
				"name": "affected_application.keyword",
				"fieldName": "op37_body_affectedApplicationKeyword",
				"path": [
					"affected_application.keyword"
				],
				"type": "string"
			},
			{
				"name": "aggregate_by_account",
				"fieldName": "op37_body_aggregateByAccount",
				"path": [
					"aggregate_by_account"
				],
				"type": "boolean"
			},
			{
				"name": "at_after",
				"fieldName": "op37_body_atAfter",
				"path": [
					"at_after"
				],
				"type": "string"
			},
			{
				"name": "at_before",
				"fieldName": "op37_body_atBefore",
				"path": [
					"at_before"
				],
				"type": "string"
			},
			{
				"name": "category",
				"fieldName": "op37_body_category",
				"path": [
					"category"
				],
				"type": "string"
			},
			{
				"name": "cleaned_at_after",
				"fieldName": "op37_body_cleanedAtAfter",
				"path": [
					"cleaned_at_after"
				],
				"type": "string"
			},
			{
				"name": "cleaned_at_before",
				"fieldName": "op37_body_cleanedAtBefore",
				"path": [
					"cleaned_at_before"
				],
				"type": "string"
			},
			{
				"name": "correlation_hash",
				"fieldName": "op37_body_correlationHash",
				"path": [
					"correlation_hash"
				],
				"type": "string"
			},
			{
				"name": "detection_id",
				"fieldName": "op37_body_detectionId",
				"path": [
					"detection_id"
				],
				"type": "string"
			},
			{
				"name": "device_control.block_status",
				"fieldName": "op37_body_deviceControlBlockStatus",
				"path": [
					"device_control.block_status"
				],
				"type": "string"
			},
			{
				"name": "device_control.block_status.keyword",
				"fieldName": "op37_body_deviceControlBlockStatusKeyword",
				"path": [
					"device_control.block_status.keyword"
				],
				"type": "string"
			},
			{
				"name": "device_control.device_id",
				"fieldName": "op37_body_deviceControlDeviceId",
				"path": [
					"device_control.device_id"
				],
				"type": "string"
			},
			{
				"name": "device_control.device_id.keyword",
				"fieldName": "op37_body_deviceControlDeviceIdKeyword",
				"path": [
					"device_control.device_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "device_control.disk_interface",
				"fieldName": "op37_body_deviceControlDiskInterface",
				"path": [
					"device_control.disk_interface"
				],
				"type": "string"
			},
			{
				"name": "device_control.disk_interface.keyword",
				"fieldName": "op37_body_deviceControlDiskInterfaceKeyword",
				"path": [
					"device_control.disk_interface.keyword"
				],
				"type": "string"
			},
			{
				"name": "device_control.drive_compressed",
				"fieldName": "op37_body_deviceControlDriveCompressed",
				"path": [
					"device_control.drive_compressed"
				],
				"type": "boolean"
			},
			{
				"name": "device_control.file_system",
				"fieldName": "op37_body_deviceControlFileSystem",
				"path": [
					"device_control.file_system"
				],
				"type": "string"
			},
			{
				"name": "device_control.file_system.keyword",
				"fieldName": "op37_body_deviceControlFileSystemKeyword",
				"path": [
					"device_control.file_system.keyword"
				],
				"type": "string"
			},
			{
				"name": "device_control.manufacturer",
				"fieldName": "op37_body_deviceControlManufacturer",
				"path": [
					"device_control.manufacturer"
				],
				"type": "string"
			},
			{
				"name": "device_control.manufacturer.keyword",
				"fieldName": "op37_body_deviceControlManufacturerKeyword",
				"path": [
					"device_control.manufacturer.keyword"
				],
				"type": "string"
			},
			{
				"name": "device_control.physical_disk_name",
				"fieldName": "op37_body_deviceControlPhysicalDiskName",
				"path": [
					"device_control.physical_disk_name"
				],
				"type": "string"
			},
			{
				"name": "device_control.physical_disk_name.keyword",
				"fieldName": "op37_body_deviceControlPhysicalDiskNameKeyword",
				"path": [
					"device_control.physical_disk_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "device_control.pnp_device_id",
				"fieldName": "op37_body_deviceControlPnpDeviceId",
				"path": [
					"device_control.pnp_device_id"
				],
				"type": "string"
			},
			{
				"name": "device_control.pnp_device_id.keyword",
				"fieldName": "op37_body_deviceControlPnpDeviceIdKeyword",
				"path": [
					"device_control.pnp_device_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "device_control.serial_number",
				"fieldName": "op37_body_deviceControlSerialNumber",
				"path": [
					"device_control.serial_number"
				],
				"type": "string"
			},
			{
				"name": "device_control.serial_number.keyword",
				"fieldName": "op37_body_deviceControlSerialNumberKeyword",
				"path": [
					"device_control.serial_number.keyword"
				],
				"type": "string"
			},
			{
				"name": "device_control.timestamp_after",
				"fieldName": "op37_body_deviceControlTimestampAfter",
				"path": [
					"device_control.timestamp_after"
				],
				"type": "string"
			},
			{
				"name": "device_control.timestamp_before",
				"fieldName": "op37_body_deviceControlTimestampBefore",
				"path": [
					"device_control.timestamp_before"
				],
				"type": "string"
			},
			{
				"name": "device_control.volume_device_path",
				"fieldName": "op37_body_deviceControlVolumeDevicePath",
				"path": [
					"device_control.volume_device_path"
				],
				"type": "string"
			},
			{
				"name": "device_control.volume_device_path.keyword",
				"fieldName": "op37_body_deviceControlVolumeDevicePathKeyword",
				"path": [
					"device_control.volume_device_path.keyword"
				],
				"type": "string"
			},
			{
				"name": "device_control.volume_name",
				"fieldName": "op37_body_deviceControlVolumeName",
				"path": [
					"device_control.volume_name"
				],
				"type": "string"
			},
			{
				"name": "device_control.volume_name.keyword",
				"fieldName": "op37_body_deviceControlVolumeNameKeyword",
				"path": [
					"device_control.volume_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "device_control.volume_serial",
				"fieldName": "op37_body_deviceControlVolumeSerial",
				"path": [
					"device_control.volume_serial"
				],
				"type": "string"
			},
			{
				"name": "device_control.volume_serial.keyword",
				"fieldName": "op37_body_deviceControlVolumeSerialKeyword",
				"path": [
					"device_control.volume_serial.keyword"
				],
				"type": "string"
			},
			{
				"name": "domain_name",
				"fieldName": "op37_body_domainName",
				"path": [
					"domain_name"
				],
				"type": "string"
			},
			{
				"name": "domain_name.keyword",
				"fieldName": "op37_body_domainNameKeyword",
				"path": [
					"domain_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "end_date",
				"fieldName": "op37_body_endDate",
				"path": [
					"end_date"
				],
				"type": "string"
			},
			{
				"name": "engine_version",
				"fieldName": "op37_body_engineVersion",
				"path": [
					"engine_version"
				],
				"type": "string"
			},
			{
				"name": "engine_version.keyword",
				"fieldName": "op37_body_engineVersionKeyword",
				"path": [
					"engine_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "fully_qualified_host_name",
				"fieldName": "op37_body_fullyQualifiedHostName",
				"path": [
					"fully_qualified_host_name"
				],
				"type": "string"
			},
			{
				"name": "fully_qualified_host_name.keyword",
				"fieldName": "op37_body_fullyQualifiedHostNameKeyword",
				"path": [
					"fully_qualified_host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "group_id",
				"fieldName": "op37_body_groupId",
				"path": [
					"group_id"
				],
				"type": "string"
			},
			{
				"name": "host_name",
				"fieldName": "op37_body_hostName",
				"path": [
					"host_name"
				],
				"type": "string"
			},
			{
				"name": "host_name.keyword",
				"fieldName": "op37_body_hostNameKeyword",
				"path": [
					"host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "is_root_detection",
				"fieldName": "op37_body_isRootDetection",
				"path": [
					"is_root_detection"
				],
				"type": "boolean"
			},
			{
				"name": "is_rtp_stream_event",
				"fieldName": "op37_body_isRtpStreamEvent",
				"path": [
					"is_rtp_stream_event"
				],
				"type": "boolean"
			},
			{
				"name": "job_id",
				"fieldName": "op37_body_jobId",
				"path": [
					"job_id"
				],
				"type": "string"
			},
			{
				"name": "last_user",
				"fieldName": "op37_body_lastUser",
				"path": [
					"last_user"
				],
				"type": "string"
			},
			{
				"name": "last_user.keyword",
				"fieldName": "op37_body_lastUserKeyword",
				"path": [
					"last_user.keyword"
				],
				"type": "string"
			},
			{
				"name": "machine_id",
				"fieldName": "op37_body_machineId",
				"path": [
					"machine_id"
				],
				"type": "string"
			},
			{
				"name": "machine_name",
				"fieldName": "op37_body_machineName",
				"path": [
					"machine_name"
				],
				"type": "string"
			},
			{
				"name": "machine_name.keyword",
				"fieldName": "op37_body_machineNameKeyword",
				"path": [
					"machine_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "md5",
				"fieldName": "op37_body_md5",
				"path": [
					"md5"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op37_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "nics.description",
				"fieldName": "op37_body_nicsDescription",
				"path": [
					"nics.description"
				],
				"type": "string"
			},
			{
				"name": "nics.ips",
				"fieldName": "op37_body_nicsIps",
				"path": [
					"nics.ips"
				],
				"type": "string"
			},
			{
				"name": "nics.mac_address",
				"fieldName": "op37_body_nicsMacAddress",
				"path": [
					"nics.mac_address"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.block_status",
				"fieldName": "op37_body_notDeviceControlBlockStatus",
				"path": [
					"not.device_control.block_status"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.block_status.keyword",
				"fieldName": "op37_body_notDeviceControlBlockStatusKeyword",
				"path": [
					"not.device_control.block_status.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.device_id",
				"fieldName": "op37_body_notDeviceControlDeviceId",
				"path": [
					"not.device_control.device_id"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.device_id.keyword",
				"fieldName": "op37_body_notDeviceControlDeviceIdKeyword",
				"path": [
					"not.device_control.device_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.disk_interface",
				"fieldName": "op37_body_notDeviceControlDiskInterface",
				"path": [
					"not.device_control.disk_interface"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.disk_interface.keyword",
				"fieldName": "op37_body_notDeviceControlDiskInterfaceKeyword",
				"path": [
					"not.device_control.disk_interface.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.file_system",
				"fieldName": "op37_body_notDeviceControlFileSystem",
				"path": [
					"not.device_control.file_system"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.file_system.keyword",
				"fieldName": "op37_body_notDeviceControlFileSystemKeyword",
				"path": [
					"not.device_control.file_system.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.manufacturer",
				"fieldName": "op37_body_notDeviceControlManufacturer",
				"path": [
					"not.device_control.manufacturer"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.manufacturer.keyword",
				"fieldName": "op37_body_notDeviceControlManufacturerKeyword",
				"path": [
					"not.device_control.manufacturer.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.physical_disk_name",
				"fieldName": "op37_body_notDeviceControlPhysicalDiskName",
				"path": [
					"not.device_control.physical_disk_name"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.physical_disk_name.keyword",
				"fieldName": "op37_body_notDeviceControlPhysicalDiskNameKeyword",
				"path": [
					"not.device_control.physical_disk_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.pnp_device_id",
				"fieldName": "op37_body_notDeviceControlPnpDeviceId",
				"path": [
					"not.device_control.pnp_device_id"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.pnp_device_id.keyword",
				"fieldName": "op37_body_notDeviceControlPnpDeviceIdKeyword",
				"path": [
					"not.device_control.pnp_device_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.serial_number",
				"fieldName": "op37_body_notDeviceControlSerialNumber",
				"path": [
					"not.device_control.serial_number"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.serial_number.keyword",
				"fieldName": "op37_body_notDeviceControlSerialNumberKeyword",
				"path": [
					"not.device_control.serial_number.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.volume_device_path",
				"fieldName": "op37_body_notDeviceControlVolumeDevicePath",
				"path": [
					"not.device_control.volume_device_path"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.volume_device_path.keyword",
				"fieldName": "op37_body_notDeviceControlVolumeDevicePathKeyword",
				"path": [
					"not.device_control.volume_device_path.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.volume_name",
				"fieldName": "op37_body_notDeviceControlVolumeName",
				"path": [
					"not.device_control.volume_name"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.volume_name.keyword",
				"fieldName": "op37_body_notDeviceControlVolumeNameKeyword",
				"path": [
					"not.device_control.volume_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.volume_serial",
				"fieldName": "op37_body_notDeviceControlVolumeSerial",
				"path": [
					"not.device_control.volume_serial"
				],
				"type": "string"
			},
			{
				"name": "not.device_control.volume_serial.keyword",
				"fieldName": "op37_body_notDeviceControlVolumeSerialKeyword",
				"path": [
					"not.device_control.volume_serial.keyword"
				],
				"type": "string"
			},
			{
				"name": "object_guid",
				"fieldName": "op37_body_objectGuid",
				"path": [
					"object_guid"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_architecture",
				"fieldName": "op37_body_osInfoOsArchitecture",
				"path": [
					"os_info.os_architecture"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_platform",
				"fieldName": "op37_body_osInfoOsPlatform",
				"path": [
					"os_info.os_platform"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_release_name",
				"fieldName": "op37_body_osInfoOsReleaseName",
				"path": [
					"os_info.os_release_name"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_type",
				"fieldName": "op37_body_osInfoOsType",
				"path": [
					"os_info.os_type"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_version",
				"fieldName": "op37_body_osInfoOsVersion",
				"path": [
					"os_info.os_version"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op37_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			},
			{
				"name": "parent_detection_id",
				"fieldName": "op37_body_parentDetectionId",
				"path": [
					"parent_detection_id"
				],
				"type": "string"
			},
			{
				"name": "path",
				"fieldName": "op37_body_path",
				"path": [
					"path"
				],
				"type": "string"
			},
			{
				"name": "path.keyword",
				"fieldName": "op37_body_pathKeyword",
				"path": [
					"path.keyword"
				],
				"type": "string"
			},
			{
				"name": "plugins.asset_manager.plugin_version",
				"fieldName": "op37_body_pluginsAssetManagerPluginVersion",
				"path": [
					"plugins.asset_manager.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.asset_manager.reboot_reason",
				"fieldName": "op37_body_pluginsAssetManagerRebootReason",
				"path": [
					"plugins.asset_manager.reboot_reason"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_detection_response.plugin_version",
				"fieldName": "op37_body_pluginsEndpointDetectionResponsePluginVersion",
				"path": [
					"plugins.endpoint_detection_response.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_detection_response.reboot_reason",
				"fieldName": "op37_body_pluginsEndpointDetectionResponseRebootReason",
				"path": [
					"plugins.endpoint_detection_response.reboot_reason"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.component_package_version",
				"fieldName": "op37_body_pluginsEndpointProtectionComponentPackageVersion",
				"path": [
					"plugins.endpoint_protection.component_package_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.plugin_version",
				"fieldName": "op37_body_pluginsEndpointProtectionPluginVersion",
				"path": [
					"plugins.endpoint_protection.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.reboot_reason",
				"fieldName": "op37_body_pluginsEndpointProtectionRebootReason",
				"path": [
					"plugins.endpoint_protection.reboot_reason"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.sdk_version",
				"fieldName": "op37_body_pluginsEndpointProtectionSdkVersion",
				"path": [
					"plugins.endpoint_protection.sdk_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.update_package_version",
				"fieldName": "op37_body_pluginsEndpointProtectionUpdatePackageVersion",
				"path": [
					"plugins.endpoint_protection.update_package_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.incident_response.plugin_version",
				"fieldName": "op37_body_pluginsIncidentResponsePluginVersion",
				"path": [
					"plugins.incident_response.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.incident_response.reboot_reason",
				"fieldName": "op37_body_pluginsIncidentResponseRebootReason",
				"path": [
					"plugins.incident_response.reboot_reason"
				],
				"type": "string"
			},
			{
				"name": "plugins.siem.plugin_version",
				"fieldName": "op37_body_pluginsSiemPluginVersion",
				"path": [
					"plugins.siem.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.siem.reboot_reason",
				"fieldName": "op37_body_pluginsSiemRebootReason",
				"path": [
					"plugins.siem.reboot_reason"
				],
				"type": "string"
			},
			{
				"name": "endpoint",
				"fieldName": "op37_body_populateEndpoint",
				"path": [
					"populate",
					"endpoint"
				],
				"type": "boolean"
			},
			{
				"name": "group",
				"fieldName": "op37_body_populateGroup",
				"path": [
					"populate",
					"group"
				],
				"type": "boolean"
			},
			{
				"name": "scan_result",
				"fieldName": "op37_body_populateScanResult",
				"path": [
					"populate",
					"scan_result"
				],
				"type": "boolean"
			},
			{
				"name": "process_name",
				"fieldName": "op37_body_processName",
				"path": [
					"process_name"
				],
				"type": "string"
			},
			{
				"name": "process_name.keyword",
				"fieldName": "op37_body_processNameKeyword",
				"path": [
					"process_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "protection_status",
				"fieldName": "op37_body_protectionStatus",
				"path": [
					"protection_status"
				],
				"type": "string"
			},
			{
				"name": "reported_at_after",
				"fieldName": "op37_body_reportedAtAfter",
				"path": [
					"reported_at_after"
				],
				"type": "string"
			},
			{
				"name": "reported_at_before",
				"fieldName": "op37_body_reportedAtBefore",
				"path": [
					"reported_at_before"
				],
				"type": "string"
			},
			{
				"name": "scan_id",
				"fieldName": "op37_body_scanId",
				"path": [
					"scan_id"
				],
				"type": "string"
			},
			{
				"name": "scan_type",
				"fieldName": "op37_body_scanType",
				"path": [
					"scan_type"
				],
				"type": "string"
			},
			{
				"name": "scanned_at_after",
				"fieldName": "op37_body_scannedAtAfter",
				"path": [
					"scanned_at_after"
				],
				"type": "string"
			},
			{
				"name": "scanned_at_before",
				"fieldName": "op37_body_scannedAtBefore",
				"path": [
					"scanned_at_before"
				],
				"type": "string"
			},
			{
				"name": "schedule_etag",
				"fieldName": "op37_body_scheduleEtag",
				"path": [
					"schedule_etag"
				],
				"type": "string"
			},
			{
				"name": "schedule_id",
				"fieldName": "op37_body_scheduleId",
				"path": [
					"schedule_id"
				],
				"type": "string"
			},
			{
				"name": "sha256",
				"fieldName": "op37_body_sha256",
				"path": [
					"sha256"
				],
				"type": "string"
			},
			{
				"name": "sort_field",
				"fieldName": "op37_body_sortField",
				"path": [
					"sort_field"
				],
				"type": "string"
			},
			{
				"name": "sort_order",
				"fieldName": "op37_body_sortOrder",
				"path": [
					"sort_order"
				],
				"type": "string"
			},
			{
				"name": "start_date",
				"fieldName": "op37_body_startDate",
				"path": [
					"start_date"
				],
				"type": "string"
			},
			{
				"name": "status",
				"fieldName": "op37_body_status",
				"path": [
					"status"
				],
				"type": "string"
			},
			{
				"name": "threat_name",
				"fieldName": "op37_body_threatName",
				"path": [
					"threat_name"
				],
				"type": "string"
			},
			{
				"name": "threat_name.keyword",
				"fieldName": "op37_body_threatNameKeyword",
				"path": [
					"threat_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "trace_id",
				"fieldName": "op37_body_traceId",
				"path": [
					"trace_id"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op37_body_type",
				"path": [
					"type"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postDevicecontrolExport",
		"resource": "devicecontrol",
		"name": "Export Device Control Events",
		"method": "POST",
		"path": "/nebula/v1/devicecontrol/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op38_bodyFields",
		"bodyFieldName": "op38_body",
		"bodyParameters": [
			{
				"name": "download",
				"fieldName": "op38_body_download",
				"path": [
					"download"
				],
				"type": "boolean"
			},
			{
				"name": "format",
				"fieldName": "op38_body_format",
				"path": [
					"format"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op38_body_type",
				"path": [
					"type"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postDevicecontrolSearchGroupby",
		"resource": "devicecontrol",
		"name": "Search Device Control Events Group By",
		"method": "POST",
		"path": "/nebula/v1/devicecontrol/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op39_bodyFields",
		"bodyFieldName": "op39_body",
		"bodyParameters": [
			{
				"name": "group_by",
				"fieldName": "op39_body_groupBy",
				"path": [
					"group_by"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op39_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op39_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			}
		]
	},
	{
		"value": "getDevicecontrolById",
		"resource": "devicecontrol",
		"name": "Get Device Control Event By ID",
		"method": "GET",
		"path": "/nebula/v1/devicecontrol/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op40_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "postDns",
		"resource": "dns",
		"name": "Search DNS Logs",
		"method": "POST",
		"path": "/nebula/v1/dns",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op41_bodyFields",
		"bodyFieldName": "op41_body",
		"bodyParameters": [
			{
				"name": "account_id",
				"fieldName": "op41_body_accountId",
				"path": [
					"account_id"
				],
				"type": "string"
			},
			{
				"name": "account_id.keyword",
				"fieldName": "op41_body_accountIdKeyword",
				"path": [
					"account_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "action",
				"fieldName": "op41_body_action",
				"path": [
					"action"
				],
				"type": "string"
			},
			{
				"name": "action.keyword",
				"fieldName": "op41_body_actionKeyword",
				"path": [
					"action.keyword"
				],
				"type": "string"
			},
			{
				"name": "group_id",
				"fieldName": "op41_body_groupId",
				"path": [
					"group_id"
				],
				"type": "string"
			},
			{
				"name": "group_id.keyword",
				"fieldName": "op41_body_groupIdKeyword",
				"path": [
					"group_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "group_name",
				"fieldName": "op41_body_groupName",
				"path": [
					"group_name"
				],
				"type": "string"
			},
			{
				"name": "group_name.keyword",
				"fieldName": "op41_body_groupNameKeyword",
				"path": [
					"group_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "id",
				"fieldName": "op41_body_id",
				"path": [
					"id"
				],
				"type": "string"
			},
			{
				"name": "log.colo_id",
				"fieldName": "op41_body_logColoId",
				"path": [
					"log.colo_id"
				],
				"type": "number"
			},
			{
				"name": "log.colo_id_gt",
				"fieldName": "op41_body_logColoIdGt",
				"path": [
					"log.colo_id_gt"
				],
				"type": "number"
			},
			{
				"name": "log.colo_id_gte",
				"fieldName": "op41_body_logColoIdGte",
				"path": [
					"log.colo_id_gte"
				],
				"type": "number"
			},
			{
				"name": "log.colo_id_lt",
				"fieldName": "op41_body_logColoIdLt",
				"path": [
					"log.colo_id_lt"
				],
				"type": "number"
			},
			{
				"name": "log.colo_id_lte",
				"fieldName": "op41_body_logColoIdLte",
				"path": [
					"log.colo_id_lte"
				],
				"type": "number"
			},
			{
				"name": "log.datetime_after",
				"fieldName": "op41_body_logDatetimeAfter",
				"path": [
					"log.datetime_after"
				],
				"type": "string"
			},
			{
				"name": "log.datetime_before",
				"fieldName": "op41_body_logDatetimeBefore",
				"path": [
					"log.datetime_before"
				],
				"type": "string"
			},
			{
				"name": "log.dst_ip",
				"fieldName": "op41_body_logDstIp",
				"path": [
					"log.dst_ip"
				],
				"type": "string"
			},
			{
				"name": "log.dst_port",
				"fieldName": "op41_body_logDstPort",
				"path": [
					"log.dst_port"
				],
				"type": "number"
			},
			{
				"name": "log.dst_port_gt",
				"fieldName": "op41_body_logDstPortGt",
				"path": [
					"log.dst_port_gt"
				],
				"type": "number"
			},
			{
				"name": "log.dst_port_gte",
				"fieldName": "op41_body_logDstPortGte",
				"path": [
					"log.dst_port_gte"
				],
				"type": "number"
			},
			{
				"name": "log.dst_port_lt",
				"fieldName": "op41_body_logDstPortLt",
				"path": [
					"log.dst_port_lt"
				],
				"type": "number"
			},
			{
				"name": "log.dst_port_lte",
				"fieldName": "op41_body_logDstPortLte",
				"path": [
					"log.dst_port_lte"
				],
				"type": "number"
			},
			{
				"name": "log.policy",
				"fieldName": "op41_body_logPolicy",
				"path": [
					"log.policy"
				],
				"type": "string"
			},
			{
				"name": "log.policy.keyword",
				"fieldName": "op41_body_logPolicyKeyword",
				"path": [
					"log.policy.keyword"
				],
				"type": "string"
			},
			{
				"name": "log.policy_id",
				"fieldName": "op41_body_logPolicyId",
				"path": [
					"log.policy_id"
				],
				"type": "string"
			},
			{
				"name": "log.policy_id.keyword",
				"fieldName": "op41_body_logPolicyIdKeyword",
				"path": [
					"log.policy_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "log.protocol",
				"fieldName": "op41_body_logProtocol",
				"path": [
					"log.protocol"
				],
				"type": "string"
			},
			{
				"name": "log.protocol.keyword",
				"fieldName": "op41_body_logProtocolKeyword",
				"path": [
					"log.protocol.keyword"
				],
				"type": "string"
			},
			{
				"name": "log.query_name",
				"fieldName": "op41_body_logQueryName",
				"path": [
					"log.query_name"
				],
				"type": "string"
			},
			{
				"name": "log.query_name.keyword",
				"fieldName": "op41_body_logQueryNameKeyword",
				"path": [
					"log.query_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "log.query_name_reversed",
				"fieldName": "op41_body_logQueryNameReversed",
				"path": [
					"log.query_name_reversed"
				],
				"type": "string"
			},
			{
				"name": "log.query_name_reversed.keyword",
				"fieldName": "op41_body_logQueryNameReversedKeyword",
				"path": [
					"log.query_name_reversed.keyword"
				],
				"type": "string"
			},
			{
				"name": "log.query_size",
				"fieldName": "op41_body_logQuerySize",
				"path": [
					"log.query_size"
				],
				"type": "number"
			},
			{
				"name": "log.query_size_gt",
				"fieldName": "op41_body_logQuerySizeGt",
				"path": [
					"log.query_size_gt"
				],
				"type": "number"
			},
			{
				"name": "log.query_size_gte",
				"fieldName": "op41_body_logQuerySizeGte",
				"path": [
					"log.query_size_gte"
				],
				"type": "number"
			},
			{
				"name": "log.query_size_lt",
				"fieldName": "op41_body_logQuerySizeLt",
				"path": [
					"log.query_size_lt"
				],
				"type": "number"
			},
			{
				"name": "log.query_size_lte",
				"fieldName": "op41_body_logQuerySizeLte",
				"path": [
					"log.query_size_lte"
				],
				"type": "number"
			},
			{
				"name": "log.query_type",
				"fieldName": "op41_body_logQueryType",
				"path": [
					"log.query_type"
				],
				"type": "number"
			},
			{
				"name": "log.query_type_gt",
				"fieldName": "op41_body_logQueryTypeGt",
				"path": [
					"log.query_type_gt"
				],
				"type": "number"
			},
			{
				"name": "log.query_type_gte",
				"fieldName": "op41_body_logQueryTypeGte",
				"path": [
					"log.query_type_gte"
				],
				"type": "number"
			},
			{
				"name": "log.query_type_lt",
				"fieldName": "op41_body_logQueryTypeLt",
				"path": [
					"log.query_type_lt"
				],
				"type": "number"
			},
			{
				"name": "log.query_type_lte",
				"fieldName": "op41_body_logQueryTypeLte",
				"path": [
					"log.query_type_lte"
				],
				"type": "number"
			},
			{
				"name": "log.resolver_decision",
				"fieldName": "op41_body_logResolverDecision",
				"path": [
					"log.resolver_decision"
				],
				"type": "string"
			},
			{
				"name": "log.resolver_decision.keyword",
				"fieldName": "op41_body_logResolverDecisionKeyword",
				"path": [
					"log.resolver_decision.keyword"
				],
				"type": "string"
			},
			{
				"name": "log.src_ip",
				"fieldName": "op41_body_logSrcIp",
				"path": [
					"log.src_ip"
				],
				"type": "string"
			},
			{
				"name": "log.src_port",
				"fieldName": "op41_body_logSrcPort",
				"path": [
					"log.src_port"
				],
				"type": "number"
			},
			{
				"name": "log.src_port_gt",
				"fieldName": "op41_body_logSrcPortGt",
				"path": [
					"log.src_port_gt"
				],
				"type": "number"
			},
			{
				"name": "log.src_port_gte",
				"fieldName": "op41_body_logSrcPortGte",
				"path": [
					"log.src_port_gte"
				],
				"type": "number"
			},
			{
				"name": "log.src_port_lt",
				"fieldName": "op41_body_logSrcPortLt",
				"path": [
					"log.src_port_lt"
				],
				"type": "number"
			},
			{
				"name": "log.src_port_lte",
				"fieldName": "op41_body_logSrcPortLte",
				"path": [
					"log.src_port_lte"
				],
				"type": "number"
			},
			{
				"name": "log.user_id",
				"fieldName": "op41_body_logUserId",
				"path": [
					"log.user_id"
				],
				"type": "string"
			},
			{
				"name": "log.user_id.keyword",
				"fieldName": "op41_body_logUserIdKeyword",
				"path": [
					"log.user_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "machine_id",
				"fieldName": "op41_body_machineId",
				"path": [
					"machine_id"
				],
				"type": "string"
			},
			{
				"name": "machine_id.keyword",
				"fieldName": "op41_body_machineIdKeyword",
				"path": [
					"machine_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op41_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "not.account_id",
				"fieldName": "op41_body_notAccountId",
				"path": [
					"not.account_id"
				],
				"type": "string"
			},
			{
				"name": "not.account_id.keyword",
				"fieldName": "op41_body_notAccountIdKeyword",
				"path": [
					"not.account_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.action",
				"fieldName": "op41_body_notAction",
				"path": [
					"not.action"
				],
				"type": "string"
			},
			{
				"name": "not.action.keyword",
				"fieldName": "op41_body_notActionKeyword",
				"path": [
					"not.action.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.group_id",
				"fieldName": "op41_body_notGroupId",
				"path": [
					"not.group_id"
				],
				"type": "string"
			},
			{
				"name": "not.group_id.keyword",
				"fieldName": "op41_body_notGroupIdKeyword",
				"path": [
					"not.group_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.group_name",
				"fieldName": "op41_body_notGroupName",
				"path": [
					"not.group_name"
				],
				"type": "string"
			},
			{
				"name": "not.group_name.keyword",
				"fieldName": "op41_body_notGroupNameKeyword",
				"path": [
					"not.group_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.id",
				"fieldName": "op41_body_notId",
				"path": [
					"not.id"
				],
				"type": "string"
			},
			{
				"name": "not.log.dst_ip",
				"fieldName": "op41_body_notLogDstIp",
				"path": [
					"not.log.dst_ip"
				],
				"type": "string"
			},
			{
				"name": "not.log.policy",
				"fieldName": "op41_body_notLogPolicy",
				"path": [
					"not.log.policy"
				],
				"type": "string"
			},
			{
				"name": "not.log.policy.keyword",
				"fieldName": "op41_body_notLogPolicyKeyword",
				"path": [
					"not.log.policy.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.log.policy_id",
				"fieldName": "op41_body_notLogPolicyId",
				"path": [
					"not.log.policy_id"
				],
				"type": "string"
			},
			{
				"name": "not.log.policy_id.keyword",
				"fieldName": "op41_body_notLogPolicyIdKeyword",
				"path": [
					"not.log.policy_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.log.protocol",
				"fieldName": "op41_body_notLogProtocol",
				"path": [
					"not.log.protocol"
				],
				"type": "string"
			},
			{
				"name": "not.log.protocol.keyword",
				"fieldName": "op41_body_notLogProtocolKeyword",
				"path": [
					"not.log.protocol.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.log.query_name",
				"fieldName": "op41_body_notLogQueryName",
				"path": [
					"not.log.query_name"
				],
				"type": "string"
			},
			{
				"name": "not.log.query_name.keyword",
				"fieldName": "op41_body_notLogQueryNameKeyword",
				"path": [
					"not.log.query_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.log.query_name_reversed",
				"fieldName": "op41_body_notLogQueryNameReversed",
				"path": [
					"not.log.query_name_reversed"
				],
				"type": "string"
			},
			{
				"name": "not.log.query_name_reversed.keyword",
				"fieldName": "op41_body_notLogQueryNameReversedKeyword",
				"path": [
					"not.log.query_name_reversed.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.log.resolver_decision",
				"fieldName": "op41_body_notLogResolverDecision",
				"path": [
					"not.log.resolver_decision"
				],
				"type": "string"
			},
			{
				"name": "not.log.resolver_decision.keyword",
				"fieldName": "op41_body_notLogResolverDecisionKeyword",
				"path": [
					"not.log.resolver_decision.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.log.src_ip",
				"fieldName": "op41_body_notLogSrcIp",
				"path": [
					"not.log.src_ip"
				],
				"type": "string"
			},
			{
				"name": "not.log.user_id",
				"fieldName": "op41_body_notLogUserId",
				"path": [
					"not.log.user_id"
				],
				"type": "string"
			},
			{
				"name": "not.log.user_id.keyword",
				"fieldName": "op41_body_notLogUserIdKeyword",
				"path": [
					"not.log.user_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.machine_id",
				"fieldName": "op41_body_notMachineId",
				"path": [
					"not.machine_id"
				],
				"type": "string"
			},
			{
				"name": "not.machine_id.keyword",
				"fieldName": "op41_body_notMachineIdKeyword",
				"path": [
					"not.machine_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.parent_account_id",
				"fieldName": "op41_body_notParentAccountId",
				"path": [
					"not.parent_account_id"
				],
				"type": "string"
			},
			{
				"name": "not.parent_account_id.keyword",
				"fieldName": "op41_body_notParentAccountIdKeyword",
				"path": [
					"not.parent_account_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.policy_id",
				"fieldName": "op41_body_notPolicyId",
				"path": [
					"not.policy_id"
				],
				"type": "string"
			},
			{
				"name": "not.policy_id.keyword",
				"fieldName": "op41_body_notPolicyIdKeyword",
				"path": [
					"not.policy_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.policy_name",
				"fieldName": "op41_body_notPolicyName",
				"path": [
					"not.policy_name"
				],
				"type": "string"
			},
			{
				"name": "not.policy_name.keyword",
				"fieldName": "op41_body_notPolicyNameKeyword",
				"path": [
					"not.policy_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.resolved_ips",
				"fieldName": "op41_body_notResolvedIps",
				"path": [
					"not.resolved_ips"
				],
				"type": "string"
			},
			{
				"name": "not.rule_id",
				"fieldName": "op41_body_notRuleId",
				"path": [
					"not.rule_id"
				],
				"type": "string"
			},
			{
				"name": "not.rule_id.keyword",
				"fieldName": "op41_body_notRuleIdKeyword",
				"path": [
					"not.rule_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.rule_name",
				"fieldName": "op41_body_notRuleName",
				"path": [
					"not.rule_name"
				],
				"type": "string"
			},
			{
				"name": "not.rule_name.keyword",
				"fieldName": "op41_body_notRuleNameKeyword",
				"path": [
					"not.rule_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op41_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			},
			{
				"name": "parent_account_id",
				"fieldName": "op41_body_parentAccountId",
				"path": [
					"parent_account_id"
				],
				"type": "string"
			},
			{
				"name": "parent_account_id.keyword",
				"fieldName": "op41_body_parentAccountIdKeyword",
				"path": [
					"parent_account_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "policy_id",
				"fieldName": "op41_body_policyId",
				"path": [
					"policy_id"
				],
				"type": "string"
			},
			{
				"name": "policy_id.keyword",
				"fieldName": "op41_body_policyIdKeyword",
				"path": [
					"policy_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "policy_name",
				"fieldName": "op41_body_policyName",
				"path": [
					"policy_name"
				],
				"type": "string"
			},
			{
				"name": "policy_name.keyword",
				"fieldName": "op41_body_policyNameKeyword",
				"path": [
					"policy_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "endpoint",
				"fieldName": "op41_body_populateEndpoint",
				"path": [
					"populate",
					"endpoint"
				],
				"type": "boolean"
			},
			{
				"name": "group",
				"fieldName": "op41_body_populateGroup",
				"path": [
					"populate",
					"group"
				],
				"type": "boolean"
			},
			{
				"name": "resolved_ips",
				"fieldName": "op41_body_resolvedIps",
				"path": [
					"resolved_ips"
				],
				"type": "string"
			},
			{
				"name": "rule_id",
				"fieldName": "op41_body_ruleId",
				"path": [
					"rule_id"
				],
				"type": "string"
			},
			{
				"name": "rule_id.keyword",
				"fieldName": "op41_body_ruleIdKeyword",
				"path": [
					"rule_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "rule_name",
				"fieldName": "op41_body_ruleName",
				"path": [
					"rule_name"
				],
				"type": "string"
			},
			{
				"name": "rule_name.keyword",
				"fieldName": "op41_body_ruleNameKeyword",
				"path": [
					"rule_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "sort_field",
				"fieldName": "op41_body_sortField",
				"path": [
					"sort_field"
				],
				"type": "string"
			},
			{
				"name": "sort_order",
				"fieldName": "op41_body_sortOrder",
				"path": [
					"sort_order"
				],
				"type": "string"
			},
			{
				"name": "timestamp_after",
				"fieldName": "op41_body_timestampAfter",
				"path": [
					"timestamp_after"
				],
				"type": "string"
			},
			{
				"name": "timestamp_before",
				"fieldName": "op41_body_timestampBefore",
				"path": [
					"timestamp_before"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postDnsExport",
		"resource": "dns",
		"name": "Export DNS Log Data",
		"method": "POST",
		"path": "/nebula/v1/dns/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op42_bodyFields",
		"bodyFieldName": "op42_body",
		"bodyParameters": [
			{
				"name": "download",
				"fieldName": "op42_body_download",
				"path": [
					"download"
				],
				"type": "boolean"
			},
			{
				"name": "format",
				"fieldName": "op42_body_format",
				"path": [
					"format"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op42_body_type",
				"path": [
					"type"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postDnsSearchGroupby",
		"resource": "dns",
		"name": "Search DNS Logs Group By",
		"method": "POST",
		"path": "/nebula/v1/dns/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op43_bodyFields",
		"bodyFieldName": "op43_body",
		"bodyParameters": [
			{
				"name": "group_by",
				"fieldName": "op43_body_groupBy",
				"path": [
					"group_by"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op43_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op43_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			}
		]
	},
	{
		"value": "deleteEndpoints",
		"resource": "endpoints",
		"name": "Delete Multiple Machines",
		"method": "DELETE",
		"path": "/nebula/v1/endpoints",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op44_body",
		"bodyParameters": []
	},
	{
		"value": "postEndpoints",
		"resource": "endpoints",
		"name": "Search Endpoints",
		"method": "POST",
		"path": "/nebula/v1/endpoints",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op45_bodyFields",
		"bodyFieldName": "op45_body",
		"bodyParameters": [
			{
				"name": "aggregate_by_account",
				"fieldName": "op45_body_aggregateByAccount",
				"path": [
					"aggregate_by_account"
				],
				"type": "boolean"
			},
			{
				"name": "alerts.codes",
				"fieldName": "op45_body_alertsCodes",
				"path": [
					"alerts.codes"
				],
				"type": "string"
			},
			{
				"name": "alias",
				"fieldName": "op45_body_alias",
				"path": [
					"alias"
				],
				"type": "string"
			},
			{
				"name": "app_block_count_after",
				"fieldName": "op45_body_appBlockCountAfter",
				"path": [
					"app_block_count_after"
				],
				"type": "string"
			},
			{
				"name": "at_after",
				"fieldName": "op45_body_atAfter",
				"path": [
					"at_after"
				],
				"type": "string"
			},
			{
				"name": "at_before",
				"fieldName": "op45_body_atBefore",
				"path": [
					"at_before"
				],
				"type": "string"
			},
			{
				"name": "created_at_after",
				"fieldName": "op45_body_createdAtAfter",
				"path": [
					"created_at_after"
				],
				"type": "string"
			},
			{
				"name": "created_at_before",
				"fieldName": "op45_body_createdAtBefore",
				"path": [
					"created_at_before"
				],
				"type": "string"
			},
			{
				"name": "deleted_at_after",
				"fieldName": "op45_body_deletedAtAfter",
				"path": [
					"deleted_at_after"
				],
				"type": "string"
			},
			{
				"name": "deleted_at_before",
				"fieldName": "op45_body_deletedAtBefore",
				"path": [
					"deleted_at_before"
				],
				"type": "string"
			},
			{
				"name": "domain_name",
				"fieldName": "op45_body_domainName",
				"path": [
					"domain_name"
				],
				"type": "string"
			},
			{
				"name": "domain_name.keyword",
				"fieldName": "op45_body_domainNameKeyword",
				"path": [
					"domain_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "engine_version",
				"fieldName": "op45_body_engineVersion",
				"path": [
					"engine_version"
				],
				"type": "string"
			},
			{
				"name": "engine_version.keyword",
				"fieldName": "op45_body_engineVersionKeyword",
				"path": [
					"engine_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "engine_version_gt",
				"fieldName": "op45_body_engineVersionGt",
				"path": [
					"engine_version_gt"
				],
				"type": "string"
			},
			{
				"name": "engine_version_gte",
				"fieldName": "op45_body_engineVersionGte",
				"path": [
					"engine_version_gte"
				],
				"type": "string"
			},
			{
				"name": "engine_version_lt",
				"fieldName": "op45_body_engineVersionLt",
				"path": [
					"engine_version_lt"
				],
				"type": "string"
			},
			{
				"name": "engine_version_lte",
				"fieldName": "op45_body_engineVersionLte",
				"path": [
					"engine_version_lte"
				],
				"type": "string"
			},
			{
				"name": "fully_qualified_host_name",
				"fieldName": "op45_body_fullyQualifiedHostName",
				"path": [
					"fully_qualified_host_name"
				],
				"type": "string"
			},
			{
				"name": "fully_qualified_host_name.keyword",
				"fieldName": "op45_body_fullyQualifiedHostNameKeyword",
				"path": [
					"fully_qualified_host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "group_id",
				"fieldName": "op45_body_groupId",
				"path": [
					"group_id"
				],
				"type": "string"
			},
			{
				"name": "group_name",
				"fieldName": "op45_body_groupName",
				"path": [
					"group_name"
				],
				"type": "string"
			},
			{
				"name": "group_name.keyword",
				"fieldName": "op45_body_groupNameKeyword",
				"path": [
					"group_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "has_alerts",
				"fieldName": "op45_body_hasAlerts",
				"path": [
					"has_alerts"
				],
				"type": "boolean"
			},
			{
				"name": "host_name",
				"fieldName": "op45_body_hostName",
				"path": [
					"host_name"
				],
				"type": "string"
			},
			{
				"name": "host_name.keyword",
				"fieldName": "op45_body_hostNameKeyword",
				"path": [
					"host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "infection_found",
				"fieldName": "op45_body_infectionFound",
				"path": [
					"infection_found"
				],
				"type": "boolean"
			},
			{
				"name": "is_deleted",
				"fieldName": "op45_body_isDeleted",
				"path": [
					"is_deleted"
				],
				"type": "boolean"
			},
			{
				"name": "is_isolated",
				"fieldName": "op45_body_isIsolated",
				"path": [
					"is_isolated"
				],
				"type": "boolean"
			},
			{
				"name": "is_software_update_available",
				"fieldName": "op45_body_isSoftwareUpdateAvailable",
				"path": [
					"is_software_update_available"
				],
				"type": "boolean"
			},
			{
				"name": "last_assets_scan_at_after",
				"fieldName": "op45_body_lastAssetsScanAtAfter",
				"path": [
					"last_assets_scan_at_after"
				],
				"type": "string"
			},
			{
				"name": "last_assets_scan_at_before",
				"fieldName": "op45_body_lastAssetsScanAtBefore",
				"path": [
					"last_assets_scan_at_before"
				],
				"type": "string"
			},
			{
				"name": "last_day_seen_after",
				"fieldName": "op45_body_lastDaySeenAfter",
				"path": [
					"last_day_seen_after"
				],
				"type": "string"
			},
			{
				"name": "last_day_seen_before",
				"fieldName": "op45_body_lastDaySeenBefore",
				"path": [
					"last_day_seen_before"
				],
				"type": "string"
			},
			{
				"name": "last_scan_after",
				"fieldName": "op45_body_lastScanAfter",
				"path": [
					"last_scan_after"
				],
				"type": "string"
			},
			{
				"name": "last_scan_before",
				"fieldName": "op45_body_lastScanBefore",
				"path": [
					"last_scan_before"
				],
				"type": "string"
			},
			{
				"name": "last_user",
				"fieldName": "op45_body_lastUser",
				"path": [
					"last_user"
				],
				"type": "string"
			},
			{
				"name": "last_user.keyword",
				"fieldName": "op45_body_lastUserKeyword",
				"path": [
					"last_user.keyword"
				],
				"type": "string"
			},
			{
				"name": "machine_id",
				"fieldName": "op45_body_machineId",
				"path": [
					"machine_id"
				],
				"type": "string"
			},
			{
				"name": "machine_ip",
				"fieldName": "op45_body_machineIp",
				"path": [
					"machine_ip"
				],
				"type": "string"
			},
			{
				"name": "marked_for_deletion_after",
				"fieldName": "op45_body_markedForDeletionAfter",
				"path": [
					"marked_for_deletion_after"
				],
				"type": "string"
			},
			{
				"name": "marked_for_deletion_before",
				"fieldName": "op45_body_markedForDeletionBefore",
				"path": [
					"marked_for_deletion_before"
				],
				"type": "string"
			},
			{
				"name": "name_multi_search",
				"fieldName": "op45_body_nameMultiSearch",
				"path": [
					"name_multi_search"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op45_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "nics.description",
				"fieldName": "op45_body_nicsDescription",
				"path": [
					"nics.description"
				],
				"type": "string"
			},
			{
				"name": "nics.ips",
				"fieldName": "op45_body_nicsIps",
				"path": [
					"nics.ips"
				],
				"type": "string"
			},
			{
				"name": "nics.mac_address",
				"fieldName": "op45_body_nicsMacAddress",
				"path": [
					"nics.mac_address"
				],
				"type": "string"
			},
			{
				"name": "object_guid",
				"fieldName": "op45_body_objectGuid",
				"path": [
					"object_guid"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_architecture",
				"fieldName": "op45_body_osInfoOsArchitecture",
				"path": [
					"os_info.os_architecture"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_platform",
				"fieldName": "op45_body_osInfoOsPlatform",
				"path": [
					"os_info.os_platform"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_release_name",
				"fieldName": "op45_body_osInfoOsReleaseName",
				"path": [
					"os_info.os_release_name"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_release_name.keyword",
				"fieldName": "op45_body_osInfoOsReleaseNameKeyword",
				"path": [
					"os_info.os_release_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_type",
				"fieldName": "op45_body_osInfoOsType",
				"path": [
					"os_info.os_type"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_version",
				"fieldName": "op45_body_osInfoOsVersion",
				"path": [
					"os_info.os_version"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op45_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			},
			{
				"name": "plugins.asset_manager.alerts.codes",
				"fieldName": "op45_body_pluginsAssetManagerAlertsCodes",
				"path": [
					"plugins.asset_manager.alerts.codes"
				],
				"type": "string"
			},
			{
				"name": "plugins.asset_manager.plugin_version",
				"fieldName": "op45_body_pluginsAssetManagerPluginVersion",
				"path": [
					"plugins.asset_manager.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.asset_manager.reboot_reason",
				"fieldName": "op45_body_pluginsAssetManagerRebootReason",
				"path": [
					"plugins.asset_manager.reboot_reason"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_detection_and_response.alerts.codes",
				"fieldName": "op45_body_pluginsEndpointDetectionAndResponseAlertsCodes",
				"path": [
					"plugins.endpoint_detection_and_response.alerts.codes"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_detection_and_response.plugin_version",
				"fieldName": "op45_body_pluginsEndpointDetectionAndResponsePluginVersion",
				"path": [
					"plugins.endpoint_detection_and_response.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_detection_and_response.reboot_reason",
				"fieldName": "op45_body_pluginsEndpointDetectionAndResponseRebootReason",
				"path": [
					"plugins.endpoint_detection_and_response.reboot_reason"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.alerts.codes",
				"fieldName": "op45_body_pluginsEndpointProtectionAlertsCodes",
				"path": [
					"plugins.endpoint_protection.alerts.codes"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.component_package_version",
				"fieldName": "op45_body_pluginsEndpointProtectionComponentPackageVersion",
				"path": [
					"plugins.endpoint_protection.component_package_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.plugin_version",
				"fieldName": "op45_body_pluginsEndpointProtectionPluginVersion",
				"path": [
					"plugins.endpoint_protection.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.reboot_reason",
				"fieldName": "op45_body_pluginsEndpointProtectionRebootReason",
				"path": [
					"plugins.endpoint_protection.reboot_reason"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.sdk_version",
				"fieldName": "op45_body_pluginsEndpointProtectionSdkVersion",
				"path": [
					"plugins.endpoint_protection.sdk_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.update_package_version",
				"fieldName": "op45_body_pluginsEndpointProtectionUpdatePackageVersion",
				"path": [
					"plugins.endpoint_protection.update_package_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.update_package_version.keyword",
				"fieldName": "op45_body_pluginsEndpointProtectionUpdatePackageVersionKeyword",
				"path": [
					"plugins.endpoint_protection.update_package_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "plugins.incident_response.alerts.codes",
				"fieldName": "op45_body_pluginsIncidentResponseAlertsCodes",
				"path": [
					"plugins.incident_response.alerts.codes"
				],
				"type": "string"
			},
			{
				"name": "plugins.incident_response.plugin_version",
				"fieldName": "op45_body_pluginsIncidentResponsePluginVersion",
				"path": [
					"plugins.incident_response.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.incident_response.reboot_reason",
				"fieldName": "op45_body_pluginsIncidentResponseRebootReason",
				"path": [
					"plugins.incident_response.reboot_reason"
				],
				"type": "string"
			},
			{
				"name": "plugins.siem.alerts.codes",
				"fieldName": "op45_body_pluginsSiemAlertsCodes",
				"path": [
					"plugins.siem.alerts.codes"
				],
				"type": "string"
			},
			{
				"name": "plugins.siem.plugin_version",
				"fieldName": "op45_body_pluginsSiemPluginVersion",
				"path": [
					"plugins.siem.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.siem.reboot_reason",
				"fieldName": "op45_body_pluginsSiemRebootReason",
				"path": [
					"plugins.siem.reboot_reason"
				],
				"type": "string"
			},
			{
				"name": "policy_etag",
				"fieldName": "op45_body_policyEtag",
				"path": [
					"policy_etag"
				],
				"type": "string"
			},
			{
				"name": "policy_id",
				"fieldName": "op45_body_policyId",
				"path": [
					"policy_id"
				],
				"type": "string"
			},
			{
				"name": "policy_name",
				"fieldName": "op45_body_policyName",
				"path": [
					"policy_name"
				],
				"type": "string"
			},
			{
				"name": "policy_name.keyword",
				"fieldName": "op45_body_policyNameKeyword",
				"path": [
					"policy_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "account",
				"fieldName": "op45_body_populateAccount",
				"path": [
					"populate",
					"account"
				],
				"type": "boolean"
			},
			{
				"name": "app_block",
				"fieldName": "op45_body_populateAppBlock",
				"path": [
					"populate",
					"app_block"
				],
				"type": "boolean"
			},
			{
				"name": "default_group",
				"fieldName": "op45_body_populateDefaultGroup",
				"path": [
					"populate",
					"default_group"
				],
				"type": "boolean"
			},
			{
				"name": "last_job",
				"fieldName": "op45_body_populateLastJob",
				"path": [
					"populate",
					"last_job"
				],
				"type": "boolean"
			},
			{
				"name": "platform",
				"fieldName": "op45_body_populatePlatform",
				"path": [
					"populate",
					"platform"
				],
				"type": "boolean"
			},
			{
				"name": "protection_status",
				"fieldName": "op45_body_protectionStatus",
				"path": [
					"protection_status"
				],
				"type": "string"
			},
			{
				"name": "reboot_required",
				"fieldName": "op45_body_rebootRequired",
				"path": [
					"reboot_required"
				],
				"type": "boolean"
			},
			{
				"name": "serial_number",
				"fieldName": "op45_body_serialNumber",
				"path": [
					"serial_number"
				],
				"type": "string"
			},
			{
				"name": "serial_number.keyword",
				"fieldName": "op45_body_serialNumberKeyword",
				"path": [
					"serial_number.keyword"
				],
				"type": "string"
			},
			{
				"name": "sort_field",
				"fieldName": "op45_body_sortField",
				"path": [
					"sort_field"
				],
				"type": "string"
			},
			{
				"name": "sort_order",
				"fieldName": "op45_body_sortOrder",
				"path": [
					"sort_order"
				],
				"type": "string"
			},
			{
				"name": "source_location.city",
				"fieldName": "op45_body_sourceLocationCity",
				"path": [
					"source_location.city"
				],
				"type": "string"
			},
			{
				"name": "source_location.continent",
				"fieldName": "op45_body_sourceLocationContinent",
				"path": [
					"source_location.continent"
				],
				"type": "string"
			},
			{
				"name": "source_location.country",
				"fieldName": "op45_body_sourceLocationCountry",
				"path": [
					"source_location.country"
				],
				"type": "string"
			},
			{
				"name": "source_location.country_iso",
				"fieldName": "op45_body_sourceLocationCountryIso",
				"path": [
					"source_location.country_iso"
				],
				"type": "string"
			},
			{
				"name": "source_location.is_anonymous_proxy",
				"fieldName": "op45_body_sourceLocationIsAnonymousProxy",
				"path": [
					"source_location.is_anonymous_proxy"
				],
				"type": "boolean"
			},
			{
				"name": "source_location.postal_code",
				"fieldName": "op45_body_sourceLocationPostalCode",
				"path": [
					"source_location.postal_code"
				],
				"type": "string"
			},
			{
				"name": "source_location.subdivisions",
				"fieldName": "op45_body_sourceLocationSubdivisions",
				"path": [
					"source_location.subdivisions"
				],
				"type": "string"
			},
			{
				"name": "source_location.time_zone",
				"fieldName": "op45_body_sourceLocationTimeZone",
				"path": [
					"source_location.time_zone"
				],
				"type": "string"
			},
			{
				"name": "suspicious_activity_found",
				"fieldName": "op45_body_suspiciousActivityFound",
				"path": [
					"suspicious_activity_found"
				],
				"type": "boolean"
			},
			{
				"name": "vulnerabilities_found_total_gt",
				"fieldName": "op45_body_vulnerabilitiesFoundTotalGt",
				"path": [
					"vulnerabilities_found_total_gt"
				],
				"type": "number"
			},
			{
				"name": "vulnerabilities_found_total_gte",
				"fieldName": "op45_body_vulnerabilitiesFoundTotalGte",
				"path": [
					"vulnerabilities_found_total_gte"
				],
				"type": "number"
			},
			{
				"name": "vulnerabilities_found_total_lt",
				"fieldName": "op45_body_vulnerabilitiesFoundTotalLt",
				"path": [
					"vulnerabilities_found_total_lt"
				],
				"type": "number"
			},
			{
				"name": "vulnerabilities_found_total_lte",
				"fieldName": "op45_body_vulnerabilitiesFoundTotalLte",
				"path": [
					"vulnerabilities_found_total_lte"
				],
				"type": "number"
			}
		]
	},
	{
		"value": "postEndpointsExport",
		"resource": "endpoints",
		"name": "Export Endpoints",
		"method": "POST",
		"path": "/nebula/v1/endpoints/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op46_bodyFields",
		"bodyFieldName": "op46_body",
		"bodyParameters": [
			{
				"name": "download",
				"fieldName": "op46_body_download",
				"path": [
					"download"
				],
				"type": "boolean"
			},
			{
				"name": "format",
				"fieldName": "op46_body_format",
				"path": [
					"format"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op46_body_type",
				"path": [
					"type"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postEndpointsSearchGroupby",
		"resource": "endpoints",
		"name": "Search Grouped Endpoints",
		"method": "POST",
		"path": "/nebula/v1/endpoints/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op47_bodyFields",
		"bodyFieldName": "op47_body",
		"bodyParameters": [
			{
				"name": "group_by",
				"fieldName": "op47_body_groupBy",
				"path": [
					"group_by"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op47_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			}
		]
	},
	{
		"value": "deleteEndpointsById",
		"resource": "endpoints",
		"name": "Delete A Machine",
		"method": "DELETE",
		"path": "/nebula/v1/endpoints/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op48_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op48_body",
		"bodyParameters": []
	},
	{
		"value": "getEndpointsById",
		"resource": "endpoints",
		"name": "Get Endpoint",
		"method": "GET",
		"path": "/nebula/v1/endpoints/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op49_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "getEndpointsByIdAgentInfo",
		"resource": "endpoints",
		"name": "Get Endpoint Agent Info",
		"method": "GET",
		"path": "/nebula/v1/endpoints/{id}/agent_info",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op50_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "getEndpointsByIdAssets",
		"resource": "endpoints",
		"name": "Get Endpoint Assets",
		"method": "GET",
		"path": "/nebula/v1/endpoints/{id}/assets",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op51_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "getEndpointsByIdNetwork",
		"resource": "endpoints",
		"name": "Network Information",
		"method": "GET",
		"path": "/nebula/v1/endpoints/{id}/network",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op52_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "getEndpointsByIdQuarantine",
		"resource": "endpoints",
		"name": "Get Quarantined Items",
		"method": "GET",
		"path": "/nebula/v1/endpoints/{id}/quarantine",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op53_path_id",
				"required": true
			}
		],
		"queryParameters": [
			{
				"name": "next_cursor",
				"fieldName": "op53_query_nextCursor",
				"required": false
			},
			{
				"name": "name",
				"fieldName": "op53_query_name",
				"required": false
			},
			{
				"name": "category",
				"fieldName": "op53_query_category",
				"required": false
			},
			{
				"name": "type",
				"fieldName": "op53_query_type",
				"required": false
			},
			{
				"name": "since",
				"fieldName": "op53_query_since",
				"required": false
			},
			{
				"name": "until",
				"fieldName": "op53_query_until",
				"required": false
			}
		],
		"bodyParameters": []
	},
	{
		"value": "getEndpointsByIdSa",
		"resource": "endpoints",
		"name": "All Suspicious Activity Of An Endpoint",
		"method": "GET",
		"path": "/nebula/v1/endpoints/{id}/sa",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op54_path_id",
				"required": true
			}
		],
		"queryParameters": [
			{
				"name": "sort_field",
				"fieldName": "op54_query_sortField",
				"required": false
			},
			{
				"name": "sort_direction",
				"fieldName": "op54_query_sortDirection",
				"required": false
			},
			{
				"name": "next_cursor",
				"fieldName": "op54_query_nextCursor",
				"required": false
			},
			{
				"name": "since",
				"fieldName": "op54_query_since",
				"required": false
			},
			{
				"name": "per_page",
				"fieldName": "op54_query_perPage",
				"required": false
			}
		],
		"bodyParameters": []
	},
	{
		"value": "putEndpointsByIdSaBySaIdClose",
		"resource": "endpoints",
		"name": "Close Suspicious Activity Of An Endpoint",
		"method": "PUT",
		"path": "/nebula/v1/endpoints/{id}/sa/{sa_id}/close",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op55_path_id",
				"required": true
			},
			{
				"name": "sa_id",
				"fieldName": "op55_path_saId",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op55_body",
		"bodyParameters": []
	},
	{
		"value": "getEndpointsByIdSaBySaIdExclusions",
		"resource": "endpoints",
		"name": "Specific Suspicious Activity Of An Endpoint",
		"method": "GET",
		"path": "/nebula/v1/endpoints/{id}/sa/{sa_id}/exclusions",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op56_path_id",
				"required": true
			},
			{
				"name": "sa_id",
				"fieldName": "op56_path_saId",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "putEndpointsByIdSaBySaIdOpen",
		"resource": "endpoints",
		"name": "Open Suspicious Activity Of An Endpoint",
		"method": "PUT",
		"path": "/nebula/v1/endpoints/{id}/sa/{sa_id}/open",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op57_path_id",
				"required": true
			},
			{
				"name": "sa_id",
				"fieldName": "op57_path_saId",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op57_body",
		"bodyParameters": []
	},
	{
		"value": "postEndpointsByIdSaBySaIdRemediate",
		"resource": "endpoints",
		"name": "Remediate Suspicious Activity Of An Endpoint",
		"method": "POST",
		"path": "/nebula/v1/endpoints/{id}/sa/{sa_id}/remediate",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op58_path_id",
				"required": true
			},
			{
				"name": "sa_id",
				"fieldName": "op58_path_saId",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op58_body",
		"bodyParameters": []
	},
	{
		"value": "getEndpointsByIdScans",
		"resource": "endpoints",
		"name": "Get Scans Of An Endpoint",
		"method": "GET",
		"path": "/nebula/v1/endpoints/{id}/scans",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op59_path_id",
				"required": true
			}
		],
		"queryParameters": [
			{
				"name": "since",
				"fieldName": "op59_query_since",
				"required": false
			},
			{
				"name": "threats_detected",
				"fieldName": "op59_query_threatsDetected",
				"required": false
			},
			{
				"name": "start_index",
				"fieldName": "op59_query_startIndex",
				"required": false
			},
			{
				"name": "page_size",
				"fieldName": "op59_query_pageSize",
				"required": false
			},
			{
				"name": "populate",
				"fieldName": "op59_query_populate",
				"required": false
			}
		],
		"bodyParameters": []
	},
	{
		"value": "getEndpointsByIdScansByScanId",
		"resource": "endpoints",
		"name": "Get A Scan Of An Endpoint",
		"method": "GET",
		"path": "/nebula/v1/endpoints/{id}/scans/{scan_id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op60_path_id",
				"required": true
			},
			{
				"name": "scan_id",
				"fieldName": "op60_path_scanId",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "getEndpointsByIdScansByScanIdDetections",
		"resource": "endpoints",
		"name": "Get The Detections Of A Scan",
		"method": "GET",
		"path": "/nebula/v1/endpoints/{id}/scans/{scan_id}/detections",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op61_path_id",
				"required": true
			},
			{
				"name": "scan_id",
				"fieldName": "op61_path_scanId",
				"required": true
			}
		],
		"queryParameters": [
			{
				"name": "next_cursor",
				"fieldName": "op61_query_nextCursor",
				"required": false
			},
			{
				"name": "since",
				"fieldName": "op61_query_since",
				"required": false
			}
		],
		"bodyParameters": []
	},
	{
		"value": "getEndpointsByIdStatus",
		"resource": "endpoints",
		"name": "Endpoint Status",
		"method": "GET",
		"path": "/nebula/v1/endpoints/{id}/status",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op62_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "putEndpointsByIdTags",
		"resource": "endpoints",
		"name": "Set Endpoint Tags",
		"method": "PUT",
		"path": "/nebula/v1/endpoints/{id}/tags",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op63_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyCollectionFieldName": "op63_bodyFields",
		"bodyFieldName": "op63_body",
		"bodyParameters": [
			{
				"name": "alias",
				"fieldName": "op63_body_alias",
				"path": [
					"alias"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "getEvents",
		"resource": "events",
		"name": "Retrieve Events",
		"method": "GET",
		"path": "/nebula/v1/events",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [
			{
				"name": "next_cursor",
				"fieldName": "op64_query_nextCursor",
				"required": false
			},
			{
				"name": "search_string",
				"fieldName": "op64_query_searchString",
				"required": false
			},
			{
				"name": "machine_id",
				"fieldName": "op64_query_machineId",
				"required": false
			},
			{
				"name": "start",
				"fieldName": "op64_query_start",
				"required": false
			},
			{
				"name": "end",
				"fieldName": "op64_query_end",
				"required": false
			},
			{
				"name": "severity_flags",
				"fieldName": "op64_query_severityFlags",
				"required": false
			},
			{
				"name": "source",
				"fieldName": "op64_query_source",
				"required": false
			}
		],
		"bodyParameters": []
	},
	{
		"value": "getExclusions",
		"resource": "exclusions",
		"name": "Get Exclusions",
		"method": "GET",
		"path": "/nebula/v1/exclusions",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [
			{
				"name": "next_cursor",
				"fieldName": "op65_query_nextCursor",
				"required": false
			},
			{
				"name": "search_string",
				"fieldName": "op65_query_searchString",
				"required": false
			},
			{
				"name": "policy_ids",
				"fieldName": "op65_query_policyIds",
				"required": false
			},
			{
				"name": "type",
				"fieldName": "op65_query_type",
				"required": false
			},
			{
				"name": "since",
				"fieldName": "op65_query_since",
				"required": false
			},
			{
				"name": "until",
				"fieldName": "op65_query_until",
				"required": false
			},
			{
				"name": "sort_by",
				"fieldName": "op65_query_sortBy",
				"required": false
			},
			{
				"name": "sort_order",
				"fieldName": "op65_query_sortOrder",
				"required": false
			}
		],
		"bodyParameters": []
	},
	{
		"value": "postExclusions",
		"resource": "exclusions",
		"name": "Create Exclusion",
		"method": "POST",
		"path": "/nebula/v1/exclusions",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op66_bodyFields",
		"bodyFieldName": "op66_body",
		"bodyParameters": [
			{
				"name": "account_level",
				"fieldName": "op66_body_accountLevel",
				"path": [
					"account_level"
				],
				"type": "boolean"
			},
			{
				"name": "comment",
				"fieldName": "op66_body_comment",
				"path": [
					"comment"
				],
				"type": "string"
			},
			{
				"name": "enabled",
				"fieldName": "op66_body_enabled",
				"path": [
					"enabled"
				],
				"type": "boolean"
			},
			{
				"name": "friendly_name",
				"fieldName": "op66_body_friendlyName",
				"path": [
					"friendly_name"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op66_body_type",
				"path": [
					"type"
				],
				"type": "number"
			},
			{
				"name": "value",
				"fieldName": "op66_body_value",
				"path": [
					"value"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "deleteExclusionsById",
		"resource": "exclusions",
		"name": "Delete Exclusion By ID",
		"method": "DELETE",
		"path": "/nebula/v1/exclusions/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op67_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op67_body",
		"bodyParameters": []
	},
	{
		"value": "getExclusionsById",
		"resource": "exclusions",
		"name": "Get Exclusion By ID",
		"method": "GET",
		"path": "/nebula/v1/exclusions/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op68_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "putExclusionsById",
		"resource": "exclusions",
		"name": "Update Exclusion",
		"method": "PUT",
		"path": "/nebula/v1/exclusions/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op69_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyCollectionFieldName": "op69_bodyFields",
		"bodyFieldName": "op69_body",
		"bodyParameters": [
			{
				"name": "account_level",
				"fieldName": "op69_body_accountLevel",
				"path": [
					"account_level"
				],
				"type": "boolean"
			},
			{
				"name": "comment",
				"fieldName": "op69_body_comment",
				"path": [
					"comment"
				],
				"type": "string"
			},
			{
				"name": "enabled",
				"fieldName": "op69_body_enabled",
				"path": [
					"enabled"
				],
				"type": "boolean"
			},
			{
				"name": "etag",
				"fieldName": "op69_body_etag",
				"path": [
					"etag"
				],
				"type": "string"
			},
			{
				"name": "friendly_name",
				"fieldName": "op69_body_friendlyName",
				"path": [
					"friendly_name"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op69_body_type",
				"path": [
					"type"
				],
				"type": "number"
			},
			{
				"name": "value",
				"fieldName": "op69_body_value",
				"path": [
					"value"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postFlightRecorderChart",
		"resource": "flightRecorder",
		"name": "Search Occurrence Of Suspicious Activity",
		"method": "POST",
		"path": "/nebula/v1/flight-recorder/chart",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op70_bodyFields",
		"bodyFieldName": "op70_body",
		"bodyParameters": [
			{
				"name": "time_range",
				"fieldName": "op70_body_timeRange",
				"path": [
					"time_range"
				],
				"type": "string"
			},
			{
				"name": "gte",
				"fieldName": "op70_body_timeWindowGte",
				"path": [
					"time_window",
					"gte"
				],
				"type": "string"
			},
			{
				"name": "lte",
				"fieldName": "op70_body_timeWindowLte",
				"path": [
					"time_window",
					"lte"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postFlightRecorderEndpoints",
		"resource": "flightRecorder",
		"name": "Search Suspicious Activity Receiving Impact Information On An Endpoint",
		"method": "POST",
		"path": "/nebula/v1/flight-recorder/endpoints",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op71_bodyFields",
		"bodyFieldName": "op71_body",
		"bodyParameters": [
			{
				"name": "time_range",
				"fieldName": "op71_body_timeRange",
				"path": [
					"time_range"
				],
				"type": "string"
			},
			{
				"name": "gte",
				"fieldName": "op71_body_timeWindowGte",
				"path": [
					"time_window",
					"gte"
				],
				"type": "string"
			},
			{
				"name": "lte",
				"fieldName": "op71_body_timeWindowLte",
				"path": [
					"time_window",
					"lte"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postFlightRecorderProcessGraph",
		"resource": "flightRecorder",
		"name": "Search The Process Graph",
		"method": "POST",
		"path": "/nebula/v1/flight-recorder/process_graph",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op72_bodyFields",
		"bodyFieldName": "op72_body",
		"bodyParameters": [
			{
				"name": "account_id",
				"fieldName": "op72_body_accountId",
				"path": [
					"account_id"
				],
				"type": "string"
			},
			{
				"name": "machine_id",
				"fieldName": "op72_body_machineId",
				"path": [
					"machine_id"
				],
				"type": "string"
			},
			{
				"name": "os_type",
				"fieldName": "op72_body_osType",
				"path": [
					"os_type"
				],
				"type": "string"
			},
			{
				"name": "path",
				"fieldName": "op72_body_path",
				"path": [
					"path"
				],
				"type": "string"
			},
			{
				"name": "pid",
				"fieldName": "op72_body_pid",
				"path": [
					"pid"
				],
				"type": "string"
			},
			{
				"name": "pid_version",
				"fieldName": "op72_body_pidVersion",
				"path": [
					"pid_version"
				],
				"type": "number"
			},
			{
				"name": "time_range",
				"fieldName": "op72_body_timeRange",
				"path": [
					"time_range"
				],
				"type": "string"
			},
			{
				"name": "gte",
				"fieldName": "op72_body_timeWindowGte",
				"path": [
					"time_window",
					"gte"
				],
				"type": "string"
			},
			{
				"name": "lte",
				"fieldName": "op72_body_timeWindowLte",
				"path": [
					"time_window",
					"lte"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postFlightRecorderProcesses",
		"resource": "flightRecorder",
		"name": "Search A List Of Processes",
		"method": "POST",
		"path": "/nebula/v1/flight-recorder/processes",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op73_bodyFields",
		"bodyFieldName": "op73_body",
		"bodyParameters": [
			{
				"name": "event_category",
				"fieldName": "op73_body_eventCategory",
				"path": [
					"event_category"
				],
				"type": "string"
			},
			{
				"name": "first_activity_gte",
				"fieldName": "op73_body_firstActivityGte",
				"path": [
					"first_activity_gte"
				],
				"type": "string"
			},
			{
				"name": "first_activity_lte",
				"fieldName": "op73_body_firstActivityLte",
				"path": [
					"first_activity_lte"
				],
				"type": "string"
			},
			{
				"name": "last_activity_gte",
				"fieldName": "op73_body_lastActivityGte",
				"path": [
					"last_activity_gte"
				],
				"type": "string"
			},
			{
				"name": "last_activity_lte",
				"fieldName": "op73_body_lastActivityLte",
				"path": [
					"last_activity_lte"
				],
				"type": "string"
			},
			{
				"name": "machine_id",
				"fieldName": "op73_body_machineId",
				"path": [
					"machine_id"
				],
				"type": "string"
			},
			{
				"name": "md5",
				"fieldName": "op73_body_md5",
				"path": [
					"md5"
				],
				"type": "string"
			},
			{
				"name": "os_type",
				"fieldName": "op73_body_osType",
				"path": [
					"os_type"
				],
				"type": "string"
			},
			{
				"name": "pc_hostname",
				"fieldName": "op73_body_pcHostname",
				"path": [
					"pc_hostname"
				],
				"type": "string"
			},
			{
				"name": "pid",
				"fieldName": "op73_body_pid",
				"path": [
					"pid"
				],
				"type": "string"
			},
			{
				"name": "pid_version",
				"fieldName": "op73_body_pidVersion",
				"path": [
					"pid_version"
				],
				"type": "string"
			},
			{
				"name": "process_name",
				"fieldName": "op73_body_processName",
				"path": [
					"process_name"
				],
				"type": "string"
			},
			{
				"name": "process_path",
				"fieldName": "op73_body_processPath",
				"path": [
					"process_path"
				],
				"type": "string"
			},
			{
				"name": "sha1",
				"fieldName": "op73_body_sha1",
				"path": [
					"sha1"
				],
				"type": "string"
			},
			{
				"name": "sha256",
				"fieldName": "op73_body_sha256",
				"path": [
					"sha256"
				],
				"type": "string"
			},
			{
				"name": "sha512",
				"fieldName": "op73_body_sha512",
				"path": [
					"sha512"
				],
				"type": "string"
			},
			{
				"name": "time_range",
				"fieldName": "op73_body_timeRange",
				"path": [
					"time_range"
				],
				"type": "string"
			},
			{
				"name": "gte",
				"fieldName": "op73_body_timeWindowGte",
				"path": [
					"time_window",
					"gte"
				],
				"type": "string"
			},
			{
				"name": "lte",
				"fieldName": "op73_body_timeWindowLte",
				"path": [
					"time_window",
					"lte"
				],
				"type": "string"
			},
			{
				"name": "user",
				"fieldName": "op73_body_user",
				"path": [
					"user"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postFlightRecorderRawEvents",
		"resource": "flightRecorder",
		"name": "Search A List Of Raw Events",
		"method": "POST",
		"path": "/nebula/v1/flight-recorder/raw_events",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op74_bodyFields",
		"bodyFieldName": "op74_body",
		"bodyParameters": [
			{
				"name": "event_type",
				"fieldName": "op74_body_eventType",
				"path": [
					"event_type"
				],
				"type": "string"
			},
			{
				"name": "first_activity",
				"fieldName": "op74_body_firstActivity",
				"path": [
					"first_activity"
				],
				"type": "string"
			},
			{
				"name": "last_activity",
				"fieldName": "op74_body_lastActivity",
				"path": [
					"last_activity"
				],
				"type": "string"
			},
			{
				"name": "machine_id",
				"fieldName": "op74_body_machineId",
				"path": [
					"machine_id"
				],
				"type": "string"
			},
			{
				"name": "page",
				"fieldName": "op74_body_page",
				"path": [
					"page"
				],
				"type": "number"
			},
			{
				"name": "page_size",
				"fieldName": "op74_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			},
			{
				"name": "path",
				"fieldName": "op74_body_path",
				"path": [
					"path"
				],
				"type": "string"
			},
			{
				"name": "pid",
				"fieldName": "op74_body_pid",
				"path": [
					"pid"
				],
				"type": "string"
			},
			{
				"name": "pid_version",
				"fieldName": "op74_body_pidVersion",
				"path": [
					"pid_version"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postFlightRecorderRecap",
		"resource": "flightRecorder",
		"name": "Search Suspicious Activity",
		"method": "POST",
		"path": "/nebula/v1/flight-recorder/recap",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op75_bodyFields",
		"bodyFieldName": "op75_body",
		"bodyParameters": [
			{
				"name": "time_range",
				"fieldName": "op75_body_timeRange",
				"path": [
					"time_range"
				],
				"type": "string"
			},
			{
				"name": "gte",
				"fieldName": "op75_body_timeWindowGte",
				"path": [
					"time_window",
					"gte"
				],
				"type": "string"
			},
			{
				"name": "lte",
				"fieldName": "op75_body_timeWindowLte",
				"path": [
					"time_window",
					"lte"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postFlightRecorderSearch",
		"resource": "flightRecorder",
		"name": "Search The Flight Recorder With Advanced Queries",
		"method": "POST",
		"path": "/nebula/v1/flight-recorder/search",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op76_bodyFields",
		"bodyFieldName": "op76_body",
		"bodyParameters": [
			{
				"name": "event_category",
				"fieldName": "op76_body_eventCategory",
				"path": [
					"event_category"
				],
				"type": "string"
			},
			{
				"name": "pc_hostname",
				"fieldName": "op76_body_pcHostname",
				"path": [
					"pc_hostname"
				],
				"type": "string"
			},
			{
				"name": "time_range",
				"fieldName": "op76_body_timeRange",
				"path": [
					"time_range"
				],
				"type": "string"
			},
			{
				"name": "gte",
				"fieldName": "op76_body_timeWindowGte",
				"path": [
					"time_window",
					"gte"
				],
				"type": "string"
			},
			{
				"name": "lte",
				"fieldName": "op76_body_timeWindowLte",
				"path": [
					"time_window",
					"lte"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postGridAssetsSoftwareExport",
		"resource": "grid",
		"name": "Export Software Assets",
		"method": "POST",
		"path": "/nebula/v1/grid/assets/software/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op77_body",
		"bodyParameters": []
	},
	{
		"value": "postGridAssetsSoftwareSearch",
		"resource": "grid",
		"name": "Search Software Assets",
		"method": "POST",
		"path": "/nebula/v1/grid/assets/software/search",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op78_body",
		"bodyParameters": []
	},
	{
		"value": "postGridAssetsSoftwareSearchGroupby",
		"resource": "grid",
		"name": "Search Grouped Software Assets",
		"method": "POST",
		"path": "/nebula/v1/grid/assets/software/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op79_body",
		"bodyParameters": []
	},
	{
		"value": "postGridCveExport",
		"resource": "grid",
		"name": "Export CVEs",
		"method": "POST",
		"path": "/nebula/v1/grid/cve/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op80_body",
		"bodyParameters": []
	},
	{
		"value": "postGridCveSearch",
		"resource": "grid",
		"name": "Search CVEs",
		"method": "POST",
		"path": "/nebula/v1/grid/cve/search",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op81_body",
		"bodyParameters": []
	},
	{
		"value": "postGridCveSearchGroupby",
		"resource": "grid",
		"name": "Search Grouped CVEs",
		"method": "POST",
		"path": "/nebula/v1/grid/cve/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op82_body",
		"bodyParameters": []
	},
	{
		"value": "postGridDetectionsExport",
		"resource": "grid",
		"name": "Export Detections",
		"method": "POST",
		"path": "/nebula/v1/grid/detections/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op83_body",
		"bodyParameters": []
	},
	{
		"value": "postGridDetectionsSearch",
		"resource": "grid",
		"name": "Search Detections",
		"method": "POST",
		"path": "/nebula/v1/grid/detections/search",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op84_body",
		"bodyParameters": []
	},
	{
		"value": "postGridDetectionsSearchGroupby",
		"resource": "grid",
		"name": "Search Grouped Detections",
		"method": "POST",
		"path": "/nebula/v1/grid/detections/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op85_body",
		"bodyParameters": []
	},
	{
		"value": "postGridDeviceControlExport",
		"resource": "grid",
		"name": "Export Device Control Events",
		"method": "POST",
		"path": "/nebula/v1/grid/device-control/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op86_body",
		"bodyParameters": []
	},
	{
		"value": "postGridDeviceControlSearch",
		"resource": "grid",
		"name": "Search Device Control Events",
		"method": "POST",
		"path": "/nebula/v1/grid/device-control/search",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op87_body",
		"bodyParameters": []
	},
	{
		"value": "postGridDeviceControlSearchGroupby",
		"resource": "grid",
		"name": "Search Grouped Device Control Events",
		"method": "POST",
		"path": "/nebula/v1/grid/device-control/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op88_body",
		"bodyParameters": []
	},
	{
		"value": "postGridDnsExport",
		"resource": "grid",
		"name": "Export DNS Activity",
		"method": "POST",
		"path": "/nebula/v1/grid/dns/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op89_body",
		"bodyParameters": []
	},
	{
		"value": "postGridDnsSearch",
		"resource": "grid",
		"name": "Search DNS Activity",
		"method": "POST",
		"path": "/nebula/v1/grid/dns/search",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op90_body",
		"bodyParameters": []
	},
	{
		"value": "postGridDnsSearchGroupby",
		"resource": "grid",
		"name": "Search Grouped DNS Activity",
		"method": "POST",
		"path": "/nebula/v1/grid/dns/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op91_body",
		"bodyParameters": []
	},
	{
		"value": "postGridEndpointsExport",
		"resource": "grid",
		"name": "Export Endpoints",
		"method": "POST",
		"path": "/nebula/v1/grid/endpoints/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op92_body",
		"bodyParameters": []
	},
	{
		"value": "postGridEndpointsSearch",
		"resource": "grid",
		"name": "Search Endpoints",
		"method": "POST",
		"path": "/nebula/v1/grid/endpoints/search",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op93_body",
		"bodyParameters": []
	},
	{
		"value": "postGridEndpointsSearchGroupby",
		"resource": "grid",
		"name": "Search Grouped Endpoints",
		"method": "POST",
		"path": "/nebula/v1/grid/endpoints/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op94_body",
		"bodyParameters": []
	},
	{
		"value": "postGridEventsExport",
		"resource": "grid",
		"name": "Export Events",
		"method": "POST",
		"path": "/nebula/v1/grid/events/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op95_body",
		"bodyParameters": []
	},
	{
		"value": "postGridEventsSearch",
		"resource": "grid",
		"name": "Search Events",
		"method": "POST",
		"path": "/nebula/v1/grid/events/search",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op96_body",
		"bodyParameters": []
	},
	{
		"value": "postGridEventsSearchGroupby",
		"resource": "grid",
		"name": "Search Events Groupby",
		"method": "POST",
		"path": "/nebula/v1/grid/events/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op97_body",
		"bodyParameters": []
	},
	{
		"value": "postGridOsPatchesExport",
		"resource": "grid",
		"name": "Export OS Patches",
		"method": "POST",
		"path": "/nebula/v1/grid/os-patches/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op98_body",
		"bodyParameters": []
	},
	{
		"value": "postGridOsPatchesSearch",
		"resource": "grid",
		"name": "Search OS Patches",
		"method": "POST",
		"path": "/nebula/v1/grid/os-patches/search",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op99_body",
		"bodyParameters": []
	},
	{
		"value": "postGridOsPatchesSearchGroupby",
		"resource": "grid",
		"name": "Search Grouped OS Patches",
		"method": "POST",
		"path": "/nebula/v1/grid/os-patches/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op100_body",
		"bodyParameters": []
	},
	{
		"value": "postGridRidExport",
		"resource": "grid",
		"name": "Export RID Rules",
		"method": "POST",
		"path": "/nebula/v1/grid/rid/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op101_body",
		"bodyParameters": []
	},
	{
		"value": "postGridRidSearch",
		"resource": "grid",
		"name": "Search RID Rules",
		"method": "POST",
		"path": "/nebula/v1/grid/rid/search",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op102_body",
		"bodyParameters": []
	},
	{
		"value": "postGridRidSearchGroupby",
		"resource": "grid",
		"name": "Search Grouped RID Rules",
		"method": "POST",
		"path": "/nebula/v1/grid/rid/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op103_body",
		"bodyParameters": []
	},
	{
		"value": "getGroups",
		"resource": "groups",
		"name": "Get All Groups",
		"method": "GET",
		"path": "/nebula/v1/groups",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [
			{
				"name": "name",
				"fieldName": "op104_query_name",
				"required": false
			},
			{
				"name": "parent_id",
				"fieldName": "op104_query_parentId",
				"required": false
			},
			{
				"name": "filter_by_parent_id",
				"fieldName": "op104_query_filterByParentId",
				"required": false
			},
			{
				"name": "next_cursor",
				"fieldName": "op104_query_nextCursor",
				"required": false
			}
		],
		"bodyParameters": []
	},
	{
		"value": "postGroups",
		"resource": "groups",
		"name": "Create Group",
		"method": "POST",
		"path": "/nebula/v1/groups",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op105_bodyFields",
		"bodyFieldName": "op105_body",
		"bodyParameters": [
			{
				"name": "name",
				"fieldName": "op105_body_name",
				"path": [
					"name"
				],
				"type": "string"
			},
			{
				"name": "parent_id",
				"fieldName": "op105_body_parentId",
				"path": [
					"parent_id"
				],
				"type": "string"
			},
			{
				"name": "policy_id",
				"fieldName": "op105_body_policyId",
				"path": [
					"policy_id"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "deleteGroupsById",
		"resource": "groups",
		"name": "Delete Group By Its ID",
		"method": "DELETE",
		"path": "/nebula/v1/groups/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op106_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op106_body",
		"bodyParameters": []
	},
	{
		"value": "getGroupsById",
		"resource": "groups",
		"name": "Get Group By ID",
		"method": "GET",
		"path": "/nebula/v1/groups/{id}",
		"hasAccountIdHeader": false,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op107_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "putGroupsById",
		"resource": "groups",
		"name": "Update Group",
		"method": "PUT",
		"path": "/nebula/v1/groups/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op108_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyCollectionFieldName": "op108_bodyFields",
		"bodyFieldName": "op108_body",
		"bodyParameters": [
			{
				"name": "name",
				"fieldName": "op108_body_name",
				"path": [
					"name"
				],
				"type": "string"
			},
			{
				"name": "parent_id",
				"fieldName": "op108_body_parentId",
				"path": [
					"parent_id"
				],
				"type": "string"
			},
			{
				"name": "policy_id",
				"fieldName": "op108_body_policyId",
				"path": [
					"policy_id"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postGroupsByIdMachines",
		"resource": "groups",
		"name": "Assign Endpoints To A Group",
		"method": "POST",
		"path": "/nebula/v1/groups/{id}/machines",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op109_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op109_body",
		"bodyParameters": []
	},
	{
		"value": "getInstallationToken",
		"resource": "installationToken",
		"name": "Get Installation Tokens",
		"method": "GET",
		"path": "/nebula/v1/installation-token",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [
			{
				"name": "sort_by",
				"fieldName": "op110_query_sortBy",
				"required": false
			},
			{
				"name": "sort_order",
				"fieldName": "op110_query_sortOrder",
				"required": false
			},
			{
				"name": "include_used",
				"fieldName": "op110_query_includeUsed",
				"required": false
			},
			{
				"name": "include_expired",
				"fieldName": "op110_query_includeExpired",
				"required": false
			},
			{
				"name": "populate",
				"fieldName": "op110_query_populate",
				"required": false
			},
			{
				"name": "page_size",
				"fieldName": "op110_query_pageSize",
				"required": false
			},
			{
				"name": "start_index",
				"fieldName": "op110_query_startIndex",
				"required": false
			}
		],
		"bodyParameters": []
	},
	{
		"value": "postInstallationToken",
		"resource": "installationToken",
		"name": "Generate An Installation Tokens",
		"method": "POST",
		"path": "/nebula/v1/installation-token",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op111_body",
		"bodyParameters": []
	},
	{
		"value": "postInstallationTokenSend",
		"resource": "installationToken",
		"name": "Send Installation Tokens",
		"method": "POST",
		"path": "/nebula/v1/installation-token/send",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op112_body",
		"bodyParameters": []
	},
	{
		"value": "deleteInstallationTokenByToken",
		"resource": "installationToken",
		"name": "Revoke Installation Token",
		"method": "DELETE",
		"path": "/nebula/v1/installation-token/{token}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "token",
				"fieldName": "op113_path_token",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op113_body",
		"bodyParameters": []
	},
	{
		"value": "getInstallers",
		"resource": "installers",
		"name": "Retrieve Installerss Links",
		"method": "GET",
		"path": "/nebula/v1/installers",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "postJobs",
		"resource": "jobs",
		"name": "Issue A Job",
		"method": "POST",
		"path": "/nebula/v1/jobs",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op115_bodyFields",
		"bodyFieldName": "op115_body",
		"bodyParameters": [
			{
				"name": "command",
				"fieldName": "op115_body_command",
				"path": [
					"command"
				],
				"type": "string"
			},
			{
				"name": "allow_postpone_reboot",
				"fieldName": "op115_body_dataAllowPostponeReboot",
				"path": [
					"data",
					"allow_postpone_reboot"
				],
				"type": "boolean"
			},
			{
				"name": "application_name",
				"fieldName": "op115_body_dataApplicationName",
				"path": [
					"data",
					"application_name"
				],
				"type": "string"
			},
			{
				"name": "architecture",
				"fieldName": "op115_body_dataArchitecture",
				"path": [
					"data",
					"architecture"
				],
				"type": "string"
			},
			{
				"name": "ark",
				"fieldName": "op115_body_dataArk",
				"path": [
					"data",
					"ark"
				],
				"type": "boolean"
			},
			{
				"name": "current_version",
				"fieldName": "op115_body_dataCurrentVersion",
				"path": [
					"data",
					"current_version"
				],
				"type": "string"
			},
			{
				"name": "delay_in_seconds",
				"fieldName": "op115_body_dataDelayInSeconds",
				"path": [
					"data",
					"delay_in_seconds"
				],
				"type": "number"
			},
			{
				"name": "enable_shuriken",
				"fieldName": "op115_body_dataEnableShuriken",
				"path": [
					"data",
					"enable_shuriken"
				],
				"type": "boolean"
			},
			{
				"name": "language",
				"fieldName": "op115_body_dataLanguage",
				"path": [
					"data",
					"language"
				],
				"type": "string"
			},
			{
				"name": "message",
				"fieldName": "op115_body_dataMessage",
				"path": [
					"data",
					"message"
				],
				"type": "string"
			},
			{
				"name": "new_version",
				"fieldName": "op115_body_dataNewVersion",
				"path": [
					"data",
					"new_version"
				],
				"type": "string"
			},
			{
				"name": "no_archive",
				"fieldName": "op115_body_dataNoArchive",
				"path": [
					"data",
					"no_archive"
				],
				"type": "boolean"
			},
			{
				"name": "no_reboot",
				"fieldName": "op115_body_dataNoReboot",
				"path": [
					"data",
					"no_reboot"
				],
				"type": "boolean"
			},
			{
				"name": "product",
				"fieldName": "op115_body_dataProduct",
				"path": [
					"data",
					"product"
				],
				"type": "number"
			},
			{
				"name": "pum_detection",
				"fieldName": "op115_body_dataPumDetection",
				"path": [
					"data",
					"pum_detection"
				],
				"type": "string"
			},
			{
				"name": "pup_detection",
				"fieldName": "op115_body_dataPupDetection",
				"path": [
					"data",
					"pup_detection"
				],
				"type": "string"
			},
			{
				"name": "reasons",
				"fieldName": "op115_body_dataReasons",
				"path": [
					"data",
					"reasons"
				],
				"type": "number"
			},
			{
				"name": "reboot_delay",
				"fieldName": "op115_body_dataRebootDelay",
				"path": [
					"data",
					"reboot_delay"
				],
				"type": "number"
			},
			{
				"name": "reboot_delay_rrule",
				"fieldName": "op115_body_dataRebootDelayRrule",
				"path": [
					"data",
					"reboot_delay_rrule"
				],
				"type": "string"
			},
			{
				"name": "reboot_message",
				"fieldName": "op115_body_dataRebootMessage",
				"path": [
					"data",
					"reboot_message"
				],
				"type": "string"
			},
			{
				"name": "remove",
				"fieldName": "op115_body_dataRemove",
				"path": [
					"data",
					"remove"
				],
				"type": "boolean"
			},
			{
				"name": "scan_file_system",
				"fieldName": "op115_body_dataScanFileSystem",
				"path": [
					"data",
					"scan_file_system"
				],
				"type": "boolean"
			},
			{
				"name": "scan_fixed_drives",
				"fieldName": "op115_body_dataScanFixedDrives",
				"path": [
					"data",
					"scan_fixed_drives"
				],
				"type": "boolean"
			},
			{
				"name": "scan_memory",
				"fieldName": "op115_body_dataScanMemory",
				"path": [
					"data",
					"scan_memory"
				],
				"type": "boolean"
			},
			{
				"name": "scan_path",
				"fieldName": "op115_body_dataScanPath",
				"path": [
					"data",
					"scan_path"
				],
				"type": "string"
			},
			{
				"name": "scan_path_from_list_file",
				"fieldName": "op115_body_dataScanPathFromListFile",
				"path": [
					"data",
					"scan_path_from_list_file"
				],
				"type": "boolean"
			},
			{
				"name": "scan_priority",
				"fieldName": "op115_body_dataScanPriority",
				"path": [
					"data",
					"scan_priority"
				],
				"type": "string"
			},
			{
				"name": "scan_registry",
				"fieldName": "op115_body_dataScanRegistry",
				"path": [
					"data",
					"scan_registry"
				],
				"type": "boolean"
			},
			{
				"name": "type",
				"fieldName": "op115_body_dataScanSettingsType",
				"path": [
					"data",
					"scan_settings",
					"type"
				],
				"type": "string"
			},
			{
				"name": "scan_startup",
				"fieldName": "op115_body_dataScanStartup",
				"path": [
					"data",
					"scan_startup"
				],
				"type": "boolean"
			},
			{
				"name": "type",
				"fieldName": "op115_body_dataType",
				"path": [
					"data",
					"type"
				],
				"type": "string"
			},
			{
				"name": "vendor",
				"fieldName": "op115_body_dataVendor",
				"path": [
					"data",
					"vendor"
				],
				"type": "string"
			},
			{
				"name": "relay_state",
				"fieldName": "op115_body_relayState",
				"path": [
					"relay_state"
				],
				"type": "string"
			},
			{
				"name": "requires_connected",
				"fieldName": "op115_body_requiresConnected",
				"path": [
					"requires_connected"
				],
				"type": "boolean"
			}
		]
	},
	{
		"value": "deleteJobsBulk",
		"resource": "jobs",
		"name": "Cancel Pending Jobs",
		"method": "DELETE",
		"path": "/nebula/v1/jobs/bulk",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op116_body",
		"bodyParameters": []
	},
	{
		"value": "postJobsBulk",
		"resource": "jobs",
		"name": "Issue Jobs",
		"method": "POST",
		"path": "/nebula/v1/jobs/bulk",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op117_bodyFields",
		"bodyFieldName": "op117_body",
		"bodyParameters": [
			{
				"name": "command",
				"fieldName": "op117_body_command",
				"path": [
					"command"
				],
				"type": "string"
			},
			{
				"name": "allow_postpone_reboot",
				"fieldName": "op117_body_dataAllowPostponeReboot",
				"path": [
					"data",
					"allow_postpone_reboot"
				],
				"type": "boolean"
			},
			{
				"name": "application_name",
				"fieldName": "op117_body_dataApplicationName",
				"path": [
					"data",
					"application_name"
				],
				"type": "string"
			},
			{
				"name": "architecture",
				"fieldName": "op117_body_dataArchitecture",
				"path": [
					"data",
					"architecture"
				],
				"type": "string"
			},
			{
				"name": "ark",
				"fieldName": "op117_body_dataArk",
				"path": [
					"data",
					"ark"
				],
				"type": "boolean"
			},
			{
				"name": "current_version",
				"fieldName": "op117_body_dataCurrentVersion",
				"path": [
					"data",
					"current_version"
				],
				"type": "string"
			},
			{
				"name": "delay_in_seconds",
				"fieldName": "op117_body_dataDelayInSeconds",
				"path": [
					"data",
					"delay_in_seconds"
				],
				"type": "number"
			},
			{
				"name": "enable_shuriken",
				"fieldName": "op117_body_dataEnableShuriken",
				"path": [
					"data",
					"enable_shuriken"
				],
				"type": "boolean"
			},
			{
				"name": "language",
				"fieldName": "op117_body_dataLanguage",
				"path": [
					"data",
					"language"
				],
				"type": "string"
			},
			{
				"name": "message",
				"fieldName": "op117_body_dataMessage",
				"path": [
					"data",
					"message"
				],
				"type": "string"
			},
			{
				"name": "new_version",
				"fieldName": "op117_body_dataNewVersion",
				"path": [
					"data",
					"new_version"
				],
				"type": "string"
			},
			{
				"name": "no_archive",
				"fieldName": "op117_body_dataNoArchive",
				"path": [
					"data",
					"no_archive"
				],
				"type": "boolean"
			},
			{
				"name": "no_reboot",
				"fieldName": "op117_body_dataNoReboot",
				"path": [
					"data",
					"no_reboot"
				],
				"type": "boolean"
			},
			{
				"name": "product",
				"fieldName": "op117_body_dataProduct",
				"path": [
					"data",
					"product"
				],
				"type": "number"
			},
			{
				"name": "pum_detection",
				"fieldName": "op117_body_dataPumDetection",
				"path": [
					"data",
					"pum_detection"
				],
				"type": "string"
			},
			{
				"name": "pup_detection",
				"fieldName": "op117_body_dataPupDetection",
				"path": [
					"data",
					"pup_detection"
				],
				"type": "string"
			},
			{
				"name": "reasons",
				"fieldName": "op117_body_dataReasons",
				"path": [
					"data",
					"reasons"
				],
				"type": "number"
			},
			{
				"name": "reboot_delay",
				"fieldName": "op117_body_dataRebootDelay",
				"path": [
					"data",
					"reboot_delay"
				],
				"type": "number"
			},
			{
				"name": "reboot_delay_rrule",
				"fieldName": "op117_body_dataRebootDelayRrule",
				"path": [
					"data",
					"reboot_delay_rrule"
				],
				"type": "string"
			},
			{
				"name": "reboot_message",
				"fieldName": "op117_body_dataRebootMessage",
				"path": [
					"data",
					"reboot_message"
				],
				"type": "string"
			},
			{
				"name": "remove",
				"fieldName": "op117_body_dataRemove",
				"path": [
					"data",
					"remove"
				],
				"type": "boolean"
			},
			{
				"name": "scan_file_system",
				"fieldName": "op117_body_dataScanFileSystem",
				"path": [
					"data",
					"scan_file_system"
				],
				"type": "boolean"
			},
			{
				"name": "scan_fixed_drives",
				"fieldName": "op117_body_dataScanFixedDrives",
				"path": [
					"data",
					"scan_fixed_drives"
				],
				"type": "boolean"
			},
			{
				"name": "scan_memory",
				"fieldName": "op117_body_dataScanMemory",
				"path": [
					"data",
					"scan_memory"
				],
				"type": "boolean"
			},
			{
				"name": "scan_path",
				"fieldName": "op117_body_dataScanPath",
				"path": [
					"data",
					"scan_path"
				],
				"type": "string"
			},
			{
				"name": "scan_path_from_list_file",
				"fieldName": "op117_body_dataScanPathFromListFile",
				"path": [
					"data",
					"scan_path_from_list_file"
				],
				"type": "boolean"
			},
			{
				"name": "scan_priority",
				"fieldName": "op117_body_dataScanPriority",
				"path": [
					"data",
					"scan_priority"
				],
				"type": "string"
			},
			{
				"name": "scan_registry",
				"fieldName": "op117_body_dataScanRegistry",
				"path": [
					"data",
					"scan_registry"
				],
				"type": "boolean"
			},
			{
				"name": "remove",
				"fieldName": "op117_body_dataScanSettingsRemove",
				"path": [
					"data",
					"scan_settings",
					"remove"
				],
				"type": "boolean"
			},
			{
				"name": "type",
				"fieldName": "op117_body_dataScanSettingsType",
				"path": [
					"data",
					"scan_settings",
					"type"
				],
				"type": "string"
			},
			{
				"name": "scan_startup",
				"fieldName": "op117_body_dataScanStartup",
				"path": [
					"data",
					"scan_startup"
				],
				"type": "boolean"
			},
			{
				"name": "type",
				"fieldName": "op117_body_dataType",
				"path": [
					"data",
					"type"
				],
				"type": "string"
			},
			{
				"name": "vendor",
				"fieldName": "op117_body_dataVendor",
				"path": [
					"data",
					"vendor"
				],
				"type": "string"
			},
			{
				"name": "relay_state",
				"fieldName": "op117_body_relayState",
				"path": [
					"relay_state"
				],
				"type": "string"
			},
			{
				"name": "requires_connected",
				"fieldName": "op117_body_requiresConnected",
				"path": [
					"requires_connected"
				],
				"type": "boolean"
			}
		]
	},
	{
		"value": "postJobsExport",
		"resource": "jobs",
		"name": "Export Jobs",
		"method": "POST",
		"path": "/nebula/v1/jobs/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op118_bodyFields",
		"bodyFieldName": "op118_body",
		"bodyParameters": [
			{
				"name": "download",
				"fieldName": "op118_body_download",
				"path": [
					"download"
				],
				"type": "boolean"
			},
			{
				"name": "format",
				"fieldName": "op118_body_format",
				"path": [
					"format"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op118_body_type",
				"path": [
					"type"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postJobsSearch",
		"resource": "jobs",
		"name": "Search Jobs",
		"method": "POST",
		"path": "/nebula/v1/jobs/search",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op119_bodyFields",
		"bodyFieldName": "op119_body",
		"bodyParameters": [
			{
				"name": "cancelled_by",
				"fieldName": "op119_body_cancelledBy",
				"path": [
					"cancelled_by"
				],
				"type": "string"
			},
			{
				"name": "endpoint",
				"fieldName": "op119_body_endpoint",
				"path": [
					"endpoint"
				],
				"type": "string"
			},
			{
				"name": "expires_at_after",
				"fieldName": "op119_body_expiresAtAfter",
				"path": [
					"expires_at_after"
				],
				"type": "string"
			},
			{
				"name": "expires_at_before",
				"fieldName": "op119_body_expiresAtBefore",
				"path": [
					"expires_at_before"
				],
				"type": "string"
			},
			{
				"name": "id",
				"fieldName": "op119_body_id",
				"path": [
					"id"
				],
				"type": "string"
			},
			{
				"name": "issued_at_after",
				"fieldName": "op119_body_issuedAtAfter",
				"path": [
					"issued_at_after"
				],
				"type": "string"
			},
			{
				"name": "issued_at_before",
				"fieldName": "op119_body_issuedAtBefore",
				"path": [
					"issued_at_before"
				],
				"type": "string"
			},
			{
				"name": "issued_by",
				"fieldName": "op119_body_issuedBy",
				"path": [
					"issued_by"
				],
				"type": "string"
			},
			{
				"name": "issued_by_email",
				"fieldName": "op119_body_issuedByEmail",
				"path": [
					"issued_by_email"
				],
				"type": "string"
			},
			{
				"name": "machine_id",
				"fieldName": "op119_body_machineId",
				"path": [
					"machine_id"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op119_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op119_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			},
			{
				"name": "sort_field",
				"fieldName": "op119_body_sortField",
				"path": [
					"sort_field"
				],
				"type": "string"
			},
			{
				"name": "sort_order",
				"fieldName": "op119_body_sortOrder",
				"path": [
					"sort_order"
				],
				"type": "string"
			},
			{
				"name": "status",
				"fieldName": "op119_body_status",
				"path": [
					"status"
				],
				"type": "number"
			}
		]
	},
	{
		"value": "postJobsSearchGroupby",
		"resource": "jobs",
		"name": "Search Jobs Group By",
		"method": "POST",
		"path": "/nebula/v1/jobs/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op120_bodyFields",
		"bodyFieldName": "op120_body",
		"bodyParameters": [
			{
				"name": "group_by",
				"fieldName": "op120_body_groupBy",
				"path": [
					"group_by"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "getJobsById",
		"resource": "jobs",
		"name": "Get Details About A Job",
		"method": "GET",
		"path": "/nebula/v1/jobs/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op121_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "getNotificationsSubscriptions",
		"resource": "notifications",
		"name": "Get All Notifications",
		"method": "GET",
		"path": "/nebula/v1/notifications/subscriptions",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [
			{
				"name": "owner",
				"fieldName": "op122_query_owner",
				"required": false
			},
			{
				"name": "next_cursor",
				"fieldName": "op122_query_nextCursor",
				"required": false
			}
		],
		"bodyParameters": []
	},
	{
		"value": "postNotificationsSubscriptions",
		"resource": "notifications",
		"name": "Create Notification",
		"method": "POST",
		"path": "/nebula/v1/notifications/subscriptions",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op123_body",
		"bodyParameters": []
	},
	{
		"value": "deleteNotificationsSubscriptionsBulk",
		"resource": "notifications",
		"name": "Delete Notification Bulk",
		"method": "DELETE",
		"path": "/nebula/v1/notifications/subscriptions/bulk",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op124_body",
		"bodyParameters": []
	},
	{
		"value": "putNotificationsSubscriptionsBulk",
		"resource": "notifications",
		"name": "Update Notification Bulk",
		"method": "PUT",
		"path": "/nebula/v1/notifications/subscriptions/bulk",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op125_body",
		"bodyParameters": []
	},
	{
		"value": "deleteNotificationsSubscriptionsById",
		"resource": "notifications",
		"name": "Delete Notification",
		"method": "DELETE",
		"path": "/nebula/v1/notifications/subscriptions/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op126_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op126_body",
		"bodyParameters": []
	},
	{
		"value": "getNotificationsSubscriptionsById",
		"resource": "notifications",
		"name": "Get Notification",
		"method": "GET",
		"path": "/nebula/v1/notifications/subscriptions/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op127_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "putNotificationsSubscriptionsById",
		"resource": "notifications",
		"name": "Update Notification",
		"method": "PUT",
		"path": "/nebula/v1/notifications/subscriptions/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op128_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op128_body",
		"bodyParameters": []
	},
	{
		"value": "postOsPatches",
		"resource": "osPatches",
		"name": "Search OS Patches",
		"method": "POST",
		"path": "/nebula/v1/os-patches",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op129_bodyFields",
		"bodyFieldName": "op129_body",
		"bodyParameters": [
			{
				"name": "category",
				"fieldName": "op129_body_category",
				"path": [
					"category"
				],
				"type": "string"
			},
			{
				"name": "category.keyword",
				"fieldName": "op129_body_categoryKeyword",
				"path": [
					"category.keyword"
				],
				"type": "string"
			},
			{
				"name": "created_at_after",
				"fieldName": "op129_body_createdAtAfter",
				"path": [
					"created_at_after"
				],
				"type": "string"
			},
			{
				"name": "created_at_before",
				"fieldName": "op129_body_createdAtBefore",
				"path": [
					"created_at_before"
				],
				"type": "string"
			},
			{
				"name": "description",
				"fieldName": "op129_body_description",
				"path": [
					"description"
				],
				"type": "string"
			},
			{
				"name": "description.keyword",
				"fieldName": "op129_body_descriptionKeyword",
				"path": [
					"description.keyword"
				],
				"type": "string"
			},
			{
				"name": "display_name",
				"fieldName": "op129_body_displayName",
				"path": [
					"display_name"
				],
				"type": "string"
			},
			{
				"name": "display_name.keyword",
				"fieldName": "op129_body_displayNameKeyword",
				"path": [
					"display_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "fully_qualified_host_name",
				"fieldName": "op129_body_fullyQualifiedHostName",
				"path": [
					"fully_qualified_host_name"
				],
				"type": "string"
			},
			{
				"name": "fully_qualified_host_name.keyword",
				"fieldName": "op129_body_fullyQualifiedHostNameKeyword",
				"path": [
					"fully_qualified_host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "group_id",
				"fieldName": "op129_body_groupId",
				"path": [
					"group_id"
				],
				"type": "string"
			},
			{
				"name": "group_id.keyword",
				"fieldName": "op129_body_groupIdKeyword",
				"path": [
					"group_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "host_name",
				"fieldName": "op129_body_hostName",
				"path": [
					"host_name"
				],
				"type": "string"
			},
			{
				"name": "host_name.keyword",
				"fieldName": "op129_body_hostNameKeyword",
				"path": [
					"host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "machine_id",
				"fieldName": "op129_body_machineId",
				"path": [
					"machine_id"
				],
				"type": "string"
			},
			{
				"name": "machine_id.keyword",
				"fieldName": "op129_body_machineIdKeyword",
				"path": [
					"machine_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op129_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "not.category",
				"fieldName": "op129_body_notCategory",
				"path": [
					"not.category"
				],
				"type": "string"
			},
			{
				"name": "not.category.keyword",
				"fieldName": "op129_body_notCategoryKeyword",
				"path": [
					"not.category.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.description",
				"fieldName": "op129_body_notDescription",
				"path": [
					"not.description"
				],
				"type": "string"
			},
			{
				"name": "not.description.keyword",
				"fieldName": "op129_body_notDescriptionKeyword",
				"path": [
					"not.description.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.display_name",
				"fieldName": "op129_body_notDisplayName",
				"path": [
					"not.display_name"
				],
				"type": "string"
			},
			{
				"name": "not.display_name.keyword",
				"fieldName": "op129_body_notDisplayNameKeyword",
				"path": [
					"not.display_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.fully_qualified_host_name",
				"fieldName": "op129_body_notFullyQualifiedHostName",
				"path": [
					"not.fully_qualified_host_name"
				],
				"type": "string"
			},
			{
				"name": "not.fully_qualified_host_name.keyword",
				"fieldName": "op129_body_notFullyQualifiedHostNameKeyword",
				"path": [
					"not.fully_qualified_host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.group_id",
				"fieldName": "op129_body_notGroupId",
				"path": [
					"not.group_id"
				],
				"type": "string"
			},
			{
				"name": "not.group_id.keyword",
				"fieldName": "op129_body_notGroupIdKeyword",
				"path": [
					"not.group_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.host_name",
				"fieldName": "op129_body_notHostName",
				"path": [
					"not.host_name"
				],
				"type": "string"
			},
			{
				"name": "not.host_name.keyword",
				"fieldName": "op129_body_notHostNameKeyword",
				"path": [
					"not.host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.machine_id",
				"fieldName": "op129_body_notMachineId",
				"path": [
					"not.machine_id"
				],
				"type": "string"
			},
			{
				"name": "not.machine_id.keyword",
				"fieldName": "op129_body_notMachineIdKeyword",
				"path": [
					"not.machine_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.object_guid",
				"fieldName": "op129_body_notObjectGuid",
				"path": [
					"not.object_guid"
				],
				"type": "string"
			},
			{
				"name": "not.object_guid.keyword",
				"fieldName": "op129_body_notObjectGuidKeyword",
				"path": [
					"not.object_guid.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_architecture",
				"fieldName": "op129_body_notOsInfoOsArchitecture",
				"path": [
					"not.os_info.os_architecture"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_architecture.keyword",
				"fieldName": "op129_body_notOsInfoOsArchitectureKeyword",
				"path": [
					"not.os_info.os_architecture.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_platform",
				"fieldName": "op129_body_notOsInfoOsPlatform",
				"path": [
					"not.os_info.os_platform"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_platform.keyword",
				"fieldName": "op129_body_notOsInfoOsPlatformKeyword",
				"path": [
					"not.os_info.os_platform.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_release_name",
				"fieldName": "op129_body_notOsInfoOsReleaseName",
				"path": [
					"not.os_info.os_release_name"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_release_name.keyword",
				"fieldName": "op129_body_notOsInfoOsReleaseNameKeyword",
				"path": [
					"not.os_info.os_release_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_type",
				"fieldName": "op129_body_notOsInfoOsType",
				"path": [
					"not.os_info.os_type"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_type.keyword",
				"fieldName": "op129_body_notOsInfoOsTypeKeyword",
				"path": [
					"not.os_info.os_type.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_version",
				"fieldName": "op129_body_notOsInfoOsVersion",
				"path": [
					"not.os_info.os_version"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_version.keyword",
				"fieldName": "op129_body_notOsInfoOsVersionKeyword",
				"path": [
					"not.os_info.os_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.patch_id",
				"fieldName": "op129_body_notPatchId",
				"path": [
					"not.patch_id"
				],
				"type": "string"
			},
			{
				"name": "not.patch_id.keyword",
				"fieldName": "op129_body_notPatchIdKeyword",
				"path": [
					"not.patch_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.product",
				"fieldName": "op129_body_notProduct",
				"path": [
					"not.product"
				],
				"type": "string"
			},
			{
				"name": "not.product.keyword",
				"fieldName": "op129_body_notProductKeyword",
				"path": [
					"not.product.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.root_group_id",
				"fieldName": "op129_body_notRootGroupId",
				"path": [
					"not.root_group_id"
				],
				"type": "string"
			},
			{
				"name": "not.root_group_id.keyword",
				"fieldName": "op129_body_notRootGroupIdKeyword",
				"path": [
					"not.root_group_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.security_update_id",
				"fieldName": "op129_body_notSecurityUpdateId",
				"path": [
					"not.security_update_id"
				],
				"type": "string"
			},
			{
				"name": "not.security_update_id.keyword",
				"fieldName": "op129_body_notSecurityUpdateIdKeyword",
				"path": [
					"not.security_update_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.severity",
				"fieldName": "op129_body_notSeverity",
				"path": [
					"not.severity"
				],
				"type": "string"
			},
			{
				"name": "not.severity.keyword",
				"fieldName": "op129_body_notSeverityKeyword",
				"path": [
					"not.severity.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.title",
				"fieldName": "op129_body_notTitle",
				"path": [
					"not.title"
				],
				"type": "string"
			},
			{
				"name": "not.title.keyword",
				"fieldName": "op129_body_notTitleKeyword",
				"path": [
					"not.title.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.vendor",
				"fieldName": "op129_body_notVendor",
				"path": [
					"not.vendor"
				],
				"type": "string"
			},
			{
				"name": "not.vendor.keyword",
				"fieldName": "op129_body_notVendorKeyword",
				"path": [
					"not.vendor.keyword"
				],
				"type": "string"
			},
			{
				"name": "object_guid",
				"fieldName": "op129_body_objectGuid",
				"path": [
					"object_guid"
				],
				"type": "string"
			},
			{
				"name": "object_guid.keyword",
				"fieldName": "op129_body_objectGuidKeyword",
				"path": [
					"object_guid.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_architecture",
				"fieldName": "op129_body_osInfoOsArchitecture",
				"path": [
					"os_info.os_architecture"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_architecture.keyword",
				"fieldName": "op129_body_osInfoOsArchitectureKeyword",
				"path": [
					"os_info.os_architecture.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_platform",
				"fieldName": "op129_body_osInfoOsPlatform",
				"path": [
					"os_info.os_platform"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_platform.keyword",
				"fieldName": "op129_body_osInfoOsPlatformKeyword",
				"path": [
					"os_info.os_platform.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_release_name",
				"fieldName": "op129_body_osInfoOsReleaseName",
				"path": [
					"os_info.os_release_name"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_release_name.keyword",
				"fieldName": "op129_body_osInfoOsReleaseNameKeyword",
				"path": [
					"os_info.os_release_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_type",
				"fieldName": "op129_body_osInfoOsType",
				"path": [
					"os_info.os_type"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_type.keyword",
				"fieldName": "op129_body_osInfoOsTypeKeyword",
				"path": [
					"os_info.os_type.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_version",
				"fieldName": "op129_body_osInfoOsVersion",
				"path": [
					"os_info.os_version"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_version.keyword",
				"fieldName": "op129_body_osInfoOsVersionKeyword",
				"path": [
					"os_info.os_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op129_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			},
			{
				"name": "patch_id",
				"fieldName": "op129_body_patchId",
				"path": [
					"patch_id"
				],
				"type": "string"
			},
			{
				"name": "patch_id.keyword",
				"fieldName": "op129_body_patchIdKeyword",
				"path": [
					"patch_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "endpoint",
				"fieldName": "op129_body_populateEndpoint",
				"path": [
					"populate",
					"endpoint"
				],
				"type": "boolean"
			},
			{
				"name": "group",
				"fieldName": "op129_body_populateGroup",
				"path": [
					"populate",
					"group"
				],
				"type": "boolean"
			},
			{
				"name": "product",
				"fieldName": "op129_body_product",
				"path": [
					"product"
				],
				"type": "string"
			},
			{
				"name": "product.keyword",
				"fieldName": "op129_body_productKeyword",
				"path": [
					"product.keyword"
				],
				"type": "string"
			},
			{
				"name": "reboot_required",
				"fieldName": "op129_body_rebootRequired",
				"path": [
					"reboot_required"
				],
				"type": "boolean"
			},
			{
				"name": "released_at_after",
				"fieldName": "op129_body_releasedAtAfter",
				"path": [
					"released_at_after"
				],
				"type": "string"
			},
			{
				"name": "released_at_before",
				"fieldName": "op129_body_releasedAtBefore",
				"path": [
					"released_at_before"
				],
				"type": "string"
			},
			{
				"name": "root_group_id",
				"fieldName": "op129_body_rootGroupId",
				"path": [
					"root_group_id"
				],
				"type": "string"
			},
			{
				"name": "root_group_id.keyword",
				"fieldName": "op129_body_rootGroupIdKeyword",
				"path": [
					"root_group_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "security_update_id",
				"fieldName": "op129_body_securityUpdateId",
				"path": [
					"security_update_id"
				],
				"type": "string"
			},
			{
				"name": "security_update_id.keyword",
				"fieldName": "op129_body_securityUpdateIdKeyword",
				"path": [
					"security_update_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "severity",
				"fieldName": "op129_body_severity",
				"path": [
					"severity"
				],
				"type": "string"
			},
			{
				"name": "severity.keyword",
				"fieldName": "op129_body_severityKeyword",
				"path": [
					"severity.keyword"
				],
				"type": "string"
			},
			{
				"name": "size",
				"fieldName": "op129_body_size",
				"path": [
					"size"
				],
				"type": "number"
			},
			{
				"name": "size_gt",
				"fieldName": "op129_body_sizeGt",
				"path": [
					"size_gt"
				],
				"type": "number"
			},
			{
				"name": "size_gte",
				"fieldName": "op129_body_sizeGte",
				"path": [
					"size_gte"
				],
				"type": "number"
			},
			{
				"name": "size_lt",
				"fieldName": "op129_body_sizeLt",
				"path": [
					"size_lt"
				],
				"type": "number"
			},
			{
				"name": "size_lte",
				"fieldName": "op129_body_sizeLte",
				"path": [
					"size_lte"
				],
				"type": "number"
			},
			{
				"name": "sort_field",
				"fieldName": "op129_body_sortField",
				"path": [
					"sort_field"
				],
				"type": "string"
			},
			{
				"name": "sort_order",
				"fieldName": "op129_body_sortOrder",
				"path": [
					"sort_order"
				],
				"type": "string"
			},
			{
				"name": "title",
				"fieldName": "op129_body_title",
				"path": [
					"title"
				],
				"type": "string"
			},
			{
				"name": "title.keyword",
				"fieldName": "op129_body_titleKeyword",
				"path": [
					"title.keyword"
				],
				"type": "string"
			},
			{
				"name": "vendor",
				"fieldName": "op129_body_vendor",
				"path": [
					"vendor"
				],
				"type": "string"
			},
			{
				"name": "vendor.keyword",
				"fieldName": "op129_body_vendorKeyword",
				"path": [
					"vendor.keyword"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postOsPatchesExport",
		"resource": "osPatches",
		"name": "Export OS Patches",
		"method": "POST",
		"path": "/nebula/v1/os-patches/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op130_bodyFields",
		"bodyFieldName": "op130_body",
		"bodyParameters": [
			{
				"name": "download",
				"fieldName": "op130_body_download",
				"path": [
					"download"
				],
				"type": "boolean"
			},
			{
				"name": "format",
				"fieldName": "op130_body_format",
				"path": [
					"format"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op130_body_type",
				"path": [
					"type"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postOsPatchesSearchGroupby",
		"resource": "osPatches",
		"name": "Search OS Patches Group By",
		"method": "POST",
		"path": "/nebula/v1/os-patches/search-groupby",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op131_bodyFields",
		"bodyFieldName": "op131_body",
		"bodyParameters": [
			{
				"name": "group_by",
				"fieldName": "op131_body_groupBy",
				"path": [
					"group_by"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op131_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op131_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			}
		]
	},
	{
		"value": "getPolicies",
		"resource": "policies",
		"name": "Get Policy By ID",
		"method": "GET",
		"path": "/nebula/v1/policies",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "postPolicies",
		"resource": "policies",
		"name": "Create Policy",
		"method": "POST",
		"path": "/nebula/v1/policies",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op133_bodyFields",
		"bodyFieldName": "op133_body",
		"bodyParameters": [
			{
				"name": "allow_run_threat_scan",
				"fieldName": "op133_body_contentsPolicyEndpointInterfaceOptionsAllowRunThreatScan",
				"path": [
					"contents",
					"policy",
					"endpoint_interface_options",
					"allow_run_threat_scan"
				],
				"type": "boolean"
			},
			{
				"name": "display_rtp_events",
				"fieldName": "op133_body_contentsPolicyEndpointInterfaceOptionsDisplayRtpEvents",
				"path": [
					"contents",
					"policy",
					"endpoint_interface_options",
					"display_rtp_events"
				],
				"type": "boolean"
			},
			{
				"name": "limit_endpoint_agent_control",
				"fieldName": "op133_body_contentsPolicyEndpointInterfaceOptionsLimitEndpointAgentControl",
				"path": [
					"contents",
					"policy",
					"endpoint_interface_options",
					"limit_endpoint_agent_control"
				],
				"type": "boolean"
			},
			{
				"name": "show_threat_scan_shortcuts",
				"fieldName": "op133_body_contentsPolicyEndpointInterfaceOptionsShowThreatScanShortcuts",
				"path": [
					"contents",
					"policy",
					"endpoint_interface_options",
					"show_threat_scan_shortcuts"
				],
				"type": "boolean"
			},
			{
				"name": "show_windows_contextmenu",
				"fieldName": "op133_body_contentsPolicyEndpointInterfaceOptionsShowWindowsContextmenu",
				"path": [
					"contents",
					"policy",
					"endpoint_interface_options",
					"show_windows_contextmenu"
				],
				"type": "boolean"
			},
			{
				"name": "protect_service",
				"fieldName": "op133_body_contentsPolicyProtectService",
				"path": [
					"contents",
					"policy",
					"protect_service"
				],
				"type": "boolean"
			},
			{
				"name": "sirius_update_schedule",
				"fieldName": "op133_body_contentsPolicySiriusUpdateSchedule",
				"path": [
					"contents",
					"policy",
					"sirius_update_schedule"
				],
				"type": "string"
			},
			{
				"name": "toggle_on",
				"fieldName": "op133_body_contentsPolicyStartupOptionsToggleOn",
				"path": [
					"contents",
					"policy",
					"startup_options",
					"toggle_on"
				],
				"type": "boolean"
			},
			{
				"name": "schema_version",
				"fieldName": "op133_body_contentsSchemaVersion",
				"path": [
					"contents",
					"schema_version"
				],
				"type": "string"
			},
			{
				"name": "status",
				"fieldName": "op133_body_contentsStatus",
				"path": [
					"contents",
					"status"
				],
				"type": "string"
			},
			{
				"name": "name",
				"fieldName": "op133_body_name",
				"path": [
					"name"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "getPoliciesSystemDefault",
		"resource": "policies",
		"name": "Get System Default Policy",
		"method": "GET",
		"path": "/nebula/v1/policies/system_default",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "deletePoliciesById",
		"resource": "policies",
		"name": "Delete Policy",
		"method": "DELETE",
		"path": "/nebula/v1/policies/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op135_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op135_body",
		"bodyParameters": []
	},
	{
		"value": "getPoliciesById",
		"resource": "policies",
		"name": "Get Policy By ID",
		"method": "GET",
		"path": "/nebula/v1/policies/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op136_path_id",
				"required": true
			}
		],
		"queryParameters": [
			{
				"name": "populate",
				"fieldName": "op136_query_populate",
				"required": false
			}
		],
		"bodyParameters": []
	},
	{
		"value": "putPoliciesById",
		"resource": "policies",
		"name": "Update Policy",
		"method": "PUT",
		"path": "/nebula/v1/policies/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op137_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyCollectionFieldName": "op137_bodyFields",
		"bodyFieldName": "op137_body",
		"bodyParameters": [
			{
				"name": "allow_run_threat_scan",
				"fieldName": "op137_body_contentsPolicyEndpointInterfaceOptionsAllowRunThreatScan",
				"path": [
					"contents",
					"policy",
					"endpoint_interface_options",
					"allow_run_threat_scan"
				],
				"type": "boolean"
			},
			{
				"name": "display_rtp_events",
				"fieldName": "op137_body_contentsPolicyEndpointInterfaceOptionsDisplayRtpEvents",
				"path": [
					"contents",
					"policy",
					"endpoint_interface_options",
					"display_rtp_events"
				],
				"type": "boolean"
			},
			{
				"name": "limit_endpoint_agent_control",
				"fieldName": "op137_body_contentsPolicyEndpointInterfaceOptionsLimitEndpointAgentControl",
				"path": [
					"contents",
					"policy",
					"endpoint_interface_options",
					"limit_endpoint_agent_control"
				],
				"type": "boolean"
			},
			{
				"name": "show_threat_scan_shortcuts",
				"fieldName": "op137_body_contentsPolicyEndpointInterfaceOptionsShowThreatScanShortcuts",
				"path": [
					"contents",
					"policy",
					"endpoint_interface_options",
					"show_threat_scan_shortcuts"
				],
				"type": "boolean"
			},
			{
				"name": "show_windows_contextmenu",
				"fieldName": "op137_body_contentsPolicyEndpointInterfaceOptionsShowWindowsContextmenu",
				"path": [
					"contents",
					"policy",
					"endpoint_interface_options",
					"show_windows_contextmenu"
				],
				"type": "boolean"
			},
			{
				"name": "protect_service",
				"fieldName": "op137_body_contentsPolicyProtectService",
				"path": [
					"contents",
					"policy",
					"protect_service"
				],
				"type": "boolean"
			},
			{
				"name": "sirius_update_schedule",
				"fieldName": "op137_body_contentsPolicySiriusUpdateSchedule",
				"path": [
					"contents",
					"policy",
					"sirius_update_schedule"
				],
				"type": "string"
			},
			{
				"name": "toggle_on",
				"fieldName": "op137_body_contentsPolicyStartupOptionsToggleOn",
				"path": [
					"contents",
					"policy",
					"startup_options",
					"toggle_on"
				],
				"type": "boolean"
			},
			{
				"name": "schema_version",
				"fieldName": "op137_body_contentsSchemaVersion",
				"path": [
					"contents",
					"schema_version"
				],
				"type": "string"
			},
			{
				"name": "status",
				"fieldName": "op137_body_contentsStatus",
				"path": [
					"contents",
					"status"
				],
				"type": "string"
			},
			{
				"name": "etag",
				"fieldName": "op137_body_etag",
				"path": [
					"etag"
				],
				"type": "string"
			},
			{
				"name": "name",
				"fieldName": "op137_body_name",
				"path": [
					"name"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "deletePoliciesByIdIsolationImage",
		"resource": "policies",
		"name": "Delete Policy Isolation Image",
		"method": "DELETE",
		"path": "/nebula/v1/policies/{id}/isolation_image",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op138_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op138_body",
		"bodyParameters": []
	},
	{
		"value": "getPoliciesByIdIsolationImage",
		"resource": "policies",
		"name": "Get Policy Isolation Image By ID",
		"method": "GET",
		"path": "/nebula/v1/policies/{id}/isolation_image",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op139_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "postPoliciesByIdIsolationImage",
		"resource": "policies",
		"name": "Add Isolation Image",
		"method": "POST",
		"path": "/nebula/v1/policies/{id}/isolation_image",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op140_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op140_body",
		"bodyParameters": []
	},
	{
		"value": "putPoliciesByIdPromote",
		"resource": "policies",
		"name": "Promote Policy",
		"method": "PUT",
		"path": "/nebula/v1/policies/{id}/promote",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op141_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op141_body",
		"bodyParameters": []
	},
	{
		"value": "getPoliciesByIdSecret",
		"resource": "policies",
		"name": "Get Policy Secret By ID",
		"method": "GET",
		"path": "/nebula/v1/policies/{id}/secret",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op142_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "postPoliciesByIdSecret",
		"resource": "policies",
		"name": "Set Policy Secret By ID",
		"method": "POST",
		"path": "/nebula/v1/policies/{id}/secret",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op143_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyCollectionFieldName": "op143_bodyFields",
		"bodyFieldName": "op143_body",
		"bodyParameters": [
			{
				"name": "name",
				"fieldName": "op143_body_name",
				"path": [
					"name"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postPoliciesBySourceIdClone",
		"resource": "policies",
		"name": "Clone Policy",
		"method": "POST",
		"path": "/nebula/v1/policies/{source_id}/clone",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "source_id",
				"fieldName": "op144_path_sourceId",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyCollectionFieldName": "op144_bodyFields",
		"bodyFieldName": "op144_body",
		"bodyParameters": [
			{
				"name": "include_policy_exclusions",
				"fieldName": "op144_body_includePolicyExclusions",
				"path": [
					"include_policy_exclusions"
				],
				"type": "boolean"
			},
			{
				"name": "name",
				"fieldName": "op144_body_name",
				"path": [
					"name"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postProducts",
		"resource": "products",
		"name": "Search Products",
		"method": "POST",
		"path": "/nebula/v1/products",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op145_bodyFields",
		"bodyFieldName": "op145_body",
		"bodyParameters": [
			{
				"name": "next_cursor",
				"fieldName": "op145_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op145_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			},
			{
				"name": "sort_field",
				"fieldName": "op145_body_sortField",
				"path": [
					"sort_field"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postProductsVendors",
		"resource": "products",
		"name": "Search Vendors",
		"method": "POST",
		"path": "/nebula/v1/products/vendors",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op146_bodyFields",
		"bodyFieldName": "op146_body",
		"bodyParameters": [
			{
				"name": "next_cursor",
				"fieldName": "op146_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op146_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			},
			{
				"name": "sort_field",
				"fieldName": "op146_body_sortField",
				"path": [
					"sort_field"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "getQuarantine",
		"resource": "quarantine",
		"name": "Get All Quarantined Items",
		"method": "GET",
		"path": "/nebula/v1/quarantine",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [
			{
				"name": "next_cursor",
				"fieldName": "op147_query_nextCursor",
				"required": false
			},
			{
				"name": "name",
				"fieldName": "op147_query_name",
				"required": false
			},
			{
				"name": "category",
				"fieldName": "op147_query_category",
				"required": false
			},
			{
				"name": "type",
				"fieldName": "op147_query_type",
				"required": false
			},
			{
				"name": "since",
				"fieldName": "op147_query_since",
				"required": false
			},
			{
				"name": "until",
				"fieldName": "op147_query_until",
				"required": false
			}
		],
		"bodyParameters": []
	},
	{
		"value": "postQuarantineAction",
		"resource": "quarantine",
		"name": "Bulk Quarantine Action",
		"method": "POST",
		"path": "/nebula/v1/quarantine/action",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op148_bodyFields",
		"bodyFieldName": "op148_body",
		"bodyParameters": [
			{
				"name": "command",
				"fieldName": "op148_body_command",
				"path": [
					"command"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postQuarantineExport",
		"resource": "quarantine",
		"name": "Export Quarantines",
		"method": "POST",
		"path": "/nebula/v1/quarantine/export",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op149_bodyFields",
		"bodyFieldName": "op149_body",
		"bodyParameters": [
			{
				"name": "download",
				"fieldName": "op149_body_download",
				"path": [
					"download"
				],
				"type": "boolean"
			},
			{
				"name": "filename",
				"fieldName": "op149_body_filename",
				"path": [
					"filename"
				],
				"type": "string"
			},
			{
				"name": "format",
				"fieldName": "op149_body_format",
				"path": [
					"format"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op149_body_type",
				"path": [
					"type"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "deleteReports",
		"resource": "reports",
		"name": "Delete Reports Bulk",
		"method": "DELETE",
		"path": "/nebula/v1/reports",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyFieldName": "op150_body",
		"bodyParameters": []
	},
	{
		"value": "getReports",
		"resource": "reports",
		"name": "Get All Reports",
		"method": "GET",
		"path": "/nebula/v1/reports",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "postReports",
		"resource": "reports",
		"name": "Create Report",
		"method": "POST",
		"path": "/nebula/v1/reports",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op152_bodyFields",
		"bodyFieldName": "op152_body",
		"bodyParameters": [
			{
				"name": "email_subject",
				"fieldName": "op152_body_emailSubject",
				"path": [
					"email_subject"
				],
				"type": "string"
			},
			{
				"name": "format",
				"fieldName": "op152_body_format",
				"path": [
					"format"
				],
				"type": "string"
			},
			{
				"name": "name",
				"fieldName": "op152_body_name",
				"path": [
					"name"
				],
				"type": "string"
			},
			{
				"name": "notes",
				"fieldName": "op152_body_notes",
				"path": [
					"notes"
				],
				"type": "string"
			},
			{
				"name": "period",
				"fieldName": "op152_body_period",
				"path": [
					"period"
				],
				"type": "number"
			},
			{
				"name": "recur",
				"fieldName": "op152_body_recurrenceRecur",
				"path": [
					"recurrence",
					"recur"
				],
				"type": "string"
			},
			{
				"name": "time_zone",
				"fieldName": "op152_body_timeZone",
				"path": [
					"time_zone"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op152_body_type",
				"path": [
					"type"
				],
				"type": "string"
			},
			{
				"name": "units",
				"fieldName": "op152_body_units",
				"path": [
					"units"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "deleteReportsById",
		"resource": "reports",
		"name": "Delete Report By ID",
		"method": "DELETE",
		"path": "/nebula/v1/reports/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op153_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op153_body",
		"bodyParameters": []
	},
	{
		"value": "getReportsById",
		"resource": "reports",
		"name": "Get Report By ID",
		"method": "GET",
		"path": "/nebula/v1/reports/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op154_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "putReportsById",
		"resource": "reports",
		"name": "Update Report",
		"method": "PUT",
		"path": "/nebula/v1/reports/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op155_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyCollectionFieldName": "op155_bodyFields",
		"bodyFieldName": "op155_body",
		"bodyParameters": [
			{
				"name": "email_subject",
				"fieldName": "op155_body_emailSubject",
				"path": [
					"email_subject"
				],
				"type": "string"
			},
			{
				"name": "format",
				"fieldName": "op155_body_format",
				"path": [
					"format"
				],
				"type": "string"
			},
			{
				"name": "name",
				"fieldName": "op155_body_name",
				"path": [
					"name"
				],
				"type": "string"
			},
			{
				"name": "notes",
				"fieldName": "op155_body_notes",
				"path": [
					"notes"
				],
				"type": "string"
			},
			{
				"name": "period",
				"fieldName": "op155_body_period",
				"path": [
					"period"
				],
				"type": "number"
			},
			{
				"name": "recur",
				"fieldName": "op155_body_recurrenceRecur",
				"path": [
					"recurrence",
					"recur"
				],
				"type": "string"
			},
			{
				"name": "time_zone",
				"fieldName": "op155_body_timeZone",
				"path": [
					"time_zone"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op155_body_type",
				"path": [
					"type"
				],
				"type": "string"
			},
			{
				"name": "units",
				"fieldName": "op155_body_units",
				"path": [
					"units"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postReportsByIdGenerate",
		"resource": "reports",
		"name": "Generate Report",
		"method": "POST",
		"path": "/nebula/v1/reports/{id}/generate",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op156_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyCollectionFieldName": "op156_bodyFields",
		"bodyFieldName": "op156_body",
		"bodyParameters": [
			{
				"name": "end",
				"fieldName": "op156_body_end",
				"path": [
					"end"
				],
				"type": "string"
			},
			{
				"name": "start",
				"fieldName": "op156_body_start",
				"path": [
					"start"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postRidRules",
		"resource": "rid",
		"name": "Search RID Rules",
		"method": "POST",
		"path": "/nebula/v1/rid/rules",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op157_bodyFields",
		"bodyFieldName": "op157_body",
		"bodyParameters": [
			{
				"name": "account_name",
				"fieldName": "op157_body_accountName",
				"path": [
					"account_name"
				],
				"type": "string"
			},
			{
				"name": "account_name.keyword",
				"fieldName": "op157_body_accountNameKeyword",
				"path": [
					"account_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "attack_user",
				"fieldName": "op157_body_attackUser",
				"path": [
					"attack_user"
				],
				"type": "string"
			},
			{
				"name": "attack_user.keyword",
				"fieldName": "op157_body_attackUserKeyword",
				"path": [
					"attack_user.keyword"
				],
				"type": "string"
			},
			{
				"name": "create_time_after",
				"fieldName": "op157_body_createTimeAfter",
				"path": [
					"create_time_after"
				],
				"type": "string"
			},
			{
				"name": "create_time_before",
				"fieldName": "op157_body_createTimeBefore",
				"path": [
					"create_time_before"
				],
				"type": "string"
			},
			{
				"name": "deleted",
				"fieldName": "op157_body_deleted",
				"path": [
					"deleted"
				],
				"type": "boolean"
			},
			{
				"name": "destination_location.city",
				"fieldName": "op157_body_destinationLocationCity",
				"path": [
					"destination_location.city"
				],
				"type": "string"
			},
			{
				"name": "destination_location.city.keyword",
				"fieldName": "op157_body_destinationLocationCityKeyword",
				"path": [
					"destination_location.city.keyword"
				],
				"type": "string"
			},
			{
				"name": "destination_location.continent",
				"fieldName": "op157_body_destinationLocationContinent",
				"path": [
					"destination_location.continent"
				],
				"type": "string"
			},
			{
				"name": "destination_location.continent.keyword",
				"fieldName": "op157_body_destinationLocationContinentKeyword",
				"path": [
					"destination_location.continent.keyword"
				],
				"type": "string"
			},
			{
				"name": "destination_location.country",
				"fieldName": "op157_body_destinationLocationCountry",
				"path": [
					"destination_location.country"
				],
				"type": "string"
			},
			{
				"name": "destination_location.country.keyword",
				"fieldName": "op157_body_destinationLocationCountryKeyword",
				"path": [
					"destination_location.country.keyword"
				],
				"type": "string"
			},
			{
				"name": "destination_location.country_iso",
				"fieldName": "op157_body_destinationLocationCountryIso",
				"path": [
					"destination_location.country_iso"
				],
				"type": "string"
			},
			{
				"name": "destination_location.country_iso.keyword",
				"fieldName": "op157_body_destinationLocationCountryIsoKeyword",
				"path": [
					"destination_location.country_iso.keyword"
				],
				"type": "string"
			},
			{
				"name": "destination_location.postal_code",
				"fieldName": "op157_body_destinationLocationPostalCode",
				"path": [
					"destination_location.postal_code"
				],
				"type": "string"
			},
			{
				"name": "destination_location.postal_code.keyword",
				"fieldName": "op157_body_destinationLocationPostalCodeKeyword",
				"path": [
					"destination_location.postal_code.keyword"
				],
				"type": "string"
			},
			{
				"name": "destination_location.subdivisions",
				"fieldName": "op157_body_destinationLocationSubdivisions",
				"path": [
					"destination_location.subdivisions"
				],
				"type": "string"
			},
			{
				"name": "destination_location.subdivisions.keyword",
				"fieldName": "op157_body_destinationLocationSubdivisionsKeyword",
				"path": [
					"destination_location.subdivisions.keyword"
				],
				"type": "string"
			},
			{
				"name": "destination_location.time_zone",
				"fieldName": "op157_body_destinationLocationTimeZone",
				"path": [
					"destination_location.time_zone"
				],
				"type": "string"
			},
			{
				"name": "destination_location.time_zone.keyword",
				"fieldName": "op157_body_destinationLocationTimeZoneKeyword",
				"path": [
					"destination_location.time_zone.keyword"
				],
				"type": "string"
			},
			{
				"name": "domain_name",
				"fieldName": "op157_body_domainName",
				"path": [
					"domain_name"
				],
				"type": "string"
			},
			{
				"name": "domain_name.keyword",
				"fieldName": "op157_body_domainNameKeyword",
				"path": [
					"domain_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "engine_version",
				"fieldName": "op157_body_engineVersion",
				"path": [
					"engine_version"
				],
				"type": "string"
			},
			{
				"name": "engine_version.keyword",
				"fieldName": "op157_body_engineVersionKeyword",
				"path": [
					"engine_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "expire_time_after",
				"fieldName": "op157_body_expireTimeAfter",
				"path": [
					"expire_time_after"
				],
				"type": "string"
			},
			{
				"name": "expire_time_before",
				"fieldName": "op157_body_expireTimeBefore",
				"path": [
					"expire_time_before"
				],
				"type": "string"
			},
			{
				"name": "fully_qualified_host_name",
				"fieldName": "op157_body_fullyQualifiedHostName",
				"path": [
					"fully_qualified_host_name"
				],
				"type": "string"
			},
			{
				"name": "fully_qualified_host_name.keyword",
				"fieldName": "op157_body_fullyQualifiedHostNameKeyword",
				"path": [
					"fully_qualified_host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "group_id",
				"fieldName": "op157_body_groupId",
				"path": [
					"group_id"
				],
				"type": "string"
			},
			{
				"name": "group_id.keyword",
				"fieldName": "op157_body_groupIdKeyword",
				"path": [
					"group_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "group_name",
				"fieldName": "op157_body_groupName",
				"path": [
					"group_name"
				],
				"type": "string"
			},
			{
				"name": "group_name.keyword",
				"fieldName": "op157_body_groupNameKeyword",
				"path": [
					"group_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "host_name",
				"fieldName": "op157_body_hostName",
				"path": [
					"host_name"
				],
				"type": "string"
			},
			{
				"name": "host_name.keyword",
				"fieldName": "op157_body_hostNameKeyword",
				"path": [
					"host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "id",
				"fieldName": "op157_body_id",
				"path": [
					"id"
				],
				"type": "string"
			},
			{
				"name": "id.keyword",
				"fieldName": "op157_body_idKeyword",
				"path": [
					"id.keyword"
				],
				"type": "string"
			},
			{
				"name": "ip",
				"fieldName": "op157_body_ip",
				"path": [
					"ip"
				],
				"type": "string"
			},
			{
				"name": "last_user",
				"fieldName": "op157_body_lastUser",
				"path": [
					"last_user"
				],
				"type": "string"
			},
			{
				"name": "last_user.keyword",
				"fieldName": "op157_body_lastUserKeyword",
				"path": [
					"last_user.keyword"
				],
				"type": "string"
			},
			{
				"name": "machine_id",
				"fieldName": "op157_body_machineId",
				"path": [
					"machine_id"
				],
				"type": "string"
			},
			{
				"name": "machine_id.keyword",
				"fieldName": "op157_body_machineIdKeyword",
				"path": [
					"machine_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "machine_ip",
				"fieldName": "op157_body_machineIp",
				"path": [
					"machine_ip"
				],
				"type": "string"
			},
			{
				"name": "machine_name",
				"fieldName": "op157_body_machineName",
				"path": [
					"machine_name"
				],
				"type": "string"
			},
			{
				"name": "machine_name.keyword",
				"fieldName": "op157_body_machineNameKeyword",
				"path": [
					"machine_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op157_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "string"
			},
			{
				"name": "nics.description",
				"fieldName": "op157_body_nicsDescription",
				"path": [
					"nics.description"
				],
				"type": "string"
			},
			{
				"name": "nics.description.keyword",
				"fieldName": "op157_body_nicsDescriptionKeyword",
				"path": [
					"nics.description.keyword"
				],
				"type": "string"
			},
			{
				"name": "nics.mac_address",
				"fieldName": "op157_body_nicsMacAddress",
				"path": [
					"nics.mac_address"
				],
				"type": "string"
			},
			{
				"name": "nics.mac_address.keyword",
				"fieldName": "op157_body_nicsMacAddressKeyword",
				"path": [
					"nics.mac_address.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.account_name",
				"fieldName": "op157_body_notAccountName",
				"path": [
					"not.account_name"
				],
				"type": "string"
			},
			{
				"name": "not.account_name.keyword",
				"fieldName": "op157_body_notAccountNameKeyword",
				"path": [
					"not.account_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.attack_user",
				"fieldName": "op157_body_notAttackUser",
				"path": [
					"not.attack_user"
				],
				"type": "string"
			},
			{
				"name": "not.attack_user.keyword",
				"fieldName": "op157_body_notAttackUserKeyword",
				"path": [
					"not.attack_user.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.destination_location.city",
				"fieldName": "op157_body_notDestinationLocationCity",
				"path": [
					"not.destination_location.city"
				],
				"type": "string"
			},
			{
				"name": "not.destination_location.city.keyword",
				"fieldName": "op157_body_notDestinationLocationCityKeyword",
				"path": [
					"not.destination_location.city.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.destination_location.continent",
				"fieldName": "op157_body_notDestinationLocationContinent",
				"path": [
					"not.destination_location.continent"
				],
				"type": "string"
			},
			{
				"name": "not.destination_location.continent.keyword",
				"fieldName": "op157_body_notDestinationLocationContinentKeyword",
				"path": [
					"not.destination_location.continent.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.destination_location.country",
				"fieldName": "op157_body_notDestinationLocationCountry",
				"path": [
					"not.destination_location.country"
				],
				"type": "string"
			},
			{
				"name": "not.destination_location.country.keyword",
				"fieldName": "op157_body_notDestinationLocationCountryKeyword",
				"path": [
					"not.destination_location.country.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.destination_location.country_iso",
				"fieldName": "op157_body_notDestinationLocationCountryIso",
				"path": [
					"not.destination_location.country_iso"
				],
				"type": "string"
			},
			{
				"name": "not.destination_location.country_iso.keyword",
				"fieldName": "op157_body_notDestinationLocationCountryIsoKeyword",
				"path": [
					"not.destination_location.country_iso.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.destination_location.postal_code",
				"fieldName": "op157_body_notDestinationLocationPostalCode",
				"path": [
					"not.destination_location.postal_code"
				],
				"type": "string"
			},
			{
				"name": "not.destination_location.postal_code.keyword",
				"fieldName": "op157_body_notDestinationLocationPostalCodeKeyword",
				"path": [
					"not.destination_location.postal_code.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.destination_location.subdivisions",
				"fieldName": "op157_body_notDestinationLocationSubdivisions",
				"path": [
					"not.destination_location.subdivisions"
				],
				"type": "string"
			},
			{
				"name": "not.destination_location.subdivisions.keyword",
				"fieldName": "op157_body_notDestinationLocationSubdivisionsKeyword",
				"path": [
					"not.destination_location.subdivisions.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.destination_location.time_zone",
				"fieldName": "op157_body_notDestinationLocationTimeZone",
				"path": [
					"not.destination_location.time_zone"
				],
				"type": "string"
			},
			{
				"name": "not.destination_location.time_zone.keyword",
				"fieldName": "op157_body_notDestinationLocationTimeZoneKeyword",
				"path": [
					"not.destination_location.time_zone.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.domain_name",
				"fieldName": "op157_body_notDomainName",
				"path": [
					"not.domain_name"
				],
				"type": "string"
			},
			{
				"name": "not.domain_name.keyword",
				"fieldName": "op157_body_notDomainNameKeyword",
				"path": [
					"not.domain_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.engine_version",
				"fieldName": "op157_body_notEngineVersion",
				"path": [
					"not.engine_version"
				],
				"type": "string"
			},
			{
				"name": "not.engine_version.keyword",
				"fieldName": "op157_body_notEngineVersionKeyword",
				"path": [
					"not.engine_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.fully_qualified_host_name",
				"fieldName": "op157_body_notFullyQualifiedHostName",
				"path": [
					"not.fully_qualified_host_name"
				],
				"type": "string"
			},
			{
				"name": "not.fully_qualified_host_name.keyword",
				"fieldName": "op157_body_notFullyQualifiedHostNameKeyword",
				"path": [
					"not.fully_qualified_host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.group_id",
				"fieldName": "op157_body_notGroupId",
				"path": [
					"not.group_id"
				],
				"type": "string"
			},
			{
				"name": "not.group_id.keyword",
				"fieldName": "op157_body_notGroupIdKeyword",
				"path": [
					"not.group_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.group_name",
				"fieldName": "op157_body_notGroupName",
				"path": [
					"not.group_name"
				],
				"type": "string"
			},
			{
				"name": "not.group_name.keyword",
				"fieldName": "op157_body_notGroupNameKeyword",
				"path": [
					"not.group_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.host_name",
				"fieldName": "op157_body_notHostName",
				"path": [
					"not.host_name"
				],
				"type": "string"
			},
			{
				"name": "not.host_name.keyword",
				"fieldName": "op157_body_notHostNameKeyword",
				"path": [
					"not.host_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.id",
				"fieldName": "op157_body_notId",
				"path": [
					"not.id"
				],
				"type": "string"
			},
			{
				"name": "not.id.keyword",
				"fieldName": "op157_body_notIdKeyword",
				"path": [
					"not.id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.ip",
				"fieldName": "op157_body_notIp",
				"path": [
					"not.ip"
				],
				"type": "string"
			},
			{
				"name": "not.last_user",
				"fieldName": "op157_body_notLastUser",
				"path": [
					"not.last_user"
				],
				"type": "string"
			},
			{
				"name": "not.last_user.keyword",
				"fieldName": "op157_body_notLastUserKeyword",
				"path": [
					"not.last_user.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.machine_id",
				"fieldName": "op157_body_notMachineId",
				"path": [
					"not.machine_id"
				],
				"type": "string"
			},
			{
				"name": "not.machine_id.keyword",
				"fieldName": "op157_body_notMachineIdKeyword",
				"path": [
					"not.machine_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.machine_ip",
				"fieldName": "op157_body_notMachineIp",
				"path": [
					"not.machine_ip"
				],
				"type": "string"
			},
			{
				"name": "not.machine_name",
				"fieldName": "op157_body_notMachineName",
				"path": [
					"not.machine_name"
				],
				"type": "string"
			},
			{
				"name": "not.machine_name.keyword",
				"fieldName": "op157_body_notMachineNameKeyword",
				"path": [
					"not.machine_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.nics.description",
				"fieldName": "op157_body_notNicsDescription",
				"path": [
					"not.nics.description"
				],
				"type": "string"
			},
			{
				"name": "not.nics.description.keyword",
				"fieldName": "op157_body_notNicsDescriptionKeyword",
				"path": [
					"not.nics.description.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.nics.mac_address",
				"fieldName": "op157_body_notNicsMacAddress",
				"path": [
					"not.nics.mac_address"
				],
				"type": "string"
			},
			{
				"name": "not.nics.mac_address.keyword",
				"fieldName": "op157_body_notNicsMacAddressKeyword",
				"path": [
					"not.nics.mac_address.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.origin_id",
				"fieldName": "op157_body_notOriginId",
				"path": [
					"not.origin_id"
				],
				"type": "string"
			},
			{
				"name": "not.origin_id.keyword",
				"fieldName": "op157_body_notOriginIdKeyword",
				"path": [
					"not.origin_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_architecture",
				"fieldName": "op157_body_notOsInfoOsArchitecture",
				"path": [
					"not.os_info.os_architecture"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_architecture.keyword",
				"fieldName": "op157_body_notOsInfoOsArchitectureKeyword",
				"path": [
					"not.os_info.os_architecture.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_platform",
				"fieldName": "op157_body_notOsInfoOsPlatform",
				"path": [
					"not.os_info.os_platform"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_platform.keyword",
				"fieldName": "op157_body_notOsInfoOsPlatformKeyword",
				"path": [
					"not.os_info.os_platform.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_release_name",
				"fieldName": "op157_body_notOsInfoOsReleaseName",
				"path": [
					"not.os_info.os_release_name"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_release_name.keyword",
				"fieldName": "op157_body_notOsInfoOsReleaseNameKeyword",
				"path": [
					"not.os_info.os_release_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_type",
				"fieldName": "op157_body_notOsInfoOsType",
				"path": [
					"not.os_info.os_type"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_type.keyword",
				"fieldName": "op157_body_notOsInfoOsTypeKeyword",
				"path": [
					"not.os_info.os_type.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_version",
				"fieldName": "op157_body_notOsInfoOsVersion",
				"path": [
					"not.os_info.os_version"
				],
				"type": "string"
			},
			{
				"name": "not.os_info.os_version.keyword",
				"fieldName": "op157_body_notOsInfoOsVersionKeyword",
				"path": [
					"not.os_info.os_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.asset_manager.plugin_version",
				"fieldName": "op157_body_notPluginsAssetManagerPluginVersion",
				"path": [
					"not.plugins.asset_manager.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.asset_manager.plugin_version.keyword",
				"fieldName": "op157_body_notPluginsAssetManagerPluginVersionKeyword",
				"path": [
					"not.plugins.asset_manager.plugin_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.asset_manager.reboot_reasons",
				"fieldName": "op157_body_notPluginsAssetManagerRebootReasons",
				"path": [
					"not.plugins.asset_manager.reboot_reasons"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.asset_manager.reboot_reasons.keyword",
				"fieldName": "op157_body_notPluginsAssetManagerRebootReasonsKeyword",
				"path": [
					"not.plugins.asset_manager.reboot_reasons.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.endpoint_detection_and_response.plugin_version",
				"fieldName": "op157_body_notPluginsEndpointDetectionAndResponsePluginVersion",
				"path": [
					"not.plugins.endpoint_detection_and_response.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.endpoint_detection_and_response.plugin_version.keyword",
				"fieldName": "op157_body_notPluginsEndpointDetectionAndResponsePluginVersionKeyword",
				"path": [
					"not.plugins.endpoint_detection_and_response.plugin_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.endpoint_detection_and_response.reboot_reasons",
				"fieldName": "op157_body_notPluginsEndpointDetectionAndResponseRebootReasons",
				"path": [
					"not.plugins.endpoint_detection_and_response.reboot_reasons"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.endpoint_detection_and_response.reboot_reasons.keyword",
				"fieldName": "op157_body_notPluginsEndpointDetectionAndResponseRebootReasonsKeyword",
				"path": [
					"not.plugins.endpoint_detection_and_response.reboot_reasons.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.endpoint_protection.component_package_version",
				"fieldName": "op157_body_notPluginsEndpointProtectionComponentPackageVersion",
				"path": [
					"not.plugins.endpoint_protection.component_package_version"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.endpoint_protection.component_package_version.keyword",
				"fieldName": "op157_body_notPluginsEndpointProtectionComponentPackageVersionKeyword",
				"path": [
					"not.plugins.endpoint_protection.component_package_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.endpoint_protection.plugin_version",
				"fieldName": "op157_body_notPluginsEndpointProtectionPluginVersion",
				"path": [
					"not.plugins.endpoint_protection.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.endpoint_protection.plugin_version.keyword",
				"fieldName": "op157_body_notPluginsEndpointProtectionPluginVersionKeyword",
				"path": [
					"not.plugins.endpoint_protection.plugin_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.endpoint_protection.reboot_reasons",
				"fieldName": "op157_body_notPluginsEndpointProtectionRebootReasons",
				"path": [
					"not.plugins.endpoint_protection.reboot_reasons"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.endpoint_protection.reboot_reasons.keyword",
				"fieldName": "op157_body_notPluginsEndpointProtectionRebootReasonsKeyword",
				"path": [
					"not.plugins.endpoint_protection.reboot_reasons.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.endpoint_protection.sdk_version",
				"fieldName": "op157_body_notPluginsEndpointProtectionSdkVersion",
				"path": [
					"not.plugins.endpoint_protection.sdk_version"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.endpoint_protection.sdk_version.keyword",
				"fieldName": "op157_body_notPluginsEndpointProtectionSdkVersionKeyword",
				"path": [
					"not.plugins.endpoint_protection.sdk_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.endpoint_protection.update_package_version",
				"fieldName": "op157_body_notPluginsEndpointProtectionUpdatePackageVersion",
				"path": [
					"not.plugins.endpoint_protection.update_package_version"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.endpoint_protection.update_package_version.keyword",
				"fieldName": "op157_body_notPluginsEndpointProtectionUpdatePackageVersionKeyword",
				"path": [
					"not.plugins.endpoint_protection.update_package_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.incident_response.plugin_version",
				"fieldName": "op157_body_notPluginsIncidentResponsePluginVersion",
				"path": [
					"not.plugins.incident_response.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.incident_response.plugin_version.keyword",
				"fieldName": "op157_body_notPluginsIncidentResponsePluginVersionKeyword",
				"path": [
					"not.plugins.incident_response.plugin_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.incident_response.reboot_reasons",
				"fieldName": "op157_body_notPluginsIncidentResponseRebootReasons",
				"path": [
					"not.plugins.incident_response.reboot_reasons"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.incident_response.reboot_reasons.keyword",
				"fieldName": "op157_body_notPluginsIncidentResponseRebootReasonsKeyword",
				"path": [
					"not.plugins.incident_response.reboot_reasons.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.siem.plugin_version",
				"fieldName": "op157_body_notPluginsSiemPluginVersion",
				"path": [
					"not.plugins.siem.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.siem.plugin_version.keyword",
				"fieldName": "op157_body_notPluginsSiemPluginVersionKeyword",
				"path": [
					"not.plugins.siem.plugin_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.siem.reboot_reasons",
				"fieldName": "op157_body_notPluginsSiemRebootReasons",
				"path": [
					"not.plugins.siem.reboot_reasons"
				],
				"type": "string"
			},
			{
				"name": "not.plugins.siem.reboot_reasons.keyword",
				"fieldName": "op157_body_notPluginsSiemRebootReasonsKeyword",
				"path": [
					"not.plugins.siem.reboot_reasons.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.policy_etag",
				"fieldName": "op157_body_notPolicyEtag",
				"path": [
					"not.policy_etag"
				],
				"type": "string"
			},
			{
				"name": "not.policy_etag.keyword",
				"fieldName": "op157_body_notPolicyEtagKeyword",
				"path": [
					"not.policy_etag.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.policy_id",
				"fieldName": "op157_body_notPolicyId",
				"path": [
					"not.policy_id"
				],
				"type": "string"
			},
			{
				"name": "not.policy_id.keyword",
				"fieldName": "op157_body_notPolicyIdKeyword",
				"path": [
					"not.policy_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.policy_name",
				"fieldName": "op157_body_notPolicyName",
				"path": [
					"not.policy_name"
				],
				"type": "string"
			},
			{
				"name": "not.policy_name.keyword",
				"fieldName": "op157_body_notPolicyNameKeyword",
				"path": [
					"not.policy_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.protocol",
				"fieldName": "op157_body_notProtocol",
				"path": [
					"not.protocol"
				],
				"type": "string"
			},
			{
				"name": "not.protocol.keyword",
				"fieldName": "op157_body_notProtocolKeyword",
				"path": [
					"not.protocol.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.root_group_id",
				"fieldName": "op157_body_notRootGroupId",
				"path": [
					"not.root_group_id"
				],
				"type": "string"
			},
			{
				"name": "not.root_group_id.keyword",
				"fieldName": "op157_body_notRootGroupIdKeyword",
				"path": [
					"not.root_group_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.rule_id",
				"fieldName": "op157_body_notRuleId",
				"path": [
					"not.rule_id"
				],
				"type": "string"
			},
			{
				"name": "not.rule_id.keyword",
				"fieldName": "op157_body_notRuleIdKeyword",
				"path": [
					"not.rule_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.source_location.city",
				"fieldName": "op157_body_notSourceLocationCity",
				"path": [
					"not.source_location.city"
				],
				"type": "string"
			},
			{
				"name": "not.source_location.city.keyword",
				"fieldName": "op157_body_notSourceLocationCityKeyword",
				"path": [
					"not.source_location.city.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.source_location.continent",
				"fieldName": "op157_body_notSourceLocationContinent",
				"path": [
					"not.source_location.continent"
				],
				"type": "string"
			},
			{
				"name": "not.source_location.continent.keyword",
				"fieldName": "op157_body_notSourceLocationContinentKeyword",
				"path": [
					"not.source_location.continent.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.source_location.country",
				"fieldName": "op157_body_notSourceLocationCountry",
				"path": [
					"not.source_location.country"
				],
				"type": "string"
			},
			{
				"name": "not.source_location.country.keyword",
				"fieldName": "op157_body_notSourceLocationCountryKeyword",
				"path": [
					"not.source_location.country.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.source_location.country_iso",
				"fieldName": "op157_body_notSourceLocationCountryIso",
				"path": [
					"not.source_location.country_iso"
				],
				"type": "string"
			},
			{
				"name": "not.source_location.country_iso.keyword",
				"fieldName": "op157_body_notSourceLocationCountryIsoKeyword",
				"path": [
					"not.source_location.country_iso.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.source_location.postal_code",
				"fieldName": "op157_body_notSourceLocationPostalCode",
				"path": [
					"not.source_location.postal_code"
				],
				"type": "string"
			},
			{
				"name": "not.source_location.postal_code.keyword",
				"fieldName": "op157_body_notSourceLocationPostalCodeKeyword",
				"path": [
					"not.source_location.postal_code.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.source_location.subdivisions",
				"fieldName": "op157_body_notSourceLocationSubdivisions",
				"path": [
					"not.source_location.subdivisions"
				],
				"type": "string"
			},
			{
				"name": "not.source_location.subdivisions.keyword",
				"fieldName": "op157_body_notSourceLocationSubdivisionsKeyword",
				"path": [
					"not.source_location.subdivisions.keyword"
				],
				"type": "string"
			},
			{
				"name": "not.source_location.time_zone",
				"fieldName": "op157_body_notSourceLocationTimeZone",
				"path": [
					"not.source_location.time_zone"
				],
				"type": "string"
			},
			{
				"name": "not.source_location.time_zone.keyword",
				"fieldName": "op157_body_notSourceLocationTimeZoneKeyword",
				"path": [
					"not.source_location.time_zone.keyword"
				],
				"type": "string"
			},
			{
				"name": "origin_id",
				"fieldName": "op157_body_originId",
				"path": [
					"origin_id"
				],
				"type": "string"
			},
			{
				"name": "origin_id.keyword",
				"fieldName": "op157_body_originIdKeyword",
				"path": [
					"origin_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_architecture",
				"fieldName": "op157_body_osInfoOsArchitecture",
				"path": [
					"os_info.os_architecture"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_architecture.keyword",
				"fieldName": "op157_body_osInfoOsArchitectureKeyword",
				"path": [
					"os_info.os_architecture.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_platform",
				"fieldName": "op157_body_osInfoOsPlatform",
				"path": [
					"os_info.os_platform"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_platform.keyword",
				"fieldName": "op157_body_osInfoOsPlatformKeyword",
				"path": [
					"os_info.os_platform.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_release_name",
				"fieldName": "op157_body_osInfoOsReleaseName",
				"path": [
					"os_info.os_release_name"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_release_name.keyword",
				"fieldName": "op157_body_osInfoOsReleaseNameKeyword",
				"path": [
					"os_info.os_release_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_type",
				"fieldName": "op157_body_osInfoOsType",
				"path": [
					"os_info.os_type"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_type.keyword",
				"fieldName": "op157_body_osInfoOsTypeKeyword",
				"path": [
					"os_info.os_type.keyword"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_version",
				"fieldName": "op157_body_osInfoOsVersion",
				"path": [
					"os_info.os_version"
				],
				"type": "string"
			},
			{
				"name": "os_info.os_version.keyword",
				"fieldName": "op157_body_osInfoOsVersionKeyword",
				"path": [
					"os_info.os_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "page_size",
				"fieldName": "op157_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			},
			{
				"name": "plugins.asset_manager.plugin_version",
				"fieldName": "op157_body_pluginsAssetManagerPluginVersion",
				"path": [
					"plugins.asset_manager.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.asset_manager.plugin_version.keyword",
				"fieldName": "op157_body_pluginsAssetManagerPluginVersionKeyword",
				"path": [
					"plugins.asset_manager.plugin_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "plugins.asset_manager.reboot_reasons",
				"fieldName": "op157_body_pluginsAssetManagerRebootReasons",
				"path": [
					"plugins.asset_manager.reboot_reasons"
				],
				"type": "string"
			},
			{
				"name": "plugins.asset_manager.reboot_reasons.keyword",
				"fieldName": "op157_body_pluginsAssetManagerRebootReasonsKeyword",
				"path": [
					"plugins.asset_manager.reboot_reasons.keyword"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_detection_and_response.plugin_version",
				"fieldName": "op157_body_pluginsEndpointDetectionAndResponsePluginVersion",
				"path": [
					"plugins.endpoint_detection_and_response.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_detection_and_response.plugin_version.keyword",
				"fieldName": "op157_body_pluginsEndpointDetectionAndResponsePluginVersionKeyword",
				"path": [
					"plugins.endpoint_detection_and_response.plugin_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_detection_and_response.reboot_reasons",
				"fieldName": "op157_body_pluginsEndpointDetectionAndResponseRebootReasons",
				"path": [
					"plugins.endpoint_detection_and_response.reboot_reasons"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_detection_and_response.reboot_reasons.keyword",
				"fieldName": "op157_body_pluginsEndpointDetectionAndResponseRebootReasonsKeyword",
				"path": [
					"plugins.endpoint_detection_and_response.reboot_reasons.keyword"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.component_package_version",
				"fieldName": "op157_body_pluginsEndpointProtectionComponentPackageVersion",
				"path": [
					"plugins.endpoint_protection.component_package_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.component_package_version.keyword",
				"fieldName": "op157_body_pluginsEndpointProtectionComponentPackageVersionKeyword",
				"path": [
					"plugins.endpoint_protection.component_package_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.plugin_version",
				"fieldName": "op157_body_pluginsEndpointProtectionPluginVersion",
				"path": [
					"plugins.endpoint_protection.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.plugin_version.keyword",
				"fieldName": "op157_body_pluginsEndpointProtectionPluginVersionKeyword",
				"path": [
					"plugins.endpoint_protection.plugin_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.reboot_reasons",
				"fieldName": "op157_body_pluginsEndpointProtectionRebootReasons",
				"path": [
					"plugins.endpoint_protection.reboot_reasons"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.reboot_reasons.keyword",
				"fieldName": "op157_body_pluginsEndpointProtectionRebootReasonsKeyword",
				"path": [
					"plugins.endpoint_protection.reboot_reasons.keyword"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.sdk_version",
				"fieldName": "op157_body_pluginsEndpointProtectionSdkVersion",
				"path": [
					"plugins.endpoint_protection.sdk_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.sdk_version.keyword",
				"fieldName": "op157_body_pluginsEndpointProtectionSdkVersionKeyword",
				"path": [
					"plugins.endpoint_protection.sdk_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.update_package_version",
				"fieldName": "op157_body_pluginsEndpointProtectionUpdatePackageVersion",
				"path": [
					"plugins.endpoint_protection.update_package_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.endpoint_protection.update_package_version.keyword",
				"fieldName": "op157_body_pluginsEndpointProtectionUpdatePackageVersionKeyword",
				"path": [
					"plugins.endpoint_protection.update_package_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "plugins.incident_response.plugin_version",
				"fieldName": "op157_body_pluginsIncidentResponsePluginVersion",
				"path": [
					"plugins.incident_response.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.incident_response.plugin_version.keyword",
				"fieldName": "op157_body_pluginsIncidentResponsePluginVersionKeyword",
				"path": [
					"plugins.incident_response.plugin_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "plugins.incident_response.reboot_reasons",
				"fieldName": "op157_body_pluginsIncidentResponseRebootReasons",
				"path": [
					"plugins.incident_response.reboot_reasons"
				],
				"type": "string"
			},
			{
				"name": "plugins.incident_response.reboot_reasons.keyword",
				"fieldName": "op157_body_pluginsIncidentResponseRebootReasonsKeyword",
				"path": [
					"plugins.incident_response.reboot_reasons.keyword"
				],
				"type": "string"
			},
			{
				"name": "plugins.siem.plugin_version",
				"fieldName": "op157_body_pluginsSiemPluginVersion",
				"path": [
					"plugins.siem.plugin_version"
				],
				"type": "string"
			},
			{
				"name": "plugins.siem.plugin_version.keyword",
				"fieldName": "op157_body_pluginsSiemPluginVersionKeyword",
				"path": [
					"plugins.siem.plugin_version.keyword"
				],
				"type": "string"
			},
			{
				"name": "plugins.siem.reboot_reasons",
				"fieldName": "op157_body_pluginsSiemRebootReasons",
				"path": [
					"plugins.siem.reboot_reasons"
				],
				"type": "string"
			},
			{
				"name": "plugins.siem.reboot_reasons.keyword",
				"fieldName": "op157_body_pluginsSiemRebootReasonsKeyword",
				"path": [
					"plugins.siem.reboot_reasons.keyword"
				],
				"type": "string"
			},
			{
				"name": "policy_etag",
				"fieldName": "op157_body_policyEtag",
				"path": [
					"policy_etag"
				],
				"type": "string"
			},
			{
				"name": "policy_etag.keyword",
				"fieldName": "op157_body_policyEtagKeyword",
				"path": [
					"policy_etag.keyword"
				],
				"type": "string"
			},
			{
				"name": "policy_id",
				"fieldName": "op157_body_policyId",
				"path": [
					"policy_id"
				],
				"type": "string"
			},
			{
				"name": "policy_id.keyword",
				"fieldName": "op157_body_policyIdKeyword",
				"path": [
					"policy_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "policy_name",
				"fieldName": "op157_body_policyName",
				"path": [
					"policy_name"
				],
				"type": "string"
			},
			{
				"name": "policy_name.keyword",
				"fieldName": "op157_body_policyNameKeyword",
				"path": [
					"policy_name.keyword"
				],
				"type": "string"
			},
			{
				"name": "protocol",
				"fieldName": "op157_body_protocol",
				"path": [
					"protocol"
				],
				"type": "string"
			},
			{
				"name": "protocol.keyword",
				"fieldName": "op157_body_protocolKeyword",
				"path": [
					"protocol.keyword"
				],
				"type": "string"
			},
			{
				"name": "root_group_id",
				"fieldName": "op157_body_rootGroupId",
				"path": [
					"root_group_id"
				],
				"type": "string"
			},
			{
				"name": "root_group_id.keyword",
				"fieldName": "op157_body_rootGroupIdKeyword",
				"path": [
					"root_group_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "rule_id",
				"fieldName": "op157_body_ruleId",
				"path": [
					"rule_id"
				],
				"type": "string"
			},
			{
				"name": "rule_id.keyword",
				"fieldName": "op157_body_ruleIdKeyword",
				"path": [
					"rule_id.keyword"
				],
				"type": "string"
			},
			{
				"name": "sort_field",
				"fieldName": "op157_body_sortField",
				"path": [
					"sort_field"
				],
				"type": "string"
			},
			{
				"name": "sort_order",
				"fieldName": "op157_body_sortOrder",
				"path": [
					"sort_order"
				],
				"type": "string"
			},
			{
				"name": "source_location.city",
				"fieldName": "op157_body_sourceLocationCity",
				"path": [
					"source_location.city"
				],
				"type": "string"
			},
			{
				"name": "source_location.city.keyword",
				"fieldName": "op157_body_sourceLocationCityKeyword",
				"path": [
					"source_location.city.keyword"
				],
				"type": "string"
			},
			{
				"name": "source_location.continent",
				"fieldName": "op157_body_sourceLocationContinent",
				"path": [
					"source_location.continent"
				],
				"type": "string"
			},
			{
				"name": "source_location.continent.keyword",
				"fieldName": "op157_body_sourceLocationContinentKeyword",
				"path": [
					"source_location.continent.keyword"
				],
				"type": "string"
			},
			{
				"name": "source_location.country",
				"fieldName": "op157_body_sourceLocationCountry",
				"path": [
					"source_location.country"
				],
				"type": "string"
			},
			{
				"name": "source_location.country.keyword",
				"fieldName": "op157_body_sourceLocationCountryKeyword",
				"path": [
					"source_location.country.keyword"
				],
				"type": "string"
			},
			{
				"name": "source_location.country_iso",
				"fieldName": "op157_body_sourceLocationCountryIso",
				"path": [
					"source_location.country_iso"
				],
				"type": "string"
			},
			{
				"name": "source_location.country_iso.keyword",
				"fieldName": "op157_body_sourceLocationCountryIsoKeyword",
				"path": [
					"source_location.country_iso.keyword"
				],
				"type": "string"
			},
			{
				"name": "source_location.postal_code",
				"fieldName": "op157_body_sourceLocationPostalCode",
				"path": [
					"source_location.postal_code"
				],
				"type": "string"
			},
			{
				"name": "source_location.postal_code.keyword",
				"fieldName": "op157_body_sourceLocationPostalCodeKeyword",
				"path": [
					"source_location.postal_code.keyword"
				],
				"type": "string"
			},
			{
				"name": "source_location.subdivisions",
				"fieldName": "op157_body_sourceLocationSubdivisions",
				"path": [
					"source_location.subdivisions"
				],
				"type": "string"
			},
			{
				"name": "source_location.subdivisions.keyword",
				"fieldName": "op157_body_sourceLocationSubdivisionsKeyword",
				"path": [
					"source_location.subdivisions.keyword"
				],
				"type": "string"
			},
			{
				"name": "source_location.time_zone",
				"fieldName": "op157_body_sourceLocationTimeZone",
				"path": [
					"source_location.time_zone"
				],
				"type": "string"
			},
			{
				"name": "source_location.time_zone.keyword",
				"fieldName": "op157_body_sourceLocationTimeZoneKeyword",
				"path": [
					"source_location.time_zone.keyword"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postRidRulesExport",
		"resource": "rid",
		"name": "Export RID Rules",
		"method": "POST",
		"path": "/nebula/v1/rid/rules/export",
		"hasAccountIdHeader": false,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op158_bodyFields",
		"bodyFieldName": "op158_body",
		"bodyParameters": [
			{
				"name": "download",
				"fieldName": "op158_body_download",
				"path": [
					"download"
				],
				"type": "boolean"
			},
			{
				"name": "format",
				"fieldName": "op158_body_format",
				"path": [
					"format"
				],
				"type": "string"
			},
			{
				"name": "type",
				"fieldName": "op158_body_type",
				"path": [
					"type"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postRidRulesSearchGroupby",
		"resource": "rid",
		"name": "Search Grouped RID",
		"method": "POST",
		"path": "/nebula/v1/rid/rules/search-groupby",
		"hasAccountIdHeader": false,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op159_bodyFields",
		"bodyFieldName": "op159_body",
		"bodyParameters": [
			{
				"name": "group_by",
				"fieldName": "op159_body_groupBy",
				"path": [
					"group_by"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "getSa",
		"resource": "sa",
		"name": "Suspicious Activity Of The Account",
		"method": "GET",
		"path": "/nebula/v1/sa",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [
			{
				"name": "sort_field",
				"fieldName": "op160_query_sortField",
				"required": false
			},
			{
				"name": "sort_direction",
				"fieldName": "op160_query_sortDirection",
				"required": false
			},
			{
				"name": "next_cursor",
				"fieldName": "op160_query_nextCursor",
				"required": false
			},
			{
				"name": "since",
				"fieldName": "op160_query_since",
				"required": false
			},
			{
				"name": "group_ids",
				"fieldName": "op160_query_groupIds",
				"required": false
			},
			{
				"name": "per_page",
				"fieldName": "op160_query_perPage",
				"required": false
			}
		],
		"bodyParameters": []
	},
	{
		"value": "postSaDetails",
		"resource": "sa",
		"name": "Suspicious Activity Details",
		"method": "POST",
		"path": "/nebula/v1/sa/details",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [
			{
				"name": "next_cursor",
				"fieldName": "op161_query_nextCursor",
				"required": false
			}
		],
		"bodyCollectionFieldName": "op161_bodyFields",
		"bodyFieldName": "op161_body",
		"bodyParameters": [
			{
				"name": "endpoint",
				"fieldName": "op161_body_endpoint",
				"path": [
					"endpoint"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "getSaByIdProcessGraph",
		"resource": "sa",
		"name": "Suspicious Activity Process Graph",
		"method": "GET",
		"path": "/nebula/v1/sa/{id}/process_graph",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op162_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "getSchedules",
		"resource": "schedules",
		"name": "Get Schedules",
		"method": "GET",
		"path": "/nebula/v1/schedules",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [
			{
				"name": "next_cursor",
				"fieldName": "op163_query_nextCursor",
				"required": false
			}
		],
		"bodyParameters": []
	},
	{
		"value": "postSchedules",
		"resource": "schedules",
		"name": "Create Schedule",
		"method": "POST",
		"path": "/nebula/v1/schedules",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op164_bodyFields",
		"bodyFieldName": "op164_body",
		"bodyParameters": [
			{
				"name": "command",
				"fieldName": "op164_body_command",
				"path": [
					"command"
				],
				"type": "string"
			},
			{
				"name": "pup_detection",
				"fieldName": "op164_body_commandDataMacScanSettingsPupDetection",
				"path": [
					"command_data",
					"mac_scan_settings",
					"pup_detection"
				],
				"type": "string"
			},
			{
				"name": "remove",
				"fieldName": "op164_body_commandDataMacScanSettingsRemove",
				"path": [
					"command_data",
					"mac_scan_settings",
					"remove"
				],
				"type": "boolean"
			},
			{
				"name": "ark",
				"fieldName": "op164_body_commandDataScanSettingsArk",
				"path": [
					"command_data",
					"scan_settings",
					"ark"
				],
				"type": "boolean"
			},
			{
				"name": "fixed_drive",
				"fieldName": "op164_body_commandDataScanSettingsFixedDrive",
				"path": [
					"command_data",
					"scan_settings",
					"fixed_drive"
				],
				"type": "boolean"
			},
			{
				"name": "no_archive",
				"fieldName": "op164_body_commandDataScanSettingsNoArchive",
				"path": [
					"command_data",
					"scan_settings",
					"no_archive"
				],
				"type": "boolean"
			},
			{
				"name": "pum_detection",
				"fieldName": "op164_body_commandDataScanSettingsPumDetection",
				"path": [
					"command_data",
					"scan_settings",
					"pum_detection"
				],
				"type": "string"
			},
			{
				"name": "pup_detection",
				"fieldName": "op164_body_commandDataScanSettingsPupDetection",
				"path": [
					"command_data",
					"scan_settings",
					"pup_detection"
				],
				"type": "string"
			},
			{
				"name": "remove",
				"fieldName": "op164_body_commandDataScanSettingsRemove",
				"path": [
					"command_data",
					"scan_settings",
					"remove"
				],
				"type": "boolean"
			},
			{
				"name": "scan_memory",
				"fieldName": "op164_body_commandDataScanSettingsScanMemory",
				"path": [
					"command_data",
					"scan_settings",
					"scan_memory"
				],
				"type": "boolean"
			},
			{
				"name": "scan_path",
				"fieldName": "op164_body_commandDataScanSettingsScanPath",
				"path": [
					"command_data",
					"scan_settings",
					"scan_path"
				],
				"type": "string"
			},
			{
				"name": "scan_registry",
				"fieldName": "op164_body_commandDataScanSettingsScanRegistry",
				"path": [
					"command_data",
					"scan_settings",
					"scan_registry"
				],
				"type": "boolean"
			},
			{
				"name": "scan_startup",
				"fieldName": "op164_body_commandDataScanSettingsScanStartup",
				"path": [
					"command_data",
					"scan_settings",
					"scan_startup"
				],
				"type": "boolean"
			},
			{
				"name": "type",
				"fieldName": "op164_body_commandDataScanSettingsType",
				"path": [
					"command_data",
					"scan_settings",
					"type"
				],
				"type": "string"
			},
			{
				"name": "schedule_for_mac",
				"fieldName": "op164_body_commandDataScheduleForMac",
				"path": [
					"command_data",
					"schedule_for_mac"
				],
				"type": "boolean"
			},
			{
				"name": "schedule_for_windows",
				"fieldName": "op164_body_commandDataScheduleForWindows",
				"path": [
					"command_data",
					"schedule_for_windows"
				],
				"type": "boolean"
			},
			{
				"name": "enabled",
				"fieldName": "op164_body_enabled",
				"path": [
					"enabled"
				],
				"type": "boolean"
			},
			{
				"name": "name",
				"fieldName": "op164_body_name",
				"path": [
					"name"
				],
				"type": "string"
			},
			{
				"name": "rrule",
				"fieldName": "op164_body_rrule",
				"path": [
					"rrule"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "deleteSchedulesById",
		"resource": "schedules",
		"name": "Delete A Schedule",
		"method": "DELETE",
		"path": "/nebula/v1/schedules/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op165_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op165_body",
		"bodyParameters": []
	},
	{
		"value": "getSchedulesById",
		"resource": "schedules",
		"name": "Get Schedule By ID",
		"method": "GET",
		"path": "/nebula/v1/schedules/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op166_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "putSchedulesById",
		"resource": "schedules",
		"name": "Update Schedule",
		"method": "PUT",
		"path": "/nebula/v1/schedules/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op167_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyCollectionFieldName": "op167_bodyFields",
		"bodyFieldName": "op167_body",
		"bodyParameters": [
			{
				"name": "command",
				"fieldName": "op167_body_command",
				"path": [
					"command"
				],
				"type": "string"
			},
			{
				"name": "pup_detection",
				"fieldName": "op167_body_commandDataMacScanSettingsPupDetection",
				"path": [
					"command_data",
					"mac_scan_settings",
					"pup_detection"
				],
				"type": "string"
			},
			{
				"name": "remove",
				"fieldName": "op167_body_commandDataMacScanSettingsRemove",
				"path": [
					"command_data",
					"mac_scan_settings",
					"remove"
				],
				"type": "boolean"
			},
			{
				"name": "ark",
				"fieldName": "op167_body_commandDataScanSettingsArk",
				"path": [
					"command_data",
					"scan_settings",
					"ark"
				],
				"type": "boolean"
			},
			{
				"name": "fixed_drive",
				"fieldName": "op167_body_commandDataScanSettingsFixedDrive",
				"path": [
					"command_data",
					"scan_settings",
					"fixed_drive"
				],
				"type": "boolean"
			},
			{
				"name": "no_archive",
				"fieldName": "op167_body_commandDataScanSettingsNoArchive",
				"path": [
					"command_data",
					"scan_settings",
					"no_archive"
				],
				"type": "boolean"
			},
			{
				"name": "pum_detection",
				"fieldName": "op167_body_commandDataScanSettingsPumDetection",
				"path": [
					"command_data",
					"scan_settings",
					"pum_detection"
				],
				"type": "string"
			},
			{
				"name": "pup_detection",
				"fieldName": "op167_body_commandDataScanSettingsPupDetection",
				"path": [
					"command_data",
					"scan_settings",
					"pup_detection"
				],
				"type": "string"
			},
			{
				"name": "remove",
				"fieldName": "op167_body_commandDataScanSettingsRemove",
				"path": [
					"command_data",
					"scan_settings",
					"remove"
				],
				"type": "boolean"
			},
			{
				"name": "scan_memory",
				"fieldName": "op167_body_commandDataScanSettingsScanMemory",
				"path": [
					"command_data",
					"scan_settings",
					"scan_memory"
				],
				"type": "boolean"
			},
			{
				"name": "scan_path",
				"fieldName": "op167_body_commandDataScanSettingsScanPath",
				"path": [
					"command_data",
					"scan_settings",
					"scan_path"
				],
				"type": "string"
			},
			{
				"name": "scan_registry",
				"fieldName": "op167_body_commandDataScanSettingsScanRegistry",
				"path": [
					"command_data",
					"scan_settings",
					"scan_registry"
				],
				"type": "boolean"
			},
			{
				"name": "scan_startup",
				"fieldName": "op167_body_commandDataScanSettingsScanStartup",
				"path": [
					"command_data",
					"scan_settings",
					"scan_startup"
				],
				"type": "boolean"
			},
			{
				"name": "type",
				"fieldName": "op167_body_commandDataScanSettingsType",
				"path": [
					"command_data",
					"scan_settings",
					"type"
				],
				"type": "string"
			},
			{
				"name": "schedule_for_mac",
				"fieldName": "op167_body_commandDataScheduleForMac",
				"path": [
					"command_data",
					"schedule_for_mac"
				],
				"type": "boolean"
			},
			{
				"name": "schedule_for_windows",
				"fieldName": "op167_body_commandDataScheduleForWindows",
				"path": [
					"command_data",
					"schedule_for_windows"
				],
				"type": "boolean"
			},
			{
				"name": "enabled",
				"fieldName": "op167_body_enabled",
				"path": [
					"enabled"
				],
				"type": "boolean"
			},
			{
				"name": "etag",
				"fieldName": "op167_body_etag",
				"path": [
					"etag"
				],
				"type": "string"
			},
			{
				"name": "name",
				"fieldName": "op167_body_name",
				"path": [
					"name"
				],
				"type": "string"
			},
			{
				"name": "rrule",
				"fieldName": "op167_body_rrule",
				"path": [
					"rrule"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "putSchedulesByIdGroups",
		"resource": "schedules",
		"name": "Add Groups For Schedule",
		"method": "PUT",
		"path": "/nebula/v1/schedules/{id}/groups",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op168_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op168_body",
		"bodyParameters": []
	},
	{
		"value": "postUsageHistogram",
		"resource": "usage",
		"name": "Search Usage Histogram",
		"method": "POST",
		"path": "/nebula/v1/usage/histogram",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op169_bodyFields",
		"bodyFieldName": "op169_body",
		"bodyParameters": [
			{
				"name": "end_date",
				"fieldName": "op169_body_endDate",
				"path": [
					"end_date"
				],
				"type": "string"
			},
			{
				"name": "start_date",
				"fieldName": "op169_body_startDate",
				"path": [
					"start_date"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postUsageLogs",
		"resource": "usage",
		"name": "Search Logs Of Usage",
		"method": "POST",
		"path": "/nebula/v1/usage/logs",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op170_bodyFields",
		"bodyFieldName": "op170_body",
		"bodyParameters": [
			{
				"name": "end_date",
				"fieldName": "op170_body_endDate",
				"path": [
					"end_date"
				],
				"type": "string"
			},
			{
				"name": "next_cursor",
				"fieldName": "op170_body_nextCursor",
				"path": [
					"next_cursor"
				],
				"type": "number"
			},
			{
				"name": "page_size",
				"fieldName": "op170_body_pageSize",
				"path": [
					"page_size"
				],
				"type": "number"
			},
			{
				"name": "start_date",
				"fieldName": "op170_body_startDate",
				"path": [
					"start_date"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "postUsageLogsSummary",
		"resource": "usage",
		"name": "Search Summary Of Usage",
		"method": "POST",
		"path": "/nebula/v1/usage/logs/summary",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op171_bodyFields",
		"bodyFieldName": "op171_body",
		"bodyParameters": [
			{
				"name": "end_date",
				"fieldName": "op171_body_endDate",
				"path": [
					"end_date"
				],
				"type": "string"
			},
			{
				"name": "start_date",
				"fieldName": "op171_body_startDate",
				"path": [
					"start_date"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "getUsers",
		"resource": "users",
		"name": "Get Nebula Users",
		"method": "GET",
		"path": "/nebula/v1/users",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [
			{
				"name": "next_cursor",
				"fieldName": "op172_query_nextCursor",
				"required": false
			}
		],
		"bodyParameters": []
	},
	{
		"value": "postUsers",
		"resource": "users",
		"name": "Create User",
		"method": "POST",
		"path": "/nebula/v1/users",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op173_bodyFields",
		"bodyFieldName": "op173_body",
		"bodyParameters": [
			{
				"name": "all_groups_access",
				"fieldName": "op173_body_allGroupsAccess",
				"path": [
					"all_groups_access"
				],
				"type": "boolean"
			},
			{
				"name": "ars_permission",
				"fieldName": "op173_body_arsPermission",
				"path": [
					"ars_permission"
				],
				"type": "boolean"
			},
			{
				"name": "email",
				"fieldName": "op173_body_email",
				"path": [
					"email"
				],
				"type": "string"
			},
			{
				"name": "role",
				"fieldName": "op173_body_role",
				"path": [
					"role"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "deleteUsersById",
		"resource": "users",
		"name": "Delete A Nebula User",
		"method": "DELETE",
		"path": "/nebula/v1/users/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op174_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op174_body",
		"bodyParameters": []
	},
	{
		"value": "getUsersById",
		"resource": "users",
		"name": "Get One User",
		"method": "GET",
		"path": "/nebula/v1/users/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op175_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "putUsersById",
		"resource": "users",
		"name": "Update User",
		"method": "PUT",
		"path": "/nebula/v1/users/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op176_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyCollectionFieldName": "op176_bodyFields",
		"bodyFieldName": "op176_body",
		"bodyParameters": [
			{
				"name": "all_groups_access",
				"fieldName": "op176_body_allGroupsAccess",
				"path": [
					"all_groups_access"
				],
				"type": "boolean"
			},
			{
				"name": "ars_permission",
				"fieldName": "op176_body_arsPermission",
				"path": [
					"ars_permission"
				],
				"type": "boolean"
			},
			{
				"name": "role",
				"fieldName": "op176_body_role",
				"path": [
					"role"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "getWebhooksSubscriptions",
		"resource": "webhooks",
		"name": "Get All Subscriptions",
		"method": "GET",
		"path": "/nebula/v1/webhooks/subscriptions",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [
			{
				"name": "next_cursor",
				"fieldName": "op177_query_nextCursor",
				"required": false
			}
		],
		"bodyParameters": []
	},
	{
		"value": "postWebhooksSubscriptions",
		"resource": "webhooks",
		"name": "Create Subscription",
		"method": "POST",
		"path": "/nebula/v1/webhooks/subscriptions",
		"hasAccountIdHeader": true,
		"pathParameters": [],
		"queryParameters": [],
		"bodyCollectionFieldName": "op178_bodyFields",
		"bodyFieldName": "op178_body",
		"bodyParameters": [
			{
				"name": "description",
				"fieldName": "op178_body_description",
				"path": [
					"description"
				],
				"type": "string"
			},
			{
				"name": "enabled",
				"fieldName": "op178_body_enabled",
				"path": [
					"enabled"
				],
				"type": "boolean"
			},
			{
				"name": "max_retries",
				"fieldName": "op178_body_maxRetries",
				"path": [
					"max_retries"
				],
				"type": "number"
			},
			{
				"name": "secret_token",
				"fieldName": "op178_body_secretToken",
				"path": [
					"secret_token"
				],
				"type": "string"
			},
			{
				"name": "url",
				"fieldName": "op178_body_url",
				"path": [
					"url"
				],
				"type": "string"
			}
		]
	},
	{
		"value": "deleteWebhooksSubscriptionsById",
		"resource": "webhooks",
		"name": "Delete Subscription",
		"method": "DELETE",
		"path": "/nebula/v1/webhooks/subscriptions/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op179_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyFieldName": "op179_body",
		"bodyParameters": []
	},
	{
		"value": "getWebhooksSubscriptionsById",
		"resource": "webhooks",
		"name": "Get A Subscription",
		"method": "GET",
		"path": "/nebula/v1/webhooks/subscriptions/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op180_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyParameters": []
	},
	{
		"value": "putWebhooksSubscriptionsById",
		"resource": "webhooks",
		"name": "Update A Subscription",
		"method": "PUT",
		"path": "/nebula/v1/webhooks/subscriptions/{id}",
		"hasAccountIdHeader": true,
		"pathParameters": [
			{
				"name": "id",
				"fieldName": "op181_path_id",
				"required": true
			}
		],
		"queryParameters": [],
		"bodyCollectionFieldName": "op181_bodyFields",
		"bodyFieldName": "op181_body",
		"bodyParameters": [
			{
				"name": "description",
				"fieldName": "op181_body_description",
				"path": [
					"description"
				],
				"type": "string"
			},
			{
				"name": "enabled",
				"fieldName": "op181_body_enabled",
				"path": [
					"enabled"
				],
				"type": "boolean"
			},
			{
				"name": "max_retries",
				"fieldName": "op181_body_maxRetries",
				"path": [
					"max_retries"
				],
				"type": "number"
			},
			{
				"name": "secret_token",
				"fieldName": "op181_body_secretToken",
				"path": [
					"secret_token"
				],
				"type": "string"
			},
			{
				"name": "url",
				"fieldName": "op181_body_url",
				"path": [
					"url"
				],
				"type": "string"
			}
		]
	}
];
