import * as React from 'react';
import Book from '../Book';
import * as Styles from './BookShelf.styles';
import { BookShelfCompProps } from '../../interfaces/stateProps';

const BookShelf = (props: BookShelfCompProps) => (
  <Styles.ListBooksContent>
    {props.shelves.map(shelf => (
      <Styles.StyledBookShelf key={shelf.id}>
        <Styles.BookShelfTitle>{shelf.shelfName}</Styles.BookShelfTitle>
        <Styles.BookShelfBooks>
          <Styles.BooksGridOL>
            {props.books
              .filter(b => b.shelf === shelf.id)
              .map(b => (
                <Book
                  key={b.id}
                  book={b}
                  bookImgUrl={
                    b.imageLinks !== undefined
                      ? b.imageLinks.smallThumbnail
                      : ''
                  }
                  onUpdateBook={props.onUpdateBook}
                />
              ))}
          </Styles.BooksGridOL>
        </Styles.BookShelfBooks>
      </Styles.StyledBookShelf>
    ))}
    <Styles.OpenSearch>
      <Styles.OpenSearchLink to="/search">Add a book</Styles.OpenSearchLink>
    </Styles.OpenSearch>
  </Styles.ListBooksContent>
);

export default BookShelf;
