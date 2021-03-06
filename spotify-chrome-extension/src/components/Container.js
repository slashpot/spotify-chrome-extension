import React, { Component } from 'react';
import { page } from '../helper/constant';
import Login from './Login';
import Authorize from './Authorize/AuthorizeContainer';

class Container extends Component {
    constructor(props) {
        super(props);
        let pageName = localStorage.getItem('page');
        this.state = { page: pageName ? pageName : page.LOGIN };
        this.getPage = this.getPage.bind(this);
        this.setPageHandler = this.setPageHandler.bind(this);
    }

    getPage(page) {
        return {
            Login: <Login handler={this.setPageHandler} />,
            Authorize: <Authorize handler={this.setPageHandler} />
        }[page];
    }

    setPageHandler(page) {
        this.setState({ page: page });
    }

    render() {
        return (
            <div>
                {this.getPage(this.state.page)}
            </div>
        );
    }
}

export default Container