import React, { Component } from 'react';
import '../static/css/header.less';

export default class Header extends Component {
    render() {
        const arrimg =
        {
            '/journals': '../src/static/img/journal.jpg',
            '/search': '../src/static/img/search.jpg',
            '/contacts': '../src/static/img/contact.jpg',
            '/publication': '../src/static/img/publication.jpg',
            '/submit': '../src/static/img/sumbit.jpg',
            '/deadlines': '../src/static/img/fees.jpg',
            '/terms': '../src/static/img/terms.jpg',
            '/private': '../src/static/img/private.jpg',
            '/': '../src/static/img/journal.jpg',
        };
        const imgPath = arrimg[this.props.location.pathname];
        return (
            <div>
                <img src={imgPath}></img>
            </div>
        );
    }
}