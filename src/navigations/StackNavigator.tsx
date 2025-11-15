import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './Tab';

type Props = {};

const Stack = createNativeStackNavigator();

const StackNavigator = (props: Props) => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Tabs" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Tabs" component={Tab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
