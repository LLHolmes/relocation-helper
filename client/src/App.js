import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/userActions.js'
import './stylesheets/App.css';
import Login from './components/Login';
import UserPage from './components/UserPage';
import HomeSearchForm from './components/HomeSearchForm';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  };

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

export default connect(null, { getCurrentUser })(App);
