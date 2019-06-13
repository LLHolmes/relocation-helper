import React from 'react';
import { connect } from 'react-redux';
import SearchMemberContainer from './SearchMemberContainer.js'

const MainContainer = ({ user }) => {

  return (
    <div className="MainContainer">
      { user ? <SearchMemberContainer /> : 'Generic version of search'}
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
