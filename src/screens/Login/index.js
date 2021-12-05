import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useContext, useState,useEffect} from 'react';

import LoginComponent from '../../component/Login/Index';
import { GlobleContext } from '../../context/Provider';
import loginUser from '../../context/actions/auth/loginUser'

const Login = () => {
  const [form, setForm] = useState({});
  const {params} = useRoute();
  const [justSignUp,setJustSignUp] = useState(false);

  useEffect(() => {
   
    if(params?.data){
      console.log("params: ", params);
      setJustSignUp(true);
      setForm({...form,userName:params.data.username});
    }
  }, [params])
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
    setJustSignUp(false);
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      error={error}
      loading={loading}
      justSignUp = {justSignUp}
    />
  );
};

export default Login;
