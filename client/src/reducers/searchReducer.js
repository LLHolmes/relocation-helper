export default (state = { search: {}, comps: {} }, action) => {
  switch (action.type){
    case "SEARCH_SUCCESS":
      return {
        ...state,
        search: action.data
      };
    default:
      return state;
  };
};
