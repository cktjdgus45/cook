import React from 'react';
import styles from './AvailableMeals.module.css';
import meals from '../data/dummyMeals.js';

const AvailableMeals = () => {
    return (
        <section className={styles.meals}>
            <ul>
                {meals.map(meal =>
                    <li key={meal.id}>
                        {meal.name}
                    </li>)}
            </ul>
        </section>
    )
}

export default AvailableMeals;