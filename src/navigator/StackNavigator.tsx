import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Page1Screen} from '../screens/Page1Screen';
import {Page2Screen} from '../screens/Page2Screen';
import {Page3Screen} from '../screens/Page3Screen';
import {PersonScreen} from '../screens/PersonScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Page2Screen"
      screenOptions={{
        // headerShown: false,
        headerStyle: {elevation: 0, shadowColor: 'transparent'},
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name="Page1Screen"
        options={{title: 'Page 1'}}
        component={Page1Screen}
      />
      <Stack.Screen
        name="Page2Screen"
        options={{title: 'Page 2'}}
        component={Page2Screen}
      />
      <Stack.Screen
        name="Page3Screen"
        options={{title: 'Page 3'}}
        component={Page3Screen}
      />
      <Stack.Screen
        name="PagePersona"
        options={{title: 'Page Persona'}}
        component={PersonScreen}
      />
    </Stack.Navigator>
  );
};
