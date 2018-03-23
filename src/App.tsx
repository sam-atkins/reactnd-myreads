import * as React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import * as BooksAPI from './utils/BooksAPI';
import { Header, Footer } from './components/common';
import { BookShelf, SearchPage } from './components';
import { StateProps } from './interfaces/stateProps';

const StyledApp = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 100px;
  background: white;
`;

class BooksApp extends React.Component {
  state: StateProps = {};

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({ books });
      });
    });
  };

  render() {
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

    const exact: boolean = true;

    return (
      <StyledApp>
        <Header />
        <Route
          exact={exact}
          path="/"
          render={() => (
            <BookShelf
              shelves={shelves}
              books={this.state.books}
              onUpdateBook={(shelf, book) => {
                this.updateBook(shelf, book);
              }}
            />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchPage
              shelves={this.state.shelves}
              books={this.state.books}
              onUpdateBook={(shelf, book) => {
                this.updateBook(shelf, book);
              }}
              onSelectSearchPage={() => {
                history.push('/');
              }}
            />
          )}
        />
        <Footer />
      </StyledApp>
    );
  }
}

export default BooksApp;
