import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/formLoginActions.js';
import { loginUser } from '../actions/userActions.js';

const Login = ({ formLogin, updateLoginForm, loginUser }) => {

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
    loginUser(formLogin);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={formLogin.email}
          onChange={handleChange}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          value={formLogin.password}
          onChange={handleChange}
          placeholder="password"
        />
        <input type="submit" value="Login" />
      </form>
      {/* <span style={{ color: "red" }}>{this.state.error}</span> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formLogin: state.formLogin
  };
};

export default connect(mapStateToProps, { updateLoginForm, loginUser })(Login);