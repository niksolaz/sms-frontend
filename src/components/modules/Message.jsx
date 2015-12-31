import React, {Component} from 'react';
import {Link} from 'react-router';

import {Header, FBmessageList} from '../components/modules';


export default class messageID extends Component {
	constructor(props){
        super(props);
    }

	render() {
		const messageID = this.props.params.messageID;
		return !messageID ?
			<FBmessageList /> :
			<div>
				<Header />
				<h1> HELLO </h1>
			</div>;

	}
}