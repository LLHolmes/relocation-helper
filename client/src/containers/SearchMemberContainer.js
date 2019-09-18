import React from 'react';
import SearchContainer from './SearchContainer.js';
import UserHomeList from './UserHomeList.js';
import UserFavoriteList from './UserFavoriteList.js';

const SearchMemberContainer = () => {

  return (
    <div className="SearchMemberContainer">
      <SearchContainer />
      <UserHomeList />
      <UserFavoriteList />
    </div>
  );
};

export default SearchMemberContainer;
