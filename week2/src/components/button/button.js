import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './button.style';

const createButton = ({increased, decreased, historical}) => {
  const [state, setState] = useState(3);
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={state === 1 ? styles.buttonSelect : styles.button}
        onPress={() => {
          setState(1);
          increased();
        }}>
        <Text
          style={state === 1 ? styles.buttonTextSelect : styles.button_text}>
          Artan
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={state === 2 ? styles.buttonSelect : styles.button}
        onPress={() => {
          setState(2);
          decreased();
        }}>
        <Text
          style={state === 2 ? styles.buttonTextSelect : styles.button_text}>
          Azalan
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={state === 3 ? styles.buttonSelect : styles.button}
        onPress={() => {
          setState(3);
          historical();
        }}>
        <Text
          style={state === 3 ? styles.buttonTextSelect : styles.button_text}>
          Tarih
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default createButton;
