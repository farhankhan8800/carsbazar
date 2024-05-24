import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Category from '../screens/Category';
import Store from '../screens/Store';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Store" component={Store} />
      <Tab.Screen name="Category" component={Category} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
