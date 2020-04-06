import React, { useState, useEffect } from 'react';

const EditManual = (props) => {
    const [manual, setManual] = useState();
    useEffect(()=> {
        const id = JSON.parse(window.localStorage.getItem('id'));
        async function fetchManual(){
            const response = await fetch(`api/manual/edit/${props.manualId}`, {
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
            console.log('manual', data);

        }
            fetchManual();
    },[props.ManualId]);

    return (
        <div>
            <h1>Hey the id of this manual is {props.manualId}</h1>
        </div>
    )

}
export default EditManual;