import React, { Component } from 'react';

export default class FacebookPage extends Component {
  render() {
    return (
        <div>
            <div className='FacebookContainer'>
                <h2>Facebook</h2><br/>
                <textarea></textarea>
                <br/>
                <div className='FacebookSignUpContainer'>
                    <table>
                        <tr>
                            <th> singleSignUp </th>
                            <th> likeValue </th>
                        </tr>
                    </table>
                    <div><navbar></navbar></div>
                </div>
                <div className='FacebookTotalContainer'>
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
    );
  }
}
