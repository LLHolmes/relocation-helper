import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
// import Signup from './Signup';
import Logout from './Logout';

const NavBar = ({ user }) => {

  return (
    <div className="NavBar">
      <strong>{ user ? `Welcome ${user.name}` : ''}</strong>
      { user ? <Logout /> : <><Login />SUB</>}
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps)(NavBar);
