import React from 'react';
import { connect } from 'react-redux';
import SearchMemberContainer from './SearchMemberContainer.js';
import SearchGenericContainer from './SearchGenericContainer.js';
import CompList from './CompList.js';

const MainContainer = ({ user }) => {

  return (
    <div className="MainContainer">
      { user ? <h1>Welcome to Home, {user.name}!</h1> : <h1>Welcome to Home!</h1>}
      { user ? <SearchMemberContainer /> : <SearchGenericContainer />}
      <CompList />
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps)(MainContainer);
