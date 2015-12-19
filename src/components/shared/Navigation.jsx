import React, { Component } from 'react';
import cookie from 'react-cookie';
import {Link} from 'react-router';
import classnames from 'classnames';


const cookieAuthentication = 'cookieMonster';
export default class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLogged: this.isLogged(),
    };
  }

  isLogged(){
    // If the cookie is present, return true otherwise false
    // If the user is log in, cookie.load(cookieAuthentication) will return the cookie string,
    // otherwise it will return undefined.
    const cookieValue = cookie.load(cookieAuthentication);

    const isUserLogged =  typeof( cookieValue ) !== 'undefined';
    return isUserLogged;
  }

  render() {
    const classes = classnames({
      "glyphicon": true,
      "glyphicon-off": this.state.isLogged,
      "glyphicon-user": !this.state.isLogged
    });
    const loginStatus = this.state.isLogged ? "Logout" : "Login";
    return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#my-navbar" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                <img
                    width="24" height="24"
                    alt="Brand"
                    src="http://ai-i3.infcdn.net/icons_siandroid/png/200/7801/7801727.png" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="my-navbar">
                <ul className="nav navbar-nav">
                    <li className="navbar-link"><Link to={'/users'}>User</Link></li>
                    <li className="navbar-link"><Link to={'/Facebook'}>Facebook</Link></li>
                    <li className="navbar-link"><Link to={'/Twitter'}>Twitter</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="navbar-link">
                    <Link to={'/login'} className={classes}>
                      <span> {loginStatus} </span>
                    </Link>
                  </li>
                </ul>
            </div>
          </div>
      </nav>
    );
  }

}
