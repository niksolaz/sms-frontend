import React, { Component } from 'react';

export default class MessageForm extends Component {
  render() {
    return (
      <div className="container">
          <Header  />
          <h3>Users: {username}</h3>
          <div>
              <textarea row='100' col='100'></textarea>
              <br/>
              <SocialButton social="facebook" />
              <SocialButton social="twitter" />
              <SocialButton social="google" />
              <br />
              <input type='submit' value='SHARE'/>
          </div>
      </div>

    );

  }
}
