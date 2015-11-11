import React, { Component } from 'react';

export default class TwitterPage extends Component {
    render (){
        return(
            <div>
                <div className='TwitterContainer'>
                    Twitter
                    <textarea></textarea>
                    <div className='TwitterSignUpContainer'>
                        <table>
                            <tr>
                                <th>singleSignUp</th>
                                <th>likeValue</th>
                            </tr>
                        </table>
                        <div><navbar></navbar></div>
                    </div>
                    <div className='TwitterTotalContainer'>
                        <table>
                            <th>totalSignUp</th>
                            <th>totalLikeValue</th>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}