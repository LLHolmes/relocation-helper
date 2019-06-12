const baseUrl = 'http://localhost:3000';

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

// asynchronous action creators
export const loginUser = data => {
  return dispatch => {
    return fetch(baseUrl + '/login', {
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

export const getCurrentUser = () => {
  return dispatch => {
    return fetch(baseUrl + '/get_current_user', {
      credentials: "include",
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      },
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





// .then(response => response.json())
// .then(data => {
//   if(data.success) {
//     localStorage.setItem("token", data.token);
//     this.setState({ error: "" });
//   } else {
//     this.setState({ error: "Invalid username or password" })
//   }
//   // this.props.login();
// });
