import bookPlaceholder from '@assets/book/img_book_placeholder.png';

export const validateImageUrl = (url: string) => (url ? { uri: url } : bookPlaceholder);
