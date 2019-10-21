import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tab from '../components/Tab/TabList';
import List from '../components/ChatList/List';
import { loadChatsListSuccess } from '../actions';
import { getChats } from '../api/index';

const ChatList = () => {
  const { chats } = useSelector(state => ({
    chats: state.chats
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const getchatList = async () => {
      const chatList = await getChats();
      console.log(chatList);
      dispatch(loadChatsListSuccess(chatList.chats));
    };

    getchatList();
  }, []);

  return (
    <>
      <Tab />
      {chats.length && <List chats={chats} />}
    </>
  );
};

export default ChatList;
