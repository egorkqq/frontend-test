import React from 'react';
import { Tabs } from 'antd';
import List from './List';

const { TabPane } = Tabs;

const Header = () => {
  return (
    <>
      <h1 className="Projects__Title">Проекты</h1>
      <Tabs defaultActiveKey="1">
        <TabPane className="Projects__Tab" tab="Список проектов" key="1">
          <List />
        </TabPane>
        <TabPane
          className="Projects__Tab"
          tab="Дорожные карты"
          disabled
          key="2"
        ></TabPane>
      </Tabs>
    </>
  );
};

export default Header;
