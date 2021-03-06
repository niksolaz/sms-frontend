import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import * as actionCreators from '../actions/authCreator';

import cookie from 'react-cookie';

import Header from '../components/modules/Header.jsx';
import { Button } from 'react-bootstrap';
import {Link, PropTypes} from 'react-router';

const cookieAuthentication = 'cookieMonster';

class LoginPanel extends Component{
    constructor(props){
        super(props);

        // Setting a default state
        this.state = {
            username: "",
            password: ""
        };

        // We need to bind the methods to the object. Requirement from ES6 classes.
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }


    onChangeUsername(event){
        // Set the email state. It change everytime the onChange method fires in the input
        this.setState({'username': event.target.value});
    }

    onChangePassword(event){
        // Set the password state. It change everytime the onChange method fires in the input
        this.setState({'password': event.target.value});
    }

    onLogin(event){
        // PreventDefault: it stop bubbling the event.
        event.preventDefault();

        // Now, it will run our code.
        // Take the username and password from the state in the React component
        const username = this.state.username;
        const password = this.state.password;

        this.props.authenticate(username, password);

        // Stupid test
        //if (username === "nicola" && password === "password"){
        //    
            // Call the function login in the props
            // sent from the Login component
        //    this.props.login(username);
        //}
    }


    render(){
        return(
            <div className="container">
                <Header  />
                <h3>Login</h3>
                <form>
                username:<br/>
                <input type="text" name="username" onChange={this.onChangeUsername} />
                <br/>
                password:<br/>
                <input type="text" name="password" onChange={this.onChangePassword} />
                <br/>
                send login:<br/>
                <input type="submit" value="Submit" onClick={this.onLogin}/>
                </form>
            </div>
        );
    }
}

class LogoutPanel  extends Component{
    constructor(props){
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout(event){
        // Remove the cookie when clicking the button
        //cookie.remove(cookieAuthentication);
        // Call the logout function sent in the props from the Login component
        this.props.logout();
    }

    render(){
        return(
            <div className="container">
                <Header />
                <div className="row">
                    <div className="col-xs-6 col-md-4"></div>
                    <div className="col-xs-6 col-md-3">
                        <div className="alert alert-warning">
                            <h3> 
                                <span className="glyphicon glyphicon-user">
                                    Log Out :
                                    <Button className="glyphicon glyphicon-off" bsStyle="danger" bsSize="large" type="button" onClick={this.onLogout} />
                                </span>
                            </h3>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-4"></div>
                </div>
            </div>
        );
    }
}

class Login extends Component {
    constructor(props){
        super(props);

        this.isLogged = this.isLogged.bind(this);
        this.onSuccessLogin = this.onSuccessLogin.bind(this);
        this.onSuccessLogout = this.onSuccessLogout.bind(this);
    }


    isLogged(){
      // If the cookie is present, return true otherwise false
      // If the user is log in, cookie.load(cookieAuthentication) will return the cookie string,
      // otherwise it will return undefined.
      

      const cookieValue = cookie.load(cookieAuthentication);
      const isUserLogged =  typeof( cookieValue ) !== 'undefined';

      return isUserLogged;
    }

    // When we login successfully from the system
    onSuccessLogin(email){
        cookie.save(cookieAuthentication);
        this.context.history.pushState(null, '/users/' + username)
    }

    // When we logout successfully from the system
    onSuccessLogout(){
        this.props.actions.logout();
        this.context.history.pushState(null, '/' );
    }

    render() {
        return this.isLogged() ?
            <LogoutPanel logout={this.onSuccessLogout} /> : // User is already logged. Give a chance to log out.
            <LoginPanel authenticate={this.props.actions.authenticate}/>; // User is not logged in. Let him log in    
    }
}

Login.contextTypes = { history: PropTypes.history };


function mapStateToProps(state){
  return {
    auth: state.authInfo 
  }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
