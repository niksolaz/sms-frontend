import React, { Component } from 'react'; 
import LoginPage from '../pages/LoginPage.jsx'

export default class Navigation extends Component {
  render() {
    return (
      <div>
          Navigation bar
          <Link to="login">Login</Link>
      </div>
    );
  }
}


