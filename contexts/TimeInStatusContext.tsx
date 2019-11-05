import React, { useState, createContext } from 'react';
import TimeInStatusState from './TimeInStatusState';

const [timeInStatusData, updateStateData] = useState<TimeInStatusState>();

const TimeInStatusContext = createContext<TimeInStatusState>(new TimeInStatusState(updateStateData));

const TimeInStatusProvider = ({ children }: { children: any}) => {

    return (
        <TimeInStatusContext.Provider value={timeInStatusData}>
            {children}
        </TimeInStatusContext.Provider>
    );
};

export {TimeInStatusProvider, TimeInStatusContext};
