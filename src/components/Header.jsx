import React, { Component } from 'react';
import Navigation from './Navigation.jsx';

export default class Header extends Component {

  render() {
    return (
      <div>
        <Navigation color="red"/>
        <div> This is the header </div>
      </div>
    );
  }
}
