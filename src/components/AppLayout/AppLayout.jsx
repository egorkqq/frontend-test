import React, { memo } from 'react';
import { Layout } from 'antd';
import './AppLayout.sass';

const { Header, Sider, Content } = Layout;

const AppLayout = (props) => {
  const { sider, header, children } = props;

  return (
    <Layout>
      <Sider className="AppLayout__Sidebar">{sider}</Sider>
      <Layout>
        <Header className="AppLayout__Header">{header}</Header>
        <Content className="AppLayout__Content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default memo(AppLayout);
