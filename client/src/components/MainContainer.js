import React from 'react';
import { connect } from 'react-redux';
import SearchMemberContainer from './SearchMemberContainer.js';
import SearchGenericContainer from './SearchGenericContainer.js';

const MainContainer = ({ user }) => {

  return (
    <div className="MainContainer">
      { user ? <SearchMemberContainer /> : <SearchGenericContainer />}
      <div>HomeListContainer</div>
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps)(MainContainer);
