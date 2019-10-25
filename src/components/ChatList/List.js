import React from 'react';
import { Link } from 'react-router-dom';
import './List.scss';

const List = ({ chats }) => {
  const renderList = chats.map((chat, index) => (
    <li key={index}>
      <Link to={`/chat/room/${chat._id}`}>
        <div className="left">
          <img src={chat.partner.profile_image} alt="profile" />
        </div>
        <div className="right">
          <p className="name">{chat.partner.name}</p>
          {(chats[index].messages.length && (
            <p className="message">
              {chats[index].messages[chats[index].messages.length - 1].content}
            </p>
          )) || <p className="message none">먼저 인사해 보세요~!</p>}
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
