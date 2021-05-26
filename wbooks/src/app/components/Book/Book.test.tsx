import React from 'react';
import { render } from '@testing-library/react-native';

import Book from '.';

describe('Book test suits', () => {
  it('Render correctly', () => {
    const book = render(<Book author="" id={0} title="" />);
    expect(book).toBeTruthy();
  });
});
