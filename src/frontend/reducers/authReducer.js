const authInitState = {
  token: localStorage.getItem("token") ?? "",
  userDetails: JSON.parse(localStorage.getItem("user")) ?? {},
  loading: "",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "SET_AUTH_LOADER":
      return { ...state, loading: action.payload };
    case "SET_USER_DETAILS":
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};

export { authInitState, authReducer };
