import { combineReducers } from 'redux';

import appBootstrapReducer from './AppBootstrap/reducer';
import { STORE_SLICE_NAME as APP_BOOTSTRAP_STORE_SLICE_NAME } from './AppBootstrap/constants';

const uiRootReducer = combineReducers({
  [APP_BOOTSTRAP_STORE_SLICE_NAME]: appBootstrapReducer,
});

export default uiRootReducer;
