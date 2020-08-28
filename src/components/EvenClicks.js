import React, { Component } from 'react';
import { Card } from "react-bootstrap";

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
            <Card>
                <Card.Header>Even Clicks Challenge</Card.Header>
                <Card.Body onClick={ this.handleClick }>
                    {(total % 2 === 0) ? <Card.Text onClick={ this.handleClick}>Even</Card.Text> :
                    <Card.Text onClick={ this.handleClick }>Odd</Card.Text>}
                </Card.Body>
            </Card>
        );
    }
}

export default EvenClicks;