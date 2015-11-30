import React from 'react';

import Header from '../components/modules/Header.jsx';
import {Link, PropTypes} from 'react-router';

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
                    {message}
                </div>
            </div>
        );
    }
}

User.contextTypes = { history: PropTypes.history };