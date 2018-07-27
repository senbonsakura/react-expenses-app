const getExpensesTotal = (expenses) => {
  return expenses.reduce((total, currentValue) =>
    total + (isNaN(currentValue.amount) ? 0 : currentValue.amount), 0)


}

export default getExpensesTotal