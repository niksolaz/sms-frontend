import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import {Home, Login, User, Facebook, Twitter} from './views';


ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Route path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/users" component={User}>
          <Route path="/users/:username" component={User}/>
          <Route path="/users/:username/messages" component={User} />
        </Route>
        <Route path="/facebook" component={Facebook}/>
        <Route path="/twitter" component={Twitter}/>

    </Router>
    , document.getElementById('app'));
