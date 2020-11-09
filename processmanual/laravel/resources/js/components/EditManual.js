import React, { useState, useEffect } from 'react';

const EditManual = (props) => {
    const [manual, setManual] = useState([]);
    const [formInputValues, setFormInputValues] = useState({name:''});
    const handleInputChange = e => {
        setFormInputValues({
                ...formInputValues,
                [e.target.id] : e.target.value
        })
    }
    useEffect(()=> {
        const id = JSON.parse(window.localStorage.getItem('id'));
        async function fetchManual(){
            const response = await fetch(`http://www.processmanual.test:8080/api/manual/${props.manual.id}/edit`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + props.user.token,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setManual(data);
        }
            fetchManual();
    },[]);
    const handleSubmitButton = (e) => {
        e.preventDefault()
        async function postSubmit() {
            // const token = window.localStorage.getItem('token');
            const response = await fetch(`http://www.processmanual.test:8080/api/manual/${props.manual.id}`, {
            method: 'PUT',
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
    return (
        <div>
            <h1 style={{paddingTop:'56px'}}>Edit Manual</h1>
            <h2>Manual id: {props.manual.id}</h2>
            <h2>Manual name: {props.manual.name}</h2>
            <h2>Change name:</h2>
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
export default EditManual;