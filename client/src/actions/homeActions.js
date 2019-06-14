///////////////////////////////////////////////////////////////
// ACTIONS TO HANDLE A USER'S SAVED HOMES ON LOCAL RAILS API //
///////////////////////////////////////////////////////////////

import { removeUserSearchedHome } from './userHomesActions.js';
import { removeUserApiHome } from './userActions.js';
import { setNewUserHome } from './userActions.js';


const baseUrl = 'http://localhost:3000/api/v1';

// synchronous action creators come from other action files

// asynchronous action creators (api user's homes)
export const createHome = data => {
  return dispatch => {
    return fetch(baseUrl + '/homes', {
      credentials: "include",
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        dispatch(setNewUserHome(data))
      }
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
