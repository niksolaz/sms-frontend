import React from 'react';
import cookie from 'react-cookie';

import Header from '../components/modules/Header.jsx';
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
               <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
             </div>
           </div>
         </div>
       );
    }

    renderDashboard(){
        if (!this.state.isLogged) return null;

        return (
          <div className="row">
            <div className="col-md-6">
                <li className="navbar-link">
                  <Link to={'/facebook'}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Icone.png" />
                  </Link>
                </li>
            </div>
            <div className="col-md-6">
                <li className="navbar-link">
                  <Link to={'/twitter'}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Twitter_blue_bird_icon.svg/256px-Twitter_blue_bird_icon.svg.png" />
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
