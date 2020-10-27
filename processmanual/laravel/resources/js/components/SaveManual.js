import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const SaveManual = (props) => {
    const [formInputValues, setFormInputValues] = useState({name:''});
    let [data, setData]= useState({})

    const handleInputChange = e => {
        setFormInputValues({
                ...formInputValues,
                [e.target.id] : e.target.value
        })
    }

    console.log(props.user.token);

    const handleSubmitButton = (e) => {
        e.preventDefault()
        async function postSubmit() {
            // const token = window.localStorage.getItem('token');
            const response = await fetch('http://www.processmanual.test:8080/api/manual', {
            method: 'POST',
            // withCredentials: true,
            // credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + props.user.token,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            },
            responseType: 'json',
            body: JSON.stringify({
                'name': formInputValues.name,
            }),
            })
            data = await response.json();
            setData(data);
        }

        try {
            postSubmit();

        } catch (e) {
            console.log('errors', e)
        }
   } 
   console.log(data);

    return (
        <div>
            <h1>Save New Manual</h1>
                <input
                    id="name"
                    type="text"
                    value = {formInputValues.name}
                    onChange = {handleInputChange}
                />
                <button onClick={handleSubmitButton}> 
                    Save
                </button>
        </div>
    )
}

export default SaveManual;
