import React, { useState, useEffect } from 'react';
import Tab from '../components/Tab/TabList';
import { useSelector, useDispatch } from 'react-redux';
import List from '../components/ListMembers/List';
import ChoiceTab from '../components/ListMembers/ChoiceTab';
import NextTab from '../components/ListMembers/NextTab';
import { getUsers, getLikeMe, addLikeUser } from '../api';
import { objectKeysToCamelCase } from '../utility/formattingData';
import {
  loadUsersSuccess,
  increaseChoiceCount,
  resetChoiceCount,
  increasePageIndex
} from '../actions';

const ListMembers = () => {
  const [view, setView] = useState('front');
  const [matchData, setMatchData] = useState('level0');
  const dispatch = useDispatch();
  const {
    users: partners,
    choiceCount,
    totalUserCount,
    user,
    pageIndex
  } = useSelector(state => ({
    user: state.user,
    users: state.users,
    choiceCount: state.choiceCount,
    totalUserCount: state.totalUserCount,
    pageIndex: state.pageIndex
  }));

  const LIMIT = 5;

  useEffect(() => {
    const setUsers = async () => {
      const result = await getUsers({ limit: LIMIT, pageIndex: 0 });
      dispatch(loadUsersSuccess(objectKeysToCamelCase(result)));
    };

    setUsers();
  }, [dispatch]);

  const onLikeClick = async () => {
    const likeMeList = await getLikeMe();
    if (likeMeList.includes(partners[choiceCount].id)) {
      alert('채팅방이 생성되었습니다.');
      return;
    }

    addLikeUser(partners[choiceCount].id);

    setView('back');
    const compatibility = Object.keys(user.mbti).find(key => {
      if (typeof user.mbti[key] === 'object') {
        return user.mbti[key].includes(partners[choiceCount].mbti.type);
      }
    });

    setMatchData(compatibility);
  };

  const onUnLikeClick = async () => {
    await addLikeUser(partners[choiceCount].id);

    onNextClick();
  };

  const onNextClick = async () => {
    if (choiceCount === LIMIT - 1) {
      const result = await getUsers({ limit: LIMIT, pageIndex: pageIndex + 1 });
      dispatch(loadUsersSuccess(objectKeysToCamelCase(result)));
      dispatch(resetChoiceCount());
      dispatch(increasePageIndex());
      setView('front');

      return;
    }

    dispatch(increaseChoiceCount());
    setView('front');
  };

  return (
    <div className="page-wrap">
      <Tab />
      {partners && (
        <List
          partner={partners[choiceCount]}
          view={view}
          matchData={matchData}
        />
      )}
      {(view === 'front' && (
        <ChoiceTab onLikeClick={onLikeClick} onUnLikeClick={onUnLikeClick} />
      )) || <NextTab onNextClick={onNextClick} />}
    </div>
  );
};

export default ListMembers;
