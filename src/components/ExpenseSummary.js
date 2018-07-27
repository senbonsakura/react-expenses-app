import React from 'react'
import numeral from 'numeral'
import getExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'
import {connect} from 'react-redux';

export const ExpenseSummary = (props) => {
  const expenses = props.expenses;
  return (
    <div>

    <p>{`Viewing ${expenses.length} expenses totaling ${numeral(getExpensesTotal(expenses) / 100).format('$0,0.00')}`}</p>
  </div>
  )

}

const mapStateToProps = (state) => {

  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }

}

export default connect(mapStateToProps)(ExpenseSummary)
