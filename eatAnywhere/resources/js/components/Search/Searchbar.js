import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';

const Searchbar = props => {
    const { searchResults, setSearchResults } = props;
    const [ name, setName ] = useState('');

    const handleChange = e => {
        setName(e.target.value);
      };

    const handleSubmit = e => {
        async function fetchRestaurants() {
            const token = window.localStorage.getItem('token')
            const response = await fetch('/api/search', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name
                })
            })
            const data = await response.json();
            setSearchResults(data)
            console.log('data', data);
        }

        try {
            fetchRestaurants()
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <div className="searchbar">
            <form>
                <label htmlFor="restaurantSearch">Find out if your favourite restaurant has some delicious food for you!</label><br/>
                <input id="restaurantSearch" type="text" name="restaurantSearch" onChange={handleChange} value={name}/>
            </form>
            </div>
            <Button className="btnSearch" onClick={handleSubmit}>Search</Button>
        </div>
    )
}
export default Searchbar;