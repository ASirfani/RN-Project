import {useNavigation} from '@react-navigation/core';
import React, {useContext, useState} from 'react';

import LoginComponent from '../../component/Login/Index';
import { GlobleContext } from '../../context/Provider';
import loginUser from '../../context/actions/auth/loginUser'

const Login = () => {
  const [form, setForm] = useState({});
  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobleContext);


  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
