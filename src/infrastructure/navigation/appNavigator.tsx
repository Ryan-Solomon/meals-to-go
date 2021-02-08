// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useAuthContext } from '../../context/auth';
import { MapScreen } from '../../screens/MapScreen';
import { SettingsScreen } from '../../screens/SettingsScreen';
import { AccountNavigator } from './accountNavigator';
import { RestaurantNavigator } from './restaurantsNavigator';

type RootTabParamList = {
  Restaurants: undefined;
  Map: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const Navigation = () => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated)
    return (
      <NavigationContainer>
        <AccountNavigator />
      </NavigationContainer>
    );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';

            if (route.name === 'Restaurants') {
              iconName = 'restaurant-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Map') {
              iconName = 'navigate-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name='Restaurants' component={RestaurantNavigator} />
        <Tab.Screen name='Map' component={MapScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
