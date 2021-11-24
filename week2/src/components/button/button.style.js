import {StyleSheet} from 'react-native';

const süsleme = StyleSheet.create({
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
});

export default süsleme;
