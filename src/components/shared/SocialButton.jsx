import React, {Component} from 'react';

export default class SocialButton extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const buttonStyle ={
      backgroundColor: this.props.color || "white"
    };
    return(
        <button name={this.props.name} style={buttonStyle}>
          {this.props.name}
        </button>
    );
  }
}
