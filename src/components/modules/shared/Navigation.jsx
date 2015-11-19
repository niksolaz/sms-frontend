import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

{/*import HomePage from '../components/pages/HomePage.jsx';
import FacebookPage from '../components/pages/FacebookPage.jsx';
import TwitterPage from '../components/pages/TwitterPage.jsx';*/
import LoginPage from '../pages/LoginPage.jsx';

let App = React.createClass({  
  render() {
    return (
      <div className="nav">
        <Link to="app">Home</Link>
        {/*<Link to="fb">Facebook</Link>
        <Link to="tweet">Twitter</Link>*/}
        <Link to="login">Login</Link>

        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (  
  <Route name="app" path="/" handler={App}>
    {/*<Route name="home" path="/Home" handler={HomePage}/>
    <Route name="fb" path="/Facebook" handler={FacebookPage}/>
    <Route name="tweet" path="/Twitter" handler={TwitterPage}/>*/}
    <Route name="login" path="/login" handler={LoginPage}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});

