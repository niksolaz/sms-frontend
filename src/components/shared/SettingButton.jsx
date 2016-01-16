import React, {Component} from 'react';


import Switch from 'react-bootstrap-switch';


export default class SocialButton extends Component{

  render() {
    const styleSwitch = {
      size : 'small' || null,
      animate : true || false,
      onColor : 'primary' || 'default',
      baseClass : 'bootstrap-switch'   
    }
    return (
      <Switch className={styleSwitch} toggleState=true/>
    );
  }
}


