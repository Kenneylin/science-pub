import React, { Component } from 'react';
import '../static/css/journals.less';

export default class Journals extends Component {
	render() {
		const arrhref =
			[
				{
					name: 'Agriculture & Food',
					href : '/agriculture',
				},
				{
					name: 'Ecology & Safety',
					href : '',
				},
				{
					name: 'Materials, Methods & Technologies',
					href : '',
				},
				{
					name: 'Economy & Business',
					href : '',
				},
				{
					name: 'Educational Alternatives',
					href : '',
				},
				{
					name: 'Language, Individual & Society',
					href : '',
				},
				{
					name: 'Media & Mass Communication',
					href : '',
				},
			];
		
		const imgurl = '../src/static/img/item.png';
		const list = arrhref.map((item,index) =>
                <li key={index}>
                    <a href={item.href} style={{backgroundImage:"url(" + imgurl + ")" ,backgroundPositionX: 8,backgroundPositionY:8,}}>{item.name}</a>
                </li>
        );
		return (
            <div>
                <h1>Open access scientific journals online</h1>
                <p><strong>International Scientific Publications</strong> represents an aggregate of online-based scientific journals with open access, published by Science Events Ltd and peer-reviewed by experts in the relevant field.</p>
                <p>Open access policy gives us the opportunity to deliver full-text articles from our journals to our readers, free of charge. This allows our authors to reach to a greater audience, increasing the citation rate of their scientific works.</p>
                <p>We have more than 20 years of experience in the line of publishing. During this time we have published hundreds of articles by scientists from more than 30 countries. Currently, we are publishing seven scientific journals on various topics:</p>
                <ul className='alternative'> {list}</ul>
            </div>
		);
	}
}
