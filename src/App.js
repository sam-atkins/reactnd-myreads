import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import * as BooksAPI from './utils/BooksAPI';
import './App.css';
import { Header, Footer } from './components/common';
import { BookShelf, SearchPage } from './components';

class BooksApp extends Component {
  state = {
    shelves: [
      {
        id: 0,
        shelfName: 'Currently Reading',
      },
      {
        id: 1,
        shelfName: 'Want to Read',
      },
      {
        id: 2,
        shelfName: 'Read',
      },
    ],
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Route
          exact
          path="/"
          render={() => <BookShelf shelves={this.state.shelves} />}
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
      </div>
    );
  }
}

export default BooksApp;
