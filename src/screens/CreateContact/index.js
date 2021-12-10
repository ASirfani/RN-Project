import { useNavigation } from '@react-navigation/core';
import React, {useContext, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import CreactContactComponent from '../../component/CreactContactComponent';
import { CONTACT_LIST } from '../../constants/routeNames';
import createContacts from '../../context/actions/auth/Contacts/createContact'
import { GlobleContext } from '../../context/Provider';

const CreateContact = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const {contactDispatch,contactState:{createContact:{error, loading}}}=useContext(GlobleContext);
  const onChangeText = ({name,value})=>{
    setForm({...form,[name]:value})
  };

  const sheetRef = useRef(null);

  const closeSheet=()=>{
    if(sheetRef.current){
      sheetRef.current.close();
    }
  }
  const openSheet=()=>{
    if(sheetRef.current){
      sheetRef.current.open();
    }
  }

  const onSubmit= () =>{
    createContacts(form)(contactDispatch)(()=>{
      navigate(CONTACT_LIST);
    });
    };
    const toggleSwitch=()=>{

      setForm({...form,"isFavorite":!form.isFavorite});
    };
  return <CreactContactComponent
  sheetRef={sheetRef} closeSheet={closeSheet} openSheet={openSheet} toggleSwitch={toggleSwitch} loading={loading} error={error} onSubmit={onSubmit} onChangeText={onChangeText} form={form} setForm={setForm} />;
};


export default CreateContact;
