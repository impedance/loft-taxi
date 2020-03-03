import { takeLatest, call, put } from 'redux-saga/effects';
import { actions } from './duck';

import { fetchLogin } from '../../core/utils/api';
import * as constants from './constants';

function* fetchLoginWorker(action) {
  const { payload } = action;
  try {
    const response = yield call(fetchLogin, payload);
    yield put(actions.loginSuccess(response));
  } catch (error) {
    yield put(actions.loginFailure);
  }
}

export default function* logInWatcher() {
  yield takeLatest(constants.LOG_IN, fetchLoginWorker);
}
