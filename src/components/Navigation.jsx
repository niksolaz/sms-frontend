import React, { Component } from 'react';


export default class Navigation extends Component {
  render() {
    return (
      <div>
        <div className='NavigationContainer'>
          <a>Home</a>
          <a>Facebook</a>
          <a>Twitter</a>
          <form>
            Search:
            <input type="search" name="search"></input>
          </form>
          <a>Login</a>
          <a>Sign Up</a>
        </div>
      </div>
    );
  }
}
