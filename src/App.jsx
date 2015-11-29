import React, { Component } from 'react';

import Header from './components/modules/Header.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
          <h2>This is your app!</h2>
          <Header />
      </div>
    );
  }
}

