import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../../components/LoadingPage';

test('should render Loader correctly', () => {
  const wrapper = shallow(<Loader />);
  expect(wrapper).toMatchSnapshot();
});
