import Card from '../UI/Card';
import MealItem from '../Meals/MealItem/MealItem';
import classes from './AvailableMeals.module.css'
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Momo',
      description: 'Ground meat, Finely chopped onion, garlic, ginger, Oil, flour, spring onions, coriander, Salt, pepper',
      price: 29.99,
    },
    {
      id: 'm2',
      name: 'Noodles',
      description: 'Chinese noodles, sliced onion, chopped beans, tomato chili sauce, powdered salt, water, green pepper, shredded carrot, chopped garlic, light soya sauce, vinegar, ',
      price: 19.5,
    },
    {
      id: 'm3',
      name: 'Burger',
      description: 'sliced onion, cheese slices,halved burger buns, tomato ketchup, garlic paste, sliced tomato, lettuce leaves, peeled and sliced cucumber, mashed boiled peeled potato, chopped carrot, corn',
      price: 10.99,
    },
    {
      id: 'm4',
      name: 'Pizza',
      description: 'flour, tomato ketchup, tomato, onion, chilli flakes, baking powder, sugar, virgin olive oil, processed cheese, mushroom, capsicum (green pepper), oregano, mozzarella, dry yeast, water',
      price: 25.90,
    },
  ];
const AvailableMeals = () => {
    const mealsList=DUMMY_MEALS.map((meal)=>( 
    <MealItem 
      key={meal.id} 
      id={meal.id}
      name={meal.name} 
      description={meal.description} 
      price={meal.price} 
      />
    ))
  return (
    <>
        <section className={classes.meals}>
            <Card>
               <ul> {mealsList}</ul>
            </Card>
        </section>
    
    </>
  )
}

export default AvailableMeals