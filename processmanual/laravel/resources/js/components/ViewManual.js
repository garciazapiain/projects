import React, { useState, useEffect } from 'react';

const ViewManual = (props) => {
    const [manual, setManual] = useState([]);
    useEffect(()=> {
        const id = JSON.parse(window.localStorage.getItem('id'));
        async function fetchManual(){
            const response = await fetch(`http://www.processmanual.test:8080/api/manual/${props.manual}`, {
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
    },[props.Manual]);

    return (
        <div>
             <h1>View Manual</h1>
            <h2>Manual id: {props.manual.id}</h2>
            <h2>Manual name: {props.manual.name}</h2>
        </div>
    )

}
export default ViewManual;