import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
import Logout from './Logout';

const NavBar = ({ user }) => {

  return (
    <div className="NavBar">
      <NavLink className="NavLeft" to="/">Home</NavLink>
      { user ? (
        <NavLink className="NavUser" to="/member/homes">Welcome {user.name}</NavLink>
      ) : (
        <NavLink className="NavRight" to="/login">Login</NavLink>
      )}
      { user ? (
        <Logout />
      ) : (
        <NavLink className="NavRight" to="/signup">Signup</NavLink>
      )}
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps)(NavBar);
