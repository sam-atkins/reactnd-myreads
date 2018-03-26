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
