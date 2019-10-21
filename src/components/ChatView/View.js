import React from 'react';
import './View.scss';

const View = ({ chats, user }) => {
  const randerChat = chats.messages.map((chat, index) => {
    const position = chat.speaker !== user.id ? 'left' : 'right';
    const sender = chat.speaker === user.id ? user : chats.partner;

    return (
      <li className={position} key={index}>
        <img src={sender.profileImage} className="profile-image" />
        {sender === chats.partner && <p>{sender.name}</p>}
        <p>{chat.content}</p>
      </li>
    );
  });
  return (
    <div className="messages">
      <ul>{randerChat}</ul>
    </div>
  );
};

export default View;
