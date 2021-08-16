
import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import {Form, FloatingLabel} from "react-bootstrap/";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          filteredData: this.props.data,
        };
    }

    filterData = (event) => {
        if (event.target.value === 'ALL') {
            this.setState({filteredData: this.props.data});
            return;
        }
        let filteredData = this.props.data.filter((item) => {
            if (item.horns === Number(event.target.value)) {
                return 1;
            } 
        });
        this.setState({filteredData: filteredData});
    }

    render() {

        return (

    <>
        <Form onChange={this.filterData}>
            <FloatingLabel controlId="floatingSelect" label="Select number of horns">
                <Form.Select aria-label="Select number of horns">
                    <option>ALL</option>
                    <option value= "1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="100">100</option>
                </Form.Select>
            </FloatingLabel>
        </Form>

        {this.state.filteredData.map( (item, i) => {
          return (
            
            <HornedBeasts
              key={i}
              title={item.title}
              imageUrl={item.image_url}
              description={item.description}
              showBeastDetails={this.props.showBeastDetails}
            />
          );
        })}
      </>

        );
    }
}

export default Main;