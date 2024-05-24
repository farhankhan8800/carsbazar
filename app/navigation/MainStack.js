import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import DrawerNavigator from './DrawerNavigator';
import DetailScreen from '../screens/DetailScreen';
import Cars from '../screens/Cars';

import { sharedTransitionSpec } from './config/transitionConfig'; // Adjust the path as needed
const Stack = createSharedElementStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={DrawerNavigator}/>
      <Stack.Screen name="Detail" component={DetailScreen} options={{...sharedTransitionSpec}} />
      <Stack.Screen name="Cars" component={DetailScreen} options={{...sharedTransitionSpec}} />
    
    </Stack.Navigator>
  );
};

export default MainStack;
