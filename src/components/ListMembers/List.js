import React from 'react';
import './List.scss';

const List = ({ partner, view, matchData }) => {
  const figure = matchData.match(/\d+/)[0] * 25;

  return (
    <div className={`choice-list show-${view}`}>
      {partner && (
        <>
          <div className="front card">
            <img src={partner.profileImage} className="profile-image" />
            <div className="info">
              <p className="name">{partner.name}</p>
              <p className="description">{partner.description}</p>
            </div>
          </div>
          <div className={`back card ${matchData}`}>
            <p>내 MBTI와의 적합성은?</p>
            {figure}
          </div>
        </>
      )}
    </div>
  );
};

export default List;
