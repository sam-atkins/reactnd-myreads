import * as React from 'react';
import * as Styles from './SearchPage.styles';
import Book from '../Book';
import * as BooksAPI from '../../utils/BooksAPI';
import {
  // BooksState,
  BookProps,
  // SearchPageCompProps,
} from '../../interfaces/stateProps';
import BookObject from '../../interfaces/bookObject';

interface SearchPageState {
  error: boolean;
  userSearch: string;
  updatedSearchResults: string[];
}

interface SearchPageProps {
  books: BookObject[];
  onUpdateBook(book: BookProps, shelf: string): void;
  onSelectSearchPage(): void;
}

class SearchPage extends React.Component<SearchPageProps, SearchPageState> {
  // TODO error: false switch to enum
  state = {
    error: false,
    userSearch: '',
    updatedSearchResults: [],
  };

  render() {
    const { books, onUpdateBook } = this.props;
    const booksAndShelvesInState = new Map();
    books.forEach(book => {
      booksAndShelvesInState.set(book.id, book.shelf);
    });

    // TODO e i.e. event type?
    const handleUserSearch = (e) => {
      const userSearch: string = e.target.value;
      if (userSearch === '' || userSearch === undefined) {
        this.setState({ userSearch: '' });
      } else {
        this.setState({ userSearch });
        BooksAPI.search(this.state.userSearch, 30)
          .then(initialSearchResults => {
            const updatedSearchResults = initialSearchResults.map((result: BookObject) => {
              if (booksAndShelvesInState.has(result.id) === true) {
                const shelf = booksAndShelvesInState.get(result.id);
                return {
                  ...result,
                  shelf,
                };
              }
              return {
                ...result,
              };
            });
            this.setState({
              updatedSearchResults,
              error: false,
            });
          })
          .catch(() => {
            this.setState({
              error: true,
            });
          });
      }
    };

    return (
      <div className="search-books">
        <Styles.SearchBooksBar>
          <Styles.SearchBooksInputForm>
            <Styles.SearchBooksBarInput
              minLength={2}
              debounceTimeout={300}
              onChange={e => handleUserSearch(e)}
              placeholder="Search by title or author"
              value={this.state.userSearch}
            />
          </Styles.SearchBooksInputForm>
        </Styles.SearchBooksBar>
        <Styles.SearchBooksResults>
          <Styles.BooksGridOL>
            {this.state.error && (
              <Styles.SearchError>
                Your search returned no results. This demo app has limited
                search. Try one of these search terms instead:
                <Styles.DisplaySearchTerms>
                  Android, Art, Artificial Intelligence, Astronomy, Austen,
                  Baseball, Basketball, Bhagat, Biography, Brief, Business,
                  Camus, Cervantes, Christie, Classics, Comics, Cook, Cricket,
                  Cycling, Desai, Design, Development, Digital Marketing, Drama,
                  Drawing, Dumas, Education, Everything, Fantasy, Film, Finance,
                  First, Fitness, Football, Future, Games, Gandhi, Homer,
                  Horror, Hugo, Ibsen, Journey, Kafka, King, Lahiri, Larsson,
                  Learn, Literary Fiction, Make, Manage, Marquez, Money,
                  Mystery, Negotiate, Painting, Philosophy, Photography, Poetry,
                  Production, Programming, React, Redux, River, Robotics,
                  Rowling, Satire, Science Fiction, Shakespeare, Singh,
                  Swimming, Tale, Thrun, Time, Tolstoy, Travel, Ultimate,
                  Virtual Reality, Web Development, iOS
                </Styles.DisplaySearchTerms>
              </Styles.SearchError>
            )}
            {this.state.updatedSearchResults.length > 0 &&
              this.state.updatedSearchResults.map((searchResult: BookObject) => (
                <Book
                  key={searchResult.id}
                  book={searchResult}
                  bookImgUrl={
                    searchResult.imageLinks !== undefined
                      ? searchResult.imageLinks.smallThumbnail
                      : ''
                  }
                  onUpdateBook={onUpdateBook}
                />
              ))}
          </Styles.BooksGridOL>
        </Styles.SearchBooksResults>
        <Styles.CloseSearch>
          <Styles.CloseSearchLink to="/">Go back</Styles.CloseSearchLink>
        </Styles.CloseSearch>
      </div>
    );
  }
}

// SearchPage.propTypes = {
//   books: PropTypes.array,
//   onUpdateBook: PropTypes.func.isRequired,
// };

// SearchPage.defaultProps = {
//   books: [],
// };

export default SearchPage;
