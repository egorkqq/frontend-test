import React, { useCallback } from 'react';
import { Button } from 'antd';
import Card from './Card';
import ProjectModal from '../ProjectModal/ProjectModal';

const List = (props) => {
  const { modalOpened, setModalOpened, projects } = props;

  const onClick = useCallback(() => {
    setModalOpened(true);
  }, [setModalOpened]);

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
        {Object.keys(projects).map((key) => {
          const project = projects[key];

          return (
            <Card
              key={key}
              title={project.title}
              image={project.image}
              category={project.category}
              status={project.status}
              dates={project.dates}
              owner={project.owner}
              administrator={project.administrator}
              progress={project.progress}
            />
          );
        })}
      </div>
    </>
  );
};

export default List;
