import axios from 'axios';

export const postSignup = (formData, registerData) => {
  return axios
    .post('/api/signup', {
      ...registerData
    })
    .then(response => {
      return axios
        .post('/api/upload', formData)
        .then(result => {
          return {
            data: result.data,
            error: ''
          };
        })
        .catch(err => {
          return {
            error: err.response.data.message || 'server error'
          };
        });
    })
    .catch(err => {
      return {
        error: err.response.data.message || 'server error'
      };
    });
};

export const getUser = () => {
  return axios
    .get('/api/auth/user')
    .then(response => response.data)
    .catch(err => {
      return {
        error: err.response.data.message || 'server error'
      };
    });
};

export const postLogin = data => {
  return axios({
    url: '/api/login',
    method: 'POST',
    data
  })
    .then(response => {
      return {
        data: response.data,
        error: ''
      };
    })
    .catch(err => {
      return {
        error: err.response.data.message || 'server error'
      };
    });
};
