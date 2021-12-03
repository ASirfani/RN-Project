import HomeNavigator from './HomeNavigator';
import React, { useContext } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import SideMenu from './sideMenu';
import {GlobleContext} from '../context/Provider'


const getDrawerContent = (navigation,authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const {authDispatch} = useContext(GlobleContext);
  return (
    <Drawer.Navigator
      drawerContent={({navigation}) => getDrawerContent(navigation ,authDispatch)}>
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
        options={{headerShown: false}}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
