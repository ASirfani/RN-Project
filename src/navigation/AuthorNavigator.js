import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LOGIN, REGISTER} from '../constants/routeNames';
import Login from '../screens/Login/index';
import Register from '../screens/Register/index';

const authnavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={{headerShown:false}}>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={Register}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default authnavigator;
