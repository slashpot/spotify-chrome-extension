import React, { Component } from 'react';

class Authorize extends Component {
    constructor(props) {
        super(props);
        this.state = { token: "" };
        this.setStateToken = this.setStateToken.bind(this);
        this.OnSetRefreshToken=this.OnSetRefreshToken.bind(this);
    }
    setStateToken(event) {
        this.setState({ token: event.target.value });
    }
    OnSetRefreshToken() {
        this.props.onSetRefreshToken(this.state.token);
    }
    render() {
        return (
            <div>
                <h2>refresh_token</h2>
                <input type="text" onChange={this.setStateToken} />
                <button onClick={this.OnSetRefreshToken}>Submit</button>
            </div>
        )
    }
}

export default Authorize;