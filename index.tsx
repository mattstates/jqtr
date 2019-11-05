import './node_modules/react-table/react-table.css';
import './styles/styles.scss';
import App from './Components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { TimeInStatusProvider } from './contexts/TimeInStatusContext';

const domEntryPoint = document.getElementById('jqtrapp');

ReactDOM.render(
    <TimeInStatusProvider>
        <App appWidth={domEntryPoint.offsetWidth} />
    </TimeInStatusProvider>,
    domEntryPoint
);
