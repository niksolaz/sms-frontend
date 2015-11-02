import React, { Component } from 'react';

export default class MainBody extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron">
          <h1>Welcome on Smsl!</h1>
          <p>This web application allows you to send a single message simultaneously to the major social networks.</p>
          <textarea className="textarea"></textarea>
          <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
            Send Message
          </button>
        </div>
      </div>
    );
  }
}
