import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import { default as HeaderComponent } from './Header';
import './AppLayout.sass';

const { Header, Sider, Content } = Layout;

const AppLayout = (props) => {
  const { sider = <Sidebar />, header = <HeaderComponent />, children } = props;

  return (
    <Layout>
      <Sider className="AppLayout__Sidebar">{sider}</Sider>
      <Layout>
        <Header className="AppLayout__Header">{header}</Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
