import React, { Component } from 'react';

export default class MainBody extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="text-center">Welcome on Smsl!</h1>
          <p className="text-center">This web application allows you to send a single message simultaneously to the major social networks.</p>
          <section>
            <button type="button" class="btn btn-primary">Facebook</button>
            <button type="button" class="btn btn-info">Twitter</button>
            <button type="button" class="btn btn-danger">Google+</button>
          </section>
        </div>
      </div>
    );
  }
}
