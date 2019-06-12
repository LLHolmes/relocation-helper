import React, { Component } from 'react';
import './stylesheets/App.css';
import Login from './components/Login';
import UserPage from './components/UserPage';
import HomeSearchForm from './components/HomeSearchForm';

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
