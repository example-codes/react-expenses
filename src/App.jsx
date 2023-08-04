import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const [isLoading, setIsLoading] = useState(false);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const getDataHandler = async () => {
    setIsLoading(true);

    const resp = await fetch("http://localhost:3000/data");
    const body = await resp.json();

    console.log(body);

    setExpenses(
      body.map((item) => ({
        id: item.myId,
        title: item.url,
        amount: `${item.timeTaken} sec`,
        date: item.time ? new Date(item.time) : new Date(),
      }))
    );

    setIsLoading(false);
  };
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      {isLoading ? "Loading..." : ""}
      {/* <NewExpense onAddExpense={addExpenseHandler} /> */}
      <button onClick={getDataHandler}>Get data</button>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
