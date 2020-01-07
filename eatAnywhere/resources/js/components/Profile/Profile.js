import React from 'react';
import { Button } from 'reactstrap';

const dietPicture = {
    vegan: 'icons8-vegan-symbol-512.png',
    vegetarian: 'lettuce.png',
    pescatarian: 'trout.png',
    keto: 'meat.png',
    
    halal: 'halal.png',
    kosher: 'kosher.png',
    gluten: 'icons8-no-gluten-96.png',
    milk: 'icons8-non-lactose-food-100.png',
    soy: 'icons8-no-soy-512.png',
    eggs: 'icons8-no-eggs-128.png',
    peanuts: 'icons8-peanut-80.png',
    tree_nuts: 'icons8-no-nuts-80.png',
    fish: 'icons8-no-fish-80.png',
    molluscs: 'icons8-no-shellfish-80.png',
    crustaceans: 'icons8-no-crustaceans-80.png',
    mustard: 'icons8-no-mustard-80.png',
    sesame: 'icons8-no-sesame-96.png',
    celery: 'icons8-no-celery-64.png',
    lupin: 'icons8-no-lupines-96.png',
    sulphites: 'icons8-no-filling-80.png'
}

const Profile = props => {
    console.log('profile', props)
    let shownDiets = [];
    props.user.user.diets.forEach(diet => {
        shownDiets.push(diet.name)
    })
    console.log(shownDiets)

    let diets = [];
    for (let slug in dietPicture) {
        if (-1 !== shownDiets.indexOf(slug)) {
            diets.push({
                name: slug,
                picture: dietPicture[slug]
            })
        }
    }
console.log(diets);

    return (
        <div className="profileDiv">
            <div className="communityQuote">“One of the marvelous things about community is that it enables us to help people in a way we couldn't as individuals.” – Jean Vanier</div>
            <div className="profileIcons">
                {
                    diets.map((diet, key) => (
                        <img key={key} src={ `/images/${diet.picture}` } alt={ diet.name } className="profileIcon"></img>
                    ))
                }
                
            </div>
            <div className="profileGreetings">Hello, {props.user.user.first_name}!</div>
            <div className="profileText">Thanks for helping us by uploading new dishes and reviews of dishes suitable for your dietary restrictions. You are making a difference in this community!</div>
        
        </div>
    )
}
export default Profile;