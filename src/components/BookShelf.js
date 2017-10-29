import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = props => (
  <div className="list-books-content">
    {props.shelves.map(shelf => (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Book />
          </ol>
        </div>
      </div>
    ))}
  </div>
);

BookShelf.propTypes = {
  shelves: PropTypes.shape.isRequired,
};

export default BookShelf;
