import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const DetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        {/* <Appbar.Content title="Detail Screen" /> */}
      </Appbar.Header>
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
    backgroundColor: '#f8f8f8',
  },
  header: {
    width: '100%',
    backgroundColor: '#f8f8f8', // White background color for the header
  },
  image: {
    width: 200,
    height: 200,
    left:50,
    borderRadius: 10,
    marginTop: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
  },
});

DetailScreen.sharedElements = () => {
  return [{ id: 'item.photo' }];
};

export default DetailScreen;
