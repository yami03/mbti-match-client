import axios from 'axios';
axios.defaults.withCredentials = true;

const API = 'https://api.slaspace.com';

export const postSignup = (formData, registerData) => {
  return axios
    .post(`${API}/api/signup`, {
      ...registerData
    })
    .then(response => {
      return axios
        .put(`${API}/api/upload`, formData)
        .then(result => {
          return {
            data: result.data,
            error: ''
          };
        })
        .catch(error => {
          return {
            error: error.response.data.message || 'server error'
          };
        });
    })
    .catch(error => {
      return {
        error: error.response.data.message || 'server error'
      };
    });
};

export const getUser = () => {
  return axios
    .get(`${API}/api/auth/user`)
    .then(response => response.data)
    .catch(error => {
      return {
        error: error.response.data.message || 'server error'
      };
    });
};

export const postLogin = data => {
  return axios({
    url: `${API}/api/login`,
    method: 'POST',
    data
  })
    .then(response => {
      return {
        data: response.data,
        error: ''
      };
    })
    .catch(error => {
      return {
        error: error.response.data.message || 'server error'
      };
    });
};

export const getLogout = () => {
  return axios({
    url: `${API}/api/logout`,
    method: 'GET'
  }).catch(error => {
    console.log(error);
  });
};

export const getUsers = ({ limit, pageIndex }) => {
  return axios({
    url: `${API}/api/users?limit=${limit}&pageIndex=${pageIndex}`,
    method: 'GET'
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const addLikeUser = partnerId => {
  return axios({
    url: `${API}/api/users/likes/${partnerId}`,
    method: 'PUT'
  })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

export const getLikeMe = () => {
  return axios({
    url: `${API}/api/user/likes`,
    method: 'GET'
  })
    .then(response => {
      return response.data.likes_me;
    })
    .catch(error => {
      console.log(error);
    });
};

export const postChat = partnerId => {
  return axios({
    url: `${API}/api/chats/${partnerId}`,
    method: 'POST'
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getChats = () => {
  return axios({
    url: `${API}/api/chats`,
    method: 'GET'
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getChat = roomId => {
  return axios({
    url: `${API}/api/chats/${roomId}`,
    method: 'GET'
  })
    .then(response => {
      return response.data.chat;
    })
    .catch(error => {
      console.log(error);
    });
};

export const postNewMessage = (roomId, data) => {
  return axios({
    url: `${API}/api/chats/${roomId}`,
    method: 'PUT',
    data
  })
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const putUserInfo = (userData, formData = null) => {
  return axios
    .put(`${API}/api/user`, {
      ...userData
    })
    .then(response => {
      if (formData) {
        return axios
          .put('/api/upload', formData)
          .then(result => {
            return result.data.user;
          })
          .catch(error => {
            return {
              error: error.response.data.message || 'server error'
            };
          });
      } else {
        return response.data.user;
      }
    })
    .catch(error => {
      return {
        error: error.response.data.message || 'server error'
      };
    });
};
