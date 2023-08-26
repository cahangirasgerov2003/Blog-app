const authState = {
  isLoggin: false,
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggin: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggin: false,
      };
    default:
      return state;
  }
};

export default authReducer;
