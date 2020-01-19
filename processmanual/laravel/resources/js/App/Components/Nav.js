import React from 'react'
import {   BrowserRouter,Link } from 'react-router-dom'

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

const Nav = props => {
    return (
        <nav style={navStyle}>
            <h1>Navigation</h1>
            <div style={buttonContainerStyle}>
                <Link to='/manual/new'><div style={navButtonStyle}>Add Manual</div></Link>
                <Link to='/'><div style={navButtonStyle}>Home</div></Link>
            </div>
        </nav>
    )
}

export default Nav