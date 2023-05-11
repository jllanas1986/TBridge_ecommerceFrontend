import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, notification } from "antd";

const Header = () => {
    const {token, logout, logoutMessage} = useContext(UserContext)
    const navigate = useNavigate();
    useEffect(() => {
      if (logoutMessage) {
        navigate("/login");
        notification.success({
          message: logoutMessage,
        });
      }
    }, [logoutMessage]);

  return (
    <div>
      Header
      {token? (
        <>
          <Link to="/profile">
            {" "}
            <Avatar icon={<UserOutlined />} />
            Profile
          </Link>
          <span onClick={() => logout()}>
            Logout
          </span>
        </>
        ) : (
          <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Header;
