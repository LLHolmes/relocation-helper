import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/userActions.js'
import './stylesheets/App.css';
import Signup from './components/Signup';
import Unsubscribe from './components/Unsubscribe';
import Login from './components/Login';
import Logout from './components/Logout';
// import UserPage from './components/UserPage';
// import HomeSearchForm from './components/HomeSearchForm';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  };

  render() {
    return (
      <div className="App">
        { this.props.user ? <Logout /> : <Login />}
        <Signup />
        <Unsubscribe />
      </div>
    );
  };
};

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
