import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, onSelect] = useState("2020");

  const onSelectYear = (selectedYearParam) => {
    onSelect(selectedYearParam);
  };

  const filteredArray = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={onSelectYear} year={selectedYear} />
      <ExpensesChart expenses={filteredArray}/>
      <ExpensesList items={filteredArray}/>
    </Card>
  );
};

export default Expenses;
