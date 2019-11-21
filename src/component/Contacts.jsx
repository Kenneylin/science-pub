import React, { Component } from 'react';
import '../static/css/contacts.less';

export default class Contact extends Component {
    render() {
        const Company = {
            name: 'Company name\nScience Events Ltd',
            phoneE: 'Phone number (English)\n+359 878 404 118',
            Address: 'Address\nOborishte 21, 8000 Burgas, Bulgaria',
            phoneR: 'Phone number (Russian)\n+359 886 927 223',
        }
        return (
            <div className='contacts'>
                <table style={{ whiteSpace: 'pre-wrap'}}>
                    <thead className='thead'>
                        <tr>
                            <th>Contacts</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {Company.name}
                            </td>
                            <td>
                                {Company.Address}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {Company.phoneE}
                            </td>
                            <td>
                                {Company.phoneR}
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}