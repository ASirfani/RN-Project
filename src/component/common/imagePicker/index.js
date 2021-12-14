import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../assets/themes/Color';
import Icon from '../../common/Icon';
import styles from './styles';
import ImagePickerCropper from 'react-native-image-crop-picker'; 

const ImagePicker = React.forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Take from camera',
      icon: <Icon color={colors.gary} size={21} name="camera" />,
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        }).then((image) => {onFileSelected(image);}).catch((err)=>{
            console.log("errPicture of picker:", err);
        });
        
      },
    },
    {
      name: 'Choose from Gallery',
      icon: <Icon name="image" color={colors.gary} size={21} />,
      onPress: () => {
        ImagePickerCropper.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            freeStyleCropEnabled: true,
          }).then((image) => {onFileSelected(image);}).catch((err)=>{
              console.log("errPicture of picker:", err);
          });
      },
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
          <TouchableOpacity key={name} onPress={onPress} style={styles.pickerOption}>
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
