import React, { Component } from 'react';
import '../static/css/header.less';

export default class Header extends Component {
    render() {  
        const arrimg =
        [
           {
            name: 'Our journals',
            src : '../src/static/img/01.jpg',
           },
           {
            name: 'Seach',
            src : '../src/static/img/02.jpg',
           },
           {
            name: 'Publication requirements',
            src : '../src/static/img/03.jpg',
           },
           {
            name: 'Deadlines and fees',
            src : '../src/static/img/04.jpg',
           },
           {
            name: 'Submit a manuscipt',
            url : '../src/static/img/05.jpg',
           },
           {
            name: 'Contacts',
            src : '../src/static/img/06.jpg',
           },
        ];       
        return (
            <div>
                <img src='../src/static/img/06.jpg'></img>
            </div>
        );
    }
}