import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

import Butonolustur from './components/button';
import Inputt from './components/input';

function App() {
  const [dataList, setdataList] = useState([]);
  const addData = (product, price) => {
    const productsData = {
      productName: product,
      price: price,
    };
    setdataList([productsData, ...dataList]);
  };

  console.log(dataList);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Butonolustur baslik="Artan" />
        <Butonolustur baslik="Azalan" />
        <Butonolustur baslik="Tarih" />
      </View>
      <View style={styles.priceList}></View>

      <View>
        <Inputt getAddData={addData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    flex: 0.07,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  priceList: {
    flex: 0.9,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
