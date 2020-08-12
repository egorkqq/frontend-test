import { createSelector } from 'reselect';
import uiRootSelector from '../uiRootSelector';

import { STORE_SLICE_NAME } from './constants';

export const appBootstrapSelector = createSelector(
  uiRootSelector,
  (uiRoot) => uiRoot[STORE_SLICE_NAME]
);

export const usernameSelector = createSelector(
  appBootstrapSelector,
  (appBootstrap) => appBootstrap.username || {}
);

export const loadingSelector = createSelector(
  appBootstrapSelector,
  (appBootstrap) => appBootstrap.loading
);

export const signedInSelector = createSelector(
  appBootstrapSelector,
  (appBootstrap) => appBootstrap.signedIn
);

export const loginErrorSelector = createSelector(
  appBootstrapSelector,
  (appBootstrap) => appBootstrap.loginError
);
