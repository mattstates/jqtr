import { createContext } from 'react';

const TimeInStatusContext = createContext({
    /* bunch of key: value pairs. */
    updateTimeInStatus: () => {},
    clearTimeInStatus: () => {},
    loadedDate: new Date()
});

export default TimeInStatusContext;
