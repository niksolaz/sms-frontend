import React, { Component } from 'react';

let LoginPage =React.createClass ({
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
});

export default LoginPage;