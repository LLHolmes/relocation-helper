const baseUrl = 'http://localhost:3000';

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

// asynchronous action creators
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
      dispatch(setCurrentUser(data))
    })
    .catch(console.log)
  }
}
