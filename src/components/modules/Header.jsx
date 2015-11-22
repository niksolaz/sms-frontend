import React, { Component } from 'react';
import Router from 'react-router'; 
import Navigation from '../shared/Navigation.jsx';

let Header = React.createClass ({

  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
});

export default Header;