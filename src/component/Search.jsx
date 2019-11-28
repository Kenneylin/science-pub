import React, { Component } from 'react';
//import '../static/css/Sider.less';

export default class Search extends Component { 
    render () {        
        return (
            <div>
                Search
                <Textbutton/>
            </div>
           
        );
    }
}


class Textbutton extends React.Component{
    constructor(){
        super();
        this.state={
            text:1,
            arrselect:[],
        }
        this.handleinput=this.handleinput.bind(this);
        this.handleclick=this.handleclick.bind(this);
    }

    handleinput(e){
        this.setState({text:e.target.value});
    }


    /*创建一个数组，每次点击时，将获得的值push进入数组中，更新数组 */

    handleclick(e){
        let arr=this.state.arrselect.slice();
        let name = e.target.name;
        let index = arr.indexOf(name);
        index == -1?arr.push(name):arr.slice(index,1);
        this.setState(
            {arrselect:arr}
        );
    }
    render(){
        return(
            <div>
                <p>  {this.state.text} </p>

                <Textinput onChange={this.handleinput}/>

                <Textselect onClick={this.handleclick}/>

                <p>{this.state.arrselect.join("-")}</p>

                <button content={this.state.text}>Search</button>
            </div>
        );
    }
}

class Textinput extends React.Component{
    render(){
        return(
            <div>
            <p></p>
            <input type="text" placeholder="key words" value={this.props.content} onChange={this.props.onChange}></input>
            </div>
        );
    }
}


class Textselect extends React.Component {
    render() {
        return (
            <div className="search-where">
                <span>Search in</span>
                <label><input type="checkbox" name="Title" onClick={this.props.onClick}></input>Title</label>
                <label><input type="checkbox" name="Author name(s)" onClick={this.props.onClick}></input>Author name(s)</label>
                <label><input type="checkbox" name="Abstract" onClick={this.props.onClick}></input>Abstract</label>
                <label><input type="checkbox" name="Key words" onClick={this.props.onClick}></input>Key words</label>     
            </div>
        );
    }
}

