import React, {Component} from 'react';

import Header from '../components/modules/Header.jsx';

import {Link} from 'react-router';

export default class Setting extends React.Component {
	render(){
		return (
			<div className="container">
				<Header />
				<h3>Setting</h3>
			</div>
		);
	}
}