import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import UserPage from './UserPage';
import HomeSearchForm from './HomeSearchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeSearchForm />
        <Login />
        <UserPage />
      </div>
    );
  };
};

export default App;
