import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

it('expect to render ErrorBoundary Component', () => {
  expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
});
