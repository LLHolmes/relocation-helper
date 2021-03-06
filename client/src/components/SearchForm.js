import React from 'react';
import { connect } from 'react-redux';
import { updateSearchForm } from '../actions/formSearchActions.js';
import { submitSearch } from '../actions/searchActions.js';

const SearchForm = ({ formSearch, updateSearchForm, submitSearch }) => {

  const handleChange = event => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...formSearch,
      [name]: value
    };
    updateSearchForm(updatedFormInfo);
  };

  const handleSubmit = event => {
    event.preventDefault();
    submitSearch(formSearch);
  };

  return (
    <div>
      <h3>Search homes:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='street'
          value={formSearch.street}
          onChange={handleChange}
          placeholder='street address'
          required
          />
        <input
          type='text'
          name='cityState'
          value={formSearch.cityState}
          onChange={handleChange}
          placeholder='city, state'
          />
        <input
          type='text'
          name='zipcode'
          value={formSearch.zipcode}
          onChange={handleChange}
          placeholder='zipcode'
          />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formSearch: state.formSearch
  };
};

export default connect(mapStateToProps, { updateSearchForm, submitSearch })(SearchForm);
