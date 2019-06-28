import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

const ExpensesSummary = (props) => (
  <div>
    <p>
      Viewing {props.expenses.length}
      {props.expenses.length === 1 ? ' expense ' : ' expenses '}
      totalling {numeral(props.total / 100).format('$0,0.[00]')}
      </p>
  </div>
);

const mapStateToProps = (state) => {
  return {
   expenses: selectExpenses(state.expenses, state.filters),
   total: getExpensesTotal(state.expenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary);
