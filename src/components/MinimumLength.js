import React, { Component } from 'react';

class MinimumLength extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value })
    }

    alert() {
        if (this.state.input.length < 30) {
            return "Too short!"
        } else {
            return "All good!"
        }
    }
    
    render() {
        const { input } = this.state;

        return (
            <>
                <h2>Minimum Length Challenge</h2>
                <form>
                    <input onChange={ this.handleChange } value={ input }></input>
                </form>
                <p>{ this.alert() }</p>
            </>
        );
    }
}

export default MinimumLength;