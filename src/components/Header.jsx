import React, { Component } from 'react';
import Navigation from './Navigation.jsx';

export default class Header extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <div>
          <div className="page-header">
            <h1>Example page header <small>Subtext for header</small></h1>
          </div>
        </div>
      </div>
    );
  }
}
