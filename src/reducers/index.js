import {
  CHANGE_LOGIN_FORM,
  CHANGE_REGISTER_FORM,
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
import socket from '../lib/socket';

const initialState = {
  register: {
    email: '',
    mbti: '',
    password: '',
    passwordConfirm: '',
    name: '',
    location: {
      latitude: 0,
      longitude: 0
    },
    gender: '',
    description: ''
  },
  login: {
    email: '',
    password: '',
    location: {
      latitude: 0,
      longitude: 0
    }
  },
  user: {
    id: '',
    mbti: {},
    name: '',
    profileImage: '',
    dob: '',
    location: {
      latitude: 0,
      longitude: 0
    },
    gender: '',
    description: '',
    dislikeUsers: [],
    likeMe: [],
    chats: [],
    mailConfirm: false
  },
  edit: {
    mbti: '',
    name: '',
    description: ''
  },
  isAuthenticated: false,
  users: [],
  totalUserCount: 0,
  totalChoiceCount: 0,
  choiceCount: 0,
  pageIndex: 0,
  chats: [],
  client: socket(),
  currentRoomChat: {},
  isMainLoading: true,
  hasUsersNotice: true,
  hasChatsNotice: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_REGISTER_FORM:
      return Object.assign({}, state, {
        register: Object.assign({}, state.register, {
          [action.name]: action.value
        })
      });
    case CHANGE_EDIT_FORM:
      return Object.assign({}, state, {
        edit: Object.assign({}, state.edit, {
          [action.name]: action.value
        })
      });
    case CHANGE_LOGIN_FORM:
      return Object.assign({}, state, {
        login: Object.assign({}, state.login, {
          [action.name]: action.value
        })
      });
    case CONFIRMED_NOT_AUTHENTICATED:
      return Object.assign({}, state, {
        isMainLoading: false
      });
    case GET_GEOLOCATION:
      return Object.assign({}, state, {
        [action.state]: Object.assign({}, state[action.state], {
          location: action.location
        })
      });
    case SUCCESS_USER_AUTHENTICATION:
      return Object.assign({}, state, {
        edit: action.edit,
        user: action.user,
        isAuthenticated: true,
        isMainLoading: false,
        login: initialState.login
      });
    case SUCCESS_REGISTER_MEMBER:
      return Object.assign({}, state, {
        edit: action.edit,
        user: action.user,
        register: initialState.register,
        isAuthenticated: action.isAuthenticated
      });
    case SUCCESS_USER_DATA_UPDATE:
      return Object.assign({}, state, {
        user: action.user
      });
    case LOAD_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: action.users,
        totalUserCount: action.totalUserCount,
        totalChoiceCount: 0,
        hasUsersNotice: false
      });
    case ADD_NEW_USERS_LIST:
      return Object.assign({}, state, {
        users: action.users,
        hasUsersNotice: false
      });
    case USER_LOGOUT:
      return Object.assign({}, state, {
        users: initialState.users,
        isAuthenticated: false
      });
    case INCREASE_CHOICE_COUNT:
      return Object.assign({}, state, {
        totalChoiceCount: state.totalChoiceCount + 1,
        choiceCount: state.choiceCount + 1
      });
    case RESET_CHOICE_COUNT:
      return Object.assign({}, state, {
        choiceCount: 0
      });
    case INCREASE_PAGE_INDEX:
      return Object.assign({}, state, {
        pageIndex: state.pageIndex + 1
      });
    case SELECTED_ALL_MEMBERS:
      return Object.assign({}, state, {
        hasUsersNotice: true
      });
    case LOAD_CHATS_LIST_SUCCESS:
      return Object.assign({}, state, {
        chats: action.chats,
        hasChatsNotice: false
      });
    case ENTER_CHAT_ROOM:
      return Object.assign({}, state, {
        currentRoomChat: action.chat
      });
    case ADD_NEW_MESSAGE:
      return Object.assign({}, state, {
        currentRoomChat: Object.assign({}, state.currentRoomChat, {
          messages: [...state.currentRoomChat.messages, action.newMessage]
        })
      });
    case LEAVE_ROOM:
      return Object.assign({}, state, {
        currentRoomChat: {}
      });
    case NONE_CHATS:
      return Object.assign({}, state, {
        hasChatsNotice: true
      });
    case LEAVE_MEMBERS_LIST:
      return Object.assign({}, state, {
        users: [],
        totalUserCount: 0,
        totalChoiceCount: 0,
        choiceCount: 0,
        pageIndex: 0,
        hasUsersNotice: true
      });
    default:
      return state;
  }
}

export default reducer;
