import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import * as actionCreators from '../../actions/twitterCreator';
import MessageList from './MessageList.jsx';

class TwitterMessageList extends Component {

  constructor(props){
  	super(props);
  }

  componentDidMount(){
    console.log("Twitter list", this.props);
  	this.props.actions.getTweets();
  }

  render() {
  	const messages = this.props.twitterMessages.messages;
  	const isLoading = this.props.twitterMessages.isLoading;
  	const error = this.props.twitterMessages.error;

    return (
      <MessageList 
      	social="twitter" 
      	messages={messages} 
      	isLoading={isLoading} 
      	error={error} />
    );

  }
}

function mapStateToProps(state){
  return {
    twitterMessages: state.twitterMessages
  }
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actionCreators, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterMessageList);