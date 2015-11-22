import React, { Component } from 'react';
import Router from 'react-router'; 
import Header from './components/modules/Header.jsx';
{/*
import Footer from './components/modules/Footer.jsx';
import MainBody from './components/modules/MainBody.jsx';
*/}

let App = React.craeteClass ({
  render() {
    return (
      <div>
          <Header />
        {/* 
          <MainBody />
          <Footer />
        */}
      </div>
    );
  }
});

export default App;
