import React, { Component } from 'react';
import SocialButton from '../shared/SocialButton.jsx';



export default class MessageForm extends Component {
  render() {
    return (
      <div>
          <div className="row">

            <div className="col-xs-6 col-md-4"></div>
            <div className="col-xs-6 col-md-4">
              <textarea rows="10" cols="50"></textarea>
            </div>
            <div className="col-xs-6 col-md-4"></div> 

          </div>
          <div className="row"> 

              <div className="col-xs-6 col-md-4"></div>
              <div className="col-xs-6 col-md-4">
                  
                    <SocialButton className="btn btn-primary" value="Facebook"/>
                  
                    <SocialButton className="btn btn-info" value="Twitter " />
                  
                    <SocialButton className="btn btn-danger" value="Google  " />
                
                    <input type='submit' className="btn btn-default" value='SHARE'/>

              </div>
              <div className="col-xs-6 col-md-4"></div>

          </div>
      </div>

    );

  }
}
