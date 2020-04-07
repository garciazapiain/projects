import React, { useState, useEffect } from 'react'
import AddProcess from './AddProcess.js'
import EditManual from './EditManual.js'

const AddManual = props => {
    const [formInputValues, setFormInputValues] = useState({name:'manual'});
    const [process, setProcess] = useState({})

    const handleInputChange = e => {
        setFormInputValues({
                ...formInputValues,
                [e.target.id] : e.target.value
        })
    }

    const handleSubmitButtonClick = (e) => {
        e.preventDefault()
        async function postSubmit() {
            // const token = window.localStorage.getItem('token');
            const response = await fetch('http://www.processmanual.test:8080/api/manual', {
            method: 'POST',
            // withCredentials: true,
            // credentials: 'include',
            headers: {
                'Accept': 'application/json',
                // 'Authorization': 'Bearer ' + token,
                // 'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            },
            responseType: 'json',
            body: JSON.stringify({
                'name': formInputValues.name,
            }),
            })
            const data = await response.json();

            console.log(data);
        }

        try {
            postSubmit();

        } catch (e) {
            console.log('errors', e)
        }
   } 


    return(
        <div style={{display:'flex', flexDirection:"column" }}>
            <h1>Add Manual</h1>
            <form method="post">
                <div>
                <h3>Name of Manual</h3>
                <input
                    id="name"
                    type="text"
                    placeholder = "Name of process"
                    value = {formInputValues.name}
                    onChange = {handleInputChange}
                />
                </div>
                <button onClick={handleSubmitButtonClick}>Save manual</button>
            </form>
        </div>
    )
}

export default AddManual;