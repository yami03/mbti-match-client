import React from 'react';
import { Link } from 'react-router-dom';
import './List.scss';

const List = ({ chats }) => {
  const renderList = chats.map((chat, index) => (
    <li key={index}>
      <Link to={`/chat/room/${chat._id}`}>
        <div className="left">
          <img src={chat.partner.profile_image} />
        </div>
        <div className="right">
          <p className="name">{chat.partner.name}</p>
          <p>마지막 메세지</p>
        </div>
      </Link>
    </li>
  ));

  return (
    <div className="chat-list">
      <ul>{renderList}</ul>
    </div>
  );
};

export default List;
