import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator/StackNavigator';
// import {DrawerNavigator} from './src/navigator/DrawerNavigator';
import {DrawerNavigator2} from './src/navigator/DrawerNavigator2';
import {AuthProvider} from './src/context/AuthContext';
// import {TabsNavigator} from './src/navigator/TabsNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        <DrawerNavigator2 />
        {/* <TabsNavigator /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: {children: JSX.Element}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
