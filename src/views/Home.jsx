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
                <div>
                  <img src="../img/ic_72x72.png" alt="Logo" height="72" width="72"/>
                </div>
                <br/>
                <Link to={'/login'}>Login</Link>
                <br/>
                <Link to={'/users'}>User</Link>
                <br/>
                <Link to={'/facebook'}>Facebook</Link>
                <br/>
                <Link to={'/twitter'}>Twitter</Link>
            </div>
        );
    }
}

Home.contextTypes = { history: PropTypes.history };
