import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputPanel from '../components/ChatView/InputPanel';
import View from '../components/ChatView/View';
import BackTab from '../components/BackTab/BackTab';
import { useParams } from 'react-router-dom';
import { getChat, postNewMessage } from '../api';
import { enterChatRoom, addNewMessage, leaveRoom } from '../actions';
import { objectKeysToCamelCase } from '../utility/formattingData';

const ChatView = () => {
  const [message, setMessage] = useState('');
  const { client, user, currentRoomChat } = useSelector(state => ({
    client: state.client,
    user: state.user,
    currentRoomChat: state.currentRoomChat
  }));
  const dispatch = useDispatch();
  const { roomId } = useParams();
  const userId = user.id;

  useEffect(() => {
    const setChat = async () => {
      const chat = await getChat(roomId);
      dispatch(enterChatRoom(objectKeysToCamelCase(chat)));
    };

    setChat();

    client.joinRoom({ roomId, userId });

    client.receiveNewMessage(data => {
      dispatch(
        addNewMessage({
          createAt: new Date(),
          content: data.message,
          speaker: data.userId
        })
      );
    });

    return () => {
      client.leaveRoom(roomId);
      dispatch(leaveRoom());
    };
  }, []);

  const onMessageChange = ev => {
    const { value } = ev.currentTarget;
    setMessage(value);
  };

  const handleSubmit = () => {
    if (!message) return;
    client.sendMessage({ roomId, userId, message });
    postNewMessage(roomId, { message });
    setMessage('');
  };

  const handleKeyPress = ev => {
    if (ev.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      {currentRoomChat.hasOwnProperty('partner') && (
        <BackTab title={currentRoomChat.partner.name || ''} />
      )}
      <View chats={currentRoomChat} user={user} />
      <InputPanel
        onMessageChange={onMessageChange}
        message={message}
        onKeyPress={handleKeyPress}
        onSubmit={handleSubmit}
        chat={currentRoomChat}
      />
    </>
  );
};

export default ChatView;
