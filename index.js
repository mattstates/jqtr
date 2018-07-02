import './node_modules/react-table/react-table.css';
import './styles/styles.scss';
import Error from './Components/Error.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Components/Table/Table.jsx';
import { mapToUsefulData, gatherAllTasks, storageAvailable, lampstrackUrl, jiraApiUrl } from './utils/utils.js';

const domEntryPoint = document.getElementById('jqtrapp');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: undefined,
            input: '',
            loading: true,
            hasError: false,
            hasWarning: false,
            notification: {
                message: '',
                items: []
            }
        };
        this.getJiraTasks = this.getJiraTasks.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.submit = this.submit.bind(this);
    }

    getJiraTasks(searchQuery) {
        this.setState({
            loading: true,
            hasError: false,
            hasWarning: false,
            notification: { message: '', items: [] }
        });

        fetch(`${jiraApiUrl}${window.encodeURIComponent('jql=' + window.encodeURIComponent(searchQuery) + '&maxResults=1000&fields=-description')}`, {
            method: 'GET',
            credentials: 'same-origin'
        })
            .then((response) => {
                return response.json();
            })
            .then((jiraData) => {
                window.location.hash = `jql=${window.encodeURIComponent(searchQuery)}`;

                const issues = gatherAllTasks(jiraData.issues.map(mapToUsefulData), this.setState.bind(this));

                issues.then((formattedIssues) => {
                    this.setState({
                        issues: formattedIssues,
                        loading: false
                    });
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({
                    loading: false,
                    hasError: true,
                    notification: {
                        message: 'There was a problem getting a response. Please check your JQL query and/or try again.',
                        items: []
                    }
                });
            });
    }

    changeHandler(e) {
        this.setState({ input: e.target.value });
    }

    submit(e) {
        if (e.which !== 13 || !this.state.input.trim().length) {
            return;
        }
        if (storageAvailable) {
            window.localStorage.lpTimeRemainingQuery = this.state.input;
        }
        this.getJiraTasks(this.state.input);
    }

    render() {
        let renderComponent;

        // show errors, otherwise loading/table
        if (this.state.hasError) {
            renderComponent = <Error message={this.state.notification.message} />;
        } else {
            this.state.loading ?
                (renderComponent = <div className="loader" />) :
                (renderComponent = (
                    <Table
                        issues={this.state.issues}
                        appWidth={domEntryPoint.offsetWidth}
                        lampstrackUrl={lampstrackUrl}
                        maxRows={this.state.issues ? this.state.issues.length : 0}
                    />
                ));
        }

        return (
            <React.Fragment>
                <input type="text" value={this.state.input} onChange={this.changeHandler} onKeyUp={this.submit} />

                {renderComponent}

                {this.state.hasWarning && this.state.notification.message ? (
                    <Error type={'Warning'} message={this.state.notification.message} items={this.state.notification.items} classNames={['warning']} />
                ) : (
                    ''
                )}
            </React.Fragment>
        );
    }

    componentDidMount() {
        let initialQuery = '';

        if (window.location.hash) {
            let queryArray = window.location.hash.split('&');
            if (queryArray[0].indexOf('jql=') > -1) {
                initialQuery = queryArray[0].split('jql=')[1] || '';
                initialQuery = window.decodeURIComponent(initialQuery);
            }
        } else if (storageAvailable) {
            initialQuery = localStorage.lpTimeRemainingQuery || '';
        }

        if (initialQuery.length) {
            this.setState({ input: initialQuery });
        }

        this.getJiraTasks(initialQuery);
    }
}

ReactDOM.render(<App />, domEntryPoint);
