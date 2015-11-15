import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import HomePage from './components/pages/HomePage.js';
import FacebookPage from './components/pages/FacebookPage.js';
import TwitterPage from './components/pages/TwitterPage.js';
import LoginPage from './components/pages/LoginPage.js';

let App = React.createClass({  
  render() {
    return (
      <div className="nav">
        <Link to="app">Home</Link>
        <Link to="fb">Facebook</Link>
        <Link to="tweet">Twitter</Link>
        <Link to="login">Login</Link>

        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (  
  <Route name="app" path="/" handler={App}>
    <Route name="fb" path="/Facebook" handler={LoginPage}/>
    <Route name="tweet" path="/Twitter" handler={LoginPage}/>
    <Route name="login" path="/login" handler={LoginPage}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});
