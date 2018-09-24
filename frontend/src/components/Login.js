import React, { Component } from 'react';

class Login extends Component {
    redirectToLoginPage() {
        const params = {
            response_type: "code",
            client_id: "416fc494992c4ffeb5003c0b50b9d886",
            scope: "user-read-private user-read-email",
            redirect_uri: 'http://localhost:3000'
        };

        const stringify = (params) => {
            return Object.keys(params).map(key => key + "=" + encodeURIComponent(params[key])).join('&');
        }

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
