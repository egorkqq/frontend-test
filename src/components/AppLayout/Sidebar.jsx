import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import logo from '../../assets/mimc-logo-small.png';

const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <>
      <img className="AppLayout__SidebarLogo" alt="MIMC" src={logo} />
      <Menu
        className="AppLayout__SidebarMenu"
        mode="inline"
        defaultSelectedKeys={['4']}
      >
        <Menu.Item
          className="AppLayout__SidebarMenuItem"
          icon={<AppstoreOutlined />}
        >
          Задачи и работы
        </Menu.Item>
        <Menu.Item
          className="AppLayout__SidebarMenuItem"
          icon={<AppstoreOutlined />}
        >
          Проекты
        </Menu.Item>
        <Menu.Item
          className="AppLayout__SidebarMenuItem"
          icon={<AppstoreOutlined />}
        >
          Календарь
        </Menu.Item>
        <SubMenu
          className="AppLayout__SidebarMenuItem"
          key="sub1"
          icon={<AppstoreOutlined />}
          title="Возможности"
        />
      </Menu>
    </>
  );
};

export default Sidebar;
