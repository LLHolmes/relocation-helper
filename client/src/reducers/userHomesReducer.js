export default (state = [], action) => {
  switch (action.type){
    case "SEARCH_USERHOME_SUCCESS":
      return [
        ...state,
        action.data
      ];
      case "REMOVE_USER_SEARCHED_HOME":
      console.log("in homes reducer, REMOVE_USER_SEARCHED_HOME")
      console.log(action.id)
      return [
        state.filter(home => home.apiId !== action.id)
      ];
    default:
     return state;
  };
};
