import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import Dishes from '../Dish/Dishes';
import {Link} from "react-router-dom";


const RestaurantCard = (props) => {
    // console.log(props)
    const [ loading, setLoading ] = useState();
    const [ restaurants, setRestaurants ] = useState([]);
// console.log('RestaurantCard', props.user)

    useEffect(()=> {
        // console.log('RestaurantCard useeffect 1');
        async function fetchRestaurants(){
            console.log(props.user)
            setLoading(true);
            const response = await fetch('/api/restaurants', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + props.user.token,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    diets: props.user.user.diets.map(d => d.id)
                })
            })
            const data = await response.json();
            setRestaurants(data);
            setLoading(false);
            // console.log('data', data);
        }

            fetchRestaurants();
    }, []);

    useEffect(() => {
        const restaurantsPosition = [];
        restaurants.map(restaurant => {
            let restObj = {
                name: restaurant.name,
                latitude: restaurant.latitude,
                longitude: restaurant.longitude,
            }
            restaurantsPosition.push(restObj);
        })
        console.log('pos', restaurantsPosition);
        props.setRestaurantsPosition(restaurantsPosition);
    }, [restaurants])

    // console.log('restaurants', restaurants)

if (loading === true) {
    return (
        <div style={{textAlign: 'center', padding: '2rem 1rem'}}>
            Loading...
        </div>
    )
} return (
        <div className="restaurantCardsScroll">
            {
                restaurants && 
                restaurants.map((restaurant, key) => (
                    <Card key={key} body  className="shadow p-1 mb-4 restaurantCard rounded">
                        <div className="restaurantCardMobile">
                            <h4 className="restaurantName">
                                <Link  to="/restaurant/" onClick={() => {
                                    props.setRestaurantId(restaurant.id)
                                    if (window.innerWidth < 767) {
                                        props.setScrollTo('.restaurantDetail');
                                      }
                                }
                                    }>
                                        {restaurant.name}
                                </Link>
                            </h4>
                            
                            <div className="restaurantInfo">
                                <Row>
                                    <Col xs="12" md="6" lg="4"> {restaurant.address} </Col>
                                    <Col xs="12" md="6" lg="4">{restaurant.phone} </Col>
                                    <Col xs="12" md="12" lg="4">{restaurant.website_url} </Col>
                                </Row>
                            </div>    
                                <Button className="btnShowOnMap" onClick={() => {
                                    // console.log(restaurant);
                                    props.handleRestCoords({
                                        lat: restaurant.latitude,
                                        lon: restaurant.longitude
                                    })
                                    console.log('SETTING SCROLLTO TO .mapRow');
                                    if (document.querySelector('.mapRow')) {
                                        // console.log('ELEMENT EXISTS');
                                    } else {
                                        // console.log('ELEMENT DOES NOT EXIST NOW');
                                    }
                                    props.setScrollTo('.mapRow');
                                    //executeScroll();
                                }}
                                tag={Link} to="/" >Map</Button>
                        </div>
                        
                        <Dishes
                            dishes={restaurant.dishes}
                            restaurantId={restaurant.id}
                            setRestaurantId={props.setRestaurantId}
                            setDishId={props.setDishId}
                            user={props.user}
                        />
                    </Card>
                ))
            }
            <Card body className="shadow rounded newRestaurant">
                <h4 className="restaurantNewName">Add New Restaurant</h4>
                <div style={{textAlign: 'center' ,fontSize:'2em'}}>
                    <Button tag={Link} to="/restaurant/new" 
                    onClick={()=> {
                        if (window.innerWidth < 767) {
                            setTimeout(() => {
                              const scrolltop = window.pageYOffset || document.documentElement.scrollTop;
                            //   console.log(scrolltop)
                            //   console.log(document.querySelector('.restaurantForm').getBoundingClientRect().top)
                            //   console.log(document.querySelector('.restaurantForm').getBoundingClientRect().top + scrolltop)
                              window.scrollTo({
                                  top: document.querySelector('.restaurantForm').getBoundingClientRect().top + scrolltop, 
                                  left: 0, 
                                  behavior: 'smooth'
                              });
                            }, 50)
                          }
                    }}
                    >+</Button>
                </div>
            </Card>
        </div>
    )
}

export default RestaurantCard;