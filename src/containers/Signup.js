import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SignupForm from '../components/Signup/SignupForm';
import { changeRegisterForm } from '../actions';
import { postSignup } from '../api';

const Signup = () => {
  const [error, setError] = useState('');
  const register = useSelector(state => state.register);
  const dispatch = useDispatch();

  const onChange = ev => {
    const { value, name } = ev.target;
    dispatch(
      changeRegisterForm({
        name,
        value
      })
    );
  };

  const onSubmit = async ev => {
    ev.preventDefault();
    const result = await postSignup(register);
    if (result.message) setError(result.message);
    console.log(result);
  };

  return (
    <SignupForm
      register={register}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default Signup;
