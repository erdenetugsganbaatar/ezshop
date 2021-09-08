import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  SettingOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          zIndex: 1000,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/admin" />
            Home Page
          </Menu.Item>
          <Menu.Item key="2" icon={<CustomerServiceOutlined />}>
            <Link to="/admin/customer">Customer</Link>
          </Menu.Item>
          <Menu.Item key="21" icon={<FileTextOutlined />}>
            <Link to="/admin/category" />
            Category
          </Menu.Item>
          
          <Menu.Item key="3" icon={<FileSyncOutlined />}>
            <Link to="/admin/product" />
            Product
          </Menu.Item>
          <Menu.Item key="31" icon={<TeamOutlined />}>
            <Link to="/admin/brand" />
            Brands
          </Menu.Item> 

          <Menu.Item key="32" icon={<SettingOutlined />}>
            <Link to="/admin/settings" />
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}
export default Navigation;
