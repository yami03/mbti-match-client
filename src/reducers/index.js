import {
  CHANGE_LOGIN_FORM,
  CHANGE_REGISTER_FORM,
  GET_GEOLOCATION,
  SUCCESS_USER_AUTHENTICATION,
  LOAD_USERS_SUCCESS,
  INCREASE_CHOICE_COUNT,
  RESET_CHOICE_COUNT,
  INCREASE_PAGE_INDEX
} from '../contants/actionTypes';

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
    gender: ''
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
  isAuthenticated: false,
  totalUserCount: 0,
  users: [],
  choiceCount: 0,
  pageIndex: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_REGISTER_FORM:
      return Object.assign({}, state, {
        register: Object.assign({}, state.register, {
          [action.name]: action.value
        })
      });
    case CHANGE_LOGIN_FORM:
      return Object.assign({}, state, {
        login: Object.assign({}, state.login, {
          [action.name]: action.value
        })
      });
    case GET_GEOLOCATION:
      return Object.assign({}, state, {
        [action.state]: Object.assign({}, state[action.state], {
          location: action.location
        })
      });
    case SUCCESS_USER_AUTHENTICATION:
      return Object.assign({}, state, {
        user: action.user,
        isAuthenticated: true
      });
    case LOAD_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: action.users,
        totalUserCount: action.totalUserCount
      });
    case INCREASE_CHOICE_COUNT:
      return Object.assign({}, state, {
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
    default:
      return state;
  }
}

export default reducer;
