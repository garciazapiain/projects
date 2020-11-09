import React, { useState, useEffect } from 'react'
import AddProcess from './AddProcess.js'
import MarkdownPreview from './MarkdownPreview.js'
import EditManual from './EditManual.js'
import { Link } from 'react-router-dom';


const AddManual = props => {
    const [manualFormInputValues, setManualFormInputValues] = useState({name:'manual'});
    const [processFormInputValues, setProcessFormInputValues] = useState({name:'process'});
    const [process, setProcess] = useState({})
    const [addingProcess, setAddingProcess] = useState(true);
    // console.log(props);
    console.log(addingProcess);


    const manualHandleInputChange = e => {
        setManualFormInputValues({
                ...manualFormInputValues,
                [e.target.id] : e.target.value
        })
    }
    const processHandleInputChange = e => {
        setManualFormInputValues({
                ...manualFormInputValues,
                [e.target.id] : e.target.value
        })
    }

    const handleSubmitButtonClick = (e) => {
        e.preventDefault()
        async function postSubmit() {
            // const token = window.localStorage.getItem('token');
            const response = await fetch('https://www.processmanual.test:8080/api/manual', {
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
                'name': manualFormInputValues.name,
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
    const handleProcessSubmitButtonClick = (e) => {
        e.preventDefault()
        async function postSubmit() {
            // const token = window.localStorage.getItem('token');
            const response = await fetch('http://www.processmanual.test:8080/api/process', {
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
                'name': processFormInputValues.name,
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

   if (addingProcess){
       return (
        <div style={{display:'flex', flexDirection:"column" }}>
        <h1 style={{paddingTop:'56px'}}>Add Manual:</h1>
        <div className="addManualContainer">
            <div className="addManualColumn1">
                {/* First Component */}
                <div className="inputContainer">
                    <form method="post">
                        <div>
                        <h2>Name of Manual</h2>
                        <input
                            id="name"
                            type="text"
                            value = {manualFormInputValues.name}
                            onChange = {manualHandleInputChange}
                        />
                        </div>
                    </form>
                </div>
                {/* Second Component */}
                <div className="addProcessContainer">
                    <AddProcess
                        addingProcess = {addingProcess}
                        setAddingProcess = {setAddingProcess}
                    />
                </div>
                <button > <Link to={`/manual/edit/`} onClick={handleSubmitButtonClick} >Save Manual</Link></button>
            </div>
            <div className="addManualColumn2">
                {/* Third Component */}
                <div className="markdownPreviewContainer">
                    <MarkdownPreview
                        name={manualFormInputValues.name}
                        user={props.user}
                    />
                </div>
            </div>
        </div>
    </div>
       )
   }
   else{
    return(
        <div style={{display:'flex', flexDirection:"column" }}>
            <h1 style={{paddingTop:'56px'}}>Add Process:</h1>
            <div className="addManualContainer">
                <div className="addManualColumn1">
                    {/* First Component */}
                    <div className="inputContainer">
                        <form method="post">
                            <div>
                            <h2>Name of Process</h2>
                            <input
                                id="name"
                                type="text"
                                placeholder = "Name of process"
                                value = {processFormInputValues.name}
                                onChange = {processHandleInputChange}
                            />
                            </div>
                        </form>
                    </div>
                    {/* Second Component */}
                    <div className="addProcessContainer">
                        <AddProcess
                            addingProcess = {addingProcess}
                            setAddingProcess = {setAddingProcess}
                        />
                    </div>
                    <button onClick={handleProcessSubmitButtonClick}>Save Process</button>
                </div>
                <div className="addManualColumn2">
                    {/* Third Component */}
                    <div className="markdownPreviewContainer">
                        <MarkdownPreview
                            name={manualFormInputValues.name}
                            user={props.user}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
   }
}

export default AddManual;