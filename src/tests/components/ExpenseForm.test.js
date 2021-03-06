import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expense from '../fixtures/expenses'

test('should render expenseform correctly',() => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenseform correctly with expense data',() => {
    const wrapper = shallow(<ExpenseForm expense={expense[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

// test('should render error for invalid form submission',()=> {
//     const wrapper = shallow(<ExpenseForm />);
//     expect(wrapper).toMatchSnapshot();
//     wrapper.find('Form').simulate('submit', {
//         preventDefault: ()=> {}
//     })
//     expect(wrapper.state('error').length).toBeGreaterThan(0);
//     expect(wrapper).toMatchSnapshot();
// });
//
// test('should set description on input change',()=> {
//     const value = "New Description";
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('input').at(0).simulate('change',{
//         target: { value}
//     });
//     expect(wrapper.state('description')).toBe(value);
// });
//
//
// test('should set note on input change',()=> {
//     const value = "New Note";
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('textarea').simulate('change',{
//         target: { value}
//     });
//     expect(wrapper.state('note')).toBe(value);
// });
//
// test('should set amount if valid input',()=> {
//     const value = "23.15";
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('input').at(1).simulate('change',{
//         target: { value}
//     });
//     expect(wrapper.state('amount')).toBe(value);
// });
//
// test('should set amount if invalid input',()=> {
//     const value = "23.500";
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('input').at(1).simulate('change',{
//         target: { value}
//     });
//     expect(wrapper.state('amount')).toBe("");
// });

// test('should call onSubmit prop for valid form submission',()=> {
//     const onSubmitSpy = jest.fn();
//     const wrapper = shallow(<ExpenseForm expense={expense[0]} onSubmit={onSubmitSpy} />)
//     console.log(wrapper)
//     wrapper.find('form').simulate('submit', {
//         preventDefault: ()=> {}
//     });
//     expect(wrapper.state('error')).toBe('');
//     const {id,...expenseSpy} = expense[0];
//     expect(onSubmitSpy).toHaveBeenLastCalledWith(expenseSpy)
//
// });
//
// test('should set new date on date change',()=> {
//     const now = moment();
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find(SingleDatePicker).prop('onDateChange')(now);
//     expect(wrapper.state('createdAt')).toEqual(now);
// });

// test('should set calendar focus on change',()=> {
//     const focused = true;
//     const wrapper = render(<ExpenseForm />);
//     wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
//     expect(wrapper.state('calendarFocused')).toBe(focused);
// });
