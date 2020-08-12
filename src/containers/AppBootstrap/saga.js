import { all, takeLatest, put, delay } from 'redux-saga/effects';
import { BOOTSTRAP, LOGIN, EXIT } from './constants';
import { bootstrapDone, signInSuccess, signInError } from './actions';

function* bootstrap() {
  const login = localStorage.getItem('login');
  const password = localStorage.getItem('password');

  if (
    password === process.env.REACT_APP__PASSWORD &&
    login === process.env.REACT_APP__LOGIN
  ) {
    yield put(bootstrapDone(login));
    return;
  }

  yield put(bootstrapDone());
}

function* login({ payload }) {
  const { login, password } = payload;
  yield delay(1500);

  if (
    password === process.env.REACT_APP__PASSWORD &&
    login === process.env.REACT_APP__LOGIN
  ) {
    yield localStorage.setItem('login', login);
    yield localStorage.setItem('password', password);

    yield put(signInSuccess(login));
    return;
  }

  yield put(signInError());
}

function* exit() {
  yield localStorage.setItem('login', null);
  yield localStorage.setItem('password', null);
}

export default function* appBootstrapSaga() {
  yield all([
    takeLatest(BOOTSTRAP, bootstrap),
    takeLatest(LOGIN, login),
    takeLatest(EXIT, exit),
  ]);
}
