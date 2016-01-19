require('./styles/style.scss');
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';

import {Home, Login, User, Facebook, Twitter, Message, Setting, ChangePW} from './views';

import configureStore from './store';
const initialState = {};
const store = configureStore(initialState);

store.subscribe(() => console.log("State changed",store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <Route path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/users" component={User}>
                <Route path="/users/:username" component={User}/>
            </Route>
            <Route path="/twitter" component={Twitter}/>
            <Route path="/facebook" component={Facebook}/>
            <Route path="/:social/:messageID" component={Message} />
            <Route path="/password" component={ChangePW} />
            <Route path="/setting" component={Setting} />
        </Router>
    </Provider>
    , document.getElementById('app'));
