import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import {BrowserRouter, Router, Route, Switch, Redirect} from "react-router-dom";
import history from '../history.js'
import Nav from './Components/Nav.js'
import AddManual from './Components/AddManual.js'

const navStyle = {
    width: '100vw',
    backgroundColor: 'lightblue',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px 0 20px'
}

const buttonContainerStyle = {
    flexBasis: '15%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px 0 20px'
}

const navButtonStyle = {
    cursor: 'pointer',
    margin: '0 5px 0 5px 0'

}

const Home = props => {
    const [manual, setManual] = useState();
    useEffect (() => {
        async function fetchManuals(){
            const response = await fetch('http://www.quanticfood.test:8080/api/manuals',{
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    // 'Authorization': 'Bearer ' + token,
                    // 'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                },
                })
                const data = await response.json();
                setManual(data)
                console.log('restdata',data);
            }
                fetchManuals();
            },[])
    if (manual){
        console.log(manual);
        return (
                <>
                <h1>Home</h1>
                <AddManual/>
                <h3>My Manuals:</h3>
                <div>
                    {
                        manual.map((manual,key) => (
                            <p>{manual.name}</p>
                        ))
                    }
                </div>
                </>
        )
    } return ('Loading...')
}

export default Home;