import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import InputPreview from '../components/inputPreview';
import { connect } from 'react-redux';
import { setMessage } from '../actions/message';
import { Link } from 'react-router-dom';
class App extends Component {

  _onChange = (value) => {
    this.props.dispatch(setMessage(value))
  }

  render() {
    const {message} = this.props.messageReducer;
    return (
      <div className="App">
        
        <Header></Header>

        <InputPreview 
        value={message}
        onChange={this._onChange}/>

        <Link to='/about'>
        <button>Go to About</button>
        </Link>
        
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

export default connect(state => state)(App);