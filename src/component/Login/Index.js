import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import {REGISTER, SETTINGS} from '../../constants/routeNames';
import Message from '../common/Message';

const LoginComponent = ({error, loading, onChange, onSubmit}) => {
  const {navigate} = useNavigation();
  const [isSecureText, setIsSecureText] = useState(true);
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
        <Text style={styles.subTitle}>Please login here</Text>

        <View style={styles.form}>
          {error && !error.error && (
            <Message
              danger
              onDismiss={() => {}}
              message="invalid credentials "
            />
          )}

          {error?.error && <Message danger onDismiss message={error?.error} />}

          {/* user input text */}
          <Input
            label="Username:"
            placeholder="Enter username"
            icon={<Text></Text>}
            iconPostion="right"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />

          {/* password input text */}
          <Input
            label="Password: "
            secureTextEntry={isSecureText}
            placeholder="Enter password"
            iconPostion="right"
            icon={
              <TouchableOpacity onPress={() => setIsSecureText(prev => {return !prev;})}>
                <Text>{isSecureText ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />

          {/* submit button  */}
          <CustomButton
            disabled={loading}
            loading={loading}
            onPress={onSubmit}
            primary
            title="Login"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
