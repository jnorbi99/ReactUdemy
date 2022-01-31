import React from "react";

import classes from "./AvailableMeals.module.css";
import DUMMY_MEALS from "../data/dummy-meals";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const AvailableMeals = (props) => {
  const meals = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
