import React, { useContext, useEffect } from "react";
import { Button, Form, Input, notification } from "antd";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router";
import "./Login.scss"

const Login = () => {
  const { login, message, token } = useContext(UserContext);

  const navigate = useNavigate();

  const onFinish = (values) => {
    login(values);
  };

  useEffect(() => {

    if (token) {
            navigate("/profile");
        }

    if(message) {
        notification.success({
            message: message,
        });
      }
    },[token]);

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    }
  return (
  <div className="formLoginContainer">
    <div className="formLogin">
      <Form
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
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
          >
          <Input />
      </Form.Item>

      <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          >
          <Input.Password />
      </Form.Item>

      <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
          ></Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
          Submit
          </Button>
      </Form.Item>
      </Form>
    </div>
  </div>
    );
};

export default Login;
