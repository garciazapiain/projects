import React, { useState, useEffect } from 'react';

const EditManual = (props) => {
    const [manual, setManual] = useState([]);
    useEffect(()=> {
        const id = JSON.parse(window.localStorage.getItem('id'));
        async function fetchManual(){
            const response = await fetch(`http://www.processmanual.test:8080/api/manual/${props.manual.id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    // 'Authorization': 'Bearer ' + token,
                    // 'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setManual(data);
        }
            fetchManual();
    },[props.Manual]);
    return (
        <div key={props.key}>
            <h1>Edit Manual</h1>
            <h2>Manual id: {props.manual.id}</h2>
            <h2>Manual name: {props.manual.name}</h2>
        </div>
    )

}
export default EditManual;