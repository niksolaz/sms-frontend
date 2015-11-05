import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MainBody from './components/MainBody.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col-md-2"><Header /></div>
          <div class="col-md-8"><MainBody /></div>
          <div class="col-md-2"><Footer /></div>
        </div>
      </div>
    );
  }
}


