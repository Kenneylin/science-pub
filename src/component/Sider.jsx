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
                <a href='/'>{item.name}</a>
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
            </div>
        );
    }
}
Sider.defaultProps = {
    pathMap: [
        {
            name: 'Our journals',
            path: '/Journals',
        },
        {
            name: 'Search',
            path: '/Search',
        },
        {
            name: 'Publication requirements',
            path: '/Publication',
        },
        {
            name: 'Deadlines and fees',
            path: '/Deadlines',
        },
        {
            name: 'Submit a manuscipt',
            path: '/Submit',
        },
        {
            name: 'Contacts',
            path: '/contacts',
        },
    ],
};
