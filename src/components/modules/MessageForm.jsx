import React, { Component } from 'react';
import SocialButton from '../shared/SocialButton.jsx';


export default class MessageForm extends Component {
  render() {
    return (
      <div>
          <div className="row">
            <div className="col-md-12">
              <textarea rows="10" cols="50"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <SocialButton name="facebook" color="red"/>
            </div>
            <div className="col-md-2">
              <SocialButton name="twitter" color="blue"/>
            </div>
            <div className="col-md-2">
              <SocialButton name="google" color="green"/>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12">
              <input type='submit' value='SHARE'/>
            </div>
          </div>
      </div>

    );

  }
}
