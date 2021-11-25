import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './input.style';
const inputt = props => {
  return (
    <View>
      <Text style={styles.textInput}>Name</Text>
      <TextInput style={styles.input} placeholder="enter name" />

      <Text style={styles.textInput}>Price</Text>
      <TextInput style={styles.input} placeholder="enter price" />
    </View>
  );
};

export default inputt;
