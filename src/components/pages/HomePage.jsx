import React, { Component } from 'react';

export default class HomePage extends Component {
    render (){
        return(
            <div>
                <div className='HomeContainer'>
                    Write your message and send it to Facebook and Twitter
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>
        );
    }
}