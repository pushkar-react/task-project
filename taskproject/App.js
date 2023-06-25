import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import Login from './screens/Login';
import {colorItem} from './assets/color';
import MainScreen from './screens/MainScreen';
import store from './components/Redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar animated={true} backgroundColor={colorItem.mainColor} />
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="MainScreen"
            component={MainScreen}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
