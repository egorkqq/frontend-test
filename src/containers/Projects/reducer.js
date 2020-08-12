/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
import produce from 'immer';

import * as types from './constants';

export const initialState = {
  list: [],
  loading: false,
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
        draft.list = payload;

        break;
      }
    }
  });
