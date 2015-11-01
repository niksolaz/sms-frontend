import React, { Component } from 'react';
import Navigation from './Navigation.jsx';

export default class Header extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <div>
          <div className="page-header">
            <h1>Smsl <small> instant message </small></h1>
            <h3> Send Messages Simultaneously to Twitter and Facebook </h3>
          </div>
        </div>
      </div>
    );
  }
}
