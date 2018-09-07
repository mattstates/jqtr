const baseJiraApiUrl =
    '/plugins/servlet/applinks/proxy?appId=8da36fe0-de48-3afa-aae3-970436460c88&path=https%3A%2F%2Flampstrack.lampsplus.com%3A8443%2Frest%2Fapi%2F2%2F';

const baseURL =
    'https://confluence.lampsplus.com:8093/plugins/servlet/applinks/proxy?appId=8da36fe0-de48-3afa-aae3-970436460c88&path=https%3A%2F%2Flampstrack.lampsplus.com%3A8443%2Frest%2Fapi%2F2%2F';

const jiraApiUrl = baseJiraApiUrl + 'search?';

const jiraApiUrlByIssue = baseURL + 'issue/';

const lampstrackUrl = 'https://lampstrack.lampsplus.com:8443/browse/';

const jiraAPIKey = 'YofkFYFIy5bztnbtJikY61D4';

const base64Key = 'bXN0YXRlczpZb2ZrRllGSXk1Ynp0bmJ0SmlrWTYxRDQ=';

export { baseURL, jiraApiUrl, lampstrackUrl, jiraApiUrlByIssue, base64Key };