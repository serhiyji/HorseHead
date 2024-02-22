import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export const MinistryMenu = (
  <Menu mode="inline" inlineIndent={20}>
    <Menu.Item key="1" icon={<AppstoreOutlined />}>
      <Link to="/dashboard/competence">Компетенції</Link>
    </Menu.Item>
    <Menu.Item key="2" icon={<AppstoreOutlined />}>
      <Link to="/dashboard/programlearningoutcomes">Програмні результати навчання</Link>
    </Menu.Item>
    <Menu.Item key="4" icon={<AppstoreOutlined />}>
      <Link to="">Стандарт міністерства</Link>
    </Menu.Item>
  </Menu>
  
);

export const UniversityMenu = (
  <Menu mode="inline" inlineIndent={20}>
    <SubMenu key="sub1" icon={<UserOutlined />} title="Saved reports">
      <Menu.Item key="4">Current month</Menu.Item>
      <Menu.Item key="5">Last quarter</Menu.Item>
      <Menu.Item key="6">Year-end sale</Menu.Item>
    </SubMenu>
  </Menu>
);
