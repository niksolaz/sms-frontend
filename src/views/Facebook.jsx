import React from 'react';

import Header from '../components/modules/Header.jsx';
import {Link, PropTypes} from 'react-router';

export default class Facebook extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="container">
                <Header  />
                <h3>Facebook</h3>
            </div>
        );
    }
}

Facebook.contextTypes = { history: PropTypes.history };
