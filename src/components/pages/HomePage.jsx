import React, { Component } from 'react';

let HomePage = React.createClass({
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
});

export default HomePage;