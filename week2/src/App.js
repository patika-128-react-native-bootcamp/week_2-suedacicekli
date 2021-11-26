import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import CreateButton from './components/button';
import Inputt from './components/input';
import Listt from './components/list';

function App() {
  const [dataList, setdataList] = useState([]);
  const addData = (product, price) => {
    const productsData = {
      productName: product,
      price: price,
      date: new Date(),
    };
    setdataList([productsData, ...dataList]);
  };

  //console.log(dataList);

  const sortListASC = () => {
    dataList.sort((obj1, obj2) => {
      return obj1.price - obj2.price;
    });

    setdataList([...dataList]);
  };

  const sortListDES = () => {
    dataList.sort((obj1, obj2) => {
      return obj2.price - obj1.price;
    });
    setdataList([...dataList]);
  };

  const sortListDate = () => {
    dataList.sort((obj1, obj2) => {
      return obj2.date - obj1.date;
    });
    setdataList([...dataList]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <CreateButton
          increased={sortListASC}
          decreased={sortListDES}
          historical={sortListDate}
        />
      </View>
      <View style={styles.priceList}>
        <Listt data={dataList} />
      </View>
      <Inputt getAddData={addData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  priceList: {
    flex: 0.9,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.1,
  },
});

export default App;
