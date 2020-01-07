import React, { useState, useEffect } from 'react'

const AddOp = props => {
    const [formInputValues, setFormInputValues] = useState({name:''});
    const [formSelectValues, setFormSelectValues] = useState({frequency:'daily', responsible:'operator'});

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
            const token = window.localStorage.getItem('token');
            const response = await fetch('', {
            method: 'POST',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            },
            responseType: 'json',
            body: JSON.stringify({
                'name': formInputValues.name,
                'frequency': formSelectValues.frequency,
                'responible': formSelectValues.responsible
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
            <h1>Add Operation</h1>
            <form>
                <div>
                <h3>Name of operation</h3>
                <input
                    id="name"
                    type="text"
                    placeholder = "Name of operation"
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
                <h3>Responsible</h3>
                <select id = "responsible" value={formSelectValues.responsible} onChange={handleSelectChange}>
                    <option value="operator">Operator</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                </select>
                </div>
                <button onClick={handleSubmitButtonClick}>Submit</button>
            </form>
        </div>
    )
}

export default AddOp;