import React, { useState } from 'react';
import TimeInStatusContext from './TimeInStatusContext.js';

const TimeInStatusProvider = ({ children }) => {
    const updateTimeInStatus = ({ issueId, timeInStatus }) => {
        updateStateData((prevState) => {
            return {
                ...prevState,
                [issueId]: timeInStatus
            };
        });
    };

    const clearTimeInStatus = () => {
        updateStateData((prevState) => {
            const { updateTimeInStatus, clearTimeInStatus } = prevState;

            return { updateTimeInStatus, clearTimeInStatus, loadedDate: new Date() };
        });
    };

    const timeInStatusState = {
        /* bunch of key: value pairs. */
        clearTimeInStatus,
        loadedDate: new Date(),
        updateTimeInStatus
    };

    const [timeInStatusData, updateStateData] = useState(timeInStatusState);

    return <TimeInStatusContext.Provider value={timeInStatusData}>{children}</TimeInStatusContext.Provider>;
};

export default TimeInStatusProvider;
