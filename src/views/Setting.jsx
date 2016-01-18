import React, {Component} from 'react';

import Header from '../components/modules/Header.jsx';
import SettingButton from '../components/shared/SettingButton.jsx';

import {Link} from 'react-router';

export default class Setting extends React.Component {
	render(){
		return (
			<div className="container">
				<Header />
				<div className="row">
                    <div className="col-xs-6 col-md-4"></div>
                    <div className="col-xs-6 col-md-4">
                    	<h3>Setting</h3>
						<ul className="list-group">
						  <li className="list-group-item">Facebook
							  <div className="container">
							  	<SettingButton />
							  </div>
						  </li>
						  <li className="list-group-item">Twitter 
							  <div className="container">
							  	<SettingButton />
							  </div>
						  </li>
						  <li className="list-group-item">Google 
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
			</div>
		);
	}
}