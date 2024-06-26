import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Category = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
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

export default Category;
