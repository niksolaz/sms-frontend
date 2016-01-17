import React, {Component} from 'react';


import Switch from 'react-bootstrap-switch';


export default class SocialButton extends Component{
  constructor(props){
    super(props);
  }
  render() {
    const styleSwitch = {
      size : 'small',
      animate : true,
      onColor : 'primary',
      offColor: 'default',
      onText: 'ON',
      offText: 'OFF',
      baseClass : 'bootstrap-switch'   
    }
    return (
      <Switch className={styleSwitch}/>
    );
  }
}


