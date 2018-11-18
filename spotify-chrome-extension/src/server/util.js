import { config } from './config';
import axios from 'axios';

export const sendAuthReq = (code) => {
    const params = {
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: config.redirect_uri
    };
    return sendApiRequest(params);
};

export const sendRefreshReq = (refresh_token) => {
    const params = {
        grant_type: 'refresh_token',
        refresh_token: refresh_token
    };
    return sendApiRequest(params);
}

export const sendApiRequest=(params)=>{
    const request = getApiRequest(params);
    return axios(request);
}

const getApiRequest = (params) => {
    return {
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        params: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer(config.client_id + ':' + config.client_secret).toString('base64'))
        }
    };
}