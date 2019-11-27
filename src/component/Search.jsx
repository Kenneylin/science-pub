import React, { Component } from 'react';
//import '../static/css/Sider.less';

export default class Search extends Component {
   
    
    render () {
        
        return (
            <div>
                Search
                <Childinput/>
                <Childbutton/>
            </div>
           
        );
    }
}
function Childinput(){
    return(
        <div>
            <h1>Search</h1>
            <input type="text" className="keywords"  style= {{padding: 5,width:500,}} pattern=".{4,60}"  title="Between 4-60 characters" placeholder="Key words"></input>
        </div>
    );
}

function Childbutton(){
    return(
        <div>            
            <button type="submit">Search</button>
        </div>
    );
}

