import React, { Component } from 'react';
import {Link} from 'react-router';

export default class MessageList extends Component {

  constructor(props){
  	super(props);
  	this.state = {};
  	this.setStateBySocialName = ::this.setStateBySocialName;
    this.renderMessages = ::this.renderMessages;
  }

  setStateBySocialName(){
  	const socialName = this.props.social ? this.props.social.toLowerCase() : '';
  	switch(socialName){
  		case "facebook":
  			this.setState({
  				name: 'Facebook',
  				colorClass: 'panel-primary',
  				mainUrl: '/facebook'
  			});
  			break;
  		case "twitter":
  			this.setState({
  				name: 'Twitter',
  				colorClass: 'panel-info',
  				mainUrl: '/twitter'
  			});
  			break;
  		default:
  			console.log("No default yet");

  	}
  } 

  componentDidMount(){
  	this.setStateBySocialName();
  }

  renderMessages(){
    const messages = this.props.messages ? this.props.messages : [];

    return messages.map(message => {
      const shares = message.shares ? message.shares : message.retweets;
      const messageUrl = `${this.state.mainUrl}/${message.id}`;
      return (
         <tr key={messageUrl}>
            <td><Link to={messageUrl}>{message.id}</Link></td>
            <td><Link to={messageUrl}>{message.messageText}</Link></td>
            <td><Link to={messageUrl}>{message.likes}</Link></td>
            <td><Link to={messageUrl}>{shares}</Link></td>
          </tr>
      );
    }) 
  }
  
  render() {
  	const panelClass = `panel ${this.state.colorClass}`;
    const isError = this.props.isError ? 'There is an error' : '';
    const isLoading = this.props.isLoading === true ? 'Loading....' : ''; 
    

    return (
      <div>
        <div>{isLoading}</div>
        <div>{isError}</div>
      	<div className={panelClass}>
		  
    		  <div className="panel-heading">{this.state.name} Message</div>
    		  <div className="panel-body">
    		    <p>List Message from {this.state.name}</p>
    		  </div>

    		  
    		  <table className="table table-hover">
    		    <thead>
    		      <tr>
    		      	<th>#</th>
    		        <th>Messages</th>
    		        <th>Likes</th>
    		        <th>Shares</th>
    		      </tr>
    		    </thead>
    		    <tbody>
    			      {this.renderMessages()}
    		    </tbody>
    		  </table>
    		</div>
      </div>

    );

  }
}


