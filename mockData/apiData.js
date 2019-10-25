export default {
    expand: 'schema,names',
    startAt: 0,
    maxResults: 1000,
    total: 24,
    issues: [
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113964',
            self: 'https://mycompany.com/rest/api/2/issue/113964',
            key: 'JIRAKEY-18473',
            fields: {
                customfield_13180: '',
                parent: {
                    id: '1234',
                    key: 'JIRAKEY-900',
                    self: 'https://mycompany.com/rest/api/2/issue/113775',
                    fields: {
                        summary: 'Summary for 18384',
                        status: {
                            self: 'https://mycompany.com/rest/api/2/status/10009',
                            description: 'Assigned',
                            iconUrl: 'https://mycompany.com/images/icons/statuses/generic.png',
                            name: 'Assigned',
                            id: '10009',
                            statusCategory: {
                                self: 'https://mycompany.com/rest/api/2/statuscategory/4',
                                id: 4,
                                key: 'indeterminate',
                                colorName: 'yellow',
                                name: 'In Progress'
                            }
                        },
                        priority: {
                            self: 'https://mycompany.com/rest/api/2/priority/10102',
                            iconUrl: 'https://mycompany.com/images/icons/priorities/major.svg',
                            name: 'High Priority',
                            id: '10102'
                        },
                        issuetype: {
                            self: 'https://mycompany.com/rest/api/2/issuetype/3',
                            id: '3',
                            description: 'A task that needs to be done.',
                            iconUrl: 'https://mycompany.com/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                            name: 'Task',
                            subtask: false,
                            avatarId: 14148
                        }
                    }
                },
                customfield_10070: [
                    {
                        self: 'https://mycompany.com/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://mycompany.com/rest/api/2/version/24362',
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
                    self: 'https://mycompany.com/rest/api/2/priority/10102',
                    iconUrl: 'https://mycompany.com/images/icons/priorities/major.svg',
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
                    self: 'https://mycompany.com/rest/api/2/status/10009',
                    description: 'Assigned',
                    iconUrl: 'https://mycompany.com/images/icons/statuses/generic.png',
                    name: 'Assigned',
                    id: '10009',
                    statusCategory: {
                        self: 'https://mycompany.com/rest/api/2/statuscategory/4',
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
                    self: 'https://mycompany.com/rest/api/2/customFieldOption/10055',
                    value: 'Back End',
                    id: '10055'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 28800,
                creator: {
                    self: 'https://mycompany.com/rest/api/2/user?username=achurch',
                    name: 'achurch',
                    key: 'achurch',
                    emailAddress: 'achurch@mycompany.com',
                    avatarUrls: {
                        '48x48': 'https://mycompany.com/secure/useravatar?ownerId=achurch&avatarId=13930',
                        '24x24': 'https://mycompany.com/secure/useravatar?size=small&ownerId=achurch&avatarId=13930',
                        '16x16': 'https://mycompany.com/secure/useravatar?size=xsmall&ownerId=achurch&avatarId=13930',
                        '32x32': 'https://mycompany.com/secure/useravatar?size=medium&ownerId=achurch&avatarId=13930'
                    },
                    displayName: 'Alonso Church',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@4263b21c[id=444,rapidViewId=158,state=ACTIVE,name=Team One Sprint 5,startDate=2018-04-30T00:01:00.000-07:00,endDate=2018-05-14T00:01:00.000-07:00,completeDate=<null>,sequence=444,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'Team One',
                    self: 'https://mycompany.com/rest/api/2/group?groupname=Team+One'
                },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://mycompany.com/rest/api/2/user?username=achurch',
                    name: 'achurch',
                    key: 'achurch',
                    emailAddress: 'achurch@mycompany.com',
                    avatarUrls: {
                        '48x48': 'https://mycompany.com/secure/useravatar?ownerId=achurch&avatarId=13930',
                        '24x24': 'https://mycompany.com/secure/useravatar?size=small&ownerId=achurch&avatarId=13930',
                        '16x16': 'https://mycompany.com/secure/useravatar?size=xsmall&ownerId=achurch&avatarId=13930',
                        '32x32': 'https://mycompany.com/secure/useravatar?size=medium&ownerId=achurch&avatarId=13930'
                    },
                    displayName: 'Alonso Church',
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
                    self: 'https://mycompany.com/rest/api/2/issue/JIRAKEY-18473/votes',
                    votes: 0,
                    hasVoted: false
                },
                issuetype: {
                    self: 'https://mycompany.com/rest/api/2/issuetype/5',
                    id: '5',
                    description: 'The sub-task of the issue',
                    iconUrl: 'https://mycompany.com/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                    name: 'Sub-task',
                    subtask: true,
                    avatarId: 14146
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: null,
                customfield_10031: null,
                project: {
                    self: 'https://mycompany.com/rest/api/2/project/10172',
                    id: '10172',
                    key: 'JIRAKEY',
                    name: 'Company Project',
                    avatarUrls: {
                        '48x48': 'https://mycompany.com/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://mycompany.com/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://mycompany.com/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://mycompany.com/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://mycompany.com/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Project Description',
                        name: 'Company Project'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 0,
                watches: {
                    self: 'https://mycompany.com/rest/api/2/issue/JIRAKEY-18473/watchers',
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
                customfield_11181: '',
                customfield_11580: null,
                timeoriginalestimate: 28800,
                description: null,
                summary: 'Summary for this task',
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
            self: 'https://mycompany.com/rest/api/2/issue/113901',
            key: 'JIRAKEY-18441',
            fields: {
                customfield_13180: '',
                customfield_10070: [
                    {
                        self: 'https://mycompany.com/rest/api/2/customFieldOption/10061',
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
                    self: 'https://mycompany.com/rest/api/2/priority/10102',
                    iconUrl: 'https://mycompany.com/images/icons/priorities/major.svg',
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
                        self: 'https://mycompany.com/rest/api/2/version/24362',
                        id: '24362',
                        description: '',
                        name: '71',
                        archived: false,
                        released: false,
                        releaseDate: '2018-05-07'
                    },
                    {
                        self: 'https://mycompany.com/rest/api/2/version/23860',
                        id: '23860',
                        description: '',
                        name: '70',
                        archived: false,
                        released: true,
                        releaseDate: '2018-04-25'
                    },
                    {
                        self: 'https://mycompany.com/rest/api/2/version/23762',
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
                    self: 'https://mycompany.com/rest/api/2/status/10040',
                    description: 'The task is under evaluation',
                    iconUrl: 'https://mycompany.com/images/icons/statuses/generic.png',
                    name: 'Evaluating',
                    id: '10040',
                    statusCategory: {
                        self: 'https://mycompany.com/rest/api/2/statuscategory/4',
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
                    self: 'https://mycompany.com/rest/api/2/user?username=ghopper',
                    name: 'ghopper',
                    key: 'ghopper',
                    emailAddress: 'ghopper@mycompany.com',
                    avatarUrls: {
                        '48x48': 'https://mycompany.com/secure/useravatar?ownerId=ghopper&avatarId=12232',
                        '24x24': 'https://mycompany.com/secure/useravatar?size=small&ownerId=ghopper&avatarId=12232',
                        '16x16': 'https://mycompany.com/secure/useravatar?size=xsmall&ownerId=ghopper&avatarId=12232',
                        '32x32': 'https://mycompany.com/secure/useravatar?size=medium&ownerId=ghopper&avatarId=12232'
                    },
                    displayName: 'Grace Hopper',
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
                    self: 'https://mycompany.com/rest/api/2/user?username=ghopper',
                    name: 'ghopper',
                    key: 'ghopper',
                    emailAddress: 'ghopper@mycompany.com',
                    avatarUrls: {
                        '48x48': 'https://mycompany.com/secure/useravatar?ownerId=ghopper&avatarId=12232',
                        '24x24': 'https://mycompany.com/secure/useravatar?size=small&ownerId=ghopper&avatarId=12232',
                        '16x16': 'https://mycompany.com/secure/useravatar?size=xsmall&ownerId=ghopper&avatarId=12232',
                        '32x32': 'https://mycompany.com/secure/useravatar?size=medium&ownerId=ghopper&avatarId=12232'
                    },
                    displayName: 'Grace Hopper',
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
                    self: 'https://mycompany.com/rest/api/2/issue/JIRAKEY-18441/votes',
                    votes: 0,
                    hasVoted: false
                },
                issuetype: {
                    self: 'https://mycompany.com/rest/api/2/issuetype/3',
                    id: '3',
                    description: 'A task that needs to be done.',
                    iconUrl: 'https://mycompany.com/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                    name: 'Task',
                    subtask: false,
                    avatarId: 14148
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: {
                    self: 'https://mycompany.com/rest/api/2/user?username=amouse',
                    name: 'amouse',
                    key: 'amouse',
                    emailAddress: 'amouse@mycompany.com',
                    avatarUrls: {
                        '48x48': 'https://mycompany.com/secure/useravatar?ownerId=amouse&avatarId=16730',
                        '24x24': 'https://mycompany.com/secure/useravatar?size=small&ownerId=amouse&avatarId=16730',
                        '16x16': 'https://mycompany.com/secure/useravatar?size=xsmall&ownerId=amouse&avatarId=16730',
                        '32x32': 'https://mycompany.com/secure/useravatar?size=medium&ownerId=amouse&avatarId=16730'
                    },
                    displayName: 'Anonymous Mouse',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://mycompany.com/rest/api/2/project/10172',
                    id: '10172',
                    key: 'JIRAKEY',
                    name: 'Company Project',
                    avatarUrls: {
                        '48x48': 'https://mycompany.com/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://mycompany.com/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://mycompany.com/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://mycompany.com/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://mycompany.com/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Category Description Text',
                        name: 'Project Name Text'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: null,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: -1,
                watches: {
                    self: 'https://mycompany.com/rest/api/2/issue/JIRAKEY-18441/watchers',
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
                customfield_11181: '',
                customfield_11580: null,
                timeoriginalestimate: null,
                description: 'Nothing needs to be here.',
                summary: 'Some summary',
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
        // Has subtasks...
        {
            expand: 'operations,versionedRepresentations,editmeta,changelog,renderedFields',
            id: '113775',
            self: 'https://mycompany.com/rest/api/2/issue/113775',
            key: 'JIRAKEY-18384',
            fields: {
                customfield_13180: '',
                customfield_10070: [
                    {
                        self: 'https://mycompany.com/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://mycompany.com/rest/api/2/version/24362',
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
                    self: 'https://mycompany.com/rest/api/2/priority/10102',
                    iconUrl: 'https://mycompany.com/images/icons/priorities/major.svg',
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
                    self: 'https://mycompany.com/rest/api/2/status/10009',
                    description: 'Assigned',
                    iconUrl: 'https://mycompany.com/images/icons/statuses/generic.png',
                    name: 'Assigned',
                    id: '10009',
                    statusCategory: {
                        self: 'https://mycompany.com/rest/api/2/statuscategory/4',
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
                    self: 'https://mycompany.com/rest/api/2/customFieldOption/10271',
                    value: 'QA',
                    id: '10271'
                },
                customfield_11381: null,
                customfield_11780: null,
                customfield_11781: null,
                aggregatetimeestimate: 51300,
                creator: {
                    self: 'https://mycompany.com/rest/api/2/user?username=aturing',
                    name: 'aturing',
                    key: 'aturing',
                    emailAddress: 'aturing@mycompany.com',
                    avatarUrls: {
                        '48x48': 'https://mycompany.com/secure/useravatar?avatarId=15150',
                        '24x24': 'https://mycompany.com/secure/useravatar?size=small&avatarId=15150',
                        '16x16': 'https://mycompany.com/secure/useravatar?size=xsmall&avatarId=15150',
                        '32x32': 'https://mycompany.com/secure/useravatar?size=medium&avatarId=15150'
                    },
                    displayName: 'Alan Turing',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '113776',
                        key: 'JIRAKEY-18385',
                        self: 'https://mycompany.com/rest/api/2/issue/113776',
                        fields: {
                            summary: 'Summary for a task',
                            status: {
                                self: 'https://mycompany.com/rest/api/2/status/10009',
                                description: 'Assigned',
                                iconUrl: 'https://mycompany.com/images/icons/statuses/generic.png',
                                name: 'Assigned',
                                id: '10009',
                                statusCategory: {
                                    self: 'https://mycompany.com/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://mycompany.com/rest/api/2/priority/10102',
                                iconUrl: 'https://mycompany.com/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://mycompany.com/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://mycompany.com/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    },
                    {
                        id: '113777',
                        key: 'JIRAKEY-18386',
                        self: 'https://mycompany.com/rest/api/2/issue/113777',
                        fields: {
                            summary: 'Another task summary',
                            status: {
                                self: 'https://mycompany.com/rest/api/2/status/10009',
                                description: 'Assigned',
                                iconUrl: 'https://mycompany.com/images/icons/statuses/generic.png',
                                name: 'Assigned',
                                id: '10009',
                                statusCategory: {
                                    self: 'https://mycompany.com/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://mycompany.com/rest/api/2/priority/10102',
                                iconUrl: 'https://mycompany.com/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://mycompany.com/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://mycompany.com/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    },
                    {
                        id: '113778',
                        key: 'JIRAKEY-18387',
                        self: 'https://mycompany.com/rest/api/2/issue/113778',
                        fields: {
                            summary: 'Task Summary',
                            status: {
                                self: 'https://mycompany.com/rest/api/2/status/10009',
                                description: 'Assigned',
                                iconUrl: 'https://mycompany.com/images/icons/statuses/generic.png',
                                name: 'Assigned',
                                id: '10009',
                                statusCategory: {
                                    self: 'https://mycompany.com/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://mycompany.com/rest/api/2/priority/10102',
                                iconUrl: 'https://mycompany.com/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://mycompany.com/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://mycompany.com/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    },
                    {
                        id: '113779',
                        key: 'JIRAKEY-18388',
                        self: 'https://mycompany.com/rest/api/2/issue/113779',
                        fields: {
                            summary: 'Summary for a Front End Task',
                            status: {
                                self: 'https://mycompany.com/rest/api/2/status/10024',
                                description: '',
                                iconUrl: 'https://mycompany.com/images/icons/statuses/generic.png',
                                name: 'QA',
                                id: '10024',
                                statusCategory: {
                                    self: 'https://mycompany.com/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://mycompany.com/rest/api/2/priority/10102',
                                iconUrl: 'https://mycompany.com/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://mycompany.com/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://mycompany.com/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    },
                    {
                        id: '113964',
                        key: 'JIRAKEY-18473',
                        self: 'https://mycompany.com/rest/api/2/issue/113964',
                        fields: {
                            summary: 'Summary for a task',
                            status: {
                                self: 'https://mycompany.com/rest/api/2/status/10009',
                                description: 'Assigned',
                                iconUrl: 'https://mycompany.com/images/icons/statuses/generic.png',
                                name: 'Assigned',
                                id: '10009',
                                statusCategory: {
                                    self: 'https://mycompany.com/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://mycompany.com/rest/api/2/priority/10102',
                                iconUrl: 'https://mycompany.com/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://mycompany.com/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://mycompany.com/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@4263b21c[id=444,rapidViewId=158,state=ACTIVE,name=Team One Sprint 5,startDate=2018-04-30T00:01:00.000-07:00,endDate=2018-05-14T00:01:00.000-07:00,completeDate=<null>,sequence=444,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'Team One',
                    self: 'https://mycompany.com/rest/api/2/group?groupname=Team+One'
                },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://mycompany.com/rest/api/2/user?username=achurch',
                    name: 'achurch',
                    key: 'achurch',
                    emailAddress: 'achurch@mycompany.com',
                    avatarUrls: {
                        '48x48': 'https://mycompany.com/secure/useravatar?ownerId=achurch&avatarId=13930',
                        '24x24': 'https://mycompany.com/secure/useravatar?size=small&ownerId=achurch&avatarId=13930',
                        '16x16': 'https://mycompany.com/secure/useravatar?size=xsmall&ownerId=achurch&avatarId=13930',
                        '32x32': 'https://mycompany.com/secure/useravatar?size=medium&ownerId=achurch&avatarId=13930'
                    },
                    displayName: 'Alonso Church',
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
                    self: 'https://mycompany.com/rest/api/2/issue/JIRAKEY-18384/votes',
                    votes: 0,
                    hasVoted: false
                },
                issuetype: {
                    self: 'https://mycompany.com/rest/api/2/issuetype/3',
                    id: '3',
                    description: 'A task that needs to be done.',
                    iconUrl: 'https://mycompany.com/secure/viewavatar?size=xsmall&avatarId=14148&avatarType=issuetype',
                    name: 'Task',
                    subtask: false,
                    avatarId: 14148
                },
                customfield_11080: null,
                timespent: null,
                customfield_11480: null,
                customfield_10031: null,
                project: {
                    self: 'https://mycompany.com/rest/api/2/project/10172',
                    id: '10172',
                    key: 'JIRAKEY',
                    name: 'Company Project',
                    avatarUrls: {
                        '48x48': 'https://mycompany.com/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://mycompany.com/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://mycompany.com/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://mycompany.com/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://mycompany.com/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Category Description Text',
                        name: 'Project Name Text'
                    }
                },
                customfield_10032: null,
                aggregatetimespent: 3600,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 0,
                watches: {
                    self: 'https://mycompany.com/rest/api/2/issue/JIRAKEY-18384/watchers',
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
                customfield_11181: '',
                customfield_11580: null,
                timeoriginalestimate: 0,
                description: null,
                summary: 'Summary text here',
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
            self: 'https://mycompany.com/rest/api/2/issue/113598',
            key: 'JIRAKEY-18291',
            fields: {
                customfield_13180: '',
                customfield_10070: [
                    {
                        self: 'https://mycompany.com/rest/api/2/customFieldOption/10061',
                        value: 'No',
                        id: '10061'
                    }
                ],
                customfield_11280: null,
                customfield_11681: null,
                customfield_11680: null,
                fixVersions: [
                    {
                        self: 'https://mycompany.com/rest/api/2/version/24362',
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
                    self: 'https://mycompany.com/rest/api/2/priority/10102',
                    iconUrl: 'https://mycompany.com/images/icons/priorities/major.svg',
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
                        self: 'https://mycompany.com/rest/api/2/version/23860',
                        id: '23860',
                        description: '',
                        name: '70',
                        archived: false,
                        released: true,
                        releaseDate: '2018-04-25'
                    },
                    {
                        self: 'https://mycompany.com/rest/api/2/version/23762',
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
                    self: 'https://mycompany.com/rest/api/2/user?username=Bgates',
                    name: 'Bgates',
                    key: 'bgates',
                    emailAddress: 'Bgates@mycompany.com',
                    avatarUrls: {
                        '48x48': 'https://mycompany.com/secure/useravatar?avatarId=10152',
                        '24x24': 'https://mycompany.com/secure/useravatar?size=small&avatarId=10152',
                        '16x16': 'https://mycompany.com/secure/useravatar?size=xsmall&avatarId=10152',
                        '32x32': 'https://mycompany.com/secure/useravatar?size=medium&avatarId=10152'
                    },
                    displayName: 'Bill Gates',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                status: {
                    self: 'https://mycompany.com/rest/api/2/status/10024',
                    description: '',
                    iconUrl: 'https://mycompany.com/images/icons/statuses/generic.png',
                    name: 'QA',
                    id: '10024',
                    statusCategory: {
                        self: 'https://mycompany.com/rest/api/2/statuscategory/4',
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
                    self: 'https://mycompany.com/rest/api/2/user?username=ghopper',
                    name: 'ghopper',
                    key: 'ghopper',
                    emailAddress: 'ghopper@mycompany.com',
                    avatarUrls: {
                        '48x48': 'https://mycompany.com/secure/useravatar?ownerId=ghopper&avatarId=12232',
                        '24x24': 'https://mycompany.com/secure/useravatar?size=small&ownerId=ghopper&avatarId=12232',
                        '16x16': 'https://mycompany.com/secure/useravatar?size=xsmall&ownerId=ghopper&avatarId=12232',
                        '32x32': 'https://mycompany.com/secure/useravatar?size=medium&ownerId=ghopper&avatarId=12232'
                    },
                    displayName: 'Grace Hopper',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_12180: null,
                customfield_10280: '9223372036854775807',
                subtasks: [
                    {
                        id: '113642',
                        key: 'JIRAKEY-18320',
                        self: 'https://mycompany.com/rest/api/2/issue/113642',
                        fields: {
                            summary: 'QA Task Summary',
                            status: {
                                self: 'https://mycompany.com/rest/api/2/status/10009',
                                description: 'Assigned',
                                iconUrl: 'https://mycompany.com/images/icons/statuses/generic.png',
                                name: 'Assigned',
                                id: '10009',
                                statusCategory: {
                                    self: 'https://mycompany.com/rest/api/2/statuscategory/4',
                                    id: 4,
                                    key: 'indeterminate',
                                    colorName: 'yellow',
                                    name: 'In Progress'
                                }
                            },
                            priority: {
                                self: 'https://mycompany.com/rest/api/2/priority/10102',
                                iconUrl: 'https://mycompany.com/images/icons/priorities/major.svg',
                                name: 'High Priority',
                                id: '10102'
                            },
                            issuetype: {
                                self: 'https://mycompany.com/rest/api/2/issuetype/5',
                                id: '5',
                                description: 'The sub-task of the issue',
                                iconUrl: 'https://mycompany.com/secure/viewavatar?size=xsmall&avatarId=14146&avatarType=issuetype',
                                name: 'Sub-task',
                                subtask: true,
                                avatarId: 14146
                            }
                        }
                    }
                ],
                customfield_10281: [
                    'com.atlassian.greenhopper.service.sprint.Sprint@1532d73c[id=442,rapidViewId=160,state=ACTIVE,name= Team Two Sprint 35,startDate=2018-04-24T17:54:00.054-07:00,endDate=2018-05-08T17:54:00.000-07:00,completeDate=<null>,sequence=442,goal=]'
                ],
                customfield_12581: null,
                customfield_10282: null,
                customfield_10040: {
                    name: 'team+two',
                    self: 'https://mycompany.com/rest/api/2/group?groupname=team+two'
                },
                customfield_12580: null,
                customfield_10042: null,
                customfield_10680: null,
                reporter: {
                    self: 'https://mycompany.com/rest/api/2/user?username=ghopper',
                    name: 'ghopper',
                    key: 'ghopper',
                    emailAddress: 'ghopper@mycompany.com',
                    avatarUrls: {
                        '48x48': 'https://mycompany.com/secure/useravatar?ownerId=ghopper&avatarId=12232',
                        '24x24': 'https://mycompany.com/secure/useravatar?size=small&ownerId=ghopper&avatarId=12232',
                        '16x16': 'https://mycompany.com/secure/useravatar?size=xsmall&ownerId=ghopper&avatarId=12232',
                        '32x32': 'https://mycompany.com/secure/useravatar?size=medium&ownerId=ghopper&avatarId=12232'
                    },
                    displayName: 'Grace Hopper',
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
                    self: 'https://mycompany.com/rest/api/2/issue/JIRAKEY-18291/votes',
                    votes: 0,
                    hasVoted: false
                },
                issuetype: {
                    self: 'https://mycompany.com/rest/api/2/issuetype/1',
                    id: '1',
                    description: 'A problem which impairs or prevents the functions of the product.',
                    iconUrl: 'https://mycompany.com/secure/viewavatar?size=xsmall&avatarId=14133&avatarType=issuetype',
                    name: 'Bug',
                    subtask: false,
                    avatarId: 14133
                },
                customfield_11080: null,
                timespent: 32400,
                customfield_11480: {
                    self: 'https://mycompany.com/rest/api/2/user?username=adalovelace',
                    name: 'adalovelace',
                    key: 'adalovelace',
                    emailAddress: 'adalovelace@mycompany.com',
                    avatarUrls: {
                        '48x48': 'https://mycompany.com/secure/useravatar?ownerId=adalovelace&avatarId=17332',
                        '24x24': 'https://mycompany.com/secure/useravatar?size=small&ownerId=adalovelace&avatarId=17332',
                        '16x16': 'https://mycompany.com/secure/useravatar?size=xsmall&ownerId=adalovelace&avatarId=17332',
                        '32x32': 'https://mycompany.com/secure/useravatar?size=medium&ownerId=adalovelace&avatarId=17332'
                    },
                    displayName: 'Ada Lovelace',
                    active: true,
                    timeZone: 'America/Los_Angeles'
                },
                customfield_10031: null,
                project: {
                    self: 'https://mycompany.com/rest/api/2/project/10172',
                    id: '10172',
                    key: 'JIRAKEY',
                    name: 'Company Project',
                    avatarUrls: {
                        '48x48': 'https://mycompany.com/secure/projectavatar?pid=10172&avatarId=10011',
                        '24x24': 'https://mycompany.com/secure/projectavatar?size=small&pid=10172&avatarId=10011',
                        '16x16': 'https://mycompany.com/secure/projectavatar?size=xsmall&pid=10172&avatarId=10011',
                        '32x32': 'https://mycompany.com/secure/projectavatar?size=medium&pid=10172&avatarId=10011'
                    },
                    projectCategory: {
                        self: 'https://mycompany.com/rest/api/2/projectCategory/10310',
                        id: '10310',
                        description: 'Category Description Text',
                        name: 'Project Name Text'
                    }
                },
                customfield_10032: '8h',
                aggregatetimespent: 32400,
                customfield_11882: 0,
                resolutiondate: null,
                workratio: 225,
                watches: {
                    self: 'https://mycompany.com/rest/api/2/issue/JIRAKEY-18291/watchers',
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
                customfield_11181: '',
                customfield_11580: null,
                timeoriginalestimate: 14400,
                description: 'Ticket description text',
                summary: 'More Summary Text',
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