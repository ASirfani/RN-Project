import React from 'react';
import {View, Text ,Image} from 'react-native';
import styles from './styles';
import Container from '../common/Container';
import Input from '../common/Input';
import CountryPicker from 'react-native-country-picker-modal';
import CustomButton from '../common/CustomButton';
import { DEFAULT_IMAGE_URI } from '../../constants/gerenel';
const CreactContactComponent = () => {
  return (
    <View style={styles.container}>
      <Container>
        
        <Image  width={150} height={150} source={{uri:DEFAULT_IMAGE_URI}} style={styles.imageView}/>
        <Text style={styles.chooseImage}>Choose image</Text>
        <Input label="First name" placeholder="Enter your first name." />
        <Input label="Last name" placeholder="Enter your last name." />
        <Input

        style={{paddingLeft: 10}}
          iconPostion="left"
          icon={
            <CountryPicker
            withFilter
            withFlag
            withCountryNameButton={false}
            withCallingCode
            withEmoji
            onSelect={()=>{}}
            />
          }
          label="Phonenumber"
          placeholder="Enter your phone number"
        />

        <CustomButton primary title="submit" />
      </Container>
    </View>
  );
};

export default CreactContactComponent;
