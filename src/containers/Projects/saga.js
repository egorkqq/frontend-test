import { all, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { BOOTSTRAP } from './constants';
import {
  bootstrapDone,
  fetchProjects,
  fetchProjectsSuccess,
  fetchProjectsError,
} from './actions';

function* getProjects() {
  const request = {
    url:
      'https://gist.githubusercontent.com/egorkqq/55278a8af9d70246cf828a4c42fd7757/raw/e7a4b7b6bb5e0ea61eac65ad7aad700b23170cfc/projects.json',
  };

  yield put(fetchProjects());
  const response = yield call(axios, request);

  if (response.error) {
    yield put(fetchProjectsError());
    return null;
  }

  yield put(fetchProjectsSuccess());

  return response.data;
}

function* bootstrap() {
  const response = yield call(getProjects);

  if (!response) return;

  yield put(bootstrapDone(response.projects));
}

export default function* projectsSaga() {
  yield all([takeLatest(BOOTSTRAP, bootstrap)]);
}
