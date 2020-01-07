import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const Login = props => {
    const [ loginInfo, setLoginInfo ] = useState({
        email: '',
        password: '',
    });
    const [ alert, setAlert ] = useState({
        message: '',
        style: {}
    })

    const handleFormChange = e => {
        const id = e.target.id
        const value = e.target.value
        setLoginInfo(prev => {
            return {
              ...prev,
              [id]: value
            }
        })
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        
        async function postLogin() {
            const response = await fetch('/api/login', {
            method: 'POST',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            },
            responseType: 'json',
            body: JSON.stringify({
                'email': loginInfo.email,
                'password': loginInfo.password 
            }),
            })
            const data = await response.json();

            console.log(data);

            if (data.error) {
                setAlert({
                    message: data.error,
                    style: {color: 'red'}
                });
            } else if (data.token) {
                props.setUser({
                    loggedIn: true,
                    token: data.token,
                    user: data.user
                })
                setAlert({
                    message: 'You\'ve been logged in successfully',
                    style: {color: 'green'}
                })
                window.localStorage.setItem('token', data.token);
                window.localStorage.setItem('user', JSON.stringify(data.user))
            }
        }

        try {
            postLogin();

        } catch (e) {
            console.log('errors', e)
        }
    }

    return (
        <div className="login">
            <h1 style={{fontSize: '4rem', marginBottom: '2rem'}}>eatAnywhere</h1>
            <div className="login-form">
                <h2 style={{fontSize: '2rem'}}>Login</h2>
                <h4 style={alert.style}>{ alert.message }</h4>
                <form action="" method="post" onSubmit={ handleFormSubmit } >
                    Email:<br />
                    <input id="email" type="text" name="email" 
                        value={ loginInfo.email } 
                        onChange={ handleFormChange } 
                        style={{marginBottom: '1rem'}}
                    /><br />
                    Password:<br />
                    <input id="password" type="password" name="password" 
                        value={ loginInfo.password } 
                        onChange={ handleFormChange }
                        style={{marginBottom: '1rem'}}
                    /><br />
                    <input type="submit" value="Log in" />
                </form>
                <div style={{marginTop: '1rem'}}>
                    Not a registered user? <br/>
                    <Link to="/register" className="navLink">
                        Click here!
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;