////////////////////////////////////////////////////////////////////////
// ACTIONS TO HANDLE CALLS TO ZILLOW API FOR A USER'S SAVED FAVORITES //
////////////////////////////////////////////////////////////////////////

import { baseUrl } from './actionHelper.js';

//// SYNCHRONOUS ACTION CREATORS ////
export const setUserFavoriteSearch = data => {
  return {
    type: "SEARCH_USERFAVORITE_SUCCESS",
    data
  }
}

export const addSavedUserFavorite = data => {
  return {
    type: "ADD_SAVED_USERFAVORITE",
    data
  }
}

export const removeUserSearchedFavorite = id => {
  return {
    type: "REMOVE_USER_FAVORITE",
    id
  }
}

export const clearUserFavorites = () => {
  return {
    type: "CLEAR_USER_FAVORITES",
  }
}

//// ASYNCHRONOUS ACTION CREATORS ////
// Search single, saved user home on Zillow API.
export const searchUserFavorites = search => {
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
        dispatch(setUserFavoriteSearch(data))
      }
    })
  };
}
