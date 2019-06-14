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
    case "COMP_SUCCESS":
      console.log("in Reducer: COMP_SUCCESS")
      console.log(action.data)
      return {
        ...state,
        comps: action.data
      };
    default:
      return state;
  };
};
