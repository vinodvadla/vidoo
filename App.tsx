import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import StackNavigator from './src/navigations/StackNavigator';
import { ThemeColors } from './src/theme/colors';
import { requestStoragePermission } from './src/utils/permissions';

type Props = {};

const App = (props: Props) => {
  useEffect(() => {
    requestStoragePermission();
  }, []);
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: ThemeColors.background.dark }}
    >
      <StackNavigator />
    </SafeAreaView>
  );
};

export default App;
