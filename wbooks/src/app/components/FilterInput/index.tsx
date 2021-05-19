import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import icSearchPlaceholder from '@assets/general/ic_search_placeholder.png';
import closeDisable from '@assets/general/close_disable.png';
import close from '@assets/general/close.png';
import BookActions from '@redux/book/actions';

import styles from './styles';

function FilterInput() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onHandlerChange = (text: string) => {
    setValue(text);
    dispatch(BookActions.getFilteredBooks(text));
  };

  const onHandlerCloseIconPress = () => onHandlerChange('');

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
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
    </View>
  );
}

export default FilterInput;
