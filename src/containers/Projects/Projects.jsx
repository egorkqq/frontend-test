import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectsComponent from '../../components/Projects/Projects';
import { bootstrap } from './actions';
import { loadingSelector, listSelector } from './selectors';

const Projects = () => {
  const dispatch = useDispatch();

  const loading = useSelector(loadingSelector);
  const projects = useSelector(listSelector);

  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    dispatch(bootstrap());
  }, [dispatch]);

  return (
    <ProjectsComponent
      setModalOpened={setModalOpened}
      modalOpened={modalOpened}
      loading={loading}
      projects={projects}
    />
  );
};

export default Projects;
