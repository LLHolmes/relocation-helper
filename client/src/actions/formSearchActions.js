export const updateSearchForm = formData => {
  return {
    type: "UPDATE_SEARCH_FORM",
    formData
  };
};

export const resetSearchForm = () => {
  return {
    type: "RESET_SEARCH_FORM"
  };
};
