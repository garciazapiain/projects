import React, { useState, useEffect } from "react"
import axios from "axios";
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';

const Register = props => {
    const { user } = props;
    const [alert, setAlert] = useState({})
    const formStyle = { borderRadius: '10px', margin: '.3rem', width:'286px' }
    const [formInputValues, setFormInputValues] = useState({name: '', email: '', password: ''});
    const handleNameInputChange = e => {
        setFormInputValues({
            ...formInputValues,
            [e.target.id]: e.target.value
        })
        console.log(user);
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

        console.log(data);

        if (data.error) {
            setAlert();
        } else if (data.token) {
            props.setUser({
                loggedIn: true,
                token: data.token,
                userinfo: data.userinfo
            })
            setAlert({
                message: 'You\'ve been logged in successfully',
                style: {color: 'green'}
            })
            window.localStorage.setItem('token', data.token);
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
        user ? ( user.token ? location.replace('/') : null ) : null;
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
       </form>
    )

}

export default Register;
