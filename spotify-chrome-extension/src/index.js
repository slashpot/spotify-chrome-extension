import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route}from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import Authorize from './components/Authorize';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Login} />
            <Route path="/authorize" component={Authorize} />
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
