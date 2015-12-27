import React, { Component } from 'react';
import {Link} from 'react-router';

export default class TWEETmessageList extends Component {
  render() {
    return (
      <div>
      	<div className="panel panel-info">
		  
		  <div className="panel-heading">Twitter Message</div>
		  <div className="panel-body">
		    <p>List Message from Twitter</p>
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
			        <td><Link to={'/twitter/:messageID'}>message bla bla bla</Link></td>
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