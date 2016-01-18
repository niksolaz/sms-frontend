import React, { Component } from 'react';
//import SocialButton from '../shared/SocialButton.jsx';
import { Button } from 'react-bootstrap';

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
                    <Button type='button' bsStyle="primary" bsSize="small">Facebook</Button>        
                    <Button type='button' bsStyle="info" bsSize="small">Twitter </Button>   
                    <Button type='button' bsStyle="danger" bsSize="small">Google  </Button> 
                    <Button type='submit' bsStyle="default" bsSize="small">Share   </Button>
              </div>
              <div className="col-xs-6 col-md-4"></div>

          </div>
      </div>

    );

  }
}
