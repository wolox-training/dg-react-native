import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import icSearchPlaceholder from '@assets/general/ic_search_placeholder.png';
import closeDisable from '@assets/general/close_disable.png';
import close from '@assets/general/close.png';

import styles from './styles';

function FilterInput() {
  const [value, setValue] = useState('');

  const onHandlerChange = (text: string) => setValue(text);

  const onHandlerCloseIconPress = () => setValue('');

  return (
    <View style={styles.container}>
      <Image style={styles.icon} resizeMode="cover" source={icSearchPlaceholder} />
      <TextInput
        onChangeText={onHandlerChange}
        value={value}
        style={styles.input}
        placeholder="search"
        placeholderTextColor="gray"
      />
      <TouchableOpacity onPress={onHandlerCloseIconPress} disabled={value === ''}>
        <Image style={styles.icon} resizeMode="cover" source={value ? close : closeDisable} />
      </TouchableOpacity>
    </View>
  );
}

export default FilterInput;
