import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {LogBox, StatusBar} from 'react-native';
import Login from './screens/Login';
import {colorItem} from './assets/color';
import MainScreen from './screens/MainScreen';
import store from './components/Redux/store';
import Storage from './helpingComponents/storage';
import Toast from 'react-native-toast-message';
import {GetData} from './helpingComponents/ApiInstances';
import {toastConfig} from './helpingComponents/toastConfig';
import LoaderCompo from './components/LoaderCompo';

const Stack = createNativeStackNavigator();
const AuthContext = React.createContext();

const App = () => {
  const initialState = {
    authToken: null,
  };

  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'SET_TOKEN':
        return {
          ...prevState,
          authToken: action.data,
        };
      default:
        return {
          ...prevState,
        };
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [mainLoader, setMainLoader] = React.useState(true);
  const authContext = React.useMemo(
    () => ({
      setToken: async data => {
        dispatch({type: 'SET_TOKEN', data: data});
      },
    }),
    [],
  );

  const initializeApp = async () => {
    let tokenData = await Storage.getToken();
    if (tokenData) {
      dispatch({type: 'SET_TOKEN', data: tokenData});
      setMainLoader(false);
    } else {
      setMainLoader(false);
    }
  };

  useEffect(() => {
    LogBox.ignoreAllLogs();
    initializeApp();
  }, [authContext]);

  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <StatusBar animated={true} backgroundColor={colorItem.mainColor} />
          <AuthContext.Provider value={authContext}>
            {mainLoader ? (
              <LoaderCompo />
            ) : (
              <Stack.Navigator>
                {state.authToken ? (
                  <Stack.Screen
                    options={{headerShown: false}}
                    name="MainScreen"
                    component={MainScreen}
                  />
                ) : (
                  <Stack.Screen
                    options={{headerShown: false}}
                    name="Login"
                    component={Login}
                  />
                )}
              </Stack.Navigator>
            )}
          </AuthContext.Provider>
        </Provider>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </>
  );
};

export {App as default, AuthContext};
