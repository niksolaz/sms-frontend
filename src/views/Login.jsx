import React from 'react';

import Header from '../components/modules/Header.jsx';
import {Link, PropTypes} from 'react-router';

export default class Login extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="container">
                <Header  />
                <h3>Login</h3>
                <form>
                email:<br/>
                <input type="text" name="email"/>
                <br/>
                password:<br/>
                <input type="text" name="password"/>
                <br/>
                send login:<br/>
                <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

Login.contextTypes = { history: PropTypes.history };
