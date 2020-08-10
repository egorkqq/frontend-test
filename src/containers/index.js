import appBootstrapSaga from './AppBootstrap/saga';

const uiSagas = [appBootstrapSaga];

const UI_ROOT_STORE_SLICE_NAME = 'ui';

const reducer = () => ({});

export { reducer, uiSagas, UI_ROOT_STORE_SLICE_NAME };
