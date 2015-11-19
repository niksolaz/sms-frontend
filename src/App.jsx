import React, { Component } from 'react';
import Router from 'react-router'; 
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
{/*
import Header from './components/modules/Header.jsx';
import Footer from './components/modules/Footer.jsx';
import MainBody from './components/modules/MainBody.jsx';*/}
import LoginPage from '../pages/LoginPage.js';

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



{/*
export default class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <MainBody />
          <Footer />
      </div>
    );
  }
}

*/}
