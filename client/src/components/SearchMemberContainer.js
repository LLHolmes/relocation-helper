import React from 'react';
import SearchForm from './SearchForm.js'
import UserHomeList from './UserHomeList.js'
import Unsubscribe from './Unsubscribe.js';

const SearchMemberContainer = () => {

  return (
    <div className="SearchMemberContainer">
      <SearchForm />
      <UserHomeList />
      <Unsubscribe />
    </div>
  );
}

export default SearchMemberContainer;
