import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Container from '../../component/commen/Container';
import CustomButton from '../../component/commen/CustomButton';
import Input from '../../component/commen/Input';
import styles from './styles';
import {REGISTER} from '../../constants/routeNames'

const Index = () => {
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
        <Text style={styles.subTitle}>Please login here</Text>
        <View style={styles.form}>
          {/* user input text */}
          <Input
            label="Username:"
            placeholder="Enter username"
            icon={<Text></Text>}
            iconPostion="right"
            // error={'this field is require'}
          />

          {/* password input text */}
          <Input
            label="Password: "
            secureTextEntry={true}
            placeholder="Enter password"
            icon={<Text>Hide</Text>}
            iconPostion="right"
          />

          {/* submit button  */}
          <CustomButton primary title="submit" />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity onPress={()=>{
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

export default Index;
