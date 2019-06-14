/////////////////////////////////////////////////////////////////////
// ACTIONS TO HANDLE A USER'S ACCOUNT & SESSION ON LOCAL RAILS API //
/////////////////////////////////////////////////////////////////////

const baseUrl = 'http://localhost:3000';
const apiBaseUrl = baseUrl + '/api/v1'

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = user => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}
// synchronous action creators (user's homes)
export const setNewUserHome = home => {
  return {
    type: "SET_NEW_USER_API_HOME",
    home
  }
}

export const removeUserApiHome = id => {
  return {
    type: "REMOVE_USER_API_HOME",
    id
  }
}

// asynchronous action creators
export const signupUser = data => {
  return dispatch => {
    return fetch(apiBaseUrl + '/signup', {
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
        dispatch(setCurrentUser(data))
      }
    })
    .catch(console.log)
  }
}

export const unsubscribeUser = () => {
  return dispatch => {
    // dispatch(clearCurrentUser())
    return fetch(apiBaseUrl + '/unsubscribe', {
      credentials: "include",
      method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
      if (data.notice) {
        dispatch(clearCurrentUser())
        alert(data.notice)
      } else if (data.error) {
        alert(data.error)
      }
    })
  }
}

export const loginUser = data => {
  return dispatch => {
    return fetch(baseUrl + '/login', {
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
        dispatch(setCurrentUser(data))
      }
    })
    .catch(console.log)
  }
}

export const logoutUser = () => {
  return dispatch => {
    dispatch(clearCurrentUser());
    return fetch(baseUrl + '/logout', {
      credentials: "include",
      method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
      if (data.notice) {
        console.log(data.notice)
      }
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch(baseUrl + '/get_current_user', {
      credentials: "include",
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.notice) {
        dispatch(setCurrentUser(null))
      } else {
        dispatch(setCurrentUser(data))
      }
    })
    .catch(console.log)
  }
}
