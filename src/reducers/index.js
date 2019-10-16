import {
  CHANGE_LOGIN_FORM,
  CHANGE_REGISTER_FORM,
  GET_GEOLOCATION,
  SUCCESS_USER_AUTHENTICATION
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
    mbit: '',
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
  }
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
      debugger;
      return Object.assign({}, state, {
        user: action.user
      });
    default:
      return state;
  }
}

export default reducer;
