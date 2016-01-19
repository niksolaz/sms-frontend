import React, {Component} from 'react';


import Toggle from 'react-toggle';


export default class SettingButton extends Component{
  constructor(props){
        super(props);
        this.state= {
          status: false
        };
        this.handleChange = ::this.handleChange;
        this.renderButtonText = ::this.renderButtonText;
  }
  handleChange(event) {
    event.preventDefault();
    console.log("state",this.state);
    this.setState({status: !this.state.status});
  }

  renderButtonText(){
    if (!this.props.text) return null;

    return (
       <span>{this.props.text}</span>
    );
  }
  render() {
    const ariaLabel = this.props.text ? 
                        this.props.text:
                        "No label";
    return (
      <span>
        <Toggle 
          defaultChecked={this.state.status}
          checked={this.state.status}
          aria-label={ariaLabel}
          onChange={this.handleChange}
        />
        {this.renderButtonText()}
      </span>
    );
  }
}


