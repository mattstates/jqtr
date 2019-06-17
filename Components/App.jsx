import Error from './Error.jsx';
import React, { useState, useEffect, useContext, useMemo } from 'react';
import SearchBar from './SearchBar.jsx';
import Table from './Table/Table.jsx';
import TimeInStatusContext from '../contexts/TimeInStatusContext.js';
import { jiraApiUrl, lampstrackUrl } from '../utils/urls.js';
import { mapToUsefulData, gatherAllTasks, getFetchOptions } from '../utils/apiUtils.js';
import { storageAvailable } from '../utils/utils.js';

function EmptyNotification() {
    return { message: '', items: [] };
}

function getInitialQuery() {
    if (window.location.hash) {
        let initialQuery;

        let queryArray = window.location.hash.split('&');
        if (queryArray[0].indexOf('jql=') > -1) {
            initialQuery = queryArray[0].split('jql=')[1] || '';
            initialQuery = window.decodeURIComponent(initialQuery);
        }
        return initialQuery;
    } else if (storageAvailable) {
        return localStorage.lpTimeRemainingQuery || '';
    }
    return '';
}

export default function App({ appWidth }) {
    // TODO: group some of this state into useReducer?
    console.count('APP Render');
    const [issues, updateIssues] = useState();
    const [isLoading, updateLoading] = useState(true);

    const initialSearchString = useMemo(getInitialQuery, []);
    const [hasHad401, updateHasHad401] = useState(false);
    const [hasError, updateErrorStatus] = useState(false);
    const [notification, updateNotifications] = useState(new EmptyNotification());

    const [jiraTasksAbortController, updatejiraTasksAbortController] = useState(new AbortController());

    const timeInStatusContext = useContext(TimeInStatusContext);

    function fetchJiraTasks(searchQuery, abortController) {
        updateLoading(true);
        updateErrorStatus(false);
        updateNotifications(new EmptyNotification());
        updateIssues(undefined);

        const signal = abortController.signal;
        const encodedSearchQuery = window.encodeURIComponent(searchQuery);

        fetch(`${jiraApiUrl}jql=${window.encodeURIComponent(encodedSearchQuery)}&maxResults=1000&fields=-description`, getFetchOptions([['signal', signal]]))
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((jiraData) => {
                window.location.hash = `jql=${encodedSearchQuery}`;
                return gatherAllTasks(jiraData.issues.map(mapToUsefulData));
            })
            .then((formattedIssues) => {
                updateIssues(formattedIssues);
                timeInStatusContext.clearTimeInStatus();
                updatejiraTasksAbortController(new AbortController());
                updateLoading(false);
            })
            .catch((err) => {
                console.error(err);
                const requestMessage = err.ok ? 'There was a problem getting a response.' : `${err.status} ${err.statusText}.`;

                updateLoading(false);
                updateIssues(undefined);

                updateErrorStatus(false);
                updateNotifications({
                    message: `${requestMessage}\n Please check your JQL query and/or try again.`,
                    items: []
                });
                updatejiraTasksAbortController(new AbortController());
                updateHasHad401(err.status === 401 || hasHad401);
            });
    }

    useEffect(() => {

        if (initialSearchString.length) {
            fetchJiraTasks(initialSearchString, jiraTasksAbortController);
        }

        return () => {
            jiraTasksAbortController.abort();
            updatejiraTasksAbortController(new AbortController());
        };
    }, []);

    let renderComponent;

    // show errors, otherwise loading/table
    if (hasError) {
        renderComponent = <Error message={notification.message} permissions={hasHad401} />;
    } else {
        renderComponent = isLoading ? <div className="loader" /> : <Table issues={issues} appWidth={appWidth} lampstrackUrl={lampstrackUrl} />;
    }

    return (
        <React.Fragment>
            <SearchBar abortController={jiraTasksAbortController} initialSearchString={initialSearchString} submitCallback={fetchJiraTasks} />
            {renderComponent}
        </React.Fragment>
    );
}
