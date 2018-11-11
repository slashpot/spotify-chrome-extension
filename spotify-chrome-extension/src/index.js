import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Container from './components/Container';
import Login from './components/Login';
import Authorize from './components/Authorize';

ReactDOM.render(
    <Container />,
    document.getElementById('root'));
registerServiceWorker();
