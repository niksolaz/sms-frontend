import React, { Component } from 'react';
import Router from 'react-router'; 
import Navigation from '../shared/Navigation.jsx';

export default class Header extends Component {

  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}
