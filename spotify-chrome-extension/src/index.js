import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';

ReactDOM.render(
    <HashRouter>
        <div>
            <Route path="/login" component={Login} />
        </div>
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();
