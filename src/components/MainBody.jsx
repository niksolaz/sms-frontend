import React, { Component } from 'react';

export default class MainBody extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron">
          <h1>Welcome on Smsl!</h1>
          <p>This web application allows you to send a single message simultaneously to the major social networks.</p>
          <div class="input-group">
            <div class="input-group-btn">
            </div>
            <input type="text" class="form-control" aria-label="...">
          </div>
        </div>
      </div>
    );
  }
}
