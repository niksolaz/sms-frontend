import React, { Component } from 'react';

export default class LoginPage extends Component {
    render (){
        return(
            <div>
                <div className='LoginContainer'>
                    <form>
                    <input type="text" name="Email">Email</input><br/>
                    <input type="text" name="Password">Password</input><br/>
                    <input type="submit" value="Submit">GO!</input>
                    </form>
                </div>
            </div>
        );
    }
}