export default (state = [], action) => {
  switch (action.type){
    case "SEARCH_USERHOME_SUCCESS":
      return [
        ...state,
        action.data
      ];
    case "SET_NEW_USER_SEARCHED_HOME":
      console.log(`in homes reducer, SET_NEW_USER_SEARCHED_HOME: id${action.home}`)
      console.log(action.home)
      return {
        ...state,
        homes:[...state.homes, action.home]
      };
    case "REMOVE_USER_SEARCHED_HOME":
      console.log(`in homes reducer, REMOVE_USER_SEARCHED_HOME`)
      console.log(action.id)
      return state.filter(home => home.apiId !== action.id);
    default:
     return state;
  };
};
