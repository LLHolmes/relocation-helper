import React from 'react';
import { connect } from 'react-redux';
import SearchMemberContainer from './SearchMemberContainer.js';
import SearchGenericContainer from './SearchGenericContainer.js';
import CompList from './CompList.js';
import Footer from './Footer.js';

const MainContainer = ({ user }) => {

  return (
    <div className="MainContainer">
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
