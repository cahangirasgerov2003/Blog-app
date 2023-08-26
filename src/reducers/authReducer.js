const authState = {
  isLoggin: false,
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggin: true,
        uid: action?.uid,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggin: false,
        uid: null,
      };
    default:
      return state;
  }
};

export default authReducer;
