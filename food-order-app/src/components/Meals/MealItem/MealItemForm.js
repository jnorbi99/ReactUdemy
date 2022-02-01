import React, { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const inputRef = useRef();

  const [amountInputIsValid, setAmountInputIsValid] = useState(true);

  const addAmount = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountInputIsValid(false);
      return;
    }

    props.onChange(enteredAmountNumber);
    inputRef.current.value = 1;
  };

  return (
    <form className={classes.form} onSubmit={addAmount}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!amountInputIsValid && <p>Please add a valid number!</p>}
    </form>
  );
};

export default MealItemForm;
