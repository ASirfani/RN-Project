import HomeNavigator from './HomeNavigator';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import SideMenu from './sideMenu';

const getDrawerContent = (navigation) => {
  return <SideMenu navigation={navigation} />;
};
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={({navigation}) => getDrawerContent(navigation)}>
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
        options={{headerShown: false}}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
