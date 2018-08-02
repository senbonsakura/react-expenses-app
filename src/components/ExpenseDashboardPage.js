import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpenseSummary'
import LoginPage from './LoginPage'

const ExpenseDashboardPage = () => (
  <div>
    <LoginPage/>
    <ExpenseSummary />
    <ExpenseListFilters/>
    <ExpenseList/>
  </div>

)

export default ExpenseDashboardPage