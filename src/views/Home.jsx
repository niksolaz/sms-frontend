import React from 'react';
import cookie from 'react-cookie';

import Header from '../components/modules/Header.jsx';
import SettingButton from '../components/shared/SettingButton.jsx';
import {Link, PropTypes} from 'react-router';

const cookieAuthentication = 'cookieMonster';
export default class Home extends React.Component {
    constructor(props){
        super(props);

        this.state ={
          isLogged: this.isLogged()
        }
    }

    isLogged(){
      // If the cookie is present, return true otherwise false
      // If the user is log in, cookie.load(cookieAuthentication) will return the cookie string,
      // otherwise it will return undefined.
      const cookieValue = cookie.load(cookieAuthentication);

      const isUserLogged =  typeof( cookieValue ) !== 'undefined';
      return isUserLogged;
    }

    renderJumbotron(){
       if (this.state.isLogged) return null;

       return (
         <div className="row">
           <div className="col-md-12">
             <div className="jumbotron">
               <h1>SMS</h1>
               <p>Your new marketing tool!</p>
               <p><a className="btn btn-success btn-lg" href="https://github.com/niksolaz/sms-frontend" role="button">Learn more on GitHub</a></p>
             </div>
           </div>
         </div>
       );
    }

    renderDashboard(){
        if (!this.state.isLogged) return null;

        return (
          <div className="row">
            <div className="col-md-8">
                <li className="navbar-link">
                  <Link to={'/facebook'}>
                    <img src="http://www.impactconstructionsaskatoon.com/wp/wp-content/uploads/2012/03/Facebook-700x263.jpg" />
                  </Link>
                </li>
            </div>
            <div className="col-md-8"></div>
            <div className="col-md-8">
                <li className="navbar-link">
                  <Link to={'/twitter'}>
                    <img src="http://www.novipallavolo.it/images/img_contenuti2/194_twitter_logo_700x263.png" />
                  </Link>
                </li>
            </div>
          </div>
        )
    }
    render() {
        return (

            <div className="container">
                <Header  />
                {this.renderJumbotron()}
                {this.renderDashboard()}
            </div>
        );
    }
}

Home.contextTypes = { history: PropTypes.history };
