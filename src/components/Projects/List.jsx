import React, { useCallback } from 'react';
import { Button } from 'antd';
import Card from './Card';
import ProjectModal from '../ProjectModal/ProjectModal';

const List = (props) => {
  const { modalOpened, setModalOpened } = props;

  const onClick = useCallback(() => {
    setModalOpened(true);
  }, [modalOpened]);

  return (
    <>
      <div className="Projects__ListWrapper">
        <h2>Список проектов</h2>
        <Button
          onClick={onClick}
          className="Projects__Button"
          type="primary"
          size="large"
        >
          Добавить проект
        </Button>
        <ProjectModal setVisible={setModalOpened} visible={modalOpened} />
      </div>
      <div className="Projects__Cards">
        <Card />
        <Card />
      </div>
    </>
  );
};

export default List;
