import React,{ Component } from 'react';

export default class Myreact extends Component{
    render(){
        return(
            <div>
                <div> myname:{this.props.name}</div>
            </div>
        );
    }
}