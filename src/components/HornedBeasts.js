
import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          votes: 0,
        };
      }

    increaseVotes = () => {
        this.setState({
            votes: this.state.votes + 1
        })
    }

    showBeastDetails = () => {
        this.props.showBeastDetails(this.props.title);
    }

    render() {

        return (

            <>
            <Card style={{ width: '18rem' }}>
                <Card.Title onClick={this.showBeastDetails}>{this.props.title}</Card.Title>
                <Card.Img variant="top" src={this.props.imageUrl} style={{width: '300px'}} onClick={this.showBeastDetails}></Card.Img>
                <Card.Body>
                  <Card.Text>{this.props.description}</Card.Text>
                  <Card.Text>{this.state.votes} ♥</Card.Text>
                  <Button onClick={this.increaseVotes}>Vote</Button>
                </Card.Body>
            </Card>
            </>

        );
    }
}

export default HornedBeasts;