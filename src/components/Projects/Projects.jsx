import React from 'react';
import './Projects.sass';
import { Tabs } from 'antd';
import Header from './Header';
import List from './List';
import Loader from '../Loader/Loader';

const { TabPane } = Tabs;

const Projects = (props) => {
  const { modalOpened, setModalOpened, loading, projects } = props;

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Tabs defaultActiveKey="1">
        <TabPane className="Projects__Tab" tab="Список проектов" key="1">
          <List
            projects={projects}
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </TabPane>
        <TabPane
          className="Projects__Tab"
          tab="Дорожные карты"
          disabled
          key="2"
        />
      </Tabs>
    </>
  );
};

export default Projects;
