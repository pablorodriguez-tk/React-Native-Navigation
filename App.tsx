import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator/StackNavigator';
// import {DrawerNavigator} from './src/navigator/DrawerNavigator';
import {DrawerNavigator2} from './src/navigator/DrawerNavigator2';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigator2 />
    </NavigationContainer>
  );
};

export default App;
