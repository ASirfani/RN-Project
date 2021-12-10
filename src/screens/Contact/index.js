import {useNavigation} from '@react-navigation/core';
import React, {useContext, useEffect, useState} from 'react';
import {Text,TouchableOpacity} from 'react-native';
import Icon from '../../component/common/Icon';
import ContactsComponent from '../../component/ContactsComponent';
import { GlobleContext } from '../../context/Provider';
import getContacts from '../../context/actions/auth/Contacts/getContacts'

const Contacts = () => {
  const [modalVisible,setModalVisible] = useState(false);
  const {setOptions, toggleDrawer} = useNavigation();
  const {contactDispatch,contactState:{getContacts: {data, loading}}}=useContext(GlobleContext);
  

  useEffect(() => {
    getContacts()(contactDispatch);
  }, []);

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
    <ContactsComponent data={data} loading={loading} modalVisible={modalVisible} setModalVisible={setModalVisible} />
  );
};

export default Contacts;
