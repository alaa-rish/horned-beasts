
import React from 'react';
import { Modal, Button, Card} from "react-bootstrap/";

class SelectedBeast extends React.Component {

    render() {

        return (
        <>
       <Modal show={this.props.showFlag} onHide={this.props.closeModal} style={{width: '20rem'}}>
           <Modal.Body>
           <Card>
               <Card.Title>{this.props.selectedBeast.title}</Card.Title>
               <Card.Img variant="top" src={this.props.selectedBeast.image_url} style={{width: '300px', height: '300px'}}></Card.Img>
               <Card.Body>
                  <Card.Text>{this.props.selectedBeast.description}</Card.Text>
                  <Button variant="secondary" onClick={this.props.closeModal}>Close</Button>
                </Card.Body>
           </Card>
           </Modal.Body>
       </Modal>
       </>

        );
    }
}

export default SelectedBeast;