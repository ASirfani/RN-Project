import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';

const Input = ({
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
    if (focused) {
      return 'white';
    }
    if (error) {
      return 'blue';
    } else {
      return 'black';
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          {
            borderColor: getBoderColor(),
            flexDirection: getFlexDirection(),
            alignItems: icon ? 'center' : 'baseline',
          },
        ]}>
        <View>{icon && icon}</View>
        <TextInput
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
