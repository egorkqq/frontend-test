import React from 'react';
import { Button } from 'antd';
import Card from './Card';
import ProjectModal from '../ProjectModal/ProjectModal';

const List = () => {
  return (
    <>
      <div className="Projects__ListWrapper">
        <h2>Список проектов</h2>
        <Button className="Projects__Button" type="primary" size="large">
          Добавить проект
        </Button>
        <ProjectModal />
      </div>
      <div className="Projects__Cards">
        <Card />
        <Card />
      </div>
    </>
  );
};

export default List;
