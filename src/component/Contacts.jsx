import React, { Component } from 'react';
import '../static/css/contacts.less';

export default class Contact extends Component {
    render() {
        const arr = [
            {
                title: 'Company name',
                value: 'Science Events Ltd',
            },
            {
                title: 'Phone number (English)',
                value: '+359 878 404 118',
            },
            {
                title: 'Address',
                value: 'Oborishte 21, 8000 Burgas, Bulgaria',
            },
            {
                title: 'Phone number (Russian)',
                value: '+359 886 927 223',
            },
        ];
        
        const showList = arr.map((item, index) => {
            return (
                <div key={index}>
                    <div>{item.title}</div>
                    <div>{item.value}</div>
                </div>
            );
        });
        return (
            <div className='contacts'>
                <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'normal',
                    color: '#007399',
                    margin: '0 0 20px 0',
                }}>Contacts</h3>
                <div className='contact-wrapper'>
                    {showList}
                    <div>
                        <div>Email</div>
                        <div><a style={{
                             color: '#007399',
                        }}href='office@scientific-publications.net'>office@scientific-publications.net</a></div>
                    </div>
                </div>
            </div>
        );
    }
}