import React, {Component} from 'react';

export default class messageID extends Component {
	constructor(props){
        super(props);
    }

	render() {
		const messageID = this.props.params.messageID
		return (
		  <div>
		     <p>single message: {messageID}</p>
		  </div>

		);

	}
}