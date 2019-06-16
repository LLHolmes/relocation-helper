import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../actions/userActions.js';

const Logout = ({ history, logoutUser }) => {

  const handleSubmit = event => {
    event.preventDefault();
    logoutUser();
    history.push('/');
  };

  return (
    <div className="NavLogout">
      <form onSubmit={handleSubmit}>
        <input className="LogoutButton" type="submit" value="Logout" />
      </form>
    </div>
  );
};

export default withRouter(connect(null, { logoutUser })(Logout));
