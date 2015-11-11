import React, { Component } from 'react';

export default class FacebookPage extends Component {
    render (){
        return(
            <div>
                <div className='FacebookContainer'>
                    {facebook}
                    <textarea></textarea>
                    <div className='SignUpContainer'>
                        <section>
                            <p>{singleSignUp}</p>
                            <div>{likeValue}</div>
                        </section>
                        <div><navbar></navbar></div>
                    </div>
                    <div>
                        <section>
                            <p>{totalSignUp}</p>
                            <div>{totalLikeValue}</div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}