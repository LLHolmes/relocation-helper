export default (state = [], action) => {
  switch (action.type){
    case "SEARCH_USERHOME_SUCCESS":
      return [
        ...state,
        action.data
      ];
    case "ADD_SAVED_USERHOME":
      return [
        ...state,
        action.data
      ];
    case "REMOVE_USER_SEARCHED_HOME":
      return state.filter(home => home.apiId !== action.id);
    case "CLEAR_USER_HOMES":
      return [];
    default:
     return state;
  };
};
