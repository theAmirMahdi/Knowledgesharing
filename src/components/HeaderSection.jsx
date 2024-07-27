import { Button, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import "./HeaderSection.css";
import { NavLink } from "react-router-dom";
import Post from "./Post";

function HeaderSection() {
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
            <Button>صفحه اصلی</Button>
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
        </div>
        <Menu.Item
          key="4"
          style={{ background: "none", border: "none", color: "inherit" }}
        >
          <Post />
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default HeaderSection;
