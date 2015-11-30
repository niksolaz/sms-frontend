import React from 'react';

import Header from '../components/modules/Header.jsx';
import {Link, PropTypes} from 'react-router';

export default class User extends React.Component {
    constructor(props){
        super(props);
    }

    
    render() {
        return (
            <div className="container">
                <Header  />
                <h3>User</h3>
            </div>
        );
    }
}

User.contextTypes = { history: PropTypes.history };