import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tab from '../components/Tab/TabList';
import List from '../components/ListMembers/List';
import ChoiceTab from '../components/ListMembers/ChoiceTab';
import NextTab from '../components/ListMembers/NextTab';
import Notice from '../components/Notice/Notice';
import Popup from '../components/Popup/Popup';
import { getUsers, getLikeMe, addLikeUser, postChat } from '../api';
import { objectKeysToCamelCase } from '../utility/formattingData';
import {
  loadUsersSuccess,
  increaseChoiceCount,
  resetChoiceCount,
  increasePageIndex,
  noticeSelectedAll,
  addNewUsers,
  leaveMemberList
} from '../actions';

const ListMembers = () => {
  const [view, setView] = useState('front');
  const [matchData, setMatchData] = useState('level0');
  const [viewPopup, setViewPopup] = useState(false);
  const [notice, setnotice] = useState('유저 정보를 가져오고 있습니다.🙏');
  const dispatch = useDispatch();
  const {
    users: partners,
    user,
    pageIndex,
    hasUsersNotice,
    choiceCount,
    totalUserCount,
    totalChoiceCount
  } = useSelector(state => ({
    users: state.users,
    user: state.user,
    pageIndex: state.pageIndex,
    hasUsersNotice: state.hasUsersNotice,
    choiceCount: state.choiceCount,
    totalUserCount: state.totalUserCount,
    totalChoiceCount: state.totalChoiceCount
  }));

  const LIMIT = 5;

  useEffect(() => {
    const setUsers = async () => {
      const result = await getUsers({ limit: LIMIT, pageIndex: 0 });

      if (!result.total_user_count) {
        setnotice('모든 회원을 선택 하셨습니다~! 고생하셨습니다!👏');
        dispatch(noticeSelectedAll());
        return;
      }

      dispatch(loadUsersSuccess(objectKeysToCamelCase(result)));
    };

    setUsers();
    return () => {
      dispatch(leaveMemberList());
    };
  }, [dispatch]);

  const onLikeClick = async () => {
    const likeMeList = await getLikeMe();
    if (likeMeList.includes(partners[choiceCount].id)) {
      await postChat(partners[choiceCount].id);
      setViewPopup(true);
    } else {
      addLikeUser(partners[choiceCount].id);
    }

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
    if (totalUserCount === totalChoiceCount + 1) {
      setnotice('모든 회원을 선택 하셨습니다~! 고생하셨습니다!');
      dispatch(noticeSelectedAll());
      return;
    }

    // if (choiceCount === LIMIT - 1 || choiceCount + 2 === partners.length) {
    //   let result = await getUsers({ limit: LIMIT, pageIndex: pageIndex + 1 });

    //   if (!result.total_user_count || !partners.length) {
    //     setnotice('모든 회원을 선택 하셨습니다~! 고생하셨습니다!');
    //     dispatch(noticeSelectedAll());
    //     return;
    //   }

    //   console.log('users' + result.length);
    //   // result = await objectKeysToCamelCase(result);
    //   dispatch(addNewUsers(result));
    //   dispatch(resetChoiceCount());
    //   dispatch(increasePageIndex());
    //   setView('front');
    //   setMatchData('level0');
    //   return;
    // }

    dispatch(increaseChoiceCount());
    setView('front');
    setMatchData('level0');
  };

  const onPopupClick = () => {
    setViewPopup(false);
  };

  return (
    <div className="page-wrap">
      <Tab />
      {hasUsersNotice ? (
        <Notice notice={notice} />
      ) : (
        <>
          <List
            partner={partners[choiceCount]}
            view={view}
            matchData={matchData}
            myMbti={user.mbti.type}
            myName={user.name}
          />
          {(view === 'front' && (
            <ChoiceTab
              onLikeClick={onLikeClick}
              onUnLikeClick={onUnLikeClick}
            />
          )) || <NextTab onNextClick={onNextClick} />}
          {viewPopup && <Popup onPopupClick={onPopupClick} />}
        </>
      )}
    </div>
  );
};

export default ListMembers;
