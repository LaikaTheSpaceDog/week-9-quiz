import React, { Component } from 'react';

class Multiplier extends Component {

    render() {

        let { x } = this.props; 
        let { y } = this.props;
        
        return (
            <>
                <p>{ x  * y }</p>
            </>
        );
    }
}

export default Multiplier;