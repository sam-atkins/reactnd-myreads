import styled from 'styled-components';
import Icon from '../../icons/icons';

export const BooksGridLI = styled.li`
  padding: 10px 15px;
  text-align: left;
`;

export const StyledBook = styled.div`
  width: 140px;
`;

export const StyledBookTop = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  height: 200px;
`;

export const StyledBookCover = styled.div`
  /* background-image contained in style tag in the JSX */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #eee;
  width: 128px;
  height: 193px;
`;

export const StyledBookShelfChanger = styled.div`
  position: absolute;
  right: 0;
  bottom: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #60ac5d;
  background-image: url(${Icon.arrowDropDownIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const StyledBookShelfChangerSelect = styled.select`
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const StyledBookInfo = styled.div`
  font-size: 0.8em;
`;

export const StyledBookTitle = StyledBookInfo.extend`
  margin-top: 10px;
`;

export const StyledBookAuthors = StyledBookInfo.extend`
  color: #999;
`;
