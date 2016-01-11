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
        
        <button type="button" name={this.props.name} style={buttonStyle}>
           <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
          {this.props.name}
        </button>
    );
  }
}
