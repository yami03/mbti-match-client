import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

const LoginForm = ({ onSubmit, onChange, login, error }) => {
  let renderErrors = '';
  if (Array.isArray(error)) {
    renderErrors = error.map(error => <p className="error">{error}</p>);
  } else {
    renderErrors = <p className="error">{error}</p>;
  }
  return (
    <div className="loginForm form">
      <div className="errors">{renderErrors}</div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          maxLength="80"
          value={login.email}
          onChange={onChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={login.password}
          onChange={onChange}
          required
        />
        <button>Login</button>
      </form>
      <Link to="/signup" className="button">
        Sign up
      </Link>
    </div>
  );
};

export default LoginForm;
