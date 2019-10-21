import React from 'react';

const View = ({ onMessageChange, message, onSubmit, onKeyPress }) => {
  return (
    <div>
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
    </div>
  );
};

export default View;
