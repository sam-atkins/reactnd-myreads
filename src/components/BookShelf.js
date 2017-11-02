import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Book from './Book';
import Icon from '../icons/icons';

const ListBooksContent = styled.div`
  flex: 1;
  padding: 0 0 80px;
`;

const StyledBookShelf = styled.div`
  padding: 0 10px 20px;

  @media (min-width: 600px) {
    padding: 0 20px 40px;
  }
`;

const BookShelfTitle = styled.h2`
  border-bottom: 1px solid #dedede;
`;

const BookShelfBooks = styled.div`
  text-align: center;
`;

const BooksGridOL = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const OpenSearch = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
`;

const OpenSearchLink = styled(Link)`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #2e7d32;
  background-image: url(${Icon.addIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 28px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  font-size: 0;
`;

const BookShelf = props => (
  <ListBooksContent>
    {props.shelves.map(shelf => (
      <StyledBookShelf key={shelf.id}>
        <BookShelfTitle>{shelf.shelfName}</BookShelfTitle>
        <BookShelfBooks>
          <BooksGridOL>
            {props.books
              .filter(b => b.shelf === shelf.id)
              .map(b => (
                <Book key={b.title} book={b} onMoveBook={props.onMoveBook} />
              ))}
          </BooksGridOL>
        </BookShelfBooks>
      </StyledBookShelf>
    ))}
    <OpenSearch>
      <OpenSearchLink to="/search">Add a book</OpenSearchLink>
    </OpenSearch>
  </ListBooksContent>
);

BookShelf.propTypes = {
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array,
};

BookShelf.defaultProps = {
  books: [],
};

export default BookShelf;
