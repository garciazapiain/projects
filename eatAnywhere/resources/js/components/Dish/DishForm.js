import React, { useState } from "react"
import axios from "axios";
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';

const dietMap = {
    vegan: 1,
    vegetarian: 2,
    pescetarian: 3,
    keto: 4,
    halal: 5,
    kosher: 6,
    gluten: 7,
    milk: 8,
    soy: 9,
    eggs: 10,
    peanuts: 11,
    treenuts: 12,
    fish: 13,
    molluscs: 14,
    crustaceans: 15,
    mustard: 16,
    sesame: 17,
    celery: 18,
    lupin: 19,
    sulphites: 20,
}

// const [restaurantId] = useState();
// console.log(props.rest);

const getDietIds = (diets) => Object.keys(diets).reduce((acc, dietName) => {
        if(diets[dietName]) acc.push(dietMap[dietName])
        return acc
    }, [])

const DishForm = props => {
    const [formInputValues, setFormInputValues] = useState({name: '', description: '', diets:{
        vegan: true,
        vegetarian: true,
        pescetarian:true,
        keto: true,
        halal: true,
        kosher: true,
        gluten: true,
        milk: true,
        soy: true,
        eggs: true,
        peanuts: true,
        treenuts: true,
        fish: true,
        molluscs: true,
        crustaceans: true,
        mustard: true,
        sesame: true,
        celery: true,
        lupin: true,
        sulphites: true
    }});
    const [formSubmitSuccess, setFormSubmitSuccess] = useState()
    const formStyle = { margin: '.3rem' }

    console.log('rest.id', props.restaurantId);

    const handleNameInputChange = e => {
        setFormInputValues({
            ...formInputValues,
            [e.target.id]: e.target.value
        })
    };

    const handleCheckboxInputChange = e => {
        const name = e.target.name;
        const checked = e.target.checked;
        console.log(e.target.value)
        console.log(e.target.name)
        setFormInputValues(() => ({
            ...formInputValues,
            diets: {
                ...formInputValues.diets,
                [name]: checked
            } 
        }))
    }


   const handleSubmitButtonClick = (e) => {
        e.preventDefault()
        const diets = getDietIds(formInputValues.diets)
        console.log("diets", diets)
        async function postSubmit() {
            const token = window.localStorage.getItem('token');
            const response = await fetch('/api/dish/new', {
            method: 'POST',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            },
            responseType: 'json',
            body: JSON.stringify({
                'restaurant_id': props.restaurantId,
                'name': formInputValues.name,
                'description': formInputValues.description,
                'diets': diets 
            }),
            })
            const data = await response.json();

            console.log(data);
            window.location = '/';
        }

        try {
            postSubmit();

        } catch (e) {
            console.log('errors', e)
        }
   } 

   return (
    <div className="restaurantFormBackground">
           <form className="dishForm">
               <h2>Add a new dish!</h2>
               <input
                id="name"
                type="text"
                placeholder = "name"
                value = {formInputValues.name}
                onChange = {handleNameInputChange}
                style={formStyle}
               />
               <br/>
               <input
                id="description"
                type="text"
                placeholder = "description"
                value={formInputValues.description}
                onChange = {handleNameInputChange}
                style={formStyle}
               />
               <Row style={{alignItems:'center', justifyContent: 'center', paddingTop:'0',margin:'0rem', padding:'0rem', width:'60%'}}>
                    <Col sm='12' md="6" >
                    <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/icons8-vegan-symbol-512.png'></img>
                            <input 
                                type="checkbox"
                                id="vegan"
                                name="vegan"
                                value="1"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.vegan}
                                /> Vegan
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/lettuce.png'></img>
                            <input 
                                type="checkbox"
                                id="vegetarian"
                                name="vegetarian"
                                value="2"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.vegetarian}
                                /> Vegetarian
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/trout.png'></img>
                            <input 
                                type="checkbox"
                                id="pescetarian"
                                name="pescetarian"
                                value="3"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.pescetarian}
                                /> Pescetarian
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/meat.png'></img>
                            <input 
                                type="checkbox"
                                id="keto"
                                name="keto"
                                value="4"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.keto}
                                /> Keto
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/halal.png'></img>
                            <input 
                                type="checkbox"
                                id="halal"
                                name="halal"
                                value="5"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.halal}
                                /> Halal
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/kosher.png'></img>
                            <input 
                                type="checkbox"
                                id="kosher"
                                name="kosher"
                                value="6"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.kosher}
                                /> Kosher
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/icons8-no-gluten-96.png'></img>
                            <input 
                                type="checkbox"
                                id="gluten"
                                name="gluten"
                                value="7"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.gluten}
                                /> Gluten
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/icons8-non-lactose-food-100.png'></img>
                            <input 
                                type="checkbox"
                                id="milk"
                                name="milk"
                                value="8"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.milk}
                                /> Milk
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/icons8-no-soy-512.png'></img>
                            <input 
                                type="checkbox"
                                id="soy"
                                name="soy"
                                value="9"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.soy}
                                /> Soy
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/icons8-no-eggs-128.png'></img>
                            <input 
                                type="checkbox"
                                id="eggs"
                                name="eggs"
                                value="10"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.eggs}
                                /> Eggs
                        </label>
                        </Col>
                        <Col sm='12' md="6" >
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/icons8-peanut-80.png'></img>
                            <input 
                                type="checkbox"
                                id="peanuts"
                                name="peanuts"
                                value="11"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.peanuts}
                                /> Peanuts
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/icons8-no-nuts-80.png'></img>
                            <input 
                                type="checkbox"
                                id="treenuts"
                                name="treenuts"
                                value="12"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.treenuts}
                                /> Tree nuts
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/icons8-no-fish-80.png'></img>
                            <input 
                                type="checkbox"
                                id="fish"
                                name="fish"
                                value="13"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.fish}
                                /> Fish
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/icons8-no-shellfish-80.png'></img>
                            <input 
                                type="checkbox"
                                id="molluscs"
                                name="molluscs"
                                value="14"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.molluscs}
                                /> Molluscs
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/icons8-no-crustaceans-80.png'></img>
                            <input 
                                type="checkbox"
                                id="crustaceans"
                                name="crustaceans"
                                value="15"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.crustaceans}
                                /> Crustaceans
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/icons8-no-mustard-80.png'></img>
                            <input 
                                type="checkbox"
                                id="mustard"
                                name="mustard"
                                value="16"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.mustard}
                                /> Mustard
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/icons8-no-sesame-96.png'></img>
                            <input 
                                type="checkbox"
                                id="sesame"
                                name="sesame"
                                value="17"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.sesame}
                                /> Sesame
                        </label>
                        <label style={{width:'150px'}}>
                            <img className="profileIcon" src='images/icons8-no-celery-64.png'></img>
                            <input 
                                type="checkbox"
                                id="celery"
                                name="celery"
                                value="18"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.celery}
                                /> Celery
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/icons8-no-lupines-96.png'></img>
                            <input 
                                type="checkbox"
                                id="lupin"
                                name="lupin"
                                value="19"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.lupin}
                                /> Lupin
                        </label>
                        <label style={{margin:'0', padding:'0' ,width:'150px'}}>
                            <img className="profileIcon" src='images/icons8-no-filling-80.png'></img>
                            <input 
                                type="checkbox"
                                id="sulphites"
                                name="sulphites"
                                value="20"
                                onChange={handleCheckboxInputChange}
                                checked={formInputValues.diets.sulphites}
                                /> Sulphites
                        </label>
                        <br />
                        </Col>
                </Row>
               <button onClick = {handleSubmitButtonClick} style={{border: '1px solid blue', margin:'5px'}}>Submit</button>
               {formSubmitSuccess === true && <h3>Congrats!</h3>}
               {formSubmitSuccess === false && <h3 style={{ color: 'red'}}>Error occured, try later</h3>}
           </form>
       </div>
   )
};

export default DishForm;