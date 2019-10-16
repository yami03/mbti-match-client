import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

const LoginForm = ({ onSubmit, onChange, login, error }) => (
  <div className="loginForm form">
    <p className="error">{error}</p>
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

export default LoginForm;
