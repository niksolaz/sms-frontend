import React, {Component} from 'react';
import Header from '../components/modules/Header.jsx';
import { Button } from 'react-bootstrap';
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
	    		<div className="col-xs-6 col-md-4">
	    			<div className="input-group">
					  <span className="input-group-addon" id="sizing-addon2">
					  	<span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
					  </span>
					  <input type="text" className="form-control" placeholder="old password" aria-describedby="sizing-addon2"/>
					</div>
	    		</div>
	    		<div className="col-xs-6 col-md-4">
	    			<div className="input-group">
					  <span className="input-group-addon" id="sizing-addon2">
					  	<span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
					  </span>
					  <input type="text" className="form-control" placeholder="new password" aria-describedby="sizing-addon2"/>
					</div>
	    		</div>
	    		<div className="col-xs-6 col-md-4">
	    			<Button type='submit' bsStyle="default" bsSize="small">Share   </Button>
	    		</div>
	    	</div>
    	</div>
    );
  }
}
