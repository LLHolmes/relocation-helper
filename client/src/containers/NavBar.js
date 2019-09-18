import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from '../components/Logout';

const NavBar = ({ user }) => {

  return (
    <div className="NavBar">
      <NavLink className="NavLeft" to="/">Home</NavLink>
      { user ? (
        <NavLink className="NavAccount" to="/member/homes">Account</NavLink>
      ) : (
        <></>
      )}
      { user ? (
        <NavLink className="NavFavorites" to="/member/favorites">Favorites</NavLink>
      ) : (
        <NavLink className="NavRight" to="/login">Login</NavLink>
      )}
      { user ? (
        <Logout />
      ) : (
        <NavLink className="NavRight" to="/signup">Signup</NavLink>
      )}
      Homebuyer's Helper
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps)(NavBar);
