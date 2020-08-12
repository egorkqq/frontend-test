import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './createRootReducer';
import rootSaga from './rootSaga';

const configureStore = (
  initialState,
  additionalMiddlewares = [],
  composeEnhancers = compose
) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, ...additionalMiddlewares];

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
