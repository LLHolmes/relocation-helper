////////////////////////////////////////////////////////////////
// ACTIONS TO HANDLE CALLS TO ZILLOW API FROM THE SEARCH FORM //
////////////////////////////////////////////////////////////////

import { resetSearchForm } from './formSearchActions.js';
import { baseUrl } from './actionHelper.js';

//// SYNCHRONOUS ACTION CREATORS ////
export const setSearch = data => {
  return {
    type: "SEARCH_SUCCESS",
    data
  }
}

export const clearSearch = () => {
  return {
    type: "CLEAR_SEARCH"
  }
}

export const setComps = data => {
  return {
    type: "COMP_SUCCESS",
    data
  }
}

export const setCompSearch = data => {
  return {
    type: "COMP_SEARCH_SUCCESS",
    data
  }
}

export const removeComp = zpid => {
  return {
    type: "REMOVE_COMP",
    zpid
  }
}

export const hardClearSearch = () => {
  return {
    type: "HARD_CLEAR_SEARCH"
  }
}


//// ASYNCHRONOUS ACTION CREATORS ////
// Search single home on Zillow API from search form input.
export const submitSearch = search => {
  // If necessary information is provided, call to backend to complete search.
  if (search.cityState || search.zipcode) {
    return dispatch => {
      return fetch(baseUrl + '/search_home', {
        credentials: "include",
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(search)
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          dispatch(clearSearch())
          alert(data.error)
          dispatch(resetSearchForm())
        } else {
          dispatch(setSearch(data))
          dispatch(resetSearchForm())
          dispatch(findComps(data))
        }
      })
    };
  // Else alert user and clear search forms.
  } else {
    alert("Please enter city and state or zipcode.");
    return dispatch => {
      dispatch(resetSearchForm())
      dispatch(clearSearch())
    };
  };
}

// Find comps of single searched home on Zillow API
export const findComps = searchedHome => {
  return dispatch => {
    return fetch(baseUrl + '/search_comps', {
      credentials: "include",
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({zpid: searchedHome.zpid})
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        dispatch(setComps(data))
        dispatch(setCompSearch(searchedHome))
      }
    })
  };
}
