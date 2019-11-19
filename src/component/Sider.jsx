import React, { Component } from 'react';
import '../static/css/sider.less';

export default class Sider extends Component {
    render() {
        let str=" © 2019 Science Events Ltd</br>huanhang";
        return (
            <div className='Sider'>
                <div>
                    <p>International</p>
                    <p>Scientific</p>
                    <p>Publications</p>
                </div>
                <ul>
                    <li><a href="">Our journals</a></li>
                    <li><a href="">Seach</a></li>
                    <li><a href="">Publication requirements</a></li>
                    <li><a href="">Deadlines and fees</a></li>
                    <li><a href="">Submit a manuscipt</a></li>
                    <li><a href="">Contacts</a></li>
                </ul>
                <div className="copy">
                    <div>© 2019 Science Events Ltd</div>
                    <div>
                        <a href="">Terms of Use</a>&nbsp;&nbsp;·&nbsp;&nbsp;
                        <a href="">Privacy Policy</a>
                    </div>
                </div>
            </div>
        );
    }
}