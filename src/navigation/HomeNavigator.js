import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import Contacts from '../screens/Contact/index';
import ContactDetail from '../screens/ContactDetail/index';
import CreateContact from '../screens/CreateContact/index';
import Setting from '../screens/Setting/index';
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeNames';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={Contacts}>
      <HomeStack.Screen
        name={CONTACT_LIST}
        component={Contacts}
        ></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_DETAIL}
        component={ContactDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name={CREATE_CONTACT}
        component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name={SETTINGS} component={Setting}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
