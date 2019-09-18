export default (state = [], action) => {
  switch (action.type){
    case "SEARCH_USERFAVORITE_SUCCESS":
      return [
        ...state,
        action.data
      ];
    case "ADD_SAVED_USERFAVORITE":
      return [
        ...state,
        action.data
      ];
    case "REMOVE_USER_FAVORITE":
      return state.filter(favorite => favorite.apiId !== action.id);
    case "CLEAR_USER_FAVORITES":
      return [];
    default:
     return state;
  };
};
