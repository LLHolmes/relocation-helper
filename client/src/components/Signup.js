import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateSignupForm } from '../actions/formSignupActions.js';
import { signupUser } from '../actions/userActions.js';

const Signup = ({ history, user, formSignup, updateSignupForm, signupUser }) => {

  const handleChange = event => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...formSignup,
      [name]: value
    };
    updateSignupForm(updatedFormInfo);
  };

  const handleSubmit = event => {
    event.preventDefault();
    signupUser(formSignup)
    .then(response => {
      if (!response.error) {
        history.push('/');
      };
    });
  };

  return (
    <div className="Signup">
      Sign up to view and save your homes:
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formSignup.name}
          onChange={handleChange}
          placeholder="name"
          required
        />
        <input
          type="text"
          name="email"
          value={formSignup.email}
          onChange={handleChange}
          placeholder="email"
          required
        />
        <input
          type="password"
          name="password"
          value={formSignup.password}
          onChange={handleChange}
          placeholder="password"
          required
        />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formSignup: state.formSignup,
    user: state.user
  };
};

export default withRouter(connect(mapStateToProps, { updateSignupForm, signupUser })(Signup));
