import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const result = getExpensesTotal(expenses);
  expect(result).toBe('0');
});

test('should return single total expenses', () => {
  const result = getExpensesTotal(expenses[1]);
  expect(result).toEqual([
    expenses[1].amount
  ]);
});

test('should return multiple total expenses', () => {
  const result = getExpensesTotal(expenses);
  expect(result).toBe('114195');
});
