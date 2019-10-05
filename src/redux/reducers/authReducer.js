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
    case "SIGNUP_SUCCESS":
      console.log("signup success ");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};
export default authReducer;
