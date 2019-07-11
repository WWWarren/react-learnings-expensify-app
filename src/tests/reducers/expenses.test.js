import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ])
});

test('should not remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[1], expenses[2] ])
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ])
});

test('should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '109',
      description: 'Laptop',
      note: '',
      createdAt: 20000,
      amount: 29500
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ ...expenses, action.expense ])
});

test('should edit expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount: 1220000,
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(1220000)
});

test('should not edit expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount: 1220000,
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [
      expenses[1]
    ]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]])
});
