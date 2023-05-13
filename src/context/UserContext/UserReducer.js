
const users = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        message: action.payload.message,
      };
    case "GET_USER_INFO":
      return {
        ...state,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        logoutMessage:action.payload.message,
      };
    case "REGISTER":
      return {
        ...state,
        registerMessage: action.payload.message,
      };
    default:
      return state;
  }
};

export default users;
