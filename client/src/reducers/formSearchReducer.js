const initialState = {
  street: '',
  cityState: '',
  zipcode: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH_FORM":
      return action.formData;
    case "RESET_SEARCH_FORM":
      return initialState;
    default:
      return state;
  };
};
