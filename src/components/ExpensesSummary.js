import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenses, total }) => {
  const word = expenses === 1 ? 'expense' : 'expenses'
  const totalAmount = numeral(total / 100).format('$0,0.[00]')
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenses}</span> {word} totalling <span>{totalAmount}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)


  return {
   expenses: visibleExpenses.length,
   total: getExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary);
