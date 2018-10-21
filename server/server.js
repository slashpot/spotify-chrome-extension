import express from 'express';
import helmet from 'helmet';
import { config } from './config';
import axios from 'axios';

const app = express();
const port = 3001;

app.use(helmet());

app.get('/', (req, res) => {
    const apiRequest = {
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        params: {
            code: req.query.code,
            grant_type: 'authorization_code',
            redirect_uri: config.redirect_uri
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer(config.client_id + ':' + config.client_secret).toString('base64'))
        }
    };
    axios(apiRequest).then(response=>res.json(response.data))
    .catch(err=>res.json(err.response.status,err.response.data));
})

app.listen(port, () => console.log(`server is listening on port ${port}`))