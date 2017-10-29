import React from 'react';
import { Route } from 'react-router-dom';
// import * as BooksAPI from './utils/BooksAPI';
import './App.css';
import { Header, Footer } from './components/common';
import { BookLibrary, SearchPage } from './components';

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Header />
        <Route exact path="/" component={BookLibrary} />
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
