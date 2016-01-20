import React, {Component} from 'react';
import cookie from 'react-cookie';

import Header from '../components/modules/Header.jsx';
import SettingButton from '../components/shared/SettingButton.jsx';

import {Link, PropTypes} from 'react-router';;
const cookieAuthentication = 'cookieMonster';

export default class Setting extends React.Component {
	constructor(props){
        super(props);

        this.isLogged = this.isLogged.bind(this);
        console.log("Setting Logged In");
    }
    isLogged(){
        // If the cookie is present, return true otherwise false
        // If the user is log in, cookie.load(cookieAuthentication) will return the cookie string,
        // otherwise it will return undefined.
        const cookieValue = cookie.load(cookieAuthentication);

        const isUserLogged =  typeof( cookieValue ) !== 'undefined';
        return isUserLogged;
      }
	render(){
		return !this.isLogged() ?
            // If it is not logged
            // If it is not logged
            <div className="container">
                <Header />
                <div className="row">
                    <div className="col-xs-6 col-md-4"></div>
                    <div className="col-xs-6 col-md-4">
                        <h3>
                        <span className="label label-danger">
                            Settin Not Logged, Please Go to Login <span className="glyphicon glyphicon-user"></span>
                        </span>
                        </h3>
                    </div>
                    <div className="col-xs-6 col-md-4"></div>
                </div>
            </div> :
			<div className="container">
				<Header />
				<div className="row">
                    <div className="col-xs-6 col-md-4"></div>
                    <div className="col-xs-6 col-md-4">
                    	<h3>Setting</h3>
						<ul className="list-group">
						  <li className="list-group-item">
							  <div className="container">
							  	<SettingButton text="Facebook"/>
							  </div>
						  </li>
						  <li className="list-group-item"> 
							  <div className="container">
							  	<SettingButton text="Twitter"/>
							  </div>
						  </li>
						  <li className="list-group-item"> 
						  	<div className="container">
						  		<SettingButton />
						  	</div>
						  </li>
						  <li className="list-group-item">Change Your 
						  	<Link to={'/password'}>
						  		"Password"
						  	</Link>
						  </li>
						</ul>
                    </div>
					<div className="col-xs-6 col-md-4"></div>
				</div>
			</div>;
	}
}
Setting.contextTypes = { history: PropTypes.history };