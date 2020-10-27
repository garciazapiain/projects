import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SaveManual from './SaveManual.js';

const MyManuals = (props) => {
    const [manuals, setManuals] = useState([]);
    const [deletes, setDeletes] = useState(false);
    const [saveNewManual,setSaveNewManual]= useState(false);
    // console.log(props);

    function changeSaveNewManual (){
        setSaveNewManual(!saveNewManual);
        // console.log(saveNewManual);
    }
    
    function editManual (manual) {
        props.setManual(manual);
    }

    function viewManual (manual) {
        props.setManual(manual);
    }

    function deleteManual (manual) {
        if(window.confirm("Are you sure you want to delete?")){
            fetch(`http://www.processmanual.test:8080/api/manual/${manual.id}`,{
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + props.user.token,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                },
            })  
        }
        setDeletes(!deletes);
    }

    useEffect (() => {
        async function fetchManuals(){
            const response = await fetch('http://www.processmanual.test:8080/api/manual',{
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + props.user.token,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                },
                })
                const data = await response.json();
                setManuals(data)
            }
                fetchManuals();
            },[deletes]);
    useEffect (() => {
        async function fetchManuals(){
            const response = await fetch('http://www.processmanual.test:8080/api/manual',{
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + props.user.token,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                },
                })
                const data = await response.json();
                setManuals(data)
            }
                fetchManuals();
            },[setManuals]);

    if (manuals){
        // console.log(manuals)
        return (
                <>
                <h1 style={{paddingTop:'56px'}}>My Manuals:</h1>
                <div>
                    {
                        manuals.map((manual) => (
                            <>
                            <div style={{borderBottom:"1px solid black"}}>
                                <div className="myManuals-each">
                                    <div className="myManuals-each-child-id">
                                    {/* Manual ID */}
                                    <p>{manual.id}</p>
                                    </div>

                                    <div className="myManuals-each-child-name">
                                    {/* Manual Name */}
                                    <p>{manual.name}</p>
                                    </div>

                                    <div className="myManuals-each-child">
                                    {/* Edit Manual link */}
                                    <button className="button-edit"><Link to={`/manual/edit/${manual.id}`} onClick={()=>{ editManual(manual)
                                    }}>Edit</Link></button>
                                    </div>

                                    <div className="myManuals-each-child">
                                    {/* View Manual Link */}
                                    <button className="button-view"><Link to={`/manual/view/${manual.id}`} onClick={()=>{ viewManual(manual)
                                    }}>View</Link></button>
                                    </div>

                                    <div className="myManuals-each-child">
                                    {/* Delete Manual */}
                                    <button className="button-delete" onClick={()=>{ deleteManual(manual)
                                    }}>Delete</button>
                                    </div>
                                </div>
                            </div>
                            </>
                        ))
                    }
                </div>
                <div style={{margin:"2em", display:"flex", justifyContent:"center"}}>
                    <Link to="/manual/new" className="btn btn-primary">Create New Manual</Link>
                </div>
                <div className="myManuals-each-child">
                    {/* Testing */}
                    <button className="button-savenew" onClick={ changeSaveNewManual}>Test</button>
                </div>
                
        
            {saveNewManual==true ? 
                <SaveManual
                manual = {props.manual}
                user = {props.user}
                setUser={props.setUser} /> : null
                } 
            </>
        )
    }
}

export default MyManuals;