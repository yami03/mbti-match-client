import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tab from '../components/Tab/TabList';
import List from '../components/ChatList/List';
import Roading from '../components/Notice/Notice';
import { loadChatsListSuccess } from '../actions';
import { getChats } from '../api/index';

const ChatList = () => {
  const [notice, setnotice] = useState('채팅 정보를 가져오고 있습니다.🙏');
  const { chats, hasChatsNotice } = useSelector(state => ({
    chats: state.chats,
    hasChatsNotice: state.hasChatsNotice
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const getchatList = async () => {
      const chatList = await getChats();
      if (!chatList.chats.length) {
        setnotice('채팅 목록이 없습니다.😭');
        return;
      }
      dispatch(loadChatsListSuccess(chatList.chats));
    };

    getchatList();
  }, [dispatch]);

  return (
    <>
      <Tab />
      {hasChatsNotice ? <Roading notice={notice} /> : <List chats={chats} />}
    </>
  );
};

export default ChatList;
