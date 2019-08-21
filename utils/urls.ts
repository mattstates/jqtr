const _baseJiraApiUrl = 'https://lampstrack.lampsplus.com:8443/rest/api/2/';

const _baseURL = '/plugins/servlet/applinks/proxy?appId=8da36fe0-de48-3afa-aae3-970436460c88&path=';

const jiraApiUrl = _baseURL + _baseJiraApiUrl + 'search?';

const jiraApiUrlByIssue = _baseURL + _baseJiraApiUrl + 'issue/';

const lampstrackUrl = 'https://lampstrack.lampsplus.com:8443/browse/';

//jira user: ciadmin
const authorizationValue = 'Basic Y2lhZG1pbjp4eHVTTmRROTReY2VjIzlOcWVH';

export { jiraApiUrl, lampstrackUrl, jiraApiUrlByIssue, authorizationValue };
