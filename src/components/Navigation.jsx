import React, { Component } from 'react';


export default class Navigation extends Component {
  render() {
    return (
      <div>
        <div className='NavigationContainer'>
          <a href="./HomePage.jsx">Home</a>
          <a href="./FacebookPage.jsx">Facebook</a>
          <a href="./TwitterPage.jsx">Twitter</a>
          <form>
            Search:
            <input type="search" name="search"></input>
          </form>
          <a href="./LoginPage.jsx">Login</a>
          <div><img /></div>
          <a href="./LoginPage.jsx">Sign Up</a>
        </div>
      </div>
    );
  }
}
