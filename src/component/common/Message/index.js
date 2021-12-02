import React, {useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import Color from '../../../assets/themes/Color';
const Message = ({
  style,
  retry,
  onDismiss,
  retryFn,
  message,
  primary,
  danger,
  success,
  info,
}) => {
  const [userDismissed, setDismissed] = useState(false);

  const getbgColor = () => {
    if (primary) {
      return Color.primary;
    }
    if (danger) {
      return Color.danger;
    }
    if (success) {
      return Color.success;
    }
    if (info) {
      return Color.info;
    }
  };

  return (
    <>
    {userDismissed?null: (
      <TouchableOpacity
        style={[styles.wrapper, {backgroundColor: getbgColor()}]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'white'}}>{message}</Text>

          {retry && !typeof onDismiss === 'function' && (
            <TouchableOpacity onPress={retryFn}>
              <Text style={{color: 'white'}}>retry</Text>
            </TouchableOpacity>
          )}

          {typeof onDismiss === 'function' && (
            <TouchableOpacity
              onPress={() => {
                setDismissed(true);
                onDismiss();
              }}>
              <Text style={{color: Color.white}}>X</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>)}
    </>
  );
};

export default Message;
