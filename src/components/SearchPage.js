import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '../icons/icons';
import Book from './Book';
import * as BooksAPI from '../utils/BooksAPI';

const SearchBooksBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 0 6px rgba(0, 0, 0, 0.23);
`;

const SearchBooksBarInput = styled.input`
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

class SearchPage extends Component {
  state = {
    userSearch: '',
    searchResults: [],
  };

  handleUserSearch = (e) => {
    const userSearch = e.target.value;
    this.setState({ userSearch });
    console.log('====================================');
    console.log('userSearch:', userSearch);
    console.log('====================================');
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    BooksAPI.search(this.state.userSearch).then((searchResults) => {
      this.setState({ searchResults });
      console.log('====================================');
      console.log(this.state.searchResults);
      console.log('====================================');
    });
  };

  addBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
  };

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar>
          <SearchBooksInputForm onSubmit={this.handleFormSubmit}>
            <SearchBooksBarInput
              type="text"
              placeholder="Search by title or author"
              value={this.state.userSearch}
              onChange={this.handleUserSearch}
            />
          </SearchBooksInputForm>
        </SearchBooksBar>
        <SearchBooksResults>
          <BooksGridOL>
            {this.state.searchResults.length > 0 &&
              this.state.searchResults.map(b => (
                <Book key={b.title} book={b} onMoveBook={this.addBook} />
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

export default SearchPage;
