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

// TODO add props to apply background-image to StyledBookCover
// `url(${book.backgroundImage})`;
const StyledBookCover = styled.div`
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
  const { book } = props;
  return (
    <BooksGridLI>
      <StyledBook>
        <StyledBookTop>
          <StyledBookCover
            style={{
              backgroundImage: `url(${book.backgroundImage})`,
            }}
          />
          <StyledBookShelfChanger>
            <StyledBookShelfChangerSelect>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </StyledBookShelfChangerSelect>
          </StyledBookShelfChanger>
        </StyledBookTop>
        <StyledBookTitle>{book.title}</StyledBookTitle>
        <StyledBookAuthors>{book.authors}</StyledBookAuthors>
      </StyledBook>
    </BooksGridLI>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

Book.defaultProps = {
  book: {},
};

export default Book;
