import {
  CREATE_AUTH_STATE,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionType/index.js';

const auth = (state, {type, payload}) => {
  switch (type) {
    case LOGIN_LOADING:
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case LOGIN_SUCCESS:
      console.log("11111111111111");
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
        
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CREATE_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };

    default:
      return state;
  }
};

export default auth;
