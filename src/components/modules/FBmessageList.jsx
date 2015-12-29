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
                  <td><Link to={'facebook/:messageID'} onClick={this.props.someEvent}>message bla bla bla</Link></td>
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
  getInitialState(){
    eventClick = false;
  }
  isMessage(e){
    this.setState(eventClick= !this.state.eventClick);
  }
  render() {
    return this.isMessage() ?
      <NoRead_MessageID_OUT someEvent={this.isMessage}/> :
      <Read_MessageID />;

  }
  
}