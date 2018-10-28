import React, { Component } from 'react';
import {withRouter}from 'react-router-dom';
import {stringify} from '../util';

class Login extends Component {
    constructor(props){
        super(props);
        this.openLoginPage=this.openLoginPage.bind(this);
    }
    openLoginPage() {
        const params = {
            response_type: "code",
            client_id: "416fc494992c4ffeb5003c0b50b9d886",
            scope: "user-read-playback-state user-read-currently-playing user-modify-playback-state",
            redirect_uri: 'http://localhost:3001'
        };
        window.open("https://accounts.spotify.com/authorize?" + stringify(params));
        this.props.history.push('/authorize');
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

export default withRouter(Login);
