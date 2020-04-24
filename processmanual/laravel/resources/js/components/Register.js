import React, { useState, useEffect } from "react"
import axios from "axios";
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";



const Register = props => {
    const { user } = props;
    const [alert, setAlert] = useState({})
    const formStyle = { borderRadius: '10px', margin: '.3rem', width:'286px' }
    const [formInputValues, setFormInputValues] = useState({name: '', email: '', password: ''});
    let history = useHistory();
    const handleNameInputChange = e => {
        // console.log(e.target + 'this is e target');
        // console.log(e.target.id + 'this is e target id');
        // console.log(e.target.value + 'this is e target value');
        setFormInputValues({
            ...formInputValues,
            [e.target.id]: e.target.value
        })
        props.setUser({
            user: {
                name : formInputValues.name,
                email: formInputValues.email,
                password: formInputValues.password
              }
        })
    };

    async function postRegister() {
        const response = await fetch('http://www.processmanual.test:8080/api/register', {
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
            name: formInputValues.name,
            email: formInputValues.email,
            password: formInputValues.password,
        }),
        })
        const data = await response.json();

        if (data.error) {
            setAlert();
        } else if (data.token) {
            console.log(data);
            props.setUser({
                loggedIn: true,
                token: data.token,
                user: {
                    name : formInputValues.name,
                    email: formInputValues.email,
                    password: formInputValues.password,
                  }
            })
            console.log('registered succesfully')
            history.push('/')
            setAlert({
                message: 'You\'ve been logged in successfully',
                style: {color: 'green'}
            })
            window.localStorage.setItem('token', data.token);
            window.localStorage.setItem('user', JSON.stringify(user.user))
        }
    }

    const handleSubmitButtonClick = (e) => {
        e.preventDefault()
        try {
            postRegister();
        } catch (e) {
            console.log('errors', e)
        }
    } 

    useEffect(() => {
       ( user.token ? console.log('hey') : null );
    }, [user])

    return (
        <form style={{ display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', padding: '1rem', paddingTop: '2rem'}}>
           <h2>Register</h2>
            <h4>{ alert.error }</h4>
           <input
            id="name"
            type="text"
            placeholder = "name"
            value = {formInputValues.name}
            onChange = {handleNameInputChange}
            style={formStyle}
           />
           <br/>
           <input
            id="email"
            type="text"
            placeholder = "E-mail"
            value={formInputValues.email}
            onChange = {handleNameInputChange}
            style={formStyle}
           />
           <br/>
           <input
            id="password"
            type="password"
            placeholder = "Password"
            value={formInputValues.password}
            onChange = {handleNameInputChange}
            style={formStyle}
           />
           <br/>
            <button onClick = {handleSubmitButtonClick} style={{border: '1px solid blue', margin:'5px'}}>Submit</button>
            <Link to="/" onClick = {handleSubmitButtonClick}  style={{color:'black'}}>
                        Click here!
            </Link>
       </form>
    )

}

export default Register;
