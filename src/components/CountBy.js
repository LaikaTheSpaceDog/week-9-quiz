import React, { Component } from 'react';

class CountBy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { step } = this.props;
        let current = this.state.count;
        this.setState({count: current + step});
    }
    
    render() {
        const { count } = this.state;

        return (
            <>
                <h2>Count By Challenge</h2>
                <p onClick={ this.handleClick }>{ count }</p>
            </>
        );
    }
}

export default CountBy;