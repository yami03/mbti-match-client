import {
  CHANGE_REGISTER_FORM,
  CHANGE_LOGIN_FORM,
  GET_GEOLOCATION,
  SUCCESS_USER_AUTHENTICATION
} from '../contants/actionTypes';

export const changeRegisterForm = ({ name, value }) => {
  return {
    type: CHANGE_REGISTER_FORM,
    name,
    value
  };
};

export const changeLoginForm = ({ name, value }) => {
  return {
    type: CHANGE_LOGIN_FORM,
    name,
    value
  };
};

export const getGeolocation = (state, location) => {
  return {
    type: GET_GEOLOCATION,
    state,
    location
  };
};

export const successUserAuthentication = user => {
  return {
    type: SUCCESS_USER_AUTHENTICATION,
    user
  };
};
