import { config } from './config';
import axios from 'axios';
export const sendAuthReq = (code) => {
    const apiRequest = {
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        params: {
            code: code,
            grant_type: 'authorization_code',
            redirect_uri: config.redirect_uri
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer(config.client_id + ':' + config.client_secret).toString('base64'))
        }
    };
    return axios(apiRequest);
};