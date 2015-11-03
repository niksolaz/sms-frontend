import React, { Component } from 'react';
import Navigation from './Navigation.jsx';

export default class Header extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <div>
          <div className="page-header">
            <h1>
              <img src="img/Custom.png" />
              Smsl <small> instant message </small>
            </h1>
            <h3> Send Messages Simultaneously to Twitter and Facebook </h3>
          </div>
           
          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>
          
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img src="http://4.bp.blogspot.com/-ucEWV55BuAQ/VLA8kQTp61I/AAAAAAAAahw/4Sgbe1q8RhM/s1600/ricevere%2Bsms.png" alt="...">
                <div class="carousel-caption">
                  ...
                </div>
              </div>
              <div class="item">
                <img src="http://www.dirittodicritica.com/wp-content/uploads/2015/09/facebook1.jpg" alt="...">
                <div class="carousel-caption">
                  ...
                </div>
              </div>
              <div class="item">
                <img src="http://www.finzionimagazine.it/wp-content/uploads/2015/07/twitter-ipo_.jpg" alt="...">
                <div class="carousel-caption">
                  ...
                </div>
              </div>
            </div>
        
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
