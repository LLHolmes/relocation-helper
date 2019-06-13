import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm.js';
// import UserHomeCard from './UserHomeCard.js';

const SearchContainer = ({ state }) => {
  console.log(state)
  return (
    <div className="SearchContainer">
      <SearchForm />
      { 1+1 === 2 ? "has search stored" : 'no search stored'}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(SearchContainer);

// <UserHomeCard home={search}/>
