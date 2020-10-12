import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0
    };

//style is a reserv. keyword, styles is cust obj to hold diff (css?) attributes to pass to span
    styles = {
        fontSize: 50,
        fontWeight: "bold" 
    };

// use js inside span, in this case {function()} 
//because jsx babel compile, span uses className instead of class (html). Also using Bootstrap!
    render() { 
        return ( 
        <div>
        
        <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className ="btn btn-secondary btn-sm"> Increment</button>
        </div> 
        );
    }
//jsx expressions are normal js objs
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;