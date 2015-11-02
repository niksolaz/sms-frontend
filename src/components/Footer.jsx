import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-footer">
            <div className="panel-body">
              <ol className="page-list-Footer">
                <li><a href="#">MY GITHUB</a></li>
                <li><a href="#">MY FACEBOOK</a></li>
                <li><a href="#">MY TWITTER</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
