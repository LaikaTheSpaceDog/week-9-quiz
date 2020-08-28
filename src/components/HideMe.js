import React, { Component } from 'react';

class HideMe extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggled: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({toggled: true});
    }
    
    render() {
        const { children } = this.props;
        const { toggled } = this.state;

        return (
            <>
                <h2>Hide Me Challenge</h2>
                {(toggled === false) ? <p onClick={ this.handleClick}>{ children }</p> :
                <p onClick={ this.handleClick }>Nothing to see here...</p>}
            </>
        );
    }
}

export default HideMe;