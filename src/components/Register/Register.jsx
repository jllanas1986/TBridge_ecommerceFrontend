import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const Register = () => {
  
  const { postUser, users,registerMessage } = useContext(UserContext);
  
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(initialState);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate()

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (event) => {
    if (data.name.length + 1 < 3) {
      setMessage("Name must be at least 3 characters");

      setBtnDisabled(true);
    } else {
      setMessage(null);

      setBtnDisabled(false);
    }
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(()=>{
    if(registerMessage){

      notification.success({
        message: registerMessage,
    })
      navigate("/login")
    }
  },[registerMessage])
  const handleSubmit = (event) => {
    event.preventDefault();
    postUser(data)
    clearState();


  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={handleInputChange}
          name="name"
        />

        <input
          type="email"
          placeholder="email"
          onChange={handleInputChange}
          name="email"
        />

        <input
          type="password"
          placeholder="password"
          onChange={handleInputChange}
          name="password"
        />
        <button type="submit" disabled={btnDisabled}>
          Create User
        </button>
      </form>
      {message}
    </div>
  );
};

export default Register;
