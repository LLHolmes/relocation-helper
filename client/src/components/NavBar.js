import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
import Logout from './Logout';

const NavBar = ({ history, user }) => {

  return (
    <div className="NavBar">
      <NavLink className="NavLeft" to="/">Home</NavLink>
      { user ? (
        <NavLink className="NavAccount" to="/member/homes">Account</NavLink>
      ) : (
        <NavLink className="NavRight" to="/login">Login</NavLink>
      )}
      { user ? (
        <Logout history={history} />
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
