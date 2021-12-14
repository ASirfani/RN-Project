import React, {useState} from 'react';
import {View, Text ,ActivityIndicator} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Color from '../../../assets/themes/Color';
const CustomButton = ({
  style,
  title,
  disabled,
  loading,
  primary,
  secondary,
  danger,
  onPress,
}) => {
  const getbgColor = () => {
    if (disabled) {
      return Color.gary;
    }
    if (primary) {
      return Color.primary;
    }
    if (danger) {
      return Color.danger;
    }
    if (secondary) {
      return Color.secondary;
    }
  };


  return (
    <TouchableOpacity disabled={disabled}  onPress={onPress} style={[styles.wrapper, {backgroundColor: getbgColor()}]}>
      <View style={styles.loadSection}>
       {loading && <ActivityIndicator color={primary? Color.secondary:Color.primary} />}

      { title && <Text style={styles.titlebtn,{color: disabled ? 'black' : 'white',paddingLeft:loading?5:0 , fontSize:RFValue(14,680),}}>{loading?'Please Wait..': title}</Text>}

      </View>

      </TouchableOpacity>
  );
};

export default CustomButton;
