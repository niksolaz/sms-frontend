import React, { Component } from 'react';

export default class FacebookPage extends Component {
    render (){
        return(
            <div>
                <div className='FacebookContainer'>
                    facebook
                    <textarea></textarea>
                    <div className='FacebookSignUpContainer'>
                        <table>
                            <tr>
                                <th>singleSignUp</th>
                                <th>likeValue</th>
                            </tr>
                        </table>
                        <div><navbar></navbar></div>
                    </div>
                    <div className='FacebookTotalContainer'>
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