

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'

export default function MainNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen options={{headerShown: false}} name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}