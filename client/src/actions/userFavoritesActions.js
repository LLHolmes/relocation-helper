////////////////////////////////////////////////
// ACTIONS TO HANDLE A USER'S SAVED FAVORITES //
////////////////////////////////////////////////

//// SYNCHRONOUS ACTION CREATORS ////
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
