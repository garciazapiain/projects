import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from './ReviewCard';

const Reviews = props => {
    const settings = {
        className: 'center',
        centerMode: true,
        centerPadding: '10px',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {   
                props.reviews &&
                props.reviews.map((review, key) => (
                    <ReviewCard 
                        key={key}
                        review={review}
                    />
                ))
            }

        </Slider>
    )

}

export default Reviews;