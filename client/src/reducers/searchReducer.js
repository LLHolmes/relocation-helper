const initialState = {
  search: {},
  comps: {}
};

export default (state = initialState, action) => {
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
