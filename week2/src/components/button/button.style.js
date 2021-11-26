import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ededf5',
    borderRadius: 7,
    height: 32,
    width: 110,
    borderWidth: 0.5,
    justifyContent: 'center',
  },
  button_text: {
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonSelect: {
    backgroundColor: '#475963',
    borderRadius: 7,
    color: 'white',
    height: 32,
    width: 110,
    borderWidth: 0.5,
    justifyContent: 'center',
  },
  buttonTextSelect: {
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
});

export default styles;
