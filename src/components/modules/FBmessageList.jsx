import React, { Component } from 'react';
import {Link} from 'react-router';


export default class FBmessageList extends Component {
  render() {
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
                <th>Messages</th>
                <th>Likes</th>
                <th>Shares</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>1</td>
                  <td><Link to={'/facebook/:messageID'}>message bla bla bla</Link></td>
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