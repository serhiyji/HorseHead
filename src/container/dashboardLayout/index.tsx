import React, { useState } from "react";
import { Layout, Menu, Button, Dropdown } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { MinistryMenu, UniversityMenu } from "./listItems";

const { Header, Content, Sider } = Layout;

const DashboardLayout = () => {
  const { user } = useTypedSelector((store) => store.UserReducer);
  const { LogOut } = useActions();

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: any) => {
    setCollapsed(collapsed);
  };

  const Logout = () => {
    LogOut(user.Id);
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="">Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={Logout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh"}}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div style={{ height: "32px", margin: "16px" }} />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {user.role === "Ministry" && (
            <>
              <Menu.Item key="1">
                <Link to="/dashboard/competence">Компетенції</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/dashboard/programlearningoutcomes">Програмні результати навчання</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/dashboard/specialty">Спеціальність</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="">Стандарт міністерства</Link>
              </Menu.Item>
            </>
          )}
          {user.role === "University" && (
            <Menu.SubMenu key="sub1" title="Saved reports">
              <Menu.Item key="4">Current month</Menu.Item>
              <Menu.Item key="5">Last quarter</Menu.Item>
              <Menu.Item key="6">Year-end sale</Menu.Item>
            </Menu.SubMenu>
          )}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div style={{ float: "right", marginRight: "16px" }}>
            <Dropdown overlay={menu}>
              <Button icon={<UserOutlined />} />
            </Dropdown>
          </div>
        </Header>
        <Content style={{ margin: "0px" }}>
          <div style={{ padding: "0px" }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
