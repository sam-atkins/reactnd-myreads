/* global describe, it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { Link, MemoryRouter } from 'react-router-dom';
import BookShelf from './BookShelf';

describe('BookShelf', () => {
  it('renders correctly', () => {
    const shelves = [
      {
        id: 'currentlyReading',
        shelfName: 'Currently Reading',
      },
      {
        id: 'wantToRead',
        shelfName: 'Want to Read',
      },
      {
        id: 'read',
        shelfName: 'Read',
      },
    ];
    const tree = renderer
      .create(
      <MemoryRouter>
        <BookShelf shelves={shelves}>
          <Link to="/search" />
        </BookShelf>
      </MemoryRouter>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
