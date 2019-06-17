import HorizontalLoader from './../Loaders/HorizontalLoader.jsx';
import React, { useContext, useEffect } from 'react';
import TimeInStatusContext from '../../contexts/TimeInStatusContext.js';
import dateFns from 'date-fns';
import { getFetchOptions } from '../../utils/apiUtils.js';
import { jiraApiUrlByIssue } from '../../utils/urls.js';

function TimeInStatus({ issueId, status }) {
    const timeInStatusContext = useContext(TimeInStatusContext);
    // console.log(timeInStatusContext);
    console.count('TimeInStatus Render')
    useEffect(() => {
        if (timeInStatusContext[issueId]) {return () => {};}
        console.count('TimeInStatus FETCH')

        const abortController = new window.AbortController();
        const signal = abortController.signal;
        fetchTimeInStatusData({ issueId, status, signal, fromDate: timeInStatusContext.loadedDate })
            .then((timeData) => {
                timeInStatusContext.updateTimeInStatus(timeData);
            })
            .catch((error) => console.log(error.message));

        return () => {
            abortController.abort();
        };
    }, [issueId, status]);

    return timeInStatusContext[issueId] ? <span className="daysInStatus">{timeInStatusContext[issueId]}</span> : <HorizontalLoader />;
}

export default TimeInStatus;

async function fetchTimeInStatusData({ status, issueId, signal, fromDate }) {
    const timeData = {};
    let timeInStatus;

    try {
        const response = await fetch(`${jiraApiUrlByIssue}${issueId}&fields=id,status,created&expand=changelog`, getFetchOptions([['signal', signal]]));
        const json = await response.json();
        if (status && json.changelog && json.changelog.histories) {
            const matchingStatus = json.changelog.histories.filter((log) => log.items.some((item) => item.toString && item.toString === status));
            const statusCollectionLength = matchingStatus.length;

            // Assumes that the last status in the matching collection will be the most recent change to the status history.
            const latestTimeChange = statusCollectionLength ? matchingStatus[statusCollectionLength - 1].created : json.fields.created;
            const currentDate = fromDate || new Date();
            const latestUpdate = new Date(latestTimeChange);

            timeData.daysInStatus = dateFns.differenceInDays(currentDate, latestUpdate);
            timeData.hoursInStatus = dateFns.differenceInHours(currentDate, latestUpdate);
            timeData.minutesInStatus = dateFns.differenceInMinutes(currentDate, latestUpdate);
            timeData.secondsInStatus = dateFns.differenceInSeconds(currentDate, latestUpdate);
        }
    } catch (error) {
        console.error(error.message);
    }
    timeInStatus = getTimeInStatus(timeData);
    return { issueId, timeInStatus };
}

function getTimeInStatus({ daysInStatus, hoursInStatus, minutesInStatus, secondsInStatus }) {
    if (daysInStatus > 0) {
        return daysInStatus + 'd';
    }
    if (hoursInStatus > 0) {
        return hoursInStatus + 'h';
    }
    if (minutesInStatus > 0) {
        return minutesInStatus + 'm';
    }
    if (secondsInStatus > 0) {
        return secondsInStatus + 's';
    }
    return '';
}
