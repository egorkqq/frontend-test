import React, { useCallback } from 'react';
import { Button } from 'antd';
import Card from './Card';
import ProjectModal from '../ProjectModal/ProjectModal';

const List = (props) => {
  const { modalOpened, setModalOpened, projects, onSubmitProject } = props;

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
        <ProjectModal
          setVisible={setModalOpened}
          visible={modalOpened}
          onSubmit={onSubmitProject}
        />
      </div>
      <div className="Projects__Cards">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            image={project.image}
            category={project.category}
            status={project.status}
            dates={project.dates}
            owner={project.owner}
            administrator={project.administrator}
            progress={project.progress}
          />
        ))}
      </div>
    </>
  );
};

export default List;
