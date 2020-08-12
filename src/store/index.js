import { compose } from 'redux';
import configureStore from './configureStore';

const initialState = {};

const logMiddleware = ({ getState }) => (next) => (action) => {
  // eslint-disable-next-line no-console
  if (process.env.NODE_ENV === 'development')
    console.log(action.type, getState());
  return next(action);
};

const reduxDevToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = reduxDevToolsCompose
  ? reduxDevToolsCompose({ shouldHotReload: false })
  : compose;

const store = configureStore(initialState, [logMiddleware], composeEnhancers);

export default store;
