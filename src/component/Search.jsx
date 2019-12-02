import React, { Component } from 'react';


export default class Search extends Component { 
    render () {        
        return (
            <div>
                <h1 style={{fontSize:24, color: '#007399',margin: '0 0 20px 0',lineHeight:"36px" }}>Search</h1>
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

                <Textinput  onChange={this.handleinput}/>

                <Textselect  onClick={this.handleclick}/>

                <p>{this.state.arrselect.join("-")}</p>

                <button style={{padding: "5px 10px",}} content={this.state.text}>Search</button>
            </div>
        );
    }
}

class Textinput extends React.Component{
    render(){
        return(
            <div style={{ margin: '0,0,10px,0'}}>{/*style don't work*/}
            <input type="text" style={{width:500,padding: 5}} placeholder="key words" value={this.props.content} onChange={this.props.onChange}></input>
            </div>
        );
    }
}


class Textselect extends React.Component {
    render() {
        const labelstyle={marginLeft:10};
        return ( 
            <div className="search-where" style={{marginTop:10,}}>
                <span>Search in</span>
                <label style={labelstyle}><input style={{width:12.8}} type="checkbox" name="Title" onClick={this.props.onClick}></input>Title</label>
                <label style={labelstyle}><input style={{width:12.8}} type="checkbox" name="Author name(s)" onClick={this.props.onClick}></input>Author name(s)</label>
                <label style={labelstyle}><input style={{width:12.8}} type="checkbox" name="Abstract" onClick={this.props.onClick}></input>Abstract</label>
                <label style={labelstyle}><input style={{width:12.8}} type="checkbox" name="Key words" onClick={this.props.onClick}></input>Key words</label>     
            </div>
        );
    }
}

