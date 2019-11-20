import React, { Component } from 'react';
import '../static/css/header.less';

export default class Header extends Component {
    render() {
        console.log(this.props);
        return (
            <div>header should show img {this.props.location.pathname}</div>
        );
    }
}