import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="pagination pagination-centered">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">
                  <img className="responsive-Logo" alt="Smsl" src="img/ic_72x72.png" />
                </a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">LinkOne <span className="sr-only">(current)</span></a></li>
                  <li><a href="#">LinkTwo</a></li>
                  <li><a href="#">LinkThree</a></li>
                  <li><a href="#">LinkFour</a></li>
                </ul>
                <form className="navbar-form navbar-left" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
