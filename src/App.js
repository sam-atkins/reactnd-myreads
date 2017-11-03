import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import * as BooksAPI from './utils/BooksAPI';
import { Header, Footer } from './components/common';
import { BookShelf, SearchPage } from './components';

class BooksApp extends Component {
  state = {
    shelves: [
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
    ],
    userSearch: '',
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books });
      });
    });
  };

  addBook = (book) => {
    console.log('====================================');
    console.log(book);
    console.log('====================================');
  };

  render() {
    const StyledApp = styled.div`
      min-height: 100vh;
      overflow: hidden;
      display: block;
      position: relative;
      padding-bottom: 100px;
      background: white;
    `;

    return (
      <StyledApp>
        <Header />
        <Route
          exact
          path="/"
          render={() => (
            <BookShelf
              shelves={this.state.shelves}
              books={this.state.books}
              onMoveBook={(shelf, book) => {
                this.moveBook(shelf, book);
              }}
            />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchPage
              userSearch={this.state.userSearch}
              onAddBook={(book) => {
                this.addBook(book);
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
