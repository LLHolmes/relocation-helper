import React, { Component } from 'react';

// const baseUrl = "http://localhost:3000";

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = event => {
    event.preventDefault();

    let params = {
      email: this.state.email,
      password: this.state.password
    };

    let url = "http://localhost:3000/login";

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(params)
    })
    .then(response => response.json())
    .then(data => {
      if(data.success) {
        localStorage.setItem("token", data.token);
        this.setState({ error: "" });
      } else {
        this.setState({ error: "Invalid username or password" })
      }
      // this.props.logIn();
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
          />
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <button onClick={this.handleLogin}>Login</button>
          { /* form onSubmit vs button onClick??? */ }
        </form>
        <span style={{ color: "red" }}>{this.state.error}</span>
      </div>
    );
  };
}

export default Login;
