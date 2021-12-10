
import { CREACT_CONTACT_FAIL, CREACT_CONTACT_LOADING, CREACT_CONTACT_SUCCESS } from '../../../../constants/actionType';
import axios from '../../../../helper/axoicsInterceptor';
  
  export default (form) => (dispatch) => (onSuccess) => {
    const requestPayload = {
      country_code: form.phoneCode || '',
      first_name: form.firstName || '',
      last_name: form.lastName || '',
      phone_number: form.phoneNumber || '',
      contact_picture: form.contactPicture || null,
      is_favorite: form.isFavorite || false,
    };
    dispatch({
      type: CREACT_CONTACT_LOADING,
    });
  
    axios
      .post('/contacts/',requestPayload)
      .then((res) => {
        dispatch({
          type: CREACT_CONTACT_SUCCESS,
          payload: res.data,
        });
        onSuccess();
      })
      .catch((err) => {
        dispatch({
          type: CREACT_CONTACT_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try again'},
        });
      });
  };
  




