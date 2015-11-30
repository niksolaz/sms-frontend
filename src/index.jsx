import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import {Home, Login, User} from './views';


ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Route path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/user" component={User} />
        <Route path="/user/:username" component={User}/>
    </Router>
    , document.getElementById('app'));
