/* eslint-disable default-case */
import produce from 'immer';

import * as types from './constants';

export const initialState = {
  signedIn: false,
  loading: false,
  username: undefined,
  loginError: false,
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload = {} } = action;

    switch (type) {
      case types.BOOTSTRAP: {
        draft.loading = true;

        break;
      }

      case types.BOOTSTRAP_DONE: {
        draft.loading = false;

        if (payload.username) {
          draft.signedIn = true;
          draft.username = payload.username;
        }

        break;
      }

      case types.LOGIN: {
        draft.loading = true;
        draft.loginError = false;

        break;
      }

      case types.LOGIN_SUCCESS: {
        draft.loading = false;
        draft.signedIn = true;
        draft.username = payload.username;

        break;
      }

      case types.LOGIN_ERROR: {
        draft.loading = false;
        draft.signedIn = false;
        draft.loginError = true;

        break;
      }

      case types.EXIT: {
        draft.signedIn = false;

        break;
      }
    }
  });
