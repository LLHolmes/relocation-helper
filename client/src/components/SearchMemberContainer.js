import React from 'react';
import SearchContainer from './SearchContainer.js';
import UserHomeList from './UserHomeList.js';
import Unsubscribe from './Unsubscribe.js';

const SearchMemberContainer = () => {

  return (
    <div className="SearchMemberContainer">
      <SearchContainer />
      <UserHomeList />
      <Unsubscribe />
    </div>
  );
};

export default SearchMemberContainer;
