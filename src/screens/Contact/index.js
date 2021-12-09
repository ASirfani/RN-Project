import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Text,TouchableOpacity} from 'react-native';
import Icon from '../../component/common/Icon';
import ContactsComponent from '../../component/ContactsComponent';

const Contacts = () => {
  const [modalVisible,setModalVisible] = useState(false);
  const {setOptions, toggleDrawer} = useNavigation();

  React.useEffect(() => {
    setOptions({
        headerLeft: () => (
          <TouchableOpacity onPress = {()=>{toggleDrawer();}}>
            <Icon style={{paddingLeft: 17}} size={25} type="simpleLine" name = "menu"/>
          </TouchableOpacity>
        ),
    });
  }, []);

  return (
    <ContactsComponent modalVisible={modalVisible} setModalVisible={setModalVisible} />
  );
};

export default Contacts;
