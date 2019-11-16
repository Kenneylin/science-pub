import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        console.log(this.props);
        return (
            <div>header should show img {this.props.location.pathname}</div>
        );
    }
}