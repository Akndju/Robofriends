import { shallow } from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

it('expect to render Scroll Component', () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
