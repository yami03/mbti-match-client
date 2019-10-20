import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SignupForm from '../components/Signup/SignupForm';
import { changeRegisterForm, getGeolocation } from '../actions';
import { postSignup } from '../api';

const Signup = ({ history }) => {
  const [error, setError] = useState('');
  const [file, setFile] = useState(null);
  const register = useSelector(state => state.register);
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
          getGeolocation('register', {
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
      changeRegisterForm({
        name,
        value
      })
    );
  };

  const onFileChange = ev => {
    setFile(ev.target.files[0]);
  };

  const onSubmit = async ev => {
    ev.preventDefault();
    const passwordReg = new RegExp(
      '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,18}$'
    );
    const { email, password, passwordConfirm, name, mbti, gender } = register;

    if ([email, password, passwordConfirm, name, mbti, gender].includes('')) {
      setError('모두 입력하세요.');
      return;
    }

    if (!passwordReg.test(password)) {
      setError(
        '비밀번호는 숫자와 영문 포함 6자 이상 18자 이하로 입력해주세요.'
      );
      return;
    }

    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(
        changeRegisterForm({
          key: 'password',
          value: ''
        })
      );
      dispatch(
        changeRegisterForm({
          key: 'passwordConfirm',
          value: ''
        })
      );
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    const result = await postSignup(formData, register);
    history.push('/users/list');
  };

  return (
    <SignupForm
      register={register}
      onChange={onChange}
      onFileChange={onFileChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(Signup);
