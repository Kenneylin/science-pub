import React, { Component } from 'react';
import '../../static/css/basic.less'



export default class Basic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            extendone: false,
            extendtwo: false,
        }
        this.handleClickone = this.handleClickone.bind(this);
        this.handleClicktwo = this.handleClicktwo.bind(this);
    }

    handleClickone(e) {
        e.target.className == "titleone" ? e.target.className = "titleone_open" : e.target.className = "titleone";
        this.setState({ extendone: !this.state.extendone });
    }
    handleClicktwo(e) {
        e.target.className == "titletwo" ? e.target.className = "titletwo_open" : e.target.className = "titletwo";
        this.setState({ extendtwo: !this.state.extendtwo })
    }
    render() {
        const stylecontentone = { display: this.state.extendone ? 'block' : 'none' };
        const stylecontenttwo = { display: this.state.extendtwo ? 'block' : 'none' };
        const arr = this.props.arr;
        const list =
            <ul className="list">
                {arr.map((item, index) =>
                    <li key={index}>
                        <a href={item.href}>{item.value}</a>
                    </li>
                )}
            </ul>
        return (
            <div className='food'>
                <h1 style={{ margin: 0, }}>{this.props.title}</h1>
                <p>ISSN {this.props.number} (online)</p>
                {list}
                <p>All issues, published prior to December, 31, 2013 are moved to <a href="">Archive</a> as a result of changes in the journals structure.</p>
                <div className="accordion">
                    <div className="titleone" onClick={this.handleClickone} >Topics</div>
                    <div className="content" style={stylecontentone}>
                        {this.props.titleone}
                    </div>
                </div>

                <div className="accordion">
                    <div className="titletwo" onClick={this.handleClicktwo}>Editorial board</div>
                    <div className="content" style={stylecontenttwo}>
                        {this.props.titletwo}
                    </div>
                </div>
            </div>
        );
    }
}
