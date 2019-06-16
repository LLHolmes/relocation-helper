import React from 'react';
import { connect } from 'react-redux';
import SearchMemberContainer from './SearchMemberContainer.js';
import SearchGenericContainer from './SearchGenericContainer.js';
import CompList from './CompList.js';

const MainContainer = ({ user, comps }) => {

  return (
    <div className="MainContainer">
      <div className="MainWelcome">
        { user ? <h1 className="Welcome">Welcome Home, {user.name}!</h1> : <h1 className="Welcome">Welcome Home!</h1>}
      </div>
      <div className="MainScroll">
        { user ? <SearchMemberContainer /> : <SearchGenericContainer />}
        <CompList />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    comps: state.search.comps
  }
}

export default connect(mapStateToProps)(MainContainer);
