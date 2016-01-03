import React, { Component } from 'react';
import {Link} from 'react-router';

export default class FBmessageList extends Component {
  render() {
    const infoMessage = "message bla bla bla"
    console.log(infoMessage);
    return (
      <div>
        <div className="panel panel-primary">
      
      <div className="panel-heading">Facebook Message</div>
      <div className="panel-body">
        <p>List Message from Facebook</p>
      </div>

      
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th id="sms">Messages</th>
            <th>Likes</th>
            <th>Shares</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>1</td>
              <td headers="sms"><Link to={'/facebook/:messageID'}>{infoMessage}</Link></td>
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