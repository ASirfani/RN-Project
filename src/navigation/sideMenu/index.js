import React from 'react';
import Container from '../../component/common/Container';
import {SafeAreaView, Alert, Image, View, Text} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SETTINGS} from '../../constants/routeNames';
import LogoutUser from '../../context/actions/auth/LogoutUser';

const SideMenu = ({navigation,authDispatch}) => {

  

  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout', 'Are you sure to Logout?', [
      {
        text: 'Cancle',
        onPress: () => {},
      },
      {
        text: 'Ok',
        onPress: () => {
          LogoutUser()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Text>T</Text>,
      name: 'Setting',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {icon: <Text>T</Text>, name: 'Logout', onPress: handleLogout},
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
