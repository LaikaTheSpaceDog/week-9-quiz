import React, { Component } from 'react';

class Multiplier extends Component {

    render() {

        const { x, y } = this.props; 
        
        return (
            <>
                <h2>Multiplier Challenge</h2>
                <p>{ x  * y }</p>
            </>
        );
    }
}

export default Multiplier;