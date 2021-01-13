import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList Component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'David Salk',
      username: 'Dslk',
      email: 'davidSalk@gmail.com',
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
