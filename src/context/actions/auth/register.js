import {
  CREATE_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constants/actionType/index';
import axiosIntance from '../../../helper/axoicsInterceptor';

export const clearAuthState = ()=>dispatch=>{
  dispatch({
    type:CREATE_AUTH_STATE,

  });
}


export default ({
    email,
    password,
    userName: username,
    firstName: first_name,
    lastName: last_name,
  }) =>
  dispatch => (onSuccess)=>{
    dispatch({
      type: REGISTER_LOADING,
    })

    axiosIntance
      .post('/auth/register', {
        email,
        password,
        username,
        first_name,
        last_name,
      })
      .then(res => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'somthing is happend'},
        });
      });
  };
