import React, { Component } from 'react';

export default class HomePage extends Component {
    render (){
        return(
            <div>
                <div className='HomeContainer'>
                    <h3>Write your message and send it to Facebook and Twitter</h3>
                    <textarea></textarea>
                    <br/>
                    <button>Send</button>
                </div>
            </div>
        );
    }
}