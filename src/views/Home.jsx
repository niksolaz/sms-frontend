import React from 'react';

import Header from '../components/modules/Header.jsx';
import {Link, PropTypes} from 'react-router';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="container">
                <Header  />
                <h3>Home</h3>
                <br/>
                <Link to={'/login'}>Login</Link>
                <br/>
                <Link to={'/users'}>User</Link>
            </div>
        );
    }
}

Home.contextTypes = { history: PropTypes.history };
