import React, { Component } from 'react';
//Take your time, learn well. There are a lot of diff syntaxes at play here. 10-15-2020


class Counter extends Component {
    state = { 
        value : this.props.value
    };

    /* constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    } */

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1});
    };
// use js inside span, in this case {function()} 
//because jsx babel compile, span uses className instead of class (html). Also using Bootstrap!
    render() { 
        return (
          <div className = "m-4">
            <h1>Dynamic Render! <mark>{this.props.title}</mark></h1>
            <button
              onClick={ () => this.handleIncrement() }
              className="btn btn-secondary btn-sm"
            >
              Increment
            </button>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            
            
          </div>
        );
    }

    renderTags() {
        return <ul>
            {this.state.tags.map((tag) => (
                <li key={tag}>{tag}</li>
            ))}
        </ul>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
    
}
 
export default Counter;