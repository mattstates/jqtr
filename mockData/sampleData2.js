// project in (LP) AND (fixVersion = 71 OR (affectedVersion in (70, 71) AND status in (Open, Reopened, Evaluating, "Requirements Review", "Clarification Needed") AND priority > "Low Priority")) AND status not in (Cancelled, Closed, Resolved, "Deployment - Testing", "Deployment - PPE", "Stakeholder Test", "Stakeholder Test - PPE", "Stakeholder Test - Prod")
export default {
    expand: 'schema,names',
    startAt: 0,
    maxResults: 1000,
    total: 24,
    issues: [
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113964',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113964',
            key: 'LP-18473',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@5b95c5ac[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7e9fe7dd[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@606d9ba[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4b3f43e3[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@3e72578d[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3fd2ee91[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@f293bd8[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3eb85185[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@125aa7e0[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3ad4655c[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@7ce56e25[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2d3c45[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@478ffe07[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '113775',
                    key: 'LP-18384',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113775',
                    fields: {
                        summary: 'LPv71 Release Management',
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
                },
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                timeestimate: 28800,
                aggregatetimeoriginalestimate: 28800,
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10055',
                    value: 'Back End',
                    id: '10055'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 28800,
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
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@4263b21c[id=444,rapidViewId=158,state=ACTIVE,name=Shredders Sprint 5,startDate=2018-04-30T00:01:00.000-07:00,endDate=2018-05-14T00:01:00.000-07:00,completeDate=<null>,sequence=444,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'The Shredders',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=The+Shredders'
                },
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
                customfield_10681: '1|i08ss7:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 28800, percent: 0 },
                progress: { progress: 0, total: 28800, percent: 0 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18473/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18473/watchers',
                    watchCount: 1,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-05-02T12:28:16.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T16:35:43.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 28800,
                description: null,
                summary: 'BED: LPv71 post deployment merges',
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
            id: '113901',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113901',
            key: 'LP-18441',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@4f90c3ea[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@759edf4c[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@a5b6bea[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2747afb1[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@6e81a720[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6d666103[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@3c33537e[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2693496e[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@45c8423b[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1bf85df8[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@3df6555a[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@112a3b3[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@6ccf030[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
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
                subtasks: [],
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
                customfield_10681: '1|i08sh0:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 0 },
                progress: { progress: 0, total: 0 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18441/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                workratio: -1,
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18441/watchers',
                    watchCount: 2,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-05-01T13:18:29.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T08:31:52.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: null,
                description:
                    'h2. STEPS TO REPRODUCE\r\n # While Store is in Session, submit an order\r\n # In the Order Confirmation Email, click <schedule an appointment> button\r\n !image-2018-05-01-12-42-33-324.png|thumbnail!\r\n\r\nh2. ACTUAL RESULT\r\n\r\n<schedule an appointment> button url is \r\n [https://secure.lampsplus.com/secure/stores/schedule-an-appointment.aspx?sn=20] \r\n and redirects to \r\n [https://www.lampsplus.com/stores/schedule-an-appointment.aspx?sn=20]\r\n\r\nBoth of these urls redirect to an error page \r\n !image-2018-05-01-13-06-28-528.png|thumbnail!\r\nh2. EXPECTED RESULT\r\n\r\nWhen a user clicks the \'Schedule an Appointment\' button in the email, they should be redirected to the stores page with the Request a Lighting Consultation modal open\r\n !image-2018-05-01-13-17-05-174.png|thumbnail!\r\n\r\nThis will need to be accomplished by creating a URL that will allow the Schedule and Installation modal to popup on a store page and then updating the URL in minisoft\r\n\r\nh2.Notes\r\n* This task may not be completed since traffic is so low\r\n  !screenshot-2.png|thumbnail! ',
                summary: 'Kiosk Order Confirmation Email: <schedule an appointment> button redirects to an error page',
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
            id: '113848',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113848',
            key: 'LP-18418',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@40e5bac6[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@349de69f[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@b2cb997[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5449bc29[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@39970fec[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6265af5f[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@c6b5285[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@15da0fd5[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@14338aed[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5be3c063[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@d4a5ee0[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@482b4c3b[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@40c7c331[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '109890',
                    key: 'LP-18232',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/109890',
                    fields: {
                        summary: 'Pseudo Sku Redesign',
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
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=hbaheta',
                    name: 'hbaheta',
                    key: 'hbaheta',
                    emailAddress: 'hbaheta@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=hbaheta&avatarId=12340',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=hbaheta&avatarId=12340',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=hbaheta&avatarId=12340',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=hbaheta&avatarId=12340'
                    },
                    displayName: 'Habtamu Baheta',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10055',
                    value: 'Back End',
                    id: '10055'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 3600,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=hbaheta',
                    name: 'hbaheta',
                    key: 'hbaheta',
                    emailAddress: 'hbaheta@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=hbaheta&avatarId=12340',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=hbaheta&avatarId=12340',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=hbaheta&avatarId=12340',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=hbaheta&avatarId=12340'
                    },
                    displayName: 'Habtamu Baheta',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@1532d73c[id=442,rapidViewId=160,state=ACTIVE,name=Lamps++ Sprint 35,startDate=2018-04-24T17:54:00.054-07:00,endDate=2018-05-08T17:54:00.000-07:00,completeDate=<null>,sequence=442,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'lampspp',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=lampspp'
                },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=hbaheta',
                    name: 'hbaheta',
                    key: 'hbaheta',
                    emailAddress: 'hbaheta@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=hbaheta&avatarId=12340',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=hbaheta&avatarId=12340',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=hbaheta&avatarId=12340',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=hbaheta&avatarId=12340'
                    },
                    displayName: 'Habtamu Baheta',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08s33:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 3600, percent: 0 },
                progress: { progress: 0, total: 3600, percent: 0 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18418/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18418/watchers',
                    watchCount: 1,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-30T13:07:12.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T11:25:39.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 3600,
                description: null,
                summary: 'BED: Pseudo Sku Redesign',
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
            id: '113789',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113789',
            key: 'LP-18390',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@4a667542[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@44a01452[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@65a6cb1b[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@37f3dfec[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@4e466035[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@a00ff2b[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@59ad0363[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7088ab05[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@d323ae9[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4665c3[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@3141d8b3[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4248d1d[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@185d0a02[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                timeestimate: 33000,
                aggregatetimeoriginalestimate: 72000,
                versions: [],
                issuelinks: [],
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=SGore',
                    name: 'SGore',
                    key: 'sgore',
                    emailAddress: 'SGore@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10143',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10143',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10143',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10143'
                    },
                    displayName: 'Sagar Gore',
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10271',
                    value: 'QA',
                    id: '10271'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 33000,
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
                    'com.atlassian.greenhopper.service.sprint.Sprint@4263b21c[id=444,rapidViewId=158,state=ACTIVE,name=Shredders Sprint 5,startDate=2018-04-30T00:01:00.000-07:00,endDate=2018-05-14T00:01:00.000-07:00,completeDate=<null>,sequence=444,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'The Shredders',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=The+Shredders'
                },
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
                customfield_10681: '1|i08rqn:',
                customfield_10682: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=SGore',
                        name: 'SGore',
                        key: 'sgore',
                        emailAddress: 'SGore@lampsplus.com',
                        avatarUrls: {
                            '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10143',
                            '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10143',
                            '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10143',
                            '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10143'
                        },
                        displayName: 'Sagar Gore',
                        active: true,
                        timeZone: 'America/Los_Angeles'
                    },
                    {
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
                    }
                ],
                customfield_12980: null,
                aggregateprogress: { progress: 39000, total: 72000, percent: 54 },
                progress: { progress: 39000, total: 72000, percent: 54 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18390/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                timespent: 39000,
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
                aggregatetimespent: 39000,
                customfield_11882: 2,
                resolutiondate: null,
                workratio: 54,
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18390/watchers',
                    watchCount: 2,
                    isWatching: false
                },
                customfield_10380: 'LP-14665',
                customfield_12680: 0,
                created: '2018-04-27T16:09:58.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T11:03:23.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 72000,
                description:
                    'See EPIC for requirements.\r\n\r\nAll QA issues should be reported as part of this task.\r\n\r\n*-------------------------------------------------------------------------------------------------------------------------------------------------------*\r\nh2. Issue1: {color:#ff0000}Not Valid - Since line is drawn on screen by default and does not have to be drawn maually, Preview button should is ok.  {color}\r\nh2. Description\r\n\r\n"PREVIEW" button is enabled by default.\r\nh2. Browser:\r\n\r\nChrome on Android (Customer Signed In)\r\n Safari on iPhone (User not Signed In)\r\nh2. Steps To Reproduce:\r\n\r\n1.Navigate to [https://www.lampsplus.com/shadeBrowser/?sku=2N799] \r\n 2.Click on GET STARTED button.\r\n 3.Click on GET YOUR PHOTO.\r\n 4.Select any image from the mobile storage or take a new picture from a camera.\r\n 5.Click on PROCEED button\r\n 6.Enter Base Height in a text box (Eg. 17)\r\n 7.Click on NEXT button.\r\n 8.Observe The PREVIEW button.\r\nh2. Actual Result:\r\n\r\n"PREVIEW" button is enabled by default.\r\n Please refer screenshot: [^ISSUE1.PNG]\r\nh2. Expected Result:\r\n\r\n"PREVIEW" button should be disabled by default.\r\n\r\n*------------------------------------------------------------------------------------------------------------------------------------------------------*\r\nh2. Issue 2: — {color:#14892c}Resolved{color}\r\nh2. Description\r\n\r\nBase height textbox accepts negative values\r\nh2. Roles and Browsers:\r\n\r\nUser not Signed In ( Safari - iPhone 7+ )\r\n Customer Signed In ( Chrome - Android )\r\nh2. Steps to Reproduce:\r\n\r\n1.Navigate to [https://www.lampsplus.com/shadeBrowser/?sku=2N799]\r\n 2.Click on GET STARTED button.\r\n 3.Click on GET YOUR PHOTO.\r\n 4.Select any image from the mobile storage or take a new picture from a camera.\r\n 5.Click on PROCEED button\r\n 6.Enter Base Height in a text box (Eg. -75)\r\n 7. tap on NEXT button\r\n 8. click on PREVIEW button\r\nh2. Actual Result:\r\n\r\nBase height textbox accepts negative value and same is seen to be reflected when user clicks preview button\r\n Please refer attached screenshot:\r\n [^ISSUE2.1.PNG]\r\n [^ISSUE2.2.PNG]\r\nh2. Actual Result:\r\n\r\nBase height textbox should not accept negative value\r\n\r\n-------------------------------------------------------------------------------------------------------------------------------------------------------------\r\nh2. Issue 3: ---- {color:#14892c}Resolved{color}\r\nh2. Description\r\n\r\nuser is able to enter special characters or alphanumeric characters in Base Height text box and quantity text box for add to cart button / add to wishlist button\r\nh2. Roles and Browsers:\r\n\r\nUser not Signed In ( Safari - iPhone 7+ )\r\n Customer Signed In ( Chrome - Android )\r\nh2. Steps to Reproduce:\r\n\r\nScenario 1:\r\nh2. Steps to Reproduce:\r\n\r\n1.Navigate to [https://www.lampsplus.com/shadeBrowser/?sku=2N799]\r\n 2.Click on GET STARTED button.\r\n 3.Click on GET YOUR PHOTO.\r\n 4.Select any image from the mobile storage or take a new picture from a camera.\r\n 5.Click on PROCEED button\r\n 6.Enter Base Height in a text box (Eg. abc@&9)\r\nh2. Actual Result:\r\n\r\nUser is able to enter alphanumeric and special characters in the base height textbox field.\r\n Please refer attached screenshot:\r\n [^issue 3.1.PNG]\r\n\r\nScenario 2:\r\n 1.Navigate to [https://www.lampsplus.com/shadeBrowser/?sku=2N799]\r\n 2.Click on GET STARTED button.\r\n 3.Click on GET YOUR PHOTO.\r\n 4.Select any image from the mobile storage or take a new picture from a camera.\r\n 5.Click on PROCEED button\r\n 6.Enter Base Height in a text box (Eg. 15)\r\n 7. tap on NEXT button\r\n 8. click on PREVIEW button\r\n 9. Enter value in quantity textbox ( eg - abc#%$1 )\r\nh2. Actual Result:\r\n\r\nUser is able to enter alphanumeric and special characters in the base height textbox field\r\n Please refer attached screenshot:\r\n [^Issue 3.2.PNG]\r\nh2. Expected Result:\r\n\r\nTextbox for base height and Add to cart/Add to wishlist should only accept numeric values ( user should not be able to enter alphanumeric or special characters )\r\n\r\n-----------------------------------------------------------------------------------------------------------------------------------------------------------------\r\nh2. Issue 4:  ---- {color:#14892c}Resolved{color}\r\nh2. Description:\r\n\r\nChange photo link doesn\'t work correctly and navigates user to same page\r\nh2. Roles and Browsers:\r\n\r\nUser not Signed In ( Safari - iPhone 7+ )\r\n Customer Signed In ( Chrome - Android )\r\nh2. Steps to Reproduce:\r\n\r\n1.Navigate to [https://www.lampsplus.com/shadeBrowser/?sku=2N799]\r\n 2.Click on GET STARTED button.\r\n 3.Click on GET YOUR PHOTO.\r\n 4.Select any image from the mobile storage or take a new picture from a camera.\r\n 5.Click on PROCEED button\r\n 6. Click on Change Photo link\r\nh2. Actual Result:\r\n\r\nOn clicking Change Photo link user is re-directed to same page\r\n Please refer attached screenshot:\r\n [^Issue 4.PNG]\r\nh2. Expected Result:\r\n\r\nOn clicking Change Photo link user should be able to select new photo for upload\r\n\r\n---------------------------------------------------------------------------------------------------------------------------------------------------------------\r\nh2. Issue 5: --- {color:#14892c}Resolved{color}\r\nh2. Description:\r\n\r\nSpelling of SMART is misspelled for desktop site\r\nh2. Roles and Browsers:\r\n\r\nUser not Signed In ( Chrome )\r\nh2. Steps to Reproduce:\r\n\r\n1. Navigate to [https://www.lampsplus.com/shadeBrowser/?sku=02825]\r\n 2. Observe the Test displayed\r\nh2. Actual Result:\r\n\r\nSpelling of SMART is misspelled as SMARY for desktop site\r\n Please refer attached screenshot: [^Issue 5.png]\r\nh2. Expected Result:\r\n\r\nBelow text should be displayed for desktop site on navigating to above mentioned URL\r\n "Optimized for Mobile Phones\r\n PLEASE ACCESS THIS PAGE FROM YOUR SMART PHONE"\r\n\r\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\r\nh2. Issue 6:  ---- {color:#14892c}Resolved{color}\r\nh2. Description\r\n\r\nClose button is displayed instead of Cancel button.\r\nh2. Roles and Browser:\r\n\r\nChrome on Android (Customer Signed In)\r\n Safari on iPhone (User not Signed In)\r\nh2. Steps To Reproduce:\r\n\r\n1.Navigate to [https://www.lampsplus.com/shadeBrowser/?sku=2N799]\r\n 2.Click on GET STARTED button.\r\n 3.Click on GET YOUR PHOTO.\r\n 4.Select any image from the mobile storage or take a new picture from a camera.\r\n 5.Click on PROCEED button\r\n 6.Click on Back to Product link\r\n 7.Observe the Pop up\r\nh2. Actual Result:\r\n\r\nClose button is displayed.\r\n Please refer attached screenshot: [^Issue 6.PNG]\r\nh2. Expected Result:\r\n\r\nAs per the mock-up(11-sliding-alert.jpg) Cancel button should be displayed on the pop up\r\n *----------------------------------------------------------------------------------------------------------------------------------------------------------------*\r\nh2. Issue 7: {color:#FF0000}Not Valid - Per Alex, this is fine. Line does not need to be centered. Mockup is "centered" because mockup is as if user has already positioned line and about to click Preview.{color}\r\nh2. Description\r\n\r\nA red line is displayed at left side of canvas.\r\nh2. Roles and Browser:\r\n\r\nChrome on Android (Customer Signed In)\r\n Safari on iPhone (User not Signed In)\r\nh2. Steps To Reproduce:\r\n\r\n1.Navigate to [https://www.lampsplus.com/shadeBrowser/?sku=2N799]\r\n 2.Click on GET STARTED button.\r\n 3.Click on GET YOUR PHOTO.\r\n 4.Select any image from the mobile storage or take a new picture from a camera.\r\n 5.Click on PROCEED button\r\n 6.Enter Base Height in a text box (Eg. 15)\r\n 7. tap on NEXT button\r\n 8.Observe the red line position over the canvas.\r\nh2. Actual Result:\r\n\r\na red line is displayed at left side of canvas.\r\n Please refer screenshot: [^Issue7.PNG]\r\nh2. Expected Result:\r\n\r\nA red line (default length) should be displayed centered over the canvas.',
                summary: 'QA: Lamp Shade Browser (mobile)',
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
            id: '113779',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113779',
            key: 'LP-18388',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@35d0440[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@37a60806[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@486d8c07[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2e1648c5[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@45023643[failedBuildCount=0,successfulBuildCount=2,unknownBuildCount=0,count=2,lastUpdated=2018-05-04T17:00:18.753-0700,lastUpdatedTimestamp=2018-05-04T17:00:18.753-07:00],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@3bf0b8ed[count=2,name=Bamboo]}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@664a4122[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@7a866d4e[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2e62fc73[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@73da946a[topEnvironments=[{projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621, project=LPv71, id=110100518, position=1, title=LP_PPE_B, projectId=110788621, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622, project=LPv71AppLayer, id=110100521, position=1, title=LPAPP_PPE_B, projectId=110788622, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100521, status=DEPLOYED}],showProjects=true,successfulCount=2,count=6,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@7dfba538[count=6,name=Bamboo]}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@e8861d4[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@37308512[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@106e3e5a[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@3bab5abd[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":2,"lastUpdated":"2018-05-04T17:00:18.753-0700","failedBuildCount":0,"successfulBuildCount":2,"unknownBuildCount":0},"byInstanceType":{"bamboo":{"count":2,"name":"Bamboo"}}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":6,"lastUpdated":null,"topEnvironments":[{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621","project":"LPv71","id":110100518,"position":1,"title":"LP_PPE_B","projectId":110788621,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622","project":"LPv71AppLayer","id":110100521,"position":1,"title":"LPAPP_PPE_B","projectId":110788622,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100521","status":"DEPLOYED"}],"showProjects":true,"successfulCount":2},"byInstanceType":{"bamboo":{"count":6,"name":"Bamboo"}}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '113775',
                    key: 'LP-18384',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113775',
                    fields: {
                        summary: 'LPv71 Release Management',
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
                },
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                aggregatetimeoriginalestimate: 3600,
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
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10024',
                    description: '',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'QA on PPE',
                    id: '10024',
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10054',
                    value: 'Front End',
                    id: '10054'
                },
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
                    'com.atlassian.greenhopper.service.sprint.Sprint@4263b21c[id=444,rapidViewId=158,state=ACTIVE,name=Shredders Sprint 5,startDate=2018-04-30T00:01:00.000-07:00,endDate=2018-05-14T00:01:00.000-07:00,completeDate=<null>,sequence=444,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'The Shredders',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=The+Shredders'
                },
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
                customfield_10681: '1|i08rof:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 900, total: 900, percent: 100 },
                progress: { progress: 900, total: 900, percent: 100 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18388/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                timespent: 900,
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
                aggregatetimespent: 900,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 25,
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18388/watchers',
                    watchCount: 1,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-27T15:43:41.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T16:12:14.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 3600,
                description:
                    'Hello,\r\n\r\n \r\n\r\nFor the release of LPv69, concerning cache of .html files on the user end, the solution we have since LPv68 is to increment a query string value that is part of the URL of all .html template files.\r\n\r\n \r\n\r\nIn \\Scripts\\plugins\\backbone\\marionette.handlebars-1.0.0.js update the value of the var at the top labelled RESOURCE_VERSION to a number greater than what is currently in production. This can be done at any time in release branch, but it’s best to do it later, to prevent any (though unlikely) case where a HotFix task were to increment this value ahead of release.\r\n\r\n \r\n\r\nTo verify the value has been updated, check the network panel on a web app, like Cart Overview and you should see .html files requested with a query string key “v” equal to the resource version. When compared with prod, the number in the release candidate should be greater than the number in prod.\r\n\r\n \r\n\r\nDev teams have been assigned tasks that provide these tempaltes via MVC Bundling instead of direct GET request on-demand, and one of the features of utilizing bundling in this way, is that they will be less resistant to stale-caching on the client side.\r\n\r\n \r\n\r\nThank you,\r\n\r\nTyler',
                summary: 'FED: Verify the Cache Version for Handlebars Templates',
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
            id: '113778',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113778',
            key: 'LP-18387',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@4ad64165[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@436add8a[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@7e4541ee[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@40fb9e04[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@38de3217[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2dcd3e0b[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@79d3506d[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@65c4faed[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@2c4322c8[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@68ba7c2d[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@b89096f[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@49589961[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@7c38a7e0[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '113775',
                    key: 'LP-18384',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113775',
                    fields: {
                        summary: 'LPv71 Release Management',
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
                },
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                timeestimate: 2700,
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10055',
                    value: 'Back End',
                    id: '10055'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 2700,
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
                    'com.atlassian.greenhopper.service.sprint.Sprint@4263b21c[id=444,rapidViewId=158,state=ACTIVE,name=Shredders Sprint 5,startDate=2018-04-30T00:01:00.000-07:00,endDate=2018-05-14T00:01:00.000-07:00,completeDate=<null>,sequence=444,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'The Shredders',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=The+Shredders'
                },
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
                customfield_10681: '1|i08ro7:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 900, total: 3600, percent: 25 },
                progress: { progress: 900, total: 3600, percent: 25 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18387/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                timespent: 900,
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
                aggregatetimespent: 900,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 25,
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18387/watchers',
                    watchCount: 1,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-27T15:43:40.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T15:44:24.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 3600,
                description: null,
                summary: 'BED: LPv71 Config Comparison',
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
            id: '113777',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113777',
            key: 'LP-18386',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@7e785abc[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@24b1e5fc[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@17644b0a[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5e892ddc[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@6298310b[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@49adb6a1[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@7ca49885[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6b54bd00[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@4867c908[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6c5b661b[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@3463bba5[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7a11bc94[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@c480557[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '113775',
                    key: 'LP-18384',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113775',
                    fields: {
                        summary: 'LPv71 Release Management',
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
                },
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10055',
                    value: 'Back End',
                    id: '10055'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 14400,
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
                    'com.atlassian.greenhopper.service.sprint.Sprint@4263b21c[id=444,rapidViewId=158,state=ACTIVE,name=Shredders Sprint 5,startDate=2018-04-30T00:01:00.000-07:00,endDate=2018-05-14T00:01:00.000-07:00,completeDate=<null>,sequence=444,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'The Shredders',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=The+Shredders'
                },
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
                customfield_10681: '1|i08rnz:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 14400, percent: 0 },
                progress: { progress: 0, total: 14400, percent: 0 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18386/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18386/watchers',
                    watchCount: 1,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-27T15:43:38.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-02T12:36:50.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 14400,
                description: null,
                summary: 'BED: LPv71 Monitoring Logs (ELMAH, New Relic, Solar Winds)',
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
            id: '113776',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113776',
            key: 'LP-18385',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@26f940f9[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@33434773[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@7594697f[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3f521e0e[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@53c07f95[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7a11c241[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@2c1883ed[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3955a0e[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@5379a13e[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@278e62da[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@4fe19a2d[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@668decf5[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@7863d14b[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '113775',
                    key: 'LP-18384',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113775',
                    fields: {
                        summary: 'LPv71 Release Management',
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
                },
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                timeestimate: 5400,
                aggregatetimeoriginalestimate: 7200,
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10055',
                    value: 'Back End',
                    id: '10055'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 5400,
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
                    'com.atlassian.greenhopper.service.sprint.Sprint@4263b21c[id=444,rapidViewId=158,state=ACTIVE,name=Shredders Sprint 5,startDate=2018-04-30T00:01:00.000-07:00,endDate=2018-05-14T00:01:00.000-07:00,completeDate=<null>,sequence=444,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'The Shredders',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=The+Shredders'
                },
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
                customfield_10681: '1|i08rnr:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 1800, total: 7200, percent: 25 },
                progress: { progress: 1800, total: 7200, percent: 25 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18385/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                timespent: 1800,
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
                workratio: 25,
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18385/watchers',
                    watchCount: 1,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-27T15:43:37.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T15:44:11.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 7200,
                description: null,
                summary: 'BED: LPv71 Master Script Review',
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
            id: '113775',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113775',
            key: 'LP-18384',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@1b88bed0[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2859fa0d[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@3bbdef9f[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@601c3817[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@3e3c64fa[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@59d268a2[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@dc7a510[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@c1af83f[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@515c56f2[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1b81b303[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@2b5e7a46[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@705ea412[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@4306972d[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                aggregatetimeoriginalestimate: 57600,
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10271',
                    value: 'QA',
                    id: '10271'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 51300,
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
                subtasks: [
                    {
                        id: '113776',
                        key: 'LP-18385',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113776',
                        fields: {
                            summary: 'BED: LPv71 Master Script Review',
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
                        id: '113777',
                        key: 'LP-18386',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113777',
                        fields: {
                            summary: 'BED: LPv71 Monitoring Logs (ELMAH, New Relic, Solar Winds)',
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
                        id: '113778',
                        key: 'LP-18387',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113778',
                        fields: {
                            summary: 'BED: LPv71 Config Comparison',
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
                        id: '113779',
                        key: 'LP-18388',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113779',
                        fields: {
                            summary: 'FED: Verify the Cache Version for Handlebars Templates',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10024',
                                description: '',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                                name: 'QA on PPE',
                                id: '10024',
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
                        id: '113964',
                        key: 'LP-18473',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113964',
                        fields: {
                            summary: 'BED: LPv71 post deployment merges',
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
                    'com.atlassian.greenhopper.service.sprint.Sprint@4263b21c[id=444,rapidViewId=158,state=ACTIVE,name=Shredders Sprint 5,startDate=2018-04-30T00:01:00.000-07:00,endDate=2018-05-14T00:01:00.000-07:00,completeDate=<null>,sequence=444,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'The Shredders',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=The+Shredders'
                },
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
                customfield_10681: '1|i08rnj:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 3600, total: 54900, percent: 6 },
                progress: { progress: 0, total: 0 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18384/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 0,
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18384/watchers',
                    watchCount: 1,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-27T15:43:35.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-02T16:24:27.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 0,
                description: null,
                summary: 'LPv71 Release Management',
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
            id: '113642',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113642',
            key: 'LP-18320',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@76186b0[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@66e52395[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@13103726[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4bbb09b9[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@40e45278[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@f52287a[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@1de987b1[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@e8cb374[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@6c99474f[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7216b35e[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@239366a2[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@486f66b7[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@6eeae3ca[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '113598',
                    key: 'LP-18291',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113598',
                    fields: {
                        summary: 'Order Confirmation Page Bleeding Across CSR Sessions',
                        status: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10024',
                            description: '',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                            name: 'QA on PPE',
                            id: '10024',
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
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10271',
                    value: 'QA',
                    id: '10271'
                },
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
                subtasks: [],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@1532d73c[id=442,rapidViewId=160,state=ACTIVE,name=Lamps++ Sprint 35,startDate=2018-04-24T17:54:00.054-07:00,endDate=2018-05-08T17:54:00.000-07:00,completeDate=<null>,sequence=442,goal=]'
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
                customfield_10681: '1|i08qv3:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 7200, percent: 0 },
                progress: { progress: 0, total: 7200, percent: 0 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18320/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18320/watchers',
                    watchCount: 1,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-26T12:03:20.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-04-30T18:56:34.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 7200,
                description: null,
                summary: 'QA: Order Confirmation Page Bleeding Across CSR Sessions',
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
            id: '113598',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113598',
            key: 'LP-18291',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@57b619ea[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3c5d0cde[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@30bec1da[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@215c5a78[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@46c27ef0[failedBuildCount=0,successfulBuildCount=2,unknownBuildCount=0,count=2,lastUpdated=2018-05-04T17:00:18.753-0700,lastUpdatedTimestamp=2018-05-04T17:00:18.753-07:00],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@3bff7fab[count=2,name=Bamboo]}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@54db0284[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@17170dfd[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4277d411[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@3d2d88b4[topEnvironments=[{projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621, project=LPv71, id=110100518, position=1, title=LP_PPE_B, projectId=110788621, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622, project=LPv71AppLayer, id=110100521, position=1, title=LPAPP_PPE_B, projectId=110788622, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100521, status=DEPLOYED}],showProjects=true,successfulCount=2,count=6,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@77aa1706[count=6,name=Bamboo]}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1eb9f992[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@62127108[count=2,lastUpdated=2018-05-04T16:25:26.000-0700,lastUpdatedTimestamp=2018-05-04T16:25:26.000-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@2c626d44[count=2,name=FishEye / Crucible]}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@71921ade[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@20360817[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":2,"lastUpdated":"2018-05-04T17:00:18.753-0700","failedBuildCount":0,"successfulBuildCount":2,"unknownBuildCount":0},"byInstanceType":{"bamboo":{"count":2,"name":"Bamboo"}}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":6,"lastUpdated":null,"topEnvironments":[{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621","project":"LPv71","id":110100518,"position":1,"title":"LP_PPE_B","projectId":110788621,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622","project":"LPv71AppLayer","id":110100521,"position":1,"title":"LPAPP_PPE_B","projectId":110788622,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100521","status":"DEPLOYED"}],"showProjects":true,"successfulCount":2},"byInstanceType":{"bamboo":{"count":6,"name":"Bamboo"}}},"repository":{"overall":{"count":2,"lastUpdated":"2018-05-04T16:25:26.000-0700"},"byInstanceType":{"fecru":{"count":2,"name":"FishEye / Crucible"}}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                aggregatetimeoriginalestimate: 21600,
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
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10024',
                    description: '',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'QA on PPE',
                    id: '10024',
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
                aggregatetimeestimate: 7200,
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
                        id: '113642',
                        key: 'LP-18320',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113642',
                        fields: {
                            summary: 'QA: Order Confirmation Page Bleeding Across CSR Sessions',
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
                    'com.atlassian.greenhopper.service.sprint.Sprint@1532d73c[id=442,rapidViewId=160,state=ACTIVE,name=Lamps++ Sprint 35,startDate=2018-04-24T17:54:00.054-07:00,endDate=2018-05-08T17:54:00.000-07:00,completeDate=<null>,sequence=442,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'lampspp',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=lampspp'
                },
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
                customfield_10681: '1|hztc1s:0q89214',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 32400, total: 39600, percent: 81 },
                progress: { progress: 32400, total: 32400, percent: 100 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18291/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                timespent: 32400,
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
                customfield_10032: '8h',
                aggregatetimespent: 32400,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 225,
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18291/watchers',
                    watchCount: 1,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-26T01:07:06.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T16:49:16.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 14400,
                description:
                    'h2. Environments\r\n* LPv69\r\n* LPv70\r\n\r\nh2.STEPS TO REPRODUCE \r\nh5.Scenario 1\r\n# sign in as employee\r\n# in Session 1, place order and do not close session\r\n# in Session 2, place order and do not close session\r\n# in Session 1, place another order\r\n# select Session 2\r\n\r\nh5.Scenario 2\r\n# sign in as employee\r\n# in Session 1, place order and do not close session\r\n# once placed an order visit any other(open or new) session and paste this url https://www.lampsplus.com/cart/order-confirmation/\r\n\r\nh5.Scenario 3\r\n# sign in as employee\r\n# in Session 1, place order and do not close session\r\n# in Session 2, place order and do not close session\r\n# select Session 1\r\n\r\nh2.ACTUAL RESULT\r\nThe latest Order Confirmation page is displayed in the Session in focus (both sessions)\r\n* Order Confirmation pages are bleeding across sessions\r\n !Session_Issue_OC.png|thumbnail! \r\n\r\nh2.EXPECTED RESULT\r\n# Each session will be standalone - display the appropriate page for that session, either:\r\n#* The Order Confirmation page from that session\r\n#* An expired Order Confirmation page\r\n#* The Homepage\r\n\r\nh2.NOTE\r\n* [~hbaheta] provided the following lead for the potential underlying issue\r\n !screenshot-1.png|thumbnail! ',
                summary: 'Order Confirmation Page Bleeding Across CSR Sessions',
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
            id: '113550',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113550',
            key: 'LP-18272',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@583b87e9[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@737e1b8[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@315d0f66[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1784867d[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@13045fab[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2b864652[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@72f94a7b[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@41fd8d37[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@70357ba4[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@69181726[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@518a32ec[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7cb389df[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@278035b6[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '110455',
                    key: 'LP-16760',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/110455',
                    fields: {
                        summary: 'Remove Reviews and SECURE/Reviews as they are no longer used',
                        status: {
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10024',
                            description: '',
                            iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                            name: 'QA on PPE',
                            id: '10024',
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
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10024',
                    description: '',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'QA on PPE',
                    id: '10024',
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10271',
                    value: 'QA',
                    id: '10271'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 7200,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=nidhi',
                    name: 'nidhi',
                    key: 'nidhi',
                    emailAddress: 'NSachdeva@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=nidhi&avatarId=14441',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=nidhi&avatarId=14441',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=nidhi&avatarId=14441',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=nidhi&avatarId=14441'
                    },
                    displayName: 'Nidhi Sachdeva',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@36d795a7[id=434,rapidViewId=159,state=ACTIVE,name=Team FVN Sprint 10,startDate=2018-04-25T11:40:55.251-07:00,endDate=2018-05-09T11:40:00.000-07:00,completeDate=<null>,sequence=434,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'Team FVN',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=Team+FVN'
                },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=nidhi',
                    name: 'nidhi',
                    key: 'nidhi',
                    emailAddress: 'NSachdeva@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=nidhi&avatarId=14441',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=nidhi&avatarId=14441',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=nidhi&avatarId=14441',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=nidhi&avatarId=14441'
                    },
                    displayName: 'Nidhi Sachdeva',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08qb3:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 7200, percent: 0 },
                progress: { progress: 0, total: 7200, percent: 0 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18272/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18272/watchers',
                    watchCount: 1,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-25T11:30:12.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T13:51:59.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 7200,
                description: null,
                summary: 'QA: Remove Reviews and SECURE/Reviews as they are no longer used',
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
            id: '113482',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113482',
            key: 'LP-18235',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@51efb65c[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@546333e0[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@4d5f61aa[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@39de8a7f[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@152f964e[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@581e5b38[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@6efa23a0[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@233ad172[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@4aceaebd[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6023fb47[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@5f7b33c0[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2a3fd81c[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@15bb20a0[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '109890',
                    key: 'LP-18232',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/109890',
                    fields: {
                        summary: 'Pseudo Sku Redesign',
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
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                labels: [],
                customfield_10587: null,
                timeestimate: 0,
                aggregatetimeoriginalestimate: 0,
                versions: [],
                issuelinks: [],
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=hbaheta',
                    name: 'hbaheta',
                    key: 'hbaheta',
                    emailAddress: 'hbaheta@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=hbaheta&avatarId=12340',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=hbaheta&avatarId=12340',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=hbaheta&avatarId=12340',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=hbaheta&avatarId=12340'
                    },
                    displayName: 'Habtamu Baheta',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10052',
                    value: 'Admin',
                    id: '10052'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 0,
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
                subtasks: [],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@1532d73c[id=442,rapidViewId=160,state=ACTIVE,name=Lamps++ Sprint 35,startDate=2018-04-24T17:54:00.054-07:00,endDate=2018-05-08T17:54:00.000-07:00,completeDate=<null>,sequence=442,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'lampspp',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=lampspp'
                },
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
                customfield_10681: '1|i08pwf:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 0 },
                progress: { progress: 0, total: 0 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18235/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18235/watchers',
                    watchCount: 3,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-24T10:41:34.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T19:18:36.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 0,
                description: 'Upload Pseudo-Skus ptifs PTIFs for Scene7\r\nFiles location:  \\\\lpwebdev64\\mike\\Pseudo-Skus',
                summary: 'Upload Pseudo-Sku PTIFs files for Scene7',
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
            id: '113479',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113479',
            key: 'LP-18233',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@6ed34437[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@57df673e[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@79c62071[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7f3aba1f[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@b3cbb33[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2776dbfd[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@6ffbb2ca[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@45bb1768[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@2b30c9cf[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3a084667[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@8d7ce0e[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@15ca882b[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@389955ec[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '109890',
                    key: 'LP-18232',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/109890',
                    fields: {
                        summary: 'Pseudo Sku Redesign',
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
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                labels: [],
                customfield_10587: null,
                timeestimate: 10800,
                aggregatetimeoriginalestimate: 10800,
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10271',
                    value: 'QA',
                    id: '10271'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 10800,
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
                subtasks: [],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@1532d73c[id=442,rapidViewId=160,state=ACTIVE,name=Lamps++ Sprint 35,startDate=2018-04-24T17:54:00.054-07:00,endDate=2018-05-08T17:54:00.000-07:00,completeDate=<null>,sequence=442,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'lampspp',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=lampspp'
                },
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
                customfield_10681: '1|i08pvr:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 10800, percent: 0 },
                progress: { progress: 0, total: 10800, percent: 0 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18233/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18233/watchers',
                    watchCount: 1,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-24T10:35:32.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-03T12:50:50.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 10800,
                description: null,
                summary: 'QA: Pseudo Sku Redesign',
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
            id: '109890',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/109890',
            key: 'LP-18232',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@16d9d119[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@44e4d36a[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@4b672ba4[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@265ec0b0[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@7ed79c7b[failedBuildCount=0,successfulBuildCount=3,unknownBuildCount=0,count=3,lastUpdated=2018-05-04T19:14:51.500-0700,lastUpdatedTimestamp=2018-05-04T19:14:51.500-07:00],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@60bf2d15[count=3,name=Bamboo]}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6e025d7e[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@3e095b4e[stateCount=1,state=REVIEW,dueDate=<null>,overDue=false,count=1,lastUpdated=2018-04-27T14:20:56.046-0700,lastUpdatedTimestamp=2018-04-27T14:20:56.046-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@30563dac[count=1,name=FishEye / Crucible]}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3300ac48[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@4f15eefb[topEnvironments=[{projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621, project=LPv71, id=110100518, position=1, title=LP_PPE_B, projectId=110788621, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622, project=LPv71AppLayer, id=110100521, position=1, title=LPAPP_PPE_B, projectId=110788622, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100521, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=117997621, project=PSSvLP-18232, id=118063163, position=1, title=LPPSS_PPE_D, projectId=117997621, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=118063163, status=DEPLOYED}],showProjects=true,successfulCount=3,count=9,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@5866f9bc[count=9,name=Bamboo]}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3eadae16[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@8f93767[count=5,lastUpdated=2018-05-04T19:12:19.000-0700,lastUpdatedTimestamp=2018-05-04T19:12:19.000-07:00],byInstanceType={stash=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@ef0a04d[count=1,name=Bitbucket Server], fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@193ae65b[count=5,name=FishEye / Crucible]}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@10170252[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@51145d38[count=4,lastUpdated=2018-05-04T19:13:59.993-0700,lastUpdatedTimestamp=2018-05-04T19:13:59.993-07:00],byInstanceType={stash=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@779b6aa3[count=2,name=Bitbucket Server], fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@3555178e[count=2,name=FishEye / Crucible]}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":3,"lastUpdated":"2018-05-04T19:14:51.500-0700","failedBuildCount":0,"successfulBuildCount":3,"unknownBuildCount":0},"byInstanceType":{"bamboo":{"count":3,"name":"Bamboo"}}},"review":{"overall":{"count":1,"lastUpdated":"2018-04-27T14:20:56.046-0700","stateCount":1,"state":"REVIEW","dueDate":null,"overDue":false,"completed":false},"byInstanceType":{"fecru":{"count":1,"name":"FishEye / Crucible"}}},"deployment-environment":{"overall":{"count":9,"lastUpdated":null,"topEnvironments":[{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621","project":"LPv71","id":110100518,"position":1,"title":"LP_PPE_B","projectId":110788621,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622","project":"LPv71AppLayer","id":110100521,"position":1,"title":"LPAPP_PPE_B","projectId":110788622,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100521","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=117997621","project":"PSSvLP-18232","id":118063163,"position":1,"title":"LPPSS_PPE_D","projectId":117997621,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=118063163","status":"DEPLOYED"}],"showProjects":true,"successfulCount":3},"byInstanceType":{"bamboo":{"count":9,"name":"Bamboo"}}},"repository":{"overall":{"count":5,"lastUpdated":"2018-05-04T19:12:19.000-0700"},"byInstanceType":{"stash":{"count":1,"name":"Bitbucket Server"},"fecru":{"count":5,"name":"FishEye / Crucible"}}},"branch":{"overall":{"count":4,"lastUpdated":"2018-05-04T19:13:59.993-0700"},"byInstanceType":{"stash":{"count":2,"name":"Bitbucket Server"},"fecru":{"count":2,"name":"FishEye / Crucible"}}}}},"isStale":true}}',
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10685',
                    value: 'Design',
                    id: '10685'
                },
                fixVersions: [
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
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: null,
                customfield_12081: null,
                customfield_10180: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10070',
                        value: 'Impediment',
                        id: '10070'
                    }
                ],
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
                labels: ['key_task'],
                customfield_10587: null,
                timeestimate: 21600,
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10054',
                    value: 'Front End',
                    id: '10054'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 36000,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=DBellezza',
                    name: 'DBellezza',
                    key: 'dbellezza',
                    emailAddress: 'DBellezza@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15145',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15145',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15145',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15145'
                    },
                    displayName: 'Dana Bellezza',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '113479',
                        key: 'LP-18233',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113479',
                        fields: {
                            summary: 'QA: Pseudo Sku Redesign',
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
                        id: '113482',
                        key: 'LP-18235',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113482',
                        fields: {
                            summary: 'Upload Pseudo-Sku PTIFs files for Scene7',
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
                        id: '113848',
                        key: 'LP-18418',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113848',
                        fields: {
                            summary: 'BED: Pseudo Sku Redesign',
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
                    'com.atlassian.greenhopper.service.sprint.Sprint@1532d73c[id=442,rapidViewId=160,state=ACTIVE,name=Lamps++ Sprint 35,startDate=2018-04-24T17:54:00.054-07:00,endDate=2018-05-08T17:54:00.000-07:00,completeDate=<null>,sequence=442,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'lampspp',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=lampspp'
                },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=DBellezza',
                    name: 'DBellezza',
                    key: 'dbellezza',
                    emailAddress: 'DBellezza@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15145',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15145',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15145',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15145'
                    },
                    displayName: 'Dana Bellezza',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|hztc1s:0q89202',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 7200, total: 43200, percent: 16 },
                progress: { progress: 7200, total: 28800, percent: 25 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18232/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                timespent: 7200,
                customfield_11480: {
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
                customfield_11882: 1,
                resolutiondate: null,
                workratio: 25,
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18232/watchers',
                    watchCount: 3,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-02-27T14:47:01.000-0800',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T17:49:45.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 28800,
                description:
                    'h2. GOAL\r\n\r\nUpdating Pseudo SKUs for better cross platform viewing. We\'re increasing the size of the SKU to maximize and making it universal across mobile and web.\r\nh2. REQUIREMENTS\r\nh3. {color:#d04437}1: +FED+{color}\r\n\r\nThe current SKU is square and we\'re moving to a more vertical approach. The new size extends and reaches either max width (Mobile) or max height (Web) in the image container.\r\n\r\nPlease see attached mockups for reference.\r\n # Replace the current Pseudo SKUS with the new sizes for more optimal scale and viewing on mobile.\r\n ## *DESKTOP SPECS*\r\nThis new Image should fit in the image container +vertically+, with white space to the right and left of the image with no border\r\nImage container size is currently: 306x352\r\nWeb Pseudo Sku size: 242x352\r\n ## *MOBILE SPECS*\r\nThis new Image should fit in that container +horizontally+ and aligned on the top, with white space on the bottom with no border\r\nImage container size is currently: 154x294\r\nMobile Pseudo Sku size: 154x224_\r\n\r\n\r\nh3. {color:#d04437}2: +IMAGES+{color}\r\n\r\n # Upload Pseudo-Skus ptifs PTIFs for Scene7. Files location:  \\\\lpwebdev64\\mike\\Pseudo-Skus\r\n\r\n_____________________________',
                summary: 'Pseudo Sku Redesign',
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
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@9e9f3e7[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@71453bd3[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@4706ef93[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@598bb50[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@432806cf[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1beb26da[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@6b613843[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2be34c44[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@287e3989[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6a6117aa[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@8a08985[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@399075b9[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@60fbb173[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
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
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10041',
                    description: '',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'Requirements Review',
                    id: '10041',
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
                customfield_10681: '1|i08pqn:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 0 },
                progress: { progress: 0, total: 0 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18222/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18222/watchers',
                    watchCount: 2,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-24T06:16:10.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T11:11:29.000-0700',
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
            id: '113397',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113397',
            key: 'LP-18199',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@253395ef[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@33802316[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@f9c4f2[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@20485be8[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@196d2ee3[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2b47364b[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@65d7b985[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@72239cc[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@77c815fd[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@652f9021[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@3dec0690[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@2b16b4b8[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@1cc62bda[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                parent: {
                    id: '105388',
                    key: 'LP-15065',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/105388',
                    fields: {
                        summary: 'Leverage caching for spproductrepository_getproductsshipsincontent',
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
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=SIslam',
                    name: 'SIslam',
                    key: 'sislam',
                    emailAddress: 'sislam@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Shaon Islam',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10271',
                    value: 'QA',
                    id: '10271'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 7200,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=nidhi',
                    name: 'nidhi',
                    key: 'nidhi',
                    emailAddress: 'NSachdeva@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=nidhi&avatarId=14441',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=nidhi&avatarId=14441',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=nidhi&avatarId=14441',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=nidhi&avatarId=14441'
                    },
                    displayName: 'Nidhi Sachdeva',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@5943aa0a[id=432,rapidViewId=159,state=CLOSED,name=Team FVN Sprint 9,startDate=2018-04-10T10:49:24.436-07:00,endDate=2018-04-24T10:49:00.000-07:00,completeDate=2018-04-25T11:40:07.545-07:00,sequence=432,goal=]',
                    'com.atlassian.greenhopper.service.sprint.Sprint@36d795a7[id=434,rapidViewId=159,state=ACTIVE,name=Team FVN Sprint 10,startDate=2018-04-25T11:40:55.251-07:00,endDate=2018-05-09T11:40:00.000-07:00,completeDate=<null>,sequence=434,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'Team FVN',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=Team+FVN'
                },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=nidhi',
                    name: 'nidhi',
                    key: 'nidhi',
                    emailAddress: 'NSachdeva@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=nidhi&avatarId=14441',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=nidhi&avatarId=14441',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=nidhi&avatarId=14441',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=nidhi&avatarId=14441'
                    },
                    displayName: 'Nidhi Sachdeva',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08pdj:',
                customfield_10682: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=SIslam',
                        name: 'SIslam',
                        key: 'sislam',
                        emailAddress: 'sislam@lampsplus.com',
                        avatarUrls: {
                            '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                            '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                            '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                            '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                        },
                        displayName: 'Shaon Islam',
                        active: true,
                        timeZone: 'America/Los_Angeles'
                    }
                ],
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 7200, percent: 0 },
                progress: { progress: 0, total: 7200, percent: 0 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18199/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18199/watchers',
                    watchCount: 1,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-23T10:37:35.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-04-30T18:55:47.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 7200,
                description: null,
                summary: 'QA: Leverage caching for spproductrepository_getproductsshipsincontent',
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
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@23d7ca90[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@34164498[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@51a08679[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@64862933[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@7998fc79[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7f2c4556[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@2aea8784[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7ff0ec5b[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@4135ace8[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5cae476d[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@22863ddb[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5aec8fe4[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@36d23abd[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10055',
                    value: 'Back End',
                    id: '10055'
                },
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
                customfield_10681: '1|hztc1s:0q8924',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 0, total: 0 },
                progress: { progress: 0, total: 0 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18179/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18179/watchers',
                    watchCount: 4,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2018-04-23T02:43:47.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-03T15:58:09.000-0700',
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
            id: '112400',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/112400',
            key: 'LP-18064',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@18ac6e76[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4325055[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@305013c5[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7ec8509a[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@56c4eeb[failedBuildCount=0,successfulBuildCount=4,unknownBuildCount=0,count=4,lastUpdated=2018-05-03T17:04:39.677-0700,lastUpdatedTimestamp=2018-05-03T17:04:39.677-07:00],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@761f5d2c[count=4,name=Bamboo]}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@23b4e17c[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@1f442910[stateCount=1,state=REVIEW,dueDate=<null>,overDue=false,count=2,lastUpdated=2018-05-03T12:30:41.371-0700,lastUpdatedTimestamp=2018-05-03T12:30:41.371-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@46ac9496[count=2,name=FishEye / Crucible]}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3b068bb7[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@3f3d32aa[topEnvironments=[{projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788625, project=LPv70ExternalServices, id=113246209, position=2, title=ExternalServices_PROD_A, projectId=110788625, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=113246209, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621, project=LPv71, id=110100518, position=1, title=LP_PPE_B, projectId=110788621, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622, project=LPv71AppLayer, id=110100521, position=1, title=LPAPP_PPE_B, projectId=110788622, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100521, status=DEPLOYED}],showProjects=true,successfulCount=4,count=9,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@108d76cf[count=9,name=Bamboo]}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@38369fdf[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@3762e05d[count=52,lastUpdated=2018-05-03T17:00:19.000-0700,lastUpdatedTimestamp=2018-05-03T17:00:19.000-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@4a4f4848[count=52,name=FishEye / Crucible]}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1c69889e[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@10ad34ab[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":4,"lastUpdated":"2018-05-03T17:04:39.677-0700","failedBuildCount":0,"successfulBuildCount":4,"unknownBuildCount":0},"byInstanceType":{"bamboo":{"count":4,"name":"Bamboo"}}},"review":{"overall":{"count":2,"lastUpdated":"2018-05-03T12:30:41.371-0700","stateCount":1,"state":"REVIEW","dueDate":null,"overDue":false,"completed":false},"byInstanceType":{"fecru":{"count":2,"name":"FishEye / Crucible"}}},"deployment-environment":{"overall":{"count":9,"lastUpdated":null,"topEnvironments":[{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788625","project":"LPv70ExternalServices","id":113246209,"position":2,"title":"ExternalServices_PROD_A","projectId":110788625,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=113246209","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621","project":"LPv71","id":110100518,"position":1,"title":"LP_PPE_B","projectId":110788621,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622","project":"LPv71AppLayer","id":110100521,"position":1,"title":"LPAPP_PPE_B","projectId":110788622,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100521","status":"DEPLOYED"}],"showProjects":true,"successfulCount":4},"byInstanceType":{"bamboo":{"count":9,"name":"Bamboo"}}},"repository":{"overall":{"count":52,"lastUpdated":"2018-05-03T17:00:19.000-0700"},"byInstanceType":{"fecru":{"count":52,"name":"FishEye / Crucible"}}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                timeestimate: 0,
                aggregatetimeoriginalestimate: 144000,
                versions: [],
                issuelinks: [
                    {
                        id: '89604',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/89604',
                        type: {
                            id: '10321',
                            name: 'Blocked',
                            inward: 'is blocked by',
                            outward: 'is blocking',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10321'
                        },
                        inwardIssue: {
                            id: '113689',
                            key: 'UTI-3481',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113689',
                            fields: {
                                summary: 'POC: .Net Standard 2.0 and App Layer',
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
                        id: '88311',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/88311',
                        type: {
                            id: '10001',
                            name: 'Related',
                            inward: 'is related by...',
                            outward: 'is related to...',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10001'
                        },
                        inwardIssue: {
                            id: '112401',
                            key: 'APPLAYER-183',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/112401',
                            fields: {
                                summary: 'Implement distributed caching for a low impact feature',
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
                    }
                ],
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=yzhao',
                    name: 'yzhao',
                    key: 'yzhao',
                    emailAddress: 'yuz@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=yzhao&avatarId=12333',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=yzhao&avatarId=12333',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=yzhao&avatarId=12333',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=yzhao&avatarId=12333'
                    },
                    displayName: 'Yu Zhao',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10016',
                    description: '',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'Code Review',
                    id: '10016',
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10055',
                    value: 'Back End',
                    id: '10055'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 0,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jhilts',
                    name: 'jhilts',
                    key: 'jhilts',
                    emailAddress: 'JHilts@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=jhilts&avatarId=15434',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=jhilts&avatarId=15434',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=jhilts&avatarId=15434',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=jhilts&avatarId=15434'
                    },
                    displayName: 'John Hilts',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@5943aa0a[id=432,rapidViewId=159,state=CLOSED,name=Team FVN Sprint 9,startDate=2018-04-10T10:49:24.436-07:00,endDate=2018-04-24T10:49:00.000-07:00,completeDate=2018-04-25T11:40:07.545-07:00,sequence=432,goal=]',
                    'com.atlassian.greenhopper.service.sprint.Sprint@36d795a7[id=434,rapidViewId=159,state=ACTIVE,name=Team FVN Sprint 10,startDate=2018-04-25T11:40:55.251-07:00,endDate=2018-05-09T11:40:00.000-07:00,completeDate=<null>,sequence=434,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'Team FVN',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=Team+FVN'
                },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jhilts',
                    name: 'jhilts',
                    key: 'jhilts',
                    emailAddress: 'JHilts@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=jhilts&avatarId=15434',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=jhilts&avatarId=15434',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=jhilts&avatarId=15434',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=jhilts&avatarId=15434'
                    },
                    displayName: 'John Hilts',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i08kg7:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 228300, total: 228300, percent: 100 },
                progress: { progress: 228300, total: 228300, percent: 100 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18064/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                timespent: 228300,
                customfield_11480: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=jhilts',
                    name: 'jhilts',
                    key: 'jhilts',
                    emailAddress: 'JHilts@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=jhilts&avatarId=15434',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=jhilts&avatarId=15434',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=jhilts&avatarId=15434',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=jhilts&avatarId=15434'
                    },
                    displayName: 'John Hilts',
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
                aggregatetimespent: 228300,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 158,
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-18064/watchers',
                    watchCount: 3,
                    isWatching: false
                },
                customfield_10380: 'CI-90',
                customfield_12680: 2,
                created: '2018-04-05T18:05:16.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T13:00:42.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 144000,
                description:
                    'h2. Goal\r\n\r\nCreate a shared library for Distributed Caching using redis.\r\n\r\nYuZ\'s notes: per discussion with Hyuk, John and Armen, .NET standard 2.0 compatibility will be handled in future task UTI-3481.\r\n\r\nh2. Description\r\n\r\nCreate a shared library for Distributed Caching using redis. The library should be written in .NET Standard 2.0 so that it can be used by all of our active projects, including but not limited to the app layer, LP web site, PSS, and CMS.\r\n Use the StackExchange.Redis.Extensions library to interact with redis: [https://github.com/imperugo/StackExchange.Redis.Extensions]\r\n The extensions library builds on top of the lower-level Stackexchange.Redis library and allows easy serialization of complex objects as well as primitives.\r\n\r\nSee CL 136411 in P4 for the Distributed Caching library used in the POC leading up to this implementation. Ideally, this code can be used as-is and just recompiled as a .NET standard 2.0 library.\r\n\r\nThe IDistributedCacheManager interface will be the entry way for all interaction with redis.\r\n See [https://confluence.lampsplus.com:8093/display/WDA/Coding+Guidance] for information on how to use distributed caching in our codebase.\r\nh3. IDistributedCacheManager implementation details\r\nh4. Get and Add\r\n\r\nThe POC versions of the Get and Add methods can be mostly used as-is.\r\nh4. Deletes\r\n\r\nRename the POC method {{FlushCache}} to {{Remove}}.\r\nh4. Global Cache Flush\r\n\r\n Add a {{GlobalFlush}} method to IDistributedCacheManager; this method needs to coordinate a distributed cache flush.\r\n Typical use case:\r\n * a web app that has multiple instances running\r\n * the web app issues a cache flush request\r\n * The flush is limited to just the keys used by that app\r\n * The flush is only done once for all of the running instances.\r\n Distributed caching should use an application ID similar to what ELMAH and New Relic use so that a group of instances can be identified and distinguished from other versions of the same app.\r\n A POC was done to illustrate how we can implement a coordinated "global" cache flush:\r\n [https://bitbucket.lampsplus.com:8443/projects/MPC/repos/johnhilts_misc/browse/dc/pubsub]\r\n The POC simulates 4 instances of an application that share 1 application ID and flushes any keys with that ID.\r\n The logic from that POC should be applied to the {{GlobalFlush}} method.\r\n\r\nh4. Keys\r\n\r\nAll methods for adding to or retrieving from the cache have an optional key parameter. That means the library consumer can either provide a key or let the library generate one automatically.\r\n Automatically generated keys will have the following format:\r\n environment + appID + assemblyname + classname + methodname + method-param1, param2 ...\r\n\r\nFormat:\r\n{noformat}\r\n$"{environment}-{appId}-{assemblyname}-{classname}-{methodname}-[{param1},{param2},{param3},...]"\r\n{noformat}\r\nSample Code:\r\n{code:java}\r\nvar firstConnectionString = ConfigurationManager.ConnectionStrings.Cast<ConnectionStringSettings>()\r\n  .First(connectionString => !string.IsNullOrWhiteSpace(connectionString.Name));\r\n\r\nvar environment = GetEnvironmentNameBasedOnConnectionString(firstConnectionString.ConnectionString);\r\nvar appId = distributedCacheAppSettings.AppId; // this will need to be passed in via CTOR DI; we cannot use ConfigurationManager inside the library to grab this (for compatibility with all clients)\r\nvar assemblyname = typeof(program).Assembly.GetName().Name;\r\nvar classname = nameof(program);\r\nvar methodname = nameof(Main);\r\nvar methodparams = $"[{string.Join(",", args)}]";\r\n\r\nConsole.Write($"environment-assembly-class-method-params = {environment}-{assemblyname}-{classname}-{methodname}-{methodparams}");\r\n{code}\r\nSource: [http://bitbucket:7990/projects/MPC/repos/johnhilts_misc/browse/caching/keys/program.cs]\r\n\r\nWhether a key is generated or provided, all keys must have the {{\\{environment-appId\\}}} prefix. This will be transparent to the client code. So, for example, if I want to cache the current cart\'s total with a key such as {{\\{cartTotal-cartId\\}}}, internally the library will prefix it with {{\\{environment-appId\\}}} and store it that way in redis. Example prefix: {{p-ApplicationLayer-LPv70}} would be the prefix for the production instance of the LPv70 App Layer.\r\n\r\nh3. Other classes\r\nThe {{CacheExtensions}} class is meant to allow any object to have access to caching. The {{CacheManagerSingleton}} class is used with the extensions. See [https://confluence.lampsplus.com:8093/display/WDA/Alternative+Techniques] for more information on how to use these classes.\r\nh4. Namespace\r\n\r\nLampsPlus.Commerce.DistributedCache\r\nh4. Library Location\r\n\r\nInclude this library as part of the applayer solution, and the app layer section of Lamps Plus. For now, we can add the project to any .net core library that needs it.\r\nh4. Configuration\r\n\r\nThe web.config for any web app using Distributed Caching should have a section similar to ELMAH or New Relic that allows for setting the AppId value. This will allow multiple instances of the same app to coordinate with each other. Other configuration values: redis server, redis port, redis database number.\r\n For POCs, we may use the following redis server:\r\n Host = 172.16.91.116\r\n Port = 6379 \r\n Database = 5\r\nh4. Source control\r\n\r\nPerforce\r\nh2. Acceptance Criteria\r\n - Meet all requrements in the Description\r\n - Create a library that can be used from .net core 2 or .net framework 4.7 consumers',
                summary: 'Create Distributed Caching Library using redis',
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
            id: '112139',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/112139',
            key: 'LP-17774',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@671d3274[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@c056863[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@4d7f94d9[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4a1b713e[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@441b649b[failedBuildCount=0,successfulBuildCount=2,unknownBuildCount=0,count=2,lastUpdated=2018-05-04T11:52:17.590-0700,lastUpdatedTimestamp=2018-05-04T11:52:17.590-07:00],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@735df603[count=2,name=Bamboo]}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5292d3e1[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@4391da0c[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5cb15159[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@6daa62d6[topEnvironments=[{projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621, project=LPv71, id=110100518, position=1, title=LP_PPE_B, projectId=110788621, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622, project=LPv71AppLayer, id=110100521, position=1, title=LPAPP_PPE_B, projectId=110788622, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100521, status=DEPLOYED}],showProjects=true,successfulCount=2,count=6,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@59c46488[count=6,name=Bamboo]}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@646f47d3[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@3282f99e[count=16,lastUpdated=2018-05-04T11:42:20.000-0700,lastUpdatedTimestamp=2018-05-04T11:42:20.000-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@1edb413b[count=16,name=FishEye / Crucible]}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@381dc862[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@26d2416d[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":2,"lastUpdated":"2018-05-04T11:52:17.590-0700","failedBuildCount":0,"successfulBuildCount":2,"unknownBuildCount":0},"byInstanceType":{"bamboo":{"count":2,"name":"Bamboo"}}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":6,"lastUpdated":null,"topEnvironments":[{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621","project":"LPv71","id":110100518,"position":1,"title":"LP_PPE_B","projectId":110788621,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622","project":"LPv71AppLayer","id":110100521,"position":1,"title":"LPAPP_PPE_B","projectId":110788622,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100521","status":"DEPLOYED"}],"showProjects":true,"successfulCount":2},"byInstanceType":{"bamboo":{"count":6,"name":"Bamboo"}}},"repository":{"overall":{"count":16,"lastUpdated":"2018-05-04T11:42:20.000-0700"},"byInstanceType":{"fecru":{"count":16,"name":"FishEye / Crucible"}}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                aggregatetimeoriginalestimate: 36000,
                versions: [],
                issuelinks: [
                    {
                        id: '89817',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/89817',
                        type: {
                            id: '10321',
                            name: 'Blocked',
                            inward: 'is blocked by',
                            outward: 'is blocking',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10321'
                        },
                        inwardIssue: {
                            id: '109427',
                            key: 'LP-16460',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/109427',
                            fields: {
                                summary: 'Lamp Shade Browser - BED - Save AS400 Shade Height',
                                status: {
                                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10028',
                                    description: '',
                                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                                    name: 'Deployment - PPE',
                                    id: '10028',
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
                    },
                    {
                        id: '89818',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLink/89818',
                        type: {
                            id: '10010',
                            name: 'Duplicate',
                            inward: 'is duplicated by',
                            outward: 'duplicates',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issueLinkType/10010'
                        },
                        inwardIssue: {
                            id: '110297',
                            key: 'LP-16696',
                            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/110297',
                            fields: {
                                summary: 'Lamp Shade Browser - Use AS400 Shade Height for Scaling Shades',
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
                    }
                ],
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
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10024',
                    description: '',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'QA on PPE',
                    id: '10024',
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10054',
                    value: 'Front End',
                    id: '10054'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 0,
                creator: {
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
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '112140',
                        key: 'LP-17775',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/112140',
                        fields: {
                            summary: 'QA - Lamp Shade Browser - FED - Create Step-by-Step Interface (Height/Line)',
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
                    'com.atlassian.greenhopper.service.sprint.Sprint@4263b21c[id=444,rapidViewId=158,state=ACTIVE,name=Shredders Sprint 5,startDate=2018-04-30T00:01:00.000-07:00,endDate=2018-05-14T00:01:00.000-07:00,completeDate=<null>,sequence=444,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'The Shredders',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=The+Shredders'
                },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
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
                customfield_10043: null,
                customfield_10681: '1|i08rnn:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 68400, total: 68400, percent: 100 },
                progress: { progress: 68400, total: 68400, percent: 100 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-17774/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                timespent: 68400,
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
                aggregatetimespent: 68400,
                customfield_11882: 1,
                resolutiondate: null,
                workratio: 190,
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-17774/watchers',
                    watchCount: 2,
                    isWatching: false
                },
                customfield_10380: 'LP-14665',
                customfield_12680: 0,
                created: '2018-03-29T15:17:58.000-0700',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T11:11:40.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 36000,
                description:
                    'h2. Requirements\r\nCreate step-by-step interface for the following:\r\n # Base Height\r\n #* Includes numeric input field\r\n #* Implement front end form validation (format/copy TBD)\r\n # Base Line Adjustment\r\n #* User should be able to drag endpoints of the line for indicating the top and bottom of the user\'s lamp base\r\n#* When user first arrives at this step, a red line (default length) should display centered over the canvas \r\n# Confirmation Drawer Message\r\n#* Confirmation message displays in a drawer that slides from the top to bottom\r\n#* Message display when user has added their image, completed the steps above, and attempts to navigate away from the page\r\n# Utilize the shade height from AS400 that is stored in our database (Carteasy.dbo.tblPrductsExtra.LampShadeHeight) when calculating scale of shade that is displayed in Shade Browser\r\n\r\nh2. Notes\r\nLP-16460 task implements the changes for importing the AS400 value and saving to our database.',
                summary: 'Lamp Shade Browser - FED - Create Step-by-Step Interface (Height/Line)',
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
            id: '110455',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/110455',
            key: 'LP-16760',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@7023777f[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@22dcbbe6[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@7a8664f3[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@78a3e11b[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@13d0f9ff[failedBuildCount=0,successfulBuildCount=2,unknownBuildCount=0,count=2,lastUpdated=2018-05-03T17:45:52.350-0700,lastUpdatedTimestamp=2018-05-03T17:45:52.350-07:00],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@49800871[count=2,name=Bamboo]}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1dfc2475[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@7a30b5e8[stateCount=2,state=REVIEW,dueDate=<null>,overDue=false,count=2,lastUpdated=2018-05-04T11:08:44.828-0700,lastUpdatedTimestamp=2018-05-04T11:08:44.828-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@1de92ed[count=2,name=FishEye / Crucible]}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@19c7015c[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@65e4519d[topEnvironments=[{projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621, project=LPv71, id=110100518, position=1, title=LP_PPE_B, projectId=110788621, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622, project=LPv71AppLayer, id=110100521, position=1, title=LPAPP_PPE_B, projectId=110788622, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100521, status=DEPLOYED}],showProjects=true,successfulCount=2,count=6,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@cbfafe9[count=6,name=Bamboo]}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@292e1918[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@8c22080[count=4,lastUpdated=2018-05-03T17:38:19.000-0700,lastUpdatedTimestamp=2018-05-03T17:38:19.000-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@2bb3a30c[count=4,name=FishEye / Crucible]}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@74eb93aa[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@2dd4a2f6[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":2,"lastUpdated":"2018-05-03T17:45:52.350-0700","failedBuildCount":0,"successfulBuildCount":2,"unknownBuildCount":0},"byInstanceType":{"bamboo":{"count":2,"name":"Bamboo"}}},"review":{"overall":{"count":2,"lastUpdated":"2018-05-04T11:08:44.828-0700","stateCount":2,"state":"REVIEW","dueDate":null,"overDue":false,"completed":false},"byInstanceType":{"fecru":{"count":2,"name":"FishEye / Crucible"}}},"deployment-environment":{"overall":{"count":6,"lastUpdated":null,"topEnvironments":[{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621","project":"LPv71","id":110100518,"position":1,"title":"LP_PPE_B","projectId":110788621,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622","project":"LPv71AppLayer","id":110100521,"position":1,"title":"LPAPP_PPE_B","projectId":110788622,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100521","status":"DEPLOYED"}],"showProjects":true,"successfulCount":2},"byInstanceType":{"bamboo":{"count":6,"name":"Bamboo"}}},"repository":{"overall":{"count":4,"lastUpdated":"2018-05-03T17:38:19.000-0700"},"byInstanceType":{"fecru":{"count":4,"name":"FishEye / Crucible"}}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                customfield_11682: null,
                resolution: null,
                customfield_10588: null,
                customfield_10589: 'Not started',
                customfield_12080: null,
                lastViewed: '2018-05-04T12:59:39.272-0700',
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
                timeestimate: 0,
                aggregatetimeoriginalestimate: 18000,
                versions: [],
                issuelinks: [],
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=cliu',
                    name: 'cliu',
                    key: 'cliu',
                    emailAddress: 'cliu@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=15145',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=15145',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=15145',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=15145'
                    },
                    displayName: 'Calvin Liu',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                status: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10024',
                    description: '',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                    name: 'QA on PPE',
                    id: '10024',
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10054',
                    value: 'Front End',
                    id: '10054'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 7200,
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
                        id: '113550',
                        key: 'LP-18272',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113550',
                        fields: {
                            summary: 'QA: Remove Reviews and SECURE/Reviews as they are no longer used',
                            status: {
                                self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/status/10024',
                                description: '',
                                iconUrl: 'https://lampstrack.lampsplus.com:8443/images/icons/statuses/generic.png',
                                name: 'QA on PPE',
                                id: '10024',
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
                    'com.atlassian.greenhopper.service.sprint.Sprint@36d795a7[id=434,rapidViewId=159,state=ACTIVE,name=Team FVN Sprint 10,startDate=2018-04-25T11:40:55.251-07:00,endDate=2018-05-09T11:40:00.000-07:00,completeDate=<null>,sequence=434,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'Team FVN',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=Team+FVN'
                },
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
                customfield_10681: '1|i08bkv:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 21720, total: 28920, percent: 75 },
                progress: { progress: 21720, total: 21720, percent: 100 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-16760/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                timespent: 21720,
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
                aggregatetimespent: 21720,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 201,
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-16760/watchers',
                    watchCount: 1,
                    isWatching: false
                },
                customfield_10380: 'LP-15816',
                customfield_12680: 1,
                created: '2018-03-06T21:49:30.000-0800',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T11:08:53.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 10800,
                description:
                    'Remove Reviews and SECURE/Reviews\r\nThese pages are no longer used as we no longer use PowerReviews, we no use TurnTo.\r\nThere are no usages of these pages.\r\n\r\nThis is in an effort to remove pages that use direct access to the database from LP as opposed to App Layer.\r\n\r\n*Testing Tips*\r\n\r\nAlthough this code should not affect any reviews on the PDP page since it is not in use anymore and Turn to is used for review.  \r\n-Please do a full test on the PDP reviews section.\r\n-Submit a question.\r\n-Answer a question.\r\n-Submit a review.\r\n-Rate a review.\r\n-Thumbs up and thumbs down a review.\r\nAny other test cases i may have missed for reviews please do them as well.\r\nhttps://www.lampsplus.com/products/possini-euro-double-drum-18-inch-wide-white-ceiling-light__p0197.html',
                summary: 'Remove Reviews and SECURE/Reviews as they are no longer used',
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
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@51dafc97[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@13728ac9[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@60281a4[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@624b36cd[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@64f34057[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@63d0bac2[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@71cd08bd[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4a0bb517[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@3484a5f9[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@52e41f01[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@4bf56d00[count=2,lastUpdated=2018-02-06T10:59:57.000-0800,lastUpdatedTimestamp=2018-02-06T10:59:57.000-08:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@214f0794[count=2,name=FishEye / Crucible]}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4dfb1768[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@3f1515c1[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":2,"lastUpdated":"2018-02-06T10:59:57.000-0800"},"byInstanceType":{"fecru":{"count":2,"name":"FishEye / Crucible"}}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10055',
                    value: 'Back End',
                    id: '10055'
                },
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
                    'com.atlassian.greenhopper.service.sprint.Sprint@46cfa321[id=367,rapidViewId=158,state=CLOSED,name=Shredders Kanban,startDate=2017-10-24T14:20:05.413-07:00,endDate=2017-11-07T14:20:00.000-08:00,completeDate=2018-03-02T11:44:50.402-08:00,sequence=367,goal=<null>]',
                    'com.atlassian.greenhopper.service.sprint.Sprint@4263b21c[id=444,rapidViewId=158,state=ACTIVE,name=Shredders Sprint 5,startDate=2018-04-30T00:01:00.000-07:00,endDate=2018-05-14T00:01:00.000-07:00,completeDate=<null>,sequence=444,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'The Shredders',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=The+Shredders'
                },
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
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-16125/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                aggregatetimespent: 5400,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 75,
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-16125/watchers',
                    watchCount: 1,
                    isWatching: false
                },
                customfield_10380: 'LP-14665',
                customfield_12680: 0,
                created: '2018-02-05T18:01:01.000-0800',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-04-30T18:45:57.000-0700',
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
            id: '105388',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/105388',
            key: 'LP-15065',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@7f120d73[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@3944e7ee[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@3615dc41[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@22a0b169[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@4d3659db[failedBuildCount=0,successfulBuildCount=0,unknownBuildCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5353ac04[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@4b3c95fb[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@6c304e0c[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@13b73ad0[topEnvironments=[],showProjects=false,successfulCount=0,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5dca872e[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@72f65221[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@1c58225d[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@3693fabc[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":0,"lastUpdated":null,"failedBuildCount":0,"successfulBuildCount":0,"unknownBuildCount":0},"byInstanceType":{}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":0,"lastUpdated":null,"topEnvironments":[],"showProjects":false,"successfulCount":0},"byInstanceType":{}},"repository":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                labels: ['InfrastructureImprovement', 'RedisCache'],
                customfield_10587: null,
                timeestimate: 0,
                aggregatetimeoriginalestimate: 21600,
                versions: [],
                issuelinks: [],
                assignee: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=yzhao',
                    name: 'yzhao',
                    key: 'yzhao',
                    emailAddress: 'yuz@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?ownerId=yzhao&avatarId=12333',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&ownerId=yzhao&avatarId=12333',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&ownerId=yzhao&avatarId=12333',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&ownerId=yzhao&avatarId=12333'
                    },
                    displayName: 'Yu Zhao',
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
                customfield_10050: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10055',
                    value: 'Back End',
                    id: '10055'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 7200,
                creator: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=joquendo',
                    name: 'joquendo',
                    key: 'joquendo',
                    emailAddress: 'joquendo@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'James Oquendo',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '113397',
                        key: 'LP-18199',
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/113397',
                        fields: {
                            summary: 'QA: Leverage caching for spproductrepository_getproductsshipsincontent',
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
                    'com.atlassian.greenhopper.service.sprint.Sprint@5943aa0a[id=432,rapidViewId=159,state=CLOSED,name=Team FVN Sprint 9,startDate=2018-04-10T10:49:24.436-07:00,endDate=2018-04-24T10:49:00.000-07:00,completeDate=2018-04-25T11:40:07.545-07:00,sequence=432,goal=]',
                    'com.atlassian.greenhopper.service.sprint.Sprint@36d795a7[id=434,rapidViewId=159,state=ACTIVE,name=Team FVN Sprint 10,startDate=2018-04-25T11:40:55.251-07:00,endDate=2018-05-09T11:40:00.000-07:00,completeDate=<null>,sequence=434,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'Team FVN',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=Team+FVN'
                },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=joquendo',
                    name: 'joquendo',
                    key: 'joquendo',
                    emailAddress: 'joquendo@lampsplus.com',
                    avatarUrls: {
                        '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10152',
                        '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'James Oquendo',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10043: null,
                customfield_10681: '1|i07jy7:',
                customfield_10682: null,
                customfield_12980: null,
                aggregateprogress: { progress: 14400, total: 21600, percent: 66 },
                progress: { progress: 14400, total: 14400, percent: 100 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-15065/votes',
                    votes: 0,
                    hasVoted: false
                },
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
                timespent: 14400,
                customfield_11480: {
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
                customfield_11882: 1,
                resolutiondate: null,
                workratio: 100,
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-15065/watchers',
                    watchCount: 2,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2017-12-19T11:45:31.000-0800',
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-04-30T18:59:36.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 14400,
                description:
                    'h2. Goal\r\nCurrently, this sproc, spproductrepository_getproductsshipsincontent, is called in ProductServiceImpl.cs in multiple methods that all call the database when the data doesn\'t change very often. We should utilize caching\r\n\r\nReferences table [Products].[dbo].[tblProductsShipsInContent]\r\n\r\nEstimated time save is 1 call to the database (~70ms).\r\nh2. Testing Tips\r\n\r\nOnly after RedisCache is enabled on PPE (<add key="EnableRedisCache" value="true" />)\r\nThis will be done in lpv71 after lpv70 is merged into lpv71. We don\'t have to do this in LPv70.\r\n# Download and install redis desktop manager https://redisdesktop.com/download\r\n# Get credential from  pv70 app layer config \\WebApps\\Services\\Web.config:\r\nRedis.Host\r\nRedis.Port\r\nRedis.Database\r\nRedis.Password\r\n# Connect to the redis server\r\n# Load a random PDP like https://www.lampsplus.com/products/jenson-aged-brass-pharmacy-floor-lamp__1k779.html\r\n# In redis desktop manager, reload db5\r\n# Verify a key contains (not starts with) "LampsPlus.Commerce.Data.Products.ProductRepository-GetProductShipInVerbiageNonCached" exists.\r\n# Click this key and get its full key and value\r\n# The key will looks like "T-LampsPlus.Web.Services-LampsPlus.Commerce.Data.Products.ProductRepository-GetProductShipInVerbiageNonCached-9003-1"\r\nThe last 2 sections of the key are sublocationcode and FirstShipDays.\r\n# Use the following query to verify that the cached value is the same as in db:\r\nselect TOP 1 *  FROM Products.dbo.tblProductsShipsInContent where FirstShipDays >= @FirstShipDays AND @SublocationCode = 9003',
                summary: 'Leverage caching for spproductrepository_getproductsshipsincontent',
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
            id: '104362',
            self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/104362',
            key: 'LP-14665',
            fields: {
                customfield_13180:
                    '{summaryBean=com.atlassian.jira.plugin.devstatus.rest.SummaryBean@6e45e1df[summary={pullrequest=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@78a0a216[overall=com.atlassian.jira.plugin.devstatus.summary.beans.PullRequestOverallBean@9a22c55[stateCount=0,state=OPEN,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], build=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7f7f3fdd[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BuildOverallBean@3ef562f4[failedBuildCount=0,successfulBuildCount=2,unknownBuildCount=0,count=2,lastUpdated=2018-04-19T14:56:18.043-0700,lastUpdatedTimestamp=2018-04-19T14:56:18.043-07:00],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@765c5a0c[count=2,name=Bamboo]}], review=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@5b609b88[overall=com.atlassian.jira.plugin.devstatus.summary.beans.ReviewsOverallBean@5d67c6ee[stateCount=0,state=<null>,dueDate=<null>,overDue=false,count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}], deployment-environment=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@4890fd74[overall=com.atlassian.jira.plugin.devstatus.summary.beans.DeploymentOverallBean@4d1442ef[topEnvironments=[{projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621, project=LPv71, id=110100518, position=1, title=LP_PPE_B, projectId=110788621, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518, status=DEPLOYED}, {projectUrl=https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622, project=LPv71AppLayer, id=110100521, position=1, title=LPAPP_PPE_B, projectId=110788622, url=https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100521, status=DEPLOYED}],showProjects=true,successfulCount=2,count=6,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={bamboo=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@5adbdf30[count=6,name=Bamboo]}], repository=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7144c818[overall=com.atlassian.jira.plugin.devstatus.summary.beans.CommitOverallBean@3e70f019[count=2,lastUpdated=2018-04-19T14:38:54.000-0700,lastUpdatedTimestamp=2018-04-19T14:38:54.000-07:00],byInstanceType={fecru=com.atlassian.jira.plugin.devstatus.summary.beans.ObjectByInstanceTypeBean@4d6bda7c[count=2,name=FishEye / Crucible]}], branch=com.atlassian.jira.plugin.devstatus.rest.SummaryItemBean@7aa09ff3[overall=com.atlassian.jira.plugin.devstatus.summary.beans.BranchOverallBean@2d738cb7[count=0,lastUpdated=<null>,lastUpdatedTimestamp=<null>],byInstanceType={}]},errors=[],configErrors=[]], devSummaryJson={"cachedValue":{"errors":[],"configErrors":[],"summary":{"pullrequest":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":"OPEN","open":true},"byInstanceType":{}},"build":{"overall":{"count":2,"lastUpdated":"2018-04-19T14:56:18.043-0700","failedBuildCount":0,"successfulBuildCount":2,"unknownBuildCount":0},"byInstanceType":{"bamboo":{"count":2,"name":"Bamboo"}}},"review":{"overall":{"count":0,"lastUpdated":null,"stateCount":0,"state":null,"dueDate":null,"overDue":false,"completed":false},"byInstanceType":{}},"deployment-environment":{"overall":{"count":6,"lastUpdated":null,"topEnvironments":[{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788621","project":"LPv71","id":110100518,"position":1,"title":"LP_PPE_B","projectId":110788621,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100518","status":"DEPLOYED"},{"projectUrl":"https://bamboo.lampsplus.com:8443/deploy/viewDeploymentProjectEnvironments.action?id=110788622","project":"LPv71AppLayer","id":110100521,"position":1,"title":"LPAPP_PPE_B","projectId":110788622,"url":"https://bamboo.lampsplus.com:8443/deploy/viewEnvironment.action?id=110100521","status":"DEPLOYED"}],"showProjects":true,"successfulCount":2},"byInstanceType":{"bamboo":{"count":6,"name":"Bamboo"}}},"repository":{"overall":{"count":2,"lastUpdated":"2018-04-19T14:38:54.000-0700"},"byInstanceType":{"fecru":{"count":2,"name":"FishEye / Crucible"}}},"branch":{"overall":{"count":0,"lastUpdated":null},"byInstanceType":{}}}},"isStale":true}}',
                customfield_10070: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
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
                customfield_10183: null,
                customfield_10184: null,
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
                labels: ['Roadmap', 'key_task'],
                customfield_10587: null,
                timeestimate: 0,
                aggregatetimeoriginalestimate: 0,
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
                customfield_10050: null,
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 0,
                creator: {
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
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@4263b21c[id=444,rapidViewId=158,state=ACTIVE,name=Shredders Sprint 5,startDate=2018-04-30T00:01:00.000-07:00,endDate=2018-05-14T00:01:00.000-07:00,completeDate=<null>,sequence=444,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'The Shredders',
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/group?groupname=The+Shredders'
                },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
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
                customfield_10043: null,
                customfield_10681: '1|i06xue:k',
                customfield_10682: [
                    {
                        self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/user?username=SGore',
                        name: 'SGore',
                        key: 'sgore',
                        emailAddress: 'SGore@lampsplus.com',
                        avatarUrls: {
                            '48x48': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?avatarId=10143',
                            '24x24': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=small&avatarId=10143',
                            '16x16': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=xsmall&avatarId=10143',
                            '32x32': 'https://lampstrack.lampsplus.com:8443/secure/useravatar?size=medium&avatarId=10143'
                        },
                        displayName: 'Sagar Gore',
                        active: true,
                        timeZone: 'America/Los_Angeles'
                    },
                    {
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
                    }
                ],
                customfield_12980: null,
                aggregateprogress: { progress: 23400, total: 23400, percent: 100 },
                progress: { progress: 23400, total: 23400, percent: 100 },
                votes: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-14665/votes',
                    votes: 0,
                    hasVoted: false
                },
                issuetype: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issuetype/17',
                    id: '17',
                    description: 'Created by JIRA Software - do not edit or delete. Issue type for a big user story that needs to be broken down.',
                    iconUrl: 'https://lampstrack.lampsplus.com:8443/secure/viewavatar?size=xsmall&avatarId=14137&avatarType=issuetype',
                    name: 'Epic',
                    subtask: false,
                    avatarId: 14137
                },
                customfield_11080: null,
                timespent: 23400,
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
                aggregatetimespent: 23400,
                customfield_11882: 2,
                resolutiondate: null,
                workratio: 9223372036854776000,
                watches: {
                    self: 'https://lampstrack.lampsplus.com:8443/rest/api/2/issue/LP-14665/watchers',
                    watchCount: 5,
                    isWatching: false
                },
                customfield_10380: null,
                customfield_12680: 0,
                created: '2017-11-24T09:27:19.000-0800',
                customfield_10381: null,
                customfield_10382: 'Lamp Shade Browser',
                customfield_10383: null,
                customfield_10020: null,
                customfield_10780: null,
                updated: '2018-05-04T16:33:36.000-0700',
                customfield_13080: null,
                customfield_11180: [],
                customfield_11181:
                    'Admin=Admin:\r\nArchitect=Architect:\r\nBack End=BED:\r\nCommunity Server=Blog:\r\nContent Change=Content:\r\nDBA=DBA:\r\nFront End=FED:\r\nProduct Management=Product mgmt:\r\nQA=QA:\r\nResearch=Research:\r\nServer Admin=Server:\r\nSupport=Support:',
                customfield_11580: null,
                timeoriginalestimate: 0,
                description:
                    'h2. Goal\r\n\r\nTo create a feature that allows customers to upload an image of their lamp and then see what our shades look like on their lamp base. This feature is only for LP.com on mobile devices, for initial launch.\r\n\r\n \r\nh2.  Requirements\r\n\r\nAllow users to view lamp shades on their uploaded image using the Shade Browser feature:\r\n # The Shade Browser feature will be accessed from the PDP by clicking VIEW ON YOUR LAMP link (see [^01-pdp.jpg])\r\n ** Link displays for lamp shades with clipped images (Carteasy.dbo.tblPrductsExtraIsClippable = 1) AND with primary category Lamp Shade (Carteasy.dbo.tblPrducts.Category = \'Lamp Shades\')\r\n *** Link replaces VIEW IN YOUR ROOM link\r\n ** Tapping VIEW ON YOUR LAMP will load a new Shade Browser page(see [^02-intro.jpg]):\r\n *** The initial page load contains content that explains how to use the Shade Browser feature\r\n *** Includes an animated GIF (see attached) further explaining how to use the feature\r\n # Tapping GET STARTED on the Shade Browser page triggers the image edit & upload modal\r\n ** See mocks ([^03-modal-01.jpg] and [^04-modal-02.jpg])\r\n # Once the image is successfully uploaded the modal should close and load the Shade Browser page\r\n ** The first screen will prompt the user to enter the height of their lamp base (see [^05-main-01.jpg])\r\n *** Input should only accept numeric values\r\n *** Tapping Change Photo should trigger the image edit & upload modal\r\n *** NEXT button should be disabled while no valid numeric values exist in the input box (see [^05-main-01.jpg]) and enabled once user inputs numeric values (see [^07-main-02.jpg])\r\n ** The second screen will display a vertical red line and the user will be prompted to adjust the line to match their lamp base height (see [^08-main-03.jpg])\r\n *** Line should display by default at a configurable length, per the mock\r\n *** PREVIEW button should be disabled by default (see [^08-main-03.jpg]) and then enabled once the user adjusts the line (see [^09-main-04.jpg])\r\n # Once the user taps PREVIEW the lamp shade should be rendered on the user-uploaded image (see [^10-main-05b.jpg])\r\n\r\nh2. Notes\r\n\r\n1) Development have been testing with *Sku = 2n799*\r\n\r\n2) User can get to this feature by first going to an eligible PDP (category=Lamp Shade and isClippable=true)\r\n\r\n3) Current iteration of this feature is at *www.lampsplus.com/shadebrowser* behind a toggle on Mobile (in PPE)\r\n\r\n4) There is one QA subtask created LP-18390 that should encompass all QA issues found.\r\n\r\n \r\n\r\n*Toggle in Web.config*\r\n <!-- LP Shade Browser -->\r\n <add key="EnableShadeBrowser" value="true"/>\r\n\r\n \r\n\r\n ',
                summary: 'Lamp Shade Browser (mobile)',
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
        }
    ]
};
