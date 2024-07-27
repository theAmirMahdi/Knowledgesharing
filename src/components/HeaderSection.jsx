import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import "./HeaderSection.css";
import { NavLink } from "react-router-dom";
import Post from "./Post";

function HeaderSection() {
  return (
    <Header className="custom-header">
      <div className="logo">
        <NavLink to="/">Knowledge Sharing</NavLink>
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "50px" }}
      >
        <div style={{ marginRight: "auto" }}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/about">About Us</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/contact">Contact</NavLink>
          </Menu.Item>
        </div>
        <Menu.Item>
          <Post />
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default HeaderSection;
