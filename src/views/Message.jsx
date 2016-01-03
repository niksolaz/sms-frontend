import React, {Component} from 'react';

import Header from '../components/modules/Header.jsx';
import List from '../components/modules/FBmessageList.jsx';
import SocialButton from '../components/shared/SocialButton.jsx';

import {Link, PropTypes} from 'react-router';

export default class Message extends Component {
	constructor(props){
        super(props);
        console.log("Messageeeee");
    }

	render() {
		const x = List.infoMessage;
		console.log("X = %s",x);
		const message_id = this.props.params.messageID;
		console.log('Message id : %s',message_id);
		return(
			<div>
				<Header />
				<h3>Message: {x}</h3>
				<div className="row">
		            <div className="col-md-2">
		              <Link to={'/facebook'}>
		              	<SocialButton name="facebook" color="blue"/>
		              </Link>
		            </div>
		            <div className="col-md-2">
		              <Link to={'/twitter'}>
		              	<SocialButton name="twitter" color="azure"/>
		              </Link>
		            </div>
		            <div className="col-md-2">
		              <SocialButton name="google" color="red"/>
		            </div>
	            </div>
			</div>
		);
	}
}