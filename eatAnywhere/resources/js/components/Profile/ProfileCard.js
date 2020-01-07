import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';



const ProfileCard = props => {
    // console.log('profiletest', props.user.user.id)
    const [reviews, setReviews] = useState();
    useEffect(() => {
        // console.log('user id', props.user.user.id)
        async function fetchReviews(){
            // console.log('user id inside', props.user.user.id)
            const response = await fetch(`/api/review/${props.user.user.id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + props.user.token,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setReviews(data);
            // console.log('reviews', data);
        }
            fetchReviews();
    }, []);
    
    const profileDetailPageStyle = { overflowY: 'scroll', height: '85vh' };
    if(reviews){
        // console.log('reviewstest', reviews);
    return (

            <div style={profileDetailPageStyle}>
                <Row >
                {
                    reviews.map((review, key) => (
                        <Col  className="uploadCard" xs="12" md="4" key={key} >
                            <div 
                            // style={{maxWidth:'50%', textAlign:'center'}}
                            >
                            <div>
                                <CardTitle>Dish: {review.name}</CardTitle>
                            </div>
                            {
                                review.reviews.map((review, key) => (
                                    <div key={key}>
                                        <img className="dishPic" src={review.image.path} alt="dish"/>
                                        <h6>
                                            Rating:  
                                            <strong> {review.rating}</strong>
                                        </h6>
                                        <h6>
                                            Review: 
                                        </h6>
                                        <p>
                                           {review.text} 
                                        </p>
                                    </div>
                                ))
                            }
                            
                            </div>
                        </Col>
                    ))   
                }
                </Row>
            </div>
        )
    }  return ('Loading...')
}
export default ProfileCard;
 