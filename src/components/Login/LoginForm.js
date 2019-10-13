import React from 'react';

const LoginForm = ({ onSubmit, onChange, login }) => {
  return (
    <div className="loginForm form">
      <form onSubmit={onSubmit}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          required
          value={login.email}
          onChange={onChange}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          required
          value={login.password}
          onChange={onChange}
        />
        <button>로그인</button>
      </form>
    </div>
  );
};

export default LoginForm;
