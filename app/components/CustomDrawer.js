import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { useAuth } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawer = (props) => {
  const { logout } = useAuth();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image 
            source={{
              uri: 'https://example.com/user-profile.jpg'
            }}
            size={50}
          />
          <Title style={styles.title}>John Doe</Title>
          <Caption style={styles.caption}>@johndoe</Caption>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem 
            icon={({color, size}) => (
              <Icon 
                name="home-outline" 
                color={color}
                size={size}
              />
            )}
            label="Home"
            onPress={() => props.navigation.navigate('Home')}
          />
          <DrawerItem 
            icon={({color, size}) => (
              <Icon 
                name="account-outline" 
                color={color}
                size={size}
              />
            )}
            label="Profile"
            onPress={() => props.navigation.navigate('Profile')}
          />
          <DrawerItem 
            icon={({color, size}) => (
              <Icon 
                name="cog-outline" 
                color={color}
                size={size}
              />
            )}
            label="Settings"
            onPress={() => props.navigation.navigate('Settings')}
          />
          <DrawerItem 
            icon={({color, size}) => (
              <Icon 
                name="bell-outline" 
                color={color}
                size={size}
              />
            )}
            label="Notifications"
            onPress={() => props.navigation.navigate('Notifications')}
          />
          <DrawerItem 
            icon={({color, size}) => (
              <Icon 
                name="help-circle-outline" 
                color={color}
                size={size}
              />
            )}
            label="Help"
            onPress={() => props.navigation.navigate('Help')}
          />
          <DrawerItem 
            icon={({color, size}) => (
              <Icon 
                name="information-outline" 
                color={color}
                size={size}
              />
            )}
            label="About"
            onPress={() => props.navigation.navigate('About')}
          />
          <DrawerItem 
            icon={({color, size}) => (
              <Icon 
                name="car-outline" 
                color={color}
                size={size}
              />
            )}
            label="Cars"
            onPress={() => props.navigation.navigate('Cars')}
          />
        </Drawer.Section>

        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={false}/>
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem 
          icon={({color, size}) => (
            <Icon 
              name="exit-to-app" 
              color={color}
              size={size}
            />
          )}
          label="Logout"
          onPress={() => logout()}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default CustomDrawer;
