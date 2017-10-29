import React from 'react';

const SearchPage = () => (
  <div className="search-books">
    <div className="search-books-bar">
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author" />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid" />
    </div>
  </div>
);

export default SearchPage;
