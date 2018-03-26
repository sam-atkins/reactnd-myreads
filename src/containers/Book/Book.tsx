import * as React from 'react';
import * as Styles from './Book.styles';
import {
  BookComponentProps,
  MoveBookEvent,
} from '../../interfaces/bookComponent';

const Book = (props: BookComponentProps) => {
  const { authors, shelf, title } = props.book;
  const { bookImgUrl, onUpdateBook } = props;

  const handleMoveBook = (e: MoveBookEvent) => {
    const selectedBook = props.book;
    const selectedShelf = e.target.value;
    onUpdateBook(selectedBook, selectedShelf);
  };

  const formattedAuthorStr = (writers: string[]) => {
    if (writers === undefined) {
      return writers;
    }
    return writers.length >= 2 ? writers.join(', ') : writers;
  };

  const disabled: boolean = true;
  return (
    <Styles.BooksGridLI>
      <Styles.StyledBook>
        <Styles.StyledBookTop>
          <Styles.StyledBookCover
            style={{
              backgroundImage: `url(${bookImgUrl})`,
            }}
          />
          <Styles.StyledBookShelfChanger>
            <Styles.StyledBookShelfChangerSelect
              value={shelf || 'none'}
              onChange={handleMoveBook}
            >
              <option disabled={disabled}>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </Styles.StyledBookShelfChangerSelect>
          </Styles.StyledBookShelfChanger>
        </Styles.StyledBookTop>
        <Styles.StyledBookTitle>{title}</Styles.StyledBookTitle>
        <Styles.StyledBookAuthors>
          {formattedAuthorStr(authors)}
        </Styles.StyledBookAuthors>
      </Styles.StyledBook>
    </Styles.BooksGridLI>
  );
};

export default Book;
