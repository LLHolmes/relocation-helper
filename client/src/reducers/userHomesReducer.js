export default (state = [], action) => {
  switch (action.type){
    case "SEARCH_USERHOME_SUCCESS":
      return [
        ...state,
        action.data
      ];
    default:
     return state;
  };
};
