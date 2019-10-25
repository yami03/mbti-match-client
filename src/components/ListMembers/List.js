import React from 'react';
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';
import './List.scss';

const List = ({ partner, view, matchData, myMbti, myName }) => {
  const figure = matchData.match(/\d+/)[0] * 25;

  return (
    <div className={`choice-list show-${view}`}>
      {partner && (
        <>
          <div className="front card">
            <img
              src={partner.profileImage}
              className="profile-image"
              alt="profile"
            />
            <div className="info">
              <p className="name">{partner.name}</p>
              <pre className="description">{partner.description}</pre>
            </div>
          </div>
          <div className={`back card ${matchData}`}>
            <p className="title">
              내 MBTI와의
              <br /> 적합성은?
            </p>
            <ul className="emoji-list">
              <li>
                <div className="emoji emoji--haha">
                  <div className="emoji__face">
                    <div className="emoji__eyes"></div>
                    <div className="emoji__mouth">
                      <div className="emoji__tongue"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="emoji emoji--yay">
                  <div className="emoji__face">
                    <div className="emoji__eyebrows"></div>
                    <div className="emoji__mouth"></div>
                  </div>
                </div>
              </li>
              <li>
                <div className="emoji emoji--wow">
                  <div className="emoji__face">
                    <div className="emoji__eyebrows"></div>
                    <div className="emoji__eyes"></div>
                    <div className="emoji__mouth"></div>
                  </div>
                </div>
              </li>
              <li>
                <div className="emoji emoji--sad">
                  <div className="emoji__face">
                    <div className="emoji__eyebrows"></div>
                    <div className="emoji__eyes"></div>
                    <div className="emoji__mouth"></div>
                  </div>
                </div>
              </li>
              <li>
                <div className="emoji emoji--angry">
                  <div className="emoji__face">
                    <div className="emoji__eyebrows"></div>
                    <div className="emoji__eyes"></div>
                    <div className="emoji__mouth"></div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="figure">
              <CountUp start={0} end={figure} duration={3} />
              <span>%</span>
            </div>

            <ul className="mbti-info">
              <li>
                <p className="name">{myName}</p>
                <p className="mbti">{myMbti}</p>
              </li>
              <li className="arrow">
                <FontAwesomeIcon icon={faArrowsAltH} />
              </li>
              <li>
                <p className="name">{partner.name}</p>
                <p className="mbti">{partner.mbti.type}</p>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default List;
