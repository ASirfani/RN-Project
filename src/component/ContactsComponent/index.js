import React from 'react';
import {View, Text} from 'react-native';
import AppModal from '../common/AppModal/index';
import CustomButton from '../common/CustomButton/index';
const ContactsComponent = ({
  title,
  bodyModal,
  modalVisible,
  setModalVisible,
  footerModal,
}) => {
  return (
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

      <CustomButton
        secondary
        title="open"
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
};

export default ContactsComponent;
