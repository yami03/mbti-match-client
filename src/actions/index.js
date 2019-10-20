import {
  CHANGE_REGISTER_FORM,
  CHANGE_LOGIN_FORM,
  GET_GEOLOCATION,
  SUCCESS_USER_AUTHENTICATION,
  LOAD_USERS_SUCCESS,
  INCREASE_CHOICE_COUNT,
  RESET_CHOICE_COUNT,
  INCREASE_PAGE_INDEX
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

export const loadUsersSuccess = data => {
  return {
    type: LOAD_USERS_SUCCESS,
    users: data.users,
    totalUserCount: data.totalUserCount
  };
};

export const increaseChoiceCount = () => {
  return {
    type: INCREASE_CHOICE_COUNT
  };
};

export const resetChoiceCount = () => {
  return {
    type: RESET_CHOICE_COUNT
  };
};

export const increasePageIndex = () => {
  return {
    type: INCREASE_PAGE_INDEX
  };
};
