import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm.js';
import UserHomeCard from './UserHomeCard.js';

const SearchContainer = ({ search }) => {
  console.log(search)
  return (
    <div className="SearchContainer">
      <SearchForm />
      { Object.keys(search).length === 0 ? '' : <UserHomeCard home={search}/>}
    </div>
  );
}

const mapStateToProps = ({ search }) => {
  return {
    search: search.search
  }
}

export default connect(mapStateToProps)(SearchContainer);
