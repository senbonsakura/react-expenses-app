import numeral from 'numeral';
import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import { Link } from 'react-router-dom';

export const ExpenseSummary = ({expenseCount, expensesTotal, unfilteredExpensesCount}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';

  const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formattedExpenseTotal}</span>
          {unfilteredExpensesCount > 0 &&<text>(<span>{unfilteredExpensesCount}</span> hidden)</text> }

        </h1>
      <div className="page-header__actions">
        <Link to='/create' className="button">Add Expense</Link>
      </div>
      </div>
    </div>
  );

};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const allExpenses = selectExpenses(state.expenses, {});

  return {
    expenseCount: visibleExpenses.length,
    unfilteredExpensesCount : allExpenses.length - visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses)
  };

};

export default connect(mapStateToProps)(ExpenseSummary);
