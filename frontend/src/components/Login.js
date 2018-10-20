import React, { Component } from 'react';
import {stringify} from '../function';

class Login extends Component {
    redirectToLoginPage() {
        const params = {
            response_type: "code",
            client_id: "416fc494992c4ffeb5003c0b50b9d886",
            scope: "user-read-playback-state user-read-currently-playing user-modify-playback-state",
            redirect_uri: 'http://localhost:3001'
        };

        window.location = "https://accounts.spotify.com/authorize?" + stringify(params);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <button onClick={this.redirectToLoginPage}>Login</button>
            </div>
        );
    }
}

export default Login;
