import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";

const Register = () => {
  
  const { postUser, users, registerMessage } = useContext(UserContext);
  
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
      setMessage("El nombre debe tener mas de 3 letras");

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

  const onFinish = (values) => {
    postUser(values);
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

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  }

  return (
    
    <div className="formLoginContainer">
        <Form onSubmit={handleSubmit}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
              label="Name"
              onChange={handleInputChange}
              name="name"
              rules={[{ required: true, message: "Por favor, introduce tu nombre!" }]}
              >
              <Input />
          </Form.Item>
          <Form.Item
              label="Email"
              onChange={handleInputChange}
              name="email"
              rules={[{ required: true, message: "Por favor, introduce tu email!" }]}
              >
              <Input />
          </Form.Item>

          <Form.Item
              label="Password"
              onChange={handleInputChange}
              name="password"
              rules={[{ required: true, message: "Por favor, introduce tu password!" }]}
              >
              <Input.Password />
          </Form.Item>

          <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
              ></Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary"  htmlType="submit">
              Submit
              </Button>
          </Form.Item>
        </Form>
      </div>
    );
  
}
export default Register;
