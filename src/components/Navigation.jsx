import React, { Component } from 'react';

export default class Navigation extends Component {
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
