import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import CustomHeader from '../components/Header/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
const HomeScreen = ({ navigation }) => {
  
    const handleSearch = (query) => {
      console.log('Search query:', query);
    };
  
    const handleMenuPress = () => {
      navigation.openDrawer(); // Assuming you have a drawer navigator
    };
  
    const handleProfilePress = () => {
      navigation.navigate('Profile'); // Navigate to the Profile screen
    };
  return (
    <SafeAreaView style={{flex:1}}>
    <CustomHeader
        title="Home"
        onSearch={() => {}}
        onMenuPress={() => navigation.openDrawer()}
        onProfilePress={() => navigation.navigate('Profile')}
      />
     <View style={styles.container}>
    
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <SharedElement id="item.photo">
          <Image
            source={{ uri: 'https://imgd.aeplcdn.com/1280x720/cw/ec/17725/Volkswagen-Jetta-Right-Front-Three-Quarter-55817.jpg?wm=0&t=120020370&t=120020370&q=80' }}
            style={styles.image}
          />
        </SharedElement>
        <Text style={styles.text}>Go to Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.text}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
  },
});

HomeScreen.sharedElements = () => {
  return [{ id: 'item.photo' }];
};

export default HomeScreen;
