import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store';
import ErrorBoundary from './components/error-boundary';
import Context from './components/api-context';
import StoreAPI from './services/store-api';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';

const storeAPI = new StoreAPI();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <Context.Provider value={storeAPI}>
                <Router>
                    <App/>
                </Router>
            </Context.Provider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);