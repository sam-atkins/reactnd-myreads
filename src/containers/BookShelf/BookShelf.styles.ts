import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '../../icons/icons';

export const ListBooksContent = styled.div`
  flex: 1;
  padding: 0 0 80px;
`;

export const StyledBookShelf = styled.div`
  padding: 0 10px 20px;

  @media (min-width: 600px) {
    padding: 0 20px 40px;
  }
`;

export const BookShelfTitle = styled.h2`
  border-bottom: 1px solid #dedede;
`;

export const BookShelfBooks = styled.div`
  text-align: center;
`;

export const BooksGridOL = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const OpenSearch = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
`;

export const OpenSearchLink = styled(Link)`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #2e7d32;
  background-image: url(${Icon.addIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 28px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  font-size: 0;
`;
