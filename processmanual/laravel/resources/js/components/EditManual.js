import React, { useState, useEffect } from 'react';

const EditManual = props => {
    console.log(props.ManualId)
    const [manual, setManual] = useState();
    useEffect(()=> {
        const id = JSON.parse(window.localStorage.getItem('id'));
        async function fetchManual(){
            const response = await fetch(`/api/edit/manual/${props.manualId}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token,
                    'X-Requested-With': 'XMLHttpRequest',
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
            <h1>Hey</h1>
        </div>
    )

}
export default EditManual;