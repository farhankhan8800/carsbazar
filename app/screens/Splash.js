import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Splash = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>SplashScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Splash;
