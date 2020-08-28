import React, { Component } from 'react';
import { Card } from "react-bootstrap";

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
            <Card>
                <Card.Header>Count By Challenge</Card.Header>
                <Card.Body onClick={ this.handleClick }>
                    <Card.Text>{ count }</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default CountBy;