import {useNavigation} from '@react-navigation/core';
import React ,{useState} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import {LOGIN} from '../../constants/routeNames';
import Message from '../common/Message';

const SignupComponent = ({
  onChange,
  onSubmit,
  form,
  loading,
  error,
  errors,
}) => {
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
        <Text style={styles.subTitle}>Create new Account</Text>
        <View style={styles.form}>
          {/* user input text */}

          {error?.error && (
            <Message danger retry retryFn={() => {}} message={error?.error} />
          )}
          <Input
            label="Username:"
            placeholder="Enter username"
            icon={<Text></Text>}
            iconPostion="right"
            error={errors.userName || error?.username?.[0]}
            onChangeText={value => {
              onChange({name: 'userName', value: value});
            }}
          />
          <Input
            label="First name:"
            placeholder="Enter username"
            icon={<Text></Text>}
            iconPostion="right"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />

          <Input
            label="Last Name:"
            placeholder="Enter username"
            icon={<Text></Text>}
            iconPostion="right"
            onChangeText={value => {
              onChange({name: 'lastName', value: value});
            }}
            error={errors.lastName || error?.last_name?.[0]}
          />
          <Input
            label="Email:"
            placeholder="Enter username"
            icon={<Text></Text>}
            iconPostion="right"
            onChangeText={value => {
              onChange({name: 'email', value: value});
            }}
            error={errors.email || error?.email?.[0]}
          />

          {/* password input text */}
          <Input
            label="Password: "
            secureTextEntry={isSecureText}
            placeholder="Enter password"
            icon={
              <TouchableOpacity
                onPress={() =>
                  setIsSecureText(prev => {
                    return !prev;
                  })
                }>
                <Text style={styles.showIcon}>{isSecureText ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            onChangeText={value => {
              onChange({name: 'password', value: value});
            }}
            error={errors.password || error?.password?.[0]}
            iconPostion="right"
          />

          {/* submit button  */}
          <CustomButton
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
            primary
            title="Sign Up"
          />

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
