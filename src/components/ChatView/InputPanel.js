import React from 'react';
import './InputPanel.scss';

const View = ({ onMessageChange, message, onSubmit, onKeyPress }) => {
  return (
    <div className="input-message">
      <input
        type="text"
        className="input-text"
        onChange={onMessageChange}
        value={message}
        onKeyPress={onKeyPress}
      />
      <button onClick={onSubmit}>전송</button>
    </div>
  );
};

export default View;
