import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator/StackNavigator';
// import {DrawerNavigator} from './src/navigator/DrawerNavigator';
import {DrawerNavigator2} from './src/navigator/DrawerNavigator2';
// import {TabsNavigator} from './src/navigator/TabsNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigator2 />
      {/* <TabsNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
