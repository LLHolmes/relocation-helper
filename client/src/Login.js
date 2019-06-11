import React, { Component } from 'react';

// const baseUrl = "http://localhost:3001";

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = event => {
    event.preventDefault();

    let params = {
      username: this.state.username,
      password: this.state.password
    };

    let url = "http://localhost:3001/login";

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
      console.log(data);
      // localStorage.setItem("token": data.token);
      // this.props.logIn();
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="username"
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
      </div>
    );
  };
}

export default Login;
