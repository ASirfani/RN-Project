import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import {GlobleContext} from '../context/Provider';
import Authnavigator from './AuthorNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNav = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobleContext);

  const [isAuthenticate, setAuthenticate] = useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setAuthenticate(true);
        setAuthLoaded(true);
      } else {
        setAuthenticate(false);
        setAuthLoaded(true);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isAuthenticate ? (
            <DrawerNavigator />
          ) : (
            <Authnavigator />
          )}
        </NavigationContainer>
      ) : (
        <ActivityIndicator/>
      )}
    </>
  );
};

export default AppNav;
