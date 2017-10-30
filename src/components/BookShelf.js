import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = props => (
  <div className="list-books-content">
    {props.shelves.map(shelf => (
      <div className="bookshelf" key={shelf.id}>
        <h2 className="bookshelf-title">{shelf.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.map(b => (
              <Book book={b} key={b.title}/>
            ))}
          </ol>
        </div>
      </div>
    ))}
    <div className="open-search">
      <Link to="/search">
        Add a book
      </Link>
    </div>
  </div>
);

BookShelf.propTypes = {
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array,
};

BookShelf.defaultProps = {
  books: [],
};

export default BookShelf;
