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
                <br/>
                <Link to={'/users'}>User</Link>
                <div>
                  <ul>
                    <li>
                    Message user Twitter: <br/>
                      <textarea row='100' col='100'>
                        <p>Message</p>
                      </textarea>
                    </li>
                    <li>
                    Message user Twitter: <br/>
                      <textarea row='100' col='100'>
                        <p>Message</p>
                      </textarea>
                    </li>
                    <li>
                    Message user Twitter: <br/>
                      <textarea row='100' col='100'>
                        <p>Message</p>
                      </textarea>
                    </li>
                  </ul>
                </div>
            </div>
        );
    }
}

Twitter.contextTypes = { history: PropTypes.history };
