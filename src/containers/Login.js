import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm';
import Logo from '../components/Logo/Logo';
import {
  changeLoginForm,
  getGeolocation,
  successUserAuthentication
} from '../actions';
import { postLogin } from '../api';
import { objectKeysToCamelCase } from '../utility/formattingData';

const Login = ({ history }) => {
  const [error, setError] = useState('');
  const login = useSelector(state => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPosition = () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    };

    getPosition()
      .then(position => {
        console.log(position.coords);
        dispatch(
          getGeolocation('login', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        );
      })
      .catch(error => {
        setError('현재 위치를 받아올 수 없습니다.');
      });
  }, [dispatch]);

  const onChange = ev => {
    const { value, name } = ev.target;
    dispatch(
      changeLoginForm({
        name,
        value
      })
    );
  };

  const onSubmit = async ev => {
    ev.preventDefault();
    const result = await postLogin(login);
    if (result.error) return setError(result.error);
    dispatch(
      successUserAuthentication(objectKeysToCamelCase(result.data.user))
    );
    history.push('/users/list');
  };

  return (
    <>
      <Logo />
      <LoginForm
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
        login={login}
      />
    </>
  );
};

export default withRouter(Login);
