///////////////////////////////////////////////////////////////
// ACTIONS TO HANDLE A USER'S SAVED HOMES ON LOCAL RAILS API //
///////////////////////////////////////////////////////////////

import { addSavedUserHome } from './userHomesActions.js'
import { removeUserSearchedHome } from './userHomesActions.js';
import { removeUserApiHome } from './userActions.js';
import { setNewUserHome } from './userActions.js';
import { clearSearch } from './searchActions.js';


const baseUrl = 'http://localhost:3000/api/v1';

// synchronous action creators come from other action files

// asynchronous action creators (api user's homes)
export const saveHome = (homeParams, search) => {
  return dispatch => {
    return fetch(baseUrl + '/homes', {
      credentials: "include",
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(homeParams)
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
      let userHomeSearch = {...search, apiId: data.id}
      
      dispatch(setNewUserHome(data))
      dispatch(addSavedUserHome(userHomeSearch))
      dispatch(clearSearch())
    })
    .catch(console.log)
  }
}

export const deleteHome = apiId => {
  return dispatch => {
    return fetch(baseUrl + `/homes/${apiId}`, {
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
        dispatch(removeUserSearchedHome(apiId))
        dispatch(removeUserApiHome(apiId))
      }
    })
  }
}
