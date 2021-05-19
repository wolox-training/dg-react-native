export interface Book {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  imageUrl?: string | null;
}

export interface FilteredBooks {
  books: Book[];
  query: string;
}

export interface BookState {
  books: Book[];
  filteredBooks: FilteredBooks;
  booksLoading: boolean;
  booksError: string;
}
