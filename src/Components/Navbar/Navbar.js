import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const Navbar = (props) => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Note App</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
