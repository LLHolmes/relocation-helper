import React from 'react';
import { connect } from 'react-redux';
import { saveHome } from '../actions/homeActions.js';
import SearchForm from '../components/SearchForm.js';
import SearchHomeCard from '../components/SearchHomeCard.js';

const SearchContainer = ({ user, search, saveHome }) => {
  let homeParams = {
    street: search.street,
    cityState: `${search.city}, ${search.state}`,
    zipcode: search.zipcode
  }

  return (
    <div className="SearchContainer CompHomeCard">
      <SearchForm />
      { Object.keys(search).length > 0 ? <h3  className="cardHolder">Search Result</h3> : ''}
      { Object.keys(search).length === 0 ? '' : <SearchHomeCard home={search} user={user} homeParams={homeParams} saveHome={() => saveHome(homeParams, search)} />}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    search: state.search.search
  }
}

export default connect(mapStateToProps, { saveHome })(SearchContainer);
