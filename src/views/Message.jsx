import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import * as actionCreators from '../actions';

import Header from '../components/modules/Header.jsx';
import SocialButton from '../components/shared/SocialButton.jsx';

import {Link, PropTypes} from 'react-router';

class Message extends Component {
	constructor(props){
        super(props);
    }

    componentDidMount(){
    	const socialName = this.props.params.social;
    	const messageID = this.props.params.messageID;
    	this.props.actions.getMessage(socialName, messageID);
    }

	render() {
		const messageText = this.props.message.messageText;
		const likes = this.props.message.likes;
		const id = this.props.message.id;
		const shares = this.props.message.shares;
		return(
			<div>
				<Header />
				<div className="row">
					<div className="col-md-12">
						<h3>Message: {messageText}</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">{likes}</div>
					<div className="col-md-6">{shares}</div>
				</div>

				<div className="row">
					<div className="col-md-12"></div>
				</div>
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

function mapStateToProps(state){
  return {
    message: state.currentMessage 
  }
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actionCreators, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);