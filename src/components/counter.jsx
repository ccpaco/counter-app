import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0
    };

// use js inside span, in this case {function()} 
    render() { 
        return ( 
        <React.Fragment>
        <span>{this.formatCount()}</span>
        <button> Increment</button>
        </React.Fragment> 
        );
    }
//jsx expressions are normal js objs
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;