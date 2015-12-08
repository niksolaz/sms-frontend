import React from 'react';
import cookie from 'react-cookie';

import Header from '../components/modules/Header.jsx';
import {Link, PropTypes} from 'react-router';

export default class Twitter extends React.Component {
    constructor(props){
        super(props);
        
        this.isLogged = this.isLogged.bind(this);
    }
    isLogged(){
      /**
       * It checks if the cookie of authentication is present
       */
      const cookieAuthentication = 'cookieMonster';
      // If the cookie is present, return true otherwise false
      return cookie.load(cookieAuthentication) !== null ? true: false;
    }
    render() {
        /* Using the ternary operator <clause> ? <statement if clause is true> : <statement if the clause is false>*/
        return !this.isLogged() ? 
            // If it is not logged
            <div className="container">Not logged</div> :
            // If it is logged
            <div className="container">
                <Header  />
                <h3>Twitter</h3>
                <br/>
                <Link to={'/users'}>User</Link>
                <div>
                  <ul>
                    <li>
                    Message user Twitter: <br/>
                      <textarea row='100' col='100'>
                        <p>Message</p>
                      </textarea>
                    </li>
                  </ul>
                </div>
            </div>;
    }
}

Twitter.contextTypes = { history: PropTypes.history };
