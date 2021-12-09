import React from 'react';
import {Modal, View, Text, TouchableOpacity,ScrollView} from 'react-native';
import styles from './styles';
import Icon from '../../../component/common/Icon/index';

const AppModal = ({
  title,
  bodyModal,
  modalVisible,
  setModalVisible,
  footerModal,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(false);
        }}
        style={styles.wrapper}>
        <View style={styles.modelView}>
          <ScrollView>
            {/* Header modal */}
            <View style={styles.headerModal}>
              <Icon size={27} type="evil" name="close" />
              <Text style={styles.textModal}>{title || 'RN Contact'}</Text>
              <View />
              <View />
              <View />
              <View />
            </View>
            <View style={styles.footerSeparator} />

            {/* body modal */}
            <View style={styles.body}>{bodyModal}</View>

            
            {/* footer modal */}
            {!footerModal && (
              <View>
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView}></View>
                      <Text style={styles.footerText}>Terms Of service</Text>
                    </View>
                  </View>
                </>
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>
      <Text>hello</Text>
    </Modal>
  );
};

export default AppModal;
