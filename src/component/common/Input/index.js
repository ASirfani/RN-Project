import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Input = ({
  placeholder,
  onChangeText,
  icon,
  value,
  style,
  label,
  iconPostion,
  error,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && iconPostion) {
      if (iconPostion === 'left') {
        return 'row';
      } else if (iconPostion === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBoderColor = () => {
    if (error) {
      return 'blue';
    }
    if (focused) {
      return 'white';
    }else {
      return 'black';
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.labelText}>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          {
            borderColor: getBoderColor(),
            flexDirection: getFlexDirection(),
            alignItems: icon ? 'center' : 'baseline',
          },
        ]}>
        <View style={{fontSize:RFValue(14,680)}}>{icon && icon}</View>
        <TextInput
          fontSize= {RFValue(14,680)}
          placeholder={placeholder}
          style={[styles.inputText, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
