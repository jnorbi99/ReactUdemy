import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = React.forwardRef((props, ref) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartContext = useContext(CartContext);

  const createAnItem = (choosedAmount) => {
    const anItem = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: choosedAmount,
    };

    cartContext.addItem(anItem);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onChange={createAnItem} />
      </div>
    </li>
  );
});

export default MealItem;
