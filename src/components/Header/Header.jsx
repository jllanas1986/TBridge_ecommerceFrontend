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
        navigate("/home");
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
            Profile |
          </Link>
          
          <span>
              <Link to="/cart">
                <ShoppingCartOutlined />
              </Link>
            </span>

          <Link to="/products/showProducts">Products |</Link>
          <span onClick={() => logout()}>
            Logout
          </span>
        </>
        ) : (
        <>
          <Link to="/login">Login |</Link>
          <Link to="/users/createUser">Register |</Link>
          <Link to="/products/showProducts">Products |</Link>
          <Link to="/">Home </Link>
        </>
      )}
    </div>
  );
};

export default Header;
