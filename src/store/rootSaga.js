import { all } from 'redux-saga/effects';

import { uiSagas } from '../containers';

export default function* rootSaga() {
  yield all(uiSagas.map((saga) => saga()));
}
