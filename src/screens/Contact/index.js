import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();

  React.useEffect(() => {
    setOptions({
        headerLeft: () => (
          <TouchableOpacity onPress = {()=>{toggleDrawer();}}>
            <SimpleLineIcons style={{paddingLeft: 17}} size={25} name = "menu"></SimpleLineIcons>
          </TouchableOpacity>
        ),
    });
  }, []);

  return (
    <View>
      <Text> Hello Contact</Text>
      <Text> Hello Contact</Text>
      <Text> Hello Contact</Text>
      <Text> Hello Contact</Text>
      <Text> Hello Contact</Text>
    </View>
  );
};

export default Contacts;
