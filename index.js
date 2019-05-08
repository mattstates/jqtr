import './node_modules/react-table/react-table.css';
import './styles/styles.scss';
import Error from './Components/Error.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Components/Table/Table.jsx';
import { jiraApiUrl, lampstrackUrl } from './utils/urls.js';
import { mapToUsefulData, gatherAllTasks, getFetchOptions } from './utils/apiUtils.js';
import { storageAvailable } from './utils/utils.js';

const domEntryPoint = document.getElementById('jqtrapp');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: undefined,
            input: '',
            loading: true,
            hasHad401: false,
            hasError: false,
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
            notification: { message: '', items: [] }
        });

        fetch(`${jiraApiUrl}jql=${window.encodeURIComponent(searchQuery)}&maxResults=1000&fields=-description`, getFetchOptions())
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((jiraData) => {
                window.location.hash = `jql=${window.encodeURIComponent(searchQuery)}`;

                const issues = gatherAllTasks(jiraData.issues.map(mapToUsefulData));

                issues.then((formattedIssues) => {
                    this.setState({
                        issues: formattedIssues,
                        loading: false
                    });
                });
            })
            .catch((err) => {
                console.error(err);
                const requestMessage = err.ok ? 'There was a problem getting a response.' : `${err.status} ${err.statusText}.`;
                this.setState({
                    loading: false,
                    hasError: true,
                    hasHad401: err.status === 401 || this.state.hasHad401,
                    notification: {
                        message: `${requestMessage}\n Please check your JQL query and/or try again.`,
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
            renderComponent = <Error message={this.state.notification.message} permissions={this.state.hasHad401} />;
        } else {
            renderComponent = this.state.loading ? (
                <div className="loader" />
            ) : (
                <Table issues={this.state.issues} appWidth={domEntryPoint.offsetWidth} lampstrackUrl={lampstrackUrl} />
            );
        }

        return (
            <React.Fragment>
                <input type="text" value={this.state.input} onChange={this.changeHandler} onKeyUp={this.submit} />
                {renderComponent}
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
