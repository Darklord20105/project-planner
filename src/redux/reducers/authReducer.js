const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_FAILED":
      console.log("failed");
      return {
        ...state,
        authError: "login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("success");
      return {
        ...state,
        authError: null
      };
    case "LOGOUT_SUCCESS":
      console.log("logout success");
      return state;
    default:
      return state;
  }
};
export default authReducer;
