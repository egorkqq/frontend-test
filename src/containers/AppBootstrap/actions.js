import {
  BOOTSTRAP,
  BOOTSTRAP_DONE,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  EXIT,
} from './constants';

export const bootstrap = () => ({
  type: BOOTSTRAP,
});

export const bootstrapDone = (username) => ({
  type: BOOTSTRAP_DONE,
  payload: {
    username,
  },
});

export const signIn = (login, password) => ({
  type: LOGIN,
  payload: {
    login,
    password,
  },
});

export const signInSuccess = (username) => ({
  type: LOGIN_SUCCESS,
  payload: {
    username,
  },
});

export const signInError = () => ({
  type: LOGIN_ERROR,
});

export const exit = () => ({
  type: EXIT,
});
