import React, {useState} from 'react';
import {View, Text ,ActivityIndicator} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import styles from './styles';
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

      { title && <Text style={{color: disabled ? 'black' : 'white',paddingLeft:loading?5:0}}>{title}</Text>}

      </View>

      </TouchableOpacity>
  );
};

export default CustomButton;
