import React, { Component } from 'react';
import {Link} from 'react-router';

export default class MessageList extends Component {

  constructor(props){
  	super(props);
  	this.state = {};
  	this.setStateBySocialName = ::this.setStateBySocialName;
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

  render() {
  	const panelClass = `panel ${this.state.colorClass}`;
    return (
      <div>
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
			      <tr>
			      	<td>1</td>
			        <td><Link to={`${this.state.mainUrl}/ciao`}>message bla bla bla</Link></td>
			        <td>42</td>
			        <td>12</td>
			      </tr>
		    </tbody>
		  </table>
		</div>
      </div>

    );

  }
}