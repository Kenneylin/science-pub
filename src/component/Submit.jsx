import React, { Component } from 'react';
import '../static/css/Submit.less';

export default class Submit extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            surname:'',
            title:'',
            organization:'',
            country:'',
            address:'',
            phone:'',
            email:'',
            remail:'',
            cv:'',
            journal:'',
            manuscript:'',  
            box:[],
        };
        this.handleChange = this.handleChange.bind(this);
        this.onInputChange=this.onInputChange.bind(this);
        this.handlebox=this.handlebox.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
//submit the data
    handleSubmit(e){
        e.preventDefault();
        const arr=this.state;
        
    }

    handleChange(e) {
        let name=e.target.name,
            content=e.target.value;
        this.setState({
            [name]: content
        });
    }

    onInputChange(e){
        //es6变量名是一个变量
        let  inputValue = e.target.value,
             inputName = e.target.name;
        this.setState({
             [inputName]:inputValue
        })
   }

   handlebox(e){
       let name=e.target.name;
       let arr=this.state.box.slice();
       let index = arr.indexOf(name);
       index==-1?arr.push(name):arr.splice(index,1);
       this.setState({box:arr});
   }

    render() {         
        const arrtitle =[
            {
                value:'M',
                text:'Mr.'
            },
            {
                value:'F',
                text:'Ms.',
            },
        ];

        const arrcountry=[
            {
                value: 'af',
                text:'Aland Islands'
            },
            {
                value:'al',
                text:'Albania',
            },
            {
                value:'am',
                text:'Armenia',
            },
            {
                value:'as',
                text:'American Samoa',
            },
            {
                value:'cn',
                text:'China',
            },
            {
                value:'ru',
                text:'Russia',
            },
            {
                value:'de',
                text:'Germany',
            },
        ];

        const arrjournal=[
            {
                value:'AF',
                text:'Agriculture & Food',
            },
            {
                value:'ES',
                text:'Ecology & Safety',
            },
            {
                value:'MMT',
                text:'Materials, Methods & Technologies',
            },
            {
                value:'EB',
                text:'Economy & Business',
            },
            {
                value:'EA',
                text:'Educational Alternatives',
            },
            {
                value:'LIS',
                text:'Language, Individual & Society',
            },
            {
                value:'',
                text:'',
            },
        ];
        return (
            <div>

                <form action="?" method="post" encType="multipart/form-data" noValidate="noValidate" onSubmit={this.handleSubmit}>

                <h1>Submit a manuscript</h1>

                <p>Before filling and sending the present form, please, read the <a href="https://www.scientific-publications.net/en/publication-requirements/">Publication requirements</a> (as well as <a href="https://www.scientific-publications.net/download/formatting.pdf" target="_blank">Formatting requirements</a> and the <a href="https://www.scientific-publications.net/download/harvard.pdf" target="_blank">Harvard Referencing Style</a>) and the <a href="https://www.scientific-publications.net/en/deadlines-and-fees/">Deadlines and fees</a>, that apply.</p>

                <Textselect  onChange={this.handleChange} spanname={'Title'} arr={arrtitle} name='title'/>
                <p style={{color:'red'}}>{this.state.title}</p> 

                <label><span>Name</span><input type="text" name='username' className="form-control" onChange={this.onInputChange}/></label>
                <p>{this.state.username}</p> 

                <label><span>Surname</span><input type="text" name = 'surname' className="form-control"  onChange={this.onInputChange}/></label>
                <p>{this.state.surname}</p> 

                <label><span>Organization</span><input type="text" name = 'organization' className="form-control"  onChange={this.onInputChange}/></label>
                <p>{this.state.organization}</p>    

                <Textselect  onChange={this.handleChange} spanname={'Country'} arr={arrcountry} name='country'/>
                <p>{this.state.country}</p>

                <label> <span>Address</span> <input type="text" name='address' className="form-control" onChange={this.onInputChange}/></label>
                <p>{this.state.address}</p> 

                <div className="forminfo">Post-code, city, street, number</div>
               
                <label><span>Phone number</span><input type="text" name='phone' className="form-control" onChange={this.onInputChange}/></label>
                <p>{this.state.phone}</p> 
                
                <label><span> Email</span><input type="text" name='email' className="form-control" onChange={this.onInputChange}/></label>
                <p>{this.state.email}</p> 
               
                <label><span> Re-type Email</span><input type="text" name='remail' className="form-control" onChange={this.onInputChange}/></label>
                <p>{this.state.remail}</p>

                <label><span>CV or Resume</span><input type="file" name="cv"/></label>
                <p>{this.state.cv}</p>

                <div className="forminfo">PDF, DOC and DOCX files allowed. Maximum file size of 3 MB.</div>

                <Textselect  onChange={this.handleChange} spanname={'Journal'} arr={arrjournal} name='journal'/>
                <p style={{color:'red'}}>{this.state.journal}</p> 

                <label><span>Manuscript</span><input type="file" name="manuscript"/></label>
                <p>{this.state.manuscript}</p>

                <div className="forminfo">DOC and DOCX files allowed. Maximum file size of 3 MB.</div>

                <div className='checkbox'>
                <label>
                <input type="checkbox" name="vtori" onChange={this.handlebox} style={{padding:0,width:12.8}}/> I would like to submit a second manuscript for publication in the same volume
                </label>


                <label >
                <input type="checkbox" name="faktura" onChange={this.handlebox} style={{padding:0,width:12.8}} /> I want to receive an invoice to a company or an organization
                </label>

                <label>
                <input type="checkbox" name="priemam" onChange={this.handlebox} style={{padding:0,width:12.8}}/> I have read and agreed to the 
                <a href="https://www.scientific-publications.net/terms-and-conditions.html" target="_blank" rel="nofollow" className="fancybox">Terms and Conditions</a>
                </label>
                </div>

                {this.state.box.join('-')}

                <div className="submit"><input type="submit" name="izprati" value="Submit" /></div>

                </form>
            </div>
        );
    }
}


class Textselect extends React.Component {
    render() {
        const arr = this.props.arr;
        const list=arr.map((item,index)=>
            <option key={index.toString()} value={item.value}>{item.text}</option>
            ,{/*键”是创建元素列表时需要包括的特殊字符串属性。<li key={number.toString()}> 
            // Correct! Key should be specified inside the array.*/}
        );
        return (          
                <label> 
                <span>{this.props.spanname}</span>
                <select name={this.props.name} onChange={this.props.onChange}>
                <option value="none">— please select —</option> 
                    {list}    
                </select>
                </label>
        )
    }
}



