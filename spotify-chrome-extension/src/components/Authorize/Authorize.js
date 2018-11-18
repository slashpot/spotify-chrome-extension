import React, { Component } from 'react';
import { page } from '../../helper/constant';
import { setPage } from '../../helper/util';

class Authorize extends Component {
    constructor(props) {
        super(props);
        this.state = { token: "" };
        this.setStateToken = this.setStateToken.bind(this);
        this.OnSetRefreshToken = this.onSetRefreshToken.bind(this);
        this.onBackToLogin=this.onBackToLogin.bind(this);
    }
    setStateToken(event) {
        this.setState({ token: event.target.value });
    }
    onSetRefreshToken() {
        this.props.onSetRefreshToken(this.state.token);
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
                <button onClick={this.onSetRefreshToken}>Submit</button>
                <div>
                    <button onClick={this.onBackToLogin}>back to login</button>
                </div>
            </div>
        )
    }
}

export default Authorize;