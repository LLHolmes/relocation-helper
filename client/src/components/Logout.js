import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions.js'

const Logout = ({ logoutUser }) => {

  return (
    <div>
      <form onSubmit={ logoutUser }>
        <input type="submit" value="Logout" />
      </form>
      {/* <span style={{ color: "red" }}>{this.state.error}</span> */}
    </div>
  );
}

export default connect(null, { logoutUser })(Logout);
