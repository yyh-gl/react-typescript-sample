import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { renderRoutes } from 'react-router-config';
import Routes from './router';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        {renderRoutes(Routes)}
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
