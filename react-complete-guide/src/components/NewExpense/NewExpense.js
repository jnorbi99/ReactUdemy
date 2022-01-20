import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditingState(false);
  };

  const [editingState, setEditingState] = useState(false);

  const startEditingHandler = () => {
    setEditingState(true);
  };

  const stopEditingHandler = () => {
    setEditingState(false);
  };

  return (
    <div className="new-expense">
      {!editingState && (
        <button onClick={startEditingHandler}>Add New Expenses</button>
      )}
      {editingState && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          stopEdit={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
