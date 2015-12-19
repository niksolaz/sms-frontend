import React, { Component } from 'react';

import {Link} from 'react-router';


export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
          <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                  <li className="navbar-link">
                    <Link to={'/'}>
                      <img src="../img/ic_32x32.png" alt="Logo" height="32" width="32"/>
                    </Link>
                  </li>
                  <li className="navbar-link"><Link to={'/login'}>Login</Link></li>
                  <li className="navbar-link"><Link to={'/users'}>User</Link></li>
                  <li className="navbar-link"><Link to={'/Facebook'}>Facebook</Link></li>
                  <li className="navbar-link"><Link to={'/Twitter'}>Twitter</Link></li>
              </ul>
          </div>
      </nav>
    );
  }

}
