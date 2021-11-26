import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Container from '../commen/Container';
import CustomButton from '../commen/CustomButton';
import Input from '../commen/Input';
import styles from './styles';
import {LOGIN, REGISTER} from '../../constants/routeNames';

const SignupComponent = ({onChange, onSubmit, form, error}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create new Account</Text>
        <View style={styles.form}>
          {/* user input text */}
          <Input
            label="Username:"
            placeholder="Enter username"
            icon={<Text></Text>}
            iconPostion="right"
            onChangeText={value => {
              onChange({name: 'userName', value: value});
            }}
            error={error.userName}
          />
          <Input
            label="First name:"
            placeholder="Enter username"
            icon={<Text></Text>}
            iconPostion="right"
            onChangeText={value => {
              onChange({name: 'firstName', value: value});

            }}
            error={error.firstName}
          />

          <Input
            label="Last Name:"
            placeholder="Enter username"
            icon={<Text></Text>}
            iconPostion="right"
            onChangeText={value => {
              onChange({name: 'lastName', value: value});
            }}
            error={error.lastName}
          />
          <Input
            label="Email:"
            placeholder="Enter username"
            icon={<Text></Text>}
            iconPostion="right"
            onChangeText={value => {
              onChange({name: 'email', value: value});
            }}
            error={error.email}
          />

          {/* password input text */}
          <Input
            label="Password: "
            secureTextEntry={true}
            placeholder="Enter password"
            icon={<Text>Show</Text>}
            onChangeText={value => {
              onChange({name: 'password', value: value});
            }}
            error={error.password}
            iconPostion="right"
          />

          {/* submit button  */}
          <CustomButton onPress={onSubmit} primary title="Sign Up" />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>I have already account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default SignupComponent;
