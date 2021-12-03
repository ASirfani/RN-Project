import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();

  React.useEffect(() => {
    setOptions({
        headerLeft: () => (
          <TouchableOpacity onPress = {()=>{toggleDrawer();}}>
            <Text style={{paddingLeft: 15}}>Nav</Text>
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
