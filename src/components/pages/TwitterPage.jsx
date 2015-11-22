import React, { Component } from 'react';

export default class TwitterPage extends Component {
  render() {
    return (
            <div>
                <div className='TwitterContainer'>
                    <h2>Twitter</h2><br/>
                    <textarea></textarea>
                    <br/>
                    <div className='TwitterSignUpContainer'>
                        <table>
                            <tr>
                                <th> singleSignUp </th>
                                <th> likeValue </th>
                            </tr>
                        </table>
                        <div><navbar></navbar></div>
                    </div>
                    <div className='TwitterTotalContainer'>
                        <table>
                            <tr>
                                <th> totalSignUp </th>
                                <th> totalLikeValue </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
    );
  }
}