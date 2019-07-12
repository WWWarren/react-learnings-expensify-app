import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/Header';

test('should render Login correctly', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
})
