import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from '../components/CustomDrawer'; // Adjust the import path as needed

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
     <Drawer.Screen 
        name="Main" 
        component={BottomTabNavigator} 
        options={{ headerShown: false }} // Hide the header for the BottomTabNavigator
      />
      {/* Add more screens here if needed */}
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
