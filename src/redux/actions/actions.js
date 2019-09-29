export const createProject = project => {
  return (dispatch, getState) => {
    // async calls here
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
