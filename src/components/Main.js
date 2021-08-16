
import React from 'react';
import HornedBeasts from './HornedBeasts.js';

class Main extends React.Component {

    render() {

        return (

    <>
        {this.props.data.map( (item, i) => {
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