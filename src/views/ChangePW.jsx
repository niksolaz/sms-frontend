import React, {Component} from 'react';
import Header from '../components/modules/Header.jsx';
import {Link} from 'react-router';

export default class ChangePW extends Component{

  render() {
    return (
    	<div className="container">
    		<Header />
    		<div className="col-xs-6 col-md-12">
    			<h3>change your password</h3>
    		</div>
	    	<div className="row">
	    		<div className="col-xs-6 col-md-2">
	    			<div class="input-group">
					  <span class="input-group-addon" id="sizing-addon2">old password</span>
					  <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2"/>
					</div>
	    		</div>
	    		<div className="col-xs-6 col-md-2"></div>
	    		<div className="col-xs-6 col-md-2">
	    			<div class="input-group">
					  <span class="input-group-addon" id="sizing-addon2">new password</span>
					  <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2"/>
					</div>
	    		</div>
	    	</div>
    	</div>
    );
  }
}
