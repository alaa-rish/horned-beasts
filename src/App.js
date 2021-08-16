import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import SelectedBeast from './components/SelectedBeast.js';

let data = require ("./components/data.json");

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {},
      showFlag: false,
    };
  }

  showBeastDetails = beastTitle => {
      let selectedBeast = data.find(beast => {
        if (beast.title === beastTitle) {
          return beast;
        }
      });
      this.setState({selectedBeast: selectedBeast, showFlag: true,});
      console.log(this.state.showFlag);
  };

  closeModal = () => {
    this.setState({selectedBeast: {}, showFlag: false,});
  };

  render() {

    return (
      <>
        <Header/>
        <Main data={data} showBeastDetails={this.showBeastDetails}/>
        <SelectedBeast selectedBeast={this.state.selectedBeast} showFlag={this.state.showFlag} closeModal={this.closeModal}/>
        <Footer/>
      </>

    )
  }
}

export default App;