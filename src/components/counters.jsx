import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            { title: 'Onezan', id: 1, value: 1},
            { title: 'Twozan', id: 2, value: 0},
            { title: 'Threezan', id: 3, value: 0},
            { title: 'Fourzan', id: 4, value: 4}
        ]
    };

    render() { 
        return ( 
        <div>
            {this.state.counters.map(counter => 
            <Counter key={counter.id} value={counter.value} title={counter.title}/>
            
            )}
        </div> 
        );
    }
}
 
export default Counters;