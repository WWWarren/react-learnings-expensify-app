import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpenses } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  editExpense = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/dashboard');
  };
  removeExpense = () => {
    this.props.startRemoveExpenses({ id: this.props.expense.id });
    this.props.history.push('/dashboard');
  }
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.editExpense}
        />
        <button
          onClick={this.removeExpense}
        >
          Remove
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpenses: (data) => dispatch(startRemoveExpenses(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
