import React from 'react';
import './Popup.scss';

const Popup = ({ onPopupClick }) => (
  <div className="popup" onClick={onPopupClick}>
    <p>
      채팅방이
      <br /> 생성되었습니다.
    </p>
    <button>확인</button>
  </div>
);

export default Popup;
