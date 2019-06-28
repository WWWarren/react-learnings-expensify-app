const getExpensesTotal (expenses) => {
  const func = (newNumber, currentValue) => newNumber + currentValue;
  const total = [];

  expenses.map((e) => {
    total.concat[e.amount];
    total = expenses.reduce(func);
  })

  return total;
}

export default getExpensesTotal
