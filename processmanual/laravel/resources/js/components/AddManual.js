import React, { useState, useEffect } from 'react'
import AddProcess from './AddProcess.js'
import MarkdownPreview from './MarkdownPreview.js'
import EditManual from './EditManual.js'

const AddManual = props => {
    const [formInputValues, setFormInputValues] = useState({name:'manual'});
    const [process, setProcess] = useState({})
    console.log(props);


    const handleInputChange = e => {
        setFormInputValues({
                ...formInputValues,
                [e.target.id] : e.target.value
        })
    }

    const handleSubmitButtonClick = (e) => {
        e.preventDefault()
        async function postSubmit() {
            // const token = window.localStorage.getItem('token');
            const response = await fetch('http://www.processmanual.test:8080/api/manual', {
            method: 'POST',
            // withCredentials: true,
            // credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + props.user.token,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            },
            responseType: 'json',
            body: JSON.stringify({
                'name': formInputValues.name,
            }),
            })
            const data = await response.json();

            console.log(data);
        }

        try {
            postSubmit();

        } catch (e) {
            console.log('errors', e)
        }
   } 


    return(
        <div style={{display:'flex', flexDirection:"column" }}>
            <h1 style={{paddingTop:'56px'}}>Add Manual:</h1>
            <div className="addManualContainer">
                <div className="addManualColumn1">
                    {/* First Component */}
                    <div className="inputContainer">
                        <form method="post">
                            <div>
                            <h3>Name of Manual</h3>
                            <input
                                id="name"
                                type="text"
                                placeholder = "Name of process"
                                value = {formInputValues.name}
                                onChange = {handleInputChange}
                            />
                            </div>
                        </form>
                    </div>
                    {/* Second Component */}
                    <div className="addProcessContainer">
                        <AddProcess/>
                    </div>
                    <button onClick={handleSubmitButtonClick}>Save manual</button>
                </div>
                <div className="addManualColumn2">
                    {/* Third Component */}
                    <div className="markdownPreviewContainer">
                        <MarkdownPreview
                            name={formInputValues.name}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddManual;