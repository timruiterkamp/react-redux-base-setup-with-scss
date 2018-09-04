import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import 'flexboxgrid-sass';
import './scss/index.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header></Header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Footer></Footer>
      </div>
    );
  }
}

export default App;
