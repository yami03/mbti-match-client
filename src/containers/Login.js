import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from '../components/Login/LoginForm';
import { changeLoginForm } from '../actions';
import { postLogin } from '../api';

const Login = () => {
  const [error, setError] = useState('');
  const login = useSelector(state => state.login);
  const dispatch = useDispatch();

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
    //this.props.history.push('/profile');
    if (result.message) setError(result.message);
    console.log('result' + result);
  };

  return (
    <LoginForm
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      login={login}
    />
  );
};

export default Login;
