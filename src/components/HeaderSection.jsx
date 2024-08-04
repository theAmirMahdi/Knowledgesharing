import { useEffect, useState } from "react";
import { Button, Menu, message, Modal } from "antd";
import Post from "./Post";
import Login from "./Login";
import { Header } from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";
import "./HeaderSection.css";
function HeaderSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const showLoginModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleLoginSuccess = (token) => {
    localStorage.setItem("authToken", token);
    setIsLoggedIn(true);
    handleCancel();
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    message.success("!خروج موفقیت آمیز بود");
  };

  return (
    <Header className="custom-header">
      <div className="logo">
        <NavLink style={{ color: "inherit" }} to="/">
          Knowledge Sharing
        </NavLink>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "50px" }}
      >
        <div>
          <Menu.Item
            key="1"
            style={{
              background: "none",
              border: "none",
              color: "inherit",
            }}
          >
            <Button>
              <NavLink to="/">صفحه اصلی</NavLink>
            </Button>
          </Menu.Item>
          <Menu.Item
            key="2"
            style={{ background: "none", border: "none", color: "inherit" }}
          >
            <Button>
              <NavLink to="/about">درباره ما</NavLink>
            </Button>
          </Menu.Item>
          <Menu.Item
            key="3"
            style={{ background: "none", border: "none", color: "inherit" }}
          >
            <Button>
              <NavLink to="/contact">ارتباط با ما</NavLink>
            </Button>
          </Menu.Item>
          <Menu.Item
            key="4"
            style={{ background: "none", border: "none", color: "inherit" }}
          >
            {isLoggedIn ? (
              <Post />
            ) : (
              <Button type="primary" onClick={showLoginModal}>
                ورود
              </Button>
            )}
          </Menu.Item>
          <Menu.Item
            key="5"
            style={{ background: "none", border: "none", color: "inherit" }}
          >
            {isLoggedIn ? (
              <Button type="primary" onClick={handleLogout}>
                خروج
              </Button>
            ) : (
              ""
            )}
          </Menu.Item>
        </div>
      </Menu>

      <Modal
        title="ورود به حساب کاربری"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Login onClose={handleCancel} onLoginSuccess={handleLoginSuccess} />{" "}
      </Modal>
    </Header>
  );
}

// const menuItemStyle = {
//   background: "none",
//   border: "none",
//   color: "inherit",
// };

export default HeaderSection;
