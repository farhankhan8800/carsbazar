import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const Cars = () => {
  return (
    <View style={styles.container}>
      <SharedElement id="item.photo">
        <Image
          source={{ uri: 'https://imgd.aeplcdn.com/1280x720/cw/ec/17725/Volkswagen-Jetta-Right-Front-Three-Quarter-55817.jpg?wm=0&t=120020370&t=120020370&q=80'}}
          style={styles.image}
        />
      </SharedElement>
      <Text style={styles.text}>Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
  },
});

Cars.sharedElements = () => {
  return [{ id: 'item.photo' }];
};

export default Cars;
