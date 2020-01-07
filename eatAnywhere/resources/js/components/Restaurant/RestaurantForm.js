import React, {useState, useEffect} from 'react';

const RestaurantForm = props => {
    const [formInputValues, setFormInputValues] = useState({name:'', address:'', phone:'', website_url:''})
    const [formSubmitSuccess, setFormSubmitSuccess] = useState()
    const formStyle = { borderRadius: '10px', margin: '2rem' }

    const handleNameInputChange = e => {
        setFormInputValues({
          ...formInputValues,
          [e.target.id]: e.target.value
        })
      };

    const handleSubmitButtonClick = (e) => {
          e.preventDefault();
          console.log ('clicked', formInputValues)
          async function postSubmit() {
              const token = window.localStorage.getItem('token');
              const response = await fetch('/api/restaurant/new', {
              method: 'POST',
              withCredentials: true,
              credentials: 'include',
              headers: {
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + token,
                  'X-Requested-With': 'XMLHttpRequest',
                  'Content-Type': 'application/json'
              },
              responseType: 'json',
              body: JSON.stringify({
                  'name': formInputValues.name,
                  'address': formInputValues.address,
                  'phone': formInputValues.phone,
                  'website': formInputValues.website_url 
              }),
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
        <div className="restaurantFormBackground">
          <form  className="restaurantForm" >
              <h2>Add New Restaurant</h2>
              <input
                id="name"
                type="text"
                placeholder = "name"
                value={formInputValues.name}
                onChange={handleNameInputChange}
                style={formStyle}
                />
      
              <input
                id="address"
                type="text"
                placeholder = "address"
                value={formInputValues.address}
                onChange={handleNameInputChange}
                style={formStyle}     
              />
  
              <input
                id="phone"
                type="text"
                placeholder = "phone"
                value={formInputValues.phone}
                onChange={handleNameInputChange}
                style={formStyle}     
              />
  
              <input
              id="website_url"
              type="text"
              placeholder = "website url"
              value={formInputValues.website_url}
              onChange={handleNameInputChange}
              style={formStyle}
              />
              <button onClick={handleSubmitButtonClick}>Submit</button>
              {formSubmitSuccess === true && <h3>Congrats!</h3>}
              {formSubmitSuccess === false && <h3>Error Occurred, try again later</h3>}
          </form>
        </div>
    )
}


export default RestaurantForm;