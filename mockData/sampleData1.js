/* eslint-disable */
export default {
    expand: 'schema,names',
    startAt: 0,
    maxResults: 1000,
    total: 31,
    issues: [
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '114369',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/114369',
            key: 'LP-18600',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@4443c82f[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2480cd2b[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@440e9c60[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@54cbc9ca[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@e1371cc[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2c581cb0[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@1c0568c7[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@168a6714[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@302f918[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6f53c854[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@58a7d629[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1dd0b8ee[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@98e4875[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '74704',
                    key: 'LP-5605',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/74704',
                    fields: {
                        summary: 'AR Room Viewer: Missing Callouts (Sale, Clearance, Free Shipping/Returns)',
                        status: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10042',
                            description: 'Evaluation completed and requirements are approved by product team',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                            name: 'Evaluated',
                            id: '10042',
                            statusCategory: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                id: 4,
                                key: 'indeterminate',
                                colorName: 'yellow',
                                name: 'In Progress'
                            }
                        },
                        priority: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                            name: 'High Priority',
                            id: '10102'
                        },
                        issuetype: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/1',
                            id: '1',
                            description: 'A problem which impairs or prevents the functions of the product.',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14133&avatarType=issuetype',
                            name: 'Bug',
                            subtask: false,
                            avatarId: 14133
                        }
                    }
                },
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                    name: 'Not Prioritized',
                    id: '10100'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 600,
                aggregatetimeoriginalestimate: 3600,
                versions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24362',
                        id: '24362',
                        description: '',
                        name: '71',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-07'
                    }
                ],
                issuelinks: [],
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=KDesai',
                    name: 'KDesai',
                    key: 'kdesai',
                    emailAddress: 'KDesai@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Kiran Desai',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                    description: 'The issue is open and ready for the assignee to start work on it.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                    name: 'Open',
                    id: '1',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                        id: 2,
                        key: 'new',
                        colorName: 'blue-gray',
                        name: 'To Do'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10271', value: 'QA', id: '10271' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 600,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=KDesai',
                    name: 'KDesai',
                    key: 'kdesai',
                    emailAddress: 'KDesai@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Kiran Desai',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: null,
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=KDesai',
                    name: 'KDesai',
                    key: 'kdesai',
                    emailAddress: 'KDesai@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Kiran Desai',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|s002cg:',
                customfield_10682: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=KDesai',
                        name: 'KDesai',
                        key: 'kdesai',
                        emailAddress: 'KDesai@lampsplus.com',
                        avatarUrls: {
                            '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                            '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                            '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                            '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                        },
                        displayName: 'Kiran Desai',
                        active: true,
                        timeZone: 'America/Los_Angeles'
                    }
                ],
                customfield_12980: null,
                aggregateprogress: { progress: 3000, total: 3600, percent: 83 },
                progress: { progress: 3000, total: 3600, percent: 83 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18600/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                    id: '5',
                    description: 'The sub-task of the issue',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                    name: 'Sub-task',
                    subtask: true,
                    avatarId: 14146
                },
                customfield_11080: null,
                timespent: 3000,
                customfield_11480: null,
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 3000,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 83,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18600/watchers', watchCount: 1, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-05-10T04:15:32.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-10T04:26:51.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 3600,
                description: null,
                summary: 'QA:AR Room Viewer: Missing Callouts (Sale, Clearance, Free Shipping/Returns)',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '114365',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/114365',
            key: 'LP-18596',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@42280d28[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2dc1981[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@29f10d6a[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7b76b098[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@79b5a393[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1b47ad35[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@3a7c796a[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@74c0fccd[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@20bd60fd[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6355fda[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@5f5bc15f[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2c0e68ed[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@67ff4f19[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '53055',
                    key: 'LP-2723',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/53055',
                    fields: {
                        summary: 'LP-Personalization: Doesn\'t seem to be working on Mac',
                        status: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10042',
                            description: 'Evaluation completed and requirements are approved by product team',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                            name: 'Evaluated',
                            id: '10042',
                            statusCategory: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                id: 4,
                                key: 'indeterminate',
                                colorName: 'yellow',
                                name: 'In Progress'
                            }
                        },
                        priority: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                            name: 'High Priority',
                            id: '10102'
                        },
                        issuetype: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/1',
                            id: '1',
                            description: 'A problem which impairs or prevents the functions of the product.',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14133&avatarType=issuetype',
                            name: 'Bug',
                            subtask: false,
                            avatarId: 14133
                        }
                    }
                },
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                    name: 'Not Prioritized',
                    id: '10100'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 1200,
                aggregatetimeoriginalestimate: null,
                versions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24362',
                        id: '24362',
                        description: '',
                        name: '71',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-07'
                    }
                ],
                issuelinks: [],
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=PKshirsagar',
                    name: 'PKshirsagar',
                    key: 'pkshirsagar',
                    emailAddress: 'PKshirsagar@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Pooja Kshirsagar',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                    description: 'The issue is open and ready for the assignee to start work on it.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                    name: 'Open',
                    id: '1',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                        id: 2,
                        key: 'new',
                        colorName: 'blue-gray',
                        name: 'To Do'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: null,
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 1200,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=PKshirsagar',
                    name: 'PKshirsagar',
                    key: 'pkshirsagar',
                    emailAddress: 'PKshirsagar@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Pooja Kshirsagar',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: null,
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=PKshirsagar',
                    name: 'PKshirsagar',
                    key: 'pkshirsagar',
                    emailAddress: 'PKshirsagar@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Pooja Kshirsagar',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|s002bk:',
                customfield_10682: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=PKshirsagar',
                        name: 'PKshirsagar',
                        key: 'pkshirsagar',
                        emailAddress: 'PKshirsagar@lampsplus.com',
                        avatarUrls: {
                            '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                            '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                            '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                            '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                        },
                        displayName: 'Pooja Kshirsagar',
                        active: true,
                        timeZone: 'America/Los_Angeles'
                    }
                ],
                customfield_12980: null,
                aggregateprogress: { progress: 1200, total: 2400, percent: 50 },
                progress: { progress: 1200, total: 2400, percent: 50 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18596/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                    id: '5',
                    description: 'The sub-task of the issue',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                    name: 'Sub-task',
                    subtask: true,
                    avatarId: 14146
                },
                customfield_11080: null,
                timespent: 1200,
                customfield_11480: null,
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 1200,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: -1,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18596/watchers', watchCount: 1, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-05-10T03:32:33.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-10T03:36:06.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: null,
                description: null,
                summary: 'QA-LP-Personalization: Doesn\'t seem to be working on Mac',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '114154',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/114154',
            key: 'LP-18523',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@f45edad[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@d72e262[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@aa3dc97[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@57a5e52e[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@77ad42f2[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6d56df97[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@7985e1ce[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@171f745[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@1cd69f4b[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@47275121[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@11fa439a[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1fbf553f[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@373bad44[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '113308',
                    key: 'LP-18179',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113308',
                    fields: {
                        summary: 'LP Desktop:H2 tag is missing on https://172.24.107.20/products/onsale_view-on-sale-items/',
                        status: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                            description: 'The issue is open and ready for the assignee to start work on it.',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                            name: 'Open',
                            id: '1',
                            statusCategory: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                                id: 2,
                                key: 'new',
                                colorName: 'blue-gray',
                                name: 'To Do'
                            }
                        },
                        priority: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                            name: 'Not Prioritized',
                            id: '10100'
                        },
                        issuetype: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                            id: '3',
                            description: 'A task that needs to be done.',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                            name: 'Task',
                            subtask: false,
                            avatarId: 14148
                        }
                    }
                },
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                    name: 'Not Prioritized',
                    id: '10100'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: null,
                aggregatetimeoriginalestimate: null,
                versions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/23860',
                        id: '23860',
                        description: '',
                        name: '70',
                        archived: false,
                        released: true,
                        releaseDate: '2018-04-25'
                    },
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/23762',
                        id: '23762',
                        description: '',
                        name: '69',
                        archived: false,
                        released: true,
                        releaseDate: '2018-04-11'
                    }
                ],
                issuelinks: [],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                    description: 'The issue is open and ready for the assignee to start work on it.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                    name: 'Open',
                    id: '1',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                        id: 2,
                        key: 'new',
                        colorName: 'blue-gray',
                        name: 'To Do'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10271', value: 'QA', id: '10271' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: null,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=omats',
                    name: 'omats',
                    key: 'omats',
                    emailAddress: 'omats@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=omats&avatarId=13930',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=omats&avatarId=13930',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=omats&avatarId=13930',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=omats&avatarId=13930'
                    },
                    displayName: 'Oleg Mats',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: null,
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=omats',
                    name: 'omats',
                    key: 'omats',
                    emailAddress: 'omats@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=omats&avatarId=13930',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=omats&avatarId=13930',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=omats&avatarId=13930',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=omats&avatarId=13930'
                    },
                    displayName: 'Oleg Mats',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|s0011c:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 0 },
                progress: { progress: 0, total: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18523/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                    id: '5',
                    description: 'The sub-task of the issue',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                    name: 'Sub-task',
                    subtask: true,
                    avatarId: 14146
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jkrithivasan',
                    name: 'jkrithivasan',
                    key: 'jkrithivasan',
                    emailAddress: 'JKrithivasan@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Jayasri Krithivasan',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: -1,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18523/watchers', watchCount: 1, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-05-07T11:01:42.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-07T11:02:39.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: null,
                description: null,
                summary: 'QA: LP Desktop:H2 tag is missing on https://172.24.107.20/products/onsale_view-on-sale-items/',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '114141',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/114141',
            key: 'LP-18514',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@29310bd7[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1c9c4508[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@2613f487[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1031f22d[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@31ff3c4f[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4f358b7d[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@76bbf9d0[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6904cdb0[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@21d1999b[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@425c80bf[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@6b80845d[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@24a6bdd0[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@996f59e[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: '2018-05-09T00:24:11.046-0700',
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                    name: 'Not Prioritized',
                    id: '10100'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 0,
                aggregatetimeoriginalestimate: 0,
                versions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24362',
                        id: '24362',
                        description: '',
                        name: '71',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-07'
                    }
                ],
                issuelinks: [],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/4',
                    description:
                        'This issue was once resolved, but the resolution was deemed incorrect. From here issues are either marked assigned or resolved.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/reopened.png',
                    name: 'Reopened',
                    id: '4',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                        id: 2,
                        key: 'new',
                        colorName: 'blue-gray',
                        name: 'To Do'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: null,
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 0,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=NKhanewale',
                    name: 'NKhanewale',
                    key: 'nkhanewale',
                    emailAddress: 'NKhanewale@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Nisarga Khanewale',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: null,
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=NKhanewale',
                    name: 'NKhanewale',
                    key: 'nkhanewale',
                    emailAddress: 'NKhanewale@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Nisarga Khanewale',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|s000yw:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 0 },
                progress: { progress: 0, total: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18514/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/1',
                    id: '1',
                    description: 'A problem which impairs or prevents the functions of the product.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14133&avatarType=issuetype',
                    name: 'Bug',
                    subtask: false,
                    avatarId: 14133
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=SWilde',
                    name: 'SWilde',
                    key: 'swilde',
                    emailAddress: 'swilde@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=swilde&avatarId=16730',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=swilde&avatarId=16730',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=swilde&avatarId=16730',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=swilde&avatarId=16730'
                    },
                    displayName: 'Seth Wilde',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 0,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18514/watchers', watchCount: 2, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-05-07T05:39:25.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-08T03:58:30.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 0,
                description:
                    'h2.Description:\r\nError is displayed in Product Schema in Goggle Structured Data Testing tool.\r\n\r\nh5.Browser:\r\nChrome\r\n\r\nh5.User Role:\r\nUser not Signed In\r\n\r\nh5.Pre-Condition:\r\nUser has the Google Structured Data Tool open: https://search.google.com/structured-data/testing-tool.\r\n\r\nh5.Steps:\r\n# In the browser > mobile emulator view, paste the following URL (for Product: standard w/ reviews and videos) in a browser and hit following url:\r\n a. https://www.lampsplus.com/products/diva-600w-3-way-wall-dimmer-by-lutron__48007.html\r\n b. https://www.lampsplus.com/products/reflection-giclee-16-inch-wide-semi-flush-ceiling-light__n7956-2r523.html\r\n c. https://www.lampsplus.com/products/possini-euro-design-double-drum-18-inch-wide-white-ceiling-light__p0197.html \r\n d. https://www.lampsplus.com/products/capel-bethel-celtic-ecru-blue-indoor-outdoor-area-rug__9r196.html \r\n# Once the page finishes loading, type view-source: at the beginning of the URL (before https://) and hit enter. (for e.g view-source:https://www.lampsplus.com/products/diva-600w-3-way-wall-dimmer-by-lutron__48007.html)\r\n# Once the page source displays in the mobile emulator view, press Ctrl+A to select the entire source code and then copy it.\r\n# Paste the page source in the Google Structured Data Tool > Test your structured data window > CODE SNIPPET section.\r\n# Click on the RUN TEST button\r\n# Once the page finishes loading, observe the right hand side section of the tool \r\n# Observe the ERRORS count for the Product Schema\r\n\r\nh5.Actual Result;\r\nError is displayed in Product Schema in Goggle Structured Data Testing tool.\r\n !error in Product schema.png|thumbnail! \r\n\r\nh5.Expected Result:\r\nThere should be 0 ERRORS for the Product Schema \r\n\r\nh5.Test case Identifier:\r\nTest Project: LPR-Lampsplus\r\nTest Plan LP_Regression_Mobile\r\nBuild LPv71 Round 1\r\nTest Suite : Regression/ Mobile/ Manual/ SEO Tags - Manual/\r\nTest case Id: LPR-6408, LPR-6409 and LPR-6410.',
                summary: 'LP: SEO tags: Error is displayed in Product Schema in Goggle Structured Data Testing tool.',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '114019',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/114019',
            key: 'LP-18479',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@58c871f0[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@67b9d231[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@6b2f9bbe[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4c4ef1a1[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@57124e29[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7e1336a0[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@6976a0b7[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@528e87c1[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@1728f8bf[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@70696acc[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@2c461f6e[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@a5035a8[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@5aedd95d[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '113660',
                    key: 'LP-18328',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113660',
                    fields: {
                        summary: 'Add \'Optional Controls\' option to Ceiling Fans PDP',
                        status: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10040',
                            description: 'The task is under evaluation by product team',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                            name: 'Evaluating',
                            id: '10040',
                            statusCategory: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                id: 4,
                                key: 'indeterminate',
                                colorName: 'yellow',
                                name: 'In Progress'
                            }
                        },
                        priority: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                            name: 'High Priority',
                            id: '10102'
                        },
                        issuetype: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                            id: '3',
                            description: 'A task that needs to be done.',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                            name: 'Task',
                            subtask: false,
                            avatarId: 14148
                        }
                    }
                },
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 7200,
                aggregatetimeoriginalestimate: 7200,
                versions: [],
                issuelinks: [],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10040',
                    description: 'The task is under evaluation by product team',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'Evaluating',
                    id: '10040',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10272', value: 'DBA', id: '10272' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 7200,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jkrithivasan',
                    name: 'jkrithivasan',
                    key: 'jkrithivasan',
                    emailAddress: 'JKrithivasan@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Jayasri Krithivasan',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@57bf7114[id=448,rapidViewId=158,state=FUTURE,name=Shredders Sprint 6,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=448,goal=<null>]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: { name: 'The Shredders', self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=The+Shredders' },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jkrithivasan',
                    name: 'jkrithivasan',
                    key: 'jkrithivasan',
                    emailAddress: 'JKrithivasan@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Jayasri Krithivasan',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|s00080:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 7200, percent: 0 },
                progress: { progress: 0, total: 7200, percent: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18479/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                    id: '5',
                    description: 'The sub-task of the issue',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                    name: 'Sub-task',
                    subtask: true,
                    avatarId: 14146
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jkrithivasan',
                    name: 'jkrithivasan',
                    key: 'jkrithivasan',
                    emailAddress: 'JKrithivasan@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Jayasri Krithivasan',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 0,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18479/watchers', watchCount: 1, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-05-03T11:52:51.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T07:25:02.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 7200,
                description:
                    'Migrate data to the new db tables to support Optional Controls added to the Ceiling Fans PDP.\r\n\r\nh2. Implementation Solution\r\nTo be added by [~tfoster]\r\n\r\nh2. Implementation Details\r\nTo be added by [~soh]',
                summary: 'DB: Data Migration to Support - Add \'Optional Controls\' option to Ceiling Fans PDP',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113952',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113952',
            key: 'LP-18468',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@49508064[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6a25a12f[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@35bd567b[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7ef6b561[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@33e8497b[failedBuildCount=0,successfulBuildCount=2,unknownBuildCount=0,count=2,lastUpdated=2018-05-03T12:11:02.797-0700,lastUpdatedTimestamp=2018-05-03T12:11:02.797-07:00],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@750022c0[count=2,name=Bamboo]}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2bd22485[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@6044c123[stateCount=1,state=REVIEW,dueDate=<null>,overDue=false,count=1,lastUpdated=2018-05-03T11:59:00.423-0700,lastUpdatedTimestamp=2018-05-03T11:59:00.423-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@5a30a5ec[count=1,name=FishEye / Crucible]}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@78ab1339[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@42e7e6a5[topEnvironments=[{projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=117997570, project=LPv72AppLayer, id=118063109, position=1, title=LPAPP_PPE_C, projectId=117997570, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=118063109, status=DEPLOYED}],showProjects=false,successfulCount=1,count=6,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@6c08b34a[count=6,name=Bamboo]}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@22a265a8[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@2b0881e[count=2,lastUpdated=2018-05-03T11:49:46.000-0700,lastUpdatedTimestamp=2018-05-03T11:49:46.000-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@20f32862[count=2,name=FishEye / Crucible]}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@18c4c5a1[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@297a7c34[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":2,"lastUpdated":"2018-05-03T12:11:02.797-0700","failedBuildCount":0,"successfulBuildCount":2,"unknownBuildCount":0},"byInstanceType":{"bamboo":{"count":2,"name":"Bamboo"}}},"review":{"overall":{"count":1,"lastUpdated":"2018-05-03T11:59:00.423-0700","stateCount":1,"state":"REVIEW","dueDate":null,"overDue":false,"completed":false},"byInstanceType":{"fecru":{"count":1,"name":"FishEye / Crucible"}}},"deployment-environment":{"overall":{"count":6,"lastUpdated":null,"topEnvironments":[{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=117997570","project":"LPv72AppLayer","id":118063109,"position":1,"title":"LPAPP_PPE_C","projectId":117997570,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=118063109","status":"DEPLOYED"}],"showProjects":false,"successfulCount":1},"byInstanceType":{"bamboo":{"count":6,"name":"Bamboo"}}},"repository":{"overall":{"count":2,"lastUpdated":"2018-05-03T11:49:46.000-0700"},"byInstanceType":{"fecru":{"count":2,"name":"FishEye / Crucible"}}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                    name: 'Not Prioritized',
                    id: '10100'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 0,
                aggregatetimeoriginalestimate: 25200,
                versions: [],
                issuelinks: [],
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=gvergara',
                    name: 'gvergara',
                    key: 'gvergara',
                    emailAddress: 'GVergara@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=gvergara&avatarId=12932',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=gvergara&avatarId=12932',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=gvergara&avatarId=12932',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=gvergara&avatarId=12932'
                    },
                    displayName: 'Glenn Vergara',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10032',
                    description: '',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/needinfo.png',
                    name: 'Failed QA',
                    id: '10032',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10054', value: 'Front End', id: '10054' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 6300,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=tmares',
                    name: 'tmares',
                    key: 'tmares',
                    emailAddress: 'tmares@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=tmares&avatarId=17830',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=tmares&avatarId=17830',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=tmares&avatarId=17830',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=tmares&avatarId=17830'
                    },
                    displayName: 'Tyler Marés',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '114095',
                        key: 'LP-18501',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/114095',
                        fields: {
                            summary: 'QA: Remove unused pages using numericOnly function',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10032',
                                description: '',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/needinfo.png',
                                name: 'Failed QA',
                                id: '10032',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                                name: 'Not Prioritized',
                                id: '10100'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@20fd818a[id=442,rapidViewId=160,state=CLOSED,name=Lamps++ Sprint 35,startDate=2018-04-24T17:54:00.054-07:00,endDate=2018-05-08T17:54:00.000-07:00,completeDate=2018-05-08T13:54:04.722-07:00,sequence=442,goal=]',
                    'com.atlassian.greenhopper.service.sprint.Sprint@21ab9ff4[id=443,rapidViewId=160,state=ACTIVE,name=Lamps++ Sprint 36,startDate=2018-05-08T08:51:50.345-07:00,endDate=2018-05-22T08:51:00.000-07:00,completeDate=<null>,sequence=443,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: { name: 'lampspp', self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=lampspp' },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=tmares',
                    name: 'tmares',
                    key: 'tmares',
                    emailAddress: 'tmares@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=tmares&avatarId=17830',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=tmares&avatarId=17830',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=tmares&avatarId=17830',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=tmares&avatarId=17830'
                    },
                    displayName: 'Tyler Marés',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08spj:',
                customfield_10682: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=NKhanewale',
                        name: 'NKhanewale',
                        key: 'nkhanewale',
                        emailAddress: 'NKhanewale@lampsplus.com',
                        avatarUrls: {
                            '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                            '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                            '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                            '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                        },
                        displayName: 'Nisarga Khanewale',
                        active: true,
                        timeZone: 'America/Los_Angeles'
                    }
                ],
                customfield_12980: null,
                aggregateprogress: { progress: 13500, total: 19800, percent: 68 },
                progress: { progress: 9000, total: 9000, percent: 100 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18468/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                    id: '3',
                    description: 'A task that needs to be done.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                    name: 'Task',
                    subtask: false,
                    avatarId: 14148
                },
                customfield_11080: null,
                timespent: 9000,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=tmares',
                    name: 'tmares',
                    key: 'tmares',
                    emailAddress: 'tmares@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=tmares&avatarId=17830',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=tmares&avatarId=17830',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=tmares&avatarId=17830',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=tmares&avatarId=17830'
                    },
                    displayName: 'Tyler Marés',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 13500,
                customfield_11882: 1,
                resolutiondate: null,
                workratio: 62,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18468/watchers', watchCount: 3, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-05-02T11:16:16.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-10T03:53:51.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 14400,
                description:
                    'h1. Requirements\r\n\r\nRemove unused pages using the numericOnly function (originally requirement 2 of LP-12560)\r\n\r\nConfirm if these files (and any corresponding unused assets) can be safely deleted.\r\n # */js/z-mags-quick-look.js***\r\n # */stores/schedule-an-appointment.aspx* - Doesn\'t seem to be used on the site except in email template located at \\Source\\Libraries\\LampsPlus\\Commerce.Resources\\Stores\\2\\52\\Templates\\Email\\OrderConfirmationKiosk.htm. But visiting that page throws a 500 error. For example: [https://www.lampsplus.com/stores/schedule-an-appointment.aspx?sn=12]\r\n # */stores/StoreLocationList.ascx*\r\n # */stores/StoreLocationSearch.ascx*\r\n\r\nh2. Testing Tips\r\n\r\nCheck the following pages and make sure the input field numeric only restriction still works as before. There should be no related Javascript error on the page.\r\n # *Build Your Own Ceiling Fan* - At the last step where there is Add To Cart button, the Qty field has numeric only input restriction.\r\n # *Create New SKU* (aka Add SKU On The Fly - CSR only) - The Qty field has numeric only input restriction.\r\n # *Stores Results Page* - Zip Code fields at the top and bottom have numeric only input restriction.\r\nSample pages: [https://www.lampsplus.com/stores/arizona/] and [https://www.lampsplus.com/stores/91311/]\r\n# Store Search\r\n# Catalog\r\n\r\n ',
                summary: 'Remove unused pages using numericOnly function',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113923',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113923',
            key: 'LP-18453',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@787a37aa[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3fbc009c[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@69e843b5[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2751a8fd[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@ebf1cda[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@51585571[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@7a065104[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@503a08f9[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@261597e8[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@35f5bd86[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@7d33444d[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7dcef6d2[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@77ee9454[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '113649',
                    key: 'LP-18324',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113649',
                    fields: {
                        summary: 'Issue Related to Limited Quantity Items on Wish List',
                        status: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10042',
                            description: 'Evaluation completed and requirements are approved by product team',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                            name: 'Evaluated',
                            id: '10042',
                            statusCategory: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                id: 4,
                                key: 'indeterminate',
                                colorName: 'yellow',
                                name: 'In Progress'
                            }
                        },
                        priority: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                            name: 'High Priority',
                            id: '10102'
                        },
                        issuetype: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/1',
                            id: '1',
                            description: 'A problem which impairs or prevents the functions of the product.',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14133&avatarType=issuetype',
                            name: 'Bug',
                            subtask: false,
                            avatarId: 14133
                        }
                    }
                },
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 3600,
                aggregatetimeoriginalestimate: 3600,
                versions: [],
                issuelinks: [],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10009',
                    description: 'Assigned',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'Assigned',
                    id: '10009',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10271', value: 'QA', id: '10271' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 3600,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=evardigonen',
                    name: 'evardigonen',
                    key: 'evardigonen',
                    emailAddress: 'evardigonen@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=evardigonen&avatarId=17332',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=evardigonen&avatarId=17332',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=evardigonen&avatarId=17332',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=evardigonen&avatarId=17332'
                    },
                    displayName: 'Eilat Vardi-Gonen',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@21ab9ff4[id=443,rapidViewId=160,state=ACTIVE,name=Lamps++ Sprint 36,startDate=2018-05-08T08:51:50.345-07:00,endDate=2018-05-22T08:51:00.000-07:00,completeDate=<null>,sequence=443,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=evardigonen',
                    name: 'evardigonen',
                    key: 'evardigonen',
                    emailAddress: 'evardigonen@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=evardigonen&avatarId=17332',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=evardigonen&avatarId=17332',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=evardigonen&avatarId=17332',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=evardigonen&avatarId=17332'
                    },
                    displayName: 'Eilat Vardi-Gonen',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08sjr:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 3600, percent: 0 },
                progress: { progress: 0, total: 3600, percent: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18453/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                    id: '5',
                    description: 'The sub-task of the issue',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                    name: 'Sub-task',
                    subtask: true,
                    avatarId: 14146
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=evardigonen',
                    name: 'evardigonen',
                    key: 'evardigonen',
                    emailAddress: 'evardigonen@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=evardigonen&avatarId=17332',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=evardigonen&avatarId=17332',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=evardigonen&avatarId=17332',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=evardigonen&avatarId=17332'
                    },
                    displayName: 'Eilat Vardi-Gonen',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 0,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18453/watchers', watchCount: 1, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-05-01T16:16:24.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-08T15:03:18.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 3600,
                description: null,
                summary: 'QA: Issue Related to Limited Quantity Items on Wish List',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113875',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113875',
            key: 'LP-18431',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@4821ce79[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1aab3775[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@427af1a2[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2f81851c[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@6995d493[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2a46564b[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@3f245540[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1cae9edd[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@5b58e097[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@433401b9[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@5ea7d2ca[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3697f7b5[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@2ad7f5a8[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '113748',
                    key: 'LP-18377',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113748',
                    fields: {
                        summary: 'Record UnBxd search autocomplete performance',
                        status: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10042',
                            description: 'Evaluation completed and requirements are approved by product team',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                            name: 'Evaluated',
                            id: '10042',
                            statusCategory: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                id: 4,
                                key: 'indeterminate',
                                colorName: 'yellow',
                                name: 'In Progress'
                            }
                        },
                        priority: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                            name: 'High Priority',
                            id: '10102'
                        },
                        issuetype: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                            id: '3',
                            description: 'A task that needs to be done.',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                            name: 'Task',
                            subtask: false,
                            avatarId: 14148
                        }
                    }
                },
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: null,
                aggregatetimeoriginalestimate: null,
                versions: [],
                issuelinks: [],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                    description: 'The issue is open and ready for the assignee to start work on it.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                    name: 'Open',
                    id: '1',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                        id: 2,
                        key: 'new',
                        colorName: 'blue-gray',
                        name: 'To Do'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10271', value: 'QA', id: '10271' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: null,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=HPastras',
                    name: 'HPastras',
                    key: 'hpastras',
                    emailAddress: 'HPastras@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15150',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15150',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15150',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15150'
                    },
                    displayName: 'Helen Pastras',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: null,
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=HPastras',
                    name: 'HPastras',
                    key: 'hpastras',
                    emailAddress: 'HPastras@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15150',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15150',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15150',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15150'
                    },
                    displayName: 'Helen Pastras',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08s93:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 0 },
                progress: { progress: 0, total: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18431/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                    id: '5',
                    description: 'The sub-task of the issue',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                    name: 'Sub-task',
                    subtask: true,
                    avatarId: 14146
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=HPastras',
                    name: 'HPastras',
                    key: 'hpastras',
                    emailAddress: 'HPastras@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15150',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15150',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15150',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15150'
                    },
                    displayName: 'Helen Pastras',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: -1,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18431/watchers', watchCount: 1, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-05-01T08:59:46.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T08:57:14.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: null,
                description: null,
                summary: 'QA: Record UnBxd search autocomplete performance',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113752',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113752',
            key: 'LP-18379',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@1375dc4[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4edd0ac8[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@76955a2a[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@658ff5b7[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@5e6d4dbf[failedBuildCount=0,successfulBuildCount=2,unknownBuildCount=0,count=2,lastUpdated=2018-05-03T15:35:58.430-0700,lastUpdatedTimestamp=2018-05-03T15:35:58.430-07:00],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@16729176[count=2,name=Bamboo]}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2458d6d8[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@3ee0bda9[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@a541f7f[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@76d7f6d2[topEnvironments=[{projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621, project=LPv71, id=110100518, position=1, title=LP_PPE_B, projectId=110788621, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621, project=LPv71, id=110100519, position=2, title=LP_PROD_B, projectId=110788621, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100519, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622, project=LPv71AppLayer, id=110100522, position=2, title=LPAPP_PROD_B, projectId=110788622, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100522, status=DEPLOYED}],showProjects=true,successfulCount=4,count=6,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@323933da[count=6,name=Bamboo]}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2f6dea01[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@568a774[count=6,lastUpdated=2018-05-03T15:24:21.000-0700,lastUpdatedTimestamp=2018-05-03T15:24:21.000-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@34766b7a[count=6,name=FishEye / Crucible]}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@515403[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@402c8bea[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":2,"lastUpdated":"2018-05-03T15:35:58.430-0700","failedBuildCount":0,"successfulBuildCount":2,"unknownBuildCount":0},"byInstanceType":{"bamboo":{"count":2,"name":"Bamboo"}}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":6,"lastUpdated":null,"topEnvironments":[{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621","project":"LPv71","id":110100518,"position":1,"title":"LP_PPE_B","projectId":110788621,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621","project":"LPv71","id":110100519,"position":2,"title":"LP_PROD_B","projectId":110788621,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100519","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622","project":"LPv71AppLayer","id":110100522,"position":2,"title":"LPAPP_PROD_B","projectId":110788622,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100522","status":"DEPLOYED"}],"showProjects":true,"successfulCount":4},"byInstanceType":{"bamboo":{"count":6,"name":"Bamboo"}}},"repository":{"overall":{"count":6,"lastUpdated":"2018-05-03T15:24:21.000-0700"},"byInstanceType":{"fecru":{"count":6,"name":"FishEye / Crucible"}}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '113660',
                    key: 'LP-18328',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113660',
                    fields: {
                        summary: 'Add \'Optional Controls\' option to Ceiling Fans PDP',
                        status: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10040',
                            description: 'The task is under evaluation by product team',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                            name: 'Evaluating',
                            id: '10040',
                            statusCategory: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                id: 4,
                                key: 'indeterminate',
                                colorName: 'yellow',
                                name: 'In Progress'
                            }
                        },
                        priority: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                            name: 'High Priority',
                            id: '10102'
                        },
                        issuetype: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                            id: '3',
                            description: 'A task that needs to be done.',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                            name: 'Task',
                            subtask: false,
                            avatarId: 14148
                        }
                    }
                },
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 0,
                aggregatetimeoriginalestimate: 64800,
                versions: [],
                issuelinks: [],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                    description: 'The issue is open and ready for the assignee to start work on it.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                    name: 'Open',
                    id: '1',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                        id: 2,
                        key: 'new',
                        colorName: 'blue-gray',
                        name: 'To Do'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10272', value: 'DBA', id: '10272' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 0,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jreyes',
                    name: 'jreyes',
                    key: 'jreyes',
                    emailAddress: 'jreyes@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15150',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15150',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15150',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15150'
                    },
                    displayName: 'James Reyes',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@57bf7114[id=448,rapidViewId=158,state=FUTURE,name=Shredders Sprint 6,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=448,goal=<null>]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jreyes',
                    name: 'jreyes',
                    key: 'jreyes',
                    emailAddress: 'jreyes@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15150',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15150',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15150',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15150'
                    },
                    displayName: 'James Reyes',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08rif:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 32400, total: 32400, percent: 100 },
                progress: { progress: 32400, total: 32400, percent: 100 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18379/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                    id: '5',
                    description: 'The sub-task of the issue',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                    name: 'Sub-task',
                    subtask: true,
                    avatarId: 14146
                },
                customfield_11080: null,
                timespent: 32400,
                customfield_11480: null,
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 32400,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 50,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18379/watchers', watchCount: 1, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-27T12:26:19.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T07:24:46.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 64800,
                description: null,
                summary: 'DB: Add \'Optional Controls\' option to Ceiling Fans PDP',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113751',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113751',
            key: 'LP-18378',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@692e267d[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@19fbf7f6[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@1af9c537[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5f72b120[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@4777697d[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1756222[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@55f1cf46[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1fc08f69[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@6300216d[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@49ce3b5d[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@129e56dd[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@9be2820[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@6bd77b33[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '113660',
                    key: 'LP-18328',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113660',
                    fields: {
                        summary: 'Add \'Optional Controls\' option to Ceiling Fans PDP',
                        status: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10040',
                            description: 'The task is under evaluation by product team',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                            name: 'Evaluating',
                            id: '10040',
                            statusCategory: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                id: 4,
                                key: 'indeterminate',
                                colorName: 'yellow',
                                name: 'In Progress'
                            }
                        },
                        priority: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                            name: 'High Priority',
                            id: '10102'
                        },
                        issuetype: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                            id: '3',
                            description: 'A task that needs to be done.',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                            name: 'Task',
                            subtask: false,
                            avatarId: 14148
                        }
                    }
                },
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 50400,
                aggregatetimeoriginalestimate: 57600,
                versions: [],
                issuelinks: [],
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=gdjaniants',
                    name: 'gdjaniants',
                    key: 'gdjaniants',
                    emailAddress: 'gdjaniants@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10141',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10141',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10141',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10141'
                    },
                    displayName: 'George Djaniants',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10043',
                    description: 'Need more clarification of requirements from product team',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'Clarification Needed',
                    id: '10043',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10054', value: 'Front End', id: '10054' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 50400,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jreyes',
                    name: 'jreyes',
                    key: 'jreyes',
                    emailAddress: 'jreyes@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15150',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15150',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15150',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15150'
                    },
                    displayName: 'James Reyes',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@57bf7114[id=448,rapidViewId=158,state=FUTURE,name=Shredders Sprint 6,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=448,goal=<null>]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jreyes',
                    name: 'jreyes',
                    key: 'jreyes',
                    emailAddress: 'jreyes@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15150',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15150',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15150',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15150'
                    },
                    displayName: 'James Reyes',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08ri7:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 7200, total: 57600, percent: 12 },
                progress: { progress: 7200, total: 57600, percent: 12 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18378/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                    id: '5',
                    description: 'The sub-task of the issue',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                    name: 'Sub-task',
                    subtask: true,
                    avatarId: 14146
                },
                customfield_11080: null,
                timespent: 7200,
                customfield_11480: null,
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 7200,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 12,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18378/watchers', watchCount: 3, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-27T12:23:09.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T11:02:34.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 57600,
                description: 'Mobile and Desktop. See parent task for mockups.',
                summary: 'FED: Add \'Optional Controls\' option to Ceiling Fans PDP',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113748',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113748',
            key: 'LP-18377',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@7d398aa7[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6ec5b61d[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@1b3d9e9b[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@63835e6[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@37e5eb34[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7453d68b[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@3ed57dc[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@44bdc542[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@5c992aaa[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3694483c[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@5faeba85[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7513e3e7[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@604a4b95[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: null,
                aggregatetimeoriginalestimate: null,
                versions: [],
                issuelinks: [],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10042',
                    description: 'Evaluation completed and requirements are approved by product team',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'Evaluated',
                    id: '10042',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10054', value: 'Front End', id: '10054' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: null,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=dshats',
                    name: 'dshats',
                    key: 'dshats',
                    emailAddress: 'dshats@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=dshats&avatarId=14436',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=dshats&avatarId=14436',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=dshats&avatarId=14436',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=dshats&avatarId=14436'
                    },
                    displayName: 'Dmitry Shats',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '113875',
                        key: 'LP-18431',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113875',
                        fields: {
                            summary: 'QA: Record UnBxd search autocomplete performance',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                                description: 'The issue is open and ready for the assignee to start work on it.',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                                name: 'Open',
                                id: '1',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                                    id: 2,
                                    key: 'new',
                                    colorName: 'blue-gray',
                                    name: 'To Do'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: null,
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=dshats',
                    name: 'dshats',
                    key: 'dshats',
                    emailAddress: 'dshats@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=dshats&avatarId=14436',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=dshats&avatarId=14436',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=dshats&avatarId=14436',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=dshats&avatarId=14436'
                    },
                    displayName: 'Dmitry Shats',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|hztc1s:0q89203k',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 0 },
                progress: { progress: 0, total: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18377/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                    id: '3',
                    description: 'A task that needs to be done.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                    name: 'Task',
                    subtask: false,
                    avatarId: 14148
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=HPastras',
                    name: 'HPastras',
                    key: 'hpastras',
                    emailAddress: 'HPastras@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15150',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15150',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15150',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15150'
                    },
                    displayName: 'Helen Pastras',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: -1,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18377/watchers', watchCount: 1, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-27T11:15:15.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-07T16:55:51.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: null,
                description:
                    'h2. GOAL\r\n\r\nInternet Marketing completed a survey of our competitors autocomplete and a number of the larger companies that were doing product recommendations in their autocomplete (such as Home Depot, Wayfair) are no longer doing so.\r\n\r\nOur suspicion is that product recommendations are making the autocomplete take a longer time to load.\r\n\r\nThis is a research task to check whether the product recommendations impact the system performance. \r\nh2. REQUIREMENTS\r\n # Measure the response time for Unbxd *with* product recommendations\r\n ## Test the endpoints and show the time in ms.\r\n # Measure the response time for Unbxd *without* product recommendations\r\n ## Test the endpoints and show the time in ms.\r\n # We would like the test to be completed on Test Server. We will need to put this functionality behind a toggle, so it can be turned off at any time.\r\n # Test results should be displayed within Dev Console. We should not make it availiable for users. \r\n# Please notify PM upon completion.\r\n\r\nh2. NOTES:\r\n# We would like to have this task completed in a beginning of a dev sprint, so we would have some time to remove the code if no longer research will be needed. \r\n # Logging is not needed yet\r\n # No need for reporting to Google\r\n # There is no need for a build, not any permanent solutions yet',
                summary: 'Record UnBxd search autocomplete performance',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113737',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113737',
            key: 'LP-18370',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@527c3964[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@255e5661[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@44f74be1[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@575d1321[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@6459a7b7[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@33e31803[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@4db5f5dd[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@724e3351[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@5b8356b0[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@708b7ec3[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@12f27612[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@11a51ba6[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@50d2e9f4[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '113660',
                    key: 'LP-18328',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113660',
                    fields: {
                        summary: 'Add \'Optional Controls\' option to Ceiling Fans PDP',
                        status: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10040',
                            description: 'The task is under evaluation by product team',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                            name: 'Evaluating',
                            id: '10040',
                            statusCategory: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                id: 4,
                                key: 'indeterminate',
                                colorName: 'yellow',
                                name: 'In Progress'
                            }
                        },
                        priority: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                            name: 'High Priority',
                            id: '10102'
                        },
                        issuetype: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                            id: '3',
                            description: 'A task that needs to be done.',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                            name: 'Task',
                            subtask: false,
                            avatarId: 14148
                        }
                    }
                },
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 43200,
                aggregatetimeoriginalestimate: 43200,
                versions: [],
                issuelinks: [],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10009',
                    description: 'Assigned',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'Assigned',
                    id: '10009',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10271', value: 'QA', id: '10271' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 43200,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jkrithivasan',
                    name: 'jkrithivasan',
                    key: 'jkrithivasan',
                    emailAddress: 'JKrithivasan@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Jayasri Krithivasan',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@57bf7114[id=448,rapidViewId=158,state=FUTURE,name=Shredders Sprint 6,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=448,goal=<null>]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: { name: 'The Shredders', self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=The+Shredders' },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jkrithivasan',
                    name: 'jkrithivasan',
                    key: 'jkrithivasan',
                    emailAddress: 'JKrithivasan@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Jayasri Krithivasan',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08rf3:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 43200, percent: 0 },
                progress: { progress: 0, total: 43200, percent: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18370/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                    id: '5',
                    description: 'The sub-task of the issue',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                    name: 'Sub-task',
                    subtask: true,
                    avatarId: 14146
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jkrithivasan',
                    name: 'jkrithivasan',
                    key: 'jkrithivasan',
                    emailAddress: 'JKrithivasan@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Jayasri Krithivasan',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 0,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18370/watchers', watchCount: 1, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-27T08:47:59.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T07:22:58.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 43200,
                description: null,
                summary: 'QA: Add \'Optional Controls\' option to Ceiling Fans PDP',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113660',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113660',
            key: 'LP-18328',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@6fd646e1[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@49e255[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@b37584[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@77f4c29[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@5a43e369[failedBuildCount=0,successfulBuildCount=2,unknownBuildCount=0,count=2,lastUpdated=2018-05-03T11:20:59.243-0700,lastUpdatedTimestamp=2018-05-03T11:20:59.243-07:00],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@3878e98[count=2,name=Bamboo]}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@e53a155[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@73b0aab2[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@362d5706[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@1c19c6e4[topEnvironments=[{projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621, project=LPv71, id=110100518, position=1, title=LP_PPE_B, projectId=110788621, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621, project=LPv71, id=110100519, position=2, title=LP_PROD_B, projectId=110788621, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100519, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622, project=LPv71AppLayer, id=110100522, position=2, title=LPAPP_PROD_B, projectId=110788622, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100522, status=DEPLOYED}],showProjects=true,successfulCount=4,count=6,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@5e9bde08[count=6,name=Bamboo]}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@79404b59[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@2509a610[count=2,lastUpdated=2018-05-03T11:13:16.000-0700,lastUpdatedTimestamp=2018-05-03T11:13:16.000-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@3e8434d9[count=2,name=FishEye / Crucible]}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@649cc33b[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@1f7d5672[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":2,"lastUpdated":"2018-05-03T11:20:59.243-0700","failedBuildCount":0,"successfulBuildCount":2,"unknownBuildCount":0},"byInstanceType":{"bamboo":{"count":2,"name":"Bamboo"}}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":6,"lastUpdated":null,"topEnvironments":[{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621","project":"LPv71","id":110100518,"position":1,"title":"LP_PPE_B","projectId":110788621,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621","project":"LPv71","id":110100519,"position":2,"title":"LP_PROD_B","projectId":110788621,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100519","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622","project":"LPv71AppLayer","id":110100522,"position":2,"title":"LPAPP_PROD_B","projectId":110788622,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100522","status":"DEPLOYED"}],"showProjects":true,"successfulCount":4},"byInstanceType":{"bamboo":{"count":6,"name":"Bamboo"}}},"repository":{"overall":{"count":2,"lastUpdated":"2018-05-03T11:13:16.000-0700"},"byInstanceType":{"fecru":{"count":2,"name":"FishEye / Crucible"}}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10685', value: 'Design', id: '10685' },
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10070', value: 'Impediment', id: '10070' }],
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: ['Key_Task'],
                customfield_10587: null,
                timeestimate: 0,
                aggregatetimeoriginalestimate: 338400,
                versions: [],
                issuelinks: [
                    {
                        id: '89580',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/89580',
                        type: {
                            id: '10001',
                            name: 'Related',
                            inward: 'is related by...',
                            outward: 'is related to...',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10001'
                        },
                        outwardIssue: {
                            id: '101398',
                            key: 'LP-13752',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/101398',
                            fields: {
                                summary: 'Add Control Options to Ceiling Fans PDP',
                                status: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10001',
                                    description: 'The issue has been cancelled.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/trash.png',
                                    name: 'Cancelled',
                                    id: '10001',
                                    statusCategory: {
                                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/3',
                                        id: 3,
                                        key: 'done',
                                        colorName: 'green',
                                        name: 'Done'
                                    }
                                },
                                priority: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                    name: 'High Priority',
                                    id: '10102'
                                },
                                issuetype: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                                    id: '3',
                                    description: 'A task that needs to be done.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                                    name: 'Task',
                                    subtask: false,
                                    avatarId: 14148
                                }
                            }
                        }
                    },
                    {
                        id: '89674',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/89674',
                        type: {
                            id: '10001',
                            name: 'Related',
                            inward: 'is related by...',
                            outward: 'is related to...',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10001'
                        },
                        outwardIssue: {
                            id: '101935',
                            key: 'DBADMIN-1497',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/101935',
                            fields: {
                                summary: 'Document: Custom Ceiling Fans Code Base and Business Logic',
                                status: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/6',
                                    description: 'The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/closed.png',
                                    name: 'Closed',
                                    id: '6',
                                    statusCategory: {
                                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/3',
                                        id: 3,
                                        key: 'done',
                                        colorName: 'green',
                                        name: 'Done'
                                    }
                                },
                                priority: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                    name: 'High Priority',
                                    id: '10102'
                                },
                                issuetype: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/10300',
                                    id: '10300',
                                    description: 'Issue type: Docuementation\r\nRequested by/for AS400 projects.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14130&avatarType=issuetype',
                                    name: 'Documentation',
                                    subtask: false,
                                    avatarId: 14130
                                }
                            }
                        }
                    }
                ],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10040',
                    description: 'The task is under evaluation by product team',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'Evaluating',
                    id: '10040',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10055', value: 'Back End', id: '10055' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 144000,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jkrithivasan',
                    name: 'jkrithivasan',
                    key: 'jkrithivasan',
                    emailAddress: 'JKrithivasan@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Jayasri Krithivasan',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '113737',
                        key: 'LP-18370',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113737',
                        fields: {
                            summary: 'QA: Add \'Optional Controls\' option to Ceiling Fans PDP',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10009',
                                description: 'Assigned',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                                name: 'Assigned',
                                id: '10009',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    },
                    {
                        id: '113751',
                        key: 'LP-18378',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113751',
                        fields: {
                            summary: 'FED: Add \'Optional Controls\' option to Ceiling Fans PDP',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10043',
                                description: 'Need more clarification of requirements from product team',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                                name: 'Clarification Needed',
                                id: '10043',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    },
                    {
                        id: '113752',
                        key: 'LP-18379',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113752',
                        fields: {
                            summary: 'DB: Add \'Optional Controls\' option to Ceiling Fans PDP',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                                description: 'The issue is open and ready for the assignee to start work on it.',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                                name: 'Open',
                                id: '1',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                                    id: 2,
                                    key: 'new',
                                    colorName: 'blue-gray',
                                    name: 'To Do'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    },
                    {
                        id: '114019',
                        key: 'LP-18479',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/114019',
                        fields: {
                            summary: 'DB: Data Migration to Support - Add \'Optional Controls\' option to Ceiling Fans PDP',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10040',
                                description: 'The task is under evaluation by product team',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                                name: 'Evaluating',
                                id: '10040',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    },
                    {
                        id: '114342',
                        key: 'LP-18585',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/114342',
                        fields: {
                            summary: 'PM - Add \'Optional Controls\' option to Ceiling Fans PDP',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10009',
                                description: 'Assigned',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                                name: 'Assigned',
                                id: '10009',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                                name: 'Not Prioritized',
                                id: '10100'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@57bf7114[id=448,rapidViewId=158,state=FUTURE,name=Shredders Sprint 6,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=448,goal=<null>]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: { name: 'The Shredders', self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=The+Shredders' },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jkrithivasan',
                    name: 'jkrithivasan',
                    key: 'jkrithivasan',
                    emailAddress: 'JKrithivasan@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Jayasri Krithivasan',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08jbg:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 79200, total: 223200, percent: 35 },
                progress: { progress: 25200, total: 25200, percent: 100 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18328/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                    id: '3',
                    description: 'A task that needs to be done.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                    name: 'Task',
                    subtask: false,
                    avatarId: 14148
                },
                customfield_11080: null,
                timespent: 25200,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jkrithivasan',
                    name: 'jkrithivasan',
                    key: 'jkrithivasan',
                    emailAddress: 'JKrithivasan@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Jayasri Krithivasan',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 79200,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 23,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18328/watchers', watchCount: 3, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-26T15:05:06.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-09T13:36:43.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 108000,
                description:
                    'h2. Goal\r\n\r\nAdd Control Options to the product page so that non-DYO ceiling fans are no longer routed through the DYO process.\r\n Related Research Task: DBADMIN-1497\r\n Related Confluence Document: [https://confluence.lampsplus.com:8093/display/BED/BYOCF+-+Build+Your+Own+Ceiling+Fan+Logic]\r\nh2. Assumptions\r\n * Data migration will be done to support this feature. However, if new controls get added, corresponding records will be added to the table by running a SQL (LPATCH).\r\n\r\nh2. Requirements\r\n # For non-DYO fans that currently route through the DYO process for Controls, we would like to build out functionality in the product template:\r\n ** Place OPTIONAL CONTROL option in an accordion panel below the OPTIONAL EXTENSION DOWNRODS panel.\r\n ** Panel should only display when there are options available (other than the Included option) for the specific SKU being viewed.\r\n ** Optional Controls content\r\n *** Should display a scroller with the included control as the first option (if available)\r\n *** Should display No Optional Control as last option in the scroller after displaying available options\r\n *** Optional remotes should be select-able via radio-button\r\n **** Clicking the thumbnail image should also select/deselect the item\r\n *** "Included" link will display the image and information if any for the included remote and it will not display the price.\r\n *** "Details" links tooltip will display the image, basic control information (displayed in DYOCF today) along with the price in the tooptip.\r\n *** See attached mock-up [Desktop mockup is awaiting approval, attached here for reference.  Mobile view mock up to be added].  \r\n!control-options.jpg|thumbnail! \r\n ** Any functionality added in the mock-ups not specifically spelled out in this task, should be brought to the Product Manager\'s attention.\r\n # Create a toggle to remove CUSTOMIZE THIS FAN button as there is a plan to remove this button from Ceiling Fan PDP page in the future.\r\n\r\nh2. Notes\r\n * The Optional Controls mapping is currently in use by this functionality\r\n ** [https://www.lampsplus.com/custom-fan/buildyourownceilingfan.aspx]\r\n ** [https://www.lampsplus.com/custom-fan/]\r\n * The same mapping will be used for updating the PDPs\r\n\r\nh2. Implementation Details\r\n\r\nDetails to be provided by [~tfoster]\r\n * Create the database tables as listed below.\r\n||Database Name||Table Name||Field Details||Comments||\r\n|Products|tblVariants_Controls|1. ShortSKU varchar (30) \r\n 2. ControlSKU varchar(30)|This table will map the fan to its controls|\r\n|Products|tblVariants_ControlDetails|1. ControlSKU varchar (30) \r\n 2. Details varchar (500) \r\n 3. SortOrder int|This table will hold the additional details data and the order in which they should display on the product page|\r\n\r\nh2. Implementation Notes\r\n * Sellable flag is deprecated. Please do not use Sellable flag going forward and remove any references to it in the code relating to this task.\r\n\r\nh2. Testing Tips\r\n * Verity that this works in all website views.\r\n ** Desktop\r\n ** Mobile\r\n * Test all PDP templates, refer to this link for PDP templates: [https://confluence.lampsplus.com:8093/display/WDP/Site+Variations]\r\n * Test the following website modes/sessions:\r\n ** Global in Session\r\n ** Professional in Session\r\n ** Hospitality in Session\r\n ** Store in Session\r\n * Combo-Skus for testing\r\n ** 61928-62319\r\n ** 62319-68799\r\n ** 62103-62319\r\n ** 62319-68837\r\n ** 53875-54044\r\n ** 54044-H9410\r\n ** 84810-54044\r\n ** 54044-H9411\r\n\r\nh2. Examples\r\n * [http://www.lampsplus.com/products/52-inch-casa-optima-brushed-steel-and-crystal-ceiling-fan__86646-66116-v0172.html] - can really be customized\r\n * [http://www.lampsplus.com/products/52-inch-casa-vieja-revue-brushed-nickel-led-ceiling-fan__4g530.html] - no options mapped\r\n  ',
                summary: 'Add \'Optional Controls\' option to Ceiling Fans PDP',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113649',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113649',
            key: 'LP-18324',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@2a6effac[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@19f1203e[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@5f686c28[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@50745681[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@dba40bc[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1dda71e5[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@1cf575a[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@737dc9bc[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@2c9dd8cf[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6206d1e0[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@19083f7d[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4a535c9[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@463cce32[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 3600,
                aggregatetimeoriginalestimate: 7200,
                versions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24460',
                        id: '24460',
                        name: 'LPKitSku',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                issuelinks: [
                    {
                        id: '89559',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/89559',
                        type: {
                            id: '10001',
                            name: 'Related',
                            inward: 'is related by...',
                            outward: 'is related to...',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10001'
                        },
                        outwardIssue: {
                            id: '113237',
                            key: 'LP-18153',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113237',
                            fields: {
                                summary: 'Sort Page: Limited Quantity for Kit SKUs',
                                status: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10009',
                                    description: 'Assigned',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                                    name: 'Assigned',
                                    id: '10009',
                                    statusCategory: {
                                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                        id: 4,
                                        key: 'indeterminate',
                                        colorName: 'yellow',
                                        name: 'In Progress'
                                    }
                                },
                                priority: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                    name: 'High Priority',
                                    id: '10102'
                                },
                                issuetype: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                                    id: '3',
                                    description: 'A task that needs to be done.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                                    name: 'Task',
                                    subtask: false,
                                    avatarId: 14148
                                }
                            }
                        }
                    }
                ],
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=RDeshmukh',
                    name: 'RDeshmukh',
                    key: 'rdeshmukh',
                    emailAddress: 'RDeshmukh@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Rupali Deshmukh',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10042',
                    description: 'Evaluation completed and requirements are approved by product team',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'Evaluated',
                    id: '10042',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10055', value: 'Back End', id: '10055' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 7200,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=evardigonen',
                    name: 'evardigonen',
                    key: 'evardigonen',
                    emailAddress: 'evardigonen@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=evardigonen&avatarId=17332',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=evardigonen&avatarId=17332',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=evardigonen&avatarId=17332',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=evardigonen&avatarId=17332'
                    },
                    displayName: 'Eilat Vardi-Gonen',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '113923',
                        key: 'LP-18453',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113923',
                        fields: {
                            summary: 'QA: Issue Related to Limited Quantity Items on Wish List',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10009',
                                description: 'Assigned',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                                name: 'Assigned',
                                id: '10009',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@21ab9ff4[id=443,rapidViewId=160,state=ACTIVE,name=Lamps++ Sprint 36,startDate=2018-05-08T08:51:50.345-07:00,endDate=2018-05-22T08:51:00.000-07:00,completeDate=<null>,sequence=443,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=omats',
                    name: 'omats',
                    key: 'omats',
                    emailAddress: 'omats@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=omats&avatarId=13930',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=omats&avatarId=13930',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=omats&avatarId=13930',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=omats&avatarId=13930'
                    },
                    displayName: 'Oleg Mats',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|hztc1s:0q89203u',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 7200, percent: 0 },
                progress: { progress: 0, total: 3600, percent: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18324/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/1',
                    id: '1',
                    description: 'A problem which impairs or prevents the functions of the product.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14133&avatarType=issuetype',
                    name: 'Bug',
                    subtask: false,
                    avatarId: 14133
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=evardigonen',
                    name: 'evardigonen',
                    key: 'evardigonen',
                    emailAddress: 'evardigonen@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=evardigonen&avatarId=17332',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=evardigonen&avatarId=17332',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=evardigonen&avatarId=17332',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=evardigonen&avatarId=17332'
                    },
                    displayName: 'Eilat Vardi-Gonen',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 0,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18324/watchers', watchCount: 1, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-26T13:33:08.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-08T15:07:06.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 3600,
                description:
                    'h2. Environments\r\n * Production (LPv70)\r\n\r\nh2. Steps to Reproduce\r\n # Navigate to a PDP for a Limited Quantity item\r\n ** For example, from [https://www.lampsplus.com/products/ds_daily-savings/]\r\n !PDP - Limited Quantity.png|thumbnail!\r\n # Take note of the Limited Quantity\r\n # Add any quantity to the Wish List\r\n # Updated the Quantity field on the Wish List to be more than the Limited Quantity\r\n # Select the "Add Selected to the Cart" button\r\n\r\nh2. Actual Result\r\n# A pop-up opens with the following error message:\r\n{quote}"Error\r\nSorry! There is an error in quantity."{quote}\r\n # The Limited Quantity is added to the Cart\r\n # User isn\'t notified that the available quantity was added to the cart\r\n!Error.png|thumbnail!\r\n\r\nh2. Expected Result\r\n# A pop-up opens with the following updated error message:\r\n{quote}"Please note:\r\nWe\'ve added as many items as were available to your cart.  If no inventory was available, none was added to the cart.  Please check your cart for details."\r\n{quote}\r\n # The Limited Quantity is added to the Cart',
                summary: 'Issue Related to Limited Quantity Items on Wish List',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113633',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113633',
            key: 'LP-18314',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@43423150[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1be8cc52[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@2dd9d4e6[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3f4b589a[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@6dd13692[failedBuildCount=0,successfulBuildCount=2,unknownBuildCount=0,count=2,lastUpdated=2018-05-09T13:42:45.427-0700,lastUpdatedTimestamp=2018-05-09T13:42:45.427-07:00],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@1c64c5fa[count=2,name=Bamboo]}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@531b6134[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@36717c45[stateCount=1,state=REVIEW,dueDate=<null>,overDue=false,count=1,lastUpdated=2018-05-03T14:34:07.688-0700,lastUpdatedTimestamp=2018-05-03T14:34:07.688-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@76dc3f6c[count=1,name=FishEye / Crucible]}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5518111a[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@5d02c84c[topEnvironments=[{projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=101318658, project=LPHotFix, id=101449733, position=1, title=LP_DEV_H, projectId=101318658, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=101449733, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=104136705, project=LPHotFixAppLayer, id=104202242, position=1, title=LPAPP_DEV_H, projectId=104136705, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=104202242, status=DEPLOYED}],showProjects=true,successfulCount=2,count=4,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@109ec205[count=4,name=Bamboo]}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3746e406[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@2243b335[count=12,lastUpdated=2018-05-09T13:34:56.000-0700,lastUpdatedTimestamp=2018-05-09T13:34:56.000-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@36c188d7[count=12,name=FishEye / Crucible]}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@69c3b5a1[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@69a50a4b[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":2,"lastUpdated":"2018-05-09T13:42:45.427-0700","failedBuildCount":0,"successfulBuildCount":2,"unknownBuildCount":0},"byInstanceType":{"bamboo":{"count":2,"name":"Bamboo"}}},"review":{"overall":{"count":1,"lastUpdated":"2018-05-03T14:34:07.688-0700","stateCount":1,"state":"REVIEW","dueDate":null,"overDue":false,"completed":false},"byInstanceType":{"fecru":{"count":1,"name":"FishEye / Crucible"}}},"deployment-environment":{"overall":{"count":4,"lastUpdated":null,"topEnvironments":[{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=101318658","project":"LPHotFix","id":101449733,"position":1,"title":"LP_DEV_H","projectId":101318658,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=101449733","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=104136705","project":"LPHotFixAppLayer","id":104202242,"position":1,"title":"LPAPP_DEV_H","projectId":104136705,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=104202242","status":"DEPLOYED"}],"showProjects":true,"successfulCount":2},"byInstanceType":{"bamboo":{"count":4,"name":"Bamboo"}}},"repository":{"overall":{"count":12,"lastUpdated":"2018-05-09T13:34:56.000-0700"},"byInstanceType":{"fecru":{"count":12,"name":"FishEye / Crucible"}}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10691', value: 'Optimization', id: '10691' },
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'false',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: ['Google360.2'],
                customfield_10587: null,
                timeestimate: 0,
                aggregatetimeoriginalestimate: 72000,
                versions: [],
                issuelinks: [
                    {
                        id: '89540',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/89540',
                        type: {
                            id: '10001',
                            name: 'Related',
                            inward: 'is related by...',
                            outward: 'is related to...',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10001'
                        },
                        inwardIssue: {
                            id: '98989',
                            key: 'TEAL-162',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/98989',
                            fields: {
                                summary: 'Add Google Analytics to Interactions with YouTube Videos on the PDP',
                                status: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10026',
                                    description: 'Used to be named "Deployment - Int"',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                                    name: 'Code Complete',
                                    id: '10026',
                                    statusCategory: {
                                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                        id: 4,
                                        key: 'indeterminate',
                                        colorName: 'yellow',
                                        name: 'In Progress'
                                    }
                                },
                                priority: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                    name: 'High Priority',
                                    id: '10102'
                                },
                                issuetype: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                                    id: '3',
                                    description: 'A task that needs to be done.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                                    name: 'Task',
                                    subtask: false,
                                    avatarId: 14148
                                }
                            }
                        }
                    }
                ],
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=kminevich',
                    name: 'kminevich',
                    key: 'kminevich',
                    emailAddress: 'KMinevich@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=kminevich&avatarId=17532',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=kminevich&avatarId=17532',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=kminevich&avatarId=17532',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=kminevich&avatarId=17532'
                    },
                    displayName: 'Konstantin Minevich',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10000',
                    description: 'Waiting for information from other department or another issue has been given higher priority',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/needinfo.png',
                    name: 'On Hold',
                    id: '10000',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/component/13734', id: '13734', name: 'Pixel' }],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: null,
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 0,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=bblunt',
                    name: 'bblunt',
                    key: 'blunt',
                    emailAddress: 'BBlunt@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Ben Blunt',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '113634',
                        key: 'LP-18315',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113634',
                        fields: {
                            summary: 'QA: Desktop and Mobile: Add Google Analytics to Interactions with YouTube Videos on the PDP',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10032',
                                description: '',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/needinfo.png',
                                name: 'Failed QA',
                                id: '10032',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@42c1fc09[id=372,rapidViewId=59,state=FUTURE,name=Team Fixers Kanban,startDate=2017-10-24T14:20:44.729-07:00,endDate=2017-10-24T14:20:44.729-07:00,completeDate=<null>,sequence=372,goal=<null>]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: { name: 'Team Fixers', self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=Team+Fixers' },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=ksimondet',
                    name: 'ksimondet',
                    key: 'ksimondet',
                    emailAddress: 'ksimondet@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=ksimondet&avatarId=17931',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=ksimondet&avatarId=17931',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=ksimondet&avatarId=17931',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=ksimondet&avatarId=17931'
                    },
                    displayName: 'Katie Simondet',
                    active: false,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08qt3:',
                customfield_10682: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=MWafgaonkar',
                        name: 'MWafgaonkar',
                        key: 'mwafgaonkar',
                        emailAddress: 'MWafgaonkar@lampsplus.com',
                        avatarUrls: {
                            '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                            '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                            '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                            '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                        },
                        displayName: 'Meeta Wafgaonkar',
                        active: true,
                        timeZone: 'America/Los_Angeles'
                    },
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=SKulkarni',
                        name: 'SKulkarni',
                        key: 'skulkarni',
                        emailAddress: 'SKulkarni@lampsplus.com',
                        avatarUrls: {
                            '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15155',
                            '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15155',
                            '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15155',
                            '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15155'
                        },
                        displayName: 'Saurabh Kulkarni',
                        active: true,
                        timeZone: 'America/Los_Angeles'
                    }
                ],
                customfield_12980: null,
                aggregateprogress: { progress: 125340, total: 125340, percent: 100 },
                progress: { progress: 96540, total: 96540, percent: 100 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18314/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                    id: '3',
                    description: 'A task that needs to be done.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                    name: 'Task',
                    subtask: false,
                    avatarId: 14148
                },
                customfield_11080: null,
                timespent: 96540,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=bblunt',
                    name: 'bblunt',
                    key: 'blunt',
                    emailAddress: 'BBlunt@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Ben Blunt',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 125340,
                customfield_11882: 6,
                resolutiondate: null,
                workratio: 167,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18314/watchers', watchCount: 4, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-26T11:24:04.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-09T14:00:00.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 57600,
                description:
                    '{panel}\r\nThe requirements below are the end goal, however, this requires both this task and TEAL-162. This task will provide all of the data necessary for Tealium. TEAL-162 will handle the tracking with Google Analytics.\r\n{panel}\r\nh2. Goal\r\n\r\nAnalytics will be applied to all interactions with YouTube videos on the PDP (desktop and mobile) and the image preview modal (desktop only) so that user interaction/engagement with video can be tracked and analyzed.\r\nh2. Requirements\r\n # Add Google event tracking to all interaction with YouTube videos on the PDP when a user performs one of the actions below:\r\n||Mobile/Desktop||Trigger||Value Description||Category||Action||Label||\r\n|Desktop|User clicks Play button on a YouTube video in the image preview modal|Current duration complete in video when play button is pressed|Video|Play|<YouTube_VideoID>|\r\n|Mobile|User taps Play button on a YouTube video on the PDP|Current duration complete in video when play button is pressed|Video|Play|<YouTube_VideoID>|\r\n|Desktop|User clicks Pause button on a YouTube video in the image preview modal|Current duration complete in video when pause button is pressed|Video|Pause|<YouTube_VideoID>|\r\n|Mobile|User taps Pause button on a YouTube video on the PDP|Current duration complete in video when pause button is pressed|Video|Pause|<YouTube_VideoID>|\r\n|Desktop|User clicks the close button or user navigates away from video in the image preview modal|Current duration complete in video when the video is closed or navigated away from|Video|Stop|<YouTube_VideoID>|\r\n|Mobile|User taps the close button or user navigates away from video on the PDP|Current duration complete in video when the video is closed or navigated away from|Video|Stop|<YouTube_VideoID>|\r\n|Both|Video time elapsed = 15 seconds|When the user reaches 15 seconds of viewing|Video|Play-15|<YouTube_VideoID>|\r\n|Both|Video time elapsed = 30 seconds|When the user reaches 30 seconds of viewing|Video|Play-30|<YouTube_VideoID>|\r\n|Both|Video time elapsed = full length of video|When the duration of the video is viewed. (not when the video is closed)|Video|Play-All|<YouTube_VideoID>|\r\n|Desktop|User clicks on a thumbnail on the PDP, in the image preview modal, or in the related videos section|When the user clicks on a video thumbnail|Video|Thumbnail-Click-<page location (thumbnail, preview-modal, related) >|<YouTube_VideoID>|\r\n|Mobile|User taps on a thumbnail on the PDP or in the related videos section|When the user taps on a video thumbnail|Video|Thumbnail-Click-<page location (thumbnail, preview-modal, related) >|<YouTube_VideoID>|\r\n\r\nh2. Environments\r\n * LP: Hotfix\r\n * Tealium: QA\r\n\r\nh2. Notes\r\n * Analytics should be applied for desktop and mobile\r\n * Google documentation can be found here: [https://developers.google.com/analytics/devguides/collection/analyticsjs/events]\r\n * YouTube events documentation can be found here: [https://developers.google.com/youtube/iframe_api_reference#Events]\r\n\r\nh2. Testing Tips\r\n # On LP.com, open Dev tools Network tab and filter for "ua-". You will be looking for event_category, event_action, and event_label, event_value (where applicable)\r\n # Use Tealium QA environment\r\n # Go through the requirements and make sure an event fires for each\r\n # Verify that Youtube functionality is still WAD\r\n # Verify on *desktop* and *mobile*\r\n\r\n*NOTE:* if you find an issue that already exists in production please label it as *production*',
                summary: 'LP: Add Google Analytics to Interactions with YouTube Videos on the PDP',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: '2017-08-17',
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: '2017-08-18',
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113594',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113594',
            key: 'LP-18290',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@66e6ae7d[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@43ece36e[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@2aabc0cb[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@36f2e4bf[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@65b4315a[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@41e74911[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@353e747e[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1448b97a[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@50327448[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2be6009e[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@6dbd0c18[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3cefebbc[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@7f3c585d[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 14400,
                aggregatetimeoriginalestimate: 18000,
                versions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/23860',
                        id: '23860',
                        description: '',
                        name: '70',
                        archived: false,
                        released: true,
                        releaseDate: '2018-04-25'
                    }
                ],
                issuelinks: [],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10042',
                    description: 'Evaluation completed and requirements are approved by product team',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'Evaluated',
                    id: '10042',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10054', value: 'Front End', id: '10054' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 18000,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jsareen',
                    name: 'jsareen',
                    key: 'jsareen',
                    emailAddress: 'jsareen@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10147',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10147',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10147',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10147'
                    },
                    displayName: 'Jaya Sareen',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '114049',
                        key: 'LP-18481',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/114049',
                        fields: {
                            summary: 'QA: "Similar2_RR" Certona Scheme Not Display on the Mobile Version of PLA3',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10009',
                                description: 'Assigned',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                                name: 'Assigned',
                                id: '10009',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                                name: 'Not Prioritized',
                                id: '10100'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@21ab9ff4[id=443,rapidViewId=160,state=ACTIVE,name=Lamps++ Sprint 36,startDate=2018-05-08T08:51:50.345-07:00,endDate=2018-05-22T08:51:00.000-07:00,completeDate=<null>,sequence=443,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: { name: 'lampspp', self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=lampspp' },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jsareen',
                    name: 'jsareen',
                    key: 'jsareen',
                    emailAddress: 'jsareen@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10147',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10147',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10147',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10147'
                    },
                    displayName: 'Jaya Sareen',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|hztc1s:0q89203u6',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 18000, percent: 0 },
                progress: { progress: 0, total: 14400, percent: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18290/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/1',
                    id: '1',
                    description: 'A problem which impairs or prevents the functions of the product.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14133&avatarType=issuetype',
                    name: 'Bug',
                    subtask: false,
                    avatarId: 14133
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=evardigonen',
                    name: 'evardigonen',
                    key: 'evardigonen',
                    emailAddress: 'evardigonen@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=evardigonen&avatarId=17332',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=evardigonen&avatarId=17332',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=evardigonen&avatarId=17332',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=evardigonen&avatarId=17332'
                    },
                    displayName: 'Eilat Vardi-Gonen',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 0,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18290/watchers', watchCount: 2, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-25T17:04:14.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-08T15:05:14.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 14400,
                description:
                    'h2. ISSUE\r\nOn Mobile LP, the "similar2_rr" Certona scheme is requested but the results are not displayed on PLA3.\r\n\r\nh2. Browser / Role\r\nGoogle Chrome emulator (iPhone 6 Plus) for Mobile / UNSI\r\n\r\nh2. STEPS TO REPRODUCE\r\n # Navigate to a PLA3 page in Mobile view\r\n#* For example [https://www.lampsplus.com/products/floor-lamps/style_transitional/finish_black/color_black/type_torchiere/?sfp3=00044]\r\n # Open the Developer Tools\r\n # In the Network tab, search for "recommended"\r\n\r\nh2. ACTUAL RESULTS\r\n* The "similar2_rr" Certona scheme is requested\r\n* The "similar2_rr" Certona results are not displayed in the Mobile view\r\n !Mobile PLAv3.png|thumbnail! \r\n* The "similar2_rr" Certona results are displayed in the Desktop view\r\n\r\nh2. EXPECTED RESULTS\r\n* The "similar2_rr" Certona results will be displayed in the Desktop and Mobile views\r\n** Original task: LP-7853',
                summary: '"Similar2_RR" Certona Scheme Not Display on the Mobile Version of PLA3',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '109492',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/109492',
            key: 'LP-18243',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@5e4f8479[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@29b8aef4[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@7b34e25a[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@77e63b00[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@55a805c9[failedBuildCount=0,successfulBuildCount=4,unknownBuildCount=0,count=4,lastUpdated=2018-05-04T10:55:08.413-0700,lastUpdatedTimestamp=2018-05-04T10:55:08.413-07:00],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@1faa9540[count=4,name=Bamboo]}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@65f1cddf[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@2309c45a[stateCount=1,state=REVIEW,dueDate=<null>,overDue=false,count=1,lastUpdated=2018-05-03T14:40:37.556-0700,lastUpdatedTimestamp=2018-05-03T14:40:37.556-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@68f3d696[count=1,name=FishEye / Crucible]}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@51028c14[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@3a762cde[topEnvironments=[{projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621, project=LPv71, id=110100519, position=2, title=LP_PROD_B, projectId=110788621, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100519, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622, project=LPv71AppLayer, id=110100522, position=2, title=LPAPP_PROD_B, projectId=110788622, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100522, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=117997570, project=LPv72AppLayer, id=118063109, position=1, title=LPAPP_PPE_C, projectId=117997570, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=118063109, status=DEPLOYED}],showProjects=true,successfulCount=5,count=12,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@6de2e547[count=12,name=Bamboo]}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@31912a74[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@74b6727e[count=12,lastUpdated=2018-05-04T10:26:39.000-0700,lastUpdatedTimestamp=2018-05-04T10:26:39.000-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@59093cd8[count=12,name=FishEye / Crucible]}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@28ecdd35[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@101690d6[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":4,"lastUpdated":"2018-05-04T10:55:08.413-0700","failedBuildCount":0,"successfulBuildCount":4,"unknownBuildCount":0},"byInstanceType":{"bamboo":{"count":4,"name":"Bamboo"}}},"review":{"overall":{"count":1,"lastUpdated":"2018-05-03T14:40:37.556-0700","stateCount":1,"state":"REVIEW","dueDate":null,"overDue":false,"completed":false},"byInstanceType":{"fecru":{"count":1,"name":"FishEye / Crucible"}}},"deployment-environment":{"overall":{"count":12,"lastUpdated":null,"topEnvironments":[{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621","project":"LPv71","id":110100519,"position":2,"title":"LP_PROD_B","projectId":110788621,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100519","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622","project":"LPv71AppLayer","id":110100522,"position":2,"title":"LPAPP_PROD_B","projectId":110788622,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100522","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=117997570","project":"LPv72AppLayer","id":118063109,"position":1,"title":"LPAPP_PPE_C","projectId":117997570,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=118063109","status":"DEPLOYED"}],"showProjects":true,"successfulCount":5},"byInstanceType":{"bamboo":{"count":12,"name":"Bamboo"}}},"repository":{"overall":{"count":12,"lastUpdated":"2018-05-04T10:26:39.000-0700"},"byInstanceType":{"fecru":{"count":12,"name":"FishEye / Crucible"}}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10691', value: 'Optimization', id: '10691' },
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 0,
                aggregatetimeoriginalestimate: 43200,
                versions: [],
                issuelinks: [],
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=osyson',
                    name: 'osyson',
                    key: 'osyson',
                    emailAddress: 'osyson@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Oliver Syson',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10032',
                    description: '',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/needinfo.png',
                    name: 'Failed QA',
                    id: '10032',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10054', value: 'Front End', id: '10054' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 1200,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=dbrinkman',
                    name: 'dbrinkman',
                    key: 'dbrinkman',
                    emailAddress: 'DBrinkman@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=dbrinkman&avatarId=12030',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=dbrinkman&avatarId=12030',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=dbrinkman&avatarId=12030',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=dbrinkman&avatarId=12030'
                    },
                    displayName: 'Dalin Brinkman',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '113503',
                        key: 'LP-18246',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113503',
                        fields: {
                            summary: 'QA: Update the Check Store Availability modal (Design & GeoIP)',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10032',
                                description: '',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/needinfo.png',
                                name: 'Failed QA',
                                id: '10032',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@20fd818a[id=442,rapidViewId=160,state=CLOSED,name=Lamps++ Sprint 35,startDate=2018-04-24T17:54:00.054-07:00,endDate=2018-05-08T17:54:00.000-07:00,completeDate=2018-05-08T13:54:04.722-07:00,sequence=442,goal=]',
                    'com.atlassian.greenhopper.service.sprint.Sprint@21ab9ff4[id=443,rapidViewId=160,state=ACTIVE,name=Lamps++ Sprint 36,startDate=2018-05-08T08:51:50.345-07:00,endDate=2018-05-22T08:51:00.000-07:00,completeDate=<null>,sequence=443,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: { name: 'lampspp', self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=lampspp' },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=dbrinkman',
                    name: 'dbrinkman',
                    key: 'dbrinkman',
                    emailAddress: 'DBrinkman@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=dbrinkman&avatarId=12030',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=dbrinkman&avatarId=12030',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=dbrinkman&avatarId=12030',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=dbrinkman&avatarId=12030'
                    },
                    displayName: 'Dalin Brinkman',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08pu3:4',
                customfield_10682: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=SWawarkar',
                        name: 'SWawarkar',
                        key: 'swawarkar',
                        emailAddress: 'SWawarkar@lampsplus.com',
                        avatarUrls: {
                            '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10143',
                            '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10143',
                            '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10143',
                            '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10143'
                        },
                        displayName: 'Saurabh Wawarkar',
                        active: true,
                        timeZone: 'America/Los_Angeles'
                    }
                ],
                customfield_12980: null,
                aggregateprogress: { progress: 70800, total: 72000, percent: 98 },
                progress: { progress: 57600, total: 57600, percent: 100 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18243/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                    id: '3',
                    description: 'A task that needs to be done.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                    name: 'Task',
                    subtask: false,
                    avatarId: 14148
                },
                customfield_11080: null,
                timespent: 57600,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=SWilde',
                    name: 'SWilde',
                    key: 'swilde',
                    emailAddress: 'swilde@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=swilde&avatarId=16730',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=swilde&avatarId=16730',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=swilde&avatarId=16730',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=swilde&avatarId=16730'
                    },
                    displayName: 'Seth Wilde',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 70800,
                customfield_11882: 2,
                resolutiondate: null,
                workratio: 200,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18243/watchers', watchCount: 7, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-02-20T14:03:14.000-0800',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-10T03:31:00.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 28800,
                description:
                    'h2.Goal\r\nUpdate the desktop view of the Check Store Availability\r\n\r\n||Before||After||\r\n| !screenshot-1.png|thumbnail!  | !store-availability-ip-lookup.jpg|thumbnail!  !store-availability-ip-lookup-region.jpg|thumbnail! |\r\n\r\nh2.Requirements\r\n# Update the Check Store Availability (not Need it Today) link to use geo-ip and skip the Select Your Store view\r\n# Update the store results\r\n#* Replace the store level radio selects with a Select button.\r\n#* Remove the global select store button\r\n#* When user clicks \'Select\', the user should be taken to the next page in the Check Store Availability process (existing behavior when user clicks Select Store)\r\n# Add a region drop down below the store results\r\n#* On select, update the store results with the stores from the respective regions\r\n# If a user selects a region from the Region selector, then update the store results with the stores from the respective region and change the results header to reference the region (see mockup)\r\n# Add a Need help line at the bottom\r\n#* Copy: Need Help? Call 877-704-2425 or Chat\r\n#* Where the phone number is dynamically loaded based on the users site mode\r\n#* Where clocking on the chat button will prompt the Bold Chat widget in the corner of the main window above the Check Store Availability modal\r\n\r\nh2.Notes\r\n* Update for desktop only\r\n* Update for all users and sessions\r\n\r\n\r\nh2. TESTING TIPS\r\n* Note for QA: Please do not test bold chat functionality yet as its still turned off but the rest can be tested',
                summary: 'Update the Check Store Availability modal (Design & GeoIP)',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113456',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113456',
            key: 'LP-18222',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@507db9b4[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@f775279[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@788b49d2[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@52692897[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@6fe49b77[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5ab5f868[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@78d2ef35[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@63644d28[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@28905d10[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5d1386d2[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@32d76102[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@739b677d[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@59c9ccc3[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: null,
                aggregatetimeoriginalestimate: 3600,
                versions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/23860',
                        id: '23860',
                        description: '',
                        name: '70',
                        archived: false,
                        released: true,
                        releaseDate: '2018-04-25'
                    },
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/23762',
                        id: '23762',
                        description: '',
                        name: '69',
                        archived: false,
                        released: true,
                        releaseDate: '2018-04-11'
                    }
                ],
                issuelinks: [],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10043',
                    description: 'Need more clarification of requirements from product team',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'Clarification Needed',
                    id: '10043',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: null,
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 3600,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=KDesai',
                    name: 'KDesai',
                    key: 'kdesai',
                    emailAddress: 'KDesai@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Kiran Desai',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '114096',
                        key: 'LP-18502',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/114096',
                        fields: {
                            summary:
                                'QA: LP Desktop:When user tries to enter a same wishlist name which already exist validation/error message is not displayed',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                                description: 'The issue is open and ready for the assignee to start work on it.',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                                name: 'Open',
                                id: '1',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                                    id: 2,
                                    key: 'new',
                                    colorName: 'blue-gray',
                                    name: 'To Do'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                                name: 'Not Prioritized',
                                id: '10100'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: null,
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=KDesai',
                    name: 'KDesai',
                    key: 'kdesai',
                    emailAddress: 'KDesai@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Kiran Desai',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|hztc1s:0q892c',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 3600, percent: 0 },
                progress: { progress: 0, total: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18222/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                    id: '3',
                    description: 'A task that needs to be done.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                    name: 'Task',
                    subtask: false,
                    avatarId: 14148
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jkrithivasan',
                    name: 'jkrithivasan',
                    key: 'jkrithivasan',
                    emailAddress: 'JKrithivasan@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Jayasri Krithivasan',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: -1,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18222/watchers', watchCount: 2, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-24T06:16:10.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-09T10:05:28.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: null,
                description:
                    'h2. Description\r\n\r\nWhen user tries to enter a same wishlist name which already exists, validation/error message is not displayed.\r\n !wislist.png|thumbnail!\r\n\r\n \r\nh2. Browsers & user Roles\r\n\r\niPad(safari)-User not signed In\r\n Chrome-Customer signed In\r\nh2. Steps to Reproduce\r\n # Navigate to [https://www.lampsplus.com/]\r\n # Go to any PDP and click on \'Add to Wishlist\' button\r\n # From \'Manage Wishlist\' dropdown, rename the wishlist (Name-Test)\r\n # From \'Manage wishlist\' click \'New\'\r\n # Add any product to the new wishlist\r\n # Repeat step 3\r\n\r\nh2. Actual Result\r\n\r\nWhen user tries to enter a same wishlist name which already exists, validation/error message is not displayed. \r\n !wislist.png|thumbnail!\r\nh2. Expected Result\r\n\r\nWhen user tries to enter a same wishlist name which already exists, validation/error message should be displayed.\r\n !Validation Error Message.png|thumbnail!',
                summary: 'LP Desktop:When user tries to enter a same wishlist name which already exist validation/error message is not displayed',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113308',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113308',
            key: 'LP-18179',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@36eda898[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@b336d4[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@168ae29c[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1cb8f1ab[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@47ca23cc[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5e56b877[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@1f893f23[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@44e7b0d0[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@52253fc3[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@39dbb0f0[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@6f7df0cf[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@16e5acc0[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@6dc542f8[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: '2018-05-08T23:17:34.039-0700',
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                    name: 'Not Prioritized',
                    id: '10100'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: null,
                aggregatetimeoriginalestimate: null,
                versions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24362',
                        id: '24362',
                        description: '',
                        name: '71',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-07'
                    },
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/23860',
                        id: '23860',
                        description: '',
                        name: '70',
                        archived: false,
                        released: true,
                        releaseDate: '2018-04-25'
                    },
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/23762',
                        id: '23762',
                        description: '',
                        name: '69',
                        archived: false,
                        released: true,
                        releaseDate: '2018-04-11'
                    }
                ],
                issuelinks: [
                    {
                        id: '89290',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/89290',
                        type: {
                            id: '10010',
                            name: 'Duplicate',
                            inward: 'is duplicated by',
                            outward: 'duplicates',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10010'
                        },
                        outwardIssue: {
                            id: '112970',
                            key: 'LP-18055',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/112970',
                            fields: {
                                summary: 'LP: SEO: Missing the H2 tag for the url - https://172.24.107.20/products/onsale_view-on-sale-items/',
                                status: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10001',
                                    description: 'The issue has been cancelled.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/trash.png',
                                    name: 'Cancelled',
                                    id: '10001',
                                    statusCategory: {
                                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/3',
                                        id: 3,
                                        key: 'done',
                                        colorName: 'green',
                                        name: 'Done'
                                    }
                                },
                                priority: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                    name: 'High Priority',
                                    id: '10102'
                                },
                                issuetype: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/1',
                                    id: '1',
                                    description: 'A problem which impairs or prevents the functions of the product.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14133&avatarType=issuetype',
                                    name: 'Bug',
                                    subtask: false,
                                    avatarId: 14133
                                }
                            }
                        }
                    },
                    {
                        id: '89991',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/89991',
                        type: {
                            id: '10001',
                            name: 'Related',
                            inward: 'is related by...',
                            outward: 'is related to...',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10001'
                        },
                        inwardIssue: {
                            id: '113901',
                            key: 'LP-18441',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113901',
                            fields: {
                                summary: 'Kiosk Order Confirmation Email: <schedule an appointment> button redirects to an error page',
                                status: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10042',
                                    description: 'Evaluation completed and requirements are approved by product team',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                                    name: 'Evaluated',
                                    id: '10042',
                                    statusCategory: {
                                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                        id: 4,
                                        key: 'indeterminate',
                                        colorName: 'yellow',
                                        name: 'In Progress'
                                    }
                                },
                                priority: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10101',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/minor.svg',
                                    name: 'Low Priority',
                                    id: '10101'
                                },
                                issuetype: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                                    id: '3',
                                    description: 'A task that needs to be done.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                                    name: 'Task',
                                    subtask: false,
                                    avatarId: 14148
                                }
                            }
                        }
                    }
                ],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                    description: 'The issue is open and ready for the assignee to start work on it.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                    name: 'Open',
                    id: '1',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                        id: 2,
                        key: 'new',
                        colorName: 'blue-gray',
                        name: 'To Do'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10055', value: 'Back End', id: '10055' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: null,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=KDesai',
                    name: 'KDesai',
                    key: 'kdesai',
                    emailAddress: 'KDesai@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Kiran Desai',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '114154',
                        key: 'LP-18523',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/114154',
                        fields: {
                            summary: 'QA: LP Desktop:H2 tag is missing on https://172.24.107.20/products/onsale_view-on-sale-items/',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                                description: 'The issue is open and ready for the assignee to start work on it.',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                                name: 'Open',
                                id: '1',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                                    id: 2,
                                    key: 'new',
                                    colorName: 'blue-gray',
                                    name: 'To Do'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                                name: 'Not Prioritized',
                                id: '10100'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: null,
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=KDesai',
                    name: 'KDesai',
                    key: 'kdesai',
                    emailAddress: 'KDesai@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Kiran Desai',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|hztc1s:0q8924',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 0 },
                progress: { progress: 0, total: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18179/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                    id: '3',
                    description: 'A task that needs to be done.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                    name: 'Task',
                    subtask: false,
                    avatarId: 14148
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=evardigonen',
                    name: 'evardigonen',
                    key: 'evardigonen',
                    emailAddress: 'evardigonen@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=evardigonen&avatarId=17332',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=evardigonen&avatarId=17332',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=evardigonen&avatarId=17332',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=evardigonen&avatarId=17332'
                    },
                    displayName: 'Eilat Vardi-Gonen',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: -1,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18179/watchers', watchCount: 4, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-23T02:43:47.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-09T09:43:30.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: null,
                description:
                    'h2.Note\r\n\r\nIssue is also happening on production\r\n\r\nh2.Description\r\n\r\nH2 tag is missing on https://172.24.107.20/products/onsale_view-on-sale-items/\r\n !h2missing.png|thumbnail! \r\n\r\nh2.Precondition\r\n\r\n1. User has downloaded and installed the Screaming Frog SEO Spider Tool from this website: https://www.screamingfrog.co.uk/seo-spider/\r\n2. User had added the correct IP address for the PPE Environment in the first row labeled IP Address for Testing Environment of the attached spreadsheet. Please ensure that the \'URL Example\' column of the spreadsheet has the correct IP address (it must match the value in the \'IP Address\' column)\r\nIf the IP address for the PPE environment changes, please enter it in the first row labeled IP Address for Testing Environment of the attached spreadsheet.\r\nNOTE: If testing in Production, please enter www.lampsplus.com in the first row labeled IP Address for Testing Environment of the attached spreadsheet \r\n\r\nh2.Steps to Reproduce\r\n\r\n1. Open the Screaming Frog SEO Spider Tool\r\n2. Click the Mode menu and select the List option (if not already selected)\r\n3. Click the Configuration menu and select the User-Agent option\r\n4. In the User-Agent Configuration window, select the Screaming Frog SEO Spider option for the Preset User Agents drop-down and click OK\r\n5. In the middle of the tool header, click on the Upload button > Enter Manually... option\r\n6. In the text box section of the URL List window that opens up, copy / paste all the URLs from the URL Example column of the attached spreadsheet\r\n7. Click the Next button\r\n8. On the Reading List window, click the OK button\r\n9.Once the progress indicator shows 100%:\r\n  Click on the Overview tab in the right hand side panel of the tool\r\n10.Locate and click on SEO Elements to expand it\r\n11.Under SEO Elements, scroll down to locate H2 and click on it to expand it\r\n12.Under H2, locate and click on Missing (n), where \'n\' is a number \'0\' and up\r\n\r\nh2.Actual Result\r\n\r\nH2 tag is missing on https://172.24.107.20/products/onsale_view-on-sale-items/\r\n\r\n \r\nh2.Expected Result\r\n\r\nMissing should be found under H2 and displayed as Missing (0) (0.00%) - the (0) (0.00%) indicates that none of the provided URLs are missing the H2 tag.\r\nFix should be done for both Desktop and Mobile views\r\n\r\nh2.Test case identifier\r\n\r\nTest Project: LPR:Lamps Plus\r\nTest Plan: LP_Regression_Desktop\r\nBuild: LPv70 Round 1\r\nModule:SEO tags\r\nTest case Id-LPR-6395\r\n',
                summary: 'LP Desktop:H2 tag is missing on https://172.24.107.20/products/onsale_view-on-sale-items/',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113205',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113205',
            key: 'LP-18136',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@5f71d99b[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@32291bba[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@b5cf0a0[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4b170198[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@1a7ba460[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6075985e[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@cc0ad00[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7fa866c1[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@383785f0[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@74cc5dc0[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@7ded56f4[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@41cfb9e6[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@4553ac2a[count=1,lastUpdated=2018-04-19T12:25:49.300-0700,lastUpdatedTimestamp=2018-04-19T12:25:49.300-07:00],byInstanceType={stash=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@760f890c[count=1,name=Bitbucket Server]}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":1,"lastUpdated":"2018-04-19T12:25:49.300-0700"},"byInstanceType":{"stash":{"count":1,"name":"Bitbucket Server"}}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 0,
                aggregatetimeoriginalestimate: 0,
                versions: [],
                issuelinks: [
                    {
                        id: '89146',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/89146',
                        type: {
                            id: '10220',
                            name: 'Cloners',
                            inward: 'Implements',
                            outward: 'Is implemented by',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10220'
                        },
                        outwardIssue: {
                            id: '113030',
                            key: 'LP-18086',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113030',
                            fields: {
                                summary: 'Test Task - Jira Extension (AUD-88)',
                                status: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/4',
                                    description:
                                        'This issue was once resolved, but the resolution was deemed incorrect. From here issues are either marked assigned or resolved.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/reopened.png',
                                    name: 'Reopened',
                                    id: '4',
                                    statusCategory: {
                                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                                        id: 2,
                                        key: 'new',
                                        colorName: 'blue-gray',
                                        name: 'To Do'
                                    }
                                },
                                priority: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/7',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/trivial.svg',
                                    name: 'Do Not Work On',
                                    id: '7'
                                },
                                issuetype: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/10700',
                                    id: '10700',
                                    description: 'This is used to manage the creation of a branch from within Jira for the WebDev team',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=19130&avatarType=issuetype',
                                    name: 'Branch',
                                    subtask: false,
                                    avatarId: 19130
                                }
                            }
                        }
                    }
                ],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                    description: 'The issue is open and ready for the assignee to start work on it.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                    name: 'Open',
                    id: '1',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                        id: 2,
                        key: 'new',
                        colorName: 'blue-gray',
                        name: 'To Do'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: null,
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 0,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=RKrutik',
                    name: 'RKrutik',
                    key: 'rkrutik',
                    emailAddress: 'RKrutik@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=rkrutik&avatarId=17533',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=rkrutik&avatarId=17533',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=rkrutik&avatarId=17533',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=rkrutik&avatarId=17533'
                    },
                    displayName: 'Rusty Krutik',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: null,
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=RKrutik',
                    name: 'RKrutik',
                    key: 'rkrutik',
                    emailAddress: 'RKrutik@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=rkrutik&avatarId=17533',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=rkrutik&avatarId=17533',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=rkrutik&avatarId=17533',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=rkrutik&avatarId=17533'
                    },
                    displayName: 'Rusty Krutik',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08okn:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 0 },
                progress: { progress: 0, total: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18136/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/10700',
                    id: '10700',
                    description: 'This is used to manage the creation of a branch from within Jira for the WebDev team',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=19130&avatarType=issuetype',
                    name: 'Branch',
                    subtask: false,
                    avatarId: 19130
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: null,
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 0,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18136/watchers', watchCount: 1, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-19T12:19:50.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-04-30T18:55:23.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 0,
                description: 'Test task to verify Build button (AUD-150)\r\n\r\n',
                summary: 'Test Task - Jira Extension (AUD-150)',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '112789',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/112789',
            key: 'LP-18116',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@33615d70[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2042744c[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@517195dd[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3b2bd817[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@29888df[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@31cb7cd4[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@6cc9c84d[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@9474ea3[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@4f5fe124[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@259809c7[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@7312699[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3430428a[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@456d3e9[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10691', value: 'Optimization', id: '10691' },
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 13500,
                aggregatetimeoriginalestimate: 14400,
                versions: [],
                issuelinks: [
                    {
                        id: '88755',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/88755',
                        type: {
                            id: '10220',
                            name: 'Cloners',
                            inward: 'Implements',
                            outward: 'Is implemented by',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10220'
                        },
                        inwardIssue: {
                            id: '112027',
                            key: 'MAR-2684',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/112027',
                            fields: {
                                summary: 'Add Multiproduct Sticky Add to Cart',
                                status: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/6',
                                    description: 'The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/closed.png',
                                    name: 'Closed',
                                    id: '6',
                                    statusCategory: {
                                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/3',
                                        id: 3,
                                        key: 'done',
                                        colorName: 'green',
                                        name: 'Done'
                                    }
                                },
                                priority: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/6',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priority_medium.gif',
                                    name: 'Work on If You Have Time (Medium Priority)',
                                    id: '6'
                                },
                                issuetype: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                                    id: '3',
                                    description: 'A task that needs to be done.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                                    name: 'Task',
                                    subtask: false,
                                    avatarId: 14148
                                }
                            }
                        }
                    },
                    {
                        id: '89007',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/89007',
                        type: {
                            id: '10001',
                            name: 'Related',
                            inward: 'is related by...',
                            outward: 'is related to...',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10001'
                        },
                        outwardIssue: {
                            id: '69122',
                            key: 'LP-6059',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/69122',
                            fields: {
                                summary: 'LP - New Product Page with Sticky Navigation',
                                status: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/6',
                                    description: 'The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/closed.png',
                                    name: 'Closed',
                                    id: '6',
                                    statusCategory: {
                                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/3',
                                        id: 3,
                                        key: 'done',
                                        colorName: 'green',
                                        name: 'Done'
                                    }
                                },
                                priority: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                    name: 'High Priority',
                                    id: '10102'
                                },
                                issuetype: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                                    id: '3',
                                    description: 'A task that needs to be done.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                                    name: 'Task',
                                    subtask: false,
                                    avatarId: 14148
                                }
                            }
                        }
                    }
                ],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10009',
                    description: 'Assigned',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'Assigned',
                    id: '10009',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10055', value: 'Back End', id: '10055' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 13500,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=egoldberg',
                    name: 'egoldberg',
                    key: 'egoldberg',
                    emailAddress: 'egoldberg@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=egoldberg&avatarId=19632',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=egoldberg&avatarId=19632',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=egoldberg&avatarId=19632',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=egoldberg&avatarId=19632'
                    },
                    displayName: 'Ellen Goldberg',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '113436',
                        key: 'LP-18209',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113436',
                        fields: {
                            summary: 'QA: Add Sticky Navigation to Multi-Product Pages',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                                description: 'The issue is open and ready for the assignee to start work on it.',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                                name: 'Open',
                                id: '1',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                                    id: 2,
                                    key: 'new',
                                    colorName: 'blue-gray',
                                    name: 'To Do'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: null,
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=egoldberg',
                    name: 'egoldberg',
                    key: 'egoldberg',
                    emailAddress: 'egoldberg@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=egoldberg&avatarId=19632',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=egoldberg&avatarId=19632',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=egoldberg&avatarId=19632',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=egoldberg&avatarId=19632'
                    },
                    displayName: 'Ellen Goldberg',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|hztc1s:0q89203u7',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 900, total: 14400, percent: 6 },
                progress: { progress: 900, total: 14400, percent: 6 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18116/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                    id: '3',
                    description: 'A task that needs to be done.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                    name: 'Task',
                    subtask: false,
                    avatarId: 14148
                },
                customfield_11080: null,
                timespent: 900,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=evardigonen',
                    name: 'evardigonen',
                    key: 'evardigonen',
                    emailAddress: 'evardigonen@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=evardigonen&avatarId=17332',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=evardigonen&avatarId=17332',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=evardigonen&avatarId=17332',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=evardigonen&avatarId=17332'
                    },
                    displayName: 'Eilat Vardi-Gonen',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 900,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 6,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18116/watchers', watchCount: 7, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-11T14:58:32.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-08T12:53:35.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 14400,
                description:
                    'h2. Goal\r\n\r\nAdd Sticky Navigation with an Add to Cart button to the Multi-product pages. This was previously implemented for all other PDPs in LP-6059.\r\nh2. Requirements\r\n * Add the Sticky Navigation with the "Add to Cart" button to the Multi-Product pages, matching the existing functionality and formatting on other PDPs, with the following inclusions and additions\r\n ** Product Name\r\n *** Add the sizing option text\r\n !sticky-for-pdp-singleline.jpg|thumbnail! !sticky-for-pdp-doubleline.jpg|thumbnail!\r\n *** Additional text will be 14 pixels\r\n ** Display the price of the selected option\r\n ** Display the "Add to Cart" or "Sold Out" message, depending on what appears on the page\r\n ** Display only the relevant tabs\r\n\r\nh2. Notes\r\n * Any functionality added in the mock-up not specifically spelled out in this task, should be brought to the Product Manager\'s attention.\r\n\r\nh2. Implementation Details\r\n\r\n!image-2018-04-18-10-17-30-649.png|thumbnail!\r\n * The intention is for this implementation to be PDP template INDEPENDENT\r\n\r\nh2. Testing Tips\r\n * Pixel values are provided for development purposes ONLY; for testing, please use visual comparison\r\n * Confirm for all user types\r\n * Confirm on all supported browsers\r\n * Confirm for all PDP templates: [https://confluence.lampsplus.com:8093/display/WDP/Site+Variations]\r\n * Confirm for different types of products:\r\n ** Combo SKUs, Sale products, Clearance products, Daily Sale products, products with different sections that you could navigate to from header\r\n * Confirm that for colorable and patternable products, the product information on the Sticky Navigation updates when the color/pattern is changed\r\n * Confirm that the selected option appears in the Sticky Navigation\r\n * Confirm that the tabs in the Sticky Navigation take the user to the expected PDP section',
                summary: 'Add Sticky Navigation to Multi-Product Pages',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113054',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113054',
            key: 'LP-18098',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@52e64f2[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@628a5f8a[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@74d54689[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3de8928c[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@4b976837[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7bd118c0[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@256ef83d[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5c6b72ee[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@2c4d7f84[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5fa965d5[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@d54d10d[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@aaf2e4b[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@4dd9c1c5[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10678', value: 'SEO', id: '10678' },
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: null,
                aggregatetimeoriginalestimate: null,
                versions: [],
                issuelinks: [],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10042',
                    description: 'Evaluation completed and requirements are approved by product team',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'Evaluated',
                    id: '10042',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: null,
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: null,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=yvayer',
                    name: 'yvayer',
                    key: 'yvayer',
                    emailAddress: 'yvayer@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=yvayer&avatarId=12232',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=yvayer&avatarId=12232',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=yvayer&avatarId=12232',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=yvayer&avatarId=12232'
                    },
                    displayName: 'Yelena Vayer',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '113151',
                        key: 'LP-18119',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113151',
                        fields: {
                            summary: 'QA: Lighting Collections Paginated pages: Quotes are missing around \'next\' and \'prev\' in rel tag',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                                description: 'The issue is open and ready for the assignee to start work on it.',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                                name: 'Open',
                                id: '1',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                                    id: 2,
                                    key: 'new',
                                    colorName: 'blue-gray',
                                    name: 'To Do'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: null,
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=yvayer',
                    name: 'yvayer',
                    key: 'yvayer',
                    emailAddress: 'yvayer@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=yvayer&avatarId=12232',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=yvayer&avatarId=12232',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=yvayer&avatarId=12232',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=yvayer&avatarId=12232'
                    },
                    displayName: 'Yelena Vayer',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08nn3:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 0 },
                progress: { progress: 0, total: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18098/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                    id: '3',
                    description: 'A task that needs to be done.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                    name: 'Task',
                    subtask: false,
                    avatarId: 14148
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=HPastras',
                    name: 'HPastras',
                    key: 'hpastras',
                    emailAddress: 'HPastras@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15150',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15150',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15150',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15150'
                    },
                    displayName: 'Helen Pastras',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: -1,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18098/watchers', watchCount: 1, isWatching: false },
                customfield_10380: 'LP-18043',
                customfield_12680: 0,
                created: '2018-04-17T09:29:28.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-08T09:20:11.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: null,
                description:
                    'Production issue\r\nh2. STEPS TO REPRODUCE\r\n # Navigate to any paginated page in Lighting Collections section. For example, [https://www.lampsplus.com/lightingcollections/chandeliers/page_4/default.aspx]\r\n # View page source\r\n # In the Source of the page search for \'next\' or \'prev\'\r\n\r\nh2. ACTUAL RESULT\r\n\r\nObserve that \'next\' and \'prev\' are not in quotations.\r\n !image-2018-04-17-09-28-38-864.png|thumbnail!\r\nh2. EXPECTED RESULT\r\n\r\nIn rel tag on Lighting Collections pages, \'next\' and \'prev\' should be in quotes:  "next" and "prev"\r\n\r\n ',
                summary: 'Lighting Collections Paginated pages: Quotes are missing around \'next\' and \'prev\' in rel tag',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113030',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113030',
            key: 'LP-18086',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@2c3189f9[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@11aae589[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@18739445[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@215de9fa[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@103c269[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@47c3f96d[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@43168c6c[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@d4abfcd[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@12c53487[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4a15af23[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@3d172fe1[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@657b5b59[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@5e213a7d[count=1,lastUpdated=2018-04-17T17:42:37.227-0700,lastUpdatedTimestamp=2018-04-17T17:42:37.227-07:00],byInstanceType={stash=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@1d39ac3[count=1,name=Bitbucket Server]}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":1,"lastUpdated":"2018-04-17T17:42:37.227-0700"},"byInstanceType":{"stash":{"count":1,"name":"Bitbucket Server"}}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/7',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/trivial.svg',
                    name: 'Do Not Work On',
                    id: '7'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 0,
                aggregatetimeoriginalestimate: 0,
                versions: [],
                issuelinks: [
                    {
                        id: '89146',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/89146',
                        type: {
                            id: '10220',
                            name: 'Cloners',
                            inward: 'Implements',
                            outward: 'Is implemented by',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10220'
                        },
                        inwardIssue: {
                            id: '113205',
                            key: 'LP-18136',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113205',
                            fields: {
                                summary: 'Test Task - Jira Extension (AUD-150)',
                                status: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                                    description: 'The issue is open and ready for the assignee to start work on it.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                                    name: 'Open',
                                    id: '1',
                                    statusCategory: {
                                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                                        id: 2,
                                        key: 'new',
                                        colorName: 'blue-gray',
                                        name: 'To Do'
                                    }
                                },
                                priority: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                    name: 'High Priority',
                                    id: '10102'
                                },
                                issuetype: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/10700',
                                    id: '10700',
                                    description: 'This is used to manage the creation of a branch from within Jira for the WebDev team',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=19130&avatarType=issuetype',
                                    name: 'Branch',
                                    subtask: false,
                                    avatarId: 19130
                                }
                            }
                        }
                    }
                ],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/4',
                    description:
                        'This issue was once resolved, but the resolution was deemed incorrect. From here issues are either marked assigned or resolved.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/reopened.png',
                    name: 'Reopened',
                    id: '4',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                        id: 2,
                        key: 'new',
                        colorName: 'blue-gray',
                        name: 'To Do'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: null,
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 0,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=RKrutik',
                    name: 'RKrutik',
                    key: 'rkrutik',
                    emailAddress: 'RKrutik@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=rkrutik&avatarId=17533',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=rkrutik&avatarId=17533',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=rkrutik&avatarId=17533',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=rkrutik&avatarId=17533'
                    },
                    displayName: 'Rusty Krutik',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: null,
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=RKrutik',
                    name: 'RKrutik',
                    key: 'rkrutik',
                    emailAddress: 'RKrutik@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=rkrutik&avatarId=17533',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=rkrutik&avatarId=17533',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=rkrutik&avatarId=17533',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=rkrutik&avatarId=17533'
                    },
                    displayName: 'Rusty Krutik',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08nhr:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 0 },
                progress: { progress: 0, total: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18086/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/10700',
                    id: '10700',
                    description: 'This is used to manage the creation of a branch from within Jira for the WebDev team',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=19130&avatarType=issuetype',
                    name: 'Branch',
                    subtask: false,
                    avatarId: 19130
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: null,
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 0,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18086/watchers', watchCount: 1, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-16T17:05:43.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-04-19T12:21:44.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 0,
                description: 'Test task to verify JIRA extension (AUD-88)\r\n\r\n',
                summary: 'Test Task - Jira Extension (AUD-88)',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '111415',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/111415',
            key: 'LP-17624',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@62fa6f73[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@10d8f183[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@16d2448f[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@18573802[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@29674d8c[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7e64e5ca[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@7a9630b5[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5ba090cd[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@4838bd18[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@11ab5b60[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@5af3d278[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@58a0713[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@857aac7[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '110921',
                    key: 'LP-17518',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/110921',
                    fields: {
                        summary: 'Issue Related to Combo SKUs on Clearance',
                        status: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10042',
                            description: 'Evaluation completed and requirements are approved by product team',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                            name: 'Evaluated',
                            id: '10042',
                            statusCategory: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                id: 4,
                                key: 'indeterminate',
                                colorName: 'yellow',
                                name: 'In Progress'
                            }
                        },
                        priority: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                            name: 'High Priority',
                            id: '10102'
                        },
                        issuetype: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/1',
                            id: '1',
                            description: 'A problem which impairs or prevents the functions of the product.',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14133&avatarType=issuetype',
                            name: 'Bug',
                            subtask: false,
                            avatarId: 14133
                        }
                    }
                },
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                    name: 'Not Prioritized',
                    id: '10100'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 3600,
                aggregatetimeoriginalestimate: null,
                versions: [],
                issuelinks: [],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/3',
                    description: 'This issue is being actively worked on at the moment by the assignee.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/inprogress.png',
                    name: 'In Progress',
                    id: '3',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10271', value: 'QA', id: '10271' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 3600,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=hulmale',
                    name: 'hulmale',
                    key: 'hulmale',
                    emailAddress: 'hulmale@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Harshalata Ulmale',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@21ab9ff4[id=443,rapidViewId=160,state=ACTIVE,name=Lamps++ Sprint 36,startDate=2018-05-08T08:51:50.345-07:00,endDate=2018-05-22T08:51:00.000-07:00,completeDate=<null>,sequence=443,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=hulmale',
                    name: 'hulmale',
                    key: 'hulmale',
                    emailAddress: 'hulmale@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Harshalata Ulmale',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08fpz:',
                customfield_10682: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=hulmale',
                        name: 'hulmale',
                        key: 'hulmale',
                        emailAddress: 'hulmale@lampsplus.com',
                        avatarUrls: {
                            '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                            '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                            '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                            '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                        },
                        displayName: 'Harshalata Ulmale',
                        active: true,
                        timeZone: 'America/Los_Angeles'
                    }
                ],
                customfield_12980: null,
                aggregateprogress: { progress: 3600, total: 7200, percent: 50 },
                progress: { progress: 3600, total: 7200, percent: 50 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-17624/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                    id: '5',
                    description: 'The sub-task of the issue',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                    name: 'Sub-task',
                    subtask: true,
                    avatarId: 14146
                },
                customfield_11080: null,
                timespent: 3600,
                customfield_11480: null,
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 3600,
                customfield_11882: 1,
                resolutiondate: null,
                workratio: -1,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-17624/watchers', watchCount: 1, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-03-19T23:11:11.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-03T16:43:53.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: null,
                description: null,
                summary: 'QA : PDP and Cart pages: cannot increase quantity of combosku.',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '110921',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/110921',
            key: 'LP-17518',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@2155af05[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1740d512[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@600cc25f[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@f7d3328[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@3dc9845[failedBuildCount=0,successfulBuildCount=1,unknownBuildCount=0,count=1,lastUpdated=2018-03-20T13:01:49.077-0700,lastUpdatedTimestamp=2018-03-20T13:01:49.077-07:00],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@7b65dfbe[count=1,name=Bamboo]}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@14bd0358[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@72bf9694[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@15c62636[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@2e73d78a[topEnvironments=[{projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=100073478, project=LPKitSkus, id=99844120, position=1, title=LP_PPE_G, projectId=100073478, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=99844120, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=103284738, project=LPKitSkusAppLayer, id=103350277, position=1, title=LPAPP_PPE_G, projectId=103284738, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=103350277, status=DEPLOYED}],showProjects=true,successfulCount=2,count=6,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@5dfd0a83[count=6,name=Bamboo]}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5c2d9138[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@787efb1d[count=4,lastUpdated=2018-03-20T12:01:49.000-0700,lastUpdatedTimestamp=2018-03-20T12:01:49.000-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@7dd2aaaf[count=4,name=FishEye / Crucible]}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5f88f58e[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@6f1c1b16[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":1,"lastUpdated":"2018-03-20T13:01:49.077-0700","failedBuildCount":0,"successfulBuildCount":1,"unknownBuildCount":0},"byInstanceType":{"bamboo":{"count":1,"name":"Bamboo"}}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":6,"lastUpdated":null,"topEnvironments":[{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=100073478","project":"LPKitSkus","id":99844120,"position":1,"title":"LP_PPE_G","projectId":100073478,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=99844120","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=103284738","project":"LPKitSkusAppLayer","id":103350277,"position":1,"title":"LPAPP_PPE_G","projectId":103284738,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=103350277","status":"DEPLOYED"}],"showProjects":true,"successfulCount":2},"byInstanceType":{"bamboo":{"count":6,"name":"Bamboo"}}},"repository":{"overall":{"count":4,"lastUpdated":"2018-03-20T12:01:49.000-0700"},"byInstanceType":{"fecru":{"count":4,"name":"FishEye / Crucible"}}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 14400,
                aggregatetimeoriginalestimate: 10800,
                versions: [],
                issuelinks: [
                    {
                        id: '89500',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/89500',
                        type: {
                            id: '10001',
                            name: 'Related',
                            inward: 'is related by...',
                            outward: 'is related to...',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10001'
                        },
                        outwardIssue: {
                            id: '113237',
                            key: 'LP-18153',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113237',
                            fields: {
                                summary: 'Sort Page: Limited Quantity for Kit SKUs',
                                status: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10009',
                                    description: 'Assigned',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                                    name: 'Assigned',
                                    id: '10009',
                                    statusCategory: {
                                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                        id: 4,
                                        key: 'indeterminate',
                                        colorName: 'yellow',
                                        name: 'In Progress'
                                    }
                                },
                                priority: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                    name: 'High Priority',
                                    id: '10102'
                                },
                                issuetype: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                                    id: '3',
                                    description: 'A task that needs to be done.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                                    name: 'Task',
                                    subtask: false,
                                    avatarId: 14148
                                }
                            }
                        }
                    }
                ],
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=RDeshmukh',
                    name: 'RDeshmukh',
                    key: 'rdeshmukh',
                    emailAddress: 'RDeshmukh@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Rupali Deshmukh',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10042',
                    description: 'Evaluation completed and requirements are approved by product team',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'Evaluated',
                    id: '10042',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10055', value: 'Back End', id: '10055' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 18000,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=omats',
                    name: 'omats',
                    key: 'omats',
                    emailAddress: 'omats@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=omats&avatarId=13930',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=omats&avatarId=13930',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=omats&avatarId=13930',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=omats&avatarId=13930'
                    },
                    displayName: 'Oleg Mats',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '111415',
                        key: 'LP-17624',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/111415',
                        fields: {
                            summary: 'QA : PDP and Cart pages: cannot increase quantity of combosku.',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/3',
                                description: 'This issue is being actively worked on at the moment by the assignee.',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/inprogress.png',
                                name: 'In Progress',
                                id: '3',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                                name: 'Not Prioritized',
                                id: '10100'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@21ab9ff4[id=443,rapidViewId=160,state=ACTIVE,name=Lamps++ Sprint 36,startDate=2018-05-08T08:51:50.345-07:00,endDate=2018-05-22T08:51:00.000-07:00,completeDate=<null>,sequence=443,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=omats',
                    name: 'omats',
                    key: 'omats',
                    emailAddress: 'omats@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=omats&avatarId=13930',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=omats&avatarId=13930',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=omats&avatarId=13930',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=omats&avatarId=13930'
                    },
                    displayName: 'Oleg Mats',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|hztc1s:0q89203o',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 14400, total: 32400, percent: 44 },
                progress: { progress: 10800, total: 25200, percent: 42 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-17518/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/1',
                    id: '1',
                    description: 'A problem which impairs or prevents the functions of the product.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14133&avatarType=issuetype',
                    name: 'Bug',
                    subtask: false,
                    avatarId: 14133
                },
                customfield_11080: null,
                timespent: 10800,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=evardigonen',
                    name: 'evardigonen',
                    key: 'evardigonen',
                    emailAddress: 'evardigonen@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=evardigonen&avatarId=17332',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=evardigonen&avatarId=17332',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=evardigonen&avatarId=17332',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=evardigonen&avatarId=17332'
                    },
                    displayName: 'Eilat Vardi-Gonen',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 14400,
                customfield_11882: 2,
                resolutiondate: null,
                workratio: 100,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-17518/watchers', watchCount: 3, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-03-13T14:42:57.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-08T15:00:51.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 10800,
                description:
                    'h2. Environments\r\n * Production (LPv69)\r\n\r\nh2. Steps to Reproduce\r\n # Navigate to a PDP for a Combo SKU on Clearance without limited quantity\r\n ** For example [https://www.lampsplus.com/products/europa-1910-edison-bulb-bronze-multi-light-pendant__x9874-3f797.html]\r\n # Enter quantity 999\r\n !Snap 2018-04-19 at 16.37.59.png|thumbnail!\r\n # Select the Add to Cart button\r\n ** "We\'re Sorry - Only 120 of this item are still available. The quantity you entered has been reduced." error message appears\r\n !Snap 2018-04-19 at 16.38.05.png|thumbnail!\r\n # Select the Add to Cart button again\r\n ** "Error - Sorry! There is an error in quantity" error message appears in a pop-up\r\n !image-2018-03-13-14-41-51-214.png|thumbnail!\r\n\r\nh2. Actual Result\r\n\r\nSee above\r\nh2. Expected Result\r\n # +Unless+ the SKU is on ((Daily Sale or Clearance) and (Quantity Available < 20))\r\n ## Quantity text box appears on the PDP\r\n ## User is able to enter 999 in the text box\r\n ## A message will appear indicating the Quantity Available\r\n ## Only the Quantity Available can be added to the cart\r\n ## No error popup appear\r\n # Otherwise\r\n ## Limited quantity drop-down menu appears\r\n ## User is able to add up to the Quantity Available quantity\r\n ## Selected quantity is added to the cart\r\n ## No error popup appear\r\n\r\nh2. Notes\r\n * See LP-18153 for more details and definition of *Quantity Available*',
                summary: 'Issue Related to Combo SKUs on Clearance',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '110542',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/110542',
            key: 'LP-16794',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@5efca054[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2d05fcf7[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@7ce7bd05[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2109a724[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@1acc4d51[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@18acf8bb[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@59e2613e[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@353edda1[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@4d60a892[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3276e8a5[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@78d79444[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3b479d2a[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@732b86e8[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '110305',
                    key: 'LP-16698',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/110305',
                    fields: {
                        summary: 'Careers section move database calls to App Layer',
                        status: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/3',
                            description: 'This issue is being actively worked on at the moment by the assignee.',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/inprogress.png',
                            name: 'In Progress',
                            id: '3',
                            statusCategory: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                id: 4,
                                key: 'indeterminate',
                                colorName: 'yellow',
                                name: 'In Progress'
                            }
                        },
                        priority: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                            name: 'High Priority',
                            id: '10102'
                        },
                        issuetype: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/4',
                            id: '4',
                            description: 'An improvement or enhancement to an existing feature or task.',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14140&avatarType=issuetype',
                            name: 'Improvement',
                            subtask: false,
                            avatarId: 14140
                        }
                    }
                },
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 14400,
                aggregatetimeoriginalestimate: 14400,
                versions: [],
                issuelinks: [],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10009',
                    description: 'Assigned',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'Assigned',
                    id: '10009',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10271', value: 'QA', id: '10271' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 14400,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=ashagmirian',
                    name: 'ashagmirian',
                    key: 'ashagmirian',
                    emailAddress: 'ashagmirian@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=ashagmirian&avatarId=12630',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=ashagmirian&avatarId=12630',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=ashagmirian&avatarId=12630',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=ashagmirian&avatarId=12630'
                    },
                    displayName: 'Armen Shagmirian',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@72a723da[id=452,rapidViewId=159,state=FUTURE,name=Team FVN Sprint 11,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=452,goal=<null>]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: { name: 'Team FVN', self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=Team+FVN' },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=ashagmirian',
                    name: 'ashagmirian',
                    key: 'ashagmirian',
                    emailAddress: 'ashagmirian@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=ashagmirian&avatarId=12630',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=ashagmirian&avatarId=12630',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=ashagmirian&avatarId=12630',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=ashagmirian&avatarId=12630'
                    },
                    displayName: 'Armen Shagmirian',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08c3b:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 14400, percent: 0 },
                progress: { progress: 0, total: 14400, percent: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-16794/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                    id: '5',
                    description: 'The sub-task of the issue',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                    name: 'Sub-task',
                    subtask: true,
                    avatarId: 14146
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: null,
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 0,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-16794/watchers', watchCount: 1, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-03-07T18:18:44.000-0800',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-03T11:37:50.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 14400,
                description: null,
                summary: 'QA: Careers section move database calls to App Layer',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '110305',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/110305',
            key: 'LP-16698',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@53c44371[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1e215e3c[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@3638048a[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4255865d[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@337b8aad[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@27bfe240[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@5155ae69[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3f5cbd70[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@509d66d4[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@8e82365[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@74b2f2f7[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2e5f662c[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@154f1ef5[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: ['InfrastructureImprovement'],
                customfield_10587: null,
                timeestimate: 35760,
                aggregatetimeoriginalestimate: 115200,
                versions: [],
                issuelinks: [],
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=ialmadawy',
                    name: 'ialmadawy',
                    key: 'ialmadawy',
                    emailAddress: 'IAlmadawy@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Islam Almadawy ',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/3',
                    description: 'This issue is being actively worked on at the moment by the assignee.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/inprogress.png',
                    name: 'In Progress',
                    id: '3',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10055', value: 'Back End', id: '10055' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 50160,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=ashagmirian',
                    name: 'ashagmirian',
                    key: 'ashagmirian',
                    emailAddress: 'ashagmirian@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=ashagmirian&avatarId=12630',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=ashagmirian&avatarId=12630',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=ashagmirian&avatarId=12630',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=ashagmirian&avatarId=12630'
                    },
                    displayName: 'Armen Shagmirian',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '110542',
                        key: 'LP-16794',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/110542',
                        fields: {
                            summary: 'QA: Careers section move database calls to App Layer',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10009',
                                description: 'Assigned',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                                name: 'Assigned',
                                id: '10009',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@72a723da[id=452,rapidViewId=159,state=FUTURE,name=Team FVN Sprint 11,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=452,goal=<null>]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: { name: 'Team FVN', self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=Team+FVN' },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=ashagmirian',
                    name: 'ashagmirian',
                    key: 'ashagmirian',
                    emailAddress: 'ashagmirian@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=ashagmirian&avatarId=12630',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=ashagmirian&avatarId=12630',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=ashagmirian&avatarId=12630',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=ashagmirian&avatarId=12630'
                    },
                    displayName: 'Armen Shagmirian',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08anz:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 65040, total: 115200, percent: 56 },
                progress: { progress: 65040, total: 100800, percent: 64 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-16698/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/4',
                    id: '4',
                    description: 'An improvement or enhancement to an existing feature or task.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14140&avatarType=issuetype',
                    name: 'Improvement',
                    subtask: false,
                    avatarId: 14140
                },
                customfield_11080: null,
                timespent: 65040,
                customfield_11480: null,
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 65040,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 64,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-16698/watchers', watchCount: 1, isWatching: false },
                customfield_10380: 'LP-15816',
                customfield_12680: 0,
                created: '2018-03-05T13:14:09.000-0800',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-09T10:37:32.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 100800,
                description:
                    'h2.GOAL\r\nThis is in an effort to remove code that directly accesses the database from LP site as opposed to using the App Layer.\r\nFor the Careers section on our website https://www.lampsplus.com/careers/default.aspx\r\nMove the database calls to the appropriate location in App Layer.\r\n !Apply.png|thumbnail! \r\n !CareerDetails.png|thumbnail! \r\n !Default.png|thumbnail! \r\n !SearchCareers.png|thumbnail! \r\n  \r\nh2.REQUIREMENTS\r\n# Create a new WCF Service CareerService and create methods and Objects that will move the database access to the App Layer\r\n  \r\nh2.NOTES\r\n* There are 4 different aspx pages that access the database and within each one multiple calls to the database\r\n* Keep the stored procs the same to limit the changes needed\r\n\r\nh2. GROOMING NOTES\r\n* Create CareerService WCF Service look at VideoService as an example\r\n* Create Core Objects in a folder called Career in LampsPlus.Commerce.Core\r\n* These sprocs need Core Objects:\r\n{code}\r\nspApplicantInfo_Save\r\nspApplicantEmploymentHistory_Save\r\n{code}\r\n* 8 sprocs 2 need core objects Apply\r\n* 1 sproc 0 need core objects careerDetails\r\n* 2 sprocs 0 need core objects default\r\n* 1 sproc 0 need core objects searchcareers\r\n* Estimate 2h per sproc without core objects\r\n* Estimate 4h per sproc with core object\r\n* Total BED estimate 10 * 2 + 2 * 4 = 28h\r\n\r\nh2.TESTING TIPS\r\n* As the developer is coding each method they need to add Testing Tips to ensure the functionality matches production behavior.\r\n* We need to have test cases for each method introduced to ensure are no issues.\r\n',
                summary: 'Careers section move database calls to App Layer',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '108493',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/108493',
            key: 'LP-16125',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@6c786726[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@487a23b1[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@4cc26a63[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@68fa2dfd[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@47942693[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5e6af27b[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@1241aa7[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@38885abb[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@5e4e5387[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@57be9b1f[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@76ee526d[count=2,lastUpdated=2018-02-06T10:59:57.000-0800,lastUpdatedTimestamp=2018-02-06T10:59:57.000-08:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@f3ea8d4[count=2,name=FishEye / Crucible]}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@20372bec[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@3722a96[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":2,"lastUpdated":"2018-02-06T10:59:57.000-0800"},"byInstanceType":{"fecru":{"count":2,"name":"FishEye / Crucible"}}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24364',
                        id: '24364',
                        description: '',
                        name: '72',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-21'
                    }
                ],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: '2018-05-08T23:00:14.456-0700',
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: [],
                customfield_10587: null,
                timeestimate: 1800,
                aggregatetimeoriginalestimate: 7200,
                versions: [],
                issuelinks: [],
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jchan',
                    name: 'jchan',
                    key: 'jchan',
                    emailAddress: 'JChan@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=jchan&avatarId=17631',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=jchan&avatarId=17631',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=jchan&avatarId=17631',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=jchan&avatarId=17631'
                    },
                    displayName: 'Justin Chan',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10000',
                    description: 'Waiting for information from other department or another issue has been given higher priority',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/needinfo.png',
                    name: 'On Hold',
                    id: '10000',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/4',
                        id: 4,
                        key: 'indeterminate',
                        colorName: 'yellow',
                        name: 'In Progress'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10055', value: 'Back End', id: '10055' },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 1800,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jchan',
                    name: 'jchan',
                    key: 'jchan',
                    emailAddress: 'JChan@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=jchan&avatarId=17631',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=jchan&avatarId=17631',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=jchan&avatarId=17631',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=jchan&avatarId=17631'
                    },
                    displayName: 'Justin Chan',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '108494',
                        key: 'LP-16126',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/108494',
                        fields: {
                            summary: 'QA: Lamp Shade Browser - Remove Toggle Before Deployment',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10001',
                                description: 'The issue has been cancelled.',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/trash.png',
                                name: 'Cancelled',
                                id: '10001',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/3',
                                    id: 3,
                                    key: 'done',
                                    colorName: 'green',
                                    name: 'Done'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@546e10d9[id=367,rapidViewId=158,state=CLOSED,name=Shredders Kanban,startDate=2017-10-24T14:20:05.413-07:00,endDate=2017-11-07T14:20:00.000-08:00,completeDate=2018-03-02T11:44:50.402-08:00,sequence=367,goal=<null>]',
                    'com.atlassian.greenhopper.service.sprint.Sprint@57bf7114[id=448,rapidViewId=158,state=FUTURE,name=Shredders Sprint 6,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=448,goal=<null>]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: { name: 'The Shredders', self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=The+Shredders' },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jchan',
                    name: 'jchan',
                    key: 'jchan',
                    emailAddress: 'JChan@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=jchan&avatarId=17631',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=jchan&avatarId=17631',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=jchan&avatarId=17631',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=jchan&avatarId=17631'
                    },
                    displayName: 'Justin Chan',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|hztc5h:0xlf0o01oz00i',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 5400, total: 7200, percent: 75 },
                progress: { progress: 5400, total: 7200, percent: 75 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-16125/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/3',
                    id: '3',
                    description: 'A task that needs to be done.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                    name: 'Task',
                    subtask: false,
                    avatarId: 14148
                },
                customfield_11080: null,
                timespent: 5400,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=aalonso',
                    name: 'aalonso',
                    key: 'aalonso',
                    emailAddress: 'aalonso@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Alex Alonso',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 5400,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 75,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-16125/watchers', watchCount: 2, isWatching: false },
                customfield_10380: 'LP-14665',
                customfield_12680: 0,
                created: '2018-02-05T18:01:01.000-0800',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-08T11:07:52.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 7200,
                description:
                    'h2. Description:\r\nA toggle will be created for this feature. We will need to remove the toggle though before we enable this when the feature is deployed.\r\n\r\nh2. Notes:\r\n*_Toggle in Web.config_*\r\n<!-- LP Shade Browser -->\r\n<add key="EnableShadeBrowser" value="true"/>',
                summary: 'Lamp Shade Browser - Remove Toggle Before Deployment',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: null,
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: null,
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '75963',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/75963',
            key: 'LP-5935',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@22a7ff42[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7d60e723[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@734acfcc[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5590e204[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@48505a1b[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@32f3e5cd[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@176278f0[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@453028da[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@ffa22e5[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@228a735a[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@26ab3a03[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6219b0f4[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@3c2a4b58[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: ['Verified'],
                customfield_10587: null,
                timeestimate: null,
                aggregatetimeoriginalestimate: 3600,
                versions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24362',
                        id: '24362',
                        description: '',
                        name: '71',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-07'
                    }
                ],
                issuelinks: [
                    {
                        id: '51671',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/51671',
                        type: {
                            id: '10120',
                            name: 'Bonfire Testing',
                            inward: 'Testing discovered',
                            outward: 'Discovered while testing',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10120'
                        },
                        inwardIssue: {
                            id: '74043',
                            key: 'CPTWO-2163',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/74043',
                            fields: {
                                summary: '[LSUPPORT-842] : PacificCoastContractLighting.com Turn autocomplete="off" on Log In fields',
                                status: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/6',
                                    description: 'The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/closed.png',
                                    name: 'Closed',
                                    id: '6',
                                    statusCategory: {
                                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/3',
                                        id: 3,
                                        key: 'done',
                                        colorName: 'green',
                                        name: 'Done'
                                    }
                                },
                                priority: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/2',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/critical.svg',
                                    name: 'Urgent - Work on Immediately (Important)',
                                    id: '2'
                                },
                                issuetype: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/1',
                                    id: '1',
                                    description: 'A problem which impairs or prevents the functions of the product.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14133&avatarType=issuetype',
                                    name: 'Bug',
                                    subtask: false,
                                    avatarId: 14133
                                }
                            }
                        }
                    }
                ],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                    description: 'The issue is open and ready for the assignee to start work on it.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                    name: 'Open',
                    id: '1',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                        id: 2,
                        key: 'new',
                        colorName: 'blue-gray',
                        name: 'To Do'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: null,
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 2400,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=SJoshi',
                    name: 'SJoshi',
                    key: 'sjoshi',
                    emailAddress: 'SJoshi@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15155',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15155',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15155',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15155'
                    },
                    displayName: 'Swaraj Joshi',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '114367',
                        key: 'LP-18598',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/114367',
                        fields: {
                            summary: 'QA: autocomplete="off" not seen for Email field with id=txtEmailorRewards',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                                description: 'The issue is open and ready for the assignee to start work on it.',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                                name: 'Open',
                                id: '1',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                                    id: 2,
                                    key: 'new',
                                    colorName: 'blue-gray',
                                    name: 'To Do'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                                name: 'Not Prioritized',
                                id: '10100'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: null,
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=SJoshi',
                    name: 'SJoshi',
                    key: 'sjoshi',
                    emailAddress: 'SJoshi@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15155',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15155',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15155',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15155'
                    },
                    displayName: 'Swaraj Joshi',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i03g9b:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 1200, total: 3600, percent: 33 },
                progress: { progress: 0, total: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-5935/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/1',
                    id: '1',
                    description: 'A problem which impairs or prevents the functions of the product.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14133&avatarType=issuetype',
                    name: 'Bug',
                    subtask: false,
                    avatarId: 14133
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: null,
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 1200,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: -1,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-5935/watchers', watchCount: 1, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2016-06-21T00:14:58.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-10T04:21:07.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: null,
                description:
                    'h2.Description\r\nautocomplete="off" not seen for Email field with id=txtEmailorRewards\r\n\r\nh2.Roles and Browsers:\r\nChrome, IE 11\r\n\r\nh2.Steps to Reproduce\r\n1. Navigate to www.lampsplus.com\r\n2. Enter URL https://secure.lampsplus.com/secure/account/sign-in.aspx\r\n3. Now try login 2-3 times with valid credentials without saving your passwords for the site.\r\n4. Check that 2nd or 3rd time while logging autocomplete feature is shown or not\r\n\r\nh2.Actual Result\r\nAutocomplete feature is shown while logging in for 2nd or 3rd time only for Email field\r\n\r\nh2.Expected Result\r\nAutocomplete feature should not be shown while logging in for 2nd or 3rd time for Email field\r\nSame issue valid on Production',
                summary: 'LP:autocomplete="off" not seen for Email field with id=txtEmailorRewards',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: '2016-06-21',
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: '2016-06-21',
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '75214',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/75214',
            key: 'LP-5732',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@13dd79f2[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@77f36ba9[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@280a9c8f[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@127f405d[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@6a95a909[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@65729d1[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@7ac52370[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@12d0f9dd[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@55cac76f[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6a6c65a6[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@39e11538[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2c6a1dc8[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@2f184695[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":false}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: ['Verified'],
                customfield_10587: null,
                timeestimate: null,
                aggregatetimeoriginalestimate: 3600,
                versions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24362',
                        id: '24362',
                        description: '',
                        name: '71',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-07'
                    }
                ],
                issuelinks: [
                    {
                        id: '50231',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/50231',
                        type: {
                            id: '10120',
                            name: 'Bonfire Testing',
                            inward: 'Testing discovered',
                            outward: 'Discovered while testing',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10120'
                        },
                        outwardIssue: {
                            id: '73899',
                            key: 'CPTWO-1450',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/73899',
                            fields: {
                                summary: '[LP-5152] : Contact Phone Number as a configurable value Miscellaneous',
                                status: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/6',
                                    description: 'The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/closed.png',
                                    name: 'Closed',
                                    id: '6',
                                    statusCategory: {
                                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/3',
                                        id: 3,
                                        key: 'done',
                                        colorName: 'green',
                                        name: 'Done'
                                    }
                                },
                                priority: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/2',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/critical.svg',
                                    name: 'Urgent - Work on Immediately (Important)',
                                    id: '2'
                                },
                                issuetype: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/1',
                                    id: '1',
                                    description: 'A problem which impairs or prevents the functions of the product.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14133&avatarType=issuetype',
                                    name: 'Bug',
                                    subtask: false,
                                    avatarId: 14133
                                }
                            }
                        }
                    }
                ],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                    description: 'The issue is open and ready for the assignee to start work on it.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                    name: 'Open',
                    id: '1',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                        id: 2,
                        key: 'new',
                        colorName: 'blue-gray',
                        name: 'To Do'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: null,
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 1800,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=BSaha',
                    name: 'BSaha',
                    key: 'bsaha-',
                    emailAddress: 'BSaha@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Bishal Saha',
                    active: false,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '114370',
                        key: 'LP-18601',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/114370',
                        fields: {
                            summary: 'QA:LP-Contact number for professional user is not displayed on the e-mail templates.',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                                description: 'The issue is open and ready for the assignee to start work on it.',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                                name: 'Open',
                                id: '1',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                                    id: 2,
                                    key: 'new',
                                    colorName: 'blue-gray',
                                    name: 'To Do'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                                name: 'Not Prioritized',
                                id: '10100'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: null,
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=BSaha',
                    name: 'BSaha',
                    key: 'bsaha-',
                    emailAddress: 'BSaha@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Bishal Saha',
                    active: false,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i03bnb:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 1800, total: 3600, percent: 50 },
                progress: { progress: 0, total: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-5732/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/1',
                    id: '1',
                    description: 'A problem which impairs or prevents the functions of the product.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14133&avatarType=issuetype',
                    name: 'Bug',
                    subtask: false,
                    avatarId: 14133
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: null,
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 1800,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: -1,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-5732/watchers', watchCount: 3, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2016-06-06T04:42:56.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-10T06:04:15.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: null,
                description:
                    'h2.Description:\r\nContact number for professional user is not displayed on the e-mail templates.\r\nh2.Browser:\r\nIE11(PCSI)\r\nh2.Steps to reproduce:\r\n1.Navigate to any PDP\r\n2.Click on the email link.\r\n3.Fill the form and send the mail.\r\n4. add item to the room and e-mail the room to a friend.\r\n5. add item to Wishlist and e-mail the wishlist to a friend.\r\nh2.Actual Result:\r\nThe received email does not show professional contact number it shows the Guest Users default number (800-782-1967)\r\nh2.Expected Result:\r\nThe received e-mail should display Professional user contact number (800-304-8120)\r\nh2.Note:\r\nThis issue is valid on i.p-10.1.16.30 as well as on production. Please refer screenshot [Incorrect number|https://lampstrack.lampsplus.com:8443/secure/attachment/69369/1450_phn%20no.%20not%20displayed.png]',
                summary: 'LP:Contact number for professional user is not displayed on the e-mail templates.',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: '2016-06-06',
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: '2017-04-24',
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        },
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '75151',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/75151',
            key: 'LP-5706',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@3c3c3c5[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@17819fc4[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@2f9f6625[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@53ba0c7[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@18fb964e[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@31f552a[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@57e5a522[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@f001a81[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@4b8db4c9[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@32421e97[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@48747148[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@47afbed5[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@61226115[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [{ self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061', value: 'No', id: '10061' }],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [],
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: null,
                customfield_12480: null,
                customfield_10181: null,
                customfield_10060: 'true',
                customfield_10182: null,
                customfield_10580: null,
                customfield_12880: null,
                customfield_10581: null,
                customfield_12882: null,
                customfield_10582: null,
                customfield_10583: null,
                customfield_12881: null,
                priority: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10102',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                    name: 'High Priority',
                    id: '10102'
                },
                customfield_10980: null,
                customfield_10584: null,
                customfield_10585: null,
                customfield_10586: null,
                labels: ['Verified'],
                customfield_10587: null,
                timeestimate: null,
                aggregatetimeoriginalestimate: 5400,
                versions: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/version/24362',
                        id: '24362',
                        description: '',
                        name: '71',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-07'
                    }
                ],
                issuelinks: [
                    {
                        id: '50140',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/50140',
                        type: {
                            id: '10120',
                            name: 'Bonfire Testing',
                            inward: 'Testing discovered',
                            outward: 'Discovered while testing',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10120'
                        },
                        inwardIssue: {
                            id: '72406',
                            key: 'CPTWO-2057',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/72406',
                            fields: {
                                summary: '[INTMKTG-4682] : LP Sort Pages - Update Page Title Tag logic',
                                status: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/6',
                                    description: 'The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/closed.png',
                                    name: 'Closed',
                                    id: '6',
                                    statusCategory: {
                                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/3',
                                        id: 3,
                                        key: 'done',
                                        colorName: 'green',
                                        name: 'Done'
                                    }
                                },
                                priority: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/3',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/priorities/major.svg',
                                    name: 'Work on After Urgent Tasks (High Priority)',
                                    id: '3'
                                },
                                issuetype: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/1',
                                    id: '1',
                                    description: 'A problem which impairs or prevents the functions of the product.',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14133&avatarType=issuetype',
                                    name: 'Bug',
                                    subtask: false,
                                    avatarId: 14133
                                }
                            }
                        }
                    }
                ],
                assignee: null,
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                    description: 'The issue is open and ready for the assignee to start work on it.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                    name: 'Open',
                    id: '1',
                    statusCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                        id: 2,
                        key: 'new',
                        colorName: 'blue-gray',
                        name: 'To Do'
                    }
                },
                components: [],
                customfield_13280: null,
                customfield_11380: null,
                customfield_10050: null,
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 4200,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=SJoshi',
                    name: 'SJoshi',
                    key: 'sjoshi',
                    emailAddress: 'SJoshi@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15155',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15155',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15155',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15155'
                    },
                    displayName: 'Swaraj Joshi',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '114368',
                        key: 'LP-18599',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/114368',
                        fields: {
                            summary: 'QA: URL\'s listed in Carteasy.dbo.tblSearchLandingContent have title appended with | Lamps Plus',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/1',
                                description: 'The issue is open and ready for the assignee to start work on it.',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/open.png',
                                name: 'Open',
                                id: '1',
                                statusCategory: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/statuscategory/2',
                                    id: 2,
                                    key: 'new',
                                    colorName: 'blue-gray',
                                    name: 'To Do'
                                }
                            },
                            priority: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/priority/10100',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/attachment/113963/113963_notPrioritized.png',
                                name: 'Not Prioritized',
                                id: '10100'
                            },
                            issuetype: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: null,
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: null,
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=SJoshi',
                    name: 'SJoshi',
                    key: 'sjoshi',
                    emailAddress: 'SJoshi@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15155',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15155',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15155',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15155'
                    },
                    displayName: 'Swaraj Joshi',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i06noj:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 1200, total: 5400, percent: 22 },
                progress: { progress: 0, total: 0 },
                votes: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-5706/votes', votes: 0, hasVoted: false },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/1',
                    id: '1',
                    description: 'A problem which impairs or prevents the functions of the product.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14133&avatarType=issuetype',
                    name: 'Bug',
                    subtask: false,
                    avatarId: 14133
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: null,
                customfield_10031: null,
                project: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/project/10172',
                    id: '10172',
                    key: 'LP',
                    name: 'Lamps Plus',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Web Dev managed project and/or product',
                        name: 'Web Dev'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 1200,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: -1,
                watches: { self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-5706/watchers', watchCount: 1, isWatching: false },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2016-06-03T03:30:35.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-10T04:20:12.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: null,
                description:
                    'h2.Description\r\nURL\'s listed in Carteasy.dbo.tblSearchLandingContent have title appended with | Lamps Plus\r\n\r\nh2.Roles and Browsers\r\nALL\r\n\r\nSteps to Reproduce:\r\n1. Navigate to www.Lampsplus.com\r\n2. Take the different sort pages URL from tblSearchLandingContent \r\n3. Navigate to those URL\'s\r\n4. Check that the title of page is not appended with | Lamps Plus\r\neg: http://www.lampsplus.com/products/trend_global-mix/\r\n      http://www.lampsplus.com/products/bathroom-exhaust-fans/\r\n\r\nh2.Actual Result\r\nTitle tag or title of page is appended with " | Lamps Plus " at the end \r\n\r\nh2.Expected Result\r\nTitle tag or title of page should not be appended with " | Lamps Plus "at the end for all URL\'s listed in table  tblSearchLandingContent \r\n\r\n',
                summary: 'URL\'s listed in Carteasy.dbo.tblSearchLandingContent have title appended with | Lamps Plus',
                customfield_10080: '9223372036854775807',
                customfield_12380: null,
                customfield_10480: null,
                customfield_12783: '2016-06-03',
                customfield_10000: null,
                customfield_10880: null,
                customfield_12782: null,
                customfield_10001: null,
                customfield_12785: null,
                customfield_12784: '2017-08-14',
                customfield_12786: null,
                environment: null,
                duedate: null
            }
        }
    ]
};
