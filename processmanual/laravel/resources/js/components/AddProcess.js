import React, { useState, useEffect } from 'react'

const AddProcess = props => {
    const [formInputValues, setFormInputValues] = useState({name:'process'});
    const [formSelectValues, setFormSelectValues] = useState({frequency:'daily'});

    const handleInputChange = e => {
        setFormInputValues({
                ...formInputValues,
                [e.target.id] : e.target.value
        })
    }
    
    const handleSelectChange = e => {
        setFormSelectValues({
                ...formSelectValues,
                [e.target.id] : e.target.value
        })
    }

    const handleSubmitButtonClick = (e) => {
        e.preventDefault()
        async function postSubmit() {
            // const token = window.localStorage.getItem('token');
            const response = await fetch('http://www.processmanual.test:8080/api/processes/new', {
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
                'frequency': formSelectValues.frequency,
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
            <h2>Add Process</h2>
            <form method="post">
                <div>
                <h3>Name of process</h3>
                <input
                    id="name"
                    type="text"
                    placeholder = "Name of process"
                    value = {formInputValues.name}
                    onChange = {handleInputChange}
                />
                </div>
                <div>
                <h3>Frequency of occurence</h3>
                <select id = "frequency" value={formSelectValues.frequency} onChange={handleSelectChange}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="variable">Variable</option>
                </select>
                </div>
                <button onClick={handleSubmitButtonClick}>Add process</button>
            </form>
        </div>
    )
}

export default AddProcess;