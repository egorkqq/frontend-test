import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './createRootReducer';
import rootSaga from './rootSaga';

const logMiddleware = ({ getState }) => (next) => (action) => {
  // eslint-disable-next-line no-console
  if (process.env.NODE_ENV === 'development')
    console.log(action.type, getState());
  return next(action);
};

const configureStore = (
  initialState,
  additionalMiddlewares = [],
  composeEnhancers = compose
) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, logMiddleware, ...additionalMiddlewares];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
