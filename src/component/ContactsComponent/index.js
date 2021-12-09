import React from 'react';
import {
  Image,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import AppModal from '../common/AppModal/index';
import Message from '../common/Message/index';
import Color from '../../assets/themes/Color';
import Icon from '../common/Icon';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import { CREATE_CONTACT } from '../../constants/routeNames';

const ContactsComponent = ({
  data,
  loading,
  title,
  bodyModal,
  modalVisible,
  setModalVisible,
  footerModal,
}) => {

  const {navigate} = useNavigation();

  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No contacts to show" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    console.log('item', item);
    const {contact_picture, first_name,country_code, last_name,phone_number} =
      item;

    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: contact_picture}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Color.gary,
                borderRadius: 100,
              }}>
                <Text style={[styles.name, {color: Color.white}]}>
                  {first_name[0]}
                </Text>
                <Text style={[styles.name, {color: Color.white}]}>
                  {last_name[0]}
                </Text>
              </View>
          )}

          <View style={{paddingLeft:20}}>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.name}>{first_name}</Text>
              <Text  style={styles.name}> {last_name}</Text>
            </View>
            <Text style={styles.phoneNumber}>{`${country_code} ${phone_number} `}</Text>
          </View>
        </View>
        <Icon name="right" type="ant" size={18} color={Color.gary} />
      </TouchableOpacity>
    );
  };

  return (
     <>
    <View>
      <AppModal
        footerModal={<></>}
        bodyModal={
          <View>
            <Text>test</Text>
          </View>
        }
        title="My Profile"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      {loading && (
        <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
          <ActivityIndicator color={Color.primary} size="large" />
        </View>
      )}

      {!loading && (
        <View style={{paddingVertical:20}}>
        <FlatList
          data={data} 
          renderItem={renderItem}
          ItemSeparatorComponent={()=>(<View style={{height:0.5,backgroundColor: Color.gary,}}></View>)}
          keyExtractor={item => String(item.id)}
          ListEmptyComponent={ListEmptyComponent}
          ListFooterComponent={<View style={{height:200}}></View>}
        />
        </View>
      )}
    </View>

    <TouchableOpacity style={styles.floatingActionButton} onPress={()=>{
      navigate(CREATE_CONTACT);
    }}>
      <Icon name="plus" size ={21} color={Color.white}></Icon>
    </TouchableOpacity>

    </>
  );
};

export default ContactsComponent;
