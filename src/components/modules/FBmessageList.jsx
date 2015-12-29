import React, { Component } from 'react';
import {Link} from 'react-router';
import MessageID from '../shared/messageID.jsx';

class Read_MessageID extends Component{
  render(){
    return(
      <div>
        <MessageID />
      </div>
    );
  }

}

class NoRead_MessageID_OUT extends Component{
  render(){
    return(
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
                  <td><Link to={'facebook/:messageID'}>message bla bla bla</Link></td>
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

export default class FBmessageList extends Component {
  constructor(props){
        super(props);
  }
  
  render(){
    const messageID = this.props.params.messageID;
    if(this.props.params.messageID){
      return (
        <Read_MessageID />
      );
    }else{
      return(
        <NoRead_MessageID_OUT />
      );
    }
  }
}