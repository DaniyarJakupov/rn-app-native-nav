import 'react-native';
import React from 'react';
import BloodTestList from '../app/screens/BloodTestList';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

it('BloodTestList snapshot', () => {
  const tree = renderer.create(<BloodTestList />).toJSON;
  expect(tree).toMatchSnapshot();
});
