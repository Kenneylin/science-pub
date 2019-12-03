import React, { Component } from 'react';
import '../static/css/sider.less';



export default class Sider extends Component {
	handleClick (e) {
		const { pathMap } = this.props;
		e.preventDefault();
        if (e.target.localName !== 'a') return;
        //找到点击的a中名称和pathmap中定义的name相同的item
		const item = pathMap.find(
                (item) => 
                item.name === e.target.innerText
            );
		item && item.path && this.props.history.push(item.path);
	}

	render () {
		const { pathMap } = this.props;
		const list = pathMap.map((item, index) =>
            <li key={index}>
                <a href='/'  className={item.className} style={{backgroundImage:"url(" + item.image_url + ")"}}> {item.name}</a>
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
                <div className="copy">© 2019 Science Events Ltd<br></br><a href="/terms">Terms of Use</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="/private">Privacy Policy</a></div>
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
			image_url:'../src/static/img/Sider/journals.jpg',
		},
		{
			name: 'Search',
			path: '/search',
			className:'search',
			image_url:'../src/static/img/Sider/search.jpg',
		},
		{
			name: 'Publication requirements',
			path: '/publication',
			className:'publication',
			image_url:'../src/static/img/Sider/publication.png',
		},
		{
			name: 'Deadlines and fees',
			path: '/deadlines',
			className:'deadlines',
			image_url:'../src/static/img/Sider/deadlines.png',
		},
		{
			name: 'Submit a manuscipt',
			path: '/submit',
			className:'submit',
			image_url:'../src/static/img/Sider/submit.png',
		},
		{
			name: 'Contacts',
			path: '/contacts',
			className:'contacts',
			image_url:'../src/static/img/Sider/contacts.png',
		},
	],
};
