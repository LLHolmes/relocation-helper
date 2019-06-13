import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/userActions.js'
import './stylesheets/App.css';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Unsubscribe from './components/Unsubscribe';
// import UserPage from './components/UserPage';
import HomeSearchForm from './components/HomeSearchForm';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Signup />
        <Unsubscribe />
        <HomeSearchForm />
      </div>
    );
  };
};

export default connect(null, { getCurrentUser })(App);
