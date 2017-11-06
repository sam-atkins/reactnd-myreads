/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import Book from './Book';

const book = {
  title: 'A Book',
  authors: ['Author A'],
  imageLinks: { smallThumbnail: 'someUrl' },
  shelf: 'wantToRead',
};

describe('Book', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Book onUpdateBook={() => {}} book={book} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
