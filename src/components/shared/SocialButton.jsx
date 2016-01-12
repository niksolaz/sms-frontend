import React, {Component} from 'react';

export default class SocialButton extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const bootstrapStyle ={
      className: this.props.className || "btn btn-default"
    };
    return(
        <div className="btn-group" role="group">
          <button type="button" className={bootstrapStyle} value={this.props.value}>
             <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
            {this.props.value}
          </button>
        </div>
    );
  }
}
