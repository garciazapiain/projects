import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar';
import SearchResults from './SearchResults';
import RestaurantForm from '../Restaurant/RestaurantForm';
import RestaurantDetail from '../Restaurant/RestaurantDetail';
import DishForm from '../Dish/DishForm';
import ReviewForm from '../Review/ReviewForm';
import Map from '../Map'
import { Container, Row, Col } from 'reactstrap';
import {HashRouter, Router, Route, Switch, Redirect} from "react-router-dom";

const Search = props => {
    const { user, setUser, setScrollTo } = props;
    const [ searchResults, setSearchResults ] = useState();
    const [ restCoords, setRestCoords ] = useState(null);
    const [ restaurantId, setRestaurantId ] = useState(null)
    const [ dishId, setDishId ] = useState(null)
    const [ restaurantsPosition, setRestaurantsPosition ] = useState([]);

    return (
        <Row className="home">
            <HashRouter history={history}>
                <Col sm="12" md="6" className="pad pad-left">
                    <div className="profileDiv" style={{height: '249px'}}>
                        <Searchbar 
                            setSearchResults={setSearchResults}
                            searchResults={setSearchResults}
                        />
                    </div>    
                    <div style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}> 
                        <SearchResults 
                            handleRestCoords={setRestCoords}
                            setRestaurantId={setRestaurantId}
                            user={user}
                            searchResults={searchResults}
                            setSearchResults={setSearchResults}
                            setUser={setUser}
                            setDishId={setDishId}
                            setScrollTo={setScrollTo}
                            setRestaurantsPosition={setRestaurantsPosition}
                        /> 
                    </div>
                </Col>
                <Col sm="12" md="6" className="pad pad-right">
                    <Switch>
                        <Route
                            exact={true}
                            path = '/search/restaurant'
                            render = {()=>    
                                <RestaurantDetail
                                restaurantId={restaurantId}
                            />                           
                            } 
                        />
                        <Route
                            exact={true}
                            path = 'search/restaurant/new'
                            component ={RestaurantForm}
                        />
                        <Route
                            exact={true}
                            path = 'search/dish/new'
                            render = {()=>    
                                <DishForm 
                                    restaurantId={restaurantId}
                            />
                            }
                        />
                        <Route
                            exact={true}
                            path = 'search/review/new'
                            render = {()=>    
                                <ReviewForm 
                                    dishId={dishId}
                            />
                            }
                        />
                        <Route 
                            path = '/search'
                            render = {()=>    
                                <Map 
                                    restCoords={restCoords}
                                    restaurantsPosition={restaurantsPosition}
                                    
                            />
                            }
                        />
                    </Switch>
                </Col>
            </HashRouter> 
        </Row>
    )
}

export default Search;