import React, { useState, useEffect } from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import icSearchPlaceholder from '@assets/general/ic_search_placeholder.png';
import close from '@assets/general/close.png';
import BookActions from '@redux/book/actions';
import useDebounce from '@hooks/useDebounce';

import styles from './styles';

const DELAY = 300;

function FilterInput() {
  const [value, setValue] = useState('');
  const debounceSearchTerm = useDebounce(value, DELAY);
  const dispatch = useDispatch();

  useEffect(() => {
    if (debounceSearchTerm) {
      dispatch(BookActions.getFilteredBooks(value));
    }
  }, [debounceSearchTerm, dispatch, value]);

  const onHandlerCloseIconPress = () => setValue('');

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image style={styles.searchIcon} resizeMode="cover" source={icSearchPlaceholder} />
        <TextInput onChangeText={setValue} value={value} style={styles.input} />
        <TouchableOpacity onPress={onHandlerCloseIconPress} disabled={value === ''}>
          <Image
            style={[styles.closeIcon, value ? styles.iconEnabled : {}]}
            resizeMode="cover"
            source={close}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FilterInput;
