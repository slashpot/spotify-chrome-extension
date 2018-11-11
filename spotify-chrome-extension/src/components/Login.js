import React, { Component } from 'react';
import { stringify } from '../helper/util';
import { constant } from '../helper/constant';

class Login extends Component {
    constructor(props) {
        super(props);
        this.setAuthorizePage = this.setAuthorizePage.bind(this);
        this.openLoginPage = this.openLoginPage.bind(this);
    }
    setAuthorizePage() {
        localStorage.setItem("page",constant.AUTH);
        this.props.handler(constant.AUTH);
    }
    openLoginPage() {
        const params = {
            response_type: "code",
            client_id: "416fc494992c4ffeb5003c0b50b9d886",
            scope: "user-read-playback-state user-read-currently-playing user-modify-playback-state",
            redirect_uri: 'http://localhost:3001'
        };
        window.open("https://accounts.spotify.com/authorize?" + stringify(params));
        this.setAuthorizePage();
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <button onClick={this.openLoginPage}>Login</button>
            </div>
        );
    }
}

export default Login;
