import React, { children, createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const initialState = {
    user: null,
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const postUser = async (user) => {
    await axios.post("http://localhost:3000/users/createUser", user);

  };
  
  return (
      <UserContext.Provider
      value={{
          user: state.user,
          postUser,
        }}
        >
    {children}
  </UserContext.Provider>
);

};
