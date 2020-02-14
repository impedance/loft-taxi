import * as constants from './constants';
import { createAction, combineReducers } from 'redux-actions';

const initialState = {
  isAuth: false,
  isLoading: false,
  error: false,
  data: {},
};

export const actions = {
  logIn: createAction(constants.LOG_IN),
  loginSuccess: createAction(constants.LOG_IN_SUCCESS),
  loginFailure: createAction(constants.LOG_IN_FAILURE),
};

const isAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOG_IN:
      return { ...state, isLoading: true, error: false };
    case constants.LOG_IN_SUCCESS:
      localStorage.setItem('isAuth', JSON.stringify(true));
      return { ...state, isLoading: false, error: false, isAuth: true };
    case constants.LOG_IN_FAILURE:
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
};

const appReducer = combineReducers({ isAuthReducer });

export default appReducer;
