import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionType/index';
import axiosIntance from '../../../helper/axoicsInterceptor';

export default ({password, userName: username}) =>
  dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });

    axiosIntance 
      .post('/auth/login', {
        
        password,
        username,
        
      })
      .then(res => {
        console.log("res", res.data);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'somthing is happend'},
        });
      });
  };
