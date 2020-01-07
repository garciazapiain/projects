import React, { useState } from 'react'
import Map from "./Map";
import RestaurantForm from './Restaurant/RestaurantForm';
import RestaurantDetail from './Restaurant/RestaurantDetail';
import DishForm from './Dish/DishForm';
import ReviewForm from './Review/ReviewForm';
import Sidebar from './Sidebar/Sidebar'
import { Row, Col } from 'reactstrap';
import {HashRouter, Router, Route, Switch, Redirect} from "react-router-dom";


const Home = props => {
    const { executeScroll, user, setUser } = props;
    const [ restCoords, setRestCoords ] = useState(null);
    const [ restaurantId, setRestaurantId ] = useState(null)
    const [ dishId, setDishId ] = useState(null)
    const [ restaurantsPosition, setRestaurantsPosition ] = useState([]);
    console.log('home dishId', dishId);
    // console.log('restaurantsPosition in Home: ', restaurantsPosition);
    // console.log(restCoords);
    return (
        <Row className="home">
            <HashRouter history={history}>
                <Col sm="12" md="6" className="pad pad-left">
                    <Sidebar 
                        setRestaurantId={setRestaurantId}
                        setRestCoords={setRestCoords}
                        user={user}
                        setUser={setUser}
                        setDishId={setDishId}
                        executeScroll={executeScroll}
                        setScrollTo={props.setScrollTo} 
                        setRestaurantsPosition={setRestaurantsPosition}
                    />
                </Col>
                <Col sm="12" md="6" className="pad pad-right" >
                    <Switch>
                        <Route 
                            exact={true}
                            path = '/'
                            render = {()=>    
                                <Map 
                                    restCoords={restCoords}
                                    restaurantsPosition={restaurantsPosition}
                                    
                            />
                            }
                        />
                        <Route
                            exact={true}
                            path = '/restaurant'
                            render = {()=>    
                                <RestaurantDetail
                                restaurantId={restaurantId}
                            />                           
                            } 
                        />
                        <Route
                            exact={true}
                            path = '/restaurant/new'
                            component ={RestaurantForm}
                        />
                        <Route
                            exact={true}
                            path = '/dish/new'
                            render = {()=>    
                                <DishForm 
                                    restaurantId={restaurantId}
                            />
                            }
                        />
                        <Route
                            exact={true}
                            path = '/review/new'
                            render = {()=>    
                                <ReviewForm 
                                    dishId={dishId}
                            />
                            }
                        />
                    </Switch>
                </Col>
            </HashRouter>
        </Row>
    )
}
export default Home;