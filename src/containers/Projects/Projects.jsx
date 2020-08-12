import React, { useState } from 'react';
import ProjectsComponent from '../../components/Projects/Projects';

const Projects = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <ProjectsComponent
      setModalOpened={setModalOpened}
      modalOpened={modalOpened}
    />
  );
};

export default Projects;
