import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';


test('should render ExpenseSummary with no expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={0} expensesTotal={0}/>)
  expect(wrapper).toMatchSnapshot()
});

test('should render ExpenseSummary with one expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={5540}/>)
  expect(wrapper).toMatchSnapshot()
});


test('should render ExpenseSummary with multiple expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={3} expensesTotal={4563456556}/>)
  expect(wrapper).toMatchSnapshot()
});
