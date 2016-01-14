import React, {Component} from 'react';

import InputSwitch from 'react-input-switch';

export default class SocialButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      checked : false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) {
      this.setState({ checked: checked });
    }
  
  render() {
    const status = this.state.checked ? <input type="checkbox" className="ON" checked /> : <input type="checkbox" className="OFF" checked />;
    return (
      <div>
        <InputSwitch checked={this.state.checked} onChange={this.handleChange} className={status}/>
      </div>
    ); 
  }
}