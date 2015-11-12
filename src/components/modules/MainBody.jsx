import React, { Component } from 'react';
import HomePage from './HomePage.jsx';
import FacebookPage from './FacebookPage.jsx';
import TwitterPage from './TwitterPage.jsx';
import LoginPage from './LoginPage.jsx';

export default class MainBody extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <FacebookPage />
        <TwitterPage />
        <LoginPage />
      </div>
    );
  }
}
