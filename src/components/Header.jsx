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
          <div id="myCarousel" className="carousel slide">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="active item"><img src="http://4.bp.blogspot.com/-ucEWV55BuAQ/VLA8kQTp61I/AAAAAAAAahw/4Sgbe1q8RhM/s1600/ricevere%2Bsms.png" alt="...">…</div>
              <div className="item"><img src="http://www.dirittodicritica.com/wp-content/uploads/2015/09/facebook1.jpg" alt="...">…</div>
              <div className="item"><img src="http://www.finzionimagazine.it/wp-content/uploads/2015/07/twitter-ipo_.jpg" alt="...">…</div>
            </div>
            <a className="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
            <a className="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
          </div>
        </div>
      </div>
    );
  }
}
