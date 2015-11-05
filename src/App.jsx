import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MainBody from './components/MainBody.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="row-md-4"><Header /></div>
          <div className="row-md-4"><MainBody /></div>
          <div className="row-md-4"><Footer /></div>
        </div>
      </div>
    );
  }
}


