import React from 'react';
import cookie from 'react-cookie';

import Header from '../components/modules/Header.jsx';
import {Link, PropTypes} from 'react-router';

const cookieAuthentication = 'cookieMonster';

export default class Facebook extends React.Component {
    constructor(props){
        super(props);

        this.isLogged = this.isLogged.bind(this);
        console.log("faceboook");
    }

     isLogged(){
        // If the cookie is present, return true otherwise false
        // If the user is log in, cookie.load(cookieAuthentication) will return the cookie string,
        // otherwise it will return undefined.
        const cookieValue = cookie.load(cookieAuthentication);

        const isUserLogged =  typeof( cookieValue ) !== 'undefined';
        return isUserLogged;
      }

     render() {
          /* Using the ternary operator <clause> ? <statement if clause is true> : <statement if the clause is false>*/
        return !this.isLogged() ?
            // If it is not logged
            <div className="container">Not logged</div> :
            // If it is logged
            <div className="container">
                <Header  />
                <h3>Facebook</h3>
                <br/>
                <Link to={'/users'}>User</Link>
                <div>
                  <ul>
                    <li>
                    Message user Facebook: <br/>
                    <textarea rows='10' cols='50' >
                    </textarea>
                    </li>
                  </ul>
                </div>
            </div>;
    }
}

Facebook.contextTypes = { history: PropTypes.history };
