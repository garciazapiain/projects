import React from 'react';
import Reviews from '../Review/Reviews';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import '../../../sass/index.scss';
import {Link} from "react-router-dom";

const DishCard = props => {
    return (
        <Card key={props.key} className="dishCard shadow-sm p-3 mb-3 bg-white rounded">
            
                <div>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <div className="dishDescription">{props.dish.description}
                        <p>{props.dish.diet_id}</p>
                    </div>
                </div>
                <Reviews 
                    reviews={props.dish.reviews} 
                />
                <div style={{textAlign: 'center'}}>
                    <h6>Add a review</h6>
                    <Button tag={Link} to="/review/new"
                    onClick={() => {
                        props.setDishId(props.dish.id)
                        if (window.innerWidth < 767) {
                          setTimeout(() => {
                            const scrolltop = window.pageYOffset || document.documentElement.scrollTop;
                            window.scrollTo({
                                top: document.querySelector('reviewForm').getBoundingClientRect().top + scrolltop, 
                                left: 0, 
                                behavior: 'smooth'
                            });
                          }, 50)
                        }
                        
                      }}
                    >
                        +  
                    </Button>
                </div>
        </Card>
        
    )
}

export default DishCard;