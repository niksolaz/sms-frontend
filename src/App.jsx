import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MainBody from './components/MainBody.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="pagination pagination-centered">
          <Header />
          <MainBody />
          <Footer />
        </div>
      </div>
    );
  }
}


