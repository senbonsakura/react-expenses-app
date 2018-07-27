import React from 'react'
import numeral from 'numeral'
import getExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'
import { connect } from 'react-redux'

export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00')
  return (
    <div>
      <p>Viewing {expenseCount} {expenseWord} totaling {formattedExpenseTotal}</p>
    </div>
  )

}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses)
  }

}

export default connect(mapStateToProps)(ExpenseSummary)
