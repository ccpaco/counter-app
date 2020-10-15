import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0,
        tags : ["tag 1", "tag 2", "tag 3"]
    };

    constructor(){
        super();
        console.log("Constructor", this);
    }

    handleIncrement(){
        console.log('Increment Clicked', this);
    }
// use js inside span, in this case {function()} 
//because jsx babel compile, span uses className instead of class (html). Also using Bootstrap!
    render() { 
        return ( 
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick={this.handleIncrement} 
                className ="btn btn-secondary btn-sm"
                >
                 Increment
                </button>
            </div> 
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
    
}
 
export default Counter;