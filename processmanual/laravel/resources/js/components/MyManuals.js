import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import {BrowserRouter, Router, Route, Switch, Redirect} from "react-router-dom";
import history from '../history.js'
// import Nav from './Components/Nav.js'
// import AddManual from './Components/AddManual.js'
const MyManuals = (props) => {
    const [manuals, setManuals] = useState();
    function editManual (id) {
        props.setManualId(id);
    }
    useEffect (() => {
        async function fetchManuals(){
            const response = await fetch('http://www.processmanual.test:8080/api/manuals',{
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    // 'Authorization': 'Bearer ' + token,
                    // 'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                },
                })
                const data = await response.json();
                setManuals(data)
            }
                fetchManuals();
            },[])
    if (manuals){
        return (
                <>
                <h3>My Manuals:</h3>
                <div>
                    {
                        manuals.map((manual,key) => (
                            <>
                            <h4>{manual.name}</h4>
                            <p>{manual.id}</p>
                            <Link to="/manual/edit/" onClick={()=>{ editManual(manual.id)
                            }} className="btn btn-primary">Edit manual</Link>
                            </>
                        ))
                    }
                </div>
                </>
        )
    } return ('Loading...')
}

export default MyManuals;