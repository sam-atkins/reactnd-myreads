import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import * as BooksAPI from './utils/BooksAPI';
// import './App.css';
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
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
      console.log('====================================');
      console.log(this.state);
      console.log('====================================');
    });
  }

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
            />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchPage
              onAddBook={() => {
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
