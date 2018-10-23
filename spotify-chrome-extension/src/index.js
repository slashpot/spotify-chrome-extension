import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route}from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/login" component={Login} />
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
