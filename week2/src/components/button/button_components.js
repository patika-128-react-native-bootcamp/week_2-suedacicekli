import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import sitil from './button.style';
const butonolustur = props => {
  return (
    <TouchableOpacity style={sitil.button}>
      <Text style={sitil.button_text}>{props.baslik}</Text>
    </TouchableOpacity>
  );
};

export default butonolustur;
