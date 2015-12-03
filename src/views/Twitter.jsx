import React from 'react';

import Header from '../components/modules/Header.jsx';
import {Link, PropTypes} from 'react-router';

export default class Twitter extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="container">
                <Header  />
                <h3>Twitter</h3>
            </div>
        );
    }
}

Twitter.contextTypes = { history: PropTypes.history };
