import React, { children, createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
    user: null,
    token: token ? token : null,
};

const API_URL = "http://localhost:3000";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const postUser = async (user) => {
    await axios.post("http://localhost:3000/users/createUser", user);
  };

  const login = async (user) => {
    const res = await axios.post(API_URL + "/users/login", user);
    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };

  
  return (
      <UserContext.Provider
      value={{
          user: state.user,
          postUser,
          token: state.token,
          login,
        }}
        >
    {children}
  </UserContext.Provider>
);

};
