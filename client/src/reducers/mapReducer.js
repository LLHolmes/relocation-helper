const initialState = {
  center: {
    lat: 39.8283,
    lng: 265.5795
  },
  zoom: 3
};

export default (state = initialState, action) => {
  switch (action.type){
    case "SET_MAP":
    console.log("setting map")
    console.log(action.data)
      return action.data;
    default:
      return state;
  };
};
