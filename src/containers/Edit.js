import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeEditForm, changeUserData } from '../actions';
import EditForm from '../components/Edit/EditForm';
import BackTab from '../components/BackTab/BackTab';
import { objectKeysToCamelCase } from '../utility/formattingData';
import { putUserInfo } from '../api';

const Edit = ({ history }) => {
  const [error, setError] = useState('');
  const [file, setFile] = useState(null);
  const { edit, user } = useSelector(state => ({
    edit: state.edit,
    user: state.user
  }));
  const dispatch = useDispatch();

  const onChange = ev => {
    const { value, name } = ev.target;
    dispatch(
      changeEditForm({
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

    const { name, mbti } = edit;

    if ([name, mbti].includes('')) {
      setError('모두 입력하세요.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    const userData = !file
      ? await putUserInfo(edit)
      : await putUserInfo(edit, formData);

    dispatch(changeUserData(objectKeysToCamelCase(userData)));
    history.push('/profile');
  };

  return (
    <>
      <BackTab title={'Settings'} />
      <EditForm
        user={user}
        edit={edit}
        onChange={onChange}
        onFileChange={onFileChange}
        onSubmit={onSubmit}
        error={error}
      />
    </>
  );
};

export default withRouter(Edit);
