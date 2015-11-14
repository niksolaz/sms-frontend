import React, { Component } from 'react';
import HomePage from '../pages/HomePage.jsx';
import FacebookPage from '../pages/FacebookPage.jsx';
import TwitterPage from '../pages/TwitterPage.jsx';
import LoginPage from '../pages/LoginPage.jsx';

export default class MainBody extends Component {
  render() {
    return (
      <div>
        {/*<HomePage />*/}
        <FacebookPage />
        {/*<TwitterPage />
        <LoginPage />*/}
      </div>
    );
  }
}

{/*
 COMMENT:
 
 I tried to work only with facebook page for now.
 
 So i can blind other page

*/}