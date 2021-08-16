
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

    render() {

        return (

            <>
            <Card style={{ width: '18rem' }}>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Img variant="top" src={this.props.imageUrl} style={{width: '300px'}}></Card.Img>
                <Card.Body></Card.Body>
                <Card.Text>{this.props.description}</Card.Text>
                <Card.Text>{this.state.votes} ♥</Card.Text>
                <Button onClick={this.increaseVotes}>Vote</Button>
            </Card>
            </>

        );
    }
}

export default HornedBeasts;