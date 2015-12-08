import React, {Component} from 'react';
import cookie from 'react-cookie';

import Header from '../components/modules/Header.jsx';
import {Link, PropTypes} from 'react-router';

const cookieAuthentication = 'cookieMonster';

class LoginPanel extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            email: "";
            password: ""
        };
    }
    onChangeEmail(event){
        // Set the email state. It change everytime the onChange method fires in the input
        this.setState({'email': event.target.value});
    }
    
    onChangePassword(event){
        // Set the password state. It change everytime the onChange method fires in the input
        this.setState({'password': event.target.value});
    }
    
    onLogin(){
        // Take the email and password from the state in the React component
        const email = this.state.email;
        const password = this.state.password;
        // Stupid test
        if (email === "nicola" && password === "password"){
            cookie.save(cookieAuthentication, 'thisisasecret');
        }
    }
    
    render(){
        return(
            <div className="container">
                <Header  />
                <h3>Login</h3>
                <form>
                email:<br/>
                <input type="text" name="email" onChange={this.onChangeEmail} />
                <br/>
                password:<br/>
                <input type="text" name="password" onChange={this.onChangePassword} />
                <br/>
                send login:<br/>
                <input type="submit" value="Submit" onClick={this.props.onLogin}/>
                </form>
            </div>    
        );
    }
}

class LogoutPanel  extends Component{
    
    onLogout(event){
        // Remove the cookie when clicking the button
        cookie.remove(cookieAuthentication);
    }
    
    render(){
        return(
            <div className="container">
                <input type="button" onClick={this.onLogout} />
            </div>
        );
    }
}

export default class Login extends Component {
    constructor(props){
        super(props);
    }
    
    isLogged(){
      // If the cookie is present, return true otherwise false
      return cookie.load(cookieAuthentication) !== null ? true: false;
    }

    render() {
        return this.isLogged() ? 
            <LogoutPanel  /> :
            <LoginPanel />
    }
}

Login.contextTypes = { history: PropTypes.history };
