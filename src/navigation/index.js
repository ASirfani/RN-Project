import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import {GlobleContext} from '../context/Provider';
import Authnavigator from './AuthorNavigator';

const AppNav = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobleContext);

  console.log('isloggedIn:>> ', isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator  />: <Authnavigator/>}
      
    </NavigationContainer>
  );
};

export default AppNav;
