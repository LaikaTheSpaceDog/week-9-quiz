import React, { Component } from 'react';
import { Form, Alert } from "react-bootstrap";


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
        if (this.state.input.length < this.props.length) {
            return "Too short!"
        } else {
            return "All good!"
        }
    }
    
    render() {
        const { input } = this.state;

        return (
            <>
                <Form>
                    <Form.Label>Minimum Length Challenge</Form.Label>
                    <Form.Control onChange={ this.handleChange } value={ input }></Form.Control>
                </Form>
                <Alert variant="primary">{ this.alert() }</Alert>
            </>
        );
    }
}

export default MinimumLength;