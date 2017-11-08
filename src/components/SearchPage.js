import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';
import Icon from '../icons/icons';
import Book from './Book';
import * as BooksAPI from '../utils/BooksAPI';

class SearchPage extends Component {
  state = {
    error: false,
    userSearch: '',
    updatedSearchResults: [],
  };

  render() {
    const booksAndShelvesInState = new Map();
    this.props.books.forEach((book) => {
      booksAndShelvesInState.set(book.id, book.shelf);
    });

    const handleUserSearch = (e) => {
      const userSearch = e.target.value;
      if (userSearch === '' || userSearch === undefined) {
        this.setState({ userSearch: '' });
      } else {
        this.setState({ userSearch });
        BooksAPI.search(this.state.userSearch)
          .then((initialSearchResults) => {
            const updatedSearchResults = initialSearchResults.map((result) => {
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
        <SearchBooksBar>
          <SearchBooksInputForm>
            <SearchBooksBarInput
              minLength={2}
              debounceTimeout={300}
              onChange={e => handleUserSearch(e)}
              placeholder="Search by title or author"
              value={this.state.userSearch}
            />
          </SearchBooksInputForm>
        </SearchBooksBar>
        <SearchBooksResults>
          <BooksGridOL>
            {this.state.error && (
              <SearchError>
                Your search returned no results. This demo app has limited
                search. Try one of these search terms instead:
                <DisplaySearchTerms>
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
                </DisplaySearchTerms>
              </SearchError>
            )}
            {this.state.updatedSearchResults.length > 0 &&
              this.state.updatedSearchResults.map(b => (
                <Book
                  key={b.id}
                  book={b}
                  bookImgUrl={
                    b.imageLinks !== undefined
                      ? b.imageLinks.smallThumbnail
                      : ''
                  }
                  onUpdateBook={this.props.onUpdateBook}
                />
              ))}
          </BooksGridOL>
        </SearchBooksResults>
        <CloseSearch>
          <CloseSearchLink to="/">Go back</CloseSearchLink>
        </CloseSearch>
      </div>
    );
  }
}

SearchPage.propTypes = {
  books: PropTypes.array,
  onUpdateBook: PropTypes.func.isRequired,
};

SearchPage.defaultProps = {
  books: [],
};

const SearchBooksBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 0 6px rgba(0, 0, 0, 0.23);
`;

const SearchBooksBarInput = styled(DebounceInput)`
  width: 100%;
  padding: 15px 10px;
  font-size: 1.25em;
  border: none;
  outline: none;
`;

const SearchBooksInputForm = styled.form`
  flex: 1;
  background: #e9e;
`;

const SearchBooksResults = styled.div`
  padding: 80px 10px 20px;
`;

const BooksGridOL = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CloseSearch = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
`;

const CloseSearchLink = styled(Link)`
  display: block;
  top: 20px;
  left: 15px;
  width: 50px;
  height: 53px;
  background: white;
  background-image: url(${Icon.arrowBackIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 28px;
  font-size: 0;
`;

const SearchError = styled.div`
  text-align: center;
`;

const DisplaySearchTerms = styled.p`
  font-family: monospace;
`;

export default SearchPage;
