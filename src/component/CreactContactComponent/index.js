import React from 'react';
import {View, Text, Image, Switch} from 'react-native';
import styles from './styles';
import Container from '../common/Container';
import Input from '../common/Input';
import CountryPicker from 'react-native-country-picker-modal';
import CustomButton from '../common/CustomButton';

import {DEFAULT_IMAGE_URI} from '../../constants/gerenel';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from '../common/imagePicker/index';

const CreactContactComponent = ({
  loading,
  error,
  onChangeText,
  form,
  setForm,
  onSubmit,
  toggleSwitch,
  sheetRef,
  openSheet,
  closeSheet,
}) => {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          width={150}
          height={150}
          source={{uri: DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseImage}>Choose image</Text>
        </TouchableOpacity>
        <Input
          label="First name"
          placeholder="Enter your first name."
          error={error?.first_name?.[0]}
          onChangeText={value => {
            onChangeText({name: 'firstName', value: value});
          }}
        />
        <Input
          error={error?.last_name?.[0]}
          onChangeText={value => {
            onChangeText({name: 'lastName', value: value});
          }}
          label="Last name"
          placeholder="Enter your last name."
        />
        <Input
          style={{paddingLeft: 10}}
          iconPostion="left"
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.countryCode || undefined}
              withCountryNameButton={false}
              withCallingCodeButton
              withCallingCode
              withEmoji
              onSelect={v => {
                const phoneCode = v.callingCode[0];
                const cCode = v.cca2;
                setForm({...form, phoneCode, countryCode: cCode});
              }}
            />
          }
          label="Phone number"
          placeholder="Enter your phone number"
          error={error?.phone_number?.[0]}
          onChangeText={value => {
            onChangeText({name: 'phoneNumber', value: value});
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>Add to isFavorite</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={form.isFavorite ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={form.isFavorite}
          />
        </View>
        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="submit"
        />
      </Container>
      <ImagePicker ref={sheetRef} />
    </View>
  );
};

export default CreactContactComponent;
