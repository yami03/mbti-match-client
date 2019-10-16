import axios from 'axios';

export const getMbtiRelationDiagram = () => {
  axios.get('http://localhost:4001/mbti').then(response => {
    return response.mbtiRelationDiagram;
  });
};

export const postSignup = (formData, registerData) => {
  return axios
    .post('/api/signup', {
      ...registerData
    })
    .then(rep => {
      axios
        .post('/api/upload', formData)
        .then(result => {
          return result.data;
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
