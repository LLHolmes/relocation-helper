// Upon SET_CURRENT_USER // state = {name: '', homes: [], favorites: []}

export default (state = null, action) => {
  switch (action.type){
    case "SET_CURRENT_USER":
      return action.user;
    case "CLEAR_CURRENT_USER":
      return null;
    case "SET_NEW_USER_API_HOME":
      console.log("in reducer, SET_NEW_USER_API_HOME")
      console.log(action.home)
      return {
        ...state,
        homes:[...state.homes, action.home]
      };
    case "REMOVE_USER_API_HOME":
      console.log("in user reducer, REMOVE_USER_API_HOME")
      console.log(action.id)
      return {
        ...state,
        homes: state.homes.filter(home => home.id !== action.id)
      };
    default:
      return state;
  };
};
