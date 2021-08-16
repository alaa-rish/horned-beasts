
import React from 'react';
import HornedBeasts from './HornedBeasts.js';

let data = require ("./data.json");

class Main extends React.Component {

    render() {

        return (

    <>
        {data.map( (item, i) => {
          return (
            
            <HornedBeasts
              title={item.title}
              imageUrl={item.image_url}
              description={item.description}
            />
          );
        })}
      </>

        );
    }
}

export default Main;