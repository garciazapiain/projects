import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Profile = (props) => {
    console.log(props);


return (
    <>
    <h1 style={{paddingTop:'56px'}}>Profile:</h1>
    <div>
        <h3>Name: {props.user.user.name}</h3>
        <h3>Email: {props.user.user.email}</h3>
    </div>
    </>
)

}

export default Profile;