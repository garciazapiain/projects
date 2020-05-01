import React, { useState, useEffect } from 'react'
 
const MarkdownPreview = props => {
    console.log(props);
    return (
        <div className="markdownFirstPage">
            <h2>{props.name}</h2>
        </div>
    )
}

export default MarkdownPreview;