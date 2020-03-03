import { rootReducer } from '../reducers';
import rootSaga from '../saga';
import { createStore, compose, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleWare.run(rootSaga);
