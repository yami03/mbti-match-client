import React from 'react';
import './View.scss';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile = ({ user }) => {
  const { profileImage, name, mbti, likeMe, description } = user;
  return (
    <div className="profile-area">
      <img src={profileImage} alt="profile" className="profile-image" />
      <p>
        <span className="name">{name}</span>
        <span className="mbti">{mbti.type}</span>
      </p>
      <p className="likes">
        <FontAwesomeIcon icon={faHeart} />
        <span className="num">{likeMe.length}</span>
      </p>
      {description && <pre className="description">{description}</pre>}
    </div>
  );
};

export default Profile;
