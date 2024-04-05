import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
        fetch("/users")
            .then(response => response.json())
            .then(data => {
                setBackendData(data); // Set backendData to the array received from the server
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    }, []);

        const mealsList = backendData.map(user => (
            <MealItem 
                key={user.id} 
                id={user.id}
                name={user.name} 
                price={user.price}
            />
        ));
    
    
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;
