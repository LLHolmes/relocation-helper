const initialState = {
  search: {},
  comps: []
};

export default (state = initialState, action) => {
  switch (action.type){
    case "SEARCH_SUCCESS":
      return {
        ...state,
        search: action.data
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        search: {}
      };
    case "COMP_SUCCESS":
      return {
        ...state,
        comps: action.data
      };
    case "REMOVE_COMP":
      return {
        ...state,
        comps: state.comps.filter(comp => comp.zpid !== action.zpid)
      }
    default:
      return state;
  };
};
