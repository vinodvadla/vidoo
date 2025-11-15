import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabBar from './CustomTab';
import { ThemeColors } from '../theme/colors';

type Props = {};

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: ThemeColors.background.dark }}>
      <Text>Hello</Text>
    </View>
  );
};
const Tab = (props: Props) => {
  return (
    <Tabs.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      tabBar={props => <MyTabBar {...props} />}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Favorites" component={Home} />
      <Tabs.Screen name="Videos" component={Home} />
      <Tabs.Screen name="Profile" component={Home} />
    </Tabs.Navigator>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
