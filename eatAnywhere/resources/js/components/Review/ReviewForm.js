import React, { useState } from "react"
import ImageUploader from 'react-images-upload';
import { Button } from 'reactstrap';

const ReviewForm = props => {
    console.log('review props', props)
    const { dishId } = props
    const [formInputValues, setFormInputValues] = useState({review: '', rating: ''});
    const [ image, setImage ] = useState();

    const handleNameInputChange = e => {
        setFormInputValues({
            ...formInputValues,
            [e.target.id]: e.target.value
        })
    };

    
    const onDrop = pic => {
        setImage(pic);
    }

    let formData = new FormData();

    const handleSubmitButtonClick = (e) => {
        e.preventDefault()
        console.log(dishId);
        const user = JSON.parse(window.localStorage.getItem('user'));
        formData.append('image', image[0]);
        formData.append('user_id', user.id);
        formData.append('dish_id', dishId);
        formData.append('rating', formInputValues.rating);
        formData.append('review', formInputValues.review);
        console.log(formData);

        console.log("clicked", formInputValues, image, dishId, user.id);
        async function postSubmit() {
            const token = window.localStorage.getItem('token');
            const response = await fetch('/api/review/new', {
            method: 'POST',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'X-Requested-With': 'XMLHttpRequest'
            },
            responseType: 'json',
            body: formData
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
       <form className="reviewForm" style={{display: 'flex', flexDirection: 'column', padding: '2rem'}} method="post" enctype="multipart/form-data">
           <label htmlFor="rating">Rate the dish out of 5!</label>
           <input
            id="rating"
            name="rating"
            type="number"
            placeholder = "Rating"
            value={formInputValues.rating}
            style={{width: '250px', marginBottom: '1rem'}}
            onChange = {handleNameInputChange}
           />
           <label htmlFor="review">Tell us your thoughts:</label>
           <input
            id="review"
            type="textarea"
            name="review"
            value = {formInputValues.text}
            placeholder = "Review"
            style={{width: '250px', height: '100px', marginBottom: '1rem'}}
            onChange = {handleNameInputChange}
           />
           {/* <p style={{marginBottom: '0'}}>Upload an image of your meal:</p> */}
           <ImageUploader
                withIcon={true}
                buttonText='Upload an image of your meal!'
                onChange={onDrop}
                withLabel={false}
                singleImage={true}
                imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
           <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
               <Button onClick={handleSubmitButtonClick} style={{ width: '250px'}}>
                   Submit
                </Button>
           </div>
       </form>
   )
};

export default ReviewForm;
