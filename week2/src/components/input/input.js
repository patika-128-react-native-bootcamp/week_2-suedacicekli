import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

import styles from './input.style';
const inputt = props => {
  const [dataName, setdataName] = useState('NoProduct');
  const [dataPrice, setdataPrice] = useState(0);

  const inputArea = () => {
    let product = dataName;
    let price = dataPrice;
    props.getAddData(product, price);
  };
  const Seperator = () => <View style={styles.seperator} />;
  return (
    <View>
      <Seperator />
      <Text style={styles.textInput}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="enter product"
        onChangeText={setdataName}
      />

      <Text style={styles.textInput}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="enter price"
        onChangeText={setdataPrice}
      />
      <View style={styles.AddButton}>
        <Button
          title="Add"
          color="white"
          style={styles.AddTitle}
          onPress={inputArea}
        />
      </View>
    </View>
  );
};

export default inputt;
