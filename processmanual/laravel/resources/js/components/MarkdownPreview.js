import React, { useState, useEffect } from 'react'
 
const MarkdownPreview = props => {
    return (
        <div className="markdownFirstPage">
            <div className="markdownImage">
                <img style={{padding:"2em"}} src={props.user.user.image}/>
            </div>
            <div className="markdownManualName">
                <h2>{props.name}</h2>
            </div>
            <div className="markdownDateCreated">
                <h6>Created:{props.user.user.created_at}</h6>
            </div>
        </div>
    )
}

export default MarkdownPreview;