import React from 'react';
import {View, Text, FlatList} from 'react-native';

import styles from './list.style';

const Item = props => {
  return (
    <View style={styles.priceList}>
      <Text style={styles.listElementName}>{props.name}</Text>
      <Text style={styles.listElementPrice}>{props.price} TL</Text>
    </View>
  );
};

const renderItems = ({item}) => (
  <Item name={item.productName} price={item.price} />
);

const renderSeparator = () => <View style={styles.seperator} />;
const Listt = props => {
  return (
    <FlatList
      data={props.data}
      renderItem={renderItems}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

export default Listt;
