import React, { Component } from 'react';
import Header from './components/modules/Header.jsx';
import Footer from './components/modules/Footer.jsx';
import MainBody from './components/modules/MainBody.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <MainBody />
          <Footer />
      </div>
    );
  }
}


