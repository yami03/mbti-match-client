import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  faUserCircle,
  faComment,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TabList.scss';

const TabList = () => (
  <nav className="tab-list">
    <ul>
      <li>
        <NavLink to="/profile" activeClassName="selected">
          <FontAwesomeIcon icon={faUserCircle} />
        </NavLink>
      </li>
      <li>
        <NavLink to="/users/list" activeClassName="selected">
          <FontAwesomeIcon icon={faUserFriends} />
        </NavLink>
      </li>
      <li>
        <NavLink to="/chats" activeClassName="selected">
          <FontAwesomeIcon icon={faComment} />
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default TabList;
