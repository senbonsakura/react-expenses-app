import getExpensesTotal from '../../../src/selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', ()=> {
  const total = getExpensesTotal([]);
  expect(total).toBe(0);
})

test('should return 0 if invalid expense', ()=> {
  const total = getExpensesTotal([{amount:"xyz",},{amount:100}]);
  expect(total).toBe(100);
})
test('should return 195 for 1st expense', ()=> {
  const total = getExpensesTotal([expenses[0]]);
  expect(total).toBe(195);
})
test('should return 114195 for all expense', ()=> {
  const total = getExpensesTotal(expenses);
  expect(total).toBe(114195);
})