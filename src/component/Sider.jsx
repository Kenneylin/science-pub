import React, { Component } from 'react';
import '../static/css/Sider.less';

export default class Sider extends Component {
    handleClick (e) {
        const { pathMap } = this.props;
        e.preventDefault();
        if (e.target.localName !== 'a') return;
        const item = pathMap.find((item) => item.name === e.target.innerText);
        item && item.path && this.props.history.push(item.path);
    }
    
    render () {
        const { pathMap } = this.props;
        const list = pathMap.map((item, index) => 
            <li key={index}>
                <a href='/'> {item.name}</a>
            </li>
        );
        return (
            <div className='nv'>
                    <div className="p">
                         <div>International</div>
                         <div>Scientific</div>
                         <div>Publications</div>
                    </div>
                <ul id='nav' onClick={(e) => this.handleClick(e)}>
                    {list}
                </ul>
                <div className="copy">© 2019 Science Events Ltd<br></br><a href="https://www.scientific-publications.net/en/terms-of-use/">Terms of Use</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="https://www.scientific-publications.net/en/privacy/">Privacy Policy</a></div>
            </div>
        );
    }
}
Sider.defaultProps = {
    pathMap: [
        {
            name: 'Our journals',
            path: '/journals',
            className:'journals',
        },
        {
            name: 'Search',
            path: '/search',
            className:'search',
        },
        {
            name: 'Publication requirements',
            path: '/publication',
            className:'publication',
            
        },
        {
            name: 'Deadlines and fees',
            path: '/deadlines',
            className:'/deadlines',
        },
        {
            name: 'Submit a manuscipt',
            path: '/submit',
            className:'submit',
        },
        {
            name: 'Contacts',
            path: '/contacts',
            className:'contacts',
        },
    ],
};
