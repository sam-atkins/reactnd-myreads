import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import Icon from '../../icons/icons';

export const SearchBooksBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 0 6px rgba(0, 0, 0, 0.23);
`;

export const SearchBooksBarInput = styled(DebounceInput)`
  width: 100%;
  padding: 15px 10px;
  font-size: 1.25em;
  border: none;
  outline: none;
`;

export const SearchBooksInputForm = styled.form`
  flex: 1;
  background: #e9e;
`;

export const SearchBooksResults = styled.div`
  padding: 80px 10px 20px;
`;

export const BooksGridOL = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CloseSearch = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
`;

export const CloseSearchLink = styled(Link)`
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

export const SearchError = styled.div`
  text-align: center;
`;

export const DisplaySearchTerms = styled.p`
  font-family: monospace;
`;
