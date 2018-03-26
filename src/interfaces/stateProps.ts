import BookObject from './bookObject';

export interface Shelves {
  id: string;
  shelfName: string;
}

export interface StateProps {
  books: BookObject[];
  shelves: Shelves[];
}

export interface BookShelfCompProps extends StateProps {
  onUpdateBook(book: BookProps, shelf: string): void;
}

export interface SearchPageCompProps extends StateProps, BookShelfCompProps {
  onSelectSearchPage(): void;
}

export interface BooksState {
  books: BookObject[];
}

export interface BookProps {
  authors: string[];
  shelf: string;
  title: string;
}

export interface BookComponentProps {
  book: {
    authors: string[];
    shelf: string;
    title: string;
  };
  bookImgUrl?: string;
  onUpdateBook(book: BookProps, shelf: string): void;
}

export interface MoveBookEvent {
  target: {
    value: string;
  };
}
