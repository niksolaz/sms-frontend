import React, {Component} from 'react';


import Switch from 'react-bootstrap-switch';


export default class SettingButton extends Component{
  constructor(props){
        super(props);
        this.state= {
          status: false 
        };
        this.handleChange = ::this.handleChange;
  }
  handleChange(component,state) {
    this.setState({status: this.state.Status});
  }
  render() {
    return (
      
          <Switch 
            state={this.state.status}
            size={'small'}
            onColor={'Primary'}
            offColor={'Info'}
            onChange={this.handleChange}
            handleWidth={30}
            baseClass={'bootstrap-switch'}
          />
        
      
    );
  }
}


