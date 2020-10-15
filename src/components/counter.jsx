import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0,
        tags : ["tag 1", "tag 2", "tag 3"]
    };

    renderTags(){
        if (this.state.tags.length === 0) return <p> There are no tags! </p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
        
    }
// use js inside span, in this case {function()} 
//because jsx babel compile, span uses className instead of class (html). Also using Bootstrap!
    render() { 
        return ( 
        <div>
            { this.state.tags.length === 0 && 'Please add new tags'}
            { this.renderTags() }
        </div> 
        );
    }
    
}
 
export default Counter;