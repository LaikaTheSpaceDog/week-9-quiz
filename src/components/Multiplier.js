import React, { Component } from 'react';
import { Card } from "react-bootstrap";

class Multiplier extends Component {

    render() {

        const { x, y } = this.props; 
        
        return (
            <Card>
                <Card.Header>Multiplier Challenge</Card.Header>
                <Card.Body onClick={ this.handleClick }>
                    <Card.Text>{ x * y }</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Multiplier;