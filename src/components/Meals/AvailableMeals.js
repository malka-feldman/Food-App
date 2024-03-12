import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'shchwarma',
        price: 32.99,
    },
    {
        id: 'm2',
        name: 'Shnitzel',
        price: 26.99,
    },
    {
        id: 'm3',
        name: 'Lasagna',
        price: 18.99,
    },
    {
        id: 'm4',
        name: 'Taco Night',
        price: 28.99,
    }
]
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => 
        <MealItem 
            key={meal.id} 
            name={meal.name} 
            price={meal.price}
        />
        );
    
    return (<section className={classes.meals}>
       <Card>
        <ul>{mealsList}</ul>
        </Card>
    </section>
    );
}

export default AvailableMeals;