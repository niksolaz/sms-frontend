import React, { Component } from 'react'; 

import HomePage from './HomePage.jsx';
import FacebookPage from './FacebookPage.jsx';
import TwitterPage from './TwitterPage.jsx';
import LoginPage from './LoginPage.jsx';

export default class Navigation extends Component {
  render() {
    return (
      <div>
          Navigation bar
          <HomePage />
          <LoginPage />
          <FacebookPage />
          <TwitterPage />
      </div>
    );
  }
  
}


