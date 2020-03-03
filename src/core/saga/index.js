import { all } from 'redux-saga/effects';
import logInSaga from '../../core/store/saga';

export default function* rootSaga() {
  yield all([logInSaga()]);
}
