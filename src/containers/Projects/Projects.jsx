import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectsComponent from '../../components/Projects/Projects';
import { bootstrap, addProject } from './actions';
import { loadingSelector, listSelector } from './selectors';

const Projects = () => {
  const dispatch = useDispatch();

  const loading = useSelector(loadingSelector);
  const projects = useSelector(listSelector);

  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    dispatch(bootstrap());
  }, [dispatch]);

  const onSubmitProject = useCallback(
    (data) => {
      dispatch(addProject(data));
    },
    [dispatch]
  );

  return (
    <ProjectsComponent
      setModalOpened={setModalOpened}
      modalOpened={modalOpened}
      loading={loading}
      projects={projects}
      onSubmitProject={onSubmitProject}
    />
  );
};

export default Projects;
