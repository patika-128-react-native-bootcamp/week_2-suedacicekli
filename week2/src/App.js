import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import Butonolustur from './components/button';
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Butonolustur baslik="Artan" />
        <Butonolustur baslik="Azalan" />
        <Butonolustur baslik="Tarih" />
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

export default App;
