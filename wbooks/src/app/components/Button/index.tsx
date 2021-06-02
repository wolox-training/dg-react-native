import React, { useState } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
  GestureResponderEvent,
  Image
} from 'react-native';
import Animated, { withTiming, useAnimatedStyle } from 'react-native-reanimated';
import { COLORS } from '@constants/colors';
import icMyrentals from '@assets/general/ic_myrentals.png';

import styles from './styles';

type ButtonType = 'primary' | 'secondary';

interface Props extends TouchableOpacityProps {
  type?: ButtonType;
  title: string;
  activeAnimation?: boolean;
}

const DURATION = 300;
const BG_CHANGE_DURATION = 600;
const TITLE_HIDE_DURATION = 100;
const ICON_SHOW_DURATION = 900;
const INITIAL_WIDTH = '100%';
const ANIMATION_WIDTH = '10%';

function Button({ type, title, onPress, activeAnimation, ...props }: Props) {
  const titleStyle = type === 'secondary' ? styles.titleSecondary : styles.titlePrimary;
  const animatedBG = type === 'secondary' ? COLORS.secondary : COLORS.white;
  const [width, setWidth] = useState(INITIAL_WIDTH);
  const [color, setColor] = useState(animatedBG);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const [iconOpacity, setIconOpacity] = useState(0);
  const animatedStyle = useAnimatedStyle(() => ({
    width: withTiming(width, { duration: DURATION }),
    backgroundColor: withTiming(color, { duration: BG_CHANGE_DURATION })
  }));
  const titleOpacityStyle = useAnimatedStyle(() => ({
    opacity: withTiming(titleOpacity, { duration: TITLE_HIDE_DURATION })
  }));
  const iconOpacityStyle = useAnimatedStyle(() => ({
    opacity: withTiming(iconOpacity, { duration: ICON_SHOW_DURATION })
  }));

  const onHandlerPress = (e: GestureResponderEvent) => {
    if (activeAnimation) {
      setWidth(ANIMATION_WIDTH);
      setColor(COLORS.success);
      setTitleOpacity(0);
      setIconOpacity(1);
    }
    if (onPress) {
      onPress(e);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedStyle, animatedStyle]}>
        <TouchableOpacity
          accessibilityLabel="btn"
          onPress={onHandlerPress}
          {...props}
          style={[styles.buttonDefault]}>
          <Animated.View style={titleOpacityStyle}>
            <Text accessibilityLabel="btnTitle" style={[styles.titleDefault, titleStyle]}>
              {title}
            </Text>
          </Animated.View>
          <Animated.View style={[styles.iconContainer, iconOpacityStyle]}>
            <Image style={styles.icon} resizeMode="stretch" source={icMyrentals} />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

export default Button;
