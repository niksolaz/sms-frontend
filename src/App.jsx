import React, { Component } from 'react';

import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import HeaderHandler from './components/modules/Header.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
          This is your app!
          <Headler />
      </div>
    );
  }
}

let routes = (  
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/LoginPage" handler={HeaderHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});