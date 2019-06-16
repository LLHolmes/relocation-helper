import React from 'react';
import SearchContainer from './SearchContainer.js';
import UserHomeList from './UserHomeList.js';

const SearchMemberContainer = () => {

  return (
    <div className="SearchMemberContainer">
      <SearchContainer />
      <UserHomeList />
    </div>
  );
};

export default SearchMemberContainer;
