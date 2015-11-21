import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginPage from './pages/LoginPage.jsx';

let Navigation = React.createClass({  
  render() {
    return (
      <div className="nav">
        <Link to="app">SmsL</Link>
        <Link to="login">Login</Link>

        <RouteHandler/>
      </div>
    );
  }
});

let routes = (  
  <Route name="app" path="/" handler={Navigation}>
    <Route name="login" path="/LoginPage" handler={LoginPage}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});

