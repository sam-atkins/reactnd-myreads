import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../icons/icons';

const BooksGridLI = styled.li`
  padding: 10px 15px;
  text-align: left;
`;

const StyledBook = styled.div`
  width: 140px;
`;

const StyledBookTop = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  height: 200px;
`;

const StyledBookCover = styled.div`
  /* background-image contained in style tag in the JSX */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #eee;
  width: 128px;
  height: 193px;
`;

const StyledBookShelfChanger = styled.div`
  position: absolute;
  right: 0;
  bottom: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #60ac5d;
  background-image: url(${Icon.arrowDropDownIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const StyledBookShelfChangerSelect = styled.select`
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const StyledBookInfo = styled.div`
  font-size: 0.8em;
`;

const StyledBookTitle = StyledBookInfo.extend`
  margin-top: 10px;
`;

const StyledBookAuthors = StyledBookInfo.extend`
  color: #999;
`;

const Book = (props) => {
  const { authors, imageLinks, title } = props.book;
  const { onUpdateBook } = props;

  const handleMoveBook = (e) => {
    const selectedBook = props.book;
    const selectedShelf = e.target.value;
    onUpdateBook(selectedBook, selectedShelf);
  };
  return (
    <BooksGridLI>
      <StyledBook>
        <StyledBookTop>
          <StyledBookCover
            style={{
              backgroundImage: `url(${imageLinks.smallThumbnail})`,
            }}
          />
          <StyledBookShelfChanger>
            <StyledBookShelfChangerSelect
              value={props.book.shelf || 'none'}
              onChange={handleMoveBook}
            >
              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </StyledBookShelfChangerSelect>
          </StyledBookShelfChanger>
        </StyledBookTop>
        <StyledBookTitle>{title}</StyledBookTitle>
        <StyledBookAuthors>{authors}</StyledBookAuthors>
      </StyledBook>
    </BooksGridLI>
  );
};

// TODO add to <StyledBookAuthors>
// authors.length >= 2 ? authors.join(', ') : authors;

Book.propTypes = {
  book: PropTypes.object,
  onUpdateBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {},
};

export default Book;
