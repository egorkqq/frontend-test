import { createSelector } from 'reselect';
import uiRootSelector from '../uiRootSelector';

import { STORE_SLICE_NAME } from './constants';

export const projectsSelector = createSelector(
  uiRootSelector,
  (uiRoot) => uiRoot[STORE_SLICE_NAME]
);

export const listSelector = createSelector(
  projectsSelector,
  (projects) => projects.list
);

export const loadingSelector = createSelector(
  projectsSelector,
  (projects) => projects.loading
);
