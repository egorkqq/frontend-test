import {
  BOOTSTRAP,
  BOOTSTRAP_DONE,
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  ADD_PROJECT,
} from './constants';

export const bootstrap = () => ({
  type: BOOTSTRAP,
});

export const bootstrapDone = (data) => ({
  type: BOOTSTRAP_DONE,
  payload: {
    ...data,
  },
});

export const fetchProjects = () => ({
  type: GET_PROJECTS,
});

export const fetchProjectsSuccess = () => ({
  type: GET_PROJECTS_SUCCESS,
});

export const fetchProjectsError = () => ({
  type: GET_PROJECTS_ERROR,
});

export const addProject = (data) => ({
  type: ADD_PROJECT,
  payload: data,
});
