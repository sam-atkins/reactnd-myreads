import React, { Component } from 'react';
import BookShelf from './BookShelf';

class BookLibrary extends Component {
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
    return <BookShelf shelves={this.state.shelves} />;
  }
}

export default BookLibrary;
