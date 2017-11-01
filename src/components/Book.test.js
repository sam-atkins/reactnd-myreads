/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import Book from './Book';

describe('Book', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Book />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
