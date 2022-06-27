import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import classes from './AvailableMeals.module.css'
import { useEffect, useState } from 'react'

const AvailableMeals = () => {
  const [mealList, setMealList] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [httpError, setHttpError] = useState()

  const fetchMealListHandler = async () => {
    const response = await fetch(
      'https://react-http-2c7db-default-rtdb.firebaseio.com/meals.json'
    )

    if (!response.ok) {
      //Itt dobjuk az errort
      throw new Error('Something went wrong')
    }

    const data = await response.json()
    const loadedMeals = []

    for (const key in data) {
      loadedMeals.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      })
    }

    setMealList(loadedMeals)
    setIsloading(false)
  }

  useEffect(() => {
    //Mivel Promise a visszateresi erteke a responsenak, igy tudjuk kezelni az errorokat!!!
    fetchMealListHandler().catch((error) => {
      setIsloading(false)
      setHttpError(error.message)
    })
  }, [])

  if (isLoading) {
    return (
      <section>
        <p className={classes.mealsLoading}>Loading...</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section>
        <p className={classes.mealsError}>Failed to fetch</p>
      </section>
    )
  }

  const list = mealList.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{list}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
