import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateLoginForm } from '../actions/formLoginActions.js';
import { loginUser } from '../actions/userActions.js';

const Login = ({ history, formLogin, updateLoginForm, loginUser }) => {

  const handleChange = event => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...formLogin,
      [name]: value
    };
    updateLoginForm(updatedFormInfo);
  };

  const handleSubmit = event => {
    event.preventDefault();
    loginUser(formLogin)
    .then(response => {
      if (!response.error) {
        history.push('/');
      };
    });
  };

  return (
    <div className="Login">
      Log in to view and save your homes:
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={formLogin.email}
          onChange={handleChange}
          placeholder="email"
          required
        />
        <input
          type="password"
          name="password"
          value={formLogin.password}
          onChange={handleChange}
          placeholder="password"
          required
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formLogin: state.formLogin
  };
};

export default withRouter(connect(mapStateToProps, { updateLoginForm, loginUser })(Login));
