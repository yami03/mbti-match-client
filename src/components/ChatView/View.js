import React, { useEffect } from 'react';
import './View.scss';

const View = ({ chats, user }) => {
  let chatList = null;
  let randerChat = '';

  useEffect(() => {
    const scrollToBottom = () => {
      chatList.scrollIntoView({ block: 'end' });
    };

    scrollToBottom();
  }, [chats, chatList]);

  if (chats.hasOwnProperty('messages')) {
    randerChat = chats.messages.map((chat, index) => {
      const position = chat.speaker !== user.id ? 'left' : 'right';
      const sender = chat.speaker === user.id ? user : chats.partner;

      return (
        <li
          key={index}
          className={`${position} ${
            sender === chats.partner ? 'partner' : 'me'
          }`}
        >
          <img
            src={sender.profileImage}
            className="profile-image"
            alt="profile"
          />
          {sender === chats.partner && <p className="name">{sender.name}</p>}
          <p className="talk">{chat.content}</p>
        </li>
      );
    });
  }
  return (
    <div className="messages">
      <ul ref={le => (chatList = le)}>{randerChat}</ul>
    </div>
  );
};

export default View;
