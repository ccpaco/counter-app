import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0
    };

// use js inside span, in this case {function()} 
//because jsx babel compile, span uses className instead of class (html). Also using Bootstrap!
    render() { 
        

        return ( 
        <div>
        
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className ="btn btn-secondary btn-sm"> Increment</button>
        </div> 
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

//jsx expressions are normal js objs
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;