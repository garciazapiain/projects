import React, { useState, useEffect } from 'react';

const AddProcess = props => {
    const [processFormInputValues, setProcessFormInputValues] = useState({name:'process'});
    const [formSelectValues, setFormSelectValues] = useState({frequency:'daily'});

    // console.log('hey im add process', props);

    const handleInputChange = e => {
        setProcessFormInputValues({
                ...processFormInputValues,
                [e.target.id] : e.target.value
        })
    }

    function buttonAddProcess () {
        props.setAddingProcess(!props.addingProcess);
        console.log(props.addingProcess);
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
            const response = await fetch('http://www.processmanual.test:8080/api/processes', {
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
                'name': processFormInputValues.name,
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
   if (props.addingProcess){
    return(
        <div style={{display:'flex', flexDirection:"column" }}>
                <div>
                <h3>Name of process</h3>
                <input
                    id="name"
                    type="text"
                    placeholder = "Name of process"
                    value = {processFormInputValues.name}
                    onChange = {handleInputChange}
                />
                <button onClick={buttonAddProcess}>+</button>
                </div>
        </div>
    )
   }
   return (
    <div style={{display:'flex', flexDirection:"column" }}>
        <div>
        <h3>Name of Step</h3>
        <input
            id="name"
            type="text"
            value = {processFormInputValues.name}
            onChange = {handleInputChange}
        />
        <button onClick={buttonAddProcess}>+</button>
        </div>
    </div>
   )
}

export default AddProcess;