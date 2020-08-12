import { combineReducers } from 'redux';

import appBootstrapReducer from './AppBootstrap/reducer';
import { STORE_SLICE_NAME as APP_BOOTSTRAP_STORE_SLICE_NAME } from './AppBootstrap/constants';

import projectsReducer from './Projects/reducer';
import { STORE_SLICE_NAME as PROJECTS_STORE_SLICE_NAME } from './Projects/constants';

const uiRootReducer = combineReducers({
  [APP_BOOTSTRAP_STORE_SLICE_NAME]: appBootstrapReducer,
  [PROJECTS_STORE_SLICE_NAME]: projectsReducer,
});

export default uiRootReducer;
