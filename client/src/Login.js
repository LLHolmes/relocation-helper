import React, { Component } from 'react';

const baseUrl = "http://localhost:3000";

class Login extends Component {
  state = {
    username: username,
    password: password
  };

  handleChange = event => {
    this.setState({ [event.target.name] = event.target.value });
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
          <button onClick={this.login}>Login</button>
          // form onSubmit vs button onClick???
        </form>
      </div>
    );
  };
}
