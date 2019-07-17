////////////////////////////////////////////////////////////////////
// ACTIONS TO HANDLE CALLS TO ZILLOW API FOR A USER'S SAVED HOMES //
////////////////////////////////////////////////////////////////////

import { baseUrl } from './actionHelper.js';

//// SYNCHRONOUS ACTION CREATORS ////
export const setUserHomeSearch = data => {
  return {
    type: "SEARCH_USERHOME_SUCCESS",
    data
  }
}

export const addSavedUserHome = data => {
  return {
    type: "ADD_SAVED_USERHOME",
    data
  }
}

export const removeUserSearchedHome = id => {
  return {
    type: "REMOVE_USER_SEARCHED_HOME",
    id
  }
}

export const clearUserHomes = () => {
  return {
    type: "CLEAR_USER_HOMES",
  }
}


//// ASYNCHRONOUS ACTION CREATORS ////
// Search single, saved user home on Zillow API.
export const searchUserHomes = search => {
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
        alert(data.error)
      } else {
        dispatch(setUserHomeSearch(data))
      }
    })
  };
}
