import { all, takeLatest } from 'redux-saga/effects';

export default function* appBootstrapSaga() {
  yield all([takeLatest('ff', () => {})]);
}
