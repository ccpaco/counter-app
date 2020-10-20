import React, { Component } from 'react';
//Take your time, learn well. There are a lot of diff syntaxes at play here. 10-15-2020


class Counter extends Component {
    // REMOVE state and handleIncrement in order to reset counters.value

    // state = { 
    //     value : this.props.counter.value
    // };

    /* constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    } */

    // handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1});
    // };
// use js inside span, in this case {function()} 
//because jsx babel compile, span uses className instead of class (html). Also using Bootstrap!
    componentDidUpdate(prevProps, prevState){
        console.log('prevProps',prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value){
            // Ajax call for new data
        }
    } 

    componentWillUnmount(){
        console.log('Counter - Unmount');
    }

    render() { 
        console.log('Counter - Rendered');

        return (
        <div className="row">
            <div className="col-1">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
            <div className="col">
                <button
                onClick={ () => this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm"
                >
                +
                </button>
                <button 
                onClick={ () => this.props.onDecrement(this.props.counter)}
                className="btn btn-secondary btn-sm m-2"
                disabled={this.props.counter.value === 0 ? 'disabled' : ''}
                > 
                - 
                </button>
                <button 
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm"> 
                X
                </button> 
            </div>
        </div>
        );
    }

    // renderTags() {
    //     return <ul>
    //         {this.state.tags.map((tag) => (
    //             <li key={tag}>{tag}</li>
    //         ))}
    //     </ul>;
    // }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;

    }

    formatCount(){
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
    
}
 
export default Counter;