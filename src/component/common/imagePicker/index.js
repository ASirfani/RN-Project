import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../assets/themes/Color';
import Icon from '../../common/Icon';
import styles from './styles';

const ImagePicker = React.forwardRef(({}, ref) => {
  const options = [
    {
      name: 'Take from camera',
      icon: <Icon color={colors.gary} size={21} name="camera" />,
      onPress: () => {},
    },
    {
      name: 'Choose from Gallery',
      icon: <Icon name="image" color={colors.gary} size={21} />,
      onPress: () => {},
    },
  ];
  return (
    <RBSheet
      ref={ref}
      height={190}
      openDuration={250}
      dragFromTopOnly
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}>
      <View style={styles.optionsWrapper}>
        {options.map(({name, onPress, icon}) => (
          <TouchableOpacity key={name} style={styles.pickerOption}>
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
