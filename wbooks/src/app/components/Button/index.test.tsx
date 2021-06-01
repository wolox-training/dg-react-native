import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import styles from './styles';

import Button from './index';

const DEFAULT_TOUCHABLE_STYLE = { opacity: 1 };

describe('Button test suits', () => {
  const props = {
    title: 'CLICK ME',
    onPress: jest.fn()
  };

  it('Render correctly', () => {
    const button = render(<Button {...props} />);
    expect(button).toMatchSnapshot();
  });
  it('Render with correct title and primary styles', () => {
    const { getByLabelText, getByText } = render(<Button {...props} />);
    const button = getByLabelText('btn');
    const title = getByLabelText('btnTitle');
    expect(button.props.style).toEqual({
      ...styles.buttonDefault,
      ...styles.buttonPrimary,
      ...DEFAULT_TOUCHABLE_STYLE
    });
    expect(getByText(props.title)).toBeTruthy();
    expect(title.props.style).toEqual([styles.titleDefault, styles.titlePrimary]);
  });
  it('Render with secondary styles', () => {
    const { getByLabelText } = render(<Button type="secondary" {...props} />);
    const button = getByLabelText('btn');
    const title = getByLabelText('btnTitle');
    expect(button.props.style).toEqual({
      ...styles.buttonDefault,
      ...styles.buttonSecondary,
      ...DEFAULT_TOUCHABLE_STYLE
    });
    expect(title.props.style).toEqual([styles.titleDefault, styles.titleSecondary]);
  });
  it('Test onPress', () => {
    const { getByLabelText } = render(<Button {...props} />);
    const button = getByLabelText('btn');
    fireEvent.press(button);
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
