import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenses, total }) => {
  const word = expenses === 1 ? 'expense' : 'expenses'
  const totalAmount = numeral(total / 100).format('$0,0.[00]')
  return (
    <div>
      <p>
        Viewing {expenses.length} {word} totalling {totalAmount}
      </p>
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
