const BOOK_PLACEHOLDER = require('@assets/book/img_book_placeholder.png');

export const validateImageUrl = (url: string) => (url ? { uri: url } : BOOK_PLACEHOLDER);
