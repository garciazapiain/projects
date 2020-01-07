import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DishForm from '../Dish/DishForm';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import Reviews from '../Review/Reviews'

const dietPicture = {
    vegan: 'icons8-vegan-symbol-512.png',
    vegetarian: 'lettuce.png',
    pescatarian: 'trout.png',
    keto: 'meat.png',
    halal: 'halal.png',
    kosher: 'kosher.png',
    gluten: 'icons8-no-gluten-96.png',
    milk: 'icons8-non-lactose-food-100.png',
    soy: 'icons8-no-soy-512.png',
    eggs: 'icons8-no-eggs-128.png',
    peanuts: 'icons8-peanut-80.png',
    "tree nuts": 'icons8-no-nuts-80.png',
    fish: 'icons8-no-fish-80.png',
    molluscs: 'icons8-no-shellfish-80.png',
    crustaceans: 'icons8-no-crustaceans-80.png',
    mustard: 'icons8-no-mustard-80.png',
    sesame: 'icons8-no-sesame-96.png',
    celery: 'icons8-no-celery-64.png',
    lupin: 'icons8-no-lupines-96.png',
    sulphites: 'icons8-no-filling-80.png'
}


const RestaurantDetail = props => {
        console.log(props.restaurantId)
        const [restaurant, setRestaurant] = useState();
        useEffect(()=> {
            const token = window.localStorage.getItem('token');
            const id = JSON.parse(window.localStorage.getItem('id'));
            async function fetchRestaurant(){
                const response = await fetch(`/api/restaurant/${props.restaurantId}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + token,
                        'X-Requested-With': 'XMLHttpRequest',
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setRestaurant(data);
                console.log('restdata', data);

            }
                fetchRestaurant();
        },[props.restaurantId]);
    

    
    
    if (restaurant) {
        console.log('restaurant', restaurant);
        return (
            <div className="restaurantDetail">
                <div className="restaurantDetailPageStyle">
                    <h1>{restaurant.name}</h1>
                    <Row className="restaurantDetailBackground">
                        <Col sm="12" md="4">Address: {restaurant.address} </Col>
                        <Col sm="12" md="4">Phone: {restaurant.phone} </Col>
                        <Col sm="12" md="4">Website: {restaurant.website_url} </Col>
                    </Row>
                </div>
                <div className="restaurantDetailPageScroll">
                    {
                        restaurant.dishes.map((dish, key) => (
                            
                            <Card key={key} className="dishCard shadow-sm p-3 mb-5 bg-white rounded">
                                <div>
                                    <CardTitle className="restaurantDetail">{dish.name}</CardTitle>
                                        <div>{dish.description}</div>
                                        {
                                            dish.diets.map((diet, key) => (
                                                <img key={key} src={ `/images/${dietPicture[diet.name]}` } alt={ diet.name } className="profileIcon"></img>
                                            ))
                                        }
                                        
                                </div>
                                    <Reviews 
                                        reviews={dish.reviews} 
                            />
                            </Card>
                            
                        ))
                    }
                </div>
            </div>
        )
    } return ('Loading...')
}
export default RestaurantDetail;