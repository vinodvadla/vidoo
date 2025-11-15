import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import StackNavigator from './src/navigations/StackNavigator';
import { ThemeColors } from './src/theme/colors';

type Props = {};

const App = (props: Props) => {
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:ThemeColors.background.dark }}>
      <StackNavigator />
    </SafeAreaView>
  );
};

export default App;
