import { combineReducers } from 'redux';

import { UI_ROOT_STORE_SLICE_NAME, reducer as uiReducer } from '../containers';

const createRootReducer = () =>
  combineReducers({
    [UI_ROOT_STORE_SLICE_NAME]: uiReducer,
  });

export default createRootReducer;
