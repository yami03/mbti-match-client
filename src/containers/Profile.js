import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Tab from '../components/Tab/TabList';
import View from '../components/Profile/View';
import { getLogout } from '../api';
import { logoutUser } from '../actions';

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => ({
    user: state.user
  }));

  const onLogoutClick = async () => {
    getLogout().then(response => {
      dispatch(logoutUser());
    });
  };

  return (
    <>
      <Tab />
      <div className="content">
        <View user={user} />
        <Link to="/profile/edit" className="link-button">
          수정하기
        </Link>
        <button href="#none" onClick={onLogoutClick} className="link-button">
          로그아웃
        </button>
      </div>
    </>
  );
};

export default Profile;
