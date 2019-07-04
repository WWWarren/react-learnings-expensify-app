const getExpensesTotal = (expenses) => {
  if (expenses.length === 0) {
    return 0
  } else {
    return expenses.map((e) => e.amount).reduce((sum, value) => sum + value, 0);
  }
}

export default getExpensesTotal
