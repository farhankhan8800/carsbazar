import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Avatar, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomHeader = ({ title, onSearch, onMenuPress, onProfilePress }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Action icon="menu" onPress={onMenuPress} />
        <Avatar.Image 
          source={{ uri: 'https://example.com/logo.jpg' }} 
          size={36} 
          style={styles.logo}
        />
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search by Make, Model, Type etc."
            onChangeText={onSearch}
            style={styles.searchbar}
          />
        </View>
        <Appbar.Action icon="account-circle" onPress={onProfilePress} />
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#ffffff', // White background color for the header
      elevation: 4, // Add shadow for Android
      zIndex: 1, // Ensure the header is on top of the content
    },
    logo: {
      marginRight: 10,
    },
    searchbar: {
      flex: 1,
      marginHorizontal: 10,
      height: 40,
      backgroundColor: '#f0f0f0', // Light grey background for the search bar
      borderRadius: 8,
    },
  });
  
export default CustomHeader;
