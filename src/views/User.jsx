import React,{Component} from 'react';
import cookie from 'react-cookie';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import * as actionCreators from '../actions/userCreator';

import Header from '../components/modules/Header.jsx';
import MessageForm from '../components/modules/MessageForm.jsx';

import {Link, PropTypes} from 'react-router';

const cookieAuthentication = 'cookieMonster';

class UserLoggedIn extends Component{
    constructor(props){
        super(props);
    }

    render(){

        const username = this.props.user;
        return (
            <div className="container">
                <Header  />
                <h3>Users: {username}</h3>
                <MessageForm />
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
                <div>
                    User Not logged
                    <br />
                    Please, go to Login
                </div>
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
        const username = this.props.params ? this.props.params.username : "unknown";
        return this.isLogged() ?
            <UserLoggedIn user={username} /> :
            <UserLoggedOut />;
    }
}

User.contextTypes = { history: PropTypes.history };

function mapStateToProps(state){
  return {
    user: state.userInfo
  }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
