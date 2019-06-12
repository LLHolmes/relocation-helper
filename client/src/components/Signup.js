import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/formSignupActions.js'
import { signupUser } from '../actions/userActions.js'

const Signup = ({ formSignup, updateSignupForm, signupUser }) => {

  const handleChange = event => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...formSignup,
      [name]: value
    };
    updateSignupForm(updatedFormInfo)
  };

  const handleSubmit = event => {
    event.preventDefault();
    signupUser(formSignup)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formSignup.name}
          onChange={handleChange}
          placeholder="name"
        />
        <input
          type="text"
          name="email"
          value={formSignup.email}
          onChange={handleChange}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          value={formSignup.password}
          onChange={handleChange}
          placeholder="password"
        />
        <input type="submit" value="Login" />
      </form>
      {/* <span style={{ color: "red" }}>{this.state.error}</span> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    formSignup: state.formSignup
  }
}

export default connect(mapStateToProps, { updateSignupForm, signupUser })(Signup);
