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
    books: [
      {
        title: 'To Kill a Mockingbird',
        subtitle: '',
        authors: ['Harper Lee'],
        description: '',
        publisher: '',
        publishedDate: '',
        backgroundImage:
          "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        shelf: 'read',
      },
      {
        title: 'The Hobbit',
        subtitle: '',
        authors: ['J.R.R. Tolkien'],
        description: '',
        publisher: '',
        publishedDate: '',
        backgroundImage:
          "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
        shelf: 'read',
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
          render={() => (
            <BookShelf shelves={this.state.shelves} books={this.state.books} />
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
      </div>
    );
  }
}

export default BooksApp;
