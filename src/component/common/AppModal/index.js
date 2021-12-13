import React from 'react';
import {Modal, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import Icon from '../../../component/common/Icon/index';
import PropTypes from 'prop-types';

const AppModal = ({
  title,
  bodyModal,
  modalVisible,
  setModalVisible,
  footerModal,
  closeOnTouchOutside,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => {
          if (closeOnTouchOutside) {
            setModalVisible(false);
          }
        }}
        style={styles.wrapper}>
        <View style={styles.modelView}>
          <ScrollView>
            {/* Header modal */}
            <View style={styles.headerModal}>

            <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Icon size={27} type="evil" name="close" />
              </TouchableOpacity>
              <Text style={styles.textModal}>{title || 'RN Contact'}</Text>
              <View />
              <View />
              <View />
              <View />
            </View>
            <View style={styles.footerSeparator} />

            {/* body modal */}
            <View style={styles.body}>{bodyModal}</View>
               {footerModal} 
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
    </Modal>
  );
};

AppModal.propTypes = {
  closeOnTouchOutside: PropTypes.bool,
};

AppModal.defaultProps = {
  closeOnTouchOutside: true,
};

export default AppModal;
