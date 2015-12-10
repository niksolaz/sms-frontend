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
        let username = this.props.params.username;
        let message = username ? "I am " + username : "This is the user list";
        return (
            <div className="container"> 
                <Header  />
                <h3>this is the User {username}</h3>
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
                <Link to={'/login'}>Login</Link>
            </div>    
        );
    }
}

export default class User extends React.Component {
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
    onSuccessLogin(){
        this.setState({logged: true});
    }
    
    // When we logout successfully from the system
    onSuccessLogout(){
        this.setState({logged: false});
    }
    
    render() {
        return this.isLogged() ?
            <UserLoggedOut userLogout={this.onSuccessLogout}/> :
            <UserLoggedIn userLogin={this.onSuccessLogin}/>;
    }
}

User.contextTypes = { history: PropTypes.history };
