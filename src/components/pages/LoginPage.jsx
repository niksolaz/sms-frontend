import React, { Component } from 'react';

export default class LoginPage extends Component{
    render (){
        return(
            <div>
                <div className='LoginContainer'>
                    <form>
                        <fieldset>
                        <legend>Login:</legend>
                            Email:<br/>
                            <input type="text" name="email"></input>
                            <br/>
                            Password:<br/>
                            <input type="password" name="psw"></input>
                            <br/>
                            Confirm Your Login:<br/>
                            <button>GO!</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}
