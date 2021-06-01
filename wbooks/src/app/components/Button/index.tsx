import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import styles from './styles';

type ButtonType = 'primary' | 'secondary';

interface Props extends TouchableOpacityProps {
  type?: ButtonType;
  title: string;
}

function Button({ type, title, style, ...props }: Props) {
  const buttonStyle = type === 'secondary' ? styles.buttonSecondary : styles.buttonPrimary;
  const titleStyle = type === 'secondary' ? styles.titleSecondary : styles.titlePrimary;

  return (
    <TouchableOpacity style={[styles.buttonDefault, buttonStyle, style]} {...props}>
      <Text style={[styles.titleDefault, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
