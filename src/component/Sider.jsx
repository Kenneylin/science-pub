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
                <a href='/'  className={item.className} style={{backgroundImage:"url(" + item.image_url + ")"}}> {item.name}</a>               
            </li>
        );
        // console.log(list[0].props.children.props.style);
        // console.log(list[1].props.children.props.style);
        for(let i=0;i<6;i++){
            console.log(list[i].props.children.props.style);
        }
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
            image_url:'../static/img/Sider/journals.jpg'
        },
        {
            name: 'Search',
            path: '/search',          
            className:'search',
            image_url:'../static/../img/Sider/search.jpg'
        },
        {
            name: 'Publication requirements',
            path: '/publication',          
            className:'publication',
            image_url:'../static/../img/Sider/publication.png'           
        },
        {
            name: 'Deadlines and fees',
            path: '/deadlines',           
            className:'deadlines',
            image_url:'../static/../img/Sider/deadlines.png'
        },
        {
            name: 'Submit a manuscipt',
            path: '/submit',           
            className:'submit',
            image_url:'../static/../img/Sider/submit.png'
        },
        {
            name: 'Contacts',
            path: '/contacts',           
            className:'contacts',
            image_url:'../static/../img/Sider/contacts.png'
        },
    ],
};
