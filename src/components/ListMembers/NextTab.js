import React from 'react';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NextTab.scss';

const NextTab = ({ onNextClick }) => (
  <div className="next-tab">
    <button onClick={onNextClick}>
      next
      <FontAwesomeIcon icon={faHandPointRight} />
    </button>
  </div>
);

export default NextTab;
