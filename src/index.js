import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createBrowserHistory } from 'history';
import 'semantic-ui-css/semantic.min.css'
import './index.css'

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

ReactDOM.render(<App />, document.getElementById('root'));