import React, { Component } from 'react';
import { Card } from "react-bootstrap";

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
            <Card>
                <Card.Header>Even Clicks Challenge</Card.Header>
                <Card.Body onClick={ this.handleClick }>
                    {(toggled === false) ? <Card.Text onClick={ this.handleClick}>{ children }</Card.Text> :
                    <Card.Text onClick={ this.handleClick }>Nothing to see here...</Card.Text>}
                </Card.Body>
            </Card>
        );
    }
}

export default HideMe;