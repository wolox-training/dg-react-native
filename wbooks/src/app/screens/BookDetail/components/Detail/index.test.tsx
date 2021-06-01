import React from 'react';
import { render } from '@testing-library/react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import bookPlaceholder from '@assets/book/img_book_placeholder.png';

import Detail from './index';

describe('Detail test suit', () => {
  it('Render correctly', () => {
    const book = render(<Detail book={BOOKS_MOCK[0]} />);
    expect(book).toMatchSnapshot();
  });
  it('Render with all properties and no image uri', () => {
    const { getByLabelText, getByText } = render(<Detail book={BOOKS_MOCK[0]} />);
    const image = getByLabelText('detailImage');
    expect(image.props.source).toEqual(bookPlaceholder);
    expect(getByText(BOOKS_MOCK[0].title)).toBeTruthy();
    expect(getByText(BOOKS_MOCK[0].author)).toBeTruthy();
    expect(getByText(BOOKS_MOCK[0].year)).toBeTruthy();
    expect(getByText(BOOKS_MOCK[0].genre)).toBeTruthy();
  });
  it('Render with all properties and image uri', () => {
    const { getByLabelText, getByText } = render(<Detail book={BOOKS_MOCK[2]} />);
    const image = getByLabelText('detailImage');
    expect(image.props.source).toEqual({ uri: BOOKS_MOCK[2].imageUrl });
    expect(getByText(BOOKS_MOCK[2].title)).toBeTruthy();
    expect(getByText(BOOKS_MOCK[2].author)).toBeTruthy();
    expect(getByText(BOOKS_MOCK[2].year)).toBeTruthy();
    expect(getByText(BOOKS_MOCK[2].genre)).toBeTruthy();
  });
});
