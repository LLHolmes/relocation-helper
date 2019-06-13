import React, { Component } from 'react';
import { connect } from 'react-redux';

const MainContainer = ({ user }) => {

  return (
    <div className="MainContainer">
      { user ? "User version of search with saved homes" : 'Generic version of search'}
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
