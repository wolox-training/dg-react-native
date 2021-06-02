import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import bookPlaceholder from '@assets/book/img_book_placeholder.png';
import { ROUTES } from '@constants/routes';

import Book from './index';

describe('Book test suits', () => {
  const props = {
    author: 'John Doe',
    id: 1,
    title: 'Tibia',
    index: 1
  };

  it('Render correctly', () => {
    const book = render(<Book {...props} />);
    expect(book).toMatchSnapshot();
  });
  it('Render with all props', () => {
    const imageUrl = 'test image';
    const { getByLabelText, getByText } = render(<Book {...props} imageUrl={imageUrl} />);
    const image = getByLabelText('bookImage');
    expect(getByLabelText('bookTitle')).toBeTruthy();
    expect(getByText(props.title)).toBeTruthy();
    expect(getByLabelText('bookAuthor')).toBeTruthy();
    expect(getByText(props.author)).toBeTruthy();
    expect(image).toBeTruthy();
    expect(image.props.source).toEqual({ uri: imageUrl });
  });
  it('Render without imageUrl', () => {
    const { getByLabelText } = render(<Book {...props} />);
    const image = getByLabelText('bookImage');
    expect(image.props.source).toEqual(bookPlaceholder);
  });
  it('Test onNavigate', () => {
    const { getByLabelText } = render(<Book {...props} />);
    const item = getByLabelText('bookItem');
    fireEvent.press(item);
    waitFor(() => {
      expect(useNavigation().navigate).toHaveBeenCalledWith(ROUTES.bookDetail);
    });
  });
});
