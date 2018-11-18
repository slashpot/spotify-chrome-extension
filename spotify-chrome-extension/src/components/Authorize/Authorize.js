import React, { Component } from 'react';
import { page } from '../../helper/constant';
import { setPage, sendRefreshRequest } from '../../helper/util';

class Authorize extends Component {
    constructor(props) {
        super(props);
        this.state = { token: "" };
        this.setStateToken = this.setStateToken.bind(this);
        this.onSendRefreshRequest = this.onSendRefreshRequest.bind(this);
        this.handleApiRequest=this.handleApiRequest.bind(this);
        this.onBackToLogin = this.onBackToLogin.bind(this);
    }
    setStateToken(event) {
        this.setState({ token: event.target.value });
    }
    onSendRefreshRequest() {
        sendRefreshRequest(this.state.token)
            .then(response => response.json())
            .then(this.handleApiRequest)
            .catch(function (err) {
                console.log('err: ', err);
            });
    }
    handleApiRequest(data){
        if (data.access_token) {
            this.props.onSetRefreshToken(this.state.token);
        }
        else {
            console.log(data);
        }
    }

    onBackToLogin() {
        setPage(page.LOGIN);
        this.props.handler(page.LOGIN);
    }
    render() {
        return (
            <div>
                <h2>refresh_token</h2>
                <input type="text" onChange={this.setStateToken} />
                <button onClick={this.onSendRefreshRequest}>Submit</button>
                <div>
                    <button onClick={this.onBackToLogin}>back to login</button>
                </div>
            </div>
        )
    }
}

export default Authorize;