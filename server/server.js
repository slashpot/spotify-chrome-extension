// const express = require('express');
// const helment = require('helmet');
import express from 'express';
import helmet from 'helmet';
import {config} from './config'; 

const app = express();
const port = 3001;

app.use(helmet());

app.get('/', (req, res) => {
    const grant_type = "authorization_code";
    const code = req.query.code;
    res.send('Hello World!');
})

app.listen(port, () => console.log(`server is listening on port ${port}`))