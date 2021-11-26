import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  priceList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  listElementName: {
    fontSize: 17,
    fontWeight: '400',
  },
  listElementPrice: {
    fontSize: 17,
    fontWeight: '700',
  },
  seperator: {
    borderWidth: 1,
    backgroundColor: '#eceff',
    opacity: 0.1,
  },
});

export default styles;
