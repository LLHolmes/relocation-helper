// const baseUrl = 'http://localhost:3000/api/v1';
// // synchronous action creators (user's homes)
// export const setNewUserHome = user => {
//   return {
//     type: "SET_NEW_USER_API_HOME",
//     user
//   }
// }
//
// export const removeUserHome = user => {
//   return {
//     type: "REMOVE_USER_API_HOME",
//     user
//   }
// }
//
// // asynchronous action creators (user's homes)
// export const createHome = data => {
//   return dispatch => {
//     return fetch(apiBaseUrl + '/homes', {
//       credentials: "include",
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.error) {
//         alert(data.error)
//       } else {
//         dispatch(setNewUserHome(data))
//       }
//     })
//     .catch(console.log)
//   }
// }
//
// export const deleteHome = () => {
//   return dispatch => {
//     return fetch(apiBaseUrl + '/home', {
//       credentials: "include",
//       method: "DELETE"
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.error) {
//         alert(data.error)
//       } else {
//         dispatch(removeUserHome(data))
//       }
//     })
//   }
// }
