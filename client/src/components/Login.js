import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/formLoginActions.js'
import { loginUser } from '../actions/userActions.js'

// const baseUrl = "http://localhost:3000";

const Login = ({ formLogin, updateLoginForm, loginUser }) => {

  const handleChange = event => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...formLogin,
      [name]: value
    };
    updateLoginForm(updatedFormInfo)
  };

  // state = {
  //   email: '',
  //   password: '',
  //   error: ''
  // };

  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };
  //
  // handleLogin = event => {
  //   event.preventDefault();
  //
  //   let params = {
  //     email: this.state.email,
  //     password: this.state.password
  //   };
  //
  //   fetch(baseUrl + '/login', {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify(params)
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     if(data.success) {
  //       localStorage.setItem("token", data.token);
  //       this.setState({ error: "" });
  //     } else {
  //       this.setState({ error: "Invalid username or password" })
  //     }
  //     // this.props.login();
  //   });
  // };
  const handleSubmit = event => {
    event.preventDefault();
    loginUser(formLogin)
  }

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
          type="text"
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
}

const mapStateToProps = state => {
  return {
    formLogin: state.formLogin
  }
}

export default connect(mapStateToProps, { updateLoginForm, loginUser })(Login);
