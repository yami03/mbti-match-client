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
  LEAVE_ROOM,
  CHANGE_EDIT_FORM,
  CONFIRMED_NOT_AUTHENTICATED,
  USER_LOGOUT,
  SUCCESS_USER_DATA_UPDATE,
  SUCCESS_REGISTER_MEMBER,
  SELECTED_ALL_MEMBERS,
  NONE_CHATS,
  ADD_NEW_USERS_LIST,
  LEAVE_MEMBERS_LIST
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

export const checkUserNotLogin = () => ({
  type: CONFIRMED_NOT_AUTHENTICATED
});

export const registerMember = ({ user, isAuthenticated }) => {
  return {
    type: SUCCESS_REGISTER_MEMBER,
    user,
    edit: {
      mbti: user.mbti.type,
      name: user.name,
      description: user.description
    },
    isAuthenticated
  };
};

export const logoutUser = () => ({
  type: USER_LOGOUT
});

export const changeEditForm = ({ name, value }) => ({
  type: CHANGE_EDIT_FORM,
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
  user,
  edit: {
    mbti: user.mbti.type,
    name: user.name,
    description: user.description
  }
});

export const changeUserData = user => ({
  type: SUCCESS_USER_DATA_UPDATE,
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

export const noticeSelectedAll = () => ({
  type: SELECTED_ALL_MEMBERS
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

export const noticeNoneChats = () => ({
  type: NONE_CHATS
});

export const addNewUsers = data => ({
  type: ADD_NEW_USERS_LIST,
  users: data.users
});

export const leaveMemberList = () => ({
  type: LEAVE_MEMBERS_LIST
});
