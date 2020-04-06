import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import {BrowserRouter, Router, Route, Switch, Redirect} from "react-router-dom";
import history from '../history.js'
import Nav from './NavigationBar.js'
import AddManual from './AddManual.js'
import EditManual from './EditManual.js'
import MyManuals from './MyManuals.js'

const Home = () => {
    const [addClass, setaddClass] = useState(false);
    const [addClass2, setaddClass2] = useState(false);
    
    const addManual = () => {
        setaddClass(!addClass);
        console.log('Add manual class is set to ' + addClass)
    }
    const myManual = () => {
        setaddClass2(!addClass2);
        console.log('My manual class is set to ' + addClass2)
    }


    return (
                <>
                <div className='manualsHomePage'>
                    <div className={`${addClass ? 'addManualExpand':'manualsHomePage1'}`} onMouseEnter={addManual} onMouseLeave={addManual}>
                        <h2>Add Manual</h2></div>
                    <div className={`${addClass2 ? 'myManualExpand':'manualsHomePage2'}`} onMouseEnter={myManual} onMouseLeave={myManual}>
                        <h2>My Manuals</h2></div>
                </div>
                <div id='aboutHomePage' className='aboutHomePage'
                    >
                    <h3>About</h3>
                </div>
                <div id='contactHomePage' className='contactHomePage'
                    >
                    <h3>Contact</h3>
                </div>
                </>
         )
}

export default Home;