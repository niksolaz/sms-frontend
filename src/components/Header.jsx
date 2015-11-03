import React, { Component } from 'react';
import Navigation from './Navigation.jsx';

export default class Header extends Component {

  render() {
    return (
      <div>
        <div className="pagination pagination-right">
          <div className="page-header">
            <h1>
              <img src="img/Custom.png" />
              Smsl <small> instant message </small>
            </h1>
            <h3> Send Messages Simultaneously to Twitter and Facebook </h3>
          </div>
        </div>
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="http://i.telegraph.co.uk/multimedia/archive/03375/twitter2_3375790k.jpg"/>
              <div className="carousel-caption">
               for Twitter
              </div>
            </div>
            <div className="item">
              <img src="http://st.ilfattoquotidiano.it/wp-content/uploads/2015/05/facebook-6751.jpg"/>
              <div className="carousel-caption">
                for Facebook
              </div>
            </div>
          </div>
        
          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
