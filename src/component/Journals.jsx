import React, { Component } from 'react';
import '../static/css/journals.less';

export default class Journals extends Component {
    render() {  
        const arrhref =
        [
           {
            name: 'Agriculture & Food',
            href : '"https://www.scientific-publications.net/en/open-access-journals/agriculture-and-food',
           },
           {
            name: 'Ecology & Safety',
            href : 'https://www.scientific-publications.net/en/open-access-journals/ecology-and-safety/',
           },
           {
            name: 'Materials, Methods & Technologies',
            href : '../src/static/img/03.jpg',
           },
           {
            name: 'Economy &amp; Business',
            href : '../src/static/img/04.jpg',
           },
           {
            name: 'Educational Alternatives',
            href : '../src/static/img/05.jpg',
           },
           {
            name: 'Language, Individual & Society',
            href : '../src/static/img/06.jpg',
           },
           {
            name: 'Media & Mass Communication',
            href : '../src/static/img/06.jpg',
           },      
        ];  
        
        const list = arrhref.map((item,index) => 
                <li key={index}>
                    <a href={item.href}>{item.name}</a>
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


/*
<ul class="journals">
<li><a href="https://www.scientific-publications.net/en/open-access-journals/agriculture-and-food/">Agriculture &amp; Food</a></li>
<li><a href="https://www.scientific-publications.net/en/open-access-journals/ecology-and-safety/">Ecology &amp; Safety</a></li>
<li><a href="https://www.scientific-publications.net/en/open-access-journals/materials-methods-and-technologies/">Materials, Methods &amp; Technologies</a></li>
<li><a href="https://www.scientific-publications.net/en/open-access-journals/economy-and-business/">Economy &amp; Business</a></li>
<li><a href="https://www.scientific-publications.net/en/open-access-journals/educational-alternatives/">Educational Alternatives</a></li>
<li><a href="https://www.scientific-publications.net/en/open-access-journals/language-individual-and-society/">Language, Individual &amp; Society</a></li>
<li><a href="https://www.scientific-publications.net/en/open-access-journals/media-and-mass-communication/">Media &amp; Mass Communication</a></li>
</ul>


*/