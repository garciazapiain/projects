import React from 'react';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';

const ReviewCard = props => {
    return (
        <Card className="reviewCard shadow-sm p-2 m-2 bg-white rounded">
            <Row key={ props.key } >
                <Col sm="12" lg="6" className="colReviewPic"><img src={ props.review.image.path } alt="meal" className="dishPic"/> </Col>
                <Col sm="12" lg="6">
                    Rating: { props.review.rating }  <br/>
                    Review: { props.review.text }
                </Col>
            </Row>
        </Card>
    )
}

export default ReviewCard;