import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import * as actionCreators from '../../actions/facebookCreator';
import MessageList from './MessageList.jsx';

class FacebookMessageList extends Component {

  constructor(props){
  	super(props);
  }

  componentDidMount(){
    console.log("State", this.props);
  	this.props.actions.getFacebookStatuses();
  }

  render() {
  	const messages = this.props.facebookMessages.messages;
  	const isLoading = this.props.facebookMessages.isLoading;
  	const error = this.props.facebookMessages.error;
    return (
      <MessageList 
      	social="facebook" 
      	messages={messages} 
      	isLoading={isLoading} 
      	error={error} />
    );

  }
}

function mapStateToProps(state){
  return {
    facebookMessages: state.facebookMessages 
  }
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actionCreators, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookMessageList);