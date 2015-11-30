import React, { Component } from 'react';

import {Link} from 'react-router';


export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
          <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                  <li className="navbar-link"><Link to={'/'}>Home</Link></li>
                  <li className="navbar-link"><Link to={'/login'}>Login</Link></li>
                  <li className="navbar-link"><Link to={'/users'}>User</Link></li>
              </ul>
          </div>
      </nav>
    );
  }

}
