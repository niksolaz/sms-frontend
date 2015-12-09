import React,{Component} from 'react';
import cookie from 'react-cookie';

import Header from '../components/modules/Header.jsx';
import {Link, PropTypes} from 'react-router';

const cookieAuthentication = 'cookieMonster';

class UserLoggedIn extends Component{
    constructor(props){
        super(props);
        
        this.isLogged = this.isLogged.bind(this);
    }
    
    render(){
        return
    }
}

class UserLoggedOut extends Component{}

export default class User extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        let username = this.props.params.username;
        let message = username ? "I am " + username : "This is the user list";
        return (
            <div className="container">
                <Header  />
                <h3>Users</h3>
                <div>
                    <textarea row='100' col='100'></textarea>
                    <br/>
                    <input type='submit' value='send sms'/> 
                </div>
            </div>
        );
    }
}

User.contextTypes = { history: PropTypes.history };
