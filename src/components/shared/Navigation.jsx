import React, { Component } from 'react'; 

import HomePage from '../pages/HomePage.jsx';
import FacebookPage from '../pages/FacebookPage.jsx';
import TwitterPage from '../pages/TwitterPage.jsx';
import LoginPage from '../pages/LoginPage.jsx';

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


