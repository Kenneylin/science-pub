import React, { Component } from 'react';
import '../static/css/deadlines.less';

export default class Deadlines extends Component {
    render() {
        const arr = [
            {
                titleone: 'Publication fee for one article',
                titletwo: 'Up to 60 calendar days after payment confirmation',
                value: '180 Euro',
            },
            {
                titleone: 'Publication fee for second article in the same volume',
                titletwo:'Up to 60 calendar days after payment confirmation',
                value: '120 Euro',
            },
            {
                titleone: 'Express publication fee for one article',
                titletwo:'Up to 30 calendar days after payment confirmation',
                value: '250 Euro',
            },
        ];
        
        const showList = arr.map((item, index) => {
            return (
                <div key={index}>
                    <div className='left'>
                        <div>{item.titleone}</div>
                        <div className='titletwo'>{item.titletwo}</div>
                    </div>
                    <div className='right'>{item.value}</div>
                </div>
            );
        });
        return (
            <div className='Deadlines--wrapper'>
                <h1>Deadlines and fees</h1>
                <p>In order to grant open access to hundreds of scientific articles published in our journals, we face certain costs, e.g. publishing inquiries processing, journals’ layout, development of specialized software, web hosting, and advertisement. We cover these costs by collecting publication fees from the authors.                   
                </p>
                <div className='list'>{showList}</div>
                <span>.</span>
        
                <div style={{textAlign: 'right', marginBottom : 20,}}>
                    All taxes are in Euro and include VAT.
                </div>
 
                
                <div className="important">The fee is paid only when the submitted manuscript is approved for publication.<br></br>The number of authors is not related to the amount of the fee.<br></br>Authors receive a certificate for every published article.</div>
                <p>Confirmation whether the submitted manuscript is approved for publication shall be received up to <strong>30 calendar days</strong> after submission.</p>
                <p>After the approval is received, the publication fee should be paid via bank transfer within <strong>10 calendar days</strong>. Please, don’t forget to indicate your incoming number as a reason for the transfer. Bank account information, exact amount of the fee and incoming number are to be found in the pro forma invoice in the confirmation email. <strong>All bank charges are to be paid by the authors. Please, inform your bank about this when ordering the transfer.</strong></p>
                <p style={{marginBottom:50}}>Invoices will be sent via email as a PDF attachment. In order to receive an invoice on behalf of a company or organization you must state this request in the "Submit a manuscript" form. <strong>If the bank transfer is ordered by a natural person, it is not possible an invoice to a company or organization to be issued afterwards, and vice-versa.</strong></p>
            </div>
        );
    }
}
