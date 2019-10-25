import React from 'react';
import { faKissWinkHeart, faMeh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ChoiceTab.scss';

const Tab = ({ onLikeClick, onUnLikeClick }) => {
  return (
    <div className="choice-tab">
      <ul>
        <li>
          <button onClick={onLikeClick}>
            <FontAwesomeIcon icon={faKissWinkHeart} />
            <span>Like</span>
          </button>
        </li>
        <li>
          <button onClick={onUnLikeClick}>
            <FontAwesomeIcon icon={faMeh} />
            <span>Pass</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Tab;
