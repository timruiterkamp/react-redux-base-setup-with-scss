import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './scss/index.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header></Header>

        <section className="content">
         <h2>Hi There, </h2>

         <p>This is just a very basic setup of react with scss included and some mixins i use.<br />
         Feel free to edit everything starting with the src/App.js.</p>
        </section>

        <Footer></Footer>

      </div>
    );
  }
}

export default App;
