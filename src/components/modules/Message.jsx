import React, {Component} from 'react';

import Header from '../components/modules/Header.jsx';


export default class Message extends Component {
	constructor(props){
        super(props);
    }

	render() {
		const messageID = this.props.params.messageID;
		return(
			<div>
				<Header />
				<h1> HELLO </h1>
			</div>
		);
	}
}