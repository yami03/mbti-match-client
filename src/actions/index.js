import {
  CHANGE_REGISTER_FORM,
  CHANGE_LOGIN_FORM,
  GET_GEOLOCATION,
  SUCCESS_USER_AUTHENTICATION,
  LOAD_USERS_SUCCESS,
  INCREASE_CHOICE_COUNT,
  RESET_CHOICE_COUNT,
  INCREASE_PAGE_INDEX,
  LOAD_CHATS_LIST_SUCCESS,
  ENTER_CHAT_ROOM,
  ADD_NEW_MESSAGE,
  LEAVE_ROOM
} from '../contants/actionTypes';

export const changeRegisterForm = ({ name, value }) => ({
  type: CHANGE_REGISTER_FORM,
  name,
  value
});

export const changeLoginForm = ({ name, value }) => ({
  type: CHANGE_LOGIN_FORM,
  name,
  value
});

export const getGeolocation = (state, location) => ({
  type: GET_GEOLOCATION,
  state,
  location
});

export const successUserAuthentication = user => ({
  type: SUCCESS_USER_AUTHENTICATION,
  user
});

export const loadUsersSuccess = data => ({
  type: LOAD_USERS_SUCCESS,
  users: data.users,
  totalUserCount: data.totalUserCount
});

export const increaseChoiceCount = () => ({
  type: INCREASE_CHOICE_COUNT
});

export const resetChoiceCount = () => ({
  type: RESET_CHOICE_COUNT
});

export const increasePageIndex = () => ({
  type: INCREASE_PAGE_INDEX
});

export const loadChatsListSuccess = chats => ({
  type: LOAD_CHATS_LIST_SUCCESS,
  chats
});

export const addNewMessage = newMessage => ({
  type: ADD_NEW_MESSAGE,
  newMessage
});

export const enterChatRoom = chat => ({
  type: ENTER_CHAT_ROOM,
  chat
});

export const leaveRoom = () => ({
  type: LEAVE_ROOM
});
