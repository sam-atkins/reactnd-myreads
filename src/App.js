import React from 'react';
// import * as BooksAPI from './utils/BooksAPI';
import './App.css';
import { Header, Footer } from './components/common';
import { BookLibrary, SearchPage } from './components';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage />
        ) : (
          <div className="list-books">
            <Header />
            <BookLibrary />
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </a>
            </div>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default BooksApp;
