import React,{Component} from 'react';
import cookie from 'react-cookie';

import Header from '../components/modules/Header.jsx';
import {Link, PropTypes} from 'react-router';

const cookieAuthentication = 'cookieMonster';

class UserLoggedIn extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const username = this.props.params.username || "Unknown user";
        return (
            <div className="container">
                <Header  />
                <h3>Users: {username}</h3>
                <div>
                    <textarea row='100' col='100'></textarea>
                    <br/>
                    <input type='submit' value='send sms'/>
                </div>
            </div>
        );
    }
}

class UserLoggedOut extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                <Header  />
                <div>You are not logged in </div>
            </div>
        );
    }
}

export default class User extends React.Component {
    constructor(props){
        super(props);

        this.isLogged = this.isLogged.bind(this);
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
        return this.isLogged() ?
            <UserLoggedIn /> :
            <UserLoggedOut />;
    }
}

User.contextTypes = { history: PropTypes.history };
