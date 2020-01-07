import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DishCard from "./DishCard";
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import {Link} from "react-router-dom";

const Dishes = props => {
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '10px',
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Slider {...settings}>
        { 
          props.dishes &&
          props.dishes.map((dish, key) => (
            <DishCard 
              key={key}
              dish={dish}
              setDishId={props.setDishId}
              user={props.user}
            />
          ))
        }
        <div >
            
            <h5 className="restaurantNewName">Add New Dish</h5>
            
            <div style={{textAlign: 'center' ,fontSize:'5em'}}>
                <Button 
                onClick={() => {
                  props.setRestaurantId(props.restaurantId)
                  if (window.innerWidth < 767) {
                    setTimeout(() => {
                      const scrolltop = window.pageYOffset || document.documentElement.scrollTop;
                      console.log(scrolltop)
                      console.log(document.querySelector('.dishForm').getBoundingClientRect().top)
                      console.log(document.querySelector('.dishForm').getBoundingClientRect().top + scrolltop)
                      window.scrollTo({
                          top: document.querySelector('.dishForm').getBoundingClientRect().top + scrolltop, 
                          left: 0, 
                          behavior: 'smooth'
                      });
                    }, 50)
                  }
                  
                }}
                tag={Link} to="/dish/new" >+
              </Button>
            </div>
      </div>
      </Slider>
    </>
  );

}

export default Dishes;

