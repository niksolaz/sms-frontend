import React, { Component } from 'react';
import SocialButton from '../shared/SocialButton.jsx';



export default class MessageForm extends Component {
  render() {
    return (
      <div>
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <textarea rows="10" cols="50"></textarea>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-12">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <div className="btn-group btn-group-justified" role="group" aria-label="Left Align">
                <div className="col-md-2">
                  <SocialButton  name="Facebook" color="#115aed"/>
                </div>
                <div className="col-md-2">
                  <SocialButton name="Twitter " color="#3498db"/>
                </div>
                <div className="col-md-2">
                  <SocialButton name="Google  " color="#e65965"/>
                </div>
                <div className="col-md-2">
                  <input type='submit' className="btn btn-default" value='SHARE'/>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          </div>
      </div>

    );

  }
}
