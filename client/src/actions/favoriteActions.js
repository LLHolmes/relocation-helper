///////////////////////////////////////////////////////////////
// ACTIONS TO HANDLE A USER'S SAVED HOMES ON LOCAL RAILS API //
///////////////////////////////////////////////////////////////

import { addSavedUserFavorite } from './userFavoritesActions.js';
import { removeUserSearchedFavorite } from './userFavoritesActions.js';
import { removeUserApiFavorite } from './userActions.js';
import { setNewUserFavorite } from './userActions.js';
import { clearSearch } from './searchActions.js';
import { baseUrl } from './actionHelper.js';

const apiBaseUrl = baseUrl + '/api/v1'

// synchronous action creators come from other action files

// asynchronous action creators (api user's homes)
export const saveFavorite = (favoriteParams, search) => {
  return dispatch => {
    return fetch(apiBaseUrl + '/favorites', {
      credentials: "include",
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(favoriteParams)
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        return data
      }
    })
    .then( data => {
      let userFavoriteSearch = {...search, apiId: data.id}

      dispatch(setNewUserFavorite(data))
      dispatch(addSavedUserFavorite(userFavoriteSearch))
      dispatch(clearSearch())
    })
    .catch(console.log)
  }
}

export const deleteFavorite = apiId => {
  return dispatch => {
    return fetch(apiBaseUrl + `/favorites/${apiId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(apiId)
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        dispatch(removeUserSearchedFavorite(apiId))
        dispatch(removeUserApiFavorite(apiId))
      }
    })
  }
}
