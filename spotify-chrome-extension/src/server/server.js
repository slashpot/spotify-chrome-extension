import express from 'express';
import { config } from './config';

import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { sendAuthReq } from './util';
import axios from 'axios';

const app = express();
const port = 3001;

app.use(helmet());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    sendAuthReq(req.query.code)
        .then(response => res.json(response.data))
        .catch(err => res.json(err.response.data));
})

app.post('/refreshtoken', (req, res) => {
    console.log(req.body);
    const apiRequest = {
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        params: {
            grant_type: 'refresh_token',
            refresh_token: req.body.refresh_token
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer(config.client_id + ':' + config.client_secret).toString('base64'))
        }
    };
    axios(apiRequest).then(response => {
        res.json(response.data);
    }).catch(err => res.json(err.response.data));
})
app.listen(port, () => console.log(`server is listening on port ${port}`))