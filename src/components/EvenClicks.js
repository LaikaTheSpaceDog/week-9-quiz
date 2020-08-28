import React, { Component } from 'react';

class EvenClicks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            total: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let current = + this.state.total;
        this.setState({total: current + 1});
    }
    
    render() {
        let { total } = this.state;
        
        return (
            <>
                <h2>Even Clicks Challenge</h2>
                {(total % 2 === 0) ? <p onClick={ this.handleClick}>Even</p> :
                <p onClick={ this.handleClick }>Odd</p>}
            </>
        );
    }
}

export default EvenClicks;