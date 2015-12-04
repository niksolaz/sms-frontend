import React from 'react';

import Header from '../components/modules/Header.jsx';
import {Link, PropTypes} from 'react-router';

export default class Facebook extends React.Component {
    constructor(props){
        super(props);
    }

    {/*
    if user is logged in ->DO THIS: user see you message
    
    if user is logged out ->DO THIS: user must be logged in 
    */}

    render() {
        return (
            <div className="container">
                <Header  />
                <h3>Facebook</h3>
                <br/>
                <Link to={'/users'}>User</Link>
                <div>
                  <ul>
                    <li>
                    Message user Facebook: <br/>
                      <textarea row='100' col='100'>
                        <p>Message</p>
                      </textarea>
                    </li>
                  </ul>
                </div>
            </div>
        );
    }
}

Facebook.contextTypes = { history: PropTypes.history };
