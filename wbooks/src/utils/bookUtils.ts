import bookPlaceholder from '@assets/book/img_book_placeholder.png';

export const validateImageUrl = (url?: string | null) => (url ? { uri: url } : bookPlaceholder);
