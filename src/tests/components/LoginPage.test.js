import React from 'react';
import {shallow} from 'enzyme';
import { LoginPage }from '../../components/LoginPage';
import { Header } from '../../components/Header'

test('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage/>)
  expect(wrapper).toMatchSnapshot()
});

test('should call startLogin', ()=> {
  const startLogin = jest.fn();

  const wrapper = shallow(<Header startLogout={startLogin}/>)

  wrapper.find('button').simulate('click');

  expect(startLogin).toHaveBeenCalled();
})
